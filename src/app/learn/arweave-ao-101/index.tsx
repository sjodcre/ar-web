// import { useEffect, useState } from "react";
// import Sidebar from "@/components/Sidebar";
// import { useNavigate, useParams } from "react-router-dom";
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

// export const topics: Topic[] = [
//     {
//         title: "Arweave 101", path: "arweave",
//         subtopics: [
//             { title: "Introduction to Arweave", path: "introduction" },
//             { title: "The Permaweb and Its Applications", path: "permaweb" },
//             { title: "Scalability and Technical Innovations", path: "scalability" },
//         ],
//     },
//     {
//         title: "AO 101", path: "ao",
//         subtopics: [
//             { title: "Introduction to AO", path: "introduction" },
//             { title: "AO’s Core Architecture: How It Works", path: "core-architecture" },
//             { title: "AO’s Scalability and Parallel Processing", path: "scalability" },
//         ],
//     },
//     {
//         title: "🌐 Understanding Arweave + AO vs. Traditional Full-Stack & Web3 Ecosystems", path: "why-arweave-ao",
//         subtopics: [
//             { title: "Comparing Web2 Full Stack Applications", path: "web2" },
//             { title: "Comparing Web3 Full Stack Applications", path: "web3" },
//             { title: "How Applications Built on Arweave + AO differ", path: "applications" },
//         ],
//     },
// ];

// export default function ArweaveAO101() {

//     const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!page) {
//             navigate("/learn/arweave-ao-101/arweave/introduction", { replace: true });
//         }
//     }, [page]);

//     let markdownFilePath = "learn/arweave-ao-101/arweave/introduction"; // Default page
//     if (page) markdownFilePath = `learn/arweave-ao-101/${page}`;
//     if (subpage) markdownFilePath = `learn/arweave-ao-101/${page}/${subpage}`;
//     if (subsubpage) markdownFilePath = `learn/arweave-ao-101/${page}/${subpage}/${subsubpage}`;

//     console.log("Markdown File Path:", markdownFilePath); // Debugging

//     const [showLongVersion, setShowLongVersion] = useState(true); // State to toggle between short and long versions

//     // Find the current topic index
//     const topicIndex = topics.findIndex(topic => topic.path === page);
//     const subtopicIndex = topicIndex !== -1 && topics[topicIndex].subtopics
//         ? topics[topicIndex].subtopics.findIndex(sub => sub.path === subpage)
//         : -1;

//     const subsubtopicIndex = (subtopicIndex !== -1 && topics[topicIndex].subtopics && topics[topicIndex].subtopics[subtopicIndex].subtopics)
//         ? topics[topicIndex].subtopics[subtopicIndex].subtopics?.findIndex(subsub => subsub.path === subsubpage)
//         : -1;

//     // Compute Previous & Next Paths
//     let prevPath: string | null = null;
//     let nextPath: string | null = null;

//     let prevTitle: string | null = null;
//     let nextTitle: string | null = null;

//     if (topicIndex !== -1) {
//         const currentTopic = topics[topicIndex];

//         if (subtopicIndex !== -1 && currentTopic.subtopics) {
//             const currentSubtopic = currentTopic.subtopics[subtopicIndex];

//             if (subsubtopicIndex !== -1 && currentSubtopic.subtopics) {
//                 // Inside a sub-subtopic
//                 if (subsubtopicIndex > 0) {
//                     prevPath = `/learn/arweave-ao-101/${page}/${subpage}/${currentSubtopic.subtopics[subsubtopicIndex - 1].path}`;
//                     prevTitle = currentSubtopic.subtopics[subsubtopicIndex - 1].title;
//                 } else if (subtopicIndex > 0) {
//                     prevPath = `/learn/arweave-ao-101/${page}/${currentTopic.subtopics[subtopicIndex - 1].path}`;
//                     prevTitle = currentTopic.subtopics[subtopicIndex - 1].title;
//                 } else if (topicIndex > 0) {
//                     const prevTopic = topics[topicIndex - 1];
//                     prevPath = prevTopic.subtopics
//                         ? `/learn/arweave-ao-101/${prevTopic.path}/${prevTopic.subtopics[prevTopic.subtopics.length - 1].path}`
//                         : `/learn/arweave-ao-101/${prevTopic.path}`;
//                     prevTitle = prevTopic.subtopics[prevTopic.subtopics.length - 1].title;
//                 }

//                 if (subsubtopicIndex < currentSubtopic.subtopics.length - 1) {
//                     nextPath = `/learn/arweave-ao-101/${page}/${subpage}/${currentSubtopic.subtopics[subsubtopicIndex + 1].path}`;
//                     nextTitle = currentSubtopic.subtopics[subsubtopicIndex + 1].title;
//                 } else if (subtopicIndex < currentTopic.subtopics.length - 1) {
//                     nextPath = `/learn/arweave-ao-101/${page}/${currentTopic.subtopics[subtopicIndex + 1].path}`;
//                     nextTitle = currentTopic.subtopics[subtopicIndex + 1].title;
//                 } else if (topicIndex < topics.length - 1) {
//                     const nextTopic = topics[topicIndex + 1];
//                     nextPath = nextTopic.subtopics
//                         ? `/learn/arweave-ao-101/${nextTopic.path}/${nextTopic.subtopics[0].path}`
//                         : `/learn/arweave-ao-101/${nextTopic.path}`;
//                     nextTitle = nextTopic.subtopics[0].title;
//                 }
//             } else {
//                 // Inside a subtopic
//                 if (subtopicIndex > 0) {
//                     prevPath = `/learn/arweave-ao-101/${page}/${currentTopic.subtopics[subtopicIndex - 1].path}`;
//                     prevTitle = currentTopic.subtopics[subtopicIndex - 1].title;
//                 } else if (topicIndex > 0) {
//                     const prevTopic = topics[topicIndex - 1];
//                     prevPath = prevTopic.subtopics
//                         ? `/learn/arweave-ao-101/${prevTopic.path}/${prevTopic.subtopics[prevTopic.subtopics.length - 1].path}`
//                         : `/learn/arweave-ao-101/${prevTopic.path}`;
//                     prevTitle = prevTopic.subtopics[prevTopic.subtopics.length - 1].title;
//                 }

//                 if (subtopicIndex < currentTopic.subtopics.length - 1) {
//                     nextPath = `/learn/arweave-ao-101/${page}/${currentTopic.subtopics[subtopicIndex + 1].path}`;
//                     nextTitle = currentTopic.subtopics[subtopicIndex + 1].title;
//                 } else if (topicIndex < topics.length - 1) {
//                     const nextTopic = topics[topicIndex + 1];
//                     nextPath = nextTopic.subtopics
//                         ? `/learn/arweave-ao-101/${nextTopic.path}/${nextTopic.subtopics[0].path}`
//                         : `/learn/arweave-ao-101/${nextTopic.path}`;
//                     nextTitle = nextTopic.subtopics[0].title;
//                 }
//             }
//         } else {
//             // Inside a main topic without a selected subtopic
//             if (topicIndex > 0) {
//                 const prevTopic = topics[topicIndex - 1];
//                 prevPath = prevTopic.subtopics
//                     ? `/learn/arweave-ao-101/${prevTopic.path}/${prevTopic.subtopics[prevTopic.subtopics.length - 1].path}`
//                     : `/learn/arweave-ao-101/${prevTopic.path}`;
//                 prevTitle = prevTopic.subtopics[prevTopic.subtopics.length - 1].title;
//             }

//             if (topicIndex < topics.length - 1) {
//                 const nextTopic = topics[topicIndex + 1];
//                 nextPath = nextTopic.subtopics
//                     ? `/learn/arweave-ao-101/${nextTopic.path}/${nextTopic.subtopics[0].path}`
//                     : `/learn/arweave-ao-101/${nextTopic.path}`;
//                 nextTitle = nextTopic.subtopics[0].title;
//             }
//         }
//     }

//     return (
//         <main className="min-h-screen bg-black text-white flex">
//             <Sidebar section="learn/arweave-ao-101" topics={topics} />
//             <div className="flex-1 flex flex-col items-center p-6">
//                 <button
//                     onClick={() => setShowLongVersion((prev) => !prev)}
//                     className={`mb-4 p-2 rounded hover:bg-gray-700 transition ${!showLongVersion ? "text-blue-400" : ""}`}
//                 >
//                     {/* TL;DR */}
//                     {showLongVersion ? "TL;DR" : "Full Version"}
//                 </button>
//                 {/* <h1 className="text-3xl font-bold mb-6 text-center">📖 Documentation</h1> */}
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
import MarkdownRenderer from "@/components/MarkdownRenderer"
import DocHeader from "@/components/test/doc-header"
import PermanenceIndicator from "@/components/test/permanence-indicator"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Sidebar from "@/components/Sidebar"

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
    title: "Arweave 101",
    path: "arweave",
    subtopics: [
      { title: "Introduction to Arweave", path: "introduction" },
      { title: "The Permaweb and Its Applications", path: "permaweb" },
      { title: "Scalability and Technical Innovations", path: "scalability" },
    ],
  },
  {
    title: "AO 101",
    path: "ao",
    subtopics: [
      { title: "Introduction to AO", path: "introduction" },
      { title: "AO's Core Architecture: How It Works", path: "core-architecture" },
      { title: "AO's Scalability and Parallel Processing", path: "scalability" },
    ],
  },
  {
    title: "🌐 Understanding Arweave + AO vs. Traditional Full-Stack & Web3 Ecosystems",
    path: "why-arweave-ao",
    subtopics: [
      { title: "Comparing Web2 Full Stack Applications", path: "web2" },
      { title: "Comparing Web3 Full Stack Applications", path: "web3" },
      { title: "How Applications Built on Arweave + AO differ", path: "applications" },
    ],
  },
]

export default function ArweaveAO101() {
  const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>()
  const navigate = useNavigate()
  const [showLongVersion, setShowLongVersion] = useState(true)

  useEffect(() => {
    if (!page) {
      navigate("/learn/arweave-ao-101/arweave/introduction", { replace: true })
    }
  }, [page, navigate])

  let markdownFilePath = "learn/arweave-ao-101/arweave/introduction" // Default page
  if (page) markdownFilePath = `learn/arweave-ao-101/${page}`
  if (subpage) markdownFilePath = `learn/arweave-ao-101/${page}/${subpage}`
  if (subsubpage) markdownFilePath = `learn/arweave-ao-101/${page}/${subpage}/${subsubpage}`

  // Find the current topic index
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
          prevPath = `/learn/arweave-ao-101/${page}/${subpage}/${currentSubtopic.subtopics[subsubtopicIndex - 1].path}`
          prevTitle = currentSubtopic.subtopics[subsubtopicIndex - 1].title
        } else if (subtopicIndex > 0) {
          prevPath = `/learn/arweave-ao-101/${page}/${currentTopic.subtopics[subtopicIndex - 1].path}`
          prevTitle = currentTopic.subtopics[subtopicIndex - 1].title
        } else if (topicIndex > 0) {
          const prevTopic = topics[topicIndex - 1]
          prevPath = prevTopic.subtopics
            ? `/learn/arweave-ao-101/${prevTopic.path}/${prevTopic.subtopics[prevTopic.subtopics.length - 1].path}`
            : `/learn/arweave-ao-101/${prevTopic.path}`
          prevTitle = prevTopic.subtopics[prevTopic.subtopics.length - 1].title
        }

        if (subsubtopicIndex < currentSubtopic.subtopics.length - 1) {
          nextPath = `/learn/arweave-ao-101/${page}/${subpage}/${currentSubtopic.subtopics[subsubtopicIndex + 1].path}`
          nextTitle = currentSubtopic.subtopics[subsubtopicIndex + 1].title
        } else if (subtopicIndex < currentTopic.subtopics.length - 1) {
          nextPath = `/learn/arweave-ao-101/${page}/${currentTopic.subtopics[subtopicIndex + 1].path}`
          nextTitle = currentTopic.subtopics[subtopicIndex + 1].title
        } else if (topicIndex < topics.length - 1) {
          const nextTopic = topics[topicIndex + 1]
          nextPath = nextTopic.subtopics
            ? `/learn/arweave-ao-101/${nextTopic.path}/${nextTopic.subtopics[0].path}`
            : `/learn/arweave-ao-101/${nextTopic.path}`
          nextTitle = nextTopic.subtopics[0].title
        }
      } else {
        // Inside a subtopic
        if (subtopicIndex > 0) {
          prevPath = `/learn/arweave-ao-101/${page}/${currentTopic.subtopics[subtopicIndex - 1].path}`
          prevTitle = currentTopic.subtopics[subtopicIndex - 1].title
        } else if (topicIndex > 0) {
          const prevTopic = topics[topicIndex - 1]
          prevPath = prevTopic.subtopics
            ? `/learn/arweave-ao-101/${prevTopic.path}/${prevTopic.subtopics[prevTopic.subtopics.length - 1].path}`
            : `/learn/arweave-ao-101/${prevTopic.path}`
          prevTitle = prevTopic.subtopics[prevTopic.subtopics.length - 1].title
        }

        if (subtopicIndex < currentTopic.subtopics.length - 1) {
          nextPath = `/learn/arweave-ao-101/${page}/${currentTopic.subtopics[subtopicIndex + 1].path}`
          nextTitle = currentTopic.subtopics[subtopicIndex + 1].title
        } else if (topicIndex < topics.length - 1) {
          const nextTopic = topics[topicIndex + 1]
          nextPath = nextTopic.subtopics
            ? `/learn/arweave-ao-101/${nextTopic.path}/${nextTopic.subtopics[0].path}`
            : `/learn/arweave-ao-101/${nextTopic.path}`
          nextTitle = nextTopic.subtopics[0].title
        }
      }
    } else {
      // Inside a main topic without a selected subtopic
      if (topicIndex > 0) {
        const prevTopic = topics[topicIndex - 1]
        prevPath = prevTopic.subtopics
          ? `/learn/arweave-ao-101/${prevTopic.path}/${prevTopic.subtopics[prevTopic.subtopics.length - 1].path}`
          : `/learn/arweave-ao-101/${prevTopic.path}`
        prevTitle = prevTopic.subtopics[prevTopic.subtopics.length - 1].title
      }

      if (topicIndex < topics.length - 1) {
        const nextTopic = topics[topicIndex + 1]
        nextPath = nextTopic.subtopics
          ? `/learn/arweave-ao-101/${nextTopic.path}/${nextTopic.subtopics[0].path}`
          : `/learn/arweave-ao-101/${nextTopic.path}`
        nextTitle = nextTopic.subtopics[0].title
      }
    }
  }

  // Get current page title
  let currentTitle = "Arweave & AO 101"
  if (topicIndex !== -1 && subtopicIndex !== -1) {
    currentTitle = topics[topicIndex].subtopics[subtopicIndex].title
  }

  // Mock transaction ID and timestamp for demonstration
  const txId = "bNMNDK3sFRP5vSJELdYQhA-cQwvwSKJ_xdWrwKm2xCU"
  const lastUpdated = "2025-03-15T14:30:00Z"

  // Determine category based on current page
  let category: "storage" | "computation" | "network" | "general" = "general"
  if (page === "arweave") category = "storage"
  if (page === "ao") category = "computation"
  if (page === "why-arweave-ao") category = "network"

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - using your existing Sidebar component */}
      <div className="hidden md:block w-72 bg-primary/30 backdrop-blur-md p-4 border-r border-secondary/20 relative">
        <div className="absolute inset-0 grid-lines opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-accent/5 opacity-30"></div>
        <div className="relative z-10">
          <h2 className="text-lg font-bold mb-4 text-foreground font-mono flex items-center">
            <span className="gradient-text">📚 Arweave & AO 101</span>
          </h2>
          {/* Your existing sidebar content would go here */}
          <Sidebar section="learn/arweave-ao-101" topics={topics} />

        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="max-w-4xl mx-auto">
          {/* Document header */}
          <DocHeader title={currentTitle} lastUpdated={lastUpdated} txId={txId} category={category} />

          {/* Content area */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="md:col-span-3">
              {/* Version toggle */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setShowLongVersion((prev) => !prev)}
                  className={`px-3 py-1.5 rounded-md border ${
                    showLongVersion
                      ? "border-secondary/30 bg-secondary/10 text-secondary"
                      : "border-muted text-muted-foreground"
                  } hover:bg-secondary/20 transition-colors`}
                >
                  {showLongVersion ? "Switch to TL;DR" : "Switch to Full Version"}
                </button>
              </div>

              {/* Main content */}
              <div className="prose prose-invert max-w-none p-6 bg-card/30 backdrop-blur-sm border border-secondary/20 rounded-lg shadow-lg">
                <MarkdownRenderer filePath={markdownFilePath} variant={showLongVersion ? "long" : "short"} />
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6 w-full">
                {/* Previous Button */}
                <button
                  onClick={() => prevPath && navigate(prevPath)}
                  disabled={!prevPath}
                  className={`p-3 rounded-md flex items-center gap-2 transition-colors ${
                    prevPath
                      ? "bg-card hover:bg-secondary/10 border border-secondary/20 cursor-pointer"
                      : "opacity-50 cursor-not-allowed bg-card/50 border border-muted"
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs text-muted-foreground">Previous</span>
                    <span className="font-medium">{prevTitle || "None"}</span>
                  </div>
                </button>

                {/* Next Button */}
                <button
                  onClick={() => nextPath && navigate(nextPath)}
                  disabled={!nextPath}
                  className={`p-3 rounded-md flex items-center gap-2 transition-colors ${
                    nextPath
                      ? "bg-card hover:bg-secondary/10 border border-secondary/20"
                      : "opacity-50 cursor-not-allowed bg-card/50 border border-muted"
                  }`}
                >
                  <div className="flex flex-col items-end text-right">
                    <span className="text-xs text-muted-foreground">Next</span>
                    <span className="font-medium">{nextTitle || "None"}</span>
                  </div>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="md:col-span-1">
              {/* Sidebar content */}
              <div className="space-y-4 sticky top-4">
                <PermanenceIndicator status="permanent" timestamp={lastUpdated} confirmations={12} />

                {/* <div className="rounded-lg border border-secondary/20 overflow-hidden">
                  <div className="bg-card/80 px-3 py-2 border-b border-secondary/20">
                    <h3 className="font-medium text-sm">On This Page</h3>
                  </div>
                  <div className="p-3">
                    <ul className="space-y-1.5 text-sm">
                      <li>
                        <a
                          href="#introduction"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          Introduction
                        </a>
                      </li>
                      <li>
                        <a
                          href="#key-concepts"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          Key Concepts
                        </a>
                      </li>
                      <li>
                        <a href="#use-cases" className="text-muted-foreground hover:text-secondary transition-colors">
                          Use Cases
                        </a>
                      </li>
                      <li>
                        <a
                          href="#getting-started"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          Getting Started
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

