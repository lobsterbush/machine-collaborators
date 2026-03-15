# Machine Collaborators

## Status
Active

## Description
A global conversation series on what happens when researchers work with AI: the workflows, gains, failures, and new questions that emerge.

## Authors
- Charles Crabtree, Senior Lecturer, School of Social Sciences, Monash University and K-Club Professor, University College, Korea University.

## Last Updated
2026-03-15

## Tech Stack
- Next.js 16 (App Router, TypeScript, static export)
- Tailwind CSS 4
- Framer Motion
- GitHub Pages (deployment via Actions)

## Pages
- `/` — Homepage (hero, about, next session, upcoming, speak, convener, CTA)
- `/sessions` — All sessions with upcoming/past toggle
- `/reading` — AI in social science news aggregator (RSS via CORS proxy)
- `/nominate` — Speaker nomination form (self or other)
- `/about` — Series rationale, format, convener bio
- `/subscribe` — Email subscription form

## Key Architecture
- Sessions stored as structured data in `src/data/sessions.ts` (no database)
- Forms submit to Formspree (IDs in `src/config.ts`)
- Reading page fetches Google News RSS via fallback CORS proxies with sessionStorage caching
- Scroll-aware header: transparent over dark hero, parchment backdrop elsewhere
- MC monogram logo as inline SVG component (`src/components/Logo.tsx`)
- Design uses "Warm Ink" editorial palette: ink (#1a1a2e), parchment (#f5f0e8), terracotta (#c45d3e), ochre (#c49332), sage (#5a7258)

## Setup
- `npm install` then `npm run dev`
- Formspree form IDs must be configured in `src/config.ts` for forms to work
- Static export: `npm run build` outputs to `out/`
- Deployed at https://lobsterbush.github.io/machine-collaborators/
