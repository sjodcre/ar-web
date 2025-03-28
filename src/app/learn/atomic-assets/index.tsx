// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Sidebar from "@/components/Sidebar";
// import MarkdownRenderer from "@/components/MarkdownRenderer";

// interface Subtopic {
//     title: string;
//     path: string;
//     subtopics?: Subtopic[]; // Allow subtopics to be optional
// }

// interface Topic {
//     title: string;
//     path: string;
//     subtopics: Subtopic[];
// }

// export const topics: Topic[]= [
//     {
//         title: "Atomic Assets", path: "introduction",
//         subtopics: [
//             {
//                 title: "What are Atomic Assets?",
//                 path: "introduction-atomic-assets",
//             },
//             {
//                 title: "UDL in Depth",
//                 path: "udl-in-depth",
//             },
//         ],
//     },
//     {
//         title: "Introduction to UCM BazAR", path: "ucm-bazar",
//         subtopics:[
//             {
//                 title:"What is UCM BazAR?",
//                 path: "introduction-bazar"

//             },
//             {
//                 title:"Funding Wallet",
//                 path:"funding-wallet"
//             },
//             {
//                 title:"Creating Your Own Atomic Assets",
//                 path:"creating-your-own-atomic-assets"
//             }
//         ]
//     }
// ];



// export default function AtomicAssets() {

//     const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>();
//     const navigate = useNavigate();
//     console.log("page", page)
//     console.log("subpage", subpage)
//     console.log("subsubpage", subsubpage)

//     useEffect(() => {
//         if (!page) {
//             navigate("/learn/atomic-assets/introduction/introduction-atomic-assets", { replace: true });
//         }
//     }, [page]);

//     let markdownFilePath = "learn/atomic-assets/introduction/introduction-atomic-assets" // Default page
//     if (page) markdownFilePath = `learn/atomic-assets/${page}`;
//     if (subpage) markdownFilePath = `learn/atomic-assets/${page}/${subpage}`;
//     if (subsubpage) markdownFilePath = `learn/atomic-assets/${page}/${subpage}/${subsubpage}`;

//     const [showLongVersion, setShowLongVersion] = useState(true); // State to toggle between short and long versions

//  // Find the current topic & subtopic indexes
//  const topicIndex = topics.findIndex(topic => topic.path === page);
//  const subtopicIndex = topicIndex !== -1 && topics[topicIndex].subtopics
//      ? topics[topicIndex].subtopics.findIndex(sub => sub.path === subpage)
//      : -1;

//  const subsubtopicIndex = (subtopicIndex !== -1 && topics[topicIndex].subtopics && topics[topicIndex].subtopics[subtopicIndex].subtopics)
//      ? topics[topicIndex].subtopics[subtopicIndex].subtopics?.findIndex(subsub => subsub.path === subsubpage)
//      : -1;

//  // Compute Previous & Next Paths
//  let prevPath: string | null = null;
//  let nextPath: string | null = null;

//  let prevTitle: string | null = null;
//  let nextTitle: string | null = null;

//  if (topicIndex !== -1) {
//      const currentTopic = topics[topicIndex];

//      if (subtopicIndex !== -1 && currentTopic.subtopics) {
//          const currentSubtopic = currentTopic.subtopics[subtopicIndex];

//          if (subsubtopicIndex !== -1 && currentSubtopic.subtopics) {
//              // Inside a sub-subtopic
//              if (subsubtopicIndex > 0) {
//                  prevPath = `/learn/atomic-assets/${page}/${subpage}/${currentSubtopic.subtopics[subsubtopicIndex - 1].path}`;
//                  prevTitle = currentSubtopic.subtopics[subsubtopicIndex - 1].title;
//              } else if (subtopicIndex > 0) {
//                  prevPath = `/learn/atomic-assets/${page}/${currentTopic.subtopics[subtopicIndex - 1].path}`;
//                  prevTitle = currentTopic.subtopics[subtopicIndex - 1].title;
//              } else if (topicIndex > 0) {
//                  const prevTopic = topics[topicIndex - 1];
//                  prevPath = prevTopic.subtopics
//                      ? `/learn/atomic-assets/${prevTopic.path}/${prevTopic.subtopics[prevTopic.subtopics.length - 1].path}`
//                      : `/learn/atomic-assets/${prevTopic.path}`;
//                  prevTitle = prevTopic.subtopics[prevTopic.subtopics.length - 1].title;
//              }

//              if (subsubtopicIndex < currentSubtopic.subtopics.length - 1) {
//                  nextPath = `/learn/atomic-assets/${page}/${subpage}/${currentSubtopic.subtopics[subsubtopicIndex + 1].path}`;
//                  nextTitle = currentSubtopic.subtopics[subsubtopicIndex + 1].title;
//              } else if (subtopicIndex < currentTopic.subtopics.length - 1) {
//                  nextPath = `/learn/atomic-assets/${page}/${currentTopic.subtopics[subtopicIndex + 1].path}`;
//                  nextTitle = currentTopic.subtopics[subtopicIndex + 1].title;
//              } else if (topicIndex < topics.length - 1) {
//                  const nextTopic = topics[topicIndex + 1];
//                  nextPath = nextTopic.subtopics
//                      ? `/learn/atomic-assets/${nextTopic.path}/${nextTopic.subtopics[0].path}`
//                      : `/learn/atomic-assets/${nextTopic.path}`;
//                  nextTitle = nextTopic.subtopics[0].title;
//              }
//          } else {
//              // Inside a subtopic
//              if (subtopicIndex > 0) {
//                  prevPath = `/learn/atomic-assets/${page}/${currentTopic.subtopics[subtopicIndex - 1].path}`;
//                  prevTitle = currentTopic.subtopics[subtopicIndex - 1].title;
//              } else if (topicIndex > 0) {
//                  const prevTopic = topics[topicIndex - 1];
//                  prevPath = prevTopic.subtopics
//                      ? `/learn/atomic-assets/${prevTopic.path}/${prevTopic.subtopics[prevTopic.subtopics.length - 1].path}`
//                      : `/learn/atomic-assets/${prevTopic.path}`;
//                  prevTitle = prevTopic.subtopics[prevTopic.subtopics.length - 1].title;
//              }

//              if (subtopicIndex < currentTopic.subtopics.length - 1) {
//                  nextPath = `/learn/atomic-assets/${page}/${currentTopic.subtopics[subtopicIndex + 1].path}`;
//                  nextTitle = currentTopic.subtopics[subtopicIndex + 1].title;
//              } else if (topicIndex < topics.length - 1) {
//                  const nextTopic = topics[topicIndex + 1];
//                  nextPath = nextTopic.subtopics
//                      ? `/learn/atomic-assets/${nextTopic.path}/${nextTopic.subtopics[0].path}`
//                      : `/learn/atomic-assets/${nextTopic.path}`;
//                  nextTitle = nextTopic.subtopics[0].title;
//              }
//          }
//      }
//  }

//     return (
//         <main className="min-h-screen bg-black text-white flex">
//             <Sidebar section="learn/atomic-assets" topics={topics} />
            
//             {/* Main Content */}
//             <div className="flex-1 flex flex-col items-center p-6">
//                 <button
//                     onClick={() => setShowLongVersion((prev) => !prev)}
//                     className={`mb-4 p-2 rounded hover:bg-gray-700 transition ${!showLongVersion ? "text-blue-400" : ""}`}
//                 >
//                     {/* TL;DR */}
//                     {showLongVersion ? "TL;DR" : "Full Version"}
//                 </button>

//                 <div className="markdown p-6 bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg w-full text-justify">
//                     {/* <MarkdownRenderer filePath={markdownFilePath} /> */}
//                     <MarkdownRenderer filePath={markdownFilePath} variant={showLongVersion ? "long" : "short"} />
//                 </div>

//                 {/* Navigation Buttons */}
//                 <div className="flex justify-between mt-4 w-full">
//                     {/* Previous Button */}
//                     <button
//                         onClick={() => prevPath && navigate(prevPath)}
//                         disabled={!prevPath}
//                         className="p-3 bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50 flex flex-col items-start text-left w-1/3"
//                     >
//                         {!prevPath ? "Previous" : (
//                             <>
//                                 <span className="text-sm text-gray-400">Previous:</span>
//                                 <span className="font-bold">{prevTitle}</span>
//                             </>
//                         )}
//                     </button>

//                     {/* Spacer */}
//                     <div className="flex-1"></div>

//                     {/* Next Button */}
//                     <button
//                         onClick={() => nextPath && navigate(nextPath)}
//                         disabled={!nextPath}
//                         className="p-3 bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50 flex flex-col items-end text-right w-1/3"
//                     >
//                         {!nextPath ? "Next" : (
//                             <>
//                                 <span className="text-sm text-gray-400">Next:</span>
//                                 <span className="font-bold">{nextTitle}</span>
//                             </>
//                         )}
//                     </button>
//                 </div>
//             </div>
            
//         </main>
//     );
// }

"use client"

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Sidebar from "@/components/Sidebar"
import MarkdownRenderer from "@/components/MarkdownRenderer"
import { ArrowLeft, ArrowRight, BookOpen, FileText } from "lucide-react"

interface Subtopic {
  title: string
  path: string
  subtopics?: Subtopic[] // Allow subtopics to be optional
}

interface Topic {
  title: string
  path: string
  subtopics: Subtopic[]
}

export const topics: Topic[] = [
  {
    title: "Atomic Assets",
    path: "introduction",
    subtopics: [
      {
        title: "What are Atomic Assets?",
        path: "introduction-atomic-assets",
      },
      {
        title: "UDL in Depth",
        path: "udl-in-depth",
      },
    ],
  },
  {
    title: "Introduction to UCM BazAR",
    path: "ucm-bazar",
    subtopics: [
      {
        title: "What is UCM BazAR?",
        path: "introduction-bazar",
      },
      {
        title: "Funding Wallet",
        path: "funding-wallet",
      },
      {
        title: "Creating Your Own Atomic Assets",
        path: "creating-your-own-atomic-assets",
      },
    ],
  },
]

export default function AtomicAssets() {
  const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>()
  const navigate = useNavigate()
  console.log("page", page)
  console.log("subpage", subpage)
  console.log("subsubpage", subsubpage)

  useEffect(() => {
    if (!page) {
      navigate("/learn/atomic-assets/introduction/introduction-atomic-assets", { replace: true })
    }
  }, [page])

  let markdownFilePath = "learn/atomic-assets/introduction/introduction-atomic-assets" // Default page
  if (page) markdownFilePath = `learn/atomic-assets/${page}`
  if (subpage) markdownFilePath = `learn/atomic-assets/${page}/${subpage}`
  if (subsubpage) markdownFilePath = `learn/atomic-assets/${page}/${subpage}/${subsubpage}`

  const [showLongVersion, setShowLongVersion] = useState(true) // State to toggle between short and long versions

  // Find the current topic & subtopic indexes
  const topicIndex = topics.findIndex((topic) => topic.path === page)
  const subtopicIndex =
    topicIndex !== -1 && topics[topicIndex].subtopics
      ? topics[topicIndex].subtopics.findIndex((sub) => sub.path === subpage)
      : -1

  const subsubtopicIndex =
    subtopicIndex !== -1 && topics[topicIndex].subtopics && topics[topicIndex].subtopics[subtopicIndex].subtopics
      ? topics[topicIndex].subtopics[subtopicIndex].subtopics?.findIndex((subsub) => subsub.path === subsubpage)
      : -1

  // Compute Previous & Next Paths
  let prevPath: string | null = null
  let nextPath: string | null = null

  let prevTitle: string | null = null
  let nextTitle: string | null = null

  if (topicIndex !== -1) {
    const currentTopic = topics[topicIndex]

    if (subtopicIndex !== -1 && currentTopic.subtopics) {
      const currentSubtopic = currentTopic.subtopics[subtopicIndex]

      if (subsubtopicIndex !== -1 && currentSubtopic.subtopics) {
        // Inside a sub-subtopic
        if (subsubtopicIndex > 0) {
          prevPath = `/learn/atomic-assets/${page}/${subpage}/${currentSubtopic.subtopics[subsubtopicIndex - 1].path}`
          prevTitle = currentSubtopic.subtopics[subsubtopicIndex - 1].title
        } else if (subtopicIndex > 0) {
          prevPath = `/learn/atomic-assets/${page}/${currentTopic.subtopics[subtopicIndex - 1].path}`
          prevTitle = currentTopic.subtopics[subtopicIndex - 1].title
        } else if (topicIndex > 0) {
          const prevTopic = topics[topicIndex - 1]
          prevPath = prevTopic.subtopics
            ? `/learn/atomic-assets/${prevTopic.path}/${prevTopic.subtopics[prevTopic.subtopics.length - 1].path}`
            : `/learn/atomic-assets/${prevTopic.path}`
          prevTitle = prevTopic.subtopics[prevTopic.subtopics.length - 1].title
        }

        if (subsubtopicIndex < currentSubtopic.subtopics.length - 1) {
          nextPath = `/learn/atomic-assets/${page}/${subpage}/${currentSubtopic.subtopics[subsubtopicIndex + 1].path}`
          nextTitle = currentSubtopic.subtopics[subsubtopicIndex + 1].title
        } else if (subtopicIndex < currentTopic.subtopics.length - 1) {
          nextPath = `/learn/atomic-assets/${page}/${currentTopic.subtopics[subtopicIndex + 1].path}`
          nextTitle = currentTopic.subtopics[subtopicIndex + 1].title
        } else if (topicIndex < topics.length - 1) {
          const nextTopic = topics[topicIndex + 1]
          nextPath = nextTopic.subtopics
            ? `/learn/atomic-assets/${nextTopic.path}/${nextTopic.subtopics[0].path}`
            : `/learn/atomic-assets/${nextTopic.path}`
          nextTitle = nextTopic.subtopics[0].title
        }
      } else {
        // Inside a subtopic
        if (subtopicIndex > 0) {
          prevPath = `/learn/atomic-assets/${page}/${currentTopic.subtopics[subtopicIndex - 1].path}`
          prevTitle = currentTopic.subtopics[subtopicIndex - 1].title
        } else if (topicIndex > 0) {
          const prevTopic = topics[topicIndex - 1]
          prevPath = prevTopic.subtopics
            ? `/learn/atomic-assets/${prevTopic.path}/${prevTopic.subtopics[prevTopic.subtopics.length - 1].path}`
            : `/learn/atomic-assets/${prevTopic.path}`
          prevTitle = prevTopic.subtopics[prevTopic.subtopics.length - 1].title
        }

        if (subtopicIndex < currentTopic.subtopics.length - 1) {
          nextPath = `/learn/atomic-assets/${page}/${currentTopic.subtopics[subtopicIndex + 1].path}`
          nextTitle = currentTopic.subtopics[subtopicIndex + 1].title
        } else if (topicIndex < topics.length - 1) {
          const nextTopic = topics[topicIndex + 1]
          nextPath = nextTopic.subtopics
            ? `/learn/atomic-assets/${nextTopic.path}/${nextTopic.subtopics[0].path}`
            : `/learn/atomic-assets/${nextTopic.path}`
          nextTitle = nextTopic.subtopics[0].title
        }
      }
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex relative">
      {/* Background patterns */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 grid-lines opacity-20"></div>
        <div className="absolute inset-0 blockchain-pattern opacity-10"></div>
      </div>

      {/* Sidebar */}
      <Sidebar section="learn/atomic-assets" topics={topics} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center p-4 md:p-6 ml-0 md:ml-72 relative z-10">
        {/* Content Header */}
        <div className="w-full max-w-4xl mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {topicIndex !== -1 && subtopicIndex !== -1 && topics[topicIndex].subtopics[subtopicIndex].title}
            </h1>

            {/* Toggle Button */}
            <button
              onClick={() => setShowLongVersion((prev) => !prev)}
              className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2 ${
                showLongVersion
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

          {/* Decorative line */}
          <div className="h-1 w-full bg-gradient-to-r from-secondary via-highlight to-accent mt-2 rounded-full"></div>
        </div>

        {/* Markdown Content */}
        <div className="w-full max-w-4xl">
          <div className="markdown p-6 bg-card/50 border border-secondary/20 shadow-lg rounded-lg w-full text-justify backdrop-blur-sm">
            <MarkdownRenderer filePath={markdownFilePath} variant={showLongVersion ? "long" : "short"} />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 w-full">
            {/* Previous Button */}
            <button
              onClick={() => prevPath && navigate(prevPath)}
              disabled={!prevPath}
              className={`p-4 rounded-md transition-all duration-300 flex items-center gap-3 ${
                prevPath
                  ? "bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30"
                  : "bg-card/30 text-muted-foreground border border-secondary/10 opacity-50 cursor-not-allowed"
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
              <div className="flex flex-col items-start text-left">
                <span className="text-xs text-muted-foreground">Previous</span>
                <span className="font-medium">{prevTitle || "None"}</span>
              </div>
            </button>

            {/* Next Button */}
            <button
              onClick={() => nextPath && navigate(nextPath)}
              disabled={!nextPath}
              className={`p-4 rounded-md transition-all duration-300 flex items-center gap-3 ${
                nextPath
                  ? "bg-highlight/20 text-highlight border border-highlight/30 hover:bg-highlight/30"
                  : "bg-card/30 text-muted-foreground border border-highlight/10 opacity-50 cursor-not-allowed"
              }`}
            >
              <div className="flex flex-col items-end text-right">
                <span className="text-xs text-muted-foreground">Next</span>
                <span className="font-medium">{nextTitle || "None"}</span>
              </div>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full max-w-4xl mt-12 mb-6 text-center">
          <div className="text-xs text-muted-foreground">
            <span className="block mb-1">Atomic Assets Documentation</span>
            <div className="h-0.5 w-24 bg-gradient-to-r from-secondary via-highlight to-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

