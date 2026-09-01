import { readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';

const bundle = join(process.cwd(), 'packages', 'icons', 'dist', 'cdn', 'vezham-icons.js');
const source = readFileSync(bundle);
const compressed = gzipSync(source, { level: 9 });
const output = `${bundle}.gz`;

writeFileSync(output, compressed);

if (statSync(output).size === 0) {
  throw new Error('Generated empty CDN gzip bundle');
}

const savedBytes = source.byteLength - compressed.byteLength;
const percent = source.byteLength === 0 ? 0 : Math.round((savedBytes / source.byteLength) * 100);

console.log('Gzipped CDN bundle');
console.log(`  Raw:   ${(source.byteLength / 1024 / 1024).toFixed(2)} MB`);
console.log(`  Gzip:  ${(compressed.byteLength / 1024 / 1024).toFixed(2)} MB`);
console.log(`  Saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB (${percent}%)`);
