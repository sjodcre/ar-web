---
title: 
description: 
---

## 🔹 Important Update
This section will be modified as a new local development environment is being created. In the meantime, you can safely assume that as long as your projects are working on Vercel, a few simple tweaks will get your application to work on Arweave!


<!-- # 🛠️ Setting Up Local Arweave with ArLocal

## 🔹 What is ArLocal?
ArLocal is a tool that allows developers to quickly set up a **local Arweave gateway** for testing transactions in a **simulated environment**. This enables you to interact with Arweave without spending AR tokens, making development and testing easier.

✅ **No AR tokens required**  
✅ **Transactions are instant**  
✅ **Easily simulate the Arweave network locally**

---

## 🚀 Installation & Setup

### 1️⃣ Prerequisites
Ensure you have **Node.js** and **npm** or **yarn** installed on your machine.

Check if Node.js is installed:
```sh
node -v
```

Check if npm is installed:
```sh
npm -v
```

If Node.js is not installed, download it from [nodejs.org](https://nodejs.org/).

---

### 2️⃣ Installing ArLocal

#### 📌 Option 1: Running ArLocal with npx
Run ArLocal directly without installation:
```sh
npx arlocal
```
By default, this will start an Arweave gateway on **port 1984**.

You can specify a different port:
```sh
npx arlocal 8080
```

To run without logs:
```sh
npx arlocal --hidelogs
```

#### 📌 Option 2: Installing as a Dev Dependency
For persistent usage, install ArLocal as a **dev dependency** in your project:
```sh
npm install arlocal --save-dev
# or
yarn add arlocal -D
```

Then, create a script in your `package.json`:
```json
"scripts": {
  "start:arlocal": "arlocal"
}
```
Now, you can start ArLocal with:
```sh
npm run start:arlocal
```

---

## 🔄 Using ArLocal in a Node.js Script

You can integrate ArLocal into your **Node.js** test environment programmatically:

```ts
import ArLocal from "arlocal";

(async () => {
  const arLocal = new ArLocal(); // Create an instance
  await arLocal.start(); // Start local Arweave instance

  console.log("ArLocal is running on http://localhost:1984");

  // Run your tests here...

  await arLocal.stop(); // Stop ArLocal after testing
})();
```

### 🌟 Configuration Options
| Option       | Description                        |
|-------------|------------------------------------|
| `port`      | Port to use (default: 1984)       |
| `showLogs`  | Show logs in the terminal         |
| `dbPath`    | Directory for temporary database  |
| `persist`   | Persist data between restarts     |

Example:
```ts
const arLocal = new ArLocal(1985, true, "./arlocal_db", true);
```

---

## 🔬 Example: Posting a Transaction to ArLocal

To post a transaction, install **Arweave.js**:
```sh
npm install arweave --save-dev
# or
yarn add arweave -D
```

Then, create a test script:
```ts
import ArLocal from "arlocal";
import Arweave from "arweave";

(async () => {
  const arLocal = new ArLocal();
  await arLocal.start();

  const arweave = Arweave.init({
    host: "localhost",
    port: 1984,
    protocol: "http",
  });

  const wallet = await arweave.wallets.generate();
  const address = await arweave.wallets.getAddress(wallet);
  
  // Airdrop AR tokens to the wallet (for local use)
  await arweave.api.get(`mint/${address}/1000000000000000`);

  // Create a transaction
  const transaction = await arweave.createTransaction(
    { data: "Hello ArLocal!" },
    wallet
  );

  await arweave.transactions.sign(transaction, wallet);
  await arweave.transactions.post(transaction);

  console.log("Transaction successfully posted!");

  await arLocal.stop(); // Stop ArLocal after testing
})();
```

---

## 🔗 Additional Resources
- 📖 [ArLocal Documentation](https://github.com/textury/arlocal)
- 🌐 [Arweave.org](https://arweave.org/)
- 🔥 [Arweave Developer Guide](https://cookbook.arweave.dev/)

---

## 🎯 Summary
✅ **ArLocal provides a local Arweave testing environment**  
✅ **Quickly test transactions without spending AR tokens**  
✅ **Run with npx or install as a dependency**  
✅ **Use Arweave.js to interact with the local instance**  

🚀 **Now you're ready to build & test Arweave applications locally!** 🔥 -->


