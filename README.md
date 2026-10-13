# Motion Atlas · 动效设计档案

一个可在线浏览、按需取用的原创动效与页面组合库。

- **24 个 React 动效**：文字、滚动、按钮、卡片、背景、状态交互，各 4 个。
- **6 个页面区块**：首屏、能力、成果、FAQ、方案、行动邀请。
- **2 个完整概念页**：KINE / LAB 科技研究页与 STUDIO / STILL 作品集。
- 搜索、分类、参数调节、减少动态效果、源码查看；桌面和手机布局。

在线画廊：https://Wangwy-sjtu.github.io/motion-design-gallery/

## 本地开发

Node.js 22.12+，使用 pnpm 11。

```sh
pnpm install --frozen-lockfile
pnpm validate
pnpm build
pnpm dev
```

## 在项目中使用

推荐调用 `$design-with-motion`。轻量 Skill 从云端固定提交读取选中组件及其依赖，校验 SHA-256，然后写入你指定的项目目录；无需克隆整个仓库。

手动接入：选择 `src/effects/*.tsx`，同时取用 `src/shared.tsx`、`src/motion.css` 与 `LICENSE`。依赖见 `package.json`。组件用 `StudySurface` 包裹，容器设置高度；把 speed、paused、reduced 同时传给容器与组件。

```tsx
import OrbitSystem from './effects/orbit-system';
import { StudySurface } from './shared';
export default function Hero() {
  return <StudySurface><OrbitSystem /></StudySurface>;
}
```

默认尊重系统减少动态效果。演示中的数值、品牌、项目与邮箱均为概念内容，使用时换成真实信息。

## 来源与边界

这里的 24 个演示及页面组合为本仓库独立实现，使用 React、Motion 和 Lucide，按 MIT 发布。它们不是对 Designeer、UINice 或所收录作品的源码镜像。两站用于发现原作者资源；详细索引、授权核实与允许保存的上游快照在私有 `motion-design-library` 中。

第三方库许可随各 npm 包保留。React Bits 组件本身存在再分发限制，因此本仓库只链接原站，不镜像其组件。参考：Designeer <https://designeer.xyz/>、UINice <https://uinice.com/>、Motion <https://motion.dev/>。

## 更新与发布

`tooling/registry.mjs` 生成带源码 SHA-256 的公开资源清单；`pnpm validate` 验证清单没有过期。GitHub Actions 在提交或手动触发时构建并发布 Pages。使用中的项目保留 `motion-resource.lock.json`，更新云端不会自动改动已有项目。
