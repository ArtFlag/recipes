# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn install       # Install dependencies
yarn start         # Dev server with live reload
yarn build         # Generate static site into build/
yarn serve         # Serve the built site locally
yarn typecheck     # Run TypeScript type checking
```

## Architecture

This is a [Docusaurus](https://docusaurus.io/) site that serves as a personal recipe book, deployed to GitHub Pages.

- `docs/` — All recipe content as Markdown/MDX files, organized into category folders (`sweet/`, `savoury/`, `pastry/`, `cocktails/`)
- `sidebars.ts` — Defines the sidebar navigation structure; new category directories must be registered here
- `src/components/` — Custom React components used inside MDX files (e.g., `<BakingStep />`, `<Percent />`)
- `src/css/` — Custom CSS
- `docusaurus.config.ts` — Site-wide configuration including plugins and theme
- Search is provided by `@cmfcmf/docusaurus-search-local` (local, no Algolia key needed in dev)

## Recipe Content Conventions

Each recipe file must have frontmatter with `title` and `tags`. Tags must include at least one for the **country of origin** and one for the **dish type**.

```md
---
title: My Recipe
tags: ["french", "biscuits"]
---
```

Ingredients follow the format `ingredient name: quantity (unit)` as a bullet list.

Steps use numbered lists with `1.` only (never increment the number manually).

Numbered list items can include custom MDX components like `<BakingStep />`.
