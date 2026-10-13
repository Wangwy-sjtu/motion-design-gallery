import { useState } from 'react';
import { StudyProps } from '../shared';
export default function SpotlightCard(_:StudyProps){const [pos,setPos]=useState([50,50]);return <div className="spotlight-card" onPointerMove={e=>{const b=e.currentTarget.getBoundingClientRect();setPos([(e.clientX-b.left)/b.width*100,(e.clientY-b.top)/b.height*100])}} style={{backgroundImage:`radial-gradient(circle at ${pos[0]}% ${pos[1]}%, #8ea88b55, transparent 65%)`}}><span>FOLLOW YOUR CURIOSITY</span><div className="spotlight-mark">✳</div><b>Find your light.</b></div>}
