"use client"

import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"
import MarkdownRenderer from "@/components/MarkdownRenderer"
import DocHeader from "@/components/test/doc-header"
// import PermanenceIndicator from "@/components/test/permanence-indicator"
import { BookOpen, FileText } from "lucide-react"
import Sidebar from "@/components/Sidebar"
import { SeoHead } from "@/components/SeoHead"
// import { usePagination } from "@/hooks/usePagination"
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
    title: "Arweave 101",
    path: "arweave",
    subtopics: [
      { title: "Introduction to Arweave", path: "introduction" },
      { title: "The Permaweb and Its Applications", path: "permaweb" },
      { title: "Scalability and Technical Innovations", path: "scalability" },
    ],
  },
  {
    title: "AO 101",
    path: "ao",
    subtopics: [
      { title: "Introduction to AO", path: "introduction" },
      { title: "AO's Core Architecture: How It Works", path: "core-architecture" },
      { title: "AO's Scalability and Parallel Processing", path: "scalability" },
    ],
  },
  {
    title: "🌐 Understanding Arweave + AO vs. Traditional Full-Stack & Web3 Ecosystems",
    path: "why-arweave-ao",
    subtopics: [
      { title: "Comparing Web2 Full Stack Applications", path: "web2" },
      { title: "Comparing Web3 Full Stack Applications", path: "web3" },
      { title: "How Applications Built on Arweave + AO differ", path: "applications" },
    ],
  },
]

export default function ArweaveAO101() {
  const { page, subpage, subsubpage } = useParams<{ page?: string; subpage?: string; subsubpage?: string }>()
  const navigate = useNavigate()
  // const [showLongVersion, setShowLongVersion] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()
  const variantParam = searchParams.get("variant")
  const [showLongVersion, setShowLongVersion] = useState(variantParam !== "short")
  const [seoMeta, setSeoMeta] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  })
  const location = useLocation();
  // const currentUrl = `https://sjodcre-ar-web_arlink.arweave.net${location.pathname}`;
  const canonicalUrl = location.pathname === "/"
  ? "https://sjodcre-ar-web_arlink.arweave.net/learn/arweave-ao-101/arweave/introduction"
  : `https://sjodcre-ar-web_arlink.arweave.net${location.pathname}`;

  useEffect(() => {
    if (!page) {
      navigate("/learn/arweave-ao-101/arweave/introduction", { replace: true })
      // return null;
    }
  }, [page, navigate])

  const toggleVersion = () => {
    const newVersion = showLongVersion ? "short" : "long"
    setShowLongVersion(!showLongVersion)
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev)
      newParams.set("variant", newVersion)
      return newParams
    }, { replace: true })
  }

  let markdownFilePath = "learn/arweave-ao-101/arweave/introduction" // Default page
  if (page) markdownFilePath = `learn/arweave-ao-101/${page}`
  if (subpage) markdownFilePath = `learn/arweave-ao-101/${page}/${subpage}`
  if (subsubpage) markdownFilePath = `learn/arweave-ao-101/${page}/${subpage}/${subsubpage}`


  // Get current page title
  let currentTitle = "Arweave & AO 101"
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
  // console.log("currentTitle:", currentTitle)
  // console.log("current Url:", currentUrl)

  // if (topicIndex !== -1 && subtopicIndex !== -1) {
  //   currentTitle = topics[topicIndex].subtopics[subtopicIndex].title
  // }

  // Mock transaction ID and timestamp for demonstration
  const txId = "bNMNDK3sFRP5vSJELdYQhA-cQwvwSKJ_xdWrwKm2xCU"
  const lastUpdated = "2025-03-15T14:30:00Z"

  // Determine category based on current page
  let category: "storage" | "computation" | "network" | "general" = "general"
  if (page === "arweave") category = "storage"
  if (page === "ao") category = "computation"
  if (page === "why-arweave-ao") category = "network"

  return (
    <>
      <SeoHead
        title={seoMeta.title || currentTitle}
        description={seoMeta.description || "Documentation for AO & Arweave"}
        url={canonicalUrl}
      />
      <div className="flex min-h-screen bg-background">
        {/* Sidebar - using your existing Sidebar component */}
        <div className="hidden md:block w-72 bg-primary/30 backdrop-blur-md p-4 border-r border-secondary/20 relative">
          <div className="absolute inset-0 grid-lines opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-accent/5 opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-lg font-bold mb-4 text-foreground font-mono flex items-center">
              <span className="gradient-text">📚 Arweave & AO 101</span>
            </h2>
            {/* Your existing sidebar content would go here */}
            <Sidebar section="learn/arweave-ao-101" topics={topics} />

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
                  basePath="/learn/arweave-ao-101" // or "/learn/atomic-assets"
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

