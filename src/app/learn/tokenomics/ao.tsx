// import React, { useState } from 'react';
// // import ReactMarkdown from 'react-markdown';
// // import remarkGfm from 'remark-gfm';
// // import rehypeRaw from 'rehype-raw';
// import MarkdownRenderer from '@/components/MarkdownRenderer';

// const AOComputerTokenomics: React.FC = () => {
//   // const [shortContent, setShortContent] = useState('');
//   // const [longContent, setLongContent] = useState('');
//   const [showLongVersion, setShowLongVersion] = useState(true);

//   let markdownFilePath = "learn/tokenomics/ao" // Default page

//   return (
//     <main className="min-h-screen bg-black text-white flex flex-col items-center p-6">
//       {/* Header */}
//       <h2 className="text-3xl font-bold mb-6 text-center">AO Computer Tokenomics</h2>

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
//       {/* Video Explanation Section */}
//       {/* {showLongVersion &&(
//         <div className="w-full mt-6">
//         <p className="mb-4"> For a more in-depth understanding of Arweave's tokenomics, consider watching the following video: </p>
//           <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
//             <iframe
//               className="absolute inset-0 w-full h-full rounded-lg"
//               src="https://www.youtube.com/embed/XJxe4ovuhqc"
//               title="Arweave's AO Token Launch: What You Need to Know"
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}
//        */}
//        {showLongVersion && (
//   <div className="w-full max-w-xl mt-6">
//     <p className="mb-4 text-center text-gray-300">
//       For a more in-depth understanding of Arweave's tokenomics, consider watching the following video:
//     </p>
//     <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
//       <iframe
//         className="absolute inset-0 w-full h-64 rounded-lg border border-gray-700"
//         src="https://www.youtube.com/embed/XJxe4ovuhqc"
//         title="Arweave's AO Token Launch: What You Need to Know"
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//     </div>
//   </div>
// )}

//     </main>
//   );
// };

// export default AOComputerTokenomics;


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
      { title: "AO Tokenomics", path: "ao" },
    ],
  },
];


export default function AOComputerTokenomics() {
  const [searchParams, setSearchParams] = useSearchParams()
  const variantParam = searchParams.get("variant")
  const [showLongVersion, setShowLongVersion] = useState(variantParam !== "short")
  const [seoMeta, setSeoMeta] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  })
  const location = useLocation()
  const currentUrl = `https://sjodcre-ar-web_arlink.arweave.net${location.pathname}`
  const markdownFilePath = "learn/tokenomics/ao"

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
        title={seoMeta.title || "AO Computer Tokenomics"}
        description={seoMeta.description || "Explore the economics of the AO Compute Layer."}
        url={currentUrl}
      />
      <div className="flex min-h-screen bg-background">
        <main className="flex-1 p-4 md:p-6 overflow-auto w-full">
          <div className="max-w-4xl mx-auto">
            <DocHeader
              title="AO Computer Tokenomics"
              lastUpdated="2025-03-15T14:30:00Z"
              txId="bNMNDK3sFRP5vSJELdYQhA-cQwvwSKJ_xdWrwKm2xCU"
              category="computation"
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

            {showLongVersion && (
              <div className="w-full max-w-xl mt-6 mx-auto">
                <p className="mb-4 text-center text-gray-300">
                  For a more in-depth understanding of Arweave's tokenomics, consider watching the following video:
                </p>
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-64 rounded-lg border border-gray-700"
                    src="https://www.youtube.com/embed/XJxe4ovuhqc"
                    title="Arweave's AO Token Launch: What You Need to Know"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  )
}
