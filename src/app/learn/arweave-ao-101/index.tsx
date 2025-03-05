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
        title: "Why Arweave? Why AO? (Not Done)",
        subtopics: [
            { title: "Introduction to Arweave", path: "why-arweave-ao/introduction" },
            { title: "The Permaweb and Its Applications", path: "why-arweave-ao/permaweb" },
            { title: "Scalability and Technical Innovations", path: "why-arweave-ao/scalability" },
        ],
    },
];

//     const topics = [
//         {
//             title: "Arweave 101",
//             subtopics: [
//                 {
//                     title: "Introduction to Arweave",
//                     short: `Arweave is a decentralized protocol designed for permanent data storage, allowing users to preserve information indefinitely with a single, one-time fee. Secured by a network of miners rewarded with AR tokens, Arweave ensures data is replicated and remains accessible through a sustainable endowment model. This approach supports the permaweb—a collection of permanent web pages and applications free from centralized control, fostering a space where history and culture are preserved, and free speech is upheld. Developers are empowered to create fully decentralized applications on the permaweb, contributing to a more resilient and open internet.`,
//                     long: `Arweave is a groundbreaking decentralized storage protocol designed to provide permanent data storage solutions. Unlike traditional storage systems that require recurring payments and are susceptible to data loss or censorship, Arweave offers a unique "<b>pay once, store forever</b>" model. This approach ensures that data remains immutable and perpetually accessible, revolutionizing how information is preserved in the digital age. \n\n At the core of Arweave's architecture is the blockweave, an innovative data structure that differentiates it from conventional blockchains. In a traditional blockchain, each block references the previous one, forming a linear sequence. In contrast, Arweave's blockweave links each block to both the previous block and a randomly selected earlier block. This design not only enhances data redundancy but also plays a pivotal role in the network's consensus mechanism, known as Proof of Access (PoA). PoA requires miners to verify not just the latest block but also randomly chosen previous blocks, ensuring that they maintain access to a broader subset of the blockweave. This mechanism incentivizes miners to store extensive amounts of data, thereby bolstering the network's integrity and resilience. \n\nThe sustainability of Arweave's storage solution is underpinned by an endowment model. When users upload data, they pay a one-time fee in AR tokens, a portion of which is allocated to a storage endowment. This endowment is designed to generate sufficient returns to compensate miners for perpetually storing data, even as storage costs decrease over time. This economic model ensures that data remains available indefinitely without imposing additional costs on users. \n\nArweave's commitment to decentralization extends beyond its storage capabilities. The protocol fosters a community-driven ecosystem where developers can build and deploy decentralized applications (dApps) on the permaweb—a layer of the web that lives on top of the Arweave network. This ecosystem is rich with tools and services, including gateways that facilitate seamless access to stored data, GraphQL endpoints for efficient data querying, and SmartWeave—a smart contract platform that enables developers to incorporate programmable logic into their applications. By providing a robust and composable infrastructure, Arweave empowers developers to create innovative solutions that are free from centralized control, promoting a more open and resilient internet.`,
//                     sources: [
//                         { title: "What is Arweave", url: "https://arweave.org/" },
//                         { title: "Intro to Arweave", url: "https://arweavehub.com/primer" },
//                         { title: "Arweave for Newbies: How It Works and Why It Exists", url: "https://x.com/onlyarweave/status/1805983704549929286" }
//                     ],
//                 },
//                 {
//                     title: "The Permaweb and Its Applications",
//                     short: `Built atop the Arweave protocol, the permaweb is a permanent, decentralized web comprising modular and interchangeable protocols. It addresses the traditional web's impermanence by ensuring data and applications remain perpetually accessible, eliminating issues like broken links and missing content. Beyond static file storage, the permaweb hosts full-fledged decentralized applications that operate autonomously without centralized oversight. These applications, once deployed, are immutable and accessible to all, requiring no maintenance from the original developers. The permaweb ecosystem includes tools like gateways for content delivery, GraphQL for data querying, and SmartWeave for integrating programmable incentives into applications.`,
//                     long: `The permaweb is a revolutionary concept built on top of Arweave, creating a decentralized and immutable web. Unlike the traditional internet, which is subject to data loss, broken links, and centralized control, the permaweb ensures that once information is uploaded, it is stored forever. \n\nTraditional web infrastructure relies on centralized servers where content is easily lost if a server goes offline or an organization ceases operations. In contrast, the permaweb distributes content across a global network of nodes, ensuring that applications and files remain permanently available. This approach solves the internet’s biggest flaw: its lack of a memory system. \n\nBeyond static files, the permaweb can also host fully decentralized applications (dApps) that operate without external maintenance. Once deployed, these applications are immutable, meaning they cannot be modified or removed by any single entity. They continue running indefinitely without ongoing costs to the original developer. \n\nThe permaweb ecosystem includes several key components:
//             - <b>Gateways</b> serve as access points to retrieve and display stored data.
//             - <b>GraphQL</b> enables users to query stored data efficiently, similar to traditional databases.
//             - <b>SmartWeave</b> is Arweave’s smart contract system that allows developers to build financial and governance mechanisms directly into their applications.
//             - <b>Profit-Sharing Communities (PSCs)</b> allow developers to distribute revenue and governance control to stakeholders in real-time, making applications more community-driven.

//             By leveraging these tools, developers can create censorship-resistant applications, transparent news platforms, decentralized governance models, and more. The permaweb represents the future of an internet that is accessible, permanent, and free from centralized control.`,
//                     sources: [
//                         { title: "What is the Permaweb", url: "https://arweave.org/" },
//                         { title: "Intro to Arweave", url: "https://arweavehub.com/primer" },
//                         { title: "Arweave for Newbies: How It Works and Why It Exists", url: "https://x.com/onlyarweave/status/1805983704549929286" }
//                     ],
//                 },
//                 {
//                     title: "Scalability and Technical Innovations",
//                     short: `Arweave achieves scalability through several key innovations. Its uniform approach to permanent data storage allows for transaction bundling, where multiple transactions are combined into a single block, enhancing efficiency. The unique blockweave structure, coupled with the Proof of Access consensus mechanism, ensures data redundancy and incentivizes miners to store extensive data. To manage the growing data, Arweave employs <b>recursive bundling</b>, enabling the network to handle vast amounts of information by <b>bundling transactions</b> within bundles, theoretically allowing <b>infinite scalability</b>. These combined innovations position Arweave as a robust solution for decentralized, permanent data storage.`,
//                     long: `One of the biggest challenges in blockchain-based storage solutions is scalability. With massive amounts of data being generated daily, a decentralized storage system must be able to process transactions efficiently without compromising security or accessibility. Arweave tackles this challenge through unique innovations that allow it to scale indefinitely. \n\nArweave’s key advantage is its uniform data storage model. Unlike contract-based storage systems, where each transaction requires independent verification, Arweave applies a single set of rules: <b>pay once, store forever</b>. This standardization simplifies transaction processing, making it easier to scale without excessive computational overhead. \n\nThe network further enhances scalability through <b>bundling transactions</b>. Instead of processing each transaction separately, Arweave allows multiple transactions to be combined into a single bundle, reducing processing time and computational requirements. This bundling process is managed by the <b>Arweave Network Standard -104</b>, ensuring efficiency without increasing the complexity of data verification.\n\nHowever, a potential bottleneck arises when too many bundles are submitted at once. To overcome this, Arweave uses <b>recursive bundling</b>, a technique where multiple bundles are further combined into larger bundles before submission. This system allows an unlimited number of transactions to be processed in a single Arweave transaction, enabling theoretical <b>infinite scalability</b>.\n\nAt scale, this system ensures that even if the permaweb reaches the size of the entire internet, Arweave can still manage the load efficiently. Additionally, because Arweave’s storage model assumes that storage costs decrease over time, it remains cost-effective while expanding in scale.\n\nArweave’s ability to scale indefinitely without requiring fee markets or complex computational verification makes it a unique solution among decentralized storage networks. Its efficient use of transaction bundling, coupled with its robust economic model, positions it as a long-term solution for permanent, decentralized storage.`,
//                     sources: [
//                         { title: "How Arweave Scales: Storing All the Data on the Web", url: "https://arweave.org/" },
//                         { title: "Intro to Arweave", url: "https://arweavehub.com/primer" },
//                         { title: "Arweave for Newbies: How It Works and Why It Exists", url: "https://x.com/onlyarweave/status/1805983704549929286" }
//                     ],
//                 }
//             ]
//         },
//         {
//             title: "AO 101",
//             subtopics: [
//                 {
//                     title: "Introduction to AO",
//                     short: `AO is a decentralized <b>hyper-parallel compute</b> layer built on Arweave. It consists of three components: <b>Scheduler Units, Compute Units, and Messenger Units</b>. AO functions like a VPS on Arweave but scales infinitely, supporting <b>AI, dApps, social media, and validator nodes</b>.`,
//                     long:`AO is a decentralized compute platform built on top of Arweave that introduces a revolutionary way to process and execute computations at an unprecedented scale. Unlike traditional cloud or blockchain-based systems that rely on limited processing power and centralized control, AO leverages <b>hyper-parallel computing</b>, enabling an unlimited number of computational tasks to run simultaneously. This innovation makes AO well-suited for high-performance applications like artificial intelligence (AI), decentralized applications (dApps), social media platforms, and even validator nodes for other blockchains.\n\nAt its core, AO consists of three key components: <b>Scheduler Units (SUs)</b>, <b>Compute Units (CUs)</b>, and <b>Messenger Units (MUs)</b>. The <b>SUs</b> act as task managers that assign computational jobs, the <b>CUs</b> execute these tasks, and the <b>MUs</b> facilitate communication between different components. This design allows AO to function as a <b>fully decentralized, scalable computing environment</b> without any centralized authority.\n\nUnlike traditional computing infrastructures that rely on expensive cloud services, AO is fully integrated into Arweave’s <b>permanent data storage</b> network, ensuring that all executed processes, results, and related data are securely stored on the permaweb. This guarantees that computational tasks remain available indefinitely, eliminating risks associated with server failures, crashes, or censorship.\n\nOne way to think of AO is as a <b>Virtual Private Server (VPS) on Arweave</b>, but with significantly greater scalability and flexibility. In a VPS, users rent server space to run applications. Similarly, AO allows users to run computing processes, but without the limitations of centralized hosting services. AO enables developers to launch decentralized applications that do not rely on any single infrastructure provider.\n\nAO is particularly well-suited for:

// - <b>AI and Machine Learning</b> – AO’s ability to handle complex computations makes it ideal for training AI models.
// - <b>Scalable Social Media Platforms</b> – By combining AO’s computing power with Arweave’s permanent storage, fully decentralized social networks can be created.
// - <b>Decentralized Finance (DeFi) & Validator Nodes</b> – AO’s compute infrastructure can even be used to host validator nodes for other blockchain networks, allowing decentralized hosting of Ethereum validators, for example.\n\nAO represents the next major leap in decentralized computing by providing a <b>scalable, decentralized, and secure platform </b>for running computational tasks. By leveraging Arweave’s unique data storage capabilities, AO ensures that computational processes remain permanent, tamper-proof, and independent of any centralized authority.`,
//                     sources: [
//                         { title: "An Introduction to AO on Arweave", url: "https://mirror.xyz/jonnyringo.eth/O4brlNpgarwI8jn_e73pIFuUEdNCs7vs9l1vtcWWQLo" },
//                         { title: "Arweave and AO: Building onchain worlds", url: "https://x.com/onlyarweave/status/1866971929179197847" },
//                         { title: "AO Specs", url: "https://cookbook_ao.g8way.io/concepts/specs.html" }
//                     ],
//                 },
//                 {
//                     title: "AO’s Core Architecture: How It Works",
//                     short: `AO’s <b>message-passing model</b> allows Processes to execute code without requiring shared state. It uses <b>Messenger Units (MUs), Scheduler Units (SUs), and Compute Units (CUs)</b> to process transactions efficiently.`,
//                     long:`AO operates on a decentralized computing model that consists of three major components: Messages, Processes, and the AO Grid. These fundamental building blocks enable AO to execute computations in a highly scalable and efficient manner.\n\n1. Messages and Processes \n\nAO is built around <b>two core types: Messages and Processes</b>. Messages are <b>data packets</b> that instruct the system on what tasks to execute, while Processes are <b>independent computing units</b> that handle the actual execution. These Processes communicate with each other using message-passing techniques.\n\nA key innovation of AO is its <b>Holographic State</b> model, which eliminates the need for shared global state. Instead of requiring every node to maintain an up-to-date version of the entire system, AO allows nodes to compute state on demand, improving efficiency and reducing computational overhead.\n\n2. The AO Grid: Three Core Units
// \nAO’s infrastructure is made up of three Unit types, each responsible for a different function:\n<b>Messenger Units (MUs)</b> – Handle message routing and communication between Processes.
// \n<b>Scheduler Units (SUs)</b> – Ensure that Messages are processed in the correct order and store them permanently on Arweave.
// \n<b>Compute Units (CUs)</b> – Execute computational tasks and return results to the network.
// \nBecause AO is <b>horizontally scalable</b>, an unlimited number of MUs, SUs, and CUs can be added to the system, ensuring that computational capacity increases dynamically as demand grows.\n\nAO's computing power makes it well-suited for <b>onchain applications</b>, including decentralized games, smart contracts, and AI-driven systems. The <b>Reality Protocol</b>, for example, is an onchain framework that tracks digital environments in real-time, making it possible to create interactive, persistent virtual worlds.\n\nBy integrating <b>permanent storage with decentralized computing</b>, AO establishes a new paradigm for running applications, ensuring <b>true onchain execution</b> that is fully verifiable, decentralized, and built to last.`,
//                     sources: [
//                         { title: "AO Processes", url: "https://cookbook_ao.g8way.io/concepts/specs.html" },
//                         { title: "AO Messages", url: "https://cookbook_ao.g8way.io/concepts/messages.html" },
//                         { title: "AO Units", url: "https://cookbook_ao.g8way.io/concepts/units.html" }
//                     ],
//                 },
//                 {
//                     title: "AO’s Scalability and Parallel Processing",
//                     short:`AO achieves <b>infinite scalability</b> by <b>executing tasks in parallel</b>. Messages are processed <b>on-demand</b>, reducing computation costs. AO is ideal for <b>Web3, AI, and onchain applications</b>.`,
//                     long:`One of AO’s defining features is its ability to <b>scale infinitely through parallel execution</b>. Unlike traditional blockchain systems, which rely on <b>sequential execution</b> and shared state, AO uses <b>modular</b>, on-demand computation to maximize efficiency.\n\n<b>1. Hyper-Parallel Computing</b>\nAO operates like a distributed supercomputer that can run countless computations at the same time. This is possible because AO does not require a global state—each computational process runs independently and only retrieves the data it needs when required.\n\n<b>2. Recursive Message Processing</b>\nMessages in AO follow a specific workflow:\n\nThe <b>Messenger Unit (MU)</b> receives and authenticates a message.
// \nThe <b>Scheduler Unit (SU)</b> assigns the message an <b>epoch and nonce</b> before storing it permanently on Arweave.
// \nThe <b>Compute Unit (CU)</b> processes the message, retrieves previous messages, and executes the corresponding logic.
// \nThe computed results are returned, and any new messages generated are sent back through the cycle.
// \nThis approach allows AO to execute millions of transactions simultaneously by dynamically scaling its network resources. As more computation is required, additional Compute Units can be added, ensuring that performance scales in real-time.\n\n<b>3. The Future of AO</b>
// With its <b>hyper-parallel structure</b>, AO has the potential to redefine decentralized computation. Key areas where AO can make a significant impact include:\n<b>Web3 and Smart Contracts</b> – AO can execute complex smart contracts with unparalleled efficiency.
// \n<b>Decentralized AI</b> – Machine learning models can be trained using AO’s distributed compute power.
// \n<b>Onchain Virtual Worlds</b> – AO can power persistent, interactive metaverses where all data and interactions remain fully onchain.\n\nAO provides an <b>infinitely scalable, decentralized computing</b> solution that outperforms existing models. By eliminating the constraints of traditional blockchains and cloud computing, AO is paving the way for a <b>truly decentralized internet</b>.`,
//                     sources: [
//                         { title: "How ao messaging works", url: "https://cookbook_ao.g8way.io/concepts/how-it-works.html" },
//                         { title: "AO Messages", url: "https://cookbook_ao.g8way.io/concepts/messages.html" },
//                         { title: "Arweave and AO: Building onchain worlds", url: "hhttps://x.com/onlyarweave/status/1866971929179197847" }
//                     ],
//                 }
//             ]
//         },
//         {
//             title: "Why Arweave? Why AO? (Not Done)",
//             subtopics: [
//                 {
//                     title: "Introduction to Arweave",
//                     short: `Arweave is a decentralized protocol designed for permanent data storage, allowing users to preserve information indefinitely with a single, one-time fee. Secured by a network of miners rewarded with AR tokens, Arweave ensures data is replicated and remains accessible through a sustainable endowment model. This approach supports the permaweb—a collection of permanent web pages and applications free from centralized control, fostering a space where history and culture are preserved, and free speech is upheld. Developers are empowered to create fully decentralized applications on the permaweb, contributing to a more resilient and open internet.`,
//                     long: `Arweave is a groundbreaking decentralized storage protocol designed to provide permanent data storage solutions. Unlike traditional storage systems that require recurring payments and are susceptible to data loss or censorship, Arweave offers a unique "<b>pay once, store forever</b>" model. This approach ensures that data remains immutable and perpetually accessible, revolutionizing how information is preserved in the digital age. \n\n At the core of Arweave's architecture is the blockweave, an innovative data structure that differentiates it from conventional blockchains. In a traditional blockchain, each block references the previous one, forming a linear sequence. In contrast, Arweave's blockweave links each block to both the previous block and a randomly selected earlier block. This design not only enhances data redundancy but also plays a pivotal role in the network's consensus mechanism, known as Proof of Access (PoA). PoA requires miners to verify not just the latest block but also randomly chosen previous blocks, ensuring that they maintain access to a broader subset of the blockweave. This mechanism incentivizes miners to store extensive amounts of data, thereby bolstering the network's integrity and resilience. \n\nThe sustainability of Arweave's storage solution is underpinned by an endowment model. When users upload data, they pay a one-time fee in AR tokens, a portion of which is allocated to a storage endowment. This endowment is designed to generate sufficient returns to compensate miners for perpetually storing data, even as storage costs decrease over time. This economic model ensures that data remains available indefinitely without imposing additional costs on users. \n\nArweave's commitment to decentralization extends beyond its storage capabilities. The protocol fosters a community-driven ecosystem where developers can build and deploy decentralized applications (dApps) on the permaweb—a layer of the web that lives on top of the Arweave network. This ecosystem is rich with tools and services, including gateways that facilitate seamless access to stored data, GraphQL endpoints for efficient data querying, and SmartWeave—a smart contract platform that enables developers to incorporate programmable logic into their applications. By providing a robust and composable infrastructure, Arweave empowers developers to create innovative solutions that are free from centralized control, promoting a more open and resilient internet.`,
//                     sources: [
//                         { title: "What is Arweave", url: "https://arweave.org/" },
//                         { title: "Intro to Arweave", url: "https://arweavehub.com/primer" },
//                         { title: "Arweave for Newbies: How It Works and Why It Exists", url: "https://x.com/onlyarweave/status/1805983704549929286" }
//                     ],
//                 },
//                 {
//                     title: "The Permaweb and Its Applications",
//                     short: `Built atop the Arweave protocol, the permaweb is a permanent, decentralized web comprising modular and interchangeable protocols. It addresses the traditional web's impermanence by ensuring data and applications remain perpetually accessible, eliminating issues like broken links and missing content. Beyond static file storage, the permaweb hosts full-fledged decentralized applications that operate autonomously without centralized oversight. These applications, once deployed, are immutable and accessible to all, requiring no maintenance from the original developers. The permaweb ecosystem includes tools like gateways for content delivery, GraphQL for data querying, and SmartWeave for integrating programmable incentives into applications.`,
//                     long: `The permaweb is a revolutionary concept built on top of Arweave, creating a decentralized and immutable web. Unlike the traditional internet, which is subject to data loss, broken links, and centralized control, the permaweb ensures that once information is uploaded, it is stored forever. \n\nTraditional web infrastructure relies on centralized servers where content is easily lost if a server goes offline or an organization ceases operations. In contrast, the permaweb distributes content across a global network of nodes, ensuring that applications and files remain permanently available. This approach solves the internet’s biggest flaw: its lack of a memory system. \n\nBeyond static files, the permaweb can also host fully decentralized applications (dApps) that operate without external maintenance. Once deployed, these applications are immutable, meaning they cannot be modified or removed by any single entity. They continue running indefinitely without ongoing costs to the original developer. \n\nThe permaweb ecosystem includes several key components:
//             - Gateways serve as access points to retrieve and display stored data.
//             - GraphQL enables users to query stored data efficiently, similar to traditional databases.
//             - SmartWeave is Arweave’s smart contract system that allows developers to build financial and governance mechanisms directly into their applications.
//             - Profit-Sharing Communities (PSCs) allow developers to distribute revenue and governance control to stakeholders in real-time, making applications more community-driven.

//             By leveraging these tools, developers can create censorship-resistant applications, transparent news platforms, decentralized governance models, and more. The permaweb represents the future of an internet that is accessible, permanent, and free from centralized control.`,
//                     sources: [
//                         { title: "What is the Permaweb", url: "https://arweave.org/" },
//                         { title: "Intro to Arweave", url: "https://arweavehub.com/primer" },
//                         { title: "Arweave for Newbies: How It Works and Why It Exists", url: "https://x.com/onlyarweave/status/1805983704549929286" }
//                     ],
//                 },
//                 {
//                     title: "Scalability and Technical Innovations",
//                     short: `Arweave achieves scalability through several key innovations. Its uniform approach to permanent data storage allows for transaction bundling, where multiple transactions are combined into a single block, enhancing efficiency. The unique blockweave structure, coupled with the Proof of Access consensus mechanism, ensures data redundancy and incentivizes miners to store extensive data. To manage the growing data, Arweave employs <b>recursive bundling</b>, enabling the network to handle vast amounts of information by <b>bundling transactions</b> within bundles, theoretically allowing infinite scalability. These combined innovations position Arweave as a robust solution for decentralized, permanent data storage.`,
//                     long: `One of the biggest challenges in blockchain-based storage solutions is scalability. With massive amounts of data being generated daily, a decentralized storage system must be able to process transactions efficiently without compromising security or accessibility. Arweave tackles this challenge through unique innovations that allow it to scale indefinitely. \n\nArweave’s key advantage is its uniform data storage model. Unlike contract-based storage systems, where each transaction requires independent verification, Arweave applies a single set of rules: <b>pay once, store forever</b>. This standardization simplifies transaction processing, making it easier to scale without excessive computational overhead. \n\nThe network further enhances scalability through <b>bundling transactions</b>. Instead of processing each transaction separately, Arweave allows multiple transactions to be combined into a single bundle, reducing processing time and computational requirements. This bundling process is managed by the <b>Arweave Network Standard -104</b>, ensuring efficiency without increasing the complexity of data verification.\n\nHowever, a potential bottleneck arises when too many bundles are submitted at once. To overcome this, Arweave uses <b>recursive bundling</b>, a technique where multiple bundles are further combined into larger bundles before submission. This system allows an unlimited number of transactions to be processed in a single Arweave transaction, enabling theoretical infinite scalability.\n\nAt scale, this system ensures that even if the permaweb reaches the size of the entire internet, Arweave can still manage the load efficiently. Additionally, because Arweave’s storage model assumes that storage costs decrease over time, it remains cost-effective while expanding in scale.\n\nArweave’s ability to scale indefinitely without requiring fee markets or complex computational verification makes it a unique solution among decentralized storage networks. Its efficient use of transaction bundling, coupled with its robust economic model, positions it as a long-term solution for permanent, decentralized storage.`,
//                     sources: [
//                         { title: "How Arweave Scales: Storing All the Data on the Web", url: "https://arweave.org/" },
//                         { title: "Intro to Arweave", url: "https://arweavehub.com/primer" },
//                         { title: "Arweave for Newbies: How It Works and Why It Exists", url: "https://x.com/onlyarweave/status/1805983704549929286" }
//                     ],
//                 }
//             ]
//         },
//     ];

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
                {/* <div className="p-4 rounded-md w-full max-w-3xl">
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
                </div> */}
                <div className="p-4 rounded-md w-full max-w-3xl">
                    <h2 className="text-2xl font-semibold mb-4">{currentSubtopic.title}</h2>
                    <div className="markdown text-justify">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
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
