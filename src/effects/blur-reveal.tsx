import { motion } from 'motion/react';
import { StudyProps, usePrefs } from '../shared';
export default function BlurReveal(p:StudyProps){const {active,duration}=usePrefs(p);return <motion.div className="serif-word" animate={active?{filter:['blur(14px)','blur(0px)','blur(0px)'],opacity:[0,1,1],y:[12,0,0]}:{filter:'blur(0px)',opacity:1,y:0}} transition={{duration:duration(3.2),repeat:active?Infinity:0,repeatDelay:1}}>Clarity.</motion.div>}
