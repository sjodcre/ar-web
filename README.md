# ArWeb Documentation Platform

**ArWeb** is a developer-focused documentation site for the Arweave and Actor-Oriented (AO) ecosystems. 

- **Arweave**: A decentralized permanent storage network ([docs](https://docs.arweave.org))
- **AO (Actor-Oriented Computer)**: A decentralized, parallel computing platform built on Arweave ([AO site](https://ao.arweave.dev))

This project pulls Markdown files from the `public/content/` folder and renders them using Next.js App Router (in `src/app/`).

## 🚀 Quick Start

```bash
git clone https://github.com/sjodcre/ar-web.git
cd ar-web
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site locally.

## 📁 Project Structure

- `public/content/` — All markdown files (docs)
- `src/app/` — Next.js App Router, page layouts, content loader

## ✍️ Writing Docs

Add `.md` files under `public/content/<section>/`. They are rendered as pages:

- `/arweave/overview.md` → `/arweave/overview`
- `/ao/getting-started.md` → `/ao/getting-started`

Each section has its own `README.md` for guidelines.

## 🤝 Contributing

1. Fork and clone this repo
2. Add markdown files or improve code
3. Submit a pull request

## 🔗 Resources

- [Arweave Docs](https://docs.arweave.org)
- [AO Cookbook](https://cookbook_ao.g8way.io/)
- [Ar.IO](https://ar.io)
