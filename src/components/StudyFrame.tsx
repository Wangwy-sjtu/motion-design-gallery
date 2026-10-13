import { CSSProperties, ComponentType, useRef } from 'react';
import { useInView } from 'motion/react';
import { StudyProps } from '../shared';
const modules=import.meta.glob('../effects/*.tsx',{eager:true}) as Record<string,{default:ComponentType<StudyProps>}>;
export function StudyFrame({id,speed=1,paused=false,reduced=false,replay=0}:StudyProps&{id:string;replay?:number}){
 const ref=useRef<HTMLDivElement>(null);const inView=useInView(ref,{margin:'100px'});const Component=modules[`../effects/${id}.tsx`]?.default;
 return <div ref={ref} className="study-surface" data-effect={id} data-paused={paused||!inView} data-reduced={reduced} style={{'--study-speed':speed} as CSSProperties}>{Component&&<Component key={replay} speed={speed} paused={paused||!inView} reduced={reduced}/>}</div>
}
