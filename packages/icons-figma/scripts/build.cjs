#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DATA_PATH = path.join(__dirname, '..', '..', '..', 'data', 'icon-data.json');
const TEMPLATE_HTML_PATH = path.join(__dirname, '..', 'src', 'ui.html');
const DIST = path.join(ROOT, 'dist');
const OUTPUT_HTML_PATH = path.join(DIST, 'ui.html');
const LOGO_PATH = path.join(__dirname, '..', '..', '..', 'public', 'icon-light.webp');

console.log('Building Reicon Figma plugin package...');

try {
  if (!fs.existsSync(DATA_PATH)) {
    throw new Error(`Data file not found at ${DATA_PATH}`);
  }
  if (!fs.existsSync(TEMPLATE_HTML_PATH)) {
    throw new Error(`Template HTML file not found at ${TEMPLATE_HTML_PATH}`);
  }

  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  execFileSync('node', [
    path.join(ROOT, 'node_modules', 'typescript', 'bin', 'tsc'),
    '-p',
    path.join(ROOT, 'tsconfig.json'),
    '--outDir',
    DIST,
  ], { cwd: ROOT, stdio: 'inherit' });

  const rawData = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  const compactData = {};
  const categoriesList = [];

  if (rawData.categories) {
    for (const [catKey, catData] of Object.entries(rawData.categories)) {
      categoriesList.push({
        id: catKey,
        name: catData.name || catKey.charAt(0).toUpperCase() + catKey.slice(1)
      });

      for (const [iconKey, icon] of Object.entries(catData.icons || {})) {
        const weights = {};
        if (icon.weights) {
          if (icon.weights.Outline && icon.weights.Outline.code) {
            weights.Outline = icon.weights.Outline.code;
          }
          if (icon.weights.Filled && icon.weights.Filled.code) {
            weights.Filled = icon.weights.Filled.code;
          }
        }

        // Only include icon if it has at least one weight
        if (Object.keys(weights).length > 0) {
          compactData[iconKey] = {
            category: catKey,
            weights: weights,
            description: icon.description || []
          };
        }
      }
    }
  }

  // Load logo as base64
  let logoBase64 = '';
  if (fs.existsSync(LOGO_PATH)) {
    const logoBuffer = fs.readFileSync(LOGO_PATH);
    logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;
  }

  // Read the HTML template
  let templateContent = fs.readFileSync(TEMPLATE_HTML_PATH, 'utf-8');

  // Replace logo placeholder
  templateContent = templateContent.replace(/__REICON_LOGO_BASE64__/g, logoBase64);

  // Create inline scripts
  const inlineScripts = `
  <script>
    window.REICON_DATA = ${JSON.stringify(compactData)};
    window.REICON_CATEGORIES = ${JSON.stringify(categoriesList)};
  </script>
  `;

  // Inject before the closing </head> or at placeholder
  if (templateContent.includes('<!-- INJECT_ICONS_DATA -->')) {
    templateContent = templateContent.replace('<!-- INJECT_ICONS_DATA -->', inlineScripts);
  } else {
    templateContent = templateContent.replace('</head>', `${inlineScripts}\n</head>`);
  }

  fs.writeFileSync(OUTPUT_HTML_PATH, templateContent, 'utf-8');

  for (const file of ['manifest.json', 'icon.png', 'README.md', 'CHANGELOG.md']) {
    const source = path.join(ROOT, file);
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, path.join(DIST, file));
    }
  }

  const licensePath = path.join(ROOT, '..', '..', 'LICENSE');
  if (fs.existsSync(licensePath)) {
    fs.copyFileSync(licensePath, path.join(DIST, 'LICENSE'));
  }

  const srcPkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf-8'));
  const pkg = {
    name: srcPkg.name,
    version: srcPkg.version,
    description: srcPkg.description,
    repository: srcPkg.repository,
    bugs: srcPkg.bugs,
    homepage: srcPkg.homepage,
    main: 'code.js',
    files: ['code.js', 'ui.html', 'manifest.json', 'icon.png', 'README.md', 'CHANGELOG.md', 'LICENSE'],
    author: srcPkg.author,
    license: srcPkg.license,
  };

  fs.writeFileSync(path.join(DIST, 'package.json'), JSON.stringify(pkg, null, 2) + '\n');

  console.log(`Successfully built ${Object.keys(compactData).length} icons into ${DIST}`);
} catch (error) {
  console.error('Error compiling Figma plugin UI:', error);
  process.exit(1);
}
