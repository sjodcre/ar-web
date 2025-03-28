import { topics as developersTopics } from "@/app/developers/get-started";
// import { topics as learnTopics } from "@/app/learn";
import { topics as atomicTopics } from "@/app/learn/atomic-assets";
import { topics as blockchainTopics } from "@/app/learn/arweave-ao-101";
// import Fuse from "fuse.js";


export interface SearchItem {
  title: string;
  path: string;
  content: string;
}

  const fetchMarkdownContent = async (filePath: string, title: string): Promise<SearchItem[]> => {
    try {
      const response = await fetch(`/content/${filePath}.md`);
      if (!response.ok) return [];
  
      const text = await response.text();
      const lines = text.split("\n").filter(line => line.trim() !== ""); // Split content

      return lines.map(line => ({
        title, // ✅ Show proper title (subtopic/subsubtopic name)
        path: `/${filePath}`,
        content: line
      }));
    } catch {
      return [];
    }
};



const extractSearchData = async (topics: any[], basePath: string): Promise<SearchItem[]> => {
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


export const initializeSearchIndex = async () => {
  const devSearch = await extractSearchData(developersTopics, "developers");
  const atomicSearch = await extractSearchData(atomicTopics, "learn/atomic-assets");
  const blockchainSearch = await extractSearchData(blockchainTopics, "learn/arweave-ao-101");

  return [...devSearch, ...atomicSearch, ...blockchainSearch];
};

// export const initializeSearchIndex = async () => {
//     const devSearch = await extractSearchData(developersTopics, "developers");
//     const atomicSearch = await extractSearchData(atomicTopics, "learn/atomic-assets");
//     const blockchainSearch = await extractSearchData(blockchainTopics, "learn/arweave-ao-101");
  
//     const searchData = [...devSearch, ...atomicSearch, ...blockchainSearch];
  
//     // Create Fuse Index
//     const fuseIndex = Fuse.createIndex(["title", "content"], searchData);
  
//     // Save index file
//     const indexBlob = new Blob([JSON.stringify(fuseIndex)], { type: "application/json" });
//     const searchBlob = new Blob([JSON.stringify(searchData)], { type: "application/json" });
  
//     // Write both files to `public/`
//     const indexFile = new File([indexBlob], "public/fuse-index.json", { type: "application/json" });
//     const dataFile = new File([searchBlob], "public/fuse-data.json", { type: "application/json" });
  
//     console.log("✅ Fuse index saved as fuse-index.json");

//     return searchData;
//   };
