import { useReducedMotion } from 'motion/react';
import { CSSProperties, PropsWithChildren, useEffect, useState } from 'react';
import './motion.css';
export type StudyProps = { speed?: number; paused?: boolean; reduced?: boolean };
export function usePrefs({speed=1,paused=false,reduced=false}:StudyProps){
  const system=useReducedMotion();
  return {active: !paused&&!reduced&&!system, reduced: reduced||!!system, duration:(n:number)=>n/speed};
}
export function useCycle(active:boolean,ms:number,count:number){
  const [step,setStep]=useState(0);
  useEffect(()=>{if(!active)return;const timer=setInterval(()=>setStep(s=>(s+1)%count),ms);return()=>clearInterval(timer)},[active,ms,count]);
  return step;
}

/** Wrapper supplies CSS motion controls for standalone reuse. */
export function StudySurface({speed=1,paused=false,reduced=false,children}:PropsWithChildren<StudyProps>){
  const system=useReducedMotion();
  return <div className="study-surface" data-paused={paused} data-reduced={reduced||!!system} style={{'--study-speed':speed} as CSSProperties}>{children}</div>;
}
