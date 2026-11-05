import React from 'react';
import { PlanArt } from './PlanArt.jsx';
import { Icon } from './Icons.jsx';
import { price } from './match.js';

export function ActivityCard({activity, saved, onSave, onOpen}) {
  return <article className="activity-card">
    <div className={`card-stage art-${activity.art}`}>
      <span className="art-label">{activity.tag}</span>
      <PlanArt type={activity.art}/>
      <button className="bookmark" aria-label={`${saved?'Unsave':'Save'} ${activity.title}`} aria-pressed={saved} onClick={onSave}><Icon name="bookmark" size={17} filled={saved}/></button>
    </div>
    <div className="card-body">
      <h3><button onClick={onOpen}>{activity.title}<Icon name="arrow" size={18}/></button></h3>
      <p className="card-description">{activity.description}</p>
      <div className="meta"><span><Icon name="clock" size={15}/>{activity.minutes} min</span><i/> <span><Icon name="wallet" size={15}/>{price(activity.cost)}</span></div>
    </div>
  </article>
}
