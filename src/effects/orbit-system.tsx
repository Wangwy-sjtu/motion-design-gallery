import { StudyProps } from '../shared';
export default function OrbitSystem(_:StudyProps){return <div className="orbit-scene"><div className="orbit-core">m.</div>{[0,1,2].map(i=><div className={'orbit-ring orbit-'+i} key={i}><i/></div>)}<span className="orbit-caption">EVERYTHING, IN ITS OWN TIME.</span></div>}
