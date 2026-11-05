import React from 'react';

// A little park, built from reusable print-style shapes.
function Tree({x,y,scale=1,round=false}) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <ellipse cx="3" cy="2" rx="17" ry="4" fill="#afc398"/>
    {round ? <path d="M-4-13C-28-10-29-31-17-36c-8-17 15-31 24-16 18-7 30 17 15 26 1 10-10 16-26 13Z" fill="#699579" stroke="#355b49" strokeWidth="2"/> :
    <path d="m0-60-12 22h5l-14 20h8l-10 10h43L11-21h7L7-38h5z" fill="#517b61" stroke="#305746" strokeWidth="2"/>}
    <path d="M0 0v-37m0 16-9-8m9 2 9-9" fill="none" stroke="#35523e" strokeWidth="2.5"/>
  </g>
}
function Grass({x,y}) {return <path transform={`translate(${x} ${y})`} d="m0 0-2-5m5 5 1-8m2 8 4-4" fill="none" stroke="#91a57b" strokeWidth="1.6" strokeLinecap="round"/>}
export function CampusMap() {
  return <div className="map-frame"><svg role="img" aria-label="Illustrated trail across campus, passing a chai stall, trees and a park bench" viewBox="0 0 570 315">
    <defs>
      <pattern id="mapgrid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0v24" stroke="#b4b79a" fill="none" strokeWidth=".8"/></pattern>
      <pattern id="tile" width="15" height="10" patternUnits="userSpaceOnUse"><path d="M0 9h15M5 0v9" stroke="#be653d" fill="none" strokeWidth="1"/></pattern>
    </defs>
    <rect width="570" height="315" fill="#eaeacf"/><rect width="570" height="315" fill="url(#mapgrid)" opacity=".68"/>
    <g fill="#d1deb4" stroke="#bbcb9f" strokeWidth="1.4">
      <path d="M-10 135C17 82 103 97 132 58s60-38 91-55H34L-7 57Z"/><path d="M196 315c-6-54 37-88 96-86 49-1 65-40 110-52 60-15 90 13 168-12v107l-138 43z"/><path d="M318 8c-1 28 25 36 88 36s87 21 135-7l29-37z"/>
    </g>
    <path d="M-15 219c70 20 154-28 200-16 65 19 43 68 158 69 66 1 108-32 240-22" stroke="#b3c4a7" fill="none" strokeWidth="39"/>
    <path d="M-15 219c70 20 154-28 200-16 65 19 43 68 158 69 66 1 108-32 240-22" stroke="#faf1d3" fill="none" strokeWidth="35"/>
    <path d="M79 216c50-3 92-27 117-14 44 23 63 46 89 33s29-60 82-65c37-3 48-23 44-48" fill="none" stroke="#a86140" strokeWidth="3.5" strokeDasharray="5 8" strokeLinecap="round"/>
    <Tree x={45} y={110} scale={.87}/><Tree x={79} y={121} round/><Tree x={114} y={84} scale={.64}/>
    <Tree x={286} y={103} scale={.69}/><Tree x={311} y={109} scale={.93} round/>
    <Tree x={526} y={172} scale={1.08}/><Tree x={505} y={195} scale={.85} round/>
    <Tree x={303} y={307} scale={.75}/><Tree x={335} y={313} scale={.94}/>
    <g transform="translate(358 47)" stroke="#584c39" strokeWidth="2.2" strokeLinejoin="round">
      <path d="m-9 75 72 14 46-13-72-16z" fill="#adbc95" stroke="none"/>
      <path d="M0 27h67v47H0z" fill="#f6cf87"/><path d="m67 27 22-8v48l-22 7z" fill="#d69b59"/>
      <path d="M8 33h52v21H8z" fill="#415b4c"/><path d="M0 54h66v7H0z" fill="#f8e5bd"/>
      <path d="m-5 25 12-19h59l7 19Z" fill="#d97d52"/><path d="m73 25 19-8L76 1 66 6z" fill="#b96442"/>
      <path d="m0 25 10-19m8 19L25 6m10 19 4-19m11 19 1-19" stroke="#fff0ca" strokeWidth="7"/>
      <path d="M-5 25h78v7H-5z" fill="#eeac79"/>
      <path d="M17 1V-15h39V1z" fill="#fff2d2"/><text x="36" y="-3" textAnchor="middle" fill="#344d3c" stroke="none" fontFamily="monospace" fontWeight="bold" fontSize="11">CHAI</text>
      <path d="M16 47h8v7h-8z M30 46h8v8h-8z" fill="#fae6bb"/>
    </g>
    <g transform="translate(126 130) rotate(-9)" stroke="#514e38" strokeWidth="2.4" strokeLinejoin="round">
      <ellipse cx="19" cy="38" rx="39" ry="6" fill="#bfceab" stroke="none"/>
      <path d="M-9 17v20m47-20v20M-10-6l3 31m43-31 3 31" fill="none"/>
      <path d="M-16-5h61v7h-61zm1 11h61v7h-61zm0 11h62l-5 7h-62z" fill="#cf9a5d"/>
    </g>
    <g transform="translate(410 118)"><path d="M0 0s-12-13-12-20a12 12 0 0 1 24 0C12-13 0 0 0 0Z" fill="#cb6943" stroke="#704a33" strokeWidth="1.5"/><circle cy="-20" r="4" fill="#fff1c9"/></g>
    <circle cx="79" cy="216" r="6" fill="#194c3e" stroke="#f8ebc6" strokeWidth="3"/>
    {[[172,93],[95,154],[344,145],[239,129],[391,226],[503,285],[252,301],[54,259],[476,54],[216,63],[148,272],[464,204]].map(([x,y])=><Grass key={x} x={x} y={y}/>)}
    <g fontFamily="monospace" fill="#596749" fontSize="9.8" letterSpacing="1.3"><text x="102" y="184" transform="rotate(-7 102 184)">THE QUAD</text><text x="352" y="150" transform="rotate(-7 352 150)">CHAI CORNER</text></g>
    <g transform="translate(520 35)" stroke="#53674e"><path d="m0 0-5 16 5-3 5 3z" fill="#53674e"/><text y="-5" textAnchor="middle" stroke="none" fontFamily="monospace" fontSize="10" fill="#53674e">N</text></g>
  </svg><span className="map-caption">Fig. 01 &nbsp;/&nbsp; The campus loop</span></div>
}
