const storageKey='pocket-plans.v1';
export function readPocket(available) {
  try {
    const data=JSON.parse(localStorage.getItem(storageKey)) || {};
    const saved=Array.isArray(data.saved) ? available.filter(p=>data.saved.includes(p.id)).map(p=>p.id) : [];
    const checks={};
    for (const p of available) {
      const list=data.checks?.[p.id];
      if (Array.isArray(list)) checks[p.id]=list.filter(i=>Number.isInteger(i)&&i>=0&&i<p.steps.length);
    }
    return { saved, checks };
  } catch { return {saved:[],checks:{}}; }
}
export function writePocket(value) {
  try { localStorage.setItem(storageKey,JSON.stringify(value)); return true; }
  catch { return false; }
}
