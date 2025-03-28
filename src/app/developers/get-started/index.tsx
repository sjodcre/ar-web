// import { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Sidebar from "@/components/Sidebar";
// import MarkdownRenderer from "@/components/MarkdownRenderer";

// export const topics = [
//     {
//         title: "Get Started", path: "get-started",
//         subtopics: [
//             { title: "Quick Start", path: "quick-start" },
//             {
//                 title: "Installation",
//                 path: "installation",
//                 subtopics: [
//                     { title: "Local Arweave", path: "arweave" },
//                     { title: "Setting up AOS", path: "aos" },
//                 ],
//             },
//             { title: "Deploy your first app!", path: "deploy" },
//             {
//                 title: "Wallets",
//                 path: "wallets",
//                 subtopics: [
//                     { title: "Creating your wallet", path: "create-wallet" },
//                     { title: "Funding your wallet", path: "fund-wallet" },
//                 ],
//             },
//         ],
//     },
//     {
//         title: "TBD", path: "tbd-1",
//         subtopics: [
//             { title: "TBD", path: "ao/introduction" },
//             { title: "TBD", path: "ao/core-architecture" },
//             { title: "TBD", path: "ao/scalability" },
//         ],
//     },
//     {
//         title: "TBD2", path: "tbd-2",
//         subtopics: [
//             { title: "TBD2", path: "why-arweave-ao/web2" },
//             { title: "TBD2", path: "why-arweave-ao/web3" },
//             { title: "TBD2", path: "why-arweave-ao/applications" },
//         ],
//     },
// ];

// const GetStarted = () => {
//     //   const { page } = useParams<{ page: string }>();
//     const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (page === "get-started" && !subpage) {
//             navigate("/developers/get-started/quick-start", { replace: true });
//         }
//     }, [page, subpage, navigate]);
//     let markdownFilePath = "developers/get-started/quick-start"; // Default page
//     if (page) markdownFilePath = `developers/${page}`;
//     if (subpage) markdownFilePath = `developers/${page}/${subpage}`;
//     if (subsubpage) markdownFilePath = `developers/${page}/${subpage}/${subsubpage}`;

//     console.log("Markdown File Path:", markdownFilePath); // Debugging

//     //   const markdownFilePath = page || "quick-start"; // Default to "quick-start"

//     return (
//         <main className="min-h-screen bg-black text-white flex">
//             <Sidebar section="developers" topics={topics} />
//             <div className="flex-1 flex flex-col items-center p-6">
//                 {/* <h1 className="text-3xl font-bold mb-6 text-center">📖 Documentation</h1> */}
//                 <div className="markdown p-6 bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg w-full text-justify">
//                     <MarkdownRenderer filePath={markdownFilePath} />
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default GetStarted;

"use client"

import { JSX, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import MarkdownRenderer from "@/components/MarkdownRenderer"
import DocHeader from "@/components/test/doc-header"
import PermanenceIndicator from "@/components/test/permanence-indicator"
import Sidebar from "@/components/Sidebar"
import { Code, FileCode, Laptop, Wallet } from "lucide-react"
import { DocCategory } from "@/types"

export const topics = [
  {
    title: "Get Started",
    path: "get-started",
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
      { title: "Deploy your first app!", path: "deploy-first-app" },
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
    title: "TBD",
    path: "tbd-1",
    subtopics: [
      { title: "TBD", path: "ao/introduction" },
      { title: "TBD", path: "ao/core-architecture" },
      { title: "TBD", path: "ao/scalability" },
    ],
  },
  {
    title: "TBD2",
    path: "tbd-2",
    subtopics: [
      { title: "TBD2", path: "why-arweave-ao/web2" },
      { title: "TBD2", path: "why-arweave-ao/web3" },
      { title: "TBD2", path: "why-arweave-ao/applications" },
    ],
  },
]

// Helper function to get page metadata
const getPageMetadata = (page?: string, subpage?: string) => {
  // Default values
//   const metadata = {
//     title: "Get Started with Arweave & AO",
//     icon: <Code className="h-5 w-5 text-secondary" />,
//     category: "general" as const,
//     lastUpdated: "2025-03-20T10:30:00Z",
//     txId: "KJD8wqkj-dkQWjqkdj38djqkwjdkQWJDkqw8",
    //     status: "permanent" as const,
    //   }    
    const metadata: {
        title: string
        icon: JSX.Element
        category: DocCategory
        lastUpdated: string
        txId: string
        status: "permanent"
    } = {
        title: "Get Started with Arweave & AO",
        icon: <Code className="h-5 w-5 text-secondary" />,
        category: "general",
        lastUpdated: "2025-03-20T10:30:00Z",
        txId: "KJD8wqkj-dkQWjqkdj38djqkwjdkQWJDkqw8",
        status: "permanent",
    }

    // Update based on current page
    if (page === "get-started") {
        if (subpage === "quick-start") {
            metadata.title = "Quick Start Guide"
            metadata.icon = <Laptop className="h-5 w-5 text-secondary" />
        } else if (subpage === "installation") {
            metadata.title = "Installation Guide"
            metadata.icon = <FileCode className="h-5 w-5 text-secondary" />
            metadata.category = "computation"
        } else if (subpage === "deploy") {
            metadata.title = "Deploy Your First App"
            metadata.icon = <Code className="h-5 w-5 text-secondary" />
            metadata.category = "storage"
        } else if (subpage === "wallets") {
            metadata.title = "Wallet Setup"
            metadata.icon = <Wallet className="h-5 w-5 text-secondary" />
        }
    }

  return metadata
}

// Helper function to extract headings from markdown content
// const extractHeadings = (content: string) => {
//   const headings: { id: string; text: string }[] = []
//   const regex = /^(#{2,3})\s+(.+)$/gm
//   let match

//   while ((match = regex.exec(content)) !== null) {
//     const level = match[1].length
//     const text = match[2].trim()
//     const id = text
//       .toLowerCase()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/\s+/g, "-")

//     // Only include h2 and h3 headings
//     if (level <= 3) {
//       headings.push({ id, text })
//     }
//   }

//   return headings
// }

const GetStarted = () => {
  const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>()
  const navigate = useNavigate()
  // const [markdownContent, setMarkdownContent] = useState<string>("")
  // const [headings, setHeadings] = useState<{ id: string; text: string }[]>([])

  useEffect(() => {
    if (page === "get-started" && !subpage) {
      navigate("/developers/get-started/quick-start", { replace: true })
    }
  }, [page, subpage, navigate])

  let markdownFilePath = "developers/get-started/quick-start" // Default page
  if (page) markdownFilePath = `developers/${page}`
  if (subpage) markdownFilePath = `developers/${page}/${subpage}`
  if (subsubpage) markdownFilePath = `developers/${page}/${subpage}/${subsubpage}`

  // Fetch markdown content to extract headings
  // useEffect(() => {
  //   fetch(`/src/content/${markdownFilePath}.md`)
  //     .then((res) => res.text())
  //     .then((content) => {
  //       setMarkdownContent(content)
  //       setHeadings(extractHeadings(content))
  //     })
  //     .catch((err) => {
  //       console.error("Error loading markdown:", err)
  //       setMarkdownContent("# Error loading content")
  //       setHeadings([])
  //     })
  // }, [markdownFilePath])

  // Get metadata for current page
  const metadata = getPageMetadata(page, subpage)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar section="developers" topics={topics} />

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="max-w-4xl mx-auto">
          {/* Document header */}
          <DocHeader
            title={metadata.title}
            lastUpdated={metadata.lastUpdated}
            txId={metadata.txId}
            category={metadata.category}
          />

          {/* Content area */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="md:col-span-3">
              {/* Main content */}
              <div className="prose prose-invert max-w-none p-6 bg-card/30 backdrop-blur-sm border border-secondary/20 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-secondary/20">
                  {metadata.icon}
                  <h1 className="text-2xl font-bold gradient-text m-0">{metadata.title}</h1>
                </div>
                <MarkdownRenderer filePath={markdownFilePath} />
              </div>

              {/* Developer Resources */}
              {/* <div className="mt-8 p-6 bg-card/30 backdrop-blur-sm border border-secondary/20 rounded-lg">
                <h3 className="text-lg font-bold mb-4 text-secondary">Developer Resources</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://cookbook.arweave.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-md border border-secondary/20 bg-card/50 hover:bg-secondary/10 transition-colors"
                  >
                    <div className="rounded-full bg-secondary/10 p-2">
                      <FileCode className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Arweave Cookbook</h4>
                      <p className="text-sm text-muted-foreground">Code examples and recipes</p>
                    </div>
                  </a>
                  <a
                    href="https://cookbook_ao.g8way.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-md border border-secondary/20 bg-card/50 hover:bg-secondary/10 transition-colors"
                  >
                    <div className="rounded-full bg-secondary/10 p-2">
                      <Code className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium">AO Cookbook</h4>
                      <p className="text-sm text-muted-foreground">AO development guides</p>
                    </div>
                  </a>
                </div>
              </div> */}
            </div>

            <div className="md:col-span-1">
              {/* Sidebar content */}
              <div className="space-y-4 sticky top-4">
                <PermanenceIndicator status={metadata.status} timestamp={metadata.lastUpdated} confirmations={15} />

                {/* {headings.length > 0 && (
                  <div className="rounded-lg border border-secondary/20 overflow-hidden">
                    <div className="bg-card/80 px-3 py-2 border-b border-secondary/20">
                      <h3 className="font-medium text-sm">On This Page</h3>
                    </div>
                    <div className="p-3">
                      <ul className="space-y-1.5 text-sm">
                        {headings.map((heading) => (
                          <li key={heading.id}>
                            <a
                              href={`#${heading.id}`}
                              className="text-muted-foreground hover:text-secondary transition-colors"
                            >
                              {heading.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )} */}

                {/* Quick links */}
                <div className="rounded-lg border border-secondary/20 overflow-hidden">
                  <div className="bg-card/80 px-3 py-2 border-b border-secondary/20">
                    <h3 className="font-medium text-sm">Quick Links</h3>
                  </div>
                  <div className="p-3">
                    <ul className="space-y-1.5 text-sm">
                      <li>
                        <a
                          href="/developers/get-started/quick-start"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          Quick Start Guide
                        </a>
                      </li>
                      <li>
                        <a
                          href="/developers/get-started/installation"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          Installation Guide
                        </a>
                      </li>
                      <li>
                        <a
                          href="/developers/get-started/deploy-first-app"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          Deploy Your First App
                        </a>
                      </li>
                      <li>
                        <a
                          href="/developers/get-started/wallets"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          Wallet Setup
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default GetStarted

