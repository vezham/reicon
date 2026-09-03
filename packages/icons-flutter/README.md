<p align="center">
  <a href="https://vezham.com">
    <img src="https://vezham.com/readme-assets/flutter.svg" alt="Vezham Flutter — SVG Icon Library for Dart & Flutter" width="100%" />
  </a>
</p>

<p align="center">
  <a href="https://pub.dev/packages/vezham_icons"><img src="https://img.shields.io/pub/v/vezham_icons?color=black&label=pub" alt="pub version" /></a>
  <a href="https://pub.dev/packages/vezham_icons/score"><img src="https://img.shields.io/pub/points/vezham_icons?color=black" alt="pub points" /></a>
  <a href="https://pub.dev/packages/vezham_icons"><img src="https://img.shields.io/pub/likes/vezham_icons?color=black" alt="pub likes" /></a>
  <a href="https://github.com/vezham/reicon/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-black" alt="MIT License" /></a>
  <a href="https://vezham.com"><img src="https://img.shields.io/badge/docs-vezham.com-black" alt="Documentation" /></a>
</p>

<h1 align="center">Vezham for Dart &amp; Flutter</h1>

<p align="center">
  <b>2674+ pixel-perfect SVG icons</b> • Outline & Filled weights • Dart & Flutter • Zero dependencies • MIT Licensed
</p>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#usage">Usage</a> •
  <a href="#api">API</a> •
  <a href="#icon-naming">Icon Naming</a> •
  <a href="#related-packages">Related</a> •
  <a href="#links">Links</a>
</p>

**Vezham Flutter** is the official Dart & Flutter package for <a href="https://vezham.com">Vezham</a> — a free, open-source SVG icon library featuring 2674+ handcrafted, grid-aligned icons. Every icon is available in both Outline and Filled weights as raw SVG path data, ready for any Dart or Flutter SVG renderer.

| 🔗 &nbsp; Resource | Link |
|---|---|
| 🌐 &nbsp; Website & icon browser | [vezham.com](https://vezham.com) |
| 📖 &nbsp; Documentation | [vezham.com/docs](https://vezham.com/docs) |
| 🎨 &nbsp; Figma plugin | [vezham.com/docs/figma](https://vezham.com/docs/figma) |

---

## Install

Add to your `pubspec.yaml`:

```yaml
dependencies:
  vezham_icons: ^1.0.0
```

```bash
dart pub get
# or for Flutter: flutter pub get
```

<details>
<summary><b>Requirements</b></summary>

- **Dart** ≥ 3.0
- For Flutter: **flutter_svg** (recommended for rendering)
- No other dependencies required.

</details>

---

## Usage

```dart
import 'package:vezham_icons/icons.dart';
```

### Get SVG path data

```dart
// Outline weight (default)
String homePath = Vezham.outline.home;

// Filled weight
String settingsPath = Vezham.filled.settings;
```

### Build a complete SVG string

```dart
String svg = vezhamIconSvg(
  Vezham.outline.star,
  size: 32,
  color: '#d97757',
);
```

### Use with Flutter + flutter_svg

```dart
import 'package:flutter_svg/flutter_svg.dart';

SvgPicture.string(
  vezhamIconSvg(Vezham.outline.heart, size: 24),
  colorFilter: ColorFilter.mode(Colors.red, BlendMode.srcIn),
)
```

### Look up by name at runtime

```dart
String? icon = Vezham.outline['home'];  // SVG path or null
```

### Iterate over all icons

```dart
for (String name in Vezham.outline.names) {
  print('$name: ${Vezham.outline[name]}');
}
print('Total: ${Vezham.outline.length} icons');
```

---

## API

### `Vezham`

Entry point. Static accessors for each weight:

| Member | Return type | Description |
|--------|-------------|-------------|
| `Vezham.outline` | `VezhamIconWeight` | All icons in Outline weight |
| `Vezham.filled` | `VezhamIconWeight` | All icons in Filled weight |

### `VezhamIconWeight`

Access icons within a weight:

| Member | Return type | Description |
|--------|-------------|-------------|
| `weight.name` | `String` | Display name (`"Outline"` / `"Filled"`) |
| `weight.length` | `int` | Number of icons |
| `weight.names` | `Iterable<String>` | All icon names |
| `weight[iconName]` | `String?` | Look up by name |
| `weight.iconName` | `String` | Direct getter for each icon (e.g. `home`, `settings`) |

### `vezhamIconSvg()`

```dart
String vezhamIconSvg(String pathData, {int size = 24, String color = 'currentColor'})
```

Wraps raw SVG path data in a complete `<svg>` tag.

---

## Icon Naming

Icons use **camelCase** derived from their original kebab-case names:

| Original (kebab) | Dart accessor |
|------------------|---------------|
| `arrow-down` | `Vezham.outline.arrowDown` |
| `arrow-down-2` | `Vezham.outline.arrowDown2` |
| `3d-box` | `Vezham.outline.i3dBox` |
| `align-center-h` | `Vezham.outline.alignCenterH` |
| `user-circle` | `Vezham.outline.userCircle` |

Names starting with a digit are prefixed with `i` (e.g. `3d-box` → `i3dBox`).

Browse and search all 2674+ icons at <a href="https://vezham.com">vezham.com</a>.

---

## Features

- **2674+ icons** — Handcrafted, pixel-perfect SVGs across a wide range of categories
- **Two weights** — Outline and Filled, with consistent 24×24 grid alignment
- **Zero dependencies** — Pure Dart, no native plugins required
- **Runtime lookup** — Access icons by string name with `Vezham.outline['name']`
- **SVG builder** — `vezhamIconSvg()` helper wraps path data in a complete SVG string
- **Iterable** — Iterate over all icon names and path data
- **MIT licensed** — Free for personal and commercial use

---

## Related packages

| Package | Description |
|---------|-------------|
| [`/icons`](https://npmjs.com/package/@vezham/icons) | Core vanilla JS + CDN |
| [`@vezham/icons-react`](https://npmjs.com/package/@vezham/icons-react) | React components for all 2674+ icons |
| [`@vezham/icons-vue`](https://npmjs.com/package/@vezham/icons-vue) | Vue 3 components for all 2674+ icons |
| [`@vezham/icons-svelte`](https://npmjs.com/package/@vezham/icons-svelte) | Svelte components for all 2674+ icons |
| [`@vezham/icons-react-native`](https://npmjs.com/package/@vezham/icons-react-native) | React Native components |
| [vezham-figma](https://vezham.com/figma) | Figma plugin |

---

## Links

- 🌐 &nbsp; Website: [vezham.com](https://vezham.com)
- 📖 &nbsp; Documentation: [vezham.com/docs](https://vezham.com/docs)
- 📦 &nbsp; pub: [pub.dev/packages/vezham_icons](https://pub.dev/packages/vezham_icons)
- 🐙 &nbsp; GitHub: [github.com/vezham/reicon](https://github.com/vezham/reicon)
- 🐛 &nbsp; Issues: [github.com/vezham/reicon/issues](https://github.com/vezham/reicon/issues)

---

## License

MIT © [Dev Chauhan](https://devchauhan.in)

Free to use in personal and commercial projects. Attribution is appreciated but not required.
