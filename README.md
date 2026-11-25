# Roadmap

A responsive career-discovery dashboard built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons. Explore career journeys, inspect sourced milestones, save paths, and select profiles for comparison.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it with `npm run preview`.

## Structure

- `src/components/` — reusable profile cards and career journey detail dialog
- `src/data/` — typed profile seed data; designed to be replaced by an API/data service
- `src/types/` — shared career profile and milestone models
- `src/App.tsx` — dashboard composition and interactive discovery state

## Data notes

Public figure milestones are an introductory sample, with links to biographical and institutional references. Approximate ages are based on birth and event years. The sample intentionally does not invent “everyday professional” identities or claim first-hand accounts; community-submitted profiles can be added later with consent and source attribution. Career histories are illustrative rather than guaranteed blueprints.

## Next architecture steps

For production, move profile loading behind a repository/API boundary, add authentication and persistence for saved roadmaps, and connect paid plans and AI-assisted roadmap generation through server-side services. Do not expose billing or AI provider secrets in the browser.
