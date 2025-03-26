// "use client"

// import type React from "react"

// import { useEffect, useState } from "react"
// import ReactMarkdown from "react-markdown"
// import remarkGfm from "remark-gfm"
// import rehypeRaw from "rehype-raw"
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"
// import { toast } from "sonner"
// import { Copy, Check } from "lucide-react"

// const copyToClipboard = (code: string) => {
//   navigator.clipboard.writeText(code)
//   toast.success("Copied to clipboard!", {
//     description: "The code snippet has been copied successfully. 🚀",
//     duration: 3000, // Toast stays for 3 seconds
//   })
// }

// interface MarkdownRendererProps {
//   filePath: string
//   variant?: "short" | "long" // Optional variant for files with short/long versions
// }

// const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filePath, variant }) => {
//   const [markdownContent, setMarkdownContent] = useState("⌛ Loading content...")
//   const [copied, setCopied] = useState(false)

//   useEffect(() => {
//     console.log("MarkdownRenderer fetching:", filePath)

//     let fileToFetch = filePath
//     if (variant) {
//       fileToFetch = `${filePath}-${variant}.md`
//     } else {
//       fileToFetch = `${filePath}.md` // Default if no variant is specified
//     }

//     fetch(`/src/content/${fileToFetch}`)
//       .then((res) => {
//         if (!res.ok) {
//           console.warn(`File not found: ${fileToFetch}, trying fallback: ${filePath}.md`)
//           return fetch(`/src/content/${filePath}.md`).then((fallbackRes) => {
//             if (!fallbackRes.ok) throw new Error("Fallback file not found")
//             return fallbackRes.text()
//           })
//         }
//         return res.text()
//       })
//       .then(setMarkdownContent)
//       .catch(() => setMarkdownContent("⚠️ Error loading markdown file. Check file path."))
//   }, [filePath, variant])

//   const handleCopy = (codeText: string) => {
//     copyToClipboard(codeText)
//     setCopied(true)
//     setTimeout(() => setCopied(false), 2000)
//   }

//   return (
//     <ReactMarkdown
//       remarkPlugins={[remarkGfm]}
//       rehypePlugins={[rehypeRaw]}
//       components={{
//         code({
//           node,
//           inline,
//           className,
//           children,
//           ...props
//         }: { node: any; inline?: boolean; className?: string; children: React.ReactNode }) {
//           const match = /language-(\w+)/.exec(className || "")
//           const codeText = String(children).replace(/\n$/, "")

//           return !inline && match ? (
//             <div className="relative group my-6">
//               <div className="absolute -top-5 left-0 bg-card/80 text-secondary text-xs px-3 py-1 rounded-t-md font-mono border-t border-l border-r border-secondary/20">
//                 {match[1]}
//               </div>
//               <button
//                 className="absolute top-2 right-2 p-2 rounded-md bg-card/80 border border-secondary/20 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-secondary/20 hover:text-secondary"
//                 onClick={() => handleCopy(codeText)}
//               >
//                 {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
//               </button>
//               <SyntaxHighlighter
//                 style={{
//                   ...dracula,
//                   'pre[class*="language-"]': {
//                     ...dracula['pre[class*="language-"]'],
//                     background: "var(--card)",
//                   },
//                   'code[class*="language-"]': {
//                     ...dracula['code[class*="language-"]'],
//                     background: "var(--card)",
//                   },
//                 }}
//                 language={match[1]}
//                 PreTag="div"
//                 className="rounded-md border border-secondary/20 overflow-hidden shadow-lg"
//                 {...props}
//               >
//                 {codeText}
//               </SyntaxHighlighter>
//             </div>
//           ) : (
//             <code className="bg-card px-1.5 py-0.5 rounded font-mono text-secondary" {...props}>
//               {children}
//             </code>
//           )
//         },
//         table: ({ children }) => (
//           <div className="overflow-x-auto my-6">
//             <table className="w-full border border-secondary/20 rounded-md">{children}</table>
//           </div>
//         ),
//         thead: ({ children }) => <thead className="bg-card/80">{children}</thead>,
//         th: ({ children }) => (
//           <th className="border border-secondary/20 px-4 py-2 text-secondary font-mono">{children}</th>
//         ),
//         td: ({ children }) => <td className="border border-secondary/20 px-4 py-2">{children}</td>,
//         h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 font-mono gradient-text">{children}</h1>,
//         h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3 font-mono text-secondary">{children}</h2>,
//         h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2 font-mono text-secondary/90">{children}</h3>,
//         h4: ({ children }) => <h4 className="text-lg font-bold mt-4 mb-2 font-mono text-secondary/80">{children}</h4>,
//         p: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
//         a: ({ children, href }) => (
//           <a
//             href={href}
//             className="text-secondary hover:text-highlight underline decoration-secondary/30 hover:decoration-highlight/50 transition-colors"
//             target={href?.startsWith("http") ? "_blank" : undefined}
//             rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
//           >
//             {children}
//           </a>
//         ),
//         ul: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>,
//         ol: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
//         blockquote: ({ children }) => (
//           <blockquote className="border-l-4 border-secondary/50 pl-4 py-1 my-4 bg-secondary/5 rounded-r-md">
//             {children}
//           </blockquote>
//         ),
//         hr: () => <hr className="my-6 border-secondary/20" />,
//       }}
//     >
//       {markdownContent}
//     </ReactMarkdown>
//   )
// }

// export default MarkdownRenderer

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
    console.log("MarkdownRenderer fetching:", filePath)

    let fileToFetch = filePath
    if (variant) {
      fileToFetch = `${filePath}-${variant}.md`
    } else {
      fileToFetch = `${filePath}.md` // Default if no variant is specified
    }

    fetch(`/src/content/${fileToFetch}`)
      .then((res) => {
        if (!res.ok) {
          console.warn(`File not found: ${fileToFetch}, trying fallback: ${filePath}.md`)
          return fetch(`/src/content/${filePath}.md`).then((fallbackRes) => {
            if (!fallbackRes.ok) throw new Error("Fallback file not found")
            return fallbackRes.text()
          })
        }
        return res.text()
      })
      .then(setMarkdownContent)
      .catch(() => setMarkdownContent("⚠️ Error loading markdown file. Check file path."))
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

            console.log("match", match)
            console.log("codeText", codeText)
            console.log("meta", meta)
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