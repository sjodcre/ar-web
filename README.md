```markdown
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
```
```

### Example `public/content/arweave/README.md`

```markdown
# Arweave Documentation

This folder holds Markdown files related to **Arweave** topics. These include:

- Introductions to Arweave
- SDK usage
- Mining and storage logic

Each `.md` file is rendered into a page under `/arweave/` on the site.

## Example

- `overview.md` → `/arweave/overview`
- `sdk-guide.md` → `/arweave/sdk-guide`

Use standard Markdown formatting. You may include frontmatter if needed.
```

### Example `public/content/ao/README.md`

```markdown
# AO Documentation (Actor-Oriented Computer)

Markdown files in this folder cover topics about **AO**:

- What AO is
- Writing Lua handlers
- Using AOS CLI
- Parallel computation on Arweave

Each file is rendered to `/ao/<filename>`.

## Example

- `getting-started.md` → `/ao/getting-started`
- `concepts.md` → `/ao/concepts`
```

### Example `src/app/README.md`

```markdown
# App Logic — Next.js

This folder contains all app logic using Next.js App Router.

- Each folder like `app/arweave/` maps to a URL path `/arweave/`
- Dynamic routes are used to load markdown files
- Layouts are defined globally in `layout.tsx`

You generally won’t need to touch this unless you want to change themes, routing logic, or layouts.

Markdown content is loaded from `public/content/<section>/<slug>.md`
