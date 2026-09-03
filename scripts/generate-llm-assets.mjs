#!/usr/bin/env node
/**
 * Generates public/llms-icons.txt and public/llms-illustrations.txt
 * containing all icon & illustration mappings for AI agents & LLMs.
 * Run during build time via `npm run build`.
 */

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const { loadIconData } = require('./lib/icon-source.cjs');

const ICON_NAMES_JSON = resolve(__dirname, 'icon-names.json');
const OUTPUT_FILE = resolve(__dirname, '../public/llms-icons.txt');

function generateIcons() {
  console.log('Generating LLM Icon Directory...');

  if (!existsSync(ICON_NAMES_JSON)) {
    return;
  }

  const iconNames = JSON.parse(readFileSync(ICON_NAMES_JSON, 'utf-8'));
  const iconData = loadIconData();
  const categoryMap = {};
  const seenNames = new Set();

  for (const [category, categoryData] of Object.entries(iconData.categories || {})) {
    for (const name of Object.keys(categoryData.icons || {})) {
      if (seenNames.has(name)) continue;
      seenNames.add(name);
      categoryMap[name] = category;
    }
  }

  const grouped = {};
  let totalCount = 0;

  for (const [kebab, pascal] of Object.entries(iconNames)) {
    const category = categoryMap[kebab] || 'general';
    const normalizedCategory = category.toLowerCase().trim();

    if (!grouped[normalizedCategory]) {
      grouped[normalizedCategory] = [];
    }

    grouped[normalizedCategory].push({ kebab, pascal });
    totalCount++;
  }

  const sections = [];
  const sortedCategories = Object.keys(grouped).sort();

  for (const cat of sortedCategories) {
    const items = grouped[cat];
    items.sort((a, b) => a.kebab.localeCompare(b.kebab));

    const formattedCatName = cat.charAt(0).toUpperCase() + cat.slice(1);
    const lines = [`### ${formattedCatName}`];

    for (const item of items) {
      lines.push(`- ${item.kebab} -> ${item.pascal}`);
    }

    sections.push(lines.join('\n'));
  }

  const output = `# Vezham — Complete Icon Names & Component Mapping

This file lists every icon in the Vezham SVG icon library by category. Use it to look up the correct import name (PascalCase), CDN attribute value (kebab-case), or direct SVG CDN URL for any icon.

**Quick lookup**: Find the icon's kebab-case name below, then:
- **Components** (React/Vue/Svelte): convert to PascalCase (\`arrow-up-right\` → \`ArrowUpRight\`)
- **CDN**: use the kebab-case name as-is: \`<vx-icon icon="arrow-up-right">\`
- **Direct SVG CDN**: use \`https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/icons/{name}.svg\` for outline, \`{name}-filled.svg\` for filled, \`{name}-duotone-outline.svg\`, or \`{name}-duotone-filled.svg\` when available

## Stats
- **Total**: ${totalCount} unique designs with outline, filled, duotone-outline, and duotone-filled assets where available
- **Weights**: "outline" (default) | "filled" | "duotone-outline" | "duotone-filled"
- **Grid**: 24×24 px

---

## Icon Directory by Category

${sections.join('\n\n')}
`;

  writeFileSync(OUTPUT_FILE, output, 'utf-8');
  console.log(`Successfully generated LLM Icon Directory containing ${totalCount} mappings to ${OUTPUT_FILE}`);
}

function generateIllustrations() {
  console.log('Generating LLM Illustration Directory...');
  const ILLUST_CATS = resolve(__dirname, '../public/illustration-data/categories.json');
  const ILLUST_OUT = resolve(__dirname, '../public/llms-illustrations.txt');

  if (!existsSync(ILLUST_CATS)) return;

  const data = JSON.parse(readFileSync(ILLUST_CATS, 'utf-8'));
  const lines = [
    `# Vezham — 71,000+ Free SVG Illustrations Directory for AI Agents`,
    ``,
    `> Browse and fetch 71,000+ free open-source vector SVG illustrations for React, Vue, HTML, and Figma.`,
    `> **CDN URL Pattern**: \`https://cdn.vezham.com/{slug}.svg\` (e.g., \`https://cdn.vezham.com/aspen.svg\`)`,
    `> **Browse Page**: https://vezham.com/illustration`,
    `> **Detail Page Pattern**: https://vezham.com/illustration/{slug}`,
    ``,
    `## Statistics`,
    `- **Total Illustrations**: ${data.total_icons || 71262}`,
    `- **Categories**: ${data.categories ? data.categories.length : 0}`,
    `- **License**: MIT`,
    ``,
    `## Categories & Subcategories Breakdown`,
  ];

  if (data.categories) {
    for (const cat of data.categories) {
      lines.push(`\n### Category: ${cat.name.toUpperCase()} (${cat.count} illustrations)`);
      if (cat.subcategories) {
        for (const sub of cat.subcategories) {
          lines.push(`- **${sub.name}**: ${sub.count} illustrations`);
        }
      }
    }
  }

  writeFileSync(ILLUST_OUT, lines.join('\n'), 'utf-8');
  console.log(`Successfully generated LLM Illustration Directory to ${ILLUST_OUT}`);
}

generateIcons();
generateIllustrations();
