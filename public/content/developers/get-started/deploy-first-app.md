---
title: "Deploying Your AO + React Application on Arweave with ArLink"
description: "A comprehensive guide to deploying your AO and React application to Arweave's permanent storage using ArLink, including wallet setup and deployment options."
---

# 🚀 Deploy Your AO + React App to Arweave with ArLink

You’ve built your app — now it’s time to **go live** on the **permaweb** using [Arweave](https://www.arweave.org) and **ArLink**.

## 🌐 Did You Know?

**Arweave** isn't just for storing images or files; it can also host your **entire application permanently**. However, specific configurations are necessary to ensure your app works correctly on the permaweb.

### Why Are These Settings Essential?

Arweave operates as a decentralized storage network without traditional server-side routing. This means client-side routing configurations (e.g. `HashRouter`) are crucial. Without them, users may encounter broken links or refresh errors.

## ⚠️ Important: Wallet Must Have AR Tokens

To deploy your app, your wallet **must contain AR tokens**. These are used to pay for storage. Without AR tokens, deployment **will fail**.

## 🚀 Deployment Options

You can deploy your app in **two ways**:

<details open>
<summary><span class="text-xl font-bold text-secondary">🌐 Option 1: Use the ArLink Web Interface</span></summary>

You can deploy via the **no-code UI** at:

🔗 [https://arlink.ar.io](https://arlink.ar.io)

> 💡 **Feels like Vercel!**  
> If you're used to deploying apps with Vercel, this will feel right at home — simple, clean, and developer-friendly.

For a step-by-step guide, follow the official ArLink docs:

📘 [Quickstart Guide](https://arlink.gitbook.io/arlink-docs/getting-started/quickstart)

All you need is:
- A wallet (like ArConnect)
- A little AR for storage 💸

</details>

<details>
<summary><span class="text-xl font-bold text-secondary">🧱 Option 2: Local CLI + ArNS (Advanced)</span></summary>

This method uses **ArNS** (Arweave Name System), a decentralized naming system for Arweave.

🔗 Learn more: [https://ar.io/arns](https://ar.io/arns)

### 🔧 Step 1: Install `permaweb-deploy`
Install globally:
```sh
npm install -g permaweb-deploy
```

### 🔐 Step 2: Setup Wallet for Deployment

1. Open the **Wander Wallet** browser extension  
2. Select **"Accounts"**.  
<img src="/wander-accounts-button.png" alt="wander-accounts-button" style="width: 640px; height: auto;"/>
3. Click which wallet account you want to use to deploy your application.  
4. Click **Export Keyfile**.  
<img src="/wander-export-keyfile.png" alt="wander-export-keyfile" style="width: 640px; height: auto;"/>  
5. Key in your password.  
6. Rename the file to `wallet.json`  
7. Move it into `.secrets/wallet.json`

🚫 **DO NOT COMMIT THIS FILE** — add `.secrets/` to your `.gitignore`

### 📝 Step 3: Copy the Deployment Script

Copy `deploy.sh` into your project under `scripts/`:

<pre><code class="language-sh" title="scripts/deploy.sh" description="Shell script to deploy your dist/ folder to Arweave using ArNS and permaweb-deploy.">
# Check if dist directory exists
if [ ! -d "dist" ]; then
  echo "dist directory does not exist. Please build the project first"
  exit 1
fi

if [ -z "$UNDERNAME" ]; then
  UNDERNAME="arweb"
  echo "UNDERNAME is not set. Setting it to arweb"
fi

DEPLOY_KEY=$(base64 -i ./.secrets/wallet.json) npx permaweb-deploy --ant-process YOUR_ANT_PROCESS --undername $UNDERNAME
</code></pre>

To obtain your ArNS name, visit the ArNS dashboard, which would be the Process ID of the asset. You will need to either rent or buy an ArNS name.  
Update the `--ant-process` value in the script to your ArNS name:

```
--ant-process=YOUR_ANT_PROCESS
```

Update the `--undername` value in the script to your desired ArNS name (this can be anything you choose):

```
--undername=your-name.ar
```

### 🚀 Step 4: Deploy with ArNS

```sh
sh scripts/deploy.sh
```

You’ll get a live URL like:

```
https://your-name.ar
```

</details>

## 🌍 Optional: Custom Domain

You can link a custom domain to your Arweave deployment using TXT records.  
Read more: [ArLink Docs – Custom Domains](https://arlink.dev/docs/custom-domains)

## 🧭 What's Next?

- ✅ Monitor usage via AO logging  
- ✅ Share your live link on [AO Discord](https://discord.gg/arweave)
