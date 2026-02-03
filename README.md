# Hanzilla.co 🦖

My personal blog and landing page built with Astro, Tailwind CSS, and tasteful motion design.

## 🚀 Features

- ⚡ **Astro 4.x** - Fast, modern static site generation
- 🎨 **Yellow branding** - Custom color palette with dark mode support
- ✨ **Smooth animations** - View Transitions API + CSS animations
- 📝 **Blog with Content Collections** - Type-safe markdown posts
- 🌙 **Dark/Light mode** - System preference detection + manual toggle
- 📱 **Fully responsive** - Mobile-first design
- ♿ **Accessible** - Respects `prefers-reduced-motion`

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Astro 4.x |
| Styling | Tailwind CSS |
| Animations | CSS + View Transitions API |
| Content | Astro Content Collections |
| Deployment | GitHub Pages / Vercel |

## 📂 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   └── BlogCard.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/
│   │       └── hello-world.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

## 📝 Adding Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description"
pubDate: 2026-02-03
tags: ["tag1", "tag2"]
---

Your content here...
```

## 🎨 Customization

### Colors
Edit `tailwind.config.mjs` to change the yellow accent color or gray scale.

### Social Links
Update `src/components/Footer.astro` to add/change social links.

### Personal Info
- Update hero text in `src/components/Hero.astro`
- Update about page in `src/pages/about.astro`
- Update projects in `src/pages/index.astro`

## 📄 License

MIT License - feel free to use this as a template for your own site!
