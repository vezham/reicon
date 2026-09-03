import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import JSZip from 'jszip';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);
const { loadIconData } = require('./lib/icon-source.cjs');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const ZIP_OUT_PATH = path.join(PUBLIC_DIR, 'vezham-icons.zip');
const WEIGHTS = ['outline', 'filled', 'duotone-outline', 'duotone-filled'];

console.log('Generating compressed ZIP archive for all Vezham icons...');

function rewriteColors(svg) {
  let code = svg.replace(/fill="white"/g, 'fill="#000000"');
  return code.replace(/currentColor/g, '#000000');
}

async function run() {
  try {
    const rawData = loadIconData();
    const zip = new JSZip();
    
    const folders = Object.fromEntries(WEIGHTS.map((weight) => [weight, zip.folder(weight)]));
    const counts = Object.fromEntries(WEIGHTS.map((weight) => [weight, 0]));

    if (rawData.categories) {
      for (const catData of Object.values(rawData.categories)) {
        for (const [iconKey, icon] of Object.entries(catData.icons || {})) {
          for (const weight of WEIGHTS) {
            const source = icon.weights?.[weight];
            if (source?.code) {
              const code = rewriteColors(source.code);
              const fileContent = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">${code}</svg>`;
              folders[weight].file(`${iconKey}.svg`, fileContent);
              counts[weight]++;
            }
          }
        }
      }
    }

    console.log(`Adding icons to ZIP archive: ${WEIGHTS.map((weight) => `${counts[weight]} ${weight}`).join(', ')}...`);

    // Generate zip content as node buffer
    const content = await zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: { level: 9 } // Maximum compression
    });

    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    fs.writeFileSync(ZIP_OUT_PATH, content);
    console.log(`Successfully generated and compressed Vezham ZIP archive at ${ZIP_OUT_PATH} (${(content.length / 1024 / 1024).toFixed(2)} MB)`);
  } catch (error) {
    console.error('Error generating icons ZIP archive:', error);
    process.exit(1);
  }
}

run();
