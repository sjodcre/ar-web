import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import MarkdownRenderer from "@/components/MarkdownRenderer";

interface Subtopic {
    title: string;
    path: string;
    subtopics?: Subtopic[]; // Allow subtopics to be optional
}

interface Topic {
    title: string;
    path: string;
    subtopics: Subtopic[];
}

export const topics: Topic[]= [
    {
        title: "Atomic Assets", path: "introduction",
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
        title: "Introduction to UCM BazAR", path: "ucm-bazar",
        subtopics:[
            {
                title:"What is UCM BazAR?",
                path: "introduction-bazar"

            },
            {
                title:"Funding Wallet",
                path:"funding-wallet"
            },
            {
                title:"Creating Your Own Atomic Assets",
                path:"creating-your-own-atomic-assets"
            }
        ]
    }
];



export default function AtomicAssets() {

    const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>();
    const navigate = useNavigate();
    console.log("page", page)
    console.log("subpage", subpage)
    console.log("subsubpage", subsubpage)

    useEffect(() => {
        if (!page) {
            navigate("/learn/atomic-assets/introduction/introduction-atomic-assets", { replace: true });
        }
    }, [page]);

    let markdownFilePath = "learn/atomic-assets/introduction/introduction-atomic-assets" // Default page
    if (page) markdownFilePath = `learn/atomic-assets/${page}`;
    if (subpage) markdownFilePath = `learn/atomic-assets/${page}/${subpage}`;
    if (subsubpage) markdownFilePath = `learn/atomic-assets/${page}/${subpage}/${subsubpage}`;

    const [showLongVersion, setShowLongVersion] = useState(true); // State to toggle between short and long versions

 // Find the current topic & subtopic indexes
 const topicIndex = topics.findIndex(topic => topic.path === page);
 const subtopicIndex = topicIndex !== -1 && topics[topicIndex].subtopics
     ? topics[topicIndex].subtopics.findIndex(sub => sub.path === subpage)
     : -1;

 const subsubtopicIndex = (subtopicIndex !== -1 && topics[topicIndex].subtopics && topics[topicIndex].subtopics[subtopicIndex].subtopics)
     ? topics[topicIndex].subtopics[subtopicIndex].subtopics?.findIndex(subsub => subsub.path === subsubpage)
     : -1;

 // Compute Previous & Next Paths
 let prevPath: string | null = null;
 let nextPath: string | null = null;

 let prevTitle: string | null = null;
 let nextTitle: string | null = null;

 if (topicIndex !== -1) {
     const currentTopic = topics[topicIndex];

     if (subtopicIndex !== -1 && currentTopic.subtopics) {
         const currentSubtopic = currentTopic.subtopics[subtopicIndex];

         if (subsubtopicIndex !== -1 && currentSubtopic.subtopics) {
             // Inside a sub-subtopic
             if (subsubtopicIndex > 0) {
                 prevPath = `/learn/atomic-assets/${page}/${subpage}/${currentSubtopic.subtopics[subsubtopicIndex - 1].path}`;
                 prevTitle = currentSubtopic.subtopics[subsubtopicIndex - 1].title;
             } else if (subtopicIndex > 0) {
                 prevPath = `/learn/atomic-assets/${page}/${currentTopic.subtopics[subtopicIndex - 1].path}`;
                 prevTitle = currentTopic.subtopics[subtopicIndex - 1].title;
             } else if (topicIndex > 0) {
                 const prevTopic = topics[topicIndex - 1];
                 prevPath = prevTopic.subtopics
                     ? `/learn/atomic-assets/${prevTopic.path}/${prevTopic.subtopics[prevTopic.subtopics.length - 1].path}`
                     : `/learn/atomic-assets/${prevTopic.path}`;
                 prevTitle = prevTopic.subtopics[prevTopic.subtopics.length - 1].title;
             }

             if (subsubtopicIndex < currentSubtopic.subtopics.length - 1) {
                 nextPath = `/learn/atomic-assets/${page}/${subpage}/${currentSubtopic.subtopics[subsubtopicIndex + 1].path}`;
                 nextTitle = currentSubtopic.subtopics[subsubtopicIndex + 1].title;
             } else if (subtopicIndex < currentTopic.subtopics.length - 1) {
                 nextPath = `/learn/atomic-assets/${page}/${currentTopic.subtopics[subtopicIndex + 1].path}`;
                 nextTitle = currentTopic.subtopics[subtopicIndex + 1].title;
             } else if (topicIndex < topics.length - 1) {
                 const nextTopic = topics[topicIndex + 1];
                 nextPath = nextTopic.subtopics
                     ? `/learn/atomic-assets/${nextTopic.path}/${nextTopic.subtopics[0].path}`
                     : `/learn/atomic-assets/${nextTopic.path}`;
                 nextTitle = nextTopic.subtopics[0].title;
             }
         } else {
             // Inside a subtopic
             if (subtopicIndex > 0) {
                 prevPath = `/learn/atomic-assets/${page}/${currentTopic.subtopics[subtopicIndex - 1].path}`;
                 prevTitle = currentTopic.subtopics[subtopicIndex - 1].title;
             } else if (topicIndex > 0) {
                 const prevTopic = topics[topicIndex - 1];
                 prevPath = prevTopic.subtopics
                     ? `/learn/atomic-assets/${prevTopic.path}/${prevTopic.subtopics[prevTopic.subtopics.length - 1].path}`
                     : `/learn/atomic-assets/${prevTopic.path}`;
                 prevTitle = prevTopic.subtopics[prevTopic.subtopics.length - 1].title;
             }

             if (subtopicIndex < currentTopic.subtopics.length - 1) {
                 nextPath = `/learn/atomic-assets/${page}/${currentTopic.subtopics[subtopicIndex + 1].path}`;
                 nextTitle = currentTopic.subtopics[subtopicIndex + 1].title;
             } else if (topicIndex < topics.length - 1) {
                 const nextTopic = topics[topicIndex + 1];
                 nextPath = nextTopic.subtopics
                     ? `/learn/atomic-assets/${nextTopic.path}/${nextTopic.subtopics[0].path}`
                     : `/learn/atomic-assets/${nextTopic.path}`;
                 nextTitle = nextTopic.subtopics[0].title;
             }
         }
     }
 }

    return (
        <main className="min-h-screen bg-black text-white flex">
            <Sidebar section="learn/atomic-assets" topics={topics} />
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center p-6">
                <button
                    onClick={() => setShowLongVersion((prev) => !prev)}
                    className={`mb-4 p-2 rounded hover:bg-gray-700 transition ${!showLongVersion ? "text-blue-400" : ""}`}
                >
                    {/* TL;DR */}
                    {showLongVersion ? "TL;DR" : "Full Version"}
                </button>

                <div className="markdown p-6 bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg w-full text-justify">
                    {/* <MarkdownRenderer filePath={markdownFilePath} /> */}
                    <MarkdownRenderer filePath={markdownFilePath} variant={showLongVersion ? "long" : "short"} />
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-4 w-full">
                    {/* Previous Button */}
                    <button
                        onClick={() => prevPath && navigate(prevPath)}
                        disabled={!prevPath}
                        className="p-3 bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50 flex flex-col items-start text-left w-1/3"
                    >
                        {!prevPath ? "Previous" : (
                            <>
                                <span className="text-sm text-gray-400">Previous:</span>
                                <span className="font-bold">{prevTitle}</span>
                            </>
                        )}
                    </button>

                    {/* Spacer */}
                    <div className="flex-1"></div>

                    {/* Next Button */}
                    <button
                        onClick={() => nextPath && navigate(nextPath)}
                        disabled={!nextPath}
                        className="p-3 bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50 flex flex-col items-end text-right w-1/3"
                    >
                        {!nextPath ? "Next" : (
                            <>
                                <span className="text-sm text-gray-400">Next:</span>
                                <span className="font-bold">{nextTitle}</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
            
        </main>
    );
}
