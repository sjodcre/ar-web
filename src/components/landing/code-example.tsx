"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function CodeExample() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeExample = `// Store data permanently on Arweave
import Arweave from 'arweave';

const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});

// Create and sign a transaction
const transaction = await arweave.createTransaction({
  data: '<data to store>'
});

await arweave.transactions.sign(transaction, wallet);
const response = await arweave.transactions.post(transaction);

// Access your data forever at
// https://arweave.net/<TRANSACTION_ID>`

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-secondary">Code Example</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Start Building</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Simple examples to get you started with Arweave and AO.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8">
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive"></div>
                <div className="h-3 w-3 rounded-full bg-secondary"></div>
                <div className="h-3 w-3 rounded-full bg-accent"></div>
              </div>
              <div className="text-sm text-muted-foreground">arweave-example.js</div>
              <button
                onClick={copyToClipboard}
                className="rounded p-1 hover:bg-muted transition-colors"
                aria-label="Copy code"
              >
                {copied ? <Check className="h-4 w-4 text-secondary" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
              <code className="language-javascript">{codeExample}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

