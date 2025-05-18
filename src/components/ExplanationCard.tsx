// // src/components/ExplanationCard.tsx

// import { useState } from "react"
// import ReactMarkdown from "react-markdown"
// import remarkGfm from "remark-gfm"
// import rehypeRaw from "rehype-raw"

// const PLACEHOLDER_CONTENT: Record<string, string> = {
//     general: `
//   # Introduction to Arweave: The Future of Permanent Data Storage
  
//   Arweave is a new kind of storage system where **you pay once and your data stays online forever**. Unlike traditional cloud storage that might delete or change your files, Arweave keeps them safe and unchanged — permanently.
  
//   ## How Arweave Works
  
//   It uses something called a **blockweave** — like a blockchain but smarter. Each new block connects not just to the one before it, but also to a random older one. This helps keep copies of your data spread out and safe.
  
//   ## Pay Once, Keep Forever
  
//   When you upload to Arweave:
//   - You pay just once using AR tokens.
//   - That money goes into a fund that keeps paying storage costs forever.
//   - You never have to pay again — ever.
  
//   ## Built for the Future
  
//   Developers are building:
//   - dApps (decentralized apps)
//   - Easy gateways to access data
//   - GraphQL APIs to search information
  
//   [Learn more](https://arweave.org/)
//   `,
  
//     kids: `
//   # Imagine a Magical Library 📚✨
  
//   Arweave is like a **magic library** that keeps every book you add **forever** — and you only pay **once**!
  
//   ## How the Magic Works
  
//   Each page you add gets connected to other pages in a super smart way. This keeps it from ever getting lost. It's called a **blockweave** — kinda like a friendship web between pages!
  
//   ## You Pay Once, and That’s It!
  
//   Instead of paying rent every month like Netflix or cloud storage:
//   - You give Arweave a small token.
//   - It saves your data forever and ever!
  
//   ## Builders Welcome 🧱
  
//   Coders can use Arweave to make cool apps and websites that don’t disappear!
  
//   [Explore more about Arweave](https://arweave.org/)
//   `,
  
//     students: `
//   # Arweave: One-Time Payment for Lifelong Storage
  
//   Arweave is a **permaweb protocol** offering decentralized, tamper-proof data storage. It introduces a sustainable economic model where **users pay once**, and data remains available indefinitely.
  
//   ## Blockweave Architecture
  
//   Unlike linear blockchains:
//   - Arweave’s blockweave links each block to a previous + random old block.
//   - This supports **Proof of Access**, ensuring redundancy and fast retrieval.
  
//   ## Sustainable Storage Economy
  
//   The one-time AR token fee:
//   - Part goes into a **storage endowment**.
//   - Miners are incentivized to keep your data available forever.
  
//   ## Developer Ecosystem
  
//   Dev tools include:
//   - dApps
//   - Gateways
//   - GraphQL interfaces for efficient querying
  
//   [Deep dive on Arweave](https://arweave.org/)
//   `,
  
//     engineers: `
//   # Arweave: Immutable Decentralized Storage at Scale
  
//   Arweave introduces a novel **blockweave data structure**, supporting permanent data archiving with a unique **"pay once, store forever"** model.
  
//   ## Core Architecture: Blockweave + PoA
  
//   - Combines previous-block linking with randomly selected back references.
//   - Enables **Proof of Access (PoA)**: miners must retrieve old data to produce new blocks.
//   - Enhances decentralization and access redundancy.
  
//   ## Tokenomics: Perpetual Storage Incentives
  
//   - One-time AR fee per upload.
//   - Portion allocated to **endowment fund** that yields miner incentives.
//   - No recurring costs — data availability is perpetuated via yield mechanisms.
  
//   ## Tooling for Builders
  
//   - Native support for dApps, GraphQL, and content gateways.
//   - Encourages verifiable, persistent application backends.
  
//   [Full technical primer](https://arweave.org/)
//   `
//   }

// const ExplanationCard: React.FC = () => {
//   const [audience, setAudience] = useState("general")

//   const audiences = ["general", "kids", "students", "engineers"]
//   const content = PLACEHOLDER_CONTENT[audience] || "# Not Found\nNo explanation available."

//   return (
//     <div className="rounded-lg border border-secondary/30 bg-card/30 backdrop-blur-md p-6 shadow-sm mb-6">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-bold text-foreground font-mono">
//           🔍 Explanation by Audience
//         </h2>
//         <select
//   value={audience}
//   onChange={(e) => setAudience(e.target.value)}
//   className="bg-muted border border-secondary/20 text-foreground font-mono text-sm px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-colors"
// >
//   {audiences.map((a) => (
//     <option key={a} value={a} className="text-black">
//       {a.charAt(0).toUpperCase() + a.slice(1)}
//     </option>
//   ))}
// </select>
//       </div>

//       <div className="prose prose-invert prose-sm max-w-none text-foreground">
//         <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
//           {content}
//         </ReactMarkdown>
//       </div>
//     </div>
//   )
// }

// export default ExplanationCard

// src/components/ExplanationCard.tsx

import { useState } from "react"
import MarkdownRenderer from "./MarkdownRenderer"

const ExplanationCard: React.FC = () => {
  const [audience, setAudience] = useState("general")

  const audiences = ["general", "kids", "students", "engineers"]
  const filePath = `learn/arweave-ao-101/card/${audience}`

  return (
    <div className="rounded-lg border border-secondary/30 bg-card/30 backdrop-blur-md p-6 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-foreground font-mono">
          🔍 Explanation by Audience
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

export default ExplanationCard
