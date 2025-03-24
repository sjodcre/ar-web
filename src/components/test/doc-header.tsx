"use client"

import { useState, useEffect } from "react"
import { Clock, Database, LinkIcon, Shield } from "lucide-react"
import { DocCategory } from "@/types"

interface DocHeaderProps {
  title: string
  lastUpdated: string
  txId?: string
  category?: DocCategory
}

export default function DocHeader({ title, lastUpdated, txId = "unconfirmed", category = "general" }: DocHeaderProps) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isVisible, setIsVisible] = useState(false)

  // Calculate time since last update
  const lastUpdatedDate = new Date(lastUpdated)
  const timeDiff = currentTime.getTime() - lastUpdatedDate.getTime()
  const daysSinceUpdate = Math.floor(timeDiff / (1000 * 3600 * 24))

  // Determine permanence status
  const isPermanent = txId !== "unconfirmed"

  // Category-based styling
  const categoryStyles = {
    storage: "from-secondary to-highlight",
    computation: "from-accent to-highlight",
    network: "from-secondary to-accent",
    general: "from-secondary to-highlight",
  }

  useEffect(() => {
    // Update current time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    // Animation on mount
    setTimeout(() => setIsVisible(true), 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-secondary/30 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 blockchain-pattern opacity-10"></div>
      <div className="absolute inset-0 grid-lines opacity-20"></div>

      {/* Animated network nodes */}
      <div className="absolute inset-0 network-nodes"></div>

      {/* Gradient border */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${categoryStyles[category]}`}></div>

      <div className="relative z-10 p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold font-mono gradient-text mb-2">{title}</h1>

            {/* Permanence indicator */}
            <div className="flex items-center gap-2 text-sm">
              <div className={`flex items-center gap-1.5 ${isPermanent ? "text-secondary" : "text-muted-foreground"}`}>
                {isPermanent ? <Shield className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                <span>{isPermanent ? "Permanently Stored" : "Not Yet Permanent"}</span>
              </div>

              <span className="text-muted-foreground">•</span>

              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Updated {daysSinceUpdate} days ago</span>
              </div>
            </div>
          </div>

          {/* Transaction details */}
          {isPermanent && (
            <div className="flex flex-col items-start md:items-end">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <Database className="h-3.5 w-3.5" />
                <span>Arweave Transaction</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-3 py-1.5 rounded-md border border-secondary/20 text-sm font-mono">
                <span className="text-secondary truncate max-w-[180px]">{txId}</span>
                <button
                  className="text-muted-foreground hover:text-secondary transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText(txId)
                    // You could add a toast notification here
                  }}
                >
                  <LinkIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Digital horizon line */}
        <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-secondary/30 to-transparent relative">
          <div className="absolute -top-[3px] left-0 right-0 h-[8px] overflow-hidden">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--secondary)_0%,_transparent_70%)] opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

