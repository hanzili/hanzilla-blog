import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'og-image.png');

const width = 1200;
const height = 630;

// Warm cream background with serif "hanzilla" text — Veil Kit aesthetic
const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#F5F0E8"/>
  <text
    x="50%"
    y="48%"
    text-anchor="middle"
    dominant-baseline="middle"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="72"
    fill="#1A1A1A"
    letter-spacing="2"
  >hanzilla</text>
  <line x1="400" y1="360" x2="800" y2="360" stroke="#C8B8A0" stroke-width="1"/>
  <text
    x="50%"
    y="66%"
    text-anchor="middle"
    dominant-baseline="middle"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="22"
    fill="#6B6B6B"
    letter-spacing="1"
  >building cool things on the internet</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath);

console.log(`OG image generated: ${outputPath}`);
