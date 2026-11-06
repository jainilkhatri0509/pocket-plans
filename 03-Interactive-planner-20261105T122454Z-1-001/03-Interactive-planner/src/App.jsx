import React, { useEffect, useState } from 'react';
import { CampusMap } from './CampusMap.jsx';
import { GroupPoll } from './GroupPoll.jsx';
import { Planner } from './Planner.jsx';
import { PlanDialog } from './PlanDialog.jsx';
import { Icon } from './Icons.jsx';
import { ActivityCard } from './ActivityCard.jsx';
import { activities } from './activities.js';
import { defaults, matches } from './match.js';
import { readPocket, writePocket } from './storage.js';

function currentPage() {
  const route=window.location.hash.slice(1);
  return ['ideas','saved','group'].includes(route) || route.startsWith('group/') ? route : 'planner';
}
const links=[['planner','Break planner'],['ideas','All ideas'],['group','Group poll'],['saved','Saved']];
const campusPicks = ['chai-loop','garba-steps','library-sampler'].map(id=>activities.find(a=>a.id===id));
export function App() {
  const [page,setPage]=useState(currentPage);
  const [prefs,setPrefs]=useState(defaults);
  const [ticket,setTicket]=useState(null);
  const [pocket,setPocket]=useState(()=>readPocket(activities));
  const [filter,setFilter]=useState('All');
  const [query,setQuery]=useState('');
  const [warning,setWarning]=useState(false);
  useEffect(()=>{
    function navigate(){setPage(currentPage());setTicket(null);window.scrollTo(0,0);}
    window.addEventListener('hashchange',navigate);
    return ()=>window.removeEventListener('hashchange',navigate);
  },[]);
  useEffect(()=>{setWarning(!writePocket(pocket));},[pocket]);
  function toggleSave(id) {
    setPocket(old=>({...old,saved:old.saved.includes(id)?old.saved.filter(x=>x!==id):[...old.saved,id]}));
  }
  function check(id,i) {
    setPocket(old=>{
      const list=old.checks[id]||[];
      return {...old,checks:{...old.checks,[id]:list.includes(i)?list.filter(x=>x!==i):[...list,i]}};
    });
  }
  const open=items=>setTicket({items,index:0});
  const renderCards=list=><div className="card-grid">{list.map(a=><ActivityCard key={a.id} activity={a} saved={pocket.saved.includes(a.id)} onSave={()=>toggleSave(a.id)} onOpen={()=>open([a])}/>)}</div>;
  const savedPlans=activities.filter(a=>pocket.saved.includes(a.id));
  const searchWords=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const visibleIdeas=activities.filter(a=>{
    const words=[a.title,a.tag,a.description,...a.moods].join(' ').toLowerCase();
    return (filter==='All'||a.moods.includes(filter.toLowerCase())) && searchWords.every(word=>words.includes(word));
  });
  const ticketId=ticket?.items[ticket.index]?.id;
  return <>
    <a className="skip" href="#main-content" onClick={e=>{e.preventDefault();document.getElementById('main-content').focus();}}>Skip to content</a>
    <header><div className="shell header-row"><a className="brand" href="#planner"><img src="/pocket.svg" alt=""/>Pocket Plans<span>.</span></a>
      <nav aria-label="Main navigation">{links.map(([key,label])=><a key={key} href={'#'+key} aria-current={page.split('/')[0]===key?'page':undefined}>{key==='saved'&&<Icon name="bookmark" size={15}/>} {label}{key==='saved'&&pocket.saved.length>0&&<b>{pocket.saved.length}</b>}</a>)}</nav>
    </div></header>
    <main className="shell" id="main-content" tabIndex={-1}>
    {page==='planner'?<>
      <section className="hero"><div className="hero-copy"><div className="eyebrow hero-label"><span/> A STUDENT'S FIELD GUIDE</div>
        <h1>Small breaks,<br/><em>big detours.</em></h1>
        <p>Turn the gap between classes into a little adventure.<br className="desktop-br"/> Your time, your budget, your kind of break.</p>
      </div><CampusMap/></section>
      <Planner value={prefs} onChange={setPrefs} onFind={()=>open(matches(activities,prefs))}/>
      <section className="picks"><div className="section-heading"><h2>Campus picks</h2><a className="text-btn" href="#ideas">Browse all ideas <Icon name="arrow" size={17}/></a></div>
      {renderCards(campusPicks)}</section>
    </>:page==='ideas'?<section className="library"><p className="eyebrow"><Icon name="compass" size={16}/> THE FIELD GUIDE</p><h1>All break ideas</h1><p>Got ten minutes after a lab, or lunch with the whole group? Find a break that fits. Prices are estimates per person.</p>
      <label className="idea-search">Search ideas<input type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Try garba, tiffin or library"/></label>
      <div className="filters" aria-label="Filter ideas by mood">{['All','Calm','Social','Creative','Energetic','Curious'].map(m=><button key={m} aria-pressed={filter===m} onClick={()=>setFilter(m)}>{m}</button>)}</div>
      <p className="result-count" role="status">{visibleIdeas.length} {visibleIdeas.length===1?'idea':'ideas'}</p>
      {visibleIdeas.length?renderCards(visibleIdeas):<div className="empty"><h2>No breaks found</h2><p>Try another word or clear your mood filter.</p><button className="primary" onClick={()=>{setFilter('All');setQuery('');}}>Show all ideas</button></div>}</section>
      :page.split('/')[0]==='group'?<GroupPoll route={page} onOpen={open}/>
      :<section className="library"><p className="eyebrow"><Icon name="bookmark" size={16}/> YOUR POCKET</p><h1>Saved plans</h1><p>Your bookmarked breaks and checklist progress stay in this browser.</p>
      {savedPlans.length?renderCards(savedPlans):<div className="empty"><Icon name="bookmark" size={32}/><h2>Your pocket is empty</h2><p>Tap the bookmark on a break you’d like to try.</p><a className="primary" href="#ideas">Browse ideas <Icon name="arrow" size={17}/></a></div>}</section>}
    {warning&&<p role="status">Browser storage is unavailable. Your changes will last until you close or reload this page.</p>}
    </main>
    <footer className="shell"><span>Pocket Plans</span><span>Campus break planner</span></footer>
    {ticket&&<PlanDialog items={ticket.items} index={ticket.index} onNext={()=>setTicket(t=>({...t,index:(t.index+1)%t.items.length}))} onClose={()=>setTicket(null)} saved={pocket.saved.includes(ticketId)} onSave={toggleSave} checked={pocket.checks[ticketId]||[]} onCheck={check}/>}
  </>;
}
