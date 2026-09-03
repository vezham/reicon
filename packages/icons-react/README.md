<p align="center">
  <a href="https://vezham.com">
    <img src="https://vezham.com/readme-banner.png" alt="Vezham React — SVG Icon Library for React" width="100%" />
  </a>
</p>

<p align="center">
  <a href="https://npmjs.com/package/@vezham/icons-react"><img src="https://img.shields.io/npm/v/@vezham/icons-react?color=black&label=npm" alt="npm version" /></a>
  <a href="https://npmjs.com/package/@vezham/icons-react"><img src="https://img.shields.io/npm/dm/@vezham/icons-react?color=black&label=downloads" alt="npm downloads" /></a>
  <a href="https://github.com/vezham/reicon/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-black" alt="MIT License" /></a>
  <a href="https://vezham.com"><img src="https://img.shields.io/badge/docs-vezham.com-black" alt="Documentation" /></a>
  <a href="https://github.com/vezham/reicon"><img src="https://img.shields.io/badge/github-Vezham-black" alt="GitHub" /></a>
</p>

<h1 align="center">Vezham React</h1>

<p align="center">
  <b>2679+ pixel-perfect SVG icons</b> • Outline & Filled weights • React component wrapper • Zero dependencies • MIT Licensed
</p>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#usage">Usage</a> •
  <a href="#props">Props</a> •
  <a href="#tree-shaking">Tree-shaking</a> •
  <a href="#icon-names">Icon Names</a> •
  <a href="#typescript">TypeScript</a>
</p>

**Vezham React** is the official React package for <a href="https://vezham.com">Vezham</a> — a free, open-source SVG icon library featuring 2679+ handcrafted, grid-aligned icons. Every component is tree-shakeable, fully TypeScript-ready, and ships with zero dependencies.

| 🔗 &nbsp; Resource | Link |
|---|---|
| 🌐 &nbsp; Website & icon browser | [vezham.com](https://vezham.com) |
| 📖 &nbsp; Documentation | [vezham.com/docs](https://vezham.com/docs) |
| 📦 &nbsp; Core package (vanilla JS) | [vezham](https://npmjs.com/package/vezham) |
| 🎨 &nbsp; Figma plugin | [vezham.com/docs/figma](https://vezham.com/docs/figma) |

---

## Install

```bash
npm i @vezham/icons-react
# or
bun add @vezham/icons-react
# or
yarn add @vezham/icons-react
```

<details>
<summary><b>Requirements</b></summary>

- **React** ≥ 16.8 (Hooks-compatible)
- No other dependencies required.

</details>

---

## Usage

### Basic

```jsx
import { Home, ShieldCheck, AltArrowDown } from '@vezham/icons-react';

function App() {
  return (
    <div>
      <Home />
      <ShieldCheck size={32} color="#d97757" />
      <AltArrowDown weight="Filled" />
    </div>
  );
}
```

### Weights

Every icon ships in two weights — **Outline** (default) and **Filled**:

```jsx
import { Home } from '@vezham/icons-react';

<Home />                     {/* Outline (default) */}
<Home weight="Filled" />     {/* Filled */}
```

### Sizing & coloring

```jsx
<Home size={32} />                    {/* 32×32px */}
<Home size={48} color="#d97757" />    {/* Custom size and color */}
<Home color="currentColor" />         {/* Inherits parent text color */}
```

### Direct icon import (smallest bundle)

For the absolute minimum bundle size, import icons directly from the sub-path:

```jsx
import Home from '@vezham/icons-react/icons/Home';
import ShieldCheck from '@vezham/icons-react/icons/ShieldCheck';
```

### All SVG attributes are supported

Pass any standard SVG attribute — `className`, `style`, `onClick`, `aria-*`, etc.:

```jsx
<Home
  size={48}
  color="red"
  className="my-icon"
  style={{ marginRight: 8 }}
  onClick={() => console.log('clicked')}
  aria-label="Home"
/>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number | string` | `24` | Icon width & height (number = px) |
| `color` | `string` | — | Primary icon stroke/fill color. Leave unset to use CSS class. |
| `secondaryColor` | `string` | same as `color` | Secondary (accent) fill color |
| `weight` | `'Outline' | 'Filled'` | `'Outline'` | Icon style variant |
| `strokeWidth` | `number | string` | — | Override the default stroke width |
| `className` | `string` | — | Additional CSS class on the <svg> element |

Any valid SVG attribute (e.g. `style`, `onClick`, `id`, `aria-*`) is forwarded to the underlying <svg> element.

---

## Tree-shaking

Every icon is a standalone ES module. Modern bundlers — **Vite**, **Webpack**, **Rollup**, **esbuild**, **Next.js**, **Remix** — automatically tree-shake unused icons, keeping only what you import.

```jsx
// ✅ Only Home is included in your production bundle
import { Home } from '@vezham/icons-react';

// ✅ Even smaller — direct path import skips the barrel file entirely
import Home from '@vezham/icons-react/icons/Home';
```

The package is marked `"sideEffects": false` for optimal dead-code elimination.

---

## Icon Names

Icons use **PascalCase**, derived from their original kebab-case file names:

| Original name | PascalCase import |
|---------------|-------------------|
| `home` | `Home` |
| `shield-check` | `ShieldCheck` |
| `alt-arrow-down` | `AltArrowDown` |
| `shopping-cart` | `ShoppingCart` |
| `user-circle` | `UserCircle` |
| `arrow-right-up` | `ArrowRightUp` |

Browse and search all 2679+ icons at <a href="https://vezham.com">vezham.com</a>.

---

## TypeScript

Full type declarations ship with the package — no separate `@types/` installation needed.

```tsx
import { Home, type IconProps, type IconWeight } from '@vezham/icons-react';

const weight: IconWeight = 'Filled';
const props: IconProps = { size: 32, color: '#d97757', weight };

<Home {...props} />
```

### Exported types

| Type | Description |
|------|-------------|
| `IconProps` | Combined icon props + React SVG attributes |
| `IconWeight` | `'Outline' | 'Filled'` |
| `IconComponent` | Signature of any icon component |

---

## Features

- **2679+ icons** — Handcrafted, pixel-perfect SVGs across a wide range of categories
- **Two weights** — Outline and Filled, with consistent 24×24 grid alignment
- **Tree-shakeable** — Import only what you use; every icon is a standalone ES module
- **Zero dependencies** — No runtime overhead beyond React itself
- **TypeScript-ready** — Full type declarations included, no extra packages needed
- **SVG attribute passthrough** — All standard SVG props (`style`, `onClick`, `aria-*`, etc.) are forwarded
- **MIT licensed** — Free for personal and commercial use

---

## Related packages

| Package | Description |
|---------|-------------|
| [`vezham`](https://npmjs.com/package/vezham) | Core vanilla JS + CDN runtime. No framework required. |
| [`@vezham/icons-react`](https://npmjs.com/package/@vezham/icons-react) | **You are here.** React components for 2679+ icons. |
| [`@vezham/icons-vue`](https://npmjs.com/package/@vezham/icons-vue) | Vue 3 components for 2679+ icons. |
| [`@vezham/icons-svelte`](https://npmjs.com/package/@vezham/icons-svelte) | Svelte components for 2679+ icons. |

---

## Links

- 🌐 &nbsp; Website: [vezham.com](https://vezham.com)
- 📖 &nbsp; Documentation: [vezham.com/docs](https://vezham.com/docs)
- 📦 &nbsp; npm: [npmjs.com/package/@vezham/icons-react](https://npmjs.com/package/@vezham/icons-react)
- 🐙 &nbsp; GitHub: [github.com/vezham/reicon](https://github.com/vezham/reicon)
- 🐛 &nbsp; Issues: [github.com/vezham/reicon/issues](https://github.com/vezham/reicon/issues)

---

## License

MIT © [Dev Chauhan](https://devchauhan.in)

Free to use in personal and commercial projects. Attribution is appreciated but not required.
