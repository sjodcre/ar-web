# 🔐 Signing Transactions in Arweave & AO

In the Arweave and AO ecosystems, **signing a transaction** is how you prove you're authorized to send it. Whether you're uploading a file, creating a new process, or interacting with a smart contract, your transaction must be signed with your wallet.

---

## ✍️ Why Sign Transactions?

Think of signing like **digitally sealing an envelope**. The network needs to verify that:
- You're the owner of the wallet.
- The data hasn't been tampered with.

Without signing, no node would trust the request. Signed transactions are cryptographically verified by the network before being accepted into the permanent ledger.

---

## 🧠 How Wallets Work

Your **wallet** contains a public/private key pair:
- The **public key** is your wallet address (like an account number).
- The **private key** is your signature tool — it proves the message is really from you.

A wallet in the Arweave network is essentially a **JSON file** containing the user's **private key**, which is crucial for signing transactions.

When you sign a transaction, you're using your private key to prove intent. This is what allows decentralized apps to verify identity **without passwords or centralized servers**.

---

## 🧪 Example: Sign a Transaction with [`arweave-js`](https://github.com/ArweaveTeam/arweave-js)

```ts title="sign-transaction.ts" description="Create and sign a transaction using arweave-js"
import Arweave from 'arweave'

const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
})

// Load your wallet key file (JSON)
const wallet = await fetch('/path/to/wallet.json').then(res => res.json())

// Create the transaction
const tx = await arweave.createTransaction({ data: 'Hello, Arweave!' }, wallet)

// Sign the transaction
await arweave.transactions.sign(tx, wallet)

// Post to the network
const res = await arweave.transactions.post(tx)
```

---

## 🧩 Arweave Wallet Kit

For production-ready apps, managing wallet connections and transaction signing can get tricky. That's where [**Arweave Wallet Kit**](https://github.com/labscommunity/arweave-wallet-kit) comes in:

- Provides React hooks to connect and disconnect wallets like ArConnect.
- Automatically handles signing and sending messages.
- Maintains wallet connection state across your app.

Docs: [docs.arweavekit.com](https://docs.arweavekit.com/)

---

## ✅ Recap

- Signing = Proving you're the one sending the message.
- Wallet = Your identity + signature.
- Arweave Wallet Kit = The easiest way to connect wallets in apps.
- Without signatures, the network won’t accept your transactions.

You can’t build securely on-chain without it.  
**Sign smart. Build permanent.**
