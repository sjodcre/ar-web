"use client"

import { useState } from "react"
import { Copy, Check, Play, ExternalLink, Info } from "lucide-react"
import { toast } from "sonner"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

interface EnhancedCodeBlockProps {
  code: string
  language: string
  title?: string
  runnable?: boolean
  txId?: string
  description?: string
}

export default function EnhancedCodeBlock({
  code,
  language,
  title,
  runnable = false,
  txId,
  description,
}: EnhancedCodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState<string | null>(null)
  const [showInfo, setShowInfo] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    toast.success("Copied to clipboard!", {
      description: "The code snippet has been copied successfully.",
      duration: 2000,
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const runCode = () => {
    setIsRunning(true)
    setOutput("Running...")

    // Simulate code execution
    setTimeout(() => {
      // This is just a simulation - in a real implementation,
      // you would actually execute the code or call an API
      setOutput(
        `// Example output for ${language} code\n` +
          `Transaction submitted successfully!\n` +
          `Transaction ID: ${txId || "N7mfQCGmvZiPQH3bFJa5P9PUSqaEmI0O4ZARR2M_4Hw"}\n` +
          `Status: Confirmed (2 blocks deep)\n` +
          `Timestamp: ${new Date().toISOString()}`,
      )
      setIsRunning(false)
    }, 1500)
  }

  // Determine if this is an Arweave transaction ID
  const isTxId = language === "arweave" || language === "txid"

  return (
    <div className="rounded-lg overflow-hidden border border-secondary/20 bg-card/50 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-secondary/20">
        <div className="flex items-center gap-2">
          {/* <div className="flex space-x-1.5">
            <div className="h-3 w-3 rounded-full bg-destructive"></div>
            <div className="h-3 w-3 rounded-full bg-secondary"></div>
            <div className="h-3 w-3 rounded-full bg-accent"></div>
          </div> */}

          {title && <span className="text-sm font-mono text-muted-foreground">{title}</span>}
        </div>

        <div className="flex items-center gap-2">
          {description && (
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="p-1.5 rounded-md text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors"
              aria-label="Show information"
            >
              <Info className="h-4 w-4" />
            </button>
          )}

          {runnable && (
            <button
              onClick={runCode}
              disabled={isRunning}
              className={`p-1.5 rounded-md ${
                isRunning
                  ? "text-muted-foreground cursor-not-allowed"
                  : "text-secondary hover:bg-secondary/10 transition-colors"
              }`}
              aria-label="Run code"
            >
              <Play className="h-4 w-4" />
            </button>
          )}

          <button
            onClick={copyToClipboard}
            className="cursor-pointer p-1.5 rounded-md text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors"
            aria-label="Copy code"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Info panel */}
      {showInfo && description && (
        <div className="p-3 bg-secondary/5 border-b border-secondary/20 text-sm">
          <p className="text-muted-foreground">{description}</p>
        </div>
      )}

      {/* Code content */}
      <div className="relative">
        {/* Language badge */}
        <div className="absolute top-2 right-2 bg-card/80 text-xs font-mono px-2 py-1 rounded text-secondary border border-secondary/20">
          {language}
        </div>

        {/* Special styling for transaction IDs */}
        {isTxId ? (
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground">Transaction ID:</div>
              <div className="flex items-center gap-2">
                <span className="text-secondary break-all">{code}</span>
                <a
                  href={`https://viewblock.io/arweave/tx/${code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          // <pre className="p-4 font-mono text-sm overflow-x-auto">
          //   <code className={`language-${language}`}>{code}</code>
          // </pre>
          <SyntaxHighlighter
            language={language}
            style={dracula}
            customStyle={{
              background: "transparent",
              fontSize: "0.875rem",
              padding: "1rem",
              borderRadius: "0.375rem",
              overflowX: "auto",
            }}
            codeTagProps={{
              className: "font-mono",
            }}
          >
            {code}
          </SyntaxHighlighter>
        )}
      </div>

      {/* Output panel */}
      {output && (
        <div className="border-t border-secondary/20 bg-card/80">
          <div className="px-4 py-2 text-xs font-medium text-muted-foreground border-b border-secondary/10">Output</div>
          <pre className="p-4 font-mono text-xs text-muted-foreground overflow-x-auto">{output}</pre>
        </div>
      )}
    </div>
  )
}

