import React from 'react';
const paths = {
  clock: <><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></>,
  wallet: <><path d="M3 7h17v13H3z M3 7l14-4v4"/><path d="M20 11h-5v5h5"/></>,
  people: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2 M16 5a3 3 0 0 1 0 6 M17 14a5 5 0 0 1 4 5"/></>,
  mood: <><circle cx="12" cy="12" r="9"/><path d="M8 14q4 5 8 0 M8 9h.2 M16 9h.2"/></>,
  arrow: <path d="M4 12h15 M14 6l6 6-6 6"/>,
  down: <path d="m7 9 5 5 5-5"/>,
  bookmark: <path d="M6 4h12v17l-6-4-6 4z"/>,
  spark: <><path d="m11 3 2.2 6.3L20 12l-6.8 2.7L11 21l-2.4-6.3L2 12l6.6-2.7z M19 2v4 M17 4h4"/></>,
  x: <path d="m6 6 12 12 M18 6 6 18"/>,
  check: <path d="m4 12 5 5 11-12"/>,
  compass: <><circle cx="12" cy="12" r="9"/><path d="m16 7-2 7-7 3 3-7z"/></>,
  rotate: <><path d="M4 10a8 8 0 1 1 1 7 M4 4v6h6"/></>,
};
export function Icon({name, size=20, filled=false}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={filled?'currentColor':'none'} stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
