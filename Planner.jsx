import React from 'react';
import { Icon } from './Icons.jsx';

const fields = [
  ['minutes', 'clock', 'Time to spare', [[10,'10 minutes'],[15,'15 minutes'],[30,'30 minutes'],[45,'45 minutes'],[60,'1 hour']]],
  ['budget', 'wallet', 'Budget per person', [[0,'Free only'],[50,'Up to ₹50'],[100,'Up to ₹100'],[200,'Up to ₹200']]],
  ['company', 'people', 'Company', [['friends','With friends'],['solo','Just me']]],
  ['mood', 'mood', 'Mood', [['any','Open to anything'],['calm','Calm'],['social','Social'],['creative','Creative'],['energetic','Energetic'],['curious','Curious']]]
];
export function Planner({value, onChange, onFind}) {
  return <form className="planner" onSubmit={event=>{event.preventDefault();onFind();}}>
    <div className="planner-heading"><span className="round-icon"><Icon name="compass"/></span><h2>Build your break</h2></div>
    <div className="controls">{fields.map(([key,icon,label,options])=><label className="plan-field" key={key}>
      <span><Icon name={icon} size={16}/>{label}</span>
      <div className="select-box"><select value={value[key]} onChange={event=>onChange({...value,[key]:['minutes','budget'].includes(key)?Number(event.target.value):event.target.value})}>
        {options.map(([option,text])=><option value={option} key={option}>{text}</option>)}
      </select><Icon name="down" size={15}/></div>
    </label>)}<button className="primary find" type="submit">Find my plan <Icon name="arrow" size={18}/></button></div>
  </form>
}
