import DocPageLayout from "@/components/test/doc-page-layout"
import EnhancedCodeBlock from "@/components/test/enhanced-code-block"

// Example topics for sidebar
const topics = [
  {
    title: "Getting Started",
    path: "getting-started",
    subtopics: [
      { title: "Introduction", path: "introduction" },
      { title: "Installation", path: "installation" },
      { title: "Quick Start", path: "quick-start" },
    ],
  },
  {
    title: "Core Concepts",
    path: "core-concepts",
    subtopics: [
      { title: "Permanent Storage", path: "permanent-storage" },
      { title: "Computation", path: "computation" },
      { title: "Tokenomics", path: "tokenomics" },
    ],
  },
  {
    title: "Guides",
    path: "guides",
    subtopics: [
      { title: "Data Storage", path: "data-storage" },
      { title: "Smart Contracts", path: "smart-contracts" },
      { title: "Integration", path: "integration" },
    ],
  },
  {
    title: "API Reference",
    path: "api-reference",
    subtopics: [
      { title: "JavaScript SDK", path: "javascript-sdk" },
      { title: "HTTP API", path: "http-api" },
      { title: "GraphQL", path: "graphql" },
    ],
  },
]

export default function ExampleDocPage() {
  // Example transaction ID and timestamp
  const txId = "bNMNDK3sFRP5vSJELdYQhA-cQwvwSKJ_xdWrwKm2xCU"
  const lastUpdated = "2025-03-15T14:30:00Z"

  return (
    <DocPageLayout
      title="Permanent Storage with Arweave"
      lastUpdated={lastUpdated}
      txId={txId}
      category="storage"
      status="permanent"
      section="docs"
      topics={topics}
    >
      <section id="introduction">
        <h2>Introduction to Permanent Storage</h2>
        <p>
          Arweave provides a decentralized storage network that allows you to store data permanently. Unlike traditional
          cloud storage, data stored on Arweave is available forever with a single upfront payment.
        </p>

        <EnhancedCodeBlock
          code="const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});"
          language="javascript"
          title="arweave-init.js"
          description="Initialize the Arweave client to interact with the network"
        />

        <p>The permanent nature of Arweave storage makes it ideal for:</p>

        <ul>
          <li>Historical records and archives</li>
          <li>Decentralized applications (dApps)</li>
          <li>NFT metadata and media</li>
          <li>Scientific data and research</li>
          <li>Legal documents and contracts</li>
        </ul>
      </section>

      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>To start using Arweave for permanent storage, you'll need to:</p>

        <ol>
          <li>Set up an Arweave wallet</li>
          <li>Obtain AR tokens</li>
          <li>Install the Arweave SDK</li>
          <li>Create and post transactions</li>
        </ol>

        <EnhancedCodeBlock
          code="// Create a data transaction
const transaction = await arweave.createTransaction({
  data: '<data to store>'
});

// Sign with your wallet
await arweave.transactions.sign(transaction, wallet);

// Submit to the network
const response = await arweave.transactions.post(transaction);"
          language="javascript"
          title="store-data.js"
          runnable={true}
          description="Basic example of storing data on Arweave"
        />
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <p>Here's an example of how to retrieve data from Arweave:</p>

        <EnhancedCodeBlock
          code="// Retrieve data using a transaction ID
const data = await arweave.transactions.getData('bNMNDK3sFRP5vSJELdYQhA-cQwvwSKJ_xdWrwKm2xCU');

// Convert to readable format if needed
const text = new TextDecoder().decode(data);"
          language="javascript"
          title="retrieve-data.js"
          runnable={true}
        />

        <p>You can also view this transaction directly on the Arweave network:</p>

        <EnhancedCodeBlock code="bNMNDK3sFRP5vSJELdYQhA-cQwvwSKJ_xdWrwKm2xCU" language="txid" title="Transaction ID" />
      </section>

      <section id="api-reference">
        <h2>API Reference</h2>
        <p>For complete documentation of the Arweave JavaScript SDK, please refer to the official documentation.</p>

        <EnhancedCodeBlock
          code="// Common Arweave operations

// Get network info
const info = await arweave.network.getInfo();

// Get wallet balance
const address = await arweave.wallets.getAddress(wallet);
const balance = await arweave.wallets.getBalance(address);

// Get transaction status
const status = await arweave.transactions.getStatus('TX_ID');"
          language="javascript"
          title="api-reference.js"
        />
      </section>
    </DocPageLayout>
  )
}

