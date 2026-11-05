import React from 'react';
import { CampusMap } from './CampusMap.jsx';

export function App() {
  return <><header><div className="shell header-row"><div className="brand"><img src="/pocket.svg" alt=""/>Pocket Plans<span>.</span></div></div></header>
    <main className="shell"><section className="hero"><div className="hero-copy">
      <div className="eyebrow hero-label"><span/> A STUDENT'S FIELD GUIDE</div>
      <h1>Small breaks,<br/><em>big detours.</em></h1><p>Turn the gap between classes into a little adventure.</p>
    </div><CampusMap/></section></main></>;
}

