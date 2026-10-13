import { useId } from 'react';
import { StudyProps } from '../shared';
export default function GrainGradient(_:StudyProps){const id=useId();return <div className="grain-scene"><svg className="grain-noise" aria-hidden="true"><filter id={id}><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter={`url(#${id})`}/></svg><span>MATERIAL STUDIES</span><b>Feel the<br/>in-between.</b></div>}
