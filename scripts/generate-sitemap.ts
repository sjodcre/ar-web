// // scripts/generateSitemap.ts
// import fs from "fs";
// import path from "path";
// import { topics as developersTopics } from "../src/app/developers/get-started";
// import { topics as atomicTopics } from "../src/app/learn/atomic-assets";
// import { topics as blockchainTopics } from "../src/app/learn/arweave-ao-101";
// import { navItems } from "../src/components/navbar";

// const DOMAIN = "https://ar-web_arlink.arweave.net/";

// type Topic = {
//   title: string;
//   path: string;
//   subtopics?: Topic[];
// };

// type NavItem = {
//   title: string;
//   href: string;
//   isDeveloped?: boolean;
//   openInNewTab?: boolean;
//   subItems?: NavItem[];
// };

// const allConfigs = [
//   {
//     base: "developers",
//     topics: developersTopics,
//   },
//   {
//     base: "learn/atomic-assets",
//     topics: atomicTopics,
//   },
//   {
//     base: "learn/arweave-ao-101",
//     topics: blockchainTopics,
//   },
// ];

// function collectValidPaths(topics: Topic[], basePath: string): string[] {
//   const urls: string[] = [];

//   for (const topic of topics) {
//     if (!topic.subtopics?.length) continue;

//     for (const sub of topic.subtopics) {
//       const subBase = `${basePath}/${topic.path}/${sub.path}`;

//       const isLeaf = !sub.subtopics || sub.subtopics.length === 0;
//       if (isLeaf) {
//         urls.push(subBase); // Only include if this subtopic is a leaf (has content)
//       }

//       if (sub.subtopics) {
//         for (const subsub of sub.subtopics) {
//           urls.push(`${subBase}/${subsub.path}`);
//         }
//       }
//     }
//   }

//   return urls;
// }

// function extractTopLevelLayoutPaths(
//   navItems: Record<string, NavItem[]>,
//   topicBases: string[]
// ): Set<string> {
//   const layoutPaths = new Set<string>();

//   for (const section of Object.values(navItems)) {
//     for (const item of section) {
//       const isInTopics = topicBases.some((base) => item.href.startsWith(`/${base}`));

//       if (
//         item.isDeveloped &&
//         item.href.startsWith("/") &&
//         !item.href.includes("/:") &&
//         !isInTopics // ✅ Exclude layout wrappers like `/learn/atomic-assets`
//       ) {
//         layoutPaths.add(item.href);
//       }
//     }
//   }
//   console.log("layoutPaths", layoutPaths)
//   return layoutPaths;
// }


// // function extractNavLinks(navItems: Record<string, NavItem[]>): string[] {
// //   const internalUrls: Set<string> = new Set();

// //   const walk = (items: NavItem[]) => {
// //     for (const item of items) {
// //       if (item.isDeveloped && item.href.startsWith("/")) {
// //         internalUrls.add(item.href);
// //       }
// //       if (item.subItems?.length) {
// //         walk(item.subItems);
// //       }
// //     }
// //   };

// //   for (const section of Object.values(navItems)) {
// //     walk(section);
// //   }

// //   return Array.from(internalUrls);
// // }

// function extractNavLinks(navItems: Record<string, NavItem[]>): string[] {
//   const internalUrls: Set<string> = new Set();
//   // const layoutOnlyPaths = extractTopLevelLayoutPaths(navItems);
//   const topicBases = allConfigs.map((c) => c.base);
// const layoutOnlyPaths = extractTopLevelLayoutPaths(navItems, topicBases);

//   for (const path of layoutOnlyPaths) {
//     internalUrls.add(path);
//   }

//   return Array.from(internalUrls);
// }


// const generateSitemap = () => {
//   let allPaths: string[] = [];

//   for (const config of allConfigs) {
//     allPaths.push(...collectValidPaths(config.topics, config.base));
//   }

//   const navPaths = extractNavLinks(navItems);
//   allPaths.push(...navPaths);

//   const finalPaths = Array.from(new Set(allPaths));

//   const xml = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${finalPaths
//   .map((url) => {
//     // const clean = url.replace(/\/+/g, "/");
//     const clean = url.replace(/\/{2,}/g, "/").replace(/\/+$/, "");
//     const loc = `${DOMAIN}${clean}`.replace(/([^:]\/)\/+/g, "$1");

//     return `  <url>
//     <loc>${loc}</loc>
//     <changefreq>weekly</changefreq>
//     <priority>0.8</priority>
//   </url>`;
//   })
//   .join("\n")}
// </urlset>`;

//   fs.mkdirSync("public", { recursive: true });
//   fs.writeFileSync(path.join("public", "sitemap.xml"), xml);
//   console.log(`✅ sitemap.xml generated with ${finalPaths.length} canonical URLs`);
// };

// generateSitemap();

// scripts/generateSitemap.ts
import fs from "fs";
import path from "path";
import { topics as developersTopics } from "../src/app/developers/get-started";
import { topics as atomicTopics } from "../src/app/learn/atomic-assets";
import { topics as blockchainTopics } from "../src/app/learn/arweave-ao-101";
import { navItems } from "../src/components/navbar";

const DOMAIN = "https://sjodcre-ar-web_arlink.arweave.net/";

type Topic = {
  title: string;
  path: string;
  subtopics?: Topic[];
};

type NavItem = {
  title: string;
  href: string;
  isDeveloped?: boolean;
  openInNewTab?: boolean;
  subItems?: NavItem[];
};

const allConfigs = [
  {
    base: "developers",
    topics: developersTopics,
  },
  {
    base: "learn/atomic-assets",
    topics: atomicTopics,
  },
  {
    base: "learn/arweave-ao-101",
    topics: blockchainTopics,
  },
];

function collectValidPaths(topics: Topic[], basePath: string): string[] {
  const urls: string[] = [];

  for (const topic of topics) {
    if (!topic.subtopics?.length) continue;

    for (const sub of topic.subtopics) {
      const subBase = `${basePath}/${topic.path}/${sub.path}`;

      const isLeaf = !sub.subtopics || sub.subtopics.length === 0;
      if (isLeaf) {
        urls.push(subBase);
      }

      if (sub.subtopics) {
        for (const subsub of sub.subtopics) {
          urls.push(`${subBase}/${subsub.path}`);
        }
      }
    }
  }

  return urls;
}

// function extractTopLevelLayoutPaths(
//   navItems: Record<string, NavItem[]>,
//   coveredPaths: string[]
// ): Set<string> {
//   const layoutPaths = new Set<string>();
//   const coveredSet = new Set(coveredPaths);

//   for (const section of Object.values(navItems)) {
//     for (const item of section) {
//       if (!item.isDeveloped || item.openInNewTab || !item.href.startsWith("/")) continue;

//       const alreadyCovered = [...coveredSet].some((covered) => item.href.startsWith(`/${covered}`));
//       if (alreadyCovered) continue;

//       if (item.subItems?.length) {
//         for (const sub of item.subItems) {
//           if (
//             sub.href &&
//             sub.href.startsWith("/") &&
//             !sub.openInNewTab &&
//             ![...coveredSet].some((covered) => sub.href.startsWith(`/${covered}`))
//           ) {
//             layoutPaths.add(sub.href);
//           }
//         }
//       } else {
//         layoutPaths.add(item.href);
//       }
//     }
//   }

//   return layoutPaths;
// }

function extractTopLevelLayoutPaths(
  navItems: Record<string, NavItem[]>,
  coveredPaths: string[]
): Set<string> {
  const layoutPaths = new Set<string>();
  const coveredSet = new Set(coveredPaths);

  for (const sectionKey of Object.keys(navItems)) {
    const section = navItems[sectionKey];
    for (const item of section) {
      const sectionLabel = `[${sectionKey}] "${item.title}"`;

      if (!item.isDeveloped) {
        console.warn(`⛔ Skipped ${sectionLabel}: isDeveloped is false`);
        continue;
      }
      if (item.openInNewTab) {
        console.warn(`⛔ Skipped ${sectionLabel}: openInNewTab is true`);
        continue;
      }
      if (!item.href.startsWith("/")) {
        console.warn(`⛔ Skipped ${sectionLabel}: href is not internal`);
        continue;
      }
      // const isCovered = [...coveredSet].some((covered) => item.href.startsWith(`/${covered}`));
      const isCovered = [...coveredSet].some((covered) =>
        (`/${covered}`).startsWith(item.href)
      );
      if (isCovered) {
        console.warn(`⛔ Skipped ${sectionLabel}: already covered by topics`);
        continue;
      }

      if (item.subItems?.length) {
        for (const sub of item.subItems) {
          const subLabel = `${sectionLabel} > subItem "${sub.title}"`;

          if (!sub.href.startsWith("/")) {
            console.warn(`⛔ Skipped ${subLabel}: href is not internal`);
            continue;
          }
          if (sub.openInNewTab) {
            console.warn(`⛔ Skipped ${subLabel}: openInNewTab is true`);
            continue;
          }
          // const subIsCovered = [...coveredSet].some((covered) => sub.href.startsWith(`/${covered}`));

const subIsCovered = [...coveredSet].some((covered) =>
  (`/${covered}`).startsWith(sub.href)
);
          if (subIsCovered) {
            console.warn(`⛔ Skipped ${subLabel}: already covered by topics`);
            continue;
          }

          layoutPaths.add(sub.href);
        }
      } else {
        layoutPaths.add(item.href);
      }
    }
  }

  return layoutPaths;
}

function extractNavLinks(navItems: Record<string, NavItem[]>, coveredPaths: string[]): string[] {
  const layoutPaths = extractTopLevelLayoutPaths(navItems, coveredPaths);
  return Array.from(layoutPaths);
}

const generateSitemap = () => {
  let allPaths: string[] = [];

  const topicPaths = allConfigs.flatMap((config) =>
    collectValidPaths(config.topics, config.base)
  );

  allPaths.push(...topicPaths);

  const navPaths = extractNavLinks(navItems, topicPaths);
  allPaths.push(...navPaths);

  const finalPaths = Array.from(new Set(allPaths));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${finalPaths
  .map((url) => {
    const clean = url.replace(/\/{2,}/g, "/").replace(/\/+$/, "");
    const loc = `${DOMAIN}${clean}`.replace(/([^:]\/)\/+/g, "$1");
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  fs.mkdirSync("public", { recursive: true });
  fs.writeFileSync(path.join("public", "sitemap.xml"), xml);
  console.log(`✅ sitemap.xml generated with ${finalPaths.length} canonical URLs`);
};

generateSitemap();
