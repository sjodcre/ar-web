import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
// import parse from 'html-react-parser';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const topics = [
    {
        title: "Arweave 101",
        subtopics: [
            { title: "Introduction to Arweave", path: "arweave/introduction" },
            { title: "The Permaweb and Its Applications", path: "arweave/permaweb" },
            { title: "Scalability and Technical Innovations", path: "arweave/scalability" },
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

export default function BlockchainArweaveAO101() {


    const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
    const [selectedSubtopicIndex, setSelectedSubtopicIndex] = useState(0);
    const [shortContent, setShortContent] = useState("");
    const [longContent, setLongContent] = useState("");
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
        [topics[0].title]: true,
        [topics[1].title]: false,
        [topics[2].title]: false,
    });
    const [showLongVersion, setShowLongVersion] = useState(true); // State to toggle between short and long versions

    const currentSubtopic = topics[selectedTopicIndex].subtopics[selectedSubtopicIndex];
    const contentPath = `/src/content/learn/arweave-ao-101/${currentSubtopic.path}`;

    useEffect(() => {
        // Fetch Markdown content dynamically
        fetch(`${contentPath}-short.md`)
            .then((res) => res.text())
            .then(setShortContent);
        fetch(`${contentPath}-long.md`)
            .then((res) => res.text())
            .then(setLongContent);
    }, [selectedTopicIndex, selectedSubtopicIndex]);

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
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

    // const currentTopic = topics[selectedTopicIndex].subtopics[selectedSubtopicIndex];

    const goToNextSubtopic = () => {
        if (selectedSubtopicIndex < topics[selectedTopicIndex].subtopics.length - 1) {
            setSelectedSubtopicIndex(prev => prev + 1);
        } else if (selectedTopicIndex < topics.length - 1) {
            setSelectedTopicIndex(prev => prev + 1);
            setSelectedSubtopicIndex(0); // Reset to first subtopic of the next topic
            selectTopic(selectedTopicIndex + 1); // Open the next topic
        }
    };

    const goToPreviousSubtopic = () => {
        if (selectedSubtopicIndex > 0) {
            setSelectedSubtopicIndex(prev => prev - 1);
        } else if (selectedTopicIndex > 0) {
            setSelectedTopicIndex(prev => prev - 1);
            setSelectedSubtopicIndex(topics[selectedTopicIndex - 1].subtopics.length - 1); // Go to last subtopic of the previous topic
            selectTopic(selectedTopicIndex - 1); // Open the previous topic
        }
    };

    return (
        <main className="min-h-screen bg-black text-white flex">
            {/* Sidebar Navigation */}
            <aside className="hidden md:block w-64 bg-black p-4 border-r border-gray-700">
                <h2 className="text-lg font-bold mb-4">Topics</h2>
                <ul className="space-y-2">
                    {topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>
                            {/* Topic Header with Toggle */}
                            <button
                                onClick={() => toggleSection(topic.title)}
                                className="flex items-center justify-between w-full p-2 bg-gray-800 rounded hover:bg-gray-700 transition"
                            >
                                <span className="font-semibold">{topic.title}</span>
                                {openSections[topic.title] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                            </button>
                            {/* Dropdown Content for Subtopics */}
                            {openSections[topic.title] && (
                                <ul className="pl-4 mt-2 space-y-1">
                                    {topic.subtopics.map((section, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => {
                                                    selectTopic(topicIndex);
                                                    setSelectedSubtopicIndex(index);
                                                }}
                                                className={`block p-2 text-gray-400 hover:text-white ${selectedTopicIndex === topicIndex && selectedSubtopicIndex === index ? "text-white font-bold" : ""
                                                    }`}
                                            >
                                                {section.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center p-6">
                {/* <h1 className="text-3xl font-bold mb-6">Blockchain, Arweave, and AO 101</h1> */}
                <button
                    onClick={() => setShowLongVersion((prev) => !prev)}
                    className={`mb-4 p-2 rounded hover:bg-gray-700 transition ${!showLongVersion ? "text-blue-400" : ""}`}
                >
                    {/* TL;DR */}
                    {showLongVersion ? "TL;DR" : "Full Version"}
                </button>
                <div className="p-4 rounded-md w-full">
                    <h2 className="text-2xl font-semibold mb-4">{currentSubtopic.title}</h2>
                    <div className="markdown text-justify">
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
                                  )}}
                        >
                            {showLongVersion ? longContent : shortContent}
                        </ReactMarkdown>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-4">
                        {/* <button
                            onClick={goToPreviousSubtopic}
                            disabled={selectedSubtopicIndex === 0 && selectedTopicIndex === 0}
                            className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <button
                            onClick={goToNextSubtopic}
                            disabled={selectedSubtopicIndex === topics[selectedTopicIndex].subtopics.length - 1 && selectedTopicIndex === topics.length - 1}
                            className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50"
                        >
                            Next
                        </button> */}

                        <div className="flex justify-between w-full mt-6">
                            {/* Previous Button (Left-Aligned) */}
                            <button
                                onClick={goToPreviousSubtopic}
                                disabled={selectedSubtopicIndex === 0 && selectedTopicIndex === 0}
                                className="p-3 bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50 flex flex-col items-start text-left w-1/3"
                            >
                                {selectedSubtopicIndex === 0 && selectedTopicIndex === 0 ? (
                                    "Previous"
                                ) : (
                                    <>
                                        <span className="text-sm text-gray-400">Previous:</span>
                                        <span className="font-bold">
                                            {selectedSubtopicIndex > 0
                                                ? topics[selectedTopicIndex].subtopics[selectedSubtopicIndex - 1].title
                                                : topics[selectedTopicIndex - 1].subtopics[topics[selectedTopicIndex - 1].subtopics.length - 1].title}
                                        </span>
                                    </>
                                )}
                            </button>

                            {/* Spacer to Push Next Button to the Right */}
                            <div className="flex-1"></div>

                            {/* Next Button (Right-Aligned) */}
                            <button
                                onClick={goToNextSubtopic}
                                disabled={selectedSubtopicIndex === topics[selectedTopicIndex].subtopics.length - 1 && selectedTopicIndex === topics.length - 1}
                                className="p-3 bg-gray-700 rounded hover:bg-gray-600 transition disabled:opacity-50 flex flex-col items-end text-right w-1/3"
                            >
                                {selectedSubtopicIndex === topics[selectedTopicIndex].subtopics.length - 1 && selectedTopicIndex === topics.length - 1 ? (
                                    "Next"
                                ) : (
                                    <>
                                        <span className="text-sm text-gray-400">Next:</span>
                                        <span className="font-bold">
                                            {selectedSubtopicIndex < topics[selectedTopicIndex].subtopics.length - 1
                                                ? topics[selectedTopicIndex].subtopics[selectedSubtopicIndex + 1].title
                                                : topics[selectedTopicIndex + 1].subtopics[0].title}
                                        </span>
                                    </>
                                )}
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    );
}
