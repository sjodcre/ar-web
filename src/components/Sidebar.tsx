import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SidebarProps {
    section:string,
    topics: {
        title: string;
        path: string;
        subtopics?: { title: string; path: string; subtopics?: { title: string; path: string }[] }[];
    }[];
}



const Sidebar: React.FC<SidebarProps> = ({ section, topics }) => {
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
                                                                            to={`/${section}/${topic.path}/${subtopic.path}/${subSubtopic.path}`}
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
                                                        to={`/${section}/${topic.path}/${subtopic.path}`}
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

export default Sidebar;