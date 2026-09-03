const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const ICONS_DIR = path.join(ROOT, 'data', 'icons');
const TAGS_PATH = path.join(ROOT, 'data', 'icon-tags.json');

const WEIGHT_FILES = {
  outline: 'outline',
  filled: 'filled',
  'duotone-outline': 'duotone-outline',
  'duotone-filled': 'duotone-filled',
};

const DUOTONE_WEIGHTS = ['duotone-outline', 'duotone-filled'];

function readJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function toPosix(relativePath) {
  return relativePath.split(path.sep).join('/');
}

function minifySvg(svg) {
  return svg
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function normalizeSvgColors(svg) {
  return svg
    .replace(/#1C274C/gi, 'currentColor')
    .replace(/fill="white"/g, 'fill="currentColor"')
    .replace(/stroke="white"/g, 'stroke="currentColor"');
}

function stripSvgWrapper(svg) {
  const match = svg.match(/^<svg\b([^>]*)>([\s\S]*?)<\/svg>\s*$/i);
  if (!match) return { code: svg.trim(), viewBox: undefined };

  const attrs = match[1] || '';
  const viewBoxMatch = attrs.match(/\bviewBox=(["'])(.*?)\1/i);
  return {
    code: match[2].trim(),
    viewBox: viewBoxMatch ? viewBoxMatch[2] : undefined,
  };
}

function readSvgWeight(filePath) {
  const raw = minifySvg(normalizeSvgColors(fs.readFileSync(filePath, 'utf-8')));
  const parsed = stripSvgWrapper(raw);
  const weight = { code: parsed.code };
  if (parsed.viewBox && parsed.viewBox !== '0 0 24 24') {
    weight.viewBox = parsed.viewBox;
  }
  return weight;
}

function walkIconDirs(baseDir) {
  const dirs = [];
  if (!fs.existsSync(baseDir)) return dirs;

  const stack = [''];
  while (stack.length > 0) {
    const rel = stack.pop();
    const abs = path.join(baseDir, rel);
    const entries = fs.readdirSync(abs, { withFileTypes: true });
    const hasWeight = entries.some((entry) => {
      if (!entry.isFile()) return false;
      return Boolean(WEIGHT_FILES[path.basename(entry.name, '.svg')]);
    });

    if (hasWeight) {
      dirs.push(rel);
      continue;
    }

    for (const entry of entries) {
      if (entry.isDirectory()) {
        stack.push(path.join(rel, entry.name));
      }
    }
  }

  return dirs.sort((a, b) => toPosix(a).localeCompare(toPosix(b)));
}

function loadIconData(options = {}) {
  const iconsDir = options.iconsDir || ICONS_DIR;
  if (!fs.existsSync(iconsDir)) {
    throw new Error(`Icon source directory not found at ${iconsDir}`);
  }

  const tags = readJson(options.tagsPath || TAGS_PATH, {});
  const data = { version: '1.0.0', categories: {} };

  for (const iconRelDir of walkIconDirs(iconsDir)) {
    const parts = toPosix(iconRelDir).split('/');
    if (parts.length < 2) {
      throw new Error(`Icon directory must be data/icons/<category>/<name>: ${iconRelDir}`);
    }

    const category = parts[0];
    const iconName = parts.slice(1).join('-');
    const iconDir = path.join(iconsDir, iconRelDir);
    const meta = readJson(path.join(iconDir, 'meta.json'), {});
    const weights = {};

    for (const [fileName, weightName] of Object.entries(WEIGHT_FILES)) {
      const svgPath = path.join(iconDir, `${fileName}.svg`);
      if (fs.existsSync(svgPath)) {
        weights[weightName] = readSvgWeight(svgPath);
      }
    }

    if (Object.keys(weights).length === 0) continue;

    const categoryData = data.categories[category] || { icons: {} };
    data.categories[category] = categoryData;
    categoryData.icons[iconName] = {
      ...meta,
      description: tags[iconName] || meta.description || [],
      weights,
    };
  }

  return data;
}

function loadDuotoneIcons(options = {}) {
  const data = loadIconData(options);
  const icons = {};

  for (const [category, categoryData] of Object.entries(data.categories || {})) {
    for (const [name, icon] of Object.entries(categoryData.icons || {})) {
      const weights = {};
      for (const weight of DUOTONE_WEIGHTS) {
        const weightData = icon.weights && icon.weights[weight];
        if (weightData && weightData.code) {
          weights[weight] = weightData;
        }
      }
      if (Object.keys(weights).length === 0) continue;
      icons[name] = {
        weights,
        category,
        description: icon.description || [],
      };
    }
  }

  return { icons };
}

module.exports = {
  ICONS_DIR,
  WEIGHT_FILES,
  loadDuotoneIcons,
  loadIconData,
  minifySvg,
  normalizeSvgColors,
};
