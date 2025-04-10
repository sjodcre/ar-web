"use client"

import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
// import { toast } from "sonner"
import EnhancedCodeBlock from "./test/enhanced-code-block"
import { Link as RouterLink } from "react-router-dom"
import { GithubIcon } from "@/icons/GithubIcon"
import { XIcon } from "@/icons/XIcon"


interface MarkdownRendererProps {
  filePath: string
  variant?: "short" | "long" // Optional variant for files with short/long versions
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filePath, variant }) => {
  const [markdownContent, setMarkdownContent] = useState("⌛ Loading content...")

  useEffect(() => {

    let fileToFetch = filePath
    if (variant) {
      fileToFetch = `${filePath}-${variant}.md`
    } else {
      fileToFetch = `${filePath}.md` // Default if no variant is specified
    }

    fetch(`/content/${fileToFetch}`)
      .then((res) => {
        if (!res.ok) {
          console.warn(`File not found: ${fileToFetch}, trying fallback: ${filePath}.md`)
          return fetch(`/content/${filePath}.md`).then((fallbackRes) => {
            if (!fallbackRes.ok) throw new Error("Fallback file not found")
            return fallbackRes.text()
          })
        }
        return res.text()
      })
      // .then(setMarkdownContent)
      .then((rawText) => {
        const stripped = rawText.replace(/^---[\s\S]*?---\s*/, '') // regex removes first frontmatter block
        setMarkdownContent(stripped)
      })
      .catch((err) => {
        console.error("Markdown Load Error:", err)
        setMarkdownContent("⚠️ Error loading markdown file. Check file path or frontmatter format.")
      })
      // .catch(() => setMarkdownContent("⚠️ Error loading markdown file. Check file path."))
  }, [filePath, variant])

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({
          node,
          inline,
          className,
          children,
          ...props
        }: { node: any; inline?: boolean; className?: string; children: React.ReactNode }) {
          const match = /language-(\w+)/.exec(className || "")
          const codeText = String(children).replace(/\n$/, "")

          // Check if this is a code block (not inline)
          if (!inline && match) {
            // Extract language from className
            const language = match[1]

            // Check if this is a transaction ID
            // const isTxId = language === "arweave" || language === "txid"

            // Get filename from meta if available
            // const meta = node?.data?.meta || ""
            const metaString = node?.position?.start && node.position.end
              ? markdownContent
                .slice(node.position.start.offset || 0, node.position.end.offset || 0)
                .split('\n')[0] // the first line of the code block
              : ""

            const meta = metaString.split(" ").slice(1).join(" ") // removes ```lang

            const titleMatch = /title="([^"]+)"/.exec(meta)
            const title = titleMatch ? titleMatch[1] : undefined

            // Get description from meta if available
            const descMatch = /description="([^"]+)"/.exec(meta)
            const description = descMatch ? descMatch[1] : undefined


            // Check if code is runnable
            const isRunnable = meta?.includes("runnable") || false

            // Extract transaction ID if present
            const txIdMatch = /txId="([^"]+)"/.exec(meta)
            const txId = txIdMatch ? txIdMatch[1] : undefined

            return (
              <EnhancedCodeBlock
                code={codeText}
                language={language}
                title={title || `${language}-example.${language}`}
                description={description}
                runnable={isRunnable}
                txId={txId}
              />
            )
          }

          // For inline code
          return (
            <code className="bg-card px-1.5 py-0.5 rounded font-mono text-secondary" {...props}>
              {children}
            </code>
          )
        },
        table: ({ children }) => (
          <div className="overflow-x-auto my-6">
            <table className="w-full border border-secondary/20 rounded-md">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-card/80">{children}</thead>,
        th: ({ children }) => (
          <th className="border border-secondary/20 px-4 py-2 text-secondary font-mono">{children}</th>
        ),
        td: ({ children }) => <td className="border border-secondary/20 px-4 py-2">{children}</td>,
        h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 font-mono gradient-text">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3 font-mono text-secondary">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2 font-mono text-secondary/90">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg font-bold mt-4 mb-2 font-mono text-secondary/80">{children}</h4>,
        p: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
        a: ({ children, href }) => {
          const isExternal = href?.startsWith("http")
          const isHash = href?.startsWith("#")
          const isGitHub = href?.includes("github.com")
          const isX = href?.includes("x.com")
          const Icon = isGitHub
            ? GithubIcon
            : isX
            ? XIcon
            : undefined

          const iconEl = Icon ? <Icon className="inline w-5 h-5 mr-2 align-middle" /> : null

          // Internal: Use react-router <Link>
          if (!isExternal && !isHash && href) {
            return (
              <RouterLink
                to={href.replace(/^\.?\/+/, "/")} // normalize "./path" or "/path" to "/path"
                className="text-secondary hover:text-highlight underline decoration-secondary/30 hover:decoration-highlight/50 transition-colors"
              >
                {iconEl}
                {children}
              </RouterLink>
            )
          }
        
          // Hash or external: Use <a>
          return (
            <a
              href={href}
              className="text-secondary hover:text-highlight underline decoration-secondary/30 hover:decoration-highlight/50 transition-colors"
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              {iconEl}
              {children}
            </a>
          )
        },
        // a: ({ children, href }) => (
        //   <a
        //     href={href}
        //     className="text-secondary hover:text-highlight underline decoration-secondary/30 hover:decoration-highlight/50 transition-colors"
        //     target={href?.startsWith("http") ? "_blank" : undefined}
        //     rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        //   >
        //     {children}
        //   </a>
        // ),
        ul: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-secondary/50 pl-4 py-1 my-4 bg-secondary/5 rounded-r-md">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-6 border-secondary/20" />,
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer