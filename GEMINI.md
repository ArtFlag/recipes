# Project Overview

This is a recipe website built with [Docusaurus](https://docusaurus.io/). The
recipes are written in Markdown and are located in the `docs` directory. The
website is configured to be deployed on GitHub Pages.

# Building and Running

To get started with the project, you need to have [Yarn](https://yarnpkg.com/)
installed.

1.  **Install dependencies:** ```bash yarn install ```

2.  **Start the development server:** ```bash yarn start ``` This will start a
    local development server and open up a browser window. Most changes are
    reflected live without having to restart the server.

3.  **Build the project:**
    ```bash yarn build ``` This command generates static content into the `build`
    directory and can be served using any static contents hosting service.

4.  **Deploy the project:** ```bash yarn deploy ``` This command deploys the
    website to GitHub Pages.

# Development Conventions

*   **Content:** All recipes are located in the `docs` directory. They are
    organized into categories and subcategories, which are defined in the
    `sidebars.ts` file.
*   **Static Assets:** Static assets, such as images and fonts, are stored in
    the `static` directory.
*   **Custom Components:** Custom React components are located in the
    `src/components` directory.
*   **Styling:** Custom CSS is located in the `src/css` directory.
*   **Dependencies:** The project uses [Yarn](https://yarnpkg.com/) for package
    management. Dependencies are defined in the `package.json` file.
*   **TypeScript:** The project uses
    [TypeScript](https://www.typescriptlang.org/) for type checking. The
    TypeScript configuration is in the `tsconfig.json` file.
*   The search is managed by `docusaurus-search-local`. See the docs at https://github.com/cmfcmf/docusaurus-search-local?tab=readme-ov-file#usage.

# Content Conventions and Style Guide

The website mostly has recipes. Each recipe is defined by:

- A list of ingredients written as "ingredient name: quantity (unit)".
- A list of steps, each step being a list of instructions. Each instruction is a
  string, but it can also be a React component (e.g., `<BakingStep />`).
- In the frontmatter, there is always a title and and list of tags. t there must
  be at least 2 tags: one for the country where the recipe originated and one
  for the type of dish.
- Numbered lists are used for steps, they always are written in markdown using
  `1.`, never increment the number.
