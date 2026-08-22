# qu1etboy.dev

My personal site and blog — [qu1etboy.dev](https://qu1etboy.dev). Home, `/readme`,
`/uses`, and `/thoughts` (writing).

## Stack

- **Astro 5** — pages are prerendered (`prerender = true`), served static on **Vercel**.
- **TypeScript** (strict), **Tailwind CSS** + `@tailwindcss/typography`.
- **MDX content collections** for `/thoughts`, with Shiki (dracula) code highlighting
  and Mermaid diagrams.
- **Bun** for package management and scripts.

## Commands

| Command         | Action                                          |
| :-------------- | :---------------------------------------------- |
| `bun install`   | Install dependencies                            |
| `bun dev`       | Local dev server (shows drafts too)             |
| `bun run build` | Type-check (`astro check`) + build to `./dist/` |
| `bun preview`   | Preview the production build locally            |

## Structure

```
src/
  content/thoughts/     # blog posts (.mdx)
  content/config.ts     # collection schema
  layouts/              # Layout (shell) + ContentLayout (article)
  pages/
    index / readme / uses
    thoughts/           # list, [slug] post route, [slug].png OG endpoint
```

## Writing a post

Add an `.mdx` file to `src/content/thoughts/` with frontmatter:

```yaml
---
title: "How Breaking Production Made Me a Better Engineer"
date: 2025-10-06
description: "One sentence shown in the list and the share card."
published: true # false (default) hides it in production
image: "/og/my-post.jpg" # optional — fills the left half of the OG card
---
```

- **Drafts:** `published: false` (or omitted) hides the post in production but keeps it
  visible in `bun dev`. Production builds only published posts — pages, listing, and OG
  images alike.
- **Share cards:** a 1200×630 Open Graph image is generated at build for every post
  (`/thoughts/<slug>.png`) from the title, description, reading time, and optional `image`.
- **Reading time** is computed automatically (~200 wpm).

## Deploy

Push to `main` → Vercel builds and deploys. Set `Astro.site` in `astro.config.mjs` if the
domain ever changes.
