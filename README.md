# Machine Collaborators

**A global conversation series on what happens when researchers work with AI: the workflows, gains, failures, and new questions that emerge.**

## Authors

- Charles Crabtree, Senior Lecturer, School of Social Sciences, Monash University and K-Club Professor, University College, Korea University.

## Overview

Machine Collaborators is a bi-weekly conversation series where researchers share how they are actually using AI in research, writing, teaching, and academic life. This repository contains the website for the series.

The site is built as an editorial, magazine-style web experience using the "Warm Ink" design system — a palette of ink, parchment, terracotta, ochre, and sage that deliberately avoids cliché tech aesthetics.

## Requirements

- Node.js 20+
- npm

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page (magazine-style landing)
│   ├── HomeClient.tsx        # Home client component
│   ├── sessions/             # Sessions archive (upcoming/past toggle)
│   ├── about/                # About / manifesto page
│   ├── subscribe/            # Email subscription form
│   ├── globals.css           # Design system (Warm Ink palette)
│   ├── layout.tsx            # Root layout with fonts + header/footer
│   ├── opengraph-image.tsx   # Dynamic OG image
│   └── icon.tsx              # Favicon
├── components/
│   ├── Header.tsx            # Minimal sticky navigation
│   ├── Footer.tsx            # Footer with Monash affiliation
│   └── Animated.tsx          # Scroll animation components
└── data/
    └── sessions.ts           # Session data model (no database)
```

## Adding Sessions

Edit `src/data/sessions.ts` to add, modify, or archive sessions. Change `status` from `'upcoming'` to `'past'` when a session is complete. Redeploy.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Fonts:** Playfair Display (serif headlines) + Inter (sans body)
- **Deployment:** Vercel

## Deployment

Push to GitHub and import to Vercel. No environment variables required for the base site.
