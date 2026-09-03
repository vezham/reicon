<p align="center">
  <a href="https://npmjs.com/package/@vezham/icons-react-native"><img src="https://img.shields.io/npm/v/@vezham/icons-react-native?color=black&label=npm" alt="npm version" /></a>
  <a href="https://npmjs.com/package/@vezham/icons-react-native"><img src="https://img.shields.io/npm/dm/@vezham/icons-react-native?color=black&label=downloads" alt="npm downloads" /></a>
  <a href="https://github.com/vezham/reicon/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-black" alt="MIT License" /></a>
  <a href="https://vezham.com"><img src="https://img.shields.io/badge/docs-vezham.com-black" alt="Documentation" /></a>
</p>

# Vezham React Native

> 1273+ pixel-perfect SVG icons • outline, filled, duotone-outline, and duotone-filled weights • React Native component wrapper • Zero dependencies • MIT Licensed

**Vezham React Native** is the official React Native package for Vezham — a free, open-source SVG icon library with 1273+ handcrafted, grid-aligned icons built for developers and designers. Every component is optimized for tree-shaking and fully TypeScript-ready.

- 🔗 **Website & icon browser:** [vezham.com](https://vezham.com)
- 📦 **Core package:** [vezham](https://npmjs.com/package/vezham)
- ⚛️ **React package:** [@vezham/icons-react](https://npmjs.com/package/@vezham/icons-react)
- 🎨 **Figma plugin:** [vezham.com/figma](https://vezham.com/figma)

---

## Install

```bash
npm i @vezham/icons-react-native react-native-svg
# or
yarn add @vezham/icons-react-native react-native-svg
# or
bun add @vezham/icons-react-native react-native-svg
```

**Note:** This package requires `react-native-svg` as a peer dependency. Make sure to install it and follow its [setup instructions](https://github.com/software-mansion/react-native-svg#installation).

---

## Usage

```jsx
import { Home, ShieldCheck, AltArrowDown } from '@vezham/icons-react-native';

function App() {
  return (
    <View>
      <Home />
      <ShieldCheck size={32} color="#d97757" />
      <AltArrowDown weight="filled" />
    </View>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Icon size in pixels |
| `color` | `string` | `#000000` | Primary icon color |
| `secondaryColor` | `string` | same as color | Secondary color |
| `weight` | `IconWeight` | `outline` | Icon weight / style |
| `strokeWidth` | `number | string` | — | Override stroke width |

Plus all standard `react-native-svg` SVG props.

### Weights

- **outline** — clean outlined style (default)
- **filled** — solid filled style
- **duotone-outline** — two-tone outline style
- **duotone-filled** — two-tone filled style

```jsx
import { Home } from '@vezham/icons-react-native';

<Home />                           {/* outline (default) */}
<Home weight="filled" />           {/* filled */}
<Home weight="filled" color="red" />
<Home weight="duotone-outline" />
<Home weight="duotone-filled" />
```

### Direct icon import (smallest bundle)

```jsx
import Home from '@vezham/icons-react-native/icons/Home';
```

### All react-native-svg props are supported

```jsx
<Home
  size={48}
  color="red"
  style={{ marginRight: 8 }}
  onPress={() => console.log('pressed')}
/>
```

---

## Tree-shaking — import only what you use

Every icon is a standalone ES module. Metro bundler will tree-shake unused icons automatically.

```jsx
// ✅ Only Home is included in your bundle
import { Home } from '@vezham/icons-react-native';
```

---

## Icon Names

Icons use **PascalCase**, derived from their original kebab-case names:

| Original name | Import |
|---------------|--------|
| `home` | `Home` |
| `shield-check` | `ShieldCheck` |
| `alt-arrow-down` | `AltArrowDown` |
| `shopping-cart` | `ShoppingCart` |
| `user-circle` | `UserCircle` |

Browse all 1273+ icons at [vezham.com](https://vezham.com).

---

## TypeScript

Full TypeScript support out of the box:

```tsx
import { Home, IconProps, IconWeight } from '@vezham/icons-react-native';

const weight: IconWeight = 'filled';
const props: IconProps = { size: 32, color: '#d97757', weight };

<Home {...props} />
```

---

## Why Vezham?

| | Vezham | React Native Vector Icons | Lucide RN |
|--|--------|---------------------------|-----------|
| **Icons** | 1273+ | 3000+ | 1600+ |
| **Weights** | outline + filled + duotone-outline + duotone-filled | Varies by set | Outline only |
| **Tree-shakeable** | ✅ | ❌ | ✅ |
| **TypeScript** | ✅ | ✅ | ✅ |
| **Zero dependencies** | ✅ (+ react-native-svg) | ✅ | ✅ (+ react-native-svg) |
| **MIT License** | ✅ | ✅ | ✅ |

---

## Related packages

| Package | Description |
|---------|-------------|
| [`vezham`](https://npmjs.com/package/vezham) | Core vanilla JS + CDN |
| [`@vezham/icons-react`](https://npmjs.com/package/@vezham/icons-react) | React components for all 1273+ icons |
| [`@vezham/icons-react-native`](https://npmjs.com/package/@vezham/icons-react-native) | **This package.** React Native components for all 1273+ icons |
| [`@vezham/icons-vue`](https://npmjs.com/package/@vezham/icons-vue) | Vue 3 components for all 1273+ icons |
| [`@vezham/icons-svelte`](https://npmjs.com/package/@vezham/icons-svelte) | Svelte components for all 1273+ icons |

---

## Links

- 🌐 Website: [vezham.com](https://vezham.com)
- 📖 Documentation: [vezham.com/docs](https://vezham.com/docs)
- 📦 npm (React Native): [npmjs.com/package/@vezham/icons-react-native](https://npmjs.com/package/@vezham/icons-react-native)
- 🐙 GitHub: [github.com/vezham/reicon](https://github.com/vezham/reicon)
- 🐛 Issues: [github.com/vezham/reicon/issues](https://github.com/vezham/reicon/issues)

---

## License

MIT © [Dev Chauhan](https://devchauhan.in)

Free to use in personal and commercial projects.
