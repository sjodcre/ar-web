//tsc scripts/generateSearchIndex.ts to run script


import fs from "fs/promises";
import Fuse from "fuse.js";
import path from "path";

// ✅ Import the topics structure just like in the frontend
import { topics as developersTopics } from "../src/app/developers/get-started";
import { topics as atomicTopics } from "../src/app/learn/atomic-assets";
import { topics as blockchainTopics } from "../src/app/learn/arweave-ao-101";

interface SearchItem {
  title: string;
  path: string;
  content: string;
}

export const fetchMarkdownContent = async (filePath, title) => {
  try {
    const fullPath = path.join("/content", `${filePath}.md`);
    console.log("fullpath", fullPath)
    const content = await fs.readFile(fullPath, "utf-8");
    
    const lines = content.split("\n").filter(line => line.trim() !== ""); // Remove empty lines

    return lines.map(line => ({
      title, // ✅ Keep proper title from the topic structure
      path: `/${filePath}`, // ✅ Use structured paths like in the original implementation
      content: line
    }));
  } catch (error) {
    console.warn(`⚠️ Skipped missing file: ${filePath}.md`);
    return [];
  }
};

const extractSearchData = async (topics, basePath) => {
  let searchItems: SearchItem[] = [];

  for (const topic of topics) {
    for (const subtopic of topic.subtopics) {
      const subtopicPath = `${basePath}/${topic.path}/${subtopic.path}`;
      let subtopicContent: SearchItem[] = [];

      if (basePath.includes("learn")) {
        // ✅ Fetch both long and short versions for "learn" topics
        const longContent = await fetchMarkdownContent(`${subtopicPath}-long`, subtopic.title);
        const shortContent = await fetchMarkdownContent(`${subtopicPath}-short`, subtopic.title);
        subtopicContent = [...longContent, ...shortContent];
      } else {
        // ✅ Regular fetching for other topics
        subtopicContent = await fetchMarkdownContent(subtopicPath, subtopic.title);
      }

      searchItems = [...searchItems, ...subtopicContent];

      if (subtopic.subtopics) {
        for (const subSubtopic of subtopic.subtopics) {
          const subSubtopicPath = `${basePath}/${topic.path}/${subtopic.path}/${subSubtopic.path}`;
          const subSubtopicContent = await fetchMarkdownContent(subSubtopicPath, subSubtopic.title);
          searchItems = [...searchItems, ...subSubtopicContent];
        }
      }
    }
  }

  return searchItems;
};

const generateSearchIndex = async () => {
  console.log("🚀 Generating search index...");

  const devSearch = await extractSearchData(developersTopics, "developers");
  const atomicSearch = await extractSearchData(atomicTopics, "learn/atomic-assets");
  const blockchainSearch = await extractSearchData(blockchainTopics, "learn/arweave-ao-101");

  const searchData = [...devSearch, ...atomicSearch, ...blockchainSearch];

  if (searchData.length === 0) {
    console.warn("⚠️ No markdown files found. Skipping index creation.");
    return;
  }

  // ✅ Create Fuse.js index using the exact keys as before
  const fuseIndex = Fuse.createIndex(["title", "content"], searchData);

  // ✅ Save index and data to `public/`
  try {
    await fs.mkdir("public", { recursive: true });
    await fs.writeFile("public/fuse-index.json", JSON.stringify(fuseIndex, null, 2), "utf-8");
    await fs.writeFile("public/fuse-data.json", JSON.stringify(searchData, null, 2), "utf-8");
    console.log("✅ Search index successfully created and saved!");
  } catch (error) {
    console.error("❌ Failed to save search index:", error);
  }
};

// Run the script
generateSearchIndex();
