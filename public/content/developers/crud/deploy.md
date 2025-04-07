# Deploying Your AO CRUD Application to Arweave

In this guide, we'll walk through how to deploy the **AO CRUD application** you built in the previous section onto **Arweave’s permanent storage** using **ArLink**.

---

## 1. Overview

We’ll upload your fully working AO-based CRUD application from the previous section onto Arweave.

This process is **very similar** to what you followed in the guide below:

👉 **[Deploy your First App Guide](./developers/get-started/deploy-first-app)**

---

## 2. Vercel-Compatible = Arweave-Compatible

If your application works when deployed on Vercel, it will almost certainly work the same way when uploaded to Arweave using **ArLink**.  
The same static build output (`dist/` or `build/`) is used during deployment.

---

## 3. Prepare the App for Arweave Upload

Before deploying, update your `tsconfig.json` file to support JS files and add cleaner path aliases:

```json title="tsconfig.json" description="Configure project for Arweave compatibility and cleaner imports."
{
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

> ℹ️ For more details, refer to:  
> https://arlink.gitbook.io/arlink-docs/getting-started/making-your-website-arweave-compatible

---

## 4. Deploy Using ArLink

Follow the **Quickstart** guide here:  
👉 https://arlink.gitbook.io/arlink-docs/getting-started/quickstart

You’ll need:

- A wallet (e.g., **ArConnect** or a keyfile)
- Some **AR tokens** to cover upload cost
- A working `build/` directory (use `npm run build`)

---

✅ And that’s it!  
You can test the app on **Vercel**, then deploy it on **Arweave via ArLink** — and your application will live on the permaweb.

