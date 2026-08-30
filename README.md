# Portfolio — Frontend / UI Engineer

Personal portfolio site (V2 architecture). English-first. Targeting frontend / UI / product engineering roles, primarily in Germany and Europe.

## Stack

- React 19
- Vite 7
- JavaScript (JSX)
- React Router 7
- SCSS (Sass)
- npm

No TypeScript, Tailwind, or animation libraries in this phase.

## Commands

```bash
npm install
npm run dev      # local development
npm run build    # production build
npm run preview  # preview production build
npm run lint
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/work` | Professional work |
| `/work/:slug` | Project / case-study scaffold |
| `/about` | About, career, certificates archive |
| `/playground` | Creative experiments |
| `/resume` | Resume (structural placeholder) |
| `/portfolio` | Redirect → `/` |
| `/portfolio/certificates` | Compatibility certificates archive |

## Architecture

```
src/
  routes/           Route table
  layouts/          SiteLayout (nav, outlet, footer)
  pages/            Route-level pages
  sections/home/    Home compositions
  components/       Reusable UI (navigation, projects, media, theme, motion)
  decorative/       Future doodles / stickers (empty for now)
  data/             Content sources
  hooks/            useTheme, useReducedMotion, useMediaQuery
  styles/           tokens, base, layouts, utilities, legacy UI styles
  assets/           portrait, projects, certificates, …
```

## Content

| File | Purpose |
|------|---------|
| `src/data/site.js` | Identity, contact placeholders, about, nav, SEO shell |
| `src/data/projects.js` | All projects (professional / personal / experiment) |
| `src/data/experience.js` | Career entries extracted from existing content |
| `src/data/certificates.js` | Certificate images + captions |
| `src/data/playground.js` | Playground experiments (from project data) |

Replace placeholder contact URLs in `site.js` before shipping.

## Assets

- Portrait: `src/assets/portrait/`
- Project screenshots: `src/assets/projects/`
- Certificates: `src/assets/certificates/`
- Future doodles / illustrations / fonts: reserved folders under `src/assets/`

## Design system (Phase 2)

Tokens live in `src/styles/tokens/`:

- colors (semantic light/dark)
- typography
- spacing
- layout / breakpoints
- motion (+ reduced-motion overrides)

Theme:

- `data-theme="light|dark"` (system default, user override persisted)
- FOUC-prevention script in `index.html`
- Eyes → glasses theme control in the navbar

Motion:

- `data-reduced-motion="true|false"` (OS + user override, persisted)
- Motion: On/Off control in the navbar

UI primitives: `src/components/ui/` (Button, TextLink, IconButton, SectionLabel, Tag, Divider)

Legacy purple/black Home section styles remain quarantined under `src/styles/legacy/` for Work/About pages until later phases.

## Branch

Homepage experience work lives on `portfolio-v2/homepage-experience`.
