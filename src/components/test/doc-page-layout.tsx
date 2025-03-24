import type { ReactNode } from "react"
import DocHeader from "./doc-header"
import PermanenceIndicator from "./permanence-indicator"
import Sidebar from "../Sidebar"

interface DocPageLayoutProps {
  children: ReactNode
  title: string
  lastUpdated: string
  txId?: string
  category?: "storage" | "computation" | "network" | "general"
  status?: "permanent" | "confirming" | "pending" | "failed"
  confirmations?: number
  section: string
  topics: any[] // Using the same type as your Sidebar component
}

export default function DocPageLayout({
  children,
  title,
  lastUpdated,
  txId,
  category = "general",
  status = "permanent",
  confirmations = 12,
  section,
  topics,
}: DocPageLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar section={section} topics={topics} />

      {/* Main content */}
      <main className="flex-1 p-6 md:p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          {/* Document header */}
          <DocHeader title={title} lastUpdated={lastUpdated} txId={txId} category={category} />

          {/* Network visualization */}
          {/* <div className="my-4">
            <AutonomousNetwork height={100} />
          </div> */}

          {/* Content area */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-3">
              {/* Main content */}
              <div className="prose prose-invert max-w-none">{children}</div>
            </div>

            <div className="md:col-span-1">
              {/* Sidebar content */}
              <div className="space-y-6 sticky top-6">
                <PermanenceIndicator status={status} timestamp={lastUpdated} confirmations={confirmations} />

                <div className="rounded-lg border border-secondary/20 overflow-hidden">
                  <div className="bg-card/80 px-4 py-2 border-b border-secondary/20">
                    <h3 className="font-medium">On This Page</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-sm">
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
                          href="#getting-started"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          Getting Started
                        </a>
                      </li>
                      <li>
                        <a href="#examples" className="text-muted-foreground hover:text-secondary transition-colors">
                          Examples
                        </a>
                      </li>
                      <li>
                        <a
                          href="#api-reference"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          API Reference
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

