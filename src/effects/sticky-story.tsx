import { StudyProps } from '../shared';
export default function StickyStory(_:StudyProps){return <div className="scroll-demo sticky-scene" tabIndex={0} aria-label="滚动查看叙事段落">{['Look closer.','Stay curious.','Keep moving.'].map((t,i)=><section className={'sticky-panel sticky-'+i} key={t}><span>CHAPTER 0{i+1}</span><h3>{t}</h3><span>Scroll to continue ↓</span></section>)}</div>}
