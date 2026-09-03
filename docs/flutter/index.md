# Vezham for Flutter

> 2700+ handcrafted, pixel-perfect SVG icons in Outline and Filled weights — now available for Flutter.

## Install

Add to your `pubspec.yaml`:

```yaml
dependencies:
  vezham_icons_flutter: ^1.0.0
```

```bash
flutter pub get
```

## Usage

```dart
import 'package:vezham_icons_flutter/vezham_icons_flutter.dart';
import 'package:flutter_svg/flutter_svg.dart';
```

### Outline icons

```dart
SvgPicture.string(
  vezhamIconSvg(Vezham.outline.home, size: 24),
)
```

### Filled icons

```dart
SvgPicture.string(
  vezhamIconSvg(Vezham.filled.settings, size: 24),
)
```

### With custom color

```dart
SvgPicture.string(
  vezhamIconSvg(Vezham.outline.star, size: 32),
  colorFilter: ColorFilter.mode(Colors.amber, BlendMode.srcIn),
)
```

## API

| Accessor | Description |
|----------|-------------|
| `Vezham.outline.*` | 2674 outline icons |
| `Vezham.filled.*` | 2674 filled icons |
| `vezhamIconSvg(path)` | Build SVG string from path data |

## Links

- [pub.dev](https://pub.dev/packages/vezham_icons_flutter)
- [Source](./packages/icons-flutter)
