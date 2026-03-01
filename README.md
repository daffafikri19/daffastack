# DaffaStack Portfolio (Next.js)

Personal portfolio website built with Next.js App Router, Tailwind CSS, shadcn/ui, and custom UI components by DaffaStack.

## Attribution

Special thanks to **Brittany Chiang** for the portfolio design inspiration and visual reference.

Original portfolio reference is **Gatsby-based** implementation by Brittany Chiang
While This project independently reimplemented and customized using **Next.js** with different architecture, components, and content

Reference repository:
- https://github.com/bchiang7/v4

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui

## Features

- Multi-section portfolio landing page
- Featured projects and projects grid from markdown content
- Tech stack and learning phase sections
- Custom responsive mobile navigation

## Project Structure

- `app/`: routes, layout, global styles
- `components/portfolio/`: portfolio UI components
- `components/ui/`: reusable UI primitives
- `content/`: jobs and project markdown content
- `lib/`: config and content parser utilities
- `public/`: static assets (images, favicon, resume)

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
npm run start
```

## Content Setup

- Site and section config: `lib/portfolio-config.ts`
- Jobs content: `content/jobs/*/index.md`
- Featured and other projects: `content/featured/*/index.md` and `content/projects/*/index.md`
