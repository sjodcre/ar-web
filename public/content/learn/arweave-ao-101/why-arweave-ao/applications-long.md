---
title: "Building Decentralized Applications with Arweave + AO: A Comprehensive Guide"
description: "Explore the unique architecture and advantages of developing applications on the Arweave + AO framework, highlighting key differences from traditional Web2 and Web3 ecosystems."
---

## 🛠️ How Are Applications Built on Arweave + AO Different?

| **Aspect**            | **Web2 Full-Stack Apps**                          | **Web3 Ecosystems (Ethereum, Solana, IPFS, etc.)**               | **Arweave + AO The Computer**                          |
|----------------------|------------------------------------------------|-------------------------------------------------|------------------------------------------------|
| **Hosting & Backend** | Uses centralized cloud providers (AWS, Firebase, Vercel) | Some decentralized hosting (IPFS, Filecoin) but limited permanence | Fully decentralized hosting & compute (Arweave + AO) |
| **Storage**          | Databases like PostgreSQL, MongoDB, Firebase (data can be altered/deleted) | Uses IPFS/Filecoin (but requires pinning to keep data accessible) | **Arweave provides permanent, immutable storage** |
| **Compute Execution** | Runs on centralized servers (Node.js, Python, Go, etc.) | Smart contracts execute on-chain (Ethereum/Solana) but limited in scope | **AO enables scalable, parallel, decentralized execution** |
| **Smart Contracts**  | Uses Node.js, Python, Express for API logic | Solidity (Ethereum), Rust (Solana) | **AO uses Lua for execution and for contract logic** |
| **Databases**        | SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Firebase) | Indexed event logs, IPFS/Filecoin for partial data storage | **Databases can be written inside AO (currently SQLite3)** |
| **Frontend & Routing** | Uses Next.js, Vite, traditional SSR/CSR models | Same frameworks, but relies on blockchain nodes for querying | **Same frontend stack (Next.js, Vite, React)**, routing works differently (Arweave gateways instead of servers) |

### 🚀 Key Takeaways

- **Frontend development stays the same** → You still use Next.js, Vite, TailwindCSS, etc.
- **Routing system differs** → Since Arweave stores content permanently, it uses gateways instead of standard API-based routing.
- **No backend servers needed** → Instead of Express.js, FastAPI, or Node-based backends, AO acts as the backend & middleware.
- **AO uses Lua** for execution → If you need complex logic, AO replaces the backend with **Lua-based compute**.
- **Databases inside AO** → Instead of Firebase/PostgreSQL, you can write **SQLite3 databases inside AO**.

---

### 🔍 Understanding AO's Architecture

AO (Actor-Oriented) is a decentralized computing system built on Arweave, designed to support massively parallel computations. Its architecture is modular, comprising several key components:

1. **Processes**: Independent units of computation that can run concurrently. Each process is akin to a smart contract and can be customized with specific computing requirements.

2. **Messages**: The primary means of communication between processes. Messages are stored on Arweave, ensuring transparency and verifiability.

3. **Scheduler Units (SUs)**: Responsible for ordering messages and ensuring they are processed in the correct sequence.

4. **Compute Units (CUs)**: Execute the computational tasks defined by processes. CUs operate in a decentralized marketplace, competing to provide computation services.

5. **Messenger Units (MUs)**: Facilitate communication between processes, ensuring messages are delivered reliably.

This architecture allows AO to achieve high scalability and flexibility, enabling developers to build complex, decentralized applications that can handle large-scale computations efficiently.

---

### 🌐 Why Choose Arweave + AO?

- **Permanent Data Storage**: Arweave ensures that all data is stored permanently and immutably, eliminating concerns about data loss or tampering.
- **Scalable Compute**: AO's architecture allows for horizontal scaling, meaning that as more compute resources are added, the system's capacity increases proportionally.
- **Modular Design**: Developers can choose their preferred virtual machines, security models, and payment mechanisms, tailoring the environment to their specific needs.
- **Trustless Execution**: By leveraging Arweave's immutable storage and AO's decentralized compute, applications can operate without relying on centralized authorities.
- **Support for Autonomous Agents**: AO enables the creation of autonomous agents and scheduled tasks (cron jobs), facilitating the development of self-operating applications.

---

### 📚 Further Reading

- [The AO Protocol: A Decentralized Open-Access Supercomputer](https://5z7leszqicjtb6bjtij34ipnwjcwk3owtp7szjirboxmwudpd2tq.arweave.net/7n6ySzBAkzD4KZoTviHtskVlbdab_yylEQuuy1BvHqc)
- [AO's Modular Architecture & Computing Model](https://thenextwave.blog/aos-modular-architecture-computing-model-part-ii/)
- [Arweave's AO: The Future of Decentralized Computing](https://cryptorank.io/news/feed/1235f-arweave-ao-mainnet-launch-will-it-revolutionize-decentralized-computing)