import StaggerType from '../effects/stagger-type';
import Aurora from '../effects/aurora';
import PressFeedback from '../effects/press-feedback';
import TiltCard from '../effects/tilt-card';
import CountUp from '../effects/count-up';
import Accordion from '../effects/accordion';
import SharedTabs from '../effects/shared-tabs';
import MagneticButton from '../effects/magnetic-button';
import { StudyProps } from '../shared';
export const sectionInfo=[{id:'hero',name:'首屏与宣言',desc:'标题入场 + 氛围背景 + 行动反馈',effects:['stagger-type','aurora','press-feedback']},{id:'features',name:'能力展示',desc:'轻倾斜卡片 + 稳定的文字层级',effects:['tilt-card']},{id:'metrics',name:'数据与成果',desc:'递增数字 + 清晰的数据语义',effects:['count-up']},{id:'faq',name:'问题与解答',desc:'按需展开 + 键盘可达',effects:['accordion']},{id:'pricing',name:'方案与选择',desc:'共享指示器 + 按压反馈',effects:['shared-tabs','press-feedback']},{id:'cta',name:'收尾与邀请',desc:'克制的磁吸 + 留白',effects:['magnetic-button']}];
export function HeroSection(p:StudyProps){return <section className="recipe-hero"><div className="recipe-atmosphere study-surface"><Aurora {...p}/></div><div><span className="eyebrow">A MORE THOUGHTFUL INTERFACE</span><StaggerType {...p}/><p>用恰到好处的运动，让每一次相遇都更自然。</p><PressFeedback {...p}/></div></section>}
export function FeatureSection(p:StudyProps){return <section className="recipe-feature"><div><span className="eyebrow">DESIGNED WITH INTENTION</span><h2>细节，值得<br/>被认真对待。</h2><p>建立统一的字体、色彩与间距，再让轻微的交互成为体验的一部分。</p></div><div className="study-surface"><TiltCard {...p}/></div></section>}
export function MetricsSection(p:StudyProps){return <section className="recipe-metrics"><div><span className="eyebrow">BY THE NUMBERS</span><h2>让成果清楚可见。</h2><p>示意数字，仅用于版式与动画展示。</p></div><CountUp {...p}/></section>}
export function FAQSection(p:StudyProps){return <section className="recipe-faq"><div><span className="eyebrow">A FEW DETAILS</span><h2>留一点空间，<br/>给好奇心。</h2></div><Accordion {...p}/></section>}
export function PricingSection(p:StudyProps){return <section className="recipe-pricing"><div><span className="eyebrow">MAKE IT YOUR OWN</span><h2>找到适合你的节奏。</h2><p>使用指示器明确选择，用反馈确认操作。</p></div><div className="recipe-pricing-panel"><SharedTabs {...p}/><PressFeedback {...p}/></div></section>}
export function CTASection(p:StudyProps){return <section className="recipe-cta"><span className="eyebrow">THE NEXT CHAPTER</span><h2>把想法，<i>变成作品。</i></h2><MagneticButton {...p}/></section>}
export const sectionComponents={hero:HeroSection,features:FeatureSection,metrics:MetricsSection,faq:FAQSection,pricing:PricingSection,cta:CTASection};
