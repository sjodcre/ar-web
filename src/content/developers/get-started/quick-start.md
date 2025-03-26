# 🚀 Quick Start Guide: Arweave + AO Development

Welcome to the **Arweave + AO Quick Start Guide**! This guide will help you get up and running as quickly as possible with Arweave’s **permanent storage** and AO’s **decentralized compute**.

---
<details>
<!-- <summary><h2> 🏦 Step 1: Create and Fund Your Wallet</h2></summary> -->
<summary><span class="text-2xl font-bold text-secondary">🏦 Step 1: Create and Fund Your Wallet (Optional if Done)</span></summary>


To interact with Arweave and AO, you need an **Arweave-compatible wallet**.

### 🔹 **1.1 Creating a Wallet**
If you don’t have a wallet yet, follow our **[Wallet Creation Guide](./developers/get-started/wallets/create-wallet)** for step-by-step instructions on setting up a Wander Wallet.

### 🔹 **1.2 Funding Your Wallet**
Once you have a wallet, you'll need **AR tokens** to pay for transactions. Learn how to acquire and transfer AR tokens in our **[Funding Guide](./developers/get-started/wallets/fund-wallet)**.

</details>

<!-- **⚠️ Note:**  
For local development and testing, you can use **ArLocal** to simulate the Arweave network without spending real AR tokens. Refer to our **[Local Arweave Setup Guide](./local-arweave-setup.md)** for detailed instructions. -->


## 🛠 Step 2: Set Up Your Development Environment

Now that you have your wallet ready, it’s time to set up your development environment for **building on Arweave and AO**.

---
<details>
<summary><span class="text-xl font-bold text-secondary/90">🔹 2.1 Local Arweave Setup (Optional For Testing)</span></summary>
<!-- ### 🔹 **2.1 Local Arweave Setup (For Testing)**   -->

If you haven't set up ArLocal yet, follow our **[Local Arweave Setup Guide](./developers/get-started/installation/arweave)** to create a local testing environment.

✅ **No AR tokens required**  
✅ **Instant transactions**  
✅ **Simulates Arweave’s network locally**

Once set up, you can start ArLocal using:
```sh title="Start Local Arweave Node" description="Launches ArLocal for a local Arweave testing environment with instant transactions."
npx arlocal

```
</details>

### 🔹 **2.2 Setting Up BetterIdea (For AO Development)**  

BetterIdea is a **web-based IDE** designed for developing and testing **AO processes** (decentralized applications on AO).  

#### ✅ **Why BetterIdea?**
- **No local setup required**  
- **Write, test, and deploy AO processes quickly**  
- **Built-in AO messaging system**  

> 💡 **Want to explore BetterIdea further?**
> -  [BetterIdea GitHub](https://github.com/betteridea-dev) – Source code and development tools  
> -  [BetterIdea on X (Previously Twitter)](https://x.com/betteridea_dev) – Updates, news, and community  
> - 🌐 [BetterIdea Website](https://betteridea.dev/) – Official site and IDE access

#### 🔧 **Step 1: Access BetterIdea**  
Go to the BetterIdea web IDE:  
🔗 [BetterIdea IDE](https://ide.betteridea.dev/)

#### 🛠 **Step 2: Connect Your Wallet**  
1. Click on **“Connect Wallet”**  
2. Select **Wander Wallet** or another Arweave-compatible wallet  
<img src="/betteridea-login.png" alt="betteridea-login" style="width: 640px; height: auto;"/>
3. Approve the connection  

#### 🚀 **Step 3: Create Your First AO Process**  
1. Click **"New Project"** and select **AO Process**  
2. Choose a **project name** and click **Create**  
<img src="/betteridea-create-project.png" alt="betteridea-create-project" style="width: 640px; height: auto;"/>

3. You’ll see a Lua script template  

#### 📜 **Step 4: Write and Deploy AO Code**  

Below is a **basic AO message handler** that simply **responds to a received message**:  

```lua title="ping-handler.lua" description="A simple AO message handler that replies with a Pong message when it receives 'Ping'."
Handlers.add(
    "Ping-Handler",
    "Ping",
    function(msg)
        msg.reply({ Data = "Pong! AO received your message." })
    end
)
```

Run the code after you finished pasting/typing it into the block.

<img src="/betteridea-run-code.png" alt="betteridea-run-code" style="width: 640px; height: auto;"/>


#### 🚀 Step 5: Communicating with the AO Process  

Now that our AO process is deployed, let's send a message to it using **AO’s CLI tool** to test the `"Ping-Handler"`.

---

#### 📡 **Step 5.1: Test Your AO Process via BetterIdea CLI**

1. **Open the BetterIdea Web IDE Terminal**
   - In BetterIdea, locate the **CLI Terminal** at the bottom.
   
2. **Send a Test Message to Your Process**
   - Use the following command:
   
  ```sh title="Send AO Message" description="Sends a test message to the deployed AO process using BetterIdea's terminal CLI."
   Send({
    Target = [[PROCESS_ID]],
	Action = [[Ping]],
	Data = [[yo]]
    })
  ```
  - Paste into the terminal: 
<img src="/betteridea-terminal-paste.png" alt="betteridea-terminal-paste" style="width: 640px; height: auto;"/>


    - Replace PROCESS_ID with your actual **deployed AO Process ID** which can be found at the bottom right of the IDE

3. **Expected Output**
    - If everything is set up correctly, you should see a response:
    
   `New Message From z8H...gz4: Data = Pong! AO received yo`

#### 🚀 Step 6: Setting Up a Vite React TypeScript Project

To interact with **AO and Arweave**, we need a frontend application. **Vite** is a fast build tool for creating modern web applications, and we’ll use it to set up our **React + TypeScript** project.

#### 📌 6.1 Install Vite and Create a New Project

Run the following command in your terminal:

```sh title="Create Vite Project" description="Initializes a new Vite-powered React TypeScript project for AO + Arweave frontend development."

pnpm create vite@latest my-ao-app --template react-ts

```

Navigate into the project folder:

```sh title="Navigate to Project" description="Enter the newly created Vite project directory."

cd my-ao-app

```

Then install dependencies:

```sh title="Install Dependencies" description="Installs all necessary packages for the React + Vite project."

pnpm install

```

Start the development server:
```sh title="Start Development Server" description="Runs the Vite development server at localhost:5173."

pnpm dev

```

Your Vite app should now be running at [http://localhost:5173](http://localhost:5173) 🎉.

<!-- #### 🔧 6.2 Project Configuration

Modify your `"tsconfig.json"` to ensure **strict type-checking** and enable compatibility with **AO libraries**.

```ts
{
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
``` -->

#### 📦 6.2 Installing Dependencies

Install required packages for interacting with AO:

```sh title="Install aoconnect" description="Installs the @permaweb/aoconnect package to enable AO messaging capabilities."

pnpm add @permaweb/aoconnect
```

This package allows us to **communicate with AO processes**.

#### 🚀 Step 6.3: Sending a Dry-Run Message to an AO Process

Now that our **Vite React TypeScript** project is set up, let's send a **dry-run message** to an AO Process.

A **dry-run** allows us to **test AO messaging without requiring a wallet signature**, making development and debugging much faster.

📡 Send a Dry-Run Message to an AO Process

We’ll create a React component that sends a **test message** to an AO Process and displays the response.

#### 🔹 Create `src/components/AOMessage.tsx`

```ts title="AOMessage.tsx" description="React component that sends a dry-run message to an AO process and displays the response."

import React, { useState } from "react";
import { dryrun } from "@permaweb/aoconnect";

const AOMessage = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const processId = "YOUR_PROCESS_ID"; // Replace with actual AO Process ID

  const sendMessage = async () => {
    setLoading(true);
    try {
      const res = await dryrun({
        process: processId,
        tags: [{ name: "Action", value: "Ping" }],
        data: "abc123",
      });

      console.log("AO Response:", res);
      setResponse(JSON.stringify(res.Messages[0].Data, null, 2)); // Store only the first message from the response
    } catch (error) {
      console.error("Error sending dry-run message:", error);
      setResponse("Failed to communicate with AO Process.");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-gray-900 border border-gray-700 rounded-lg text-white text-center">
      <h2 className="text-lg font-bold mb-2">AO Messaging Test</h2>
      <p className="text-gray-400">Click the button to send a dry-run message.</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
        onClick={sendMessage}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {response && (
        <pre className="mt-4 p-2 bg-gray-800 text-green-400 rounded-md text-left text-sm whitespace-pre-wrap">
          {response}
        </pre>
      )}
    </div>
  );
};

export default AOMessage;
```

🔧 Integrating AO Messaging into the Main App

To use our new **AOMessage** component, update `src/App.tsx`:

```ts title="App.tsx" description="Main application entry that renders the AOMessage component on the homepage."

import React from "react";
import AOMessage from "./components/AOMessage";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🚀 AO Dry-Run Messaging</h1>
      <AOMessage />
    </div>
  );
}

export default App;
```

✅ Expected Output

After clicking **"Send Message"**, you should see the AO Process reply in the UI:

<!-- <img src="./dryrun-output.png" alt="dryrun-output" width="120"/> -->
<img src="/dryrun-output.png" alt="dryrun-output" style="width: 640px; height: auto;"/>


This confirms that our frontend **successfully communicates with AO** 🎉.


**Note**: The `dryrun` function is particularly useful for scenarios where immediate feedback is desired without the overhead of permanent storage on the Arweave network.

🎉 Congratulations!

You've successfully completed the Quick Start Guide for Arweave + AO Development. This journey has equipped you with the foundational tools and knowledge to explore the vast possibilities within the Arweave and AO ecosystems.​

Welcome to the rabbit hole—dive deep, experiment, and innovate! 🐇🕳️

If you're eager to take your skills further, check out our **[Deploy Your First App](./developers/get-started/deploy-your-first-app)** page for more advanced guidance and projects to tackle!

## 🛠️ Additional Resources

🔗 **[@permaweb/aoconnect on npm](https://www.npmjs.com/package/@permaweb/aoconnect)** - Official package to communicate with AO processes.  
🔗 **[AO Cookbook: Dry-Run Messages](https://cookbook_ao.g8way.io/guides/aoconnect/dryrun.html)** - Step-by-step guide on sending messages via dry-run.

---

