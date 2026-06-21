# Vlad Zozulia — Developer Portfolio

Responsive bilingual portfolio for a Telegram Bot & Mini App developer.

## Stack

- React
- Vite
- React Router
- Lucide Icons
- Plain CSS

## Features

- English and Ukrainian localization without page reloads
- Language preference stored in `localStorage`
- Light and dark themes stored in `localStorage`
- Data-driven project cards and project detail pages
- Project filtering by Bots, Mini Apps, and API
- Featured projects
- Responsive desktop and mobile layouts
- SEO title and description updates for both languages
- Keyboard-accessible controls and reduced-motion support

## Run Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Add a New Project

All project content is stored in:

```text
src/data/projects.js
```

To add a project, create one new object in the exported `projects` array. Components and detail routes are generated automatically.

Required fields:

```js
{
  id: 5,
  slug: "project-slug",
  title: { en: "English title", uk: "Українська назва" },
  description: { en: "...", uk: "..." },
  task: { en: "...", uk: "..." },
  features: {
    en: ["Feature"],
    uk: ["Функція"]
  },
  stack: ["Python", "aiogram"],
  images: [
    {
      src: "/screenshots/project-screen.png",
      alt: { en: "Screenshot description", uk: "Опис скриншота" }
    }
  ],
  githubUrl: "https://github.com/...",
  demoUrl: null,
  status: { en: "Active", uk: "Активний" },
  date: "2026-06-20",
  order: 5,
  featured: false,
  types: ["bot", "api"]
}
```

Supported project types:

- `bot`
- `miniapp`
- `api`

Use `null` for an unavailable `githubUrl` or `demoUrl`. The UI automatically renders a disabled state.

## Replace Placeholder Screenshots

Current placeholders are located in:

```text
public/placeholders/
```

Add real screenshots to `public/screenshots/` and update only the `images` array in `src/data/projects.js`.

Recommended screenshot format:

- WebP or optimized PNG
- 16:10 or 16:9 aspect ratio
- Width between 1200 and 1800 pixels
- No private customer data, tokens, IDs, or payment details

## Contact Links

Telegram and GitHub links are currently active. Add Freelancer and Freelancehunt profile URLs in the `contacts` array inside `src/pages/HomePage.jsx`.
