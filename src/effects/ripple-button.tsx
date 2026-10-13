import { useState } from 'react';
import { StudyProps, usePrefs } from '../shared';
export default function RippleButton(p:StudyProps){const {reduced}=usePrefs(p);const [wave,setWave]=useState({key:0,x:50,y:50});return <button className="ripple-button" onClick={e=>{const r=e.currentTarget.getBoundingClientRect();setWave({key:wave.key+1,x:e.detail===0?r.width/2:e.clientX-r.left,y:e.detail===0?r.height/2:e.clientY-r.top})}}>Make a ripple {!reduced&&wave.key>0&&<i key={wave.key} style={{left:wave.x,top:wave.y}}/>}<span aria-hidden="true">↗</span></button>}
