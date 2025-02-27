import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import parse from 'html-react-parser';

export default function AtomicAsset() {
    // Summaries and their corresponding sources
    const topics = [
        {
            title: "Atomic Assets",
            subtopics: [
                {
                    title: "What are Atomic Assets?",
                    short: `Atomic Assets represent a significant advancement in the realm of digital assets, addressing the limitations of traditional NFTs by ensuring complete on-chain storage, facilitating fractional ownership, and integrating clear licensing frameworks. As the digital landscape continues to evolve, Atomic Assets offer a robust and reliable foundation for creators and users seeking permanence, security, and clarity in digital ownership.`,
                    long:`In the evolving landscape of digital ownership and decentralized storage, Atomic Assets emerge as a groundbreaking solution, offering a seamless blend of data, metadata, and licensing within a single, immutable identifier. Built on the Arweave network, these assets redefine how digital content is stored, accessed, and traded, ensuring permanence and trust in the digital realm.\n\n<b>Understanding Atomic Assets</b>\n\nAn Atomic Asset is a unique digital package that consolidates the core content (such as images, videos, or documents), descriptive metadata, and licensing agreements into one unchangeable transaction ID on the Arweave blockchain. This integration ensures that all components of the asset are permanently linked and stored on-chain, providing immutability and perpetual accessibility. Unlike traditional NFTs, which often rely on off-chain storage solutions susceptible to data loss or alterations, Atomic Assets guarantee that the entire asset remains tamper-proof and consistently available.\n\n<b>Fractional Ownership and Tradeability</b>\n\nOne of the standout features of Atomic Assets is their support for fractional ownership. Creators can divide an asset into multiple shares, allowing several users to own portions of the same asset. This fractionalization is facilitated through specialized tokens that represent ownership stakes, enabling a more inclusive and flexible approach to digital asset investment and collaboration. The tradeability of these assets is inherently managed within the asset itself, streamlining the process of buying, selling, or exchanging digital content without relying on external platforms.\n\n<b>Universal Data License (UDL) Integration</b>\n\nTo further enhance the utility and governance of Atomic Assets, the Universal Data License (UDL) framework is employed. UDL provides a standardized yet customizable set of licensing terms that creators can attach to their assets, clearly defining usage rights, derivation permissions, commercial use clauses, and associated fees. This ensures that both creators and users have a transparent understanding of the rights and obligations tied to each asset, fostering a fair and open digital content ecosystem. \n\n<b>Conclusion</b>\n\nAtomic Assets represent a significant advancement in the realm of digital assets, addressing the limitations of traditional NFTs by ensuring complete on-chain storage, facilitating fractional ownership, and integrating clear licensing frameworks. As the digital landscape continues to evolve, Atomic Assets offer a robust and reliable foundation for creators and users seeking permanence, security, and clarity in digital ownership.`,
                    sources: [
                        { title: "Tradeable Atomic Asset", url: "https://atomic-assets.arweave.dev/" },
                        { title: "Arweave paves the way for creators: Atomic assets are the right NFTs", url: "https://medium.com/@perma_dao/arweave-paves-the-way-for-creators-atomic-assets-are-the-right-nfts-5c82adaeab0d" },
                        { title: "Atomic Assets: Why they exist, what they are & how they work", url: "https://www.linkedin.com/pulse/atomic-assets-why-exist-what-how-work-communitylabs1" },
                        { title: "Universal Data License: How to use it", url: "https://2hsfyi4t5fiqdcanybdez4e4admrjeqghts22viz7uuo3d5k2nna.arweave.net/0eRcI5PpUQGIDcBGTPCcANkUkgY85a1VGf0o7Y-q01o/#/en/Universal-Data-License-How-to-use-it" },
                    ],
                },
                {
                    title: "UDL in Depth",
                    short: `The Universal Data License (UDL) is a standardized framework that empowers digital content creators to define usage terms, monetize their work, and maintain control over their intellectual property on decentralized platforms like Arweave. By embedding customizable licensing terms directly into their content's metadata, creators can specify permissions, set monetization strategies—including one-time fees, subscriptions, or pay-per-access models—and decide on AI-related usage rights. This decentralized approach ensures immutable and permanent storage of both content and its associated licensing terms, eliminating reliance on centralized platforms and granting creators enduring control over their work.`,
                    long:`<b>Universal Data License (UDL)</b>: Empowering Digital Content Creators\n\nIn the rapidly evolving digital landscape, content creators often face challenges in controlling the distribution and monetization of their work. The Universal Data License (UDL) emerges as a solution, offering a standardized framework that enables creators to define usage terms, monetize content, and maintain control over their intellectual property on decentralized platforms like Arweave.\n\n<b>Key Features of the Universal Data License</b>\n\n<b>1. Customizable Licensing Terms</b>\n\nThe UDL allows creators to set specific permissions and requirements for their content. By adding standardized metadata tags during the upload process, creators can specify terms such as commercial use allowances, derivation rights, and licensing fees. This ensures that consumers are aware of and agree to the defined terms before utilizing the content.\n\n<b>2.Integration with Decentralized Storage</b>\n\nDesigned for use on public, permissionless blockchain networks like Arweave, the UDL ensures that content, along with its licensing terms, is stored immutably and permanently. This decentralized approach eliminates reliance on centralized platforms, granting creators enduring control over their work without the risk of unilateral policy changes or content removal.\n\n<b>3. Monetization Flexibility</b>\n\nCreators can define various monetization strategies through the UDL. Options include setting one-time fees, subscription models, or pay-per-access terms. The introduction of features like the "pay per access" model allows creators to charge users each time they access content, akin to renting a digital asset for a specified period. This flexibility enables creators to tailor monetization to their specific needs and audience.\n\n<b>4. AI Usage Permissions</b>\n\nWith the rise of generative AI, the UDL has adapted to include provisions for AI-related content usage. Creators can explicitly permit or restrict their work's use in AI training and generation processes by utilizing the "AI" tag. This ensures that creators are compensated when their content contributes to AI developments, addressing concerns about unauthorized exploitation in AI applications.\n\n<b>Implementing the UDL</b>\n\nApplying the UDL to content is straightforward. Platforms like ArDrive have integrated UDL support, allowing creators to attach licenses to their files seamlessly. During the upload process, creators can select the desired license type, set terms, and apply the license to their content. This process embeds the licensing information directly into the file's metadata, ensuring transparency and enforceability.\n\n<b>Conclusion</b>\n\nThe Universal Data License represents a significant advancement in digital content rights management. By providing a flexible, transparent, and decentralized licensing framework, the UDL empowers creators to maintain control over their work, define clear usage terms, and explore diverse monetization avenues. As the digital ecosystem continues to evolve, tools like the UDL are essential in fostering a fair and equitable environment for content creators worldwide.`,
                    sources: [
                        { title: "Introducing the Universal Data License", url: "https://mirror.xyz/0x64eA438bd2784F2C52a9095Ec0F6158f847182d9/AjNBmiD4A4Sw-ouV9YtCO6RCq0uXXcGwVJMB5cdfbhE" },
                        { title: "Universal Data License Version 0.2", url: "https://orgsxgbx4x37hfuoidzzzuixdwsi57e2eetei2ew6mzwqkxikhoa.arweave.net/dE0rmDfl9_OWjkDznNEXHaSO_JohJkRolvMzaCroUdw" },
                        { title: "Tradeable Atomic Asset", url: "https://atomic-assets.arweave.dev/" },
                        { title: "Universal Data License: How to use it", url: "https://2hsfyi4t5fiqdcanybdez4e4admrjeqghts22viz7uuo3d5k2nna.arweave.net/0eRcI5PpUQGIDcBGTPCcANkUkgY85a1VGf0o7Y-q01o/#/en/Universal-Data-License-How-to-use-it" },
                    ],
                },
                
            ]
        },
        {
            title: "Introduction to UCM BazAR",
            subtopics: [
                {
                    title: "What is UCM BazAR?",
                    short: `AO is a decentralized <b>hyper-parallel compute</b> layer built on Arweave. It consists of three components: <b>Scheduler Units, Compute Units, and Messenger Units</b>. AO functions like a VPS on Arweave but scales infinitely, supporting <b>AI, dApps, social media, and validator nodes</b>.`,
                    long:`AO is a decentralized compute platform built on top of Arweave that introduces a revolutionary way to process and execute computations at an unprecedented scale. Unlike traditional cloud or blockchain-based systems that rely on limited processing power and centralized control, AO leverages <b>hyper-parallel computing</b>, enabling an unlimited number of computational tasks to run simultaneously. This innovation makes AO well-suited for high-performance applications like artificial intelligence (AI), decentralized applications (dApps), social media platforms, and even validator nodes for other blockchains.\n\nAt its core, AO consists of three key components: <b>Scheduler Units (SUs)</b>, <b>Compute Units (CUs)</b>, and <b>Messenger Units (MUs)</b>. The <b>SUs</b> act as task managers that assign computational jobs, the <b>CUs</b> execute these tasks, and the <b>MUs</b> facilitate communication between different components. This design allows AO to function as a <b>fully decentralized, scalable computing environment</b> without any centralized authority.\n\nUnlike traditional computing infrastructures that rely on expensive cloud services, AO is fully integrated into Arweave’s <b>permanent data storage</b> network, ensuring that all executed processes, results, and related data are securely stored on the permaweb. This guarantees that computational tasks remain available indefinitely, eliminating risks associated with server failures, crashes, or censorship.\n\nOne way to think of AO is as a <b>Virtual Private Server (VPS) on Arweave</b>, but with significantly greater scalability and flexibility. In a VPS, users rent server space to run applications. Similarly, AO allows users to run computing processes, but without the limitations of centralized hosting services. AO enables developers to launch decentralized applications that do not rely on any single infrastructure provider.\n\nAO is particularly well-suited for:

- <b>AI and Machine Learning</b> – AO’s ability to handle complex computations makes it ideal for training AI models.
- <b>Scalable Social Media Platforms</b> – By combining AO’s computing power with Arweave’s permanent storage, fully decentralized social networks can be created.
- <b>Decentralized Finance (DeFi) & Validator Nodes</b> – AO’s compute infrastructure can even be used to host validator nodes for other blockchain networks, allowing decentralized hosting of Ethereum validators, for example.\n\nAO represents the next major leap in decentralized computing by providing a <b>scalable, decentralized, and secure platform </b>for running computational tasks. By leveraging Arweave’s unique data storage capabilities, AO ensures that computational processes remain permanent, tamper-proof, and independent of any centralized authority.`,
                    sources: [
                        { title: "An Introduction to AO on Arweave", url: "https://mirror.xyz/jonnyringo.eth/O4brlNpgarwI8jn_e73pIFuUEdNCs7vs9l1vtcWWQLo" },
                        { title: "Arweave and AO: Building onchain worlds", url: "https://x.com/onlyarweave/status/1866971929179197847" },
                        { title: "AO Specs", url: "https://cookbook_ao.g8way.io/concepts/specs.html" }
                    ],
                },
                {
                    title: "Funding Wallet",
                    short: `AO’s <b>message-passing model</b> allows Processes to execute code without requiring shared state. It uses <b>Messenger Units (MUs), Scheduler Units (SUs), and Compute Units (CUs)</b> to process transactions efficiently.`,
                    long:`AO operates on a decentralized computing model that consists of three major components: Messages, Processes, and the AO Grid. These fundamental building blocks enable AO to execute computations in a highly scalable and efficient manner.\n\n1. Messages and Processes \n\nAO is built around <b>two core types: Messages and Processes</b>. Messages are <b>data packets</b> that instruct the system on what tasks to execute, while Processes are <b>independent computing units</b> that handle the actual execution. These Processes communicate with each other using message-passing techniques.\n\nA key innovation of AO is its <b>Holographic State</b> model, which eliminates the need for shared global state. Instead of requiring every node to maintain an up-to-date version of the entire system, AO allows nodes to compute state on demand, improving efficiency and reducing computational overhead.\n\n2. The AO Grid: Three Core Units
\nAO’s infrastructure is made up of three Unit types, each responsible for a different function:\n<b>Messenger Units (MUs)</b> – Handle message routing and communication between Processes.
\n<b>Scheduler Units (SUs)</b> – Ensure that Messages are processed in the correct order and store them permanently on Arweave.
\n<b>Compute Units (CUs)</b> – Execute computational tasks and return results to the network.
\nBecause AO is <b>horizontally scalable</b>, an unlimited number of MUs, SUs, and CUs can be added to the system, ensuring that computational capacity increases dynamically as demand grows.\n\nAO's computing power makes it well-suited for <b>onchain applications</b>, including decentralized games, smart contracts, and AI-driven systems. The <b>Reality Protocol</b>, for example, is an onchain framework that tracks digital environments in real-time, making it possible to create interactive, persistent virtual worlds.\n\nBy integrating <b>permanent storage with decentralized computing</b>, AO establishes a new paradigm for running applications, ensuring <b>true onchain execution</b> that is fully verifiable, decentralized, and built to last.`,
                    sources: [
                        { title: "AO Processes", url: "https://cookbook_ao.g8way.io/concepts/specs.html" },
                        { title: "AO Messages", url: "https://cookbook_ao.g8way.io/concepts/messages.html" },
                        { title: "AO Units", url: "https://cookbook_ao.g8way.io/concepts/units.html" }
                    ],
                },
                {
                    title: "Creating Your Own Atomic Assets",
                    short:`AO achieves <b>infinite scalability</b> by <b>executing tasks in parallel</b>. Messages are processed <b>on-demand</b>, reducing computation costs. AO is ideal for <b>Web3, AI, and onchain applications</b>.`,
                    long:`One of AO’s defining features is its ability to <b>scale infinitely through parallel execution</b>. Unlike traditional blockchain systems, which rely on <b>sequential execution</b> and shared state, AO uses <b>modular</b>, on-demand computation to maximize efficiency.\n\n<b>1. Hyper-Parallel Computing</b>\nAO operates like a distributed supercomputer that can run countless computations at the same time. This is possible because AO does not require a global state—each computational process runs independently and only retrieves the data it needs when required.\n\n<b>2. Recursive Message Processing</b>\nMessages in AO follow a specific workflow:\n\nThe <b>Messenger Unit (MU)</b> receives and authenticates a message.
\nThe <b>Scheduler Unit (SU)</b> assigns the message an <b>epoch and nonce</b> before storing it permanently on Arweave.
\nThe <b>Compute Unit (CU)</b> processes the message, retrieves previous messages, and executes the corresponding logic.
\nThe computed results are returned, and any new messages generated are sent back through the cycle.
\nThis approach allows AO to execute millions of transactions simultaneously by dynamically scaling its network resources. As more computation is required, additional Compute Units can be added, ensuring that performance scales in real-time.\n\n<b>3. The Future of AO</b>
With its <b>hyper-parallel structure</b>, AO has the potential to redefine decentralized computation. Key areas where AO can make a significant impact include:\n<b>Web3 and Smart Contracts</b> – AO can execute complex smart contracts with unparalleled efficiency.
\n<b>Decentralized AI</b> – Machine learning models can be trained using AO’s distributed compute power.
\n<b>Onchain Virtual Worlds</b> – AO can power persistent, interactive metaverses where all data and interactions remain fully onchain.\n\nAO provides an <b>infinitely scalable, decentralized computing</b> solution that outperforms existing models. By eliminating the constraints of traditional blockchains and cloud computing, AO is paving the way for a <b>truly decentralized internet</b>.`,
                    sources: [
                        { title: "How ao messaging works", url: "https://cookbook_ao.g8way.io/concepts/how-it-works.html" },
                        { title: "AO Messages", url: "https://cookbook_ao.g8way.io/concepts/messages.html" },
                        { title: "Arweave and AO: Building onchain worlds", url: "hhttps://x.com/onlyarweave/status/1866971929179197847" }
                    ],
                }
            ]
        }
    ];

    const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
    const [selectedSubtopicIndex, setSelectedSubtopicIndex] = useState(0);
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
        [topics[0].title]: true,
        [topics[1].title]: false,
        // [topics[2].title]: false,
    });
    const [showLongVersion, setShowLongVersion] = useState(true); // State to toggle between short and long versions

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

    const currentTopic = topics[selectedTopicIndex].subtopics[selectedSubtopicIndex];

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
                                                className={`block p-2 text-gray-400 hover:text-white ${
                                                    selectedTopicIndex === topicIndex && selectedSubtopicIndex === index ? "text-white font-bold" : ""
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
                <button
                    onClick={() => setShowLongVersion((prev) => !prev)}
                    className={`mb-4 p-2 rounded hover:bg-gray-700 transition ${!showLongVersion ? "text-blue-400" : ""}`}
                >
                    TL;DR
                </button>
                <div className="p-4 rounded-md w-full max-w-3xl">
                    <h2 className="text-2xl font-semibold mb-4">{currentTopic.title}</h2>
                    <p className="mb-4 whitespace-pre-line text-justify">
                        {parse(showLongVersion ? currentTopic.long : currentTopic.short)}
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Sources:</h3>
                    <ul className="list-disc list-inside">
                        {currentTopic.sources.map((source, index) => (
                            <li key={index}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                    {source.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between mt-4">
                        <button 
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
                        </button>
                    </div>
                </div>
            </div>
            
        </main>
    );
}
