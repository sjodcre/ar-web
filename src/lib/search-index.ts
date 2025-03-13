import { topics as developersTopics } from "@/app/developers/get-started";
// import { topics as learnTopics } from "@/app/learn";
import { topics as atomicTopics } from "@/app/learn/atomic-assets";
import { topics as blockchainTopics } from "@/app/learn/arweave-ao-101";

export interface SearchItem {
  title: string;
  path: string;
  content: string;
}
// const fetchMarkdownContent = async (filePath: string): Promise<SearchItem[]> => {
//     try {
//       const response = await fetch(`/src/content/${filePath}.md`);
//       if (!response.ok) return [];
  
//       const text = await response.text();
//       const lines = text.split("\n").filter(line => line.trim() !== ""); // Split into sections
  
//       return lines.map((line, index) => ({
//         title: `Section ${index + 1} - ${filePath}`,
//         path: `/${filePath}`,
//         content: line
//       }));
//     } catch {
//       return [];
//     }
//   };

  const fetchMarkdownContent = async (filePath: string, title: string): Promise<SearchItem[]> => {
    try {
      const response = await fetch(`/src/content/${filePath}.md`);
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

// const extractSearchData = async (topics: any[], basePath: string): Promise<SearchItem[]> => {
//     let searchItems: SearchItem[] = [];
  
//     for (const topic of topics) {
//       for (const subtopic of topic.subtopics) {
//         const subtopicPath = `${basePath}/${topic.path}/${subtopic.path}`;
//         const subtopicContent = await fetchMarkdownContent(subtopicPath);
//         searchItems = [...searchItems, ...subtopicContent];
  
//         if (subtopic.subtopics) {
//           for (const subSubtopic of subtopic.subtopics) {
//             const subSubtopicPath = `${basePath}/${topic.path}/${subtopic.path}/${subSubtopic.path}`;
//             const subSubtopicContent = await fetchMarkdownContent(subSubtopicPath);
//             searchItems = [...searchItems, ...subSubtopicContent];
//           }
//         }
//       }
//     }
//     return searchItems;
//   };

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
//   const learnSearch = await extractSearchData(learnTopics, "learn");
  const atomicSearch = await extractSearchData(atomicTopics, "learn/atomic-assets");
  const blockchainSearch = await extractSearchData(blockchainTopics, "learn/arweave-ao-101");

  return [...devSearch, ...atomicSearch, ...blockchainSearch];
};
