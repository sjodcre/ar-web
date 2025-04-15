
// // scripts/generateSearchIndex.ts
// import fs from "fs/promises";
// import path from "path";
// import Fuse from "fuse.js";

// import { topics as developersTopics } from "../src/app/developers/get-started";
// import { topics as atomicTopics } from "../src/app/learn/atomic-assets";
// import { topics as blockchainTopics } from "../src/app/learn/arweave-ao-101";

// interface SearchItem {
//   title: string;
//   path: string;
//   content: string;
// }

// // ✅ Correct root-relative public/content access
// const CONTENT_DIR = path.join(process.cwd(), "public", "content");

// const fetchMarkdownContent = async (filePath: string, title: string): Promise<SearchItem[]> => {
//   try {
//     const fullPath = path.join(CONTENT_DIR, `${filePath}.md`);
//     console.log("fullPath", fullPath)
//     const content = await fs.readFile(fullPath, "utf-8");

//     const lines = content.split("\n").filter((line) => line.trim() !== "");
//     return lines.map((line) => ({
//       title,
//       path: `/${filePath}`,
//       content: line,
//     }));
//   } catch {
//     console.warn(`⚠️ Missing file: ${filePath}.md`);
//     return [];
//   }
// };

// const extractSearchData = async (topics: any[], basePath: string): Promise<SearchItem[]> => {
//   let results: SearchItem[] = [];

//   for (const topic of topics) {
//     for (const subtopic of topic.subtopics) {
//       const subtopicPath = `${basePath}/${topic.path}/${subtopic.path}`;
//       let subtopicContent: SearchItem[] = [];

//       const supportsVariants = basePath.startsWith("learn");

//       if (supportsVariants) {
//         const long = await fetchMarkdownContent(`${subtopicPath}-long`, subtopic.title);
//         const short = await fetchMarkdownContent(`${subtopicPath}-short`, subtopic.title);
//         subtopicContent.push(...long, ...short);
//       } else {
//         subtopicContent = await fetchMarkdownContent(subtopicPath, subtopic.title);
//       }

//       results.push(...subtopicContent);

//       if (subtopic.subtopics) {
//         for (const subSubtopic of subtopic.subtopics) {
//           const subSubPath = `${basePath}/${topic.path}/${subtopic.path}/${subSubtopic.path}`;
//           if (supportsVariants) {
//             const long = await fetchMarkdownContent(`${subSubPath}-long`, subSubtopic.title);
//             const short = await fetchMarkdownContent(`${subSubPath}-short`, subSubtopic.title);
//             results.push(...long, ...short);
//           } else {
//             const regular = await fetchMarkdownContent(subSubPath, subSubtopic.title);
//             results.push(...regular);
//           }
//         }
//       }
//     }
//   }

//   return results;
// };

// const generateSearchIndex = async () => {
//   console.log("🔎 Generating search index...");

//   const dev = await extractSearchData(developersTopics, "developers");
//   const atomic = await extractSearchData(atomicTopics, "learn/atomic-assets");
//   const blockchain = await extractSearchData(blockchainTopics, "learn/arweave-ao-101");
//   const staticData = JSON.parse(await fs.readFile("public/static-fuse-data.json", "utf-8"))

//   const all = [...dev, ...atomic, ...blockchain, ...staticData];

//   if (!all.length) {
//     console.warn("⚠️ No content found. Skipping index generation.");
//     return;
//   }

//   const index = Fuse.createIndex(["title", "content"], all);

//   try {
//     await fs.mkdir("public", { recursive: true });
//     await fs.writeFile("public/fuse-data.json", JSON.stringify(all, null, 2), "utf-8");
//     await fs.writeFile("public/fuse-index.json", JSON.stringify(index, null, 2), "utf-8");
//     console.log(`✅ Fuse index created: ${all.length} entries`);
//   } catch (err) {
//     console.error("❌ Failed to write search index:", err);
//   }
// };

// generateSearchIndex();

// scripts/generateSearchIndex.ts
import fs from "fs/promises";
import path from "path";
import Fuse from "fuse.js";
import { topics as developersTopics } from "../src/app/developers/get-started";
import { topics as atomicTopics } from "../src/app/learn/atomic-assets";
import { topics as blockchainTopics } from "../src/app/learn/arweave-ao-101";
import { topics as aoTokenomicsTopics } from "../src/app/learn/tokenomics/ao";
import { topics as arweaveTokenomicsTopics } from "../src/app/learn/tokenomics/arweave";

interface SearchItem {
  title: string;
  path: string;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "public", "content");

const fetchMarkdownContent = async (filePath: string, title: string, variant?: "short" | "long"): Promise<SearchItem[]> => {
  const fullFileName = variant ? `${filePath}-${variant}` : filePath;
  const fullPath = path.join(CONTENT_DIR, `${fullFileName}.md`);

  try {
    const content = await fs.readFile(fullPath, "utf-8");
    const lines = content.split("\n").filter((line) => line.trim() !== "");

    const pagePath = `/${filePath}${variant === "short" ? "?variant=short" : ""}`;

    return lines.map((line) => ({
      title,
      path: pagePath,
      content: line,
    }));
  } catch {
    console.warn(`⚠️ Missing: ${fullFileName}.md`);
    return [];
  }
};

const extractSearchData = async (topics: any[], basePath: string): Promise<SearchItem[]> => {
  const results: SearchItem[] = [];
  const supportsVariants = basePath.startsWith("learn");

  for (const topic of topics) {
    for (const sub of topic.subtopics) {
      const subPath = `${basePath}/${topic.path}/${sub.path}`;
      if (supportsVariants) {
        results.push(...await fetchMarkdownContent(subPath, sub.title, "long"));
        results.push(...await fetchMarkdownContent(subPath, sub.title, "short"));
      } else {
        results.push(...await fetchMarkdownContent(subPath, sub.title));
      }

      if (sub.subtopics) {
        for (const subsub of sub.subtopics) {
          const subsubPath = `${basePath}/${topic.path}/${sub.path}/${subsub.path}`;
          if (supportsVariants) {
            results.push(...await fetchMarkdownContent(subsubPath, subsub.title, "long"));
            results.push(...await fetchMarkdownContent(subsubPath, subsub.title, "short"));
          } else {
            results.push(...await fetchMarkdownContent(subsubPath, subsub.title));
          }
        }
      }
    }
  }

  return results;
};

const generateSearchIndex = async () => {
  console.log("🔎 Generating Fuse search index...");

  const dev = await extractSearchData(developersTopics, "developers");
  const atomic = await extractSearchData(atomicTopics, "learn/atomic-assets");
  const blockchain = await extractSearchData(blockchainTopics, "learn/arweave-ao-101");
  const aoTokenomics = await extractSearchData(aoTokenomicsTopics, "learn");
  const arweaveTokenomics = await extractSearchData(arweaveTokenomicsTopics, "learn");


  let staticData: SearchItem[] = [];
  try {
    staticData = JSON.parse(await fs.readFile("public/static-fuse-data.json", "utf-8"));
  } catch {
    console.warn("⚠️ static-fuse-data.json not found");
  }

  const all = [...dev, ...atomic, ...blockchain, ...staticData, ...aoTokenomics, ...arweaveTokenomics];

  if (!all.length) {
    console.warn("⚠️ No search content found.");
    return;
  }

  const index = Fuse.createIndex(["title", "content"], all);

  await fs.mkdir("public", { recursive: true });
  await fs.writeFile("public/fuse-data.json", JSON.stringify(all, null, 2), "utf-8");
  await fs.writeFile("public/fuse-index.json", JSON.stringify(index, null, 2), "utf-8");

  console.log(`✅ Saved search index with ${all.length} entries`);
};

generateSearchIndex();
