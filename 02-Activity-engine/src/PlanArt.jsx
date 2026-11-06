import React from 'react';

function Chai() {
  return <g stroke="#4b4134" strokeWidth="2.5" strokeLinejoin="round">
    <path d="m27 119 174-2-15 9-158 3z" fill="#d9a777" stroke="none"/>
    <g transform="rotate(9 139 77)">
      <path d="M102 49h62l-9 67q-20 8-42-1Z" fill="#f4cd9c"/>
      <path d="M106 66q21 7 54-1l-7 46q-21 9-36 0Z" fill="#af613c"/>
      <ellipse cx="133" cy="49" rx="31" ry="7" fill="#e9b780"/>
      <path d="m115 64 5 43m30-44-4 43" stroke="#fff1cc" strokeWidth="3"/>
    </g>
    <g transform="rotate(-8 85 93)">
      <path d="M51 59h65l-10 62q-23 9-46-1Z" fill="#f5d19d"/>
      <path d="M55 73q25 6 57-1l-7 43q-22 9-44 0Z" fill="#ba6b42"/>
      <ellipse cx="83" cy="59" rx="32" ry="7" fill="#c78250"/>
      <path d="m63 73 5 37m33-38-5 38" stroke="#fff0ca" strokeWidth="3"/>
    </g>
    <path d="M70 43c-10-11 8-15-1-27m18 25c-8-7 9-13 3-20m40 14c-8-11 7-14 2-23" fill="none" stroke="#8d694d"/>
  </g>
}
function Sketch() {
  return <g transform="rotate(-9 110 76)" stroke="#3c5956" strokeWidth="2.4" strokeLinejoin="round">
    <path d="m43 28 109 3-3 94H44z" fill="#75a18f"/>
    <path d="M51 24h105v95H51z" fill="#fff3cb"/><path d="M64 25v92" stroke="#d7987b"/>
    {[43,56,69,82,95,108].map(y=><path key={y} d={`M54 ${y}h96`} stroke="#a5c2b4" strokeWidth="1"/>)}
    {[37,57,77,97].map(y=><path key={y} d={`M55 ${y}c-17 3-17-12 0-10`} fill="none"/>)}
    <path d="m80 91 15-24 10 15 8-11 16 21Z" fill="#80a77a"/><circle cx="119" cy="59" r="8" fill="#eeb468"/>
    <g transform="rotate(29 155 75)"><path d="M151 17h10v80l-5 15-5-15z" fill="#e9ae50"/><path d="m151 97 5 15 5-15z" fill="#f5deb1"/><path d="m154 107 2 5 2-5" fill="#30463a"/></g>
  </g>
}
function Camera() {
  return <g transform="rotate(-8 106 77)" stroke="#354957" strokeWidth="2.5" strokeLinejoin="round">
    <path d="M154 61c42-49 51-8 21 39-9 13-19 14-25 15" fill="none" strokeWidth="4"/>
    <path d="M40 51h29l7-13h42l10 13h28q8 0 8 9v54H40z" fill="#fff1c8"/>
    <path d="M40 70h124v42H40z" fill="#547688"/><path d="M47 46h15v5H47z" fill="#c38d66"/>
    <circle cx="102" cy="82" r="30" fill="#b8cad0"/><circle cx="102" cy="82" r="24" fill="#495d69"/><circle cx="102" cy="82" r="14" fill="#7995a3"/><path d="M94 79q2-7 9-7" fill="none" stroke="#e2ebe9" strokeWidth="4"/>
    <path d="M135 57h18v9h-18z" fill="#d3e0dc"/><path d="M47 78v25m5-25v25m5-25v25" stroke="#354957" strokeWidth="1"/>
  </g>
}
function Leaf() {
  return <g transform="rotate(-15 100 75)" stroke="#3d5946" strokeWidth="2.5">
    <path d="M92 117C45 112 38 72 39 50c35-1 67 16 61 52 1-48 26-73 61-80 5 59-20 91-59 91z" fill="#86a878"/>
    <path d="M95 129q16-59 53-94M98 114 52 64m58 25 28-8m-18-10-2-18m-33 44-2-21" fill="none"/>
  </g>
}
function Music() {
  return <g transform="rotate(-7 105 75)" stroke="#594452" strokeWidth="2.6" strokeLinejoin="round">
    <path d="M53 76c0-75 105-75 105 0l-8 4c0-67-90-67-90 0z" fill="#f6cd8b"/>
    <rect x="46" y="71" width="24" height="42" rx="10" fill="#be838c"/><rect x="63" y="73" width="10" height="39" rx="5" fill="#71566b"/>
    <rect x="142" y="71" width="24" height="42" rx="10" fill="#be838c"/><rect x="139" y="73" width="10" height="39" rx="5" fill="#71566b"/>
    <path d="M152 113c0 21-23 16-32 18" fill="none"/>
    <g fill="#6b5367"><path d="M93 88V63l24-5v24h-4V65l-16 4v19z"/><ellipse cx="92" cy="89" rx="6" ry="4"/><ellipse cx="112" cy="83" rx="6" ry="4"/></g>
  </g>;
}
function Paddle() {
  return <g transform="rotate(-29 107 75)" stroke="#444b48" strokeWidth="2.5">
    <path d="M97 76h17l3 52q-12 7-23 0z" fill="#dea96c"/>
    <path d="M67 52c0-51 78-52 78-3 0 21-15 45-32 53H99C79 89 67 68 67 52z" fill="#c9725d"/>
    <path d="M75 48c0-19 13-30 27-32" fill="none" stroke="#edbda5" strokeWidth="4"/>
    <circle cx="153" cy="92" r="12" fill="#fff3ce"/><path d="M150 84q-5 1-6 6" stroke="#d0bd93" fill="none"/>
  </g>;
}
function Tiffin() {
  return <g transform="rotate(-5 106 77)" stroke="#4d5c52" strokeWidth="2.5" strokeLinejoin="round">
    <path d="M49 47v54c0 20 110 20 110 0V47z" fill="#9ab7aa"/>
    <ellipse cx="104" cy="48" rx="55" ry="13" fill="#d7e3cd"/>
    <path d="M50 72c21 15 87 15 109 0M50 78c21 15 87 15 109 0" fill="none"/>
    <path d="M84 44v-9q0-7 7-7h27q7 0 7 7v9h-6v-9H90v9z" fill="#e7c98c"/>
    <path d="M91 56h22v33H91z" fill="#e0cdb0"/><path d="M95 68h14v8H95z" fill="#719486"/>
    <path d="m68 111 1 5m70-6-1 5" strokeWidth="4"/>
  </g>;
}
export function PlanArt({type}) {
  const art = {chai:<Chai/>, sketch:<Sketch/>, camera:<Camera/>, leaf:<Leaf/>, music:<Music/>, paddle:<Paddle/>, lunch:<Tiffin/>};
  return <svg aria-hidden="true" className="plan-art" viewBox="0 0 210 145">{art[type]}</svg>
}
