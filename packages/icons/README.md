<p align="center">
  <a href="https://vezham.com">
    <img src="https://vezham.com/jspackage.png" alt="Vezham — SVG Icon Library for Vanilla JS" width="100%" />
  </a>
</p>

<p align="center">
  <a href="https://npmjs.com/package/@vezham/icons"><img src="https://img.shields.io/npm/v/vezham?color=black&label=npm" alt="npm version" /></a>
  <a href="https://npmjs.com/package/@vezham/icons"><img src="https://img.shields.io/npm/dm/vezham?color=black&label=downloads" alt="npm downloads" /></a>
  <a href="https://github.com/vezham/reicon/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-black" alt="MIT License" /></a>
  <a href="https://vezham.com"><img src="https://img.shields.io/badge/docs-vezham.com-black" alt="Documentation" /></a>
  <a href="https://github.com/vezham/reicon"><img src="https://img.shields.io/badge/github-Vezham-black" alt="GitHub" /></a>
</p>

<h1 align="center">Vezham</h1>

<p align="center">
  <b>1273+ pixel-perfect SVG icons</b> • outline, filled, duotone-outline, and duotone-filled weights • Vanilla JS & CDN runtime • Zero dependencies • MIT Licensed
</p>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#usage">Usage</a> •
  <a href="#options">Options</a> •
  <a href="#tree-shaking">Tree-shaking</a> •
  <a href="#icon-names">Icon Names</a> •
  <a href="#typescript">TypeScript</a> •
  <a href="#cdn">CDN</a>
</p>

**Vezham** is the core vanilla JavaScript package for <a href="https://vezham.com">Vezham</a> — a free, open-source SVG icon library featuring 1273+ handcrafted, grid-aligned icons. Use it directly as ES modules, or load via CDN with zero build step. Every icon is tree-shakeable, fully TypeScript-ready, and ships with no dependencies.

| 🔗 &nbsp; Resource | Link |
|---|---|
| 🌐 &nbsp; Website & icon browser | [vezham.com](https://vezham.com) |
| 📖 &nbsp; Documentation | [vezham.com/docs](https://vezham.com/docs) |
| ⚛️ &nbsp; React package | [@vezham/icons-react](https://npmjs.com/package/@vezham/icons-react) |
| 🎨 &nbsp; Figma plugin | [vezham.com/docs/figma](https://vezham.com/docs/figma) |

---

## Install

```bash
npm i @vezham/icons
# or
bun add @vezham/icons
# or
yarn add @vezham/icons
```

### CDN (no build step required)

```html
<script src="https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/vezham-icons.js"></script>
```

No bundler, no framework — just a `<script>` tag.

---

## Usage

### Vanilla JS — create SVG elements

```js
import { Home, ShieldCheck, AltArrowDown } from '@vezham/icons';

document.body.appendChild(Home());
document.body.appendChild(ShieldCheck({ size: 32, color: '#d97757' }));
document.body.appendChild(AltArrowDown({ weight: 'filled' }));
```

### Get SVG as a string

```js
import { Home } from '@vezham/icons';

const svgString = Home.toSvg({ size: 32, color: 'red' });
element.innerHTML = svgString;
```

### Weights

Every icon ships in four weights — **outline**, **filled**, **duotone-outline**, and **duotone-filled**:

```js
import { Home } from '@vezham/icons';

Home()                    // outline (default)
Home({ weight: 'filled' }) // filled
Home({ weight: 'duotone-outline' })
Home({ weight: 'duotone-filled' })
```

### Sizing & coloring

```js
Home({ size: 32 })                // 32×32px
Home({ size: 48, color: 'red' })  // Custom size and color
Home({ color: 'currentColor' })   // Inherits parent text color
```

### CDN / Script tag

```html
<script src="https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/vezham-icons.js"></script>
<script>
  document.body.appendChild(VezhamIcons.Home());
  document.body.appendChild(VezhamIcons.ShieldCheck({ size: 32, color: '#d97757' }));
</script>
```

### Direct SVG CDN

```html
<img src="https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/icons/home.svg" alt="Home" />
<img src="https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/icons/home-filled.svg" alt="Home" />
<img src="https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/icons/home-duotone-outline.svg" alt="Home" />
<img src="https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/icons/home-duotone-filled.svg" alt="Home" />
```

Use `/dist/cdn/icons/{name}.svg` for the default outline SVG, `/dist/cdn/icons/{name}-filled.svg` for filled, `/dist/cdn/icons/{name}-duotone-outline.svg`, or `/dist/cdn/icons/{name}-duotone-filled.svg`.
Every direct SVG uses a flat kebab-case filename under `/dist/cdn/icons`.

### Direct icon import (smallest bundle)

```js
import Home from '@vezham/icons/Home';
import ShieldCheck from '@vezham/icons/ShieldCheck';
```

---

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `size` | `number | string` | `24` | Icon width & height (number = px) |
| `color` | `string` | — | Primary icon stroke/fill color. Leave unset to use CSS. |
| `weight` | `'outline' | 'filled' | 'duotone-outline' | 'duotone-filled'` | `'outline'` | Icon style variant |
| `strokeWidth` | `number | string` | — | Override the default stroke width |
| `className` | `string` | — | Additional CSS class on the `<svg>` element |
| `attrs` | `object` | — | Any additional SVG attributes |

---

## Tree-shaking

Every icon is a standalone ES module. Modern bundlers — **Vite**, **Webpack**, **Rollup**, **esbuild** — automatically tree-shake unused icons, keeping only what you import.

```js
// ✅ Only Home is included in your production bundle
import { Home } from '@vezham/icons';

// ✅ Even smaller — direct path import skips the barrel file entirely
import Home from '@vezham/icons/Home';
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
import { Home, IconOptions, IconWeight } from '@vezham/icons';

const weight: IconWeight = 'filled';
const options: IconOptions = { size: 32, color: '#d97757', weight };

const svg: SVGSVGElement = Home(options);
document.body.appendChild(svg);
```

### Exported types

| Type | Description |
|------|-------------|
| `IconOptions` | Options for creating an SVG element |
| `IconWeight` | `'outline' | 'filled' | 'duotone-outline' | 'duotone-filled'` |

---

## Features

- **1273+ icons** — Handcrafted, pixel-perfect SVGs across a wide range of categories
- **Four weights** — outline, filled, duotone-outline, and duotone-filled, with consistent 24×24 grid alignment
- **Tree-shakeable** — Import only what you use; every icon is a standalone ES module
- **Zero dependencies** — No runtime overhead whatsoever
- **TypeScript-ready** — Full type declarations included, no extra packages needed
- **CDN ready** — Drop a `<script>` tag and start using icons immediately
- **`toSvg()` helper** — Get raw SVG markup for any framework or template
- **MIT licensed** — Free for personal and commercial use

---

## Related packages

| Package | Description |
|---------|-------------|
| [`vezham`](https://npmjs.com/package/@vezham/icons) | **This package.** Core vanilla JS + CDN runtime. No framework required. |
| [`@vezham/icons-react`](https://npmjs.com/package/@vezham/icons-react) | React components for 1273+ icons. |
| [`@vezham/icons-vue`](https://npmjs.com/package/@vezham/icons-vue) | Vue 3 components for 1273+ icons. |
| [`@vezham/icons-svelte`](https://npmjs.com/package/@vezham/icons-svelte) | Svelte components for 1273+ icons. |

---

## Links

- 🌐 &nbsp; Website: [vezham.com](https://vezham.com)
- 📖 &nbsp; Documentation: [vezham.com/docs](https://vezham.com/docs)
- 📦 &nbsp; npm: [npmjs.com/package/@vezham/icons](https://npmjs.com/package/@vezham/icons)
- 🐙 &nbsp; GitHub: [github.com/vezham/reicon](https://github.com/vezham/reicon)
- 🐛 &nbsp; Issues: [github.com/vezham/reicon/issues](https://github.com/vezham/reicon/issues)

---

## License

MIT © [Dev Chauhan](https://devchauhan.in)

Free to use in personal and commercial projects. Attribution is appreciated but not required.
