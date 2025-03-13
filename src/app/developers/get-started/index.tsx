import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export const topics = [
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

const GetStarted = () => {
    //   const { page } = useParams<{ page: string }>();
    const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (page === "get-started" && !subpage) {
            navigate("/developers/get-started/quick-start", { replace: true });
        }
    }, [page, subpage, navigate]);
    let markdownFilePath = "developers/get-started/quick-start"; // Default page
    if (page) markdownFilePath = `developers/${page}`;
    if (subpage) markdownFilePath = `developers/${page}/${subpage}`;
    if (subsubpage) markdownFilePath = `developers/${page}/${subpage}/${subsubpage}`;

    console.log("Markdown File Path:", markdownFilePath); // Debugging

    //   const markdownFilePath = page || "quick-start"; // Default to "quick-start"

    return (
        <main className="min-h-screen bg-black text-white flex">
            <Sidebar section="developers" topics={topics} />
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