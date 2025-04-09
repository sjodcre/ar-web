"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import ArweaveBanner from "@/components/arweave-banner"
import DocHeader from "@/components/test/doc-header"
import { Database, Newspaper, Rss } from "lucide-react"

type NewsCategory = "ALL" | "CLABS" | "AR.IO"

interface NewsItem {
  date: string
  image: string
  title?: string
  link?: string
  description?: string
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("ALL")
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const categories: NewsCategory[] = ["ALL", "CLABS", "AR.IO"]

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true)
      try {
        // Fetch from backend instead of scraping in the frontend
        // const response = await axios.get(`http://localhost:3001/api/communitylabs/news`) //local test
        const response = await axios.get(`https://ao-arweave.com/api/communitylabs/news`)

        setNewsItems(response.data.newsItems)
      } catch (error) {
        console.error("Error fetching news:", error)
        // Add some fallback news items for development/preview
        setNewsItems([
          {
            title: "Arweave Announces Major Network Upgrade",
            date: "March 15, 2025",
            image: "/placeholder.svg?height=300&width=500",
            description:
              "The Arweave team has announced a major network upgrade that will improve scalability and reduce storage costs.",
            link: "#",
          },
          {
            title: "AO Launches New Developer Tools",
            date: "March 10, 2025",
            image: "/placeholder.svg?height=300&width=500",
            description:
              "AO has released a new suite of developer tools designed to make building on the permanent computer easier than ever.",
            link: "#",
          },
          {
            title: "Community Labs Partners with Major Enterprise",
            date: "March 5, 2025",
            image: "/placeholder.svg?height=300&width=500",
            description:
              "Community Labs has announced a strategic partnership with a Fortune 500 company to bring permanent storage solutions to enterprise customers.",
            link: "#",
          },
        ])
      } finally {
        setIsLoading(false)
      }
    }

    fetchNews()
  }, [])

  // Filter news items based on active category
  const filteredNews =
    activeCategory === "ALL"
      ? newsItems
      : newsItems.filter((item) => {
          if (activeCategory === "CLABS" && item.title?.includes("Community Labs")) return true
          if (activeCategory === "AR.IO" && item.title?.includes("AR.IO")) return true
          return false
        })

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <div className="absolute inset-0 grid-lines opacity-20"></div>
        <div className="absolute inset-0 blockchain-pattern opacity-10"></div>
      </div>

      <main className="container mx-auto px-4 py-8 relative z-10">


        {/* Page Header */}
        <DocHeader title="Ecosystem News" lastUpdated="2025-03-20T10:30:00Z" category="network" />

        {/* Arweave Banner - Keeping this as in the original code */}
        <ArweaveBanner />
        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border ${
                activeCategory === category
                  ? "bg-secondary/20 text-secondary border-secondary/30"
                  : "bg-card/50 text-muted-foreground border-secondary/10 hover:bg-secondary/10 hover:text-secondary hover:border-secondary/20"
              }`}
            >
              {category === "ALL" && <Database className="inline-block mr-1.5 h-4 w-4" />}
              {category === "CLABS" && <Newspaper className="inline-block mr-1.5 h-4 w-4" />}
              {category === "AR.IO" && <Rss className="inline-block mr-1.5 h-4 w-4" />}
              {category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-secondary/20 mb-4"></div>
              <div className="h-4 w-32 bg-secondary/20 rounded"></div>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="rounded-lg border border-secondary/20 bg-card/50 overflow-hidden transition-all hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title || "News"}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-70"></div>
                    <div className="absolute bottom-3 left-3 text-xs font-mono text-secondary bg-card/80 px-2 py-1 rounded-md border border-secondary/20">
                      {item.date}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-foreground text-lg font-bold mb-2 group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">{item.description}</p>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="text-xs text-secondary font-medium flex items-center">
                      <span className="mr-1">Read more</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transform transition-transform group-hover:translate-x-1"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredNews.length === 0 && (
          <div className="text-center py-12 bg-card/30 rounded-lg border border-secondary/20">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-secondary mb-2">No news found</h3>
            <p className="text-muted-foreground">
              No news items found for the selected category. Try selecting a different category.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

