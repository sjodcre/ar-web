---
title: "Arweave's Evolution: From Proof of Access to Spora (v1.0 to v2.6)"
description: "Explore Arweave's protocol evolution from its 2018 launch to v2.6, covering key upgrades like RandomX, Succinct Proofs, and Spora that transformed mining from compute-heavy to storage-efficient."
---

# Arweave Upgrade Journey (Up to v2.6)

> 📌 **Note:** This document covers Arweave's evolution up to version **2.6**. Future upgrades such as **v2.7, v2.8, and v2.9** will be added soon.
---

## 📚 Introduction

Arweave is a **decentralized permanent storage network** designed to archive information forever. Unlike traditional blockchains, Arweave is optimized for storing **large, immutable data**, rather than just financial transactions.

The core innovation that powers Arweave is its **Proof of Access (PoA)** mining mechanism. Over time, this mechanism has evolved significantly to balance energy efficiency, decentralization, and long-term durability.

---

## 📈 Timeline of Upgrades

### 🟢 **Mainnet Launch (Nov 2018)**

- **Initial data size**: 177MB.
- **Block time**: 2 minutes.
- **Limitations**:
  - Max 1000 transactions per block.
  - Max 5.8MB per transaction.
- **Mining**: Introduced **Proof of Access (PoA)** — miners must retrieve historical data to earn the right to mine new blocks.

---

## ✅ Summary Table

| Version | Key Feature                            | Impact                          |
|---------|-----------------------------------------|---------------------------------|
| 1.x     | PoA + PoW                               | Compute dominant                |
| 1.7     | RandomX                                 | CPU fairness                    |
| 2.0     | Succinct Proofs + Format 2 Transactions | Scalable, modular storage       |
| 2.4     | Bundles                                  | Transaction throughput explodes |
| 2.6     | Spora + Cryptographic Clock             | Storage dominates, energy drops |

---

## 🔐 What is Proof of Access?

Unlike Bitcoin’s **pure Proof of Work**, Arweave adds a twist:
- Before hashing begins, miners must **retrieve a randomly selected block** from the blockchain's history (a "recall block").
- They must include this block in their proposed block to prove they have access to the network's historical data.
- This encourages long-term data storage and decentralization.

👉 Miners don’t need to store *every* block—but they do need **access** to them, either locally or via peers.

---

## 🏁 Mining Race Analogy

- Imagine a race where:
  - The **finish line is always 2 minutes away** (target block time).
  - Miners **can only start running** once they fetch the correct recall block.
  - After that, it’s a **standard hash-power race** (Proof of Work).

However, early on, miners found a loophole...

---

## ⚠️ Compute-Dominant Strategies

- Miners who didn’t store data could still **download it quickly**, and win by stacking GPU power.
- This **centralized** mining around compute farms and undermined the goal of persistent data storage.

---

## 🔁 Upgrade 1.7 – Enter **RandomX**

- **RandomX** is a hashing algorithm that resists GPU and ASIC optimization.
- Forces miners to use **general-purpose CPUs**.
- Slowed down brute-force hash computation and leveled the playing field.

---

## 🤝 Transaction Inclusion & Peer Cooperation

Why would miners share user-submitted transactions with competitors?

- Because **block rewards scale with transaction volume**.
- If miners **don’t include user transactions**, users stop using the network.
- Sharing transactions ensures the **maximum economic benefit for all**.
- Cooperative incentives are built-in to the protocol.

---

## 🧱 Transmission Bottlenecks

- As Arweave grew, transmitting full blocks around the globe became harder.
- Some data wouldn’t propagate in time → **dropped transactions**.
- A **hard fork** raised the per-transaction size limit to **10MB**.

---

## 🚀 Arweave 2.0 – A Breakthrough in Scalability

### 🌳 **Succinct Proofs**
- Based on **Merkle trees** (a cryptographic data structure).
- Instead of transmitting full recall blocks (~10GB), miners only send **small proofs (<1KB)**.
- Significantly reduces network congestion.

### 🧾 **Format 2 Transactions**
- Splits transaction into **header** and **data**.
- Only the **header** is needed for validation.
- **Data can be uploaded later** → decouples storage from consensus.
- Result: Blocks are much smaller and faster to propagate.

---

## 🔄 Further Improvements (v2.1–2.5)

- **v2.2**: Compressed wallet lists (less bloat).
- **v2.3**: Unified index for format 1 & 2 transactions.
- **v2.4**: Enabled **transaction bundles**:
  - One outer transaction can contain **thousands** of sub-transactions.
  - Crushed the 1000-per-block cap.
- **v2.5**: Structural preparations for v2.6.

---

## 🧬 Arweave 2.6 – Spora + Speed Limit

### 🧠 **Spora** = Succinct Proofs of Random Access

- Requires a new succinct proof **for every hash attempt**.
- Forces miners to **access storage constantly** (not just once).
- Encourages miners to store **the entire dataset on fast local drives** (e.g. SSDs).

### ⏱️ **Cryptographic Clock**

- Introduces a **verifiable clock** that ticks every second.
- With each tick, miners are allowed a **fixed number of hashes**, proportional to how much data they store.
- **Hashing speed is capped** regardless of CPU power.
- Designed to run efficiently on **standard hard drives** (no more SSD arms race).

---

## ⚖️ Economics and Efficiency

- Energy consumption is minimized: miners can't brute-force with unlimited hashes.
- Mining now rewards **storage and replication**, not just compute.
- Anyone with commodity hardware can participate competitively.

---

## 🏁 Analogy: Drag Racer vs Prius

| Era         | Mining Style         | Analogy                  |
|-------------|----------------------|--------------------------|
| Pre-2.0     | Compute-Heavy        | Nitro Drag Racer         |
| Post-2.6    | Storage-Efficient     | Toyota Prius in a speed-limited race |

- In 2.6, it’s not about how fast your car is. It’s about **how many cars you have on the track**.
- More replicas = better chance of earning rewards.

---

## 📖 Learn More

- 📺 [Watch the full video explanation](https://www.youtube.com/watch?v=sIccEJTVHXg&list=PL0pu7jCreVD3gpN4monAfcfaLS9AOmJRz&index=10)
- 📜 [Arweave 2.6 Spec (external link)](#)
- 🧠 DMACC on [Twitter](https://twitter.com/) / [GitHub](https://github.com/) / [Dev Discord](https://discord.com/)

---

*This doc is a community-created overview based on DMACC’s video breakdown of Arweave’s protocol development. It simplifies some cryptographic and architectural concepts for educational clarity.*
