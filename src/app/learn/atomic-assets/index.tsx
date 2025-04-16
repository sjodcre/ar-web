"use client"

import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"
import Sidebar from "@/components/Sidebar"
import MarkdownRenderer from "@/components/MarkdownRenderer"
import { BookOpen, FileText } from "lucide-react"
import DocHeader from "@/components/test/doc-header"
import { SeoHead } from "@/components/SeoHead"
import { Paginator } from "@/components/Paginator"

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
    title: "Atomic Assets",
    path: "introduction-atomic-assets",
    subtopics: [
      {
        title: "What are Atomic Assets?",
        path: "atomic-assets",
      },
      {
        title: "UDL in Depth",
        path: "udl-in-depth",
      },
    ],
  },
  {
    title: "Introduction to UCM BazAR",
    path: "ucm-bazar",
    subtopics: [
      {
        title: "What is UCM BazAR?",
        path: "introduction-bazar",
      },
      {
        title: "Funding Wallet",
        path: "funding-wallet",
      },
      {
        title: "Creating Your Own Atomic Assets",
        path: "creating-your-own-atomic-assets",
      },
    ],
  },
]

export default function AtomicAssets() {
  const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const variantParam = searchParams.get("variant")
  const [showLongVersion, setShowLongVersion] = useState(variantParam !== "short")
  const [seoMeta, setSeoMeta] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  })
  const location = useLocation();
  const currentUrl = `https://ar-web_arlink.arweave.net${location.pathname}`;
  // console.log("currenturl", currentUrl)
  useEffect(() => {
    if (!page) {
      navigate("/learn/atomic-assets/introduction-atomic-assets/atomic-assets", { replace: true })
    }
  }, [page])


  const toggleVersion = () => {
    const newVersion = showLongVersion ? "short" : "long"
    setShowLongVersion(!showLongVersion)
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev)
      newParams.set("variant", newVersion)
      return newParams
    }, { replace: true })
  }

  let markdownFilePath = "learn/atomic-assets/introduction-atomic-assets" // Default page
  if (page) markdownFilePath = `learn/atomic-assets/${page}`
  if (subpage) markdownFilePath = `learn/atomic-assets/${page}/${subpage}`
  if (subsubpage) markdownFilePath = `learn/atomic-assets/${page}/${subpage}/${subsubpage}`

  // const [showLongVersion, setShowLongVersion] = useState(true) // State to toggle between short and long versions

  // Get current page title
  let currentTitle = "Introduction to Atomic Assets"
  const currentTopic = topics.find(t => t.path === page)
  const currentSubtopic = currentTopic?.subtopics.find(st => st.path === subpage)
  const currentSubsubtopic = currentSubtopic?.subtopics?.find(ss => ss.path === subsubpage)

  if (currentSubsubtopic) {
    currentTitle = currentSubsubtopic.title
  } else if (currentSubtopic) {
    currentTitle = currentSubtopic.title
  } else if (currentTopic) {
    currentTitle = currentTopic.title
  }
  console.log("currentTitle:", currentTitle)

  // Mock transaction ID and timestamp for demonstration
  const txId = "bNMNDK3sFRP5vSJELdYQhA-cQwvwSKJ_xdWrwKm2xCU"
  const lastUpdated = "2025-03-15T14:30:00Z"

  let category: "storage" | "computation" | "network" | "general" = "general"
  if (page === "introduction") category = "storage"
  if (page === "ucm-bazar") category = "computation"

  return (
    <>
      <SeoHead
        title={seoMeta.title || currentTitle}
        description={seoMeta.description || "Documentation for AO & Arweave"}
        url={currentUrl}
      />
      <div className="flex min-h-screen bg-background">
        {/* Sidebar - using your existing Sidebar component */}
        <div className="hidden md:block w-72 bg-primary/30 backdrop-blur-md p-4 border-r border-secondary/20 relative">
          <div className="absolute inset-0 grid-lines opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-accent/5 opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-lg font-bold mb-4 text-foreground font-mono flex items-center">
              <span className="gradient-text">📚 Atomic Assets </span>
            </h2>
            {/* Your existing sidebar content would go here */}
            <Sidebar section="learn/atomic-assets" topics={topics} />

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
                <div className="flex justify-center mb-4">
                  <button
                    // onClick={() => setShowLongVersion((prev) => !prev)}
                    onClick={toggleVersion}
                    className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2 ${showLongVersion
                      ? "bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30"
                      : "bg-highlight/20 text-highlight border border-highlight/30 hover:bg-highlight/30"
                      }`}
                  >
                    {showLongVersion ? (
                      <>
                        <FileText className="h-4 w-4" />
                        <span>TL;DR</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="h-4 w-4" />
                        <span>Full Version</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Main content */}
                <div className="prose prose-invert max-w-none p-6 bg-card/30 backdrop-blur-sm border border-secondary/20 rounded-lg shadow-lg">
                  {/* <MarkdownRenderer filePath={markdownFilePath} variant={showLongVersion ? "long" : "short"} /> */}
                  <MarkdownRenderer
                    filePath={markdownFilePath}
                    variant={showLongVersion ? "long" : "short"}
                    onMetaExtracted={(meta) =>
                      setSeoMeta({
                        title: meta.title ?? "",
                        description: meta.description ?? "",
                      })
                    }
                  />
                </div>

                {/* Navigation Buttons */}
                <Paginator
                  topics={topics}
                  page={page}
                  subpage={subpage}
                  subsubpage={subsubpage}
                  basePath="/learn/atomic-assets"
                />
              </div>

              {/* <div className="md:col-span-1"> */}
              {/* <div className="space-y-4 sticky top-4"> */}
              {/* <PermanenceIndicator status="permanent" timestamp={lastUpdated} confirmations={12} /> */}

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
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </main>
      </div>
    </>

  )
}

