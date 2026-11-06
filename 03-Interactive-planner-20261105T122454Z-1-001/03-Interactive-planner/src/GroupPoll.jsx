import React, { useEffect, useRef, useState } from 'react';
import { activities } from './activities.js';
import { price } from './match.js';
import { deviceId, pollIdPattern, requestPoll } from './pollApi.js';
import { Icon } from './Icons.jsx';

const byId = new Map(activities.map(a => [a.id, a]));
const groupIdeas = activities.filter(a => a.company !== 'solo');
const friendlyError = e => e instanceof TypeError || e.name === 'TimeoutError'
  ? 'The database is taking a moment. Check your connection and try again.' : e.message;

function NewPoll() {
  const [choices, setChoices] = useState(['chai-loop', 'tiffin-table']);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const attempt = useRef(null);
  function toggle(id) {
    setError('');
    attempt.current = null;
    setChoices(old => old.includes(id) ? old.filter(x => x !== id) : [...old, id]);
  }
  async function create() {
    setBusy(true);
    setError('');
    try {
      attempt.current ||= crypto.randomUUID();
      const poll = await requestPoll('create', {p_poll:attempt.current, p_device:deviceId(), p_choices:choices});
      window.location.hash = 'group/' + poll.id;
    } catch (e) { setError(friendlyError(e)); }
    finally { setBusy(false); }
  }
  return <section className="library">
    <p className="eyebrow"><Icon name="people" size={16}/> GROUP BREAK</p>
    <h1>Put it to a vote.</h1>
    <p>Shortlist two or three breaks. Send one link to your friends and see which plan wins.</p>
    <fieldset className="poll-list" disabled={busy}><legend>Pick your shortlist · {choices.length}/3</legend>
      {groupIdeas.map(a => <label className="poll-choice" key={a.id}>
        <input type="checkbox" checked={choices.includes(a.id)} disabled={!choices.includes(a.id) && choices.length===3} onChange={()=>toggle(a.id)}/>
        <span>{a.title}<small>{a.minutes} min · {price(a.cost)} per person</small></span>
      </label>)}
    </fieldset>
    <button className="primary" disabled={busy || choices.length<2} onClick={create}>{busy?'Creating…':'Create poll link'} <Icon name="arrow" size={16}/></button>
    {error && <p role="alert">{error}</p>}
  </section>;
}

function Vote({id,onOpen}) {
  const [poll,setPoll] = useState(null);
  const [error,setError] = useState('');
  const [busy,setBusy] = useState(false);
  const [notice,setNotice] = useState('');
  const [retry,setRetry] = useState(0);
  const version = useRef(0);
  useEffect(()=>{
    let active = true;
    async function refresh() {
      const seq = ++version.current;
      try {
        const data = await requestPoll('read',{p_poll:id});
        if(active && seq===version.current){setPoll(data);setError('');}
      } catch(e) { if(active && seq===version.current)setError(friendlyError(e)); }
    }
    refresh();
    const timer = setInterval(refresh,8000);
    return ()=>{active=false;clearInterval(timer);};
  },[id,retry]);
  async function vote(choice) {
    setBusy(true);
    setNotice('');
    try {
      const result=await requestPoll('vote',{p_poll:id,p_device:deviceId(),p_choice:choice});
      version.current++;
      setPoll(result);setError('');
      setNotice('Your vote is for ' + byId.get(choice).title + '.');
    } catch(e){setError(friendlyError(e));}
    finally{setBusy(false);}
  }
  const url = window.location.href;
  const total = poll ? Object.values(poll.counts).reduce((a,b)=>a+b,0) : 0;
  const high = poll ? Math.max(...poll.choices.map(x=>poll.counts[x]||0)) : 0;
  const leaders = poll?.choices.filter(x=>(poll.counts[x]||0)===high) || [];
  return <section className="library">
    <p className="eyebrow"><Icon name="people" size={16}/> GROUP BREAK</p><h1>Which break wins?</h1>
    <p>One vote per browser. Pick again to change yours. Totals refresh every eight seconds.</p>
    {error && <p role="alert">{error} <button className="text-btn" onClick={()=>setRetry(x=>x+1)}>Retry</button></p>}
    {!poll && !error && <p role="status">Getting the shortlist…</p>}
    {poll && <div className="poll-result"><div className="section-heading"><h2>{total===0?'First vote is yours':leaders.length===1?'Leading: '+(byId.get(leaders[0])?.title||'Break'):'Tied for the lead'}</h2><span>{total} {total===1?'vote':'votes'}</span></div>
      {poll.choices.map(id=>{
        const a=byId.get(id), count=poll.counts[id]||0;
        if(!a)return null;
        return <div className="ballot-row" key={id}><div><strong>{a.title}</strong><small>{a.minutes} min · {price(a.cost)}</small></div>
          <span>{count}</span><button disabled={busy} onClick={()=>vote(id)}>Vote for {a.title}</button>
          <div className="vote-bar"><i style={{width:(total?count/total*100:0)+'%'}}/></div></div>;
      })}
      {total>0 && leaders.length===1 && byId.has(leaders[0]) && <button className="text-btn" onClick={()=>onOpen([byId.get(leaders[0])])}>Open leading plan <Icon name="arrow" size={16}/></button>}
      <p>Closes {new Date(poll.expires).toLocaleString([], {month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})}.</p>
      <label className="idea-search">Share with your group<input readOnly value={url} onFocus={e=>e.target.select()}/></label>
      <button className="primary" onClick={async()=>{try{await navigator.clipboard.writeText(url);setNotice('Poll link copied.');}catch{setNotice('Select the link above and copy it.');}}}>Copy poll link</button>
      <p role="status">{notice}</p></div>}
    <a href="#group" className="text-btn">Start another poll</a>
  </section>;
}
export function GroupPoll({route,onOpen}) {
  if(route==='group')return <NewPoll/>;
  const id=route.slice('group/'.length);
  if(!pollIdPattern.test(id))return <section className="library"><h1>Invalid poll link</h1><a href="#group">Create a group poll</a></section>;
  return <Vote key={id} id={id} onOpen={onOpen}/>;
}

