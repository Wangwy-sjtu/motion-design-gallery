import { useState } from 'react';
import { motion } from 'motion/react';
import { StudyProps, usePrefs } from '../shared';
export default function StackCards(p:StudyProps){const [n,setN]=useState(0);const {reduced}=usePrefs(p);return <button className="stack-deck" onClick={()=>setN((n+1)%3)} aria-label="切换卡片">{['Explore','Collect','Create'].map((t,i)=>{const rank=(i-n+3)%3;return <motion.span className={'stack-sheet sheet-'+i} key={t} animate={{rotate:rank*7-7,y:rank*-8,x:rank*7,scale:1-rank*.05,zIndex:3-rank}} transition={reduced?{duration:0}:{type:'spring',stiffness:160,damping:19}}><small>FIELD NOTES / 0{i+1}</small><b>{t}.</b><span>Next card ↗</span></motion.span>})}</button>}
