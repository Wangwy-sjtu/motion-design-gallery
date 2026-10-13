import { motion } from 'motion/react';
import { StudyProps, usePrefs } from '../shared';
export default function StaggerType(p:StudyProps){const {active,duration}=usePrefs(p);return <div className="type-scene" aria-label="Make room for wonder.">{'Make room for wonder.'.split(' ').map((w,i)=><span className="word-clip" key={w}><motion.span aria-hidden="true" animate={active?{y:['100%','0%','0%'],opacity:[0,1,1]}:{y:0,opacity:1}} transition={{duration:duration(3),delay:i*.12,repeat:active?Infinity:0,repeatDelay:1}}>{w}&nbsp;</motion.span></span>)}</div>}
