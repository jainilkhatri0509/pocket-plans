begin;
create schema if not exists pocket_private;
revoke all on schema pocket_private from public, anon, authenticated;

create table if not exists pocket_private.polls (
  id uuid primary key,
  owner_hash bytea not null,
  choices text[] not null,
  created_at timestamptz not null default now()
);
create index if not exists pocket_polls_owner_idx on pocket_private.polls(owner_hash, created_at);
create table if not exists pocket_private.ballots (
  poll_id uuid references pocket_private.polls(id) on delete cascade,
  voter_hash bytea not null,
  choice text not null,
  primary key (poll_id, voter_hash)
);
alter table pocket_private.polls enable row level security;
alter table pocket_private.ballots enable row level security;
revoke all on pocket_private.polls,pocket_private.ballots from public,anon,authenticated;

create or replace function public.pp_read(p_poll uuid) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare p pocket_private.polls; tally jsonb;
begin
  select * into p from pocket_private.polls where id=p_poll and created_at > now()-interval '1 day';
  if not found then raise exception 'This poll has expired or the link is incorrect.'; end if;
  select jsonb_object_agg(choice, votes) into tally from
    (select choice,count(*) as votes from pocket_private.ballots where poll_id=p.id group by choice) as totals;
  return jsonb_build_object('id',p.id,'choices',p.choices,'counts',coalesce(tally,'{}'::jsonb),'expires',p.created_at+interval '1 day');
end $$;

create or replace function public.pp_create(p_poll uuid,p_device uuid,p_choices text[]) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare owner_key bytea := sha256(convert_to(p_device::text,'UTF8')); previous pocket_private.polls;
begin
  if p_device is null or p_poll is null or p_choices is null or cardinality(p_choices) not between 2 and 3
    or (select count(distinct item) from unnest(p_choices) item) <> cardinality(p_choices)
    or exists(select 1 from unnest(p_choices) item where item !~ '^[a-z0-9-]{1,40}$')
    then raise exception 'Choose two or three different breaks.'; end if;
  perform pg_advisory_xact_lock(hashtextextended(p_device::text,0));
  select * into previous from pocket_private.polls where id=p_poll;
  if found then
    if previous.owner_hash=owner_key and previous.choices=p_choices then return public.pp_read(p_poll); end if;
    raise exception 'Choose a fresh poll link.';
  end if;
  if (select count(*) from pocket_private.polls where owner_hash=owner_key and created_at > now()-interval '1 day')>=12
    then raise exception 'This browser has started 12 polls today. Try again tomorrow.'; end if;
  insert into pocket_private.polls(id,owner_hash,choices) values (p_poll,owner_key,p_choices);
  return public.pp_read(p_poll);
end $$;

create or replace function public.pp_vote(p_poll uuid,p_device uuid,p_choice text) returns jsonb
language plpgsql security definer set search_path = '' as $$
begin
  if p_device is null or not exists(select 1 from pocket_private.polls where id=p_poll and created_at>now()-interval '1 day' and p_choice=any(choices))
    then raise exception 'This choice is unavailable or the poll has closed.'; end if;
  insert into pocket_private.ballots(poll_id,voter_hash,choice) values(p_poll,sha256(convert_to(p_device::text,'UTF8')),p_choice)
    on conflict(poll_id,voter_hash) do update set choice=excluded.choice;
  return public.pp_read(p_poll);
end $$;
revoke all on function public.pp_read(uuid),public.pp_create(uuid,uuid,text[]),public.pp_vote(uuid,uuid,text) from public,anon,authenticated;
grant execute on function public.pp_read(uuid),public.pp_create(uuid,uuid,text[]),public.pp_vote(uuid,uuid,text) to anon,authenticated;
notify pgrst, 'reload schema';
commit;
