import { useState } from 'react';
import { motion } from 'motion/react';
import { StudyProps, usePrefs } from '../shared';
export default function ScrollReveal(p:StudyProps){const {reduced,duration}=usePrefs(p);const [s,setS]=useState(0);return <div className="scroll-demo" tabIndex={0} aria-label="滚动查看渐入效果" onScroll={e=>setS(e.currentTarget.scrollTop)}><div className="scroll-intro">Scroll to discover ↓</div>{['A little space.','A new perspective.','Something beautiful.'].map((t,i)=><motion.div className="reveal-line" key={t} animate={{opacity:reduced||s>i*45?1:.25,y:reduced||s>i*45?0:18}} transition={{duration:duration(.4)}}>{t}</motion.div>)}<div className="scroll-tail"/></div>}
