<p align="center">
  <a href="https://vezham.com">
    <img src="https://vezham.com/readme-banner.png" alt="Vezham Svelte — SVG Icon Library for Svelte" width="100%" />
  </a>
</p>

<p align="center">
  <a href="https://npmjs.com/package/@vezham/icons-svelte"><img src="https://img.shields.io/npm/v/@vezham/icons-svelte?color=black&label=npm" alt="npm version" /></a>
  <a href="https://npmjs.com/package/@vezham/icons-svelte"><img src="https://img.shields.io/npm/dm/@vezham/icons-svelte?color=black&label=downloads" alt="npm downloads" /></a>
  <a href="https://github.com/vezham/reicon/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-black" alt="MIT License" /></a>
  <a href="https://vezham.com"><img src="https://img.shields.io/badge/docs-vezham.com-black" alt="Documentation" /></a>
  <a href="https://github.com/vezham/reicon"><img src="https://img.shields.io/badge/github-Vezham-black" alt="GitHub" /></a>
</p>

<h1 align="center">Vezham Svelte</h1>

<p align="center">
  <b>1273+ pixel-perfect SVG icons</b> • outline, filled, duotone-outline, and duotone-filled weights • Svelte component wrapper • Zero dependencies • MIT Licensed
</p>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#usage">Usage</a> •
  <a href="#props">Props</a> •
  <a href="#tree-shaking">Tree-shaking</a> •
  <a href="#icon-names">Icon Names</a> •
  <a href="#typescript">TypeScript</a>
</p>

**Vezham Svelte** is the official Svelte package for <a href="https://vezham.com">Vezham</a> — a free, open-source SVG icon library featuring 1273+ handcrafted, grid-aligned icons. Every component is tree-shakeable, fully TypeScript-ready, and ships with zero dependencies.

| 🔗 &nbsp; Resource | Link |
|---|---|
| 🌐 &nbsp; Website & icon browser | [vezham.com](https://vezham.com) |
| 📖 &nbsp; Documentation | [vezham.com/docs](https://vezham.com/docs) |
| 📦 &nbsp; Core package (vanilla JS) | [vezham](https://npmjs.com/package/vezham) |
| 🎨 &nbsp; Figma plugin | [vezham.com/docs/figma](https://vezham.com/docs/figma) |

---

## Install

```bash
npm i @vezham/icons-svelte
# or
bun add @vezham/icons-svelte
# or
yarn add @vezham/icons-svelte
```

<details>
<summary><b>Requirements</b></summary>

- **Svelte** ≥ 4.0 or **Svelte 5** (runes mode)
- No other dependencies required.

</details>

---

## Usage

### Basic

```svelte
<script>
  import { Home, ShieldCheck, AltArrowDown } from '@vezham/icons-svelte';
</script>

<Home />
<ShieldCheck size={32} color="#d97757" />
<AltArrowDown weight="filled" />
```

### Weights

Every icon ships in four weights — **outline**, **filled**, **duotone-outline**, and **duotone-filled**:

```svelte
<Home />                        <!-- outline (default) -->
<Home weight="filled" />        <!-- filled -->
<Home weight="duotone-outline" />
<Home weight="duotone-filled" />
```

### Sizing & coloring

```svelte
<Home size={32} />                    <!-- 32×32px -->
<Home size={48} color="#d97757" />    <!-- Custom size and color -->
<Home color="currentColor" />         <!-- Inherits parent text color -->
```

### Direct icon import (smallest bundle)

For the absolute minimum bundle size, import icons directly from the sub-path:

```js
import Home from '@vezham/icons-svelte/icons/Home.svelte';
import ShieldCheck from '@vezham/icons-svelte/icons/ShieldCheck.svelte';
```

### All SVG attributes are supported

Pass any standard SVG attribute — `class`, `style`, `on:click`, `aria-*`, etc.:

```svelte
<Home
  size={48}
  color="red"
  class="my-icon"
  style="margin-right: 8px"
  on:click={() => console.log('clicked')}
  aria-label="Home"
/>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number | string` | `24` | Icon width & height (number = px) |
| `color` | `string` | — | Primary icon stroke/fill color. Leave unset to use CSS class. |
| `weight` | `'outline' | 'filled' | 'duotone-outline' | 'duotone-filled'` | `'outline'` | Icon style variant |
| `strokeWidth` | `number | string` | — | Override the default stroke width |
| `class` | `string` | — | Additional CSS class on the `<svg>` element |
| `style` | `string` | — | Additional inline styles |

Any valid SVG attribute (e.g. `id`, `aria-*`) is forwarded to the underlying `<svg>` element.

---

## Tree-shaking

Every icon is a standalone ES module. Modern bundlers — **Vite**, **Webpack**, **Rollup**, **esbuild** — automatically tree-shake unused icons, keeping only what you import.

```js
// ✅ Only Home is included in your production bundle
import { Home } from '@vezham/icons-svelte';

// ✅ Even smaller — direct path import skips the barrel file entirely
import Home from '@vezham/icons-svelte/icons/Home.svelte';
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

Browse and search all 1273+ icons at <a href="https://vezham.com">vezham.com</a>.

---

## TypeScript

Full type declarations ship with the package — no separate `@types/` installation needed.

```ts
import { Home, type IconProps, type IconWeight } from '@vezham/icons-svelte';

const weight: IconWeight = 'filled';
const props: IconProps = { size: 32, color: '#d97757', weight };
```

### Exported types

| Type | Description |
|------|-------------|
| `IconProps` | Combined icon props + Svelte SVG attributes |
| `IconWeight` | `'outline' | 'filled' | 'duotone-outline' | 'duotone-filled'` |

---

## Features

- **1273+ icons** — Handcrafted, pixel-perfect SVGs across a wide range of categories
- **Four weights** — outline, filled, duotone-outline, and duotone-filled, with consistent 24×24 grid alignment
- **Tree-shakeable** — Import only what you use; every icon is a standalone ES module
- **Zero dependencies** — No runtime overhead beyond Svelte itself
- **TypeScript-ready** — Full type declarations included, no extra packages needed
- **SVG attribute passthrough** — All standard SVG props (`class`, `style`, `aria-*`, etc.) are forwarded
- **MIT licensed** — Free for personal and commercial use

---

## Related packages

| Package | Description |
|---------|-------------|
| [`vezham`](https://npmjs.com/package/vezham) | Core vanilla JS + CDN runtime. No framework required. |
| [`@vezham/icons-react`](https://npmjs.com/package/@vezham/icons-react) | React components for 1273+ icons. |
| [`@vezham/icons-vue`](https://npmjs.com/package/@vezham/icons-vue) | Vue 3 components for 1273+ icons. |
| [`@vezham/icons-svelte`](https://npmjs.com/package/@vezham/icons-svelte) | **You are here.** Svelte components for 1273+ icons. |

---

## Links

- 🌐 &nbsp; Website: [vezham.com](https://vezham.com)
- 📖 &nbsp; Documentation: [vezham.com/docs](https://vezham.com/docs)
- 📦 &nbsp; npm: [npmjs.com/package/@vezham/icons-svelte](https://npmjs.com/package/@vezham/icons-svelte)
- 🐙 &nbsp; GitHub: [github.com/vezham/reicon](https://github.com/vezham/reicon)
- 🐛 &nbsp; Issues: [github.com/vezham/reicon/issues](https://github.com/vezham/reicon/issues)

---

## License

MIT © [Dev Chauhan](https://devchauhan.in)

Free to use in personal and commercial projects. Attribution is appreciated but not required.
