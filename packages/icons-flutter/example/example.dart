// ignore_for_file: depend_on_referenced_packages
//
// This is a simple usage example for the `package:vezham_icons/icons.dart` entrypoint.
//
// Run with: dart example/example.dart

import 'package:vezham_icons/icons.dart';

void main() {
  print('=== Vezham Icon Library ===\n');

  // 1. Access SVG path data
  final homePath = Vezham.outline.home;
  final settingsFilled = Vezham.filled.settings;
  final starDuotoneOutline = Vezham.duotoneOutline.star;
  final heartDuotoneFilled = Vezham.duotoneFilled.heart;

  print('outline home path length: ${homePath.length} chars');
  print('filled settings path length: ${settingsFilled.length} chars');
  print('duotone-outline star path length: ${starDuotoneOutline.length} chars');
  print('duotone-filled heart path length: ${heartDuotoneFilled.length} chars');

  // 2. Build a complete SVG string
  final svg = vezhamIconSvg(
    Vezham.outline.star,
    size: 32,
    color: '#d97757',
  );
  print('\nStar icon SVG:');
  print(svg);

  // 3. Iterate over icons
  print('\nFirst 5 outline icons:');
  for (final name in Vezham.outline.names.take(5)) {
    print('  - $name');
  }

  // 4. Look up by name
  final icon = Vezham.outline['home'];
  print('\nHome icon by lookup: ${icon != null}');

  // 5. Metadata
  print('\noutline: ${Vezham.outline.length} icons');
  print('filled:  ${Vezham.filled.length} icons');
  print('duotone-outline: ${Vezham.duotoneOutline.length} icons');
  print('duotone-filled:  ${Vezham.duotoneFilled.length} icons');

  // 6. Weight name
  print('Weight: ${Vezham.outline.name}');
  print('Weight: ${Vezham.filled.name}');
  print('Weight: ${Vezham.duotoneOutline.name}');
  print('Weight: ${Vezham.duotoneFilled.name}');
}
