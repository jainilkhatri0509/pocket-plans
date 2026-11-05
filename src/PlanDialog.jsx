import React, { useEffect, useRef } from 'react';
import { Icon } from './Icons.jsx';
import { PlanArt } from './PlanArt.jsx';
import { price } from './match.js';

export function PlanDialog({items, index, onNext, onClose, saved, onSave, checked, onCheck}) {
  const ref = useRef(null);
  useEffect(()=>{
    const dialog=ref.current;
    dialog.showModal();
    return ()=>dialog.close();
  },[]);
  const plan=items[index];
  return <dialog ref={ref} aria-labelledby="ticket-title" onCancel={onClose} onClick={e=>{if(e.target===ref.current)onClose();}}>
    <div className="ticket">
      <button className="close" aria-label="Close plan" onClick={onClose}><Icon name="x"/></button>
      {plan ? <>
        <div className={`ticket-art art-${plan.art}`}><PlanArt type={plan.art}/></div>
        <div className="ticket-main">
          <span className="eyebrow">YOUR BREAK TICKET</span>
          <h2 id="ticket-title">{plan.title}</h2><p>{plan.description}</p>
          <div className="meta"><span><Icon name="clock" size={16}/>{plan.minutes} min</span><i/><span><Icon name="wallet" size={16}/>{plan.cost?price(plan.cost)+' est. / person':'Free'}</span></div>
          <h3>Your checklist</h3>
          {plan.steps.map((step,i)=><label className="step" key={step}><input type="checkbox" checked={checked.includes(i)} onChange={()=>onCheck(plan.id,i)}/><span>{step}</span></label>)}
          <div className="ticket-actions"><button className="primary" onClick={()=>onSave(plan.id)}><Icon name={saved?'check':'bookmark'} size={17}/>{saved?'Saved · Unsave':'Save plan'}</button>
          {items.length>1 && <button className="text-btn" onClick={onNext}>Next match <Icon name="arrow" size={16}/></button>}</div>
          {items.length>1 && <small aria-live="polite">Match {index+1} of {items.length}</small>}
        </div></> : <div className="ticket-main empty-match"><Icon name="compass" size={40}/><h2 id="ticket-title">A little more wiggle room?</h2><p>No activity fits all four choices. Try “Open to anything” or give yourself a longer break.</p><button className="primary" onClick={onClose}>Adjust my choices</button></div>}
    </div></dialog>
}
