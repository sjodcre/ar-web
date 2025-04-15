"use client"

import type React from "react"

import { useEffect, useState, useRef, type KeyboardEvent } from "react"
import Fuse from "fuse.js"
import type { SearchItem } from "@/lib/search-index"
import { useNavigate } from "react-router-dom"
import { Search, Loader2, FileText, ArrowRight, XCircle } from "lucide-react"

const SearchFn = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchItem[]>([])
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLUListElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const indexResponse = await fetch("/fuse-index.json")
        const dataResponse = await fetch("/fuse-data.json")

        if (!indexResponse.ok || !dataResponse.ok) throw new Error("Missing search index file")

        const indexJson = await indexResponse.json()
        const searchDataJson = await dataResponse.json()

        // console.log("✅ Loaded search index from fuse-index.json")

        const fuseIndex = Fuse.parseIndex<SearchItem>(indexJson)
        setFuse(new Fuse<SearchItem>(searchDataJson, { 
          keys: ["title", "content"], 
          threshold: 0.2 ,
          ignoreLocation: true, },
          fuseIndex))
      } catch (error) {
        console.warn("⚠️ Could not load index file. Make sure `generateSearchIndex.ts` has been run.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setQuery(value)
    setSelectedIndex(-1)

    if (value.trim() === "") {
      setResults([])
      return
    }

    if (!fuse) return

    const searchResults = fuse.search(value).map((result) => result.item)
    console.log("Search Results for:", value, searchResults)
    setResults(searchResults)
  }

  const handleSelect = (path: string) => {
    navigate(path)
    setQuery("")
    setResults([])
    setIsFocused(false)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Escape key
    if (e.key === "Escape") {
      setQuery("")
      setResults([])
      inputRef.current?.blur()
      return
    }

    // If no results, don't handle arrow keys
    if (results.length === 0) return

    // Arrow down
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prevIndex) => (prevIndex < results.length - 1 ? prevIndex + 1 : prevIndex))
      scrollToSelected(selectedIndex + 1)
    }

    // Arrow up
    if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0))
      scrollToSelected(selectedIndex - 1)
    }

    // Enter key
    if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault()
      handleSelect(results[selectedIndex].path)
    }
  }

  const scrollToSelected = (index: number) => {
    if (index < 0 || !resultsRef.current) return

    const resultItems = resultsRef.current.querySelectorAll("li")
    if (index >= resultItems.length) return

    resultItems[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    })
  }

  const highlightSearch = (text: string, query: string) => {
    if (!query) return text
    const regex = new RegExp(`(${query})`, "gi")
    return text.replace(regex, "<mark class='bg-highlight/20 text-highlight font-medium px-0.5 rounded'>$1</mark>")
  }

  const stripHtml = (html: string) => {
    return html
      .replace(/<[^>]*>/g, "") // Remove all HTML tags
      .replace(/\|/g, "") // Remove table pipes (`|`)
      .replace(/\[([^\]]+)\]$$([^)]+)$$/g, "$1 ($2)") // Convert Markdown links to "Text (URL)"
      .trim()
  }

  const truncateContent = (content: string, maxLength = 150) => {
    const stripped = stripHtml(content)
    if (stripped.length <= maxLength) return stripped
    return stripped.substring(0, maxLength) + "..."
  }

  return (
    <div className="relative w-full max-w-lg">
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          {loading ? (
            <Loader2 className="h-4 w-4 text-secondary animate-spin" />
          ) : (
            <Search className="h-4 w-4 text-secondary" />
          )}
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search documentation..."
          className="w-full pl-10 pr-10 py-2 bg-card/50 text-foreground border border-secondary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/40 placeholder:text-muted-foreground/70 transition-all duration-200"
          disabled={loading}
        />

        {query && (
          <button
            onClick={() => {
              setQuery("")
              setResults([])
              inputRef.current?.focus()
            }}
            className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <XCircle className="h-4 w-4" />
          </button>
        )}
      </div>

      {isFocused && results.length > 0 && (
        <ul
          ref={resultsRef}
          className="absolute left-0 right-0 mt-1 bg-card border border-secondary/20 rounded-md shadow-lg max-h-[60vh] overflow-y-auto z-50 backdrop-blur-sm"
        >
          {results.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item.path)}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`p-3 border-b border-secondary/10 last:border-0 cursor-pointer transition-colors duration-150 ${
                selectedIndex === index ? "bg-secondary/10 text-foreground" : "text-foreground hover:bg-secondary/5"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0">
                  <FileText className="h-4 w-4 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm mb-1">{item.title}</div>
                  <p
                    className="text-xs text-muted-foreground line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: highlightSearch(truncateContent(item.content), query),
                    }}
                  />
                  <div className="flex items-center mt-1 text-[10px] text-secondary font-mono">
                    <span className="truncate max-w-[250px]">{item.path}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 self-center ml-2">
                  <ArrowRight className="h-3 w-3 text-secondary opacity-50" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {isFocused && query && results.length === 0 && !loading && (
        <div className="absolute left-0 right-0 mt-1 p-4 bg-card border border-secondary/20 rounded-md shadow-lg z-50 text-center">
          <div className="text-muted-foreground text-sm">No results found for "{query}"</div>
          <div className="text-xs mt-1 text-muted-foreground/70">
            Try using different keywords or check the spelling
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchFn

