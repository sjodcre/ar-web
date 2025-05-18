import { useState } from "react"
import MarkdownRenderer from "./MarkdownRenderer"

const AudiencePrimer: React.FC = () => {
  const [audience, setAudience] = useState("general")

  const audiences = ["general", "kids", "students", "engineers"]
  const filePath = `learn/arweave-ao-101/card/${audience}`

  return (
    <div className="rounded-lg border border-secondary/30 bg-card/30 backdrop-blur-md p-6 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-foreground font-mono">
          👤 Audience Primer
        </h2>
        <select
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className="bg-muted border border-secondary/20 text-foreground font-mono text-sm px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-colors"
        >
          {audiences.map((a) => (
            <option key={a} value={a} className="text-black">
              {a.charAt(0).toUpperCase() + a.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="prose prose-invert prose-sm max-w-none text-foreground">
        <MarkdownRenderer filePath={filePath} />
      </div>
    </div>
  )
}

export default AudiencePrimer
