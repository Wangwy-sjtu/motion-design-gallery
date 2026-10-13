import { AnimatePresence, motion } from 'motion/react';
import { StudyProps, usePrefs, useCycle } from '../shared';
export default function WordRotate(p:StudyProps){const {active,reduced,duration}=usePrefs(p);const index=useCycle(active,duration(2200),3);return <div className="rotating-copy"><span>Made to</span><div><AnimatePresence mode="wait"><motion.b key={index} initial={reduced?false:{y:24,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-24,opacity:0}} transition={{duration:reduced?0:duration(.35)}}>{['inspire.','connect.','move.'][index]}</motion.b></AnimatePresence></div></div>}
