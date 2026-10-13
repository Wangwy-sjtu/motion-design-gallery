export type Effect = { id:string; name:string; en:string; category:string; hint:string; description:string; trigger:string; bestFor:string; avoid:string; source:string; tone:string };
export const categories=['全部','文字','滚动','按钮','卡片','背景','交互'];
const rows=[
 ['stagger-type','错落字序','Staggered type','文字','自动播放','逐词建立阅读顺序，让标题的重心自然落下。','页面进入','短标题与品牌宣言','长段落、关键信息等待动画才可见','sage'],
 ['blur-reveal','从朦胧到清晰','Blur reveal','文字','自动播放','用短暂模糊与位移完成柔和的文字入场。','页面进入','简短主标题','密集正文、低性能设备的大面积模糊','sand'],
 ['word-rotate','轮换关键词','Word rotation','文字','自动播放','固定句子骨架，仅替换关键词，减少布局跳动。','定时切换','展示少量产品能力','用户尚未读完就切换的长句','mist'],
 ['count-up','有节奏的数字','Counting up','文字','点击重播','数字使用渐缓曲线抵达目标，同时保持列宽稳定。','页面进入','可信的统计指标','虚构数据或必须即时读出的余额','sage'],
 ['scroll-reveal','随阅读浮现','Scroll reveal','滚动','在画面内滚动','滚动推进时逐步显现段落，保留足够阅读时间。','容器滚动','内容章节','隐藏核心正文或滚动劫持','mist'],
 ['progress-track','阅读进度','Reading progress','滚动','在画面内滚动','将滚动距离映射为进度条，让长内容有可感知的长度。','容器滚动','文章与研究报告','内容高度不断变化时的虚假百分比','sand'],
 ['parallax-stack','层叠视差','Depth in layers','滚动','在画面内滚动','前后层使用不同位移速度建立空间感。','容器滚动','作品展示','阅读正文跟随移动','sage'],
 ['sticky-story','停驻叙事','Sticky narrative','滚动','在画面内滚动','章节依次停驻，再由下一段自然接替。','容器滚动','产品故事','内容过长导致章节遮挡','sand'],
 ['magnetic-button','轻磁吸按钮','Magnetic pull','按钮','移动指针 · 点击','按钮轻轻追随附近指针，离开后回到中心。','悬停与点击','单个主要行动按钮','表单、触屏上的位移追逐','sage'],
 ['press-feedback','按下即回应','Tactile feedback','按钮','点击保存','按压反馈与保存状态形成完整、清楚的交互闭环。','点击或键盘','收藏与确认操作','仅播放动画而没有结果','mist'],
 ['ripple-button','涟漪回应','A little ripple','按钮','点击任意位置','反馈从点击位置展开，键盘操作从按钮中心展开。','点击或键盘','轻量操作反馈','在高频操作中长时间循环','sand'],
 ['border-trail','边缘光迹','Border trail','按钮','自动播放','光迹沿边缘缓慢流动，指示一个持续但安静的状态。','持续播放','状态卡与重点行动','多元素同时争夺注意力','dark'],
 ['tilt-card','手中的卡片','A subtle tilt','卡片','移动指针','有限的三维倾斜让卡片呈现轻微实体质感。','悬停','作品封面与会员卡','承载长篇正文或大角度倾斜','sage'],
 ['spotlight-card','跟随光斑','Follow the light','卡片','移动指针','光照变化强化材质，文字始终保持清晰。','悬停','少量主视觉卡片','仅靠光斑才能发现可点击区域','dark'],
 ['flip-card','另一面','The other side','卡片','点击翻转','明确的点击动作打开背面，支持再次点击返回。','点击或键盘','短小的双面说明','把重要表单藏在卡片背面','sand'],
 ['stack-cards','翻阅卡组','A stack of ideas','卡片','点击下一张','通过位置与大小变化表现卡片次序。','点击或键盘','少量精选作品','大量内容缺少列表入口','mist'],
 ['aurora','柔和极光','Soft horizons','背景','自动播放','低频流动的色团构成有呼吸感的页面氛围。','持续播放','首屏背景','高饱和频闪或覆盖文字','dark'],
 ['dot-field','点阵微光','A field of dots','背景','移动指针','规则点阵在局部渐隐中形成有秩序的空间。','悬停与持续播放','科技产品背景','缩小后产生摩尔纹','sage'],
 ['orbit-system','有序轨道','In its own time','背景','自动播放','不同速度的轨道围绕同一中心运行。','持续播放','系统关系、连接概念','将示意运动当作真实科学数据','sage'],
 ['grain-gradient','颗粒与渐变','Material study','背景','自动播放','轻量 SVG 噪声覆盖柔和渐变，增强印刷质感。','持续播放','编辑设计与作品集','噪声降低正文对比度','sand'],
 ['shared-tabs','流动选项卡','Shared tabs','交互','点击 · 方向键','指示块在选项间连续移动，内容同步切换。','点击或键盘','少量同层级筛选','只改变装饰而不改变选中状态','mist'],
 ['accordion','展开一段细节','A little more','交互','点击展开','内容高度与透明度同步变化，保持明确的展开状态。','点击或键盘','常见问题与补充说明','隐藏用户必须比较的信息','sand'],
 ['toast-stack','叠起的回应','Moments saved','交互','点击发送','可关闭、会自动退出的通知轻轻叠起。','点击或键盘','非关键成功提示','必须由用户确认的重要错误','sage'],
 ['morph-menu','开合之间','An unfolding menu','交互','点击展开','菜单图标与面板同步变化，让开合过程容易理解。','点击或键盘','小型站点导航','在移动端隐藏唯一导航入口','mist']
];
export const effects:Effect[]=rows.map(([id,name,en,category,hint,description,trigger,bestFor,avoid,tone])=>({id,name,en,category,hint,description,trigger,bestFor,avoid,tone,source:'https://motion.dev/docs/react-animation'}));
