# Dev Stack

Build your ideal development stack — browse curated frontend, backend,
database, language, styling, DevOps, and tooling picks, and assemble your
own stack on the side.

Built with **Vite + React + TypeScript + Tailwind CSS**.

## Features

- Sticky, responsive navbar with a mobile hamburger menu
- Gradient hero banner with a custom layered-stack illustration
- 14 technologies loaded at runtime from `public/technologies.json`
  (fetched with `fetch()`, not hardcoded in a component)
- Responsive technology grid: 1 column (mobile) -> 2 columns (tablet) ->
  3 columns (desktop)
- "Your Stack" sidebar: add / remove / remove-all, with duplicate-add
  protection
- Toast notifications (via `react-toastify`) for every stack action
- Loading state while the JSON data is fetched
- One shared brand gradient (orange -> pink -> violet) driving the logo,
  hero heading, and primary buttons - defined once in
  `tailwind.config.js` and `src/index.css`

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` type-checks the whole project with `tsc -b` before
building, so it will fail fast on any type error.

## Project structure

```
src/
  components/       Navbar, Hero, TechGrid, TechCard, StackSidebar, Footer (.tsx)
  context/          StackContext.tsx - shared "your stack" state (add/remove/remove all)
  hooks/            useTechnologies.ts - fetches public/technologies.json (loading/error state)
  utils/            techMeta.ts - category & badge color mappings
  types.ts          Shared Technology / Category / Difficulty types
public/
  technologies.json  The technology catalog data (edit this to add more tech)
```

## Re-theming

The brand gradient is defined in one place - the `brand-gradient` /
`brand-gradient-soft` background images and `text-gradient-brand` /
`btn-gradient` utility classes in `tailwind.config.js` and
`src/index.css`. Change the three color stops there to re-theme the
whole app.
