---
title: "The Importance of Signing Transactions in Arweave"
description: "Understand the critical role of transaction signing in the Arweave ecosystem, ensuring security, authenticity, and trust in decentralized applications."
---

# 🔐 Signing Transactions in Arweave & AO

In the Arweave and AO ecosystems, **signing a transaction** is how you prove you're authorized to send it. Whether you're uploading a file, creating a new process, or interacting with a smart contract, your transaction must be signed with your wallet.

## ✍️ Why Sign Transactions?

Think of signing like **digitally sealing an envelope**. The network needs to verify that:
- You're the owner of the wallet.
- The data hasn't been tampered with.

Without signing, no node would trust the request. Signed transactions are cryptographically verified by the network before being accepted into the permanent ledger, ensuring that only legitimate requests are processed.

## 🧠 How Wallets Work

Your **wallet** contains a public/private key pair:
- The **public key** is your wallet address (like an account number).
- The **private key** is your signature tool — it proves the message is really from you.

A wallet in the Arweave network is essentially a **JSON file** containing the user's **private key**, which is crucial for signing transactions.

When you sign a transaction, you're using your private key to prove intent. This is what allows decentralized apps to verify identity **without passwords or centralized servers**, fostering a trustless environment.

## 🧪 Example: Sign a Transaction with [`arweave-js`](https://github.com/ArweaveTeam/arweave-js)
