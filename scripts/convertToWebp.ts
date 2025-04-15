// scripts/convertToWebp.ts
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const INPUT_DIR = "public/images";
const OUTPUT_DIR = "public/images-webp";
const VALID_EXTENSIONS = [".png", ".jpg", ".jpeg"];

async function getAllImagePaths(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? getAllImagePaths(fullPath) : [fullPath];
    })
  );
  return files.flat();
}

async function convertToWebp(filePath: string) {
  const relPath = path.relative(INPUT_DIR, filePath);
  const outPath = path.join(OUTPUT_DIR, relPath).replace(path.extname(filePath), ".webp");

  await fs.mkdir(path.dirname(outPath), { recursive: true });

  try {
    await fs.access(outPath);
    console.log(`✅ Skipping (already exists): ${outPath}`);
    return;
  } catch {
    // proceed
  }

  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log(`🖼️ Converted: ${filePath} → ${outPath}`);
  } catch (err) {
    console.error(`❌ Failed to convert ${filePath}:`, err);
  }
}

async function run() {
  const imagePaths = await getAllImagePaths(INPUT_DIR);

  const targetFiles = imagePaths.filter((f) =>
    VALID_EXTENSIONS.includes(path.extname(f).toLowerCase())
  );

  for (const file of targetFiles) {
    await convertToWebp(file);
  }

  console.log(`🎉 Done. ${targetFiles.length} images processed.`);
}

run();
