/**
 * One-off: write RGBA PNGs for why strip images that were saved as opaque JPEGs.
 * Near-neutral bright pixels (typical flat UI backgrounds) become transparent.
 */
import sharp from "sharp";
import { renameSync, unlinkSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const whyDir = join(__dirname, "../src/assets/why");

/** True if pixel looks like a flat light background, not a saturated highlight */
function isNearNeutralBright(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max < 232) return false;
  if (max - min > 36) return false;
  return true;
}

async function toTransparentPng(filename) {
  const inputPath = join(whyDir, filename);
  const tmpPath = join(whyDir, `${filename}.work.png`);

  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (isNearNeutralBright(r, g, b)) {
      data[i + 3] = 0;
    }
  }

  await sharp(Buffer.from(data), {
    raw: { width, height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(tmpPath);

  unlinkSync(inputPath);
  renameSync(tmpPath, inputPath);
}

await toTransparentPng("build.png");
await toTransparentPng("skills.png");
console.log("Updated build.png and skills.png with alpha (near-neutral bright → transparent).");
