import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { StudyProps, usePrefs } from '../shared';
export default function MagneticButton(p:StudyProps){const {active,reduced}=usePrefs(p);const [xy,setXY]=useState({x:0,y:0});const [done,setDone]=useState(false);return <div className="magnetic-area" onPointerMove={e=>{if(!active||e.pointerType==='touch')return;const r=e.currentTarget.getBoundingClientRect();setXY({x:(e.clientX-r.left-r.width/2)*.2,y:(e.clientY-r.top-r.height/2)*.2})}} onPointerLeave={()=>setXY({x:0,y:0})}><motion.button className="pill-button" animate={reduced?{x:0,y:0}:xy} transition={{type:'spring',stiffness:180,damping:16}} onClick={()=>setDone(!done)}>{done?'Nice to meet you':'Let’s connect'} <ArrowUpRight size={18}/></motion.button></div>}
