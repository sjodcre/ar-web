// scripts/update-meta.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const metaPath = path.resolve(__dirname, "../src/constants/meta.ts");
const now = new Date().toISOString();

let content = "";

if (fs.existsSync(metaPath)) {
  content = fs.readFileSync(metaPath, "utf-8");

  // Replace existing lastUpdated line or add it
  if (content.includes("export const lastUpdated")) {
    content = content.replace(
      /export const lastUpdated\s*=\s*".*?";/,
      `export const lastUpdated = "${now}";`
    );
  } else {
    content += `\nexport const lastUpdated = "${now}";\n`;
  }
} else {
  // Fallback if file doesn't exist yet
  content = `// ⚠️ Auto-generated constants\nexport const lastUpdated = "${now}";\n`;
}

fs.writeFileSync(metaPath, content);
console.log(`✅ meta.ts updated with lastUpdated = ${now}`);
