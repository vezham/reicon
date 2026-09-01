#!/usr/bin/env node
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, '../src/data/search-index.json');
const DUOTONE_OUT_PATH = resolve(__dirname, '../src/data/duotone-icons.json');
const require = createRequire(import.meta.url);
const { loadDuotoneIcons, loadIconData } = require('./lib/icon-source.cjs');

const data = loadIconData();

const entries = [];
const seenNames = new Set();

const categories = data.categories || {};
for (const [catKey, catData] of Object.entries(categories)) {
  const icons = catData.icons || catData;
  if (!icons || typeof icons !== 'object') continue;

  for (const [iconKey, icon] of Object.entries(icons)) {
    if (seenNames.has(iconKey)) continue;
    seenNames.add(iconKey);

    const tags = new Set();
    tags.add(iconKey);

    if (Array.isArray(icon.description)) {
      for (const t of icon.description) tags.add(t);
    } else if (typeof icon.description === 'string') {
      tags.add(icon.description);
    }

    for (const part of iconKey.split('-')) {
      if (part.length > 1) tags.add(part);
    }

    entries.push({
      n: iconKey,
      c: catKey,
      t: [...tags],
    });
  }
}

entries.sort((a, b) => a.n.localeCompare(b.n));

writeFileSync(OUT_PATH, JSON.stringify(entries, null, 2) + '\n', 'utf-8');
console.log(`generate-website-search-index: wrote ${entries.length} entries to src/data/search-index.json`);

const duotoneData = loadDuotoneIcons();
writeFileSync(DUOTONE_OUT_PATH, JSON.stringify(duotoneData, null, 2) + '\n', 'utf-8');
console.log(`generate-website-search-index: wrote ${Object.keys(duotoneData.icons).length} entries to src/data/duotone-icons.json`);
