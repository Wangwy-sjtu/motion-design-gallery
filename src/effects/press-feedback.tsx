import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Plus } from 'lucide-react';
import { StudyProps, usePrefs } from '../shared';
export default function PressFeedback(p:StudyProps){const [saved,setSaved]=useState(false);const {reduced}=usePrefs(p);return <motion.button className={'pill-button '+(saved?'is-saved':'')} whileTap={reduced?{}:{scale:.92}} onClick={()=>setSaved(!saved)} aria-pressed={saved}>{saved?<Check size={18}/>:<Plus size={18}/>} {saved?'Saved to collection':'Save this moment'}</motion.button>}
