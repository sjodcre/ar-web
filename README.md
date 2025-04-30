# ArWeb Documentation Platform

**ArWeb** is a developer-focused documentation site for the Arweave and Actor-Oriented (AO) ecosystems.

- **Arweave** is a decentralized permanent storage network – effectively a global, permissionless hard drive for data.  
- **AO (the Actor-Oriented Computer)** is a decentralized computing platform built on Arweave that enables hyper-parallel processes to interact with Arweave’s data layer.  

This project organizes tutorials, reference guides, and how-to documents for both Arweave and AO in one place.

The site is built with a React/Next.js framework (using the new App Router) and pulls content from markdown files. All documentation pages are written in Markdown under the `public/content/` folder. When the site runs, each Markdown file is rendered into a static page (for example, a file at `public/content/arweave/intro.md` becomes the page at `/arweave/intro`). The routing and layout are defined by the React components in `src/app/`.

## 🚀 Quick Start (Local Setup)

To run the documentation site locally for development:

**Prerequisites**: Install [Node.js](https://nodejs.org/) (LTS version) and a package manager (npm, Yarn, or pnpm).

**Clone the repo**:
```bash
git clone https://github.com/sjodcre/ar-web.git
cd ar-web
```

**Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

**Run the dev server**:
```bash
npm run dev
```

This starts the site on `http://localhost:3000` (the default Next.js port). You can now view the docs in your browser. The site hot-reloads on changes to code or markdown.

## 📚 Usage Overview

Once running, the site’s homepage will show the main sections (e.g. Arweave, AO, Tutorials). You can navigate to different pages from the navigation menu or by URL.

- Pages for **Arweave topics** live under `/arweave/*`, and correspond to markdown files in `public/content/arweave/`.
- Pages for **AO topics** live under `/ao/*`, from `public/content/ao/`.
- Any other sections (e.g. tutorials) follow similarly.

The content is pulled from the markdown files in `public/content/` and rendered using Next.js pages/components. For instance, a file `public/content/arweave/overview.md` will be accessible at `/arweave/overview`. The Next.js app (in `src/app/`) uses dynamic routing to read these files and apply a consistent layout.

## 🛠️ Editing Content

To add or modify documentation:

- **Markdown pages**: Edit or create `.md` files in the subfolders of `public/content/`. Each file should have front-matter (if needed) and Markdown content. The filenames and folder structure determine the URL paths.

  **Example**: To create a new “Getting Started” page for AO, create `public/content/ao/getting-started.md`. This will render at `/ao/getting-started`.

- **Customizing layouts**: If you need a custom layout for certain pages (e.g. a special tutorial format), adjust the React components in `src/app/` or create new layout templates.

As a rule, all user-visible content belongs in `public/content/`. The React/Next.js code in `src/app/` should remain generic (it loads and renders whatever markdown you put in content).

## 🤝 Contributing

Contributions and feedback are welcome! Here’s how you can help:

1. **Fix typos or improve text**: Edit the Markdown docs under `public/content/` and submit a pull request.
2. **Add new guides/examples**: Write new tutorials or references as Markdown and place them in the appropriate folder.
3. **Enhance the site**: Improve styling, add features (search, versioning, etc.), or refine components in `src/app/`.

Please follow the existing content style and structure. If you’re adding a new section, also add a `README.md` in that folder (describing the purpose of that subfolder) so future contributors know where to put files.

## 🔗 External Resources

- [Arweave Documentation](https://docs.arweave.org) — Official developer docs covering SDKs, storage, and mining.
- [AO Cookbook](https://cookbook_ao.g8way.io/) — Getting-started guides and tutorials for the Actor-Oriented Computer (AO).
- [AO Website](https://ao.arweave.dev) — High-level overview of AO.
- [Arweave.org](https://arweave.org) — Official Arweave portal.
- [AR.IO](https://ar.io) — Articles explaining how Arweave and AO work together.

Each of the links above leads to up-to-date docs or overviews of Arweave/AO. This repository’s site brings all that info together in one place.
