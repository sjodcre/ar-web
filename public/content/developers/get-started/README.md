# Getting Started

This directory holds *Getting Started* documentation content (e.g. introduction, installation guides, quick-start tutorials) in Markdown format. Each file here should use lowercase, kebab-case names (e.g. `intro.md`, `installation.md`), where the filename (without `.md`) becomes the URL slug. For example, `public/content/getting-started/intro.md` would render at `/getting-started/intro`.

Use frontmatter (YAML at the top of each Markdown file) to define metadata like the page title, description, or ordering if needed. The documentation platform will load and render these files (often at build time via static generation), converting them to HTML pages. 

**Structure and naming:**  
- All files should use the `.md` (or `.mdx`) extension and kebab-case names.  
- Filenames should reflect the page content (e.g. `getting-started/installation.md` for installation instructions).  
- You can organize files in subfolders if you need to group content (each subfolder also appears in the URL path).

**Usage:**  
The content here is used by the docs site. Typically, a matching React page in `src/app/getting-started` will fetch or import these Markdown files and render them into the `/getting-started` section of the site. For example, a Next.js page might use `getStaticProps` or a Markdown loader to generate the HTML from these files.
