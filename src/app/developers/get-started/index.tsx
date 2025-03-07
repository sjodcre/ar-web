import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";
import { ChevronDown, ChevronRight } from "lucide-react";

const topics = [
    {
        title: "Get Started",
        subtopics: [
            { title: "Introduction to Arweave", path: "arweave/introduction" },
            { title: "The Permaweb and Its Applications", path: "arweave/permaweb" },
            { title: "Scalability and Technical Innovations", path: "arweave/scalability" },
            {
                title: "Advanced Topics in Arweave", // New subtopic
                path: "arweave/advanced-topics",
                subtopics: [
                    { title: "Placeholder Subtopic 1", path: "arweave/advanced-topics/placeholder1" },
                    { title: "Placeholder Subtopic 2", path: "arweave/advanced-topics/placeholder2" },
                ],
            },
        ],
    },
    {
        title: "AO 101",
        subtopics: [
            { title: "Introduction to AO", path: "ao/introduction" },
            { title: "AO’s Core Architecture: How It Works", path: "ao/core-architecture" },
            { title: "AO’s Scalability and Parallel Processing", path: "ao/scalability" },
        ],
    },
    {
        title: "Why Arweave? Why AO? 🌐 Understanding Arweave + AO vs. Traditional Full-Stack & Web3 Ecosystems",
        subtopics: [
            { title: "Comparing Web2 Full Stack Applications", path: "why-arweave-ao/web2" },
            { title: "Comparing Web3 Full Stack Applications", path: "why-arweave-ao/web3" },
            { title: "How Applications Built on Arweave + AO differ", path: "why-arweave-ao/applications" },
        ],
    },
];

const GetStarted: React.FC = () => {
    const [markdownContent, setMarkdownContent] = useState("");
    const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
    const [selectedSubtopicIndex, setSelectedSubtopicIndex] = useState(0);
    const [openSubSubtopics, setOpenSubSubtopics] = useState<{ [key: string]: boolean }>({});
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
        [topics[0].title]: true,
        [topics[1].title]: false,
        [topics[2].title]: false,
    });

    useEffect(() => {
        fetch("/src/content/developers/get-started.md")
            .then((res) => res.text())
            .then(setMarkdownContent);
    }, []);

    // Copy Code Function
    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code);
        toast.success("Copied to clipboard!", {
            description: "The code snippet has been copied successfully. 🚀",
            duration: 3000, // Toast stays for 3 seconds
        });
    };

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const toggleSubSubtopic = (subtopicTitle: string) => {
        setOpenSubSubtopics((prev) => ({
            ...prev,
            [subtopicTitle]: !prev[subtopicTitle],
        }));
    };

    const selectTopic = (index: number) => {
        setSelectedTopicIndex(index);
        // setSelectedSubtopicIndex(0); // Reset subtopic index when changing topics
        setOpenSections((prev) => {
            const updatedSections = { ...prev };
            Object.keys(updatedSections).forEach(key => updatedSections[key] = false); // Close all topics
            updatedSections[topics[index].title] = true; // Open the selected topic
            return updatedSections;
        });
    };

    return (
        <main className="min-h-screen bg-black text-white flex">
            {/* Sidebar Navigation */}
            <aside className="hidden md:block w-64 bg-black p-4 border-r border-gray-700">
                <h2 className="text-lg font-bold mb-4">Topics</h2>
                <ul className="space-y-2">
    {topics.map((topic, topicIndex) => (
        <li key={topicIndex} className="border-b border-gray-700 pb-2">
            {/* Main Topic */}
            <button
                onClick={() => toggleSection(topic.title)}
                className="flex items-center justify-between w-full p-3 bg-gray-900 rounded hover:bg-gray-800 transition font-bold text-white"
            >
                <span>{topic.title}</span>
                {openSections[topic.title] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>

            {/* Subtopics */}
            {openSections[topic.title] && (
                <ul className="pl-4 mt-2 space-y-1 border-l-2 border-gray-700">
                    {topic.subtopics.map((section, index) => (
                        <li key={index}>
                            <button
                                onClick={() => {
                                    selectTopic(topicIndex);
                                    setSelectedSubtopicIndex(index);
                                    if (section.subtopics && section.subtopics.length > 0) {
                                        toggleSubSubtopic(section.title);
                                    }
                                }}
                                className="flex items-center justify-between w-full p-2 text-gray-400 hover:text-white bg-gray-800 rounded transition pl-4"
                            >
                                {section.title}
                                {section.subtopics && section.subtopics.length > 0 && (
                                    openSubSubtopics[section.title] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
                                )}
                            </button>

                            {/* Sub-Subtopics */}
                            {section.subtopics && section.subtopics.length > 0 && openSubSubtopics[section.title] && (
                                <ul className="pl-6 mt-1 space-y-1 border-l border-gray-700">
                                    {section.subtopics.map((subSection, subIndex) => (
                                        <li key={subIndex}>
                                            <button
                                                className="block p-2 text-gray-500 hover:text-white pl-6"
                                            >
                                                {subSection.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    ))}
</ul>

            </aside>

            <div className="flex-1 flex flex-col items-center p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">📖 Documentation</h1>
                <div className="markdown p-6 bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg w-full text-justify">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            table: ({ children }) => (
                                <table className="w-full border-collapse border border-gray-700 text-white my-4">
                                    {children}
                                </table>
                            ),
                            th: ({ children }) => (
                                <th className="border border-gray-600 bg-gray-800 px-4 py-2 text-left font-semibold">
                                    {children}
                                </th>
                            ),
                            td: ({ children }) => (
                                <td className="border border-gray-600 px-4 py-2">
                                    {children}
                                </td>
                            ),
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
                            details: ({ children }) => (
                                <details className="p-3 my-2 bg-gray-800/90 border border-gray-600 rounded-lg shadow-md">
                                    {children}
                                </details>
                            ),
                            summary: ({ children }) => (
                                <summary className="font-semibold cursor-pointer text-blue-300 hover:text-blue-400 transition">
                                    {children}
                                </summary>
                            ),
                        }}
                    >
                        {markdownContent}
                    </ReactMarkdown>
                </div>
            </div>
        </main>
    );
};

export default GetStarted;
