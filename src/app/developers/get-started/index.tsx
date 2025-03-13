import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ChevronDown, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const topics = [
  {
    title: "Get Started", path: "get-started",
    subtopics: [
      { title: "Quick Start", path: "quick-start" },
      {
        title: "Installation",
        path: "installation",
        subtopics: [
          { title: "Local Arweave", path: "arweave" },
          { title: "Setting up AOS", path: "aos" },
        ],
      },
      { title: "Deploy your first app!", path: "deploy" },
      {
        title: "Wallets",
        path: "wallets",
        subtopics: [
          { title: "Creating your wallet", path: "create-wallet" },
          { title: "Funding your wallet", path: "fund-wallet" },
        ],
      },
    ],
  },
  {
    title: "TBD", path: "tbd-1",
    subtopics: [
      { title: "TBD", path: "ao/introduction" },
      { title: "TBD", path: "ao/core-architecture" },
      { title: "TBD", path: "ao/scalability" },
    ],
  },
  {
    title: "TBD2", path: "tbd-2",
    subtopics: [
      { title: "TBD2", path: "why-arweave-ao/web2" },
      { title: "TBD2", path: "why-arweave-ao/web3" },
      { title: "TBD2", path: "why-arweave-ao/applications" },
    ],
  },
];

    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code);
        toast.success("Copied to clipboard!", {
            description: "The code snippet has been copied successfully. 🚀",
            duration: 3000, // Toast stays for 3 seconds
        });
    };

const MarkdownRenderer: React.FC<{ filePath: string }> = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    console.log("filepath", filePath)
    // fetch(`/src/content/${filePath}.md`)
    fetch(`/src/content/${filePath}.md`)
      .then((res) => res.text())
      .then(setMarkdownContent)
      .catch(() => setMarkdownContent("⚠️ Error loading markdown file. Check file path."));
  }, [filePath]);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // code({ node, inline, className, children, ...props }) {
        //   const match = /language-(\w+)/.exec(className || "");
        //   return !inline && match ? (
        //     <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" {...props}>
        //       {String(children).replace(/\n$/, "")}
        //     </SyntaxHighlighter>
        //   ) : (
        //     <code className="bg-gray-800 p-1 rounded" {...props}>
        //       {children}
        //     </code>
        //   );
        // },
        code({ node, inline, className, children, ...props }: { node: any; inline?: boolean; className?: string; children: React.ReactNode; }) {
                                            const match = /language-(\w+)/.exec(className || "");
                                            const codeText = String(children).replace(/\n$/, "");
            
                                            return !inline && match ? (
                                                <div className="relative group">
                                                    <button
                                                        className="absolute top-2 right-2 px-2 py-1 text-xs font-medium text-gray-200 bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-600"
                                                        onClick={() => copyToClipboard(codeText)}
                                                    >
                                                        📋 Copy
                                                    </button>
                                                    <SyntaxHighlighter
                                                        style={dracula}
                                                        language={match[1]}
                                                        PreTag="div"
                                                        className="rounded-lg border border-gray-700 overflow-hidden"
                                                        {...props}
                                                    >
                                                        {codeText}
                                                    </SyntaxHighlighter>
                                                </div>
                                            ) : (
                                                <code className="bg-gray-800 p-1 rounded" {...props}>
                                                    {children}
                                                </code>
                                            );
                                        },
        table: ({ children }) => <table className="w-full border border-gray-700">{children}</table>,
        th: ({ children }) => <th className="border border-gray-600 bg-gray-800 px-4 py-2">{children}</th>,
        td: ({ children }) => <td className="border border-gray-600 px-4 py-2">{children}</td>,
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
};

// const Sidebar = () => {
//     const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>();
//     const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  
//     // console.log("page",page)
//     // console.log("subpage", subpage)
//     // console.log("subsubpage", subsubpage)
//     useEffect(() => {
//       // Auto-expand relevant sections based on the URL
//       topics.forEach((topic) => {
//         topic.subtopics.forEach((subtopic) => {
//           if (subtopic.subtopics) {
//             subtopic.subtopics.forEach((subSubtopic) => {
//               if (subSubtopic.path === `${page}/${subpage}/${subsubpage}`) {
//                 setOpenSections((prev) => ({ ...prev, [topic.title]: true, [subtopic.title]: true }));
//               }
//             });
//           } else if (subtopic.path === `${page}/${subpage}` || subtopic.path === page) {
//             setOpenSections((prev) => ({ ...prev, [topic.title]: true }));
//           }
//         });
//       });
//     }, [page, subpage, subsubpage]);
  
//     const toggleSection = (section: string) => {
//       setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
//     };
  
//     return (
//       <aside className="hidden md:block w-72 bg-black p-4 border-r border-gray-700">
//         <h2 className="text-lg font-bold mb-4 text-gray-300">📚 Documentation</h2>
//         <ul className="space-y-2">
//           {topics.map((topic) => (
//             <li key={topic.title} className="pb-2 border-b border-gray-700">
//               {/* Main Topic */}
//               <button
//                 onClick={() => toggleSection(topic.title)}
//                 className={`flex items-center justify-between w-full p-3 text-white bg-gray-900 rounded hover:bg-gray-800 transition font-bold ${
//                   openSections[topic.title] ? "bg-gray-800" : ""
//                 }`}
//               >
//                 <span>{topic.title}</span>
//                 {openSections[topic.title] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
//               </button>
  
//               {/* Subtopics */}
//               {openSections[topic.title] && (
//                 <ul className="pl-4 mt-2 space-y-1 border-l-2 border-gray-600">
//                   {topic.subtopics.map((subtopic) => (
//                     <li key={subtopic.title}>
//                       {subtopic.subtopics ? (
//                         <>
//                           {/* Subtopic with expandable sub-subtopics */}
//                           <button
//                             onClick={() => toggleSection(subtopic.title)}
//                             className={`flex items-center justify-between w-full p-2 text-gray-300 hover:text-white bg-gray-800 rounded transition pl-4 ${
//                               openSections[subtopic.title] || page === subtopic.path ? "bg-gray-700 text-white" : ""
//                             }`}
//                           >
//                             {subtopic.title}
//                             {openSections[subtopic.title] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
//                           </button>
  
//                           {/* Sub-Subtopics */}
//                           {openSections[subtopic.title] && (
//                             <ul className="pl-6 mt-1 space-y-1 border-l border-gray-500">
//                               {subtopic.subtopics.map((subSubtopic) => (
//                                 <li key={subSubtopic.title}>
//                                   <Link
//                                     to={`/developers/${topic.path}/${subtopic.path}/${subSubtopic.path}`}
//                                     className={`block p-2 text-gray-400 hover:text-white pl-6 ${
//                                       subsubpage === subSubtopic.path ? "text-white font-bold bg-gray-700 rounded" : ""
//                                     }`}
//                                   >
//                                     {subSubtopic.title}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </>
//                       ) : (
//                         <Link
//                           to={`/developers/${topic.path}/${subtopic.path}`}
//                           className={`block p-2 text-gray-400 hover:text-white pl-4 ${
//                             page === subtopic.path || subpage === subtopic.path ? "text-white font-bold bg-gray-700 rounded" : ""
//                           }`}
//                         >
//                           {subtopic.title}
//                         </Link>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </aside>
//     );
//   };

const Sidebar = () => {
    const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>();
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

    // useEffect(() => {
    //     // Auto-expand relevant sections based on the URL
    //     topics.forEach((topic) => {
    //         topic.subtopics.forEach((subtopic) => {
    //             if (subtopic.subtopics) {
    //                 subtopic.subtopics.forEach((subSubtopic) => {
    //                     if (subSubtopic.path === `${page}/${subpage}/${subsubpage}`) {
    //                         setOpenSections((prev) => ({ ...prev, [topic.title]: true, [subtopic.title]: true }));
    //                     }
    //                 });
    //             } else if (subtopic.path === `${page}/${subpage}` || subtopic.path === page) {
    //                 setOpenSections((prev) => ({ ...prev, [topic.title]: true }));
    //             }
    //         });
    //     });
    // }, [page, subpage, subsubpage]);

    useEffect(() => {
        // Reset open sections
        const updatedSections: { [key: string]: boolean } = {};

        topics.forEach((topic) => {
            if (topic.path === page) {
                updatedSections[topic.title] = true; // Open the topic
            }

            topic.subtopics.forEach((subtopic) => {
                if (subtopic.path === subpage || subtopic.path === `${page}/${subpage}`) {
                    updatedSections[topic.title] = true; // Ensure the parent topic is open
                    updatedSections[subtopic.title] = true; // Open the subtopic
                }

                if (subtopic.subtopics) {
                    subtopic.subtopics.forEach((subSubtopic) => {
                        if (subSubtopic.path === subsubpage || subSubtopic.path === `${page}/${subpage}/${subsubpage}`) {
                            updatedSections[topic.title] = true; // Ensure parent topic is open
                            updatedSections[subtopic.title] = true; // Ensure subtopic is open
                        }
                    });
                }
            });
        });

        setOpenSections(updatedSections);
    }, [page, subpage, subsubpage]); // Run this effect whenever the URL changes

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <aside className="hidden md:block w-72 bg-black p-4 border-r border-gray-700">
            <h2 className="text-lg font-bold mb-4 text-gray-300">📚 Documentation</h2>
            <ul className="space-y-2">
                {topics.map((topic) => {
                    const isTopicSelected =
                        topic.subtopics.some((subtopic) =>
                            subtopic.subtopics
                                ? subtopic.subtopics.some((subSubtopic) => subsubpage === subSubtopic.path)
                                : page === subtopic.path || subpage === subtopic.path
                        );

                    return (
                        <li key={topic.title} className="pb-2 border-b border-gray-700">
                            {/* Main Topic */}
                            <button
                                onClick={() => toggleSection(topic.title)}
                                className={`flex items-center justify-between w-full p-3 rounded transition font-bold ${
                                    isTopicSelected ? "bg-gray-800 text-blue-400" : "bg-gray-900 text-white"
                                } hover:bg-gray-800`}
                            >
                                <span>{topic.title}</span>
                                {openSections[topic.title] ? (
                                    <ChevronDown className="h-4 w-4" />
                                ) : (
                                    <ChevronRight className="h-4 w-4" />
                                )}
                            </button>

                            {/* Subtopics */}
                            {openSections[topic.title] && (
                                <ul className="pl-4 mt-2 space-y-1 border-l-2 border-gray-600">
                                    {topic.subtopics.map((subtopic) => {
                                        const isSubtopicSelected =
                                            subtopic.subtopics
                                                ? subtopic.subtopics.some((subSubtopic) => subsubpage === subSubtopic.path)
                                                : page === subtopic.path || subpage === subtopic.path;

                                        return (
                                            <li key={subtopic.title}>
                                                {subtopic.subtopics ? (
                                                    <>
                                                        {/* Subtopic with expandable sub-subtopics */}
                                                        <button
                                                            onClick={() => toggleSection(subtopic.title)}
                                                            className={`flex items-center justify-between w-full p-2 rounded transition pl-4 ${
                                                                isSubtopicSelected
                                                                    ? "bg-gray-700 text-blue-400"
                                                                    : "bg-gray-800 text-gray-300"
                                                            } hover:text-white`}
                                                        >
                                                            {subtopic.title}
                                                            {openSections[subtopic.title] ? (
                                                                <ChevronDown className="h-4 w-4" />
                                                            ) : (
                                                                <ChevronRight className="h-4 w-4" />
                                                            )}
                                                        </button>

                                                        {/* Sub-Subtopics */}
                                                        {openSections[subtopic.title] && (
                                                            <ul className="pl-6 mt-1 space-y-1 border-l border-gray-500">
                                                                {subtopic.subtopics.map((subSubtopic) => (
                                                                    <li key={subSubtopic.title}>
                                                                        <Link
                                                                            to={`/developers/${topic.path}/${subtopic.path}/${subSubtopic.path}`}
                                                                            className={`block p-2 rounded pl-6 ${
                                                                                subsubpage === subSubtopic.path
                                                                                    ? "bg-gray-700 text-blue-400 font-bold"
                                                                                    : "text-gray-400 hover:text-white"
                                                                            }`}
                                                                        >
                                                                            {subSubtopic.title}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </>
                                                ) : (
                                                    <Link
                                                        to={`/developers/${topic.path}/${subtopic.path}`}
                                                        className={`block p-2 rounded pl-4 ${
                                                            isSubtopicSelected
                                                                ? "bg-gray-700 text-blue-400 font-bold"
                                                                : "text-gray-400 hover:text-white"
                                                        }`}
                                                    >
                                                        {subtopic.title}
                                                    </Link>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

const GetStarted = () => {
//   const { page } = useParams<{ page: string }>();
const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>();
console.log("page", page)
console.log("subpage", subpage)
console.log("subsubpage", subsubpage)
let markdownFilePath = "developers/get-started/quick-start"; // Default page
if (page) markdownFilePath = `developers/${page}`;
if (subpage) markdownFilePath = `developers/${page}/${subpage}`;
if (subsubpage) markdownFilePath = `developers/${page}/${subpage}/${subsubpage}`;

console.log("Markdown File Path:", markdownFilePath); // Debugging

//   const markdownFilePath = page || "quick-start"; // Default to "quick-start"

  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center p-6">
        {/* <h1 className="text-3xl font-bold mb-6 text-center">📖 Documentation</h1> */}
        <div className="markdown p-6 bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg w-full text-justify">
          <MarkdownRenderer filePath={markdownFilePath} />
        </div>
      </div>
    </main>
  );
};

export default GetStarted;