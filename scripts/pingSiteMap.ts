// scripts/pingSitemap.ts
import https from "https";

const SITEMAP_URL = "https://yourdomain.com/sitemap.xml"; // ⬅️ CHANGE this

const engines = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
];

for (const url of engines) {
  https.get(url, (res) => {
    const engine = url.includes("google") ? "Google" : "Bing";
    if (res.statusCode === 200) {
      console.log(`✅ Sitemap pinged to ${engine} successfully!`);
    } else {
      console.error(`❌ Failed to ping ${engine}. Status: ${res.statusCode}`);
    }
  });
}
