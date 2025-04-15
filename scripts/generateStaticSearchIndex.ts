// // scripts/generateStaticSearchIndex.ts

// import fs from "fs/promises"
// import path from "path"
// import { parse } from "@babel/parser"
// // import traverse from "@babel/traverse"
// import traverseModule from "@babel/traverse"
// const traverse = traverseModule.default

// type StaticSearchItem = {
//   title: string
//   path: string
//   content: string
// }

// // ✅ Target .tsx files you want to scan
// const pages = [
//   {
//     file: "src/app/learn/glossary/index.tsx",
//     title: "Glossary",
//     path: "/learn/glossary",
//   },
//   {
//     file: "src/app/learn/storage-fees/index.tsx",
//     title: "Storage Fees",
//     path: "/learn/storage-fees",
//   },

//   {
//     file: "src/app/community/news/index.tsx",
//     title: "News",
//     path: "/community/news",
//   },
//   {
//     file: "src/app/community/resource-hub/index.tsx",
//     title: "Resource Hub",
//     path: "/community/resource-hub",
//   },
// ]

// async function extractTextFromTsx(filePath: string): Promise<string> {
//   const code = await fs.readFile(filePath, "utf-8")

//   const ast = parse(code, {
//     sourceType: "module",
//     plugins: ["typescript", "jsx"],
//   })

//   const contentLines: string[] = []

//   traverse(ast, {
//     JSXText({ node }) {
//       const text = node.value.trim()
//       if (text) contentLines.push(text)
//     },
//   })

//   return contentLines.join(" ")
// }

// async function generateStaticIndex() {
//   console.log("🧠 Extracting static page text from .tsx...")

//   const searchItems: StaticSearchItem[] = []

//   for (const page of pages) {
//     try {
//       const fullPath = path.resolve(page.file)
//       console.log("fullPath", fullPath)
//       const content = await extractTextFromTsx(fullPath)

//       if (content) {
//         searchItems.push({
//           title: page.title,
//           path: page.path,
//           content,
//         })
//         console.log(`✅ Indexed ${page.title}`)
//       }
//     } catch (err) {
//       console.warn(`⚠️ Skipped ${page.title} (${page.file}) — ${err.message}`)
//     }
//   }

//   const outPath = "public/static-fuse-data.json"
//   await fs.mkdir("public", { recursive: true })
//   await fs.writeFile(outPath, JSON.stringify(searchItems, null, 2), "utf-8")

//   console.log(`✅ Saved static index to ${outPath}`)
// }

// generateStaticIndex()


// scripts/generateStaticSearchIndex.ts

import fs from "fs/promises"
import path from "path"
import { parse } from "@babel/parser"
import traverseModule from "@babel/traverse"
const traverse = traverseModule.default

type StaticSearchItem = {
  title: string
  path: string
  content: string
}

const pages = [
  {
    file: "src/app/learn/glossary/index.tsx",
    title: "Glossary",
    path: "/learn/glossary",
  },
  {
    file: "src/app/learn/storage-fees/index.tsx",
    title: "Storage Fees",
    path: "/learn/storage-fees",
  },
  {
    file: "src/app/community/news/index.tsx",
    title: "News",
    path: "/community/news",
  },
  {
    file: "src/app/community/resource-hub/index.tsx",
    title: "Resource Hub",
    path: "/community/resource-hub",
  },
]

async function extractTextFromTsx(filePath: string): Promise<string[]> {
  const code = await fs.readFile(filePath, "utf-8")

  const ast = parse(code, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  })

  const contentLines: string[] = []

  traverse(ast, {
    JSXText({ node }) {
      const text = node.value.trim()
      if (text) contentLines.push(...text.split("\n").map(l => l.trim()).filter(Boolean))
    },
  })

  return contentLines
}

async function generateStaticIndex() {
  console.log("🧠 Extracting static page text from .tsx...")

  const searchItems: StaticSearchItem[] = []

  for (const page of pages) {
    try {
      const fullPath = path.resolve(page.file)
      const lines = await extractTextFromTsx(fullPath)

      if (lines.length) {
        for (const line of lines) {
          searchItems.push({
            title: page.title,
            path: page.path,
            content: line,
          })
        }

        console.log(`✅ Indexed ${page.title} — ${lines.length} lines`)
      }
    } catch (err) {
      console.warn(`⚠️ Skipped ${page.title} (${page.file}) — ${err.message}`)
    }
  }

  const outPath = "public/static-fuse-data.json"
  await fs.mkdir("public", { recursive: true })
  await fs.writeFile(outPath, JSON.stringify(searchItems, null, 2), "utf-8")

  console.log(`✅ Saved static index to ${outPath}`)
}

generateStaticIndex()
