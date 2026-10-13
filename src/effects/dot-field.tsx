import { useState } from 'react';
import { StudyProps } from '../shared';
export default function DotField(_:StudyProps){const [x,setX]=useState(50);return <div className="dot-scene" onPointerMove={e=>{const r=e.currentTarget.getBoundingClientRect();setX((e.clientX-r.left)/r.width*100)}}><div className="dots" style={{maskImage:`radial-gradient(ellipse at ${x}% 50%,black,transparent 75%)`}}/><span className="dot-axis"/><b>Connect<br/>the quiet dots.</b></div>}
