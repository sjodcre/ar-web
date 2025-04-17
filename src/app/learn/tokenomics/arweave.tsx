// import React, { useState } from 'react';
// // import ReactMarkdown from 'react-markdown';
// // import remarkGfm from 'remark-gfm';
// // import rehypeRaw from 'rehype-raw';
// import MarkdownRenderer from '@/components/MarkdownRenderer';

// const ArweaveTokenomics: React.FC = () => {
//   // const [shortContent, setShortContent] = useState('');
//   // const [longContent, setLongContent] = useState('');
//   const [showLongVersion, setShowLongVersion] = useState(true);

//   let markdownFilePath = "learn/tokenomics/arweave" // Default page

//   return (
//     <main className="min-h-screen bg-black text-white flex flex-col items-center p-6">
//       {/* Header */}
//       <h2 className="font-bold mb-6 text-center text-3xl">Arweave Tokenomics</h2>

//       {/* Toggle Button */}
//       <button
//         onClick={() => setShowLongVersion(prev => !prev)}
//         className="mb-4 p-2 bg-gray-800 border border-gray-700 rounded hover:bg-gray-700 transition"
//       >
//         {showLongVersion ? "TL;DR" : "Full Version"}
//       </button>

//       {/* Content Container */}
//       <div className="markdown text-lg p-6 bg-black border border-gray-800 rounded-md w-full text-justify">
//         {/* <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
//           {showLongVersion ? longContent : shortContent}
//         </ReactMarkdown> */}
//         <MarkdownRenderer filePath={markdownFilePath} variant={showLongVersion ? "long" : "short"} />

//       </div>
//     </main>
//   );
// };

// export default ArweaveTokenomics;

"use client"

import { useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import { BookOpen, FileText } from "lucide-react"
import MarkdownRenderer from "@/components/MarkdownRenderer"
import DocHeader from "@/components/test/doc-header"
import { SeoHead } from "@/components/SeoHead"

export const topics = [
  {
    title: "Tokenomics",
    path: "tokenomics",
    subtopics: [
      { title: "Arweave Tokenomics", path: "arweave" },
    ],
  },
];


export default function ArweaveTokenomics() {
  const [searchParams, setSearchParams] = useSearchParams()
  const variantParam = searchParams.get("variant")
  const [showLongVersion, setShowLongVersion] = useState(variantParam !== "short")
  const [seoMeta, setSeoMeta] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  })
  const location = useLocation()
  const currentUrl = `https://sjodcre-ar-web_arlink.arweave.net${location.pathname}`
  const markdownFilePath = "learn/tokenomics/arweave"

  const toggleVersion = () => {
    const newVersion = showLongVersion ? "short" : "long"
    setShowLongVersion(!showLongVersion)
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev)
      newParams.set("variant", newVersion)
      return newParams
    }, { replace: true })
  }

  return (
    <>
      <SeoHead
        title={seoMeta.title || "Arweave Tokenomics"}
        description={seoMeta.description || "Dive into the economic design of the Arweave protocol."}
        url={currentUrl}
      />
      <div className="flex min-h-screen bg-background">
        <main className="flex-1 p-4 md:p-6 overflow-auto w-full">
          <div className="max-w-4xl mx-auto">
            <DocHeader
              title="Arweave Tokenomics"
              lastUpdated="2025-03-15T14:30:00Z"
              txId="bNMNDK3sFRP5vSJELdYQhA-cQwvwSKJ_xdWrwKm2xCU"
              category="storage"
            />

            <div className="flex justify-center mb-4">
              <button
                onClick={toggleVersion}
                className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2 ${showLongVersion
                  ? "bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30"
                  : "bg-highlight/20 text-highlight border border-highlight/30 hover:bg-highlight/30"
                  }`}
              >
                {showLongVersion ? (
                  <>
                    <FileText className="h-4 w-4" />
                    <span>TL;DR</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="h-4 w-4" />
                    <span>Full Version</span>
                  </>
                )}
              </button>
            </div>

            <div className="prose prose-invert max-w-none p-6 bg-card/30 backdrop-blur-sm border border-secondary/20 rounded-lg shadow-lg">
              <MarkdownRenderer
                filePath={markdownFilePath}
                variant={showLongVersion ? "long" : "short"}
                onMetaExtracted={(meta) =>
                  setSeoMeta({
                    title: meta.title ?? "",
                    description: meta.description ?? "",
                  })
                }
              />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
