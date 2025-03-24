"use client"

import { useState, useEffect } from "react"
import { Shield, Clock, AlertTriangle } from "lucide-react"

interface PermanenceIndicatorProps {
  status: "permanent" | "confirming" | "pending" | "failed"
  timestamp?: string
  confirmations?: number
  compact?: boolean
  className?: string
}

export default function PermanenceIndicator({
  status,
  timestamp,
  confirmations = 0,
  compact = false,
  className = "",
}: PermanenceIndicatorProps) {
  const [timeAgo, setTimeAgo] = useState<string>("")

  useEffect(() => {
    if (!timestamp) return

    const updateTimeAgo = () => {
      const now = new Date()
      const txTime = new Date(timestamp)
      const diffMs = now.getTime() - txTime.getTime()

      // Convert to appropriate time unit
      if (diffMs < 60000) {
        setTimeAgo("just now")
      } else if (diffMs < 3600000) {
        const minutes = Math.floor(diffMs / 60000)
        setTimeAgo(`${minutes} minute${minutes > 1 ? "s" : ""} ago`)
      } else if (diffMs < 86400000) {
        const hours = Math.floor(diffMs / 3600000)
        setTimeAgo(`${hours} hour${hours > 1 ? "s" : ""} ago`)
      } else {
        const days = Math.floor(diffMs / 86400000)
        setTimeAgo(`${days} day${days > 1 ? "s" : ""} ago`)
      }
    }

    updateTimeAgo()
    const interval = setInterval(updateTimeAgo, 60000)

    return () => clearInterval(interval)
  }, [timestamp])

  // Status-based styling
  const getStatusConfig = () => {
    switch (status) {
      case "permanent":
        return {
          icon: Shield,
          color: "text-secondary",
          bgColor: "bg-secondary/10",
          borderColor: "border-secondary/30",
          label: "Permanently Stored",
        }
      case "confirming":
        return {
          icon: Clock,
          color: "text-highlight",
          bgColor: "bg-highlight/10",
          borderColor: "border-highlight/30",
          label: "Confirming",
        }
      case "pending":
        return {
          icon: Clock,
          color: "text-accent",
          bgColor: "bg-accent/10",
          borderColor: "border-accent/30",
          label: "Pending",
        }
      case "failed":
        return {
          icon: AlertTriangle,
          color: "text-destructive",
          bgColor: "bg-destructive/10",
          borderColor: "border-destructive/30",
          label: "Failed",
        }
    }
  }

  const config = getStatusConfig()
  const Icon = config.icon

  if (compact) {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full ${config.bgColor} ${config.borderColor} border ${config.color} text-xs font-medium ${className}`}
      >
        <Icon className="h-3 w-3" />
        <span>{config.label}</span>
      </div>
    )
  }

  return (
    <div className={`flex flex-col rounded-lg border ${config.borderColor} overflow-hidden ${className}`}>
      <div className={`flex items-center gap-2 px-4 py-2 ${config.bgColor}`}>
        <Icon className={`h-4 w-4 ${config.color}`} />
        <span className={`font-medium ${config.color}`}>{config.label}</span>
      </div>

      <div className="px-4 py-3 bg-card/50">
        <div className="grid gap-2 text-sm">
          {timestamp && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Timestamp:</span>
              <span className="font-mono">{new Date(timestamp).toLocaleString()}</span>
            </div>
          )}

          {status === "confirming" && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Confirmations:</span>
              <span className="font-mono">{confirmations}</span>
            </div>
          )}

          {timestamp && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Age:</span>
              <span>{timeAgo}</span>
            </div>
          )}

          {/* Progress bar for confirming status */}
          {status === "confirming" && (
            <div className="mt-1">
              <div className="h-1.5 w-full bg-card rounded-full overflow-hidden">
                <div
                  className="h-full bg-highlight transition-all duration-500 ease-out"
                  style={{ width: `${Math.min(confirmations * 10, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>0</span>
                <span>Permanent at 10+ confirmations</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

