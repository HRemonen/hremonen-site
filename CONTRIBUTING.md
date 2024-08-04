# Contributing

It's always nice to have someone willing to contribute!

## Content changes

The blog posts are stored in /\_posts as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

Posts can be updated without even cloning the repository straight from the GitHub UI if you wish. For bigger changes etc. see project setup below.

## Style changes

The project uses Tailwind for styles. The Tailwind is configured in [tailwind.config.ts](./tailwind.config.ts) file and some "global" styles are defined in [globals.css](./src/app/globals.css) file.

Any changes to the styles must be discussed with the original author (@hremonen).

## Code changes

The project is built with Next.js and uses the characterised paradigm of it. In order to make code changes one must be fully competent with using Next.js, React and Tailwind.

### Quick project structure overview

Here is a short overview of the project structure, directory by directory.

### .github

Contains GitHub related files: the GitHub Actions CI/CD workflows for example.

### .husky

Contains the setup for Husky and pre-commit hooks.

### \_posts

Contains the static Markdown files of the blog posts

### public

Contains the "public" files for the project, such as favicon, logos and robots.txt files (altought I am not sure if the favicon has to be here)

### src

The _src_ directory contains all of the source code for the project. It's divided to three different directories _app_, _interfaces_, and _lib_.

The directory _app_ contains the more broadly used React components inside the directory _app/\_components_ such as components for different UI elements, Navbar and Footer specific elements, theme related elements, etc. Components that are used on a single page (route) are located inside _app/\_pages_. Lastly the routing is done using the Next.js [App Router](https://nextjs.org/docs/app) so the directories without any trailing `_` are meant to be the routes and only contain the specific [layout and page files](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) for the route. On the root of the _app_ directory is the "main" [layout](./src/app/layout.tsx) and [page](./src/app/page.tsx) which are the entrypoints to the software. Also static content such as favicon, web manifest, sitemap generation, etc. are located on the root of _app_.

More commonly appearing types are defined inside the _interfaces_ directory. Smaller and more local types are defined across the application inside specific files if they are not to be shared.

The _lib_ directory contains API specific implementation and very much all of the business logic, such as recommendation algorithms etc.

```
├── src
│   ├── app
│   │   ├── _components
│   │   ├── _pages
│   │   ├── about
│   │   ├── blog
│   │   ├── feed.xml
│   │   ├── apple-icon.png
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── sitemap.ts
│   │   └── manifest.webmanifest
│   ├── interfaces
│   └──  lib
├── .eslintrc
├── .gitignore
├── .lintstagedrc.js
├── .prettierrc.json
├── next.config.js
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── ...

```

## Project setup

Setting up the project locally:

1. Clone the project locally
2. Run `npm run i` to install dependencies
3. Run `npm run dev` to run the application in development mode locally
4. Create own branch for the changes

After the changes are committed open a Pull Request and I will check it out eventually.

### Running static analysis

The project is setup with ESLint/Prettier for maintaining a basic style of the code. The ESLint and Prettier are run on every commit using pre-commit hooks with [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged). These checks are automatic and you won't have to worry about setting anything up.

If you wish to manually run the static analysis checks:

1. Run `npm run lint` for eslint
2. Run `npm run format` for prettier and `npm run format:fix` to automatically fix issues

The ESLint and Prettier are also run after commit to GitHub in a CI/CD pipeline, so if there would be issues there would be no harm.
