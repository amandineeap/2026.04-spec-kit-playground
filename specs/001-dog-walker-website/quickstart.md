# Quickstart: Dog Walker Website

## Prerequisites

- Node.js 18+ (required by Next.js 16)
- npm (included with Node.js)

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:3000
```

## Page URLs

| Page | URL |
|------|-----|
| Home | `/` |
| Services | `/services` |
| About | `/about` |
| Pack | `/pack` |

## Quality Gates (must pass before merge)

```bash
npm run lint         # ESLint — zero errors required
npx tsc --noEmit    # TypeScript — zero errors required
npm run build        # Production build — must succeed
```

## Project Layout

```
app/            ← Next.js App Router (pages and layout)
components/     ← Reusable React components
data/           ← Static mock data (TypeScript files)
public/         ← Static assets
specs/          ← Feature specs, plans, tasks
```

## Key Files to Edit

| File | What it controls |
|------|-----------------|
| `app/globals.css` | Pastel theme colors (`--color-blush`, `--color-bark`, etc.) |
| `app/layout.tsx` | NavBar, Footer, font and metadata |
| `data/services.ts` | 3 service objects (name, description, price) |
| `data/dogs.ts` | 12 dog profile objects (name, breed, emoji) |
| `app/about/page.tsx` | Credential constants (insurance, certifications) |

## Theming

Pastel colors are defined as CSS variables in `app/globals.css` inside `@theme inline {}`.
Edit the `--color-*` values there to adjust the palette globally.

Key color tokens:
- `--color-cream` — page background
- `--color-bark` — primary text (dark brown)
- `--color-blush` — pink accent
- `--color-mint` — green accent

## Accessibility Checks

Run a Lighthouse audit in Chrome DevTools against `http://localhost:3000`:
- Target accessibility score: ≥ 90
- Color contrast warnings: 0

Manually verify:
- Tab through all pages — every interactive element must be keyboard-reachable
- Skip-to-content link appears on first Tab press on each page
