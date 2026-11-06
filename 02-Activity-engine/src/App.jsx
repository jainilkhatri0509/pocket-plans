import React from 'react';
import { CampusMap } from './CampusMap.jsx';

import { activities } from './activities.js';
import { matches, defaults, price } from './match.js';
import { PlanArt } from './PlanArt.jsx';

export function App() {
  return <><header><div className="shell header-row"><div className="brand"><img src="/pocket.svg" alt=""/>Pocket Plans<span>.</span></div></div></header>
    <main className="shell"><section className="hero"><div className="hero-copy">
      <div className="eyebrow hero-label"><span/> A STUDENT'S FIELD GUIDE</div>
      <h1>Small breaks,<br/><em>big detours.</em></h1><p>Turn the gap between classes into a little adventure.</p>
    </div><CampusMap/></section>
      <section className="picks"><div className="section-heading"><h2>30-minute campus picks</h2></div>
        <div className="card-grid">{matches(activities, defaults).map(a=>
          <article key={a.id} className="activity-card"><div className={'card-stage art-'+a.art}><PlanArt type={a.art}/></div>
            <div className="card-body"><h3>{a.title}</h3><p>{a.description}</p><p className="meta">{a.minutes} min · {price(a.cost)}</p></div>
          </article>)}</div>
      </section></main></>;
}

