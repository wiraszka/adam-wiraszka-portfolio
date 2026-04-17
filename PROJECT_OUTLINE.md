# adam-wiraszka-portfolio — Project Outline

## Overview

A personal portfolio website for Adam Wiraszka. Showcases a profile photo, contact information, and a grid of clickable project cards linking to other project websites.

## Tech Stack

- **Frontend:** Next.js (App Router) + Tailwind CSS
- **Backend:** FastAPI (Python), served as Vercel serverless functions under `/api/`
- **Deployment:** Vercel

## Architecture

```
adam-wiraszka-portfolio/
├── api/
│   └── index.py          # FastAPI app — /api/projects endpoint
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Hero.tsx       # Profile photo, name, contact info
│       └── ProjectCard.tsx
├── public/
│   └── profile.jpg       # Drop your profile photo here
├── vercel.json
├── package.json
└── requirements.txt
```

## Current Features (v0.1.0)

- Single-page layout
- Circular profile photo at the top
- Contact info row (email, GitHub, LinkedIn)
- Responsive project card grid — each card links to an external project site
- Project data served from FastAPI backend (`/api/projects`)

## Design Decisions

- Tailwind CSS for styling — low overhead, easy to customize
- FastAPI serves project data so new projects can be added without frontend redeploys
- Vercel Python runtime handles the FastAPI serverless functions

## Future Ideas / Backlog

- Add a short bio / "About me" section below the hero
- Dark mode toggle
- Animated card hover effects
- Skills / tech stack section with icons
- Blog or writing section
- Resume / CV download link
- Project filtering by tag or category
- Testimonials or recommendations section
- Analytics (Vercel Analytics or Plausible)

## Reference & Inspiration

- [Developer Portfolios (emmabostian)](https://github.com/emmabostian/developer-portfolios?tab=readme-ov-file) — large curated list of real developer portfolio sites; consult for design and feature inspiration as the site grows
