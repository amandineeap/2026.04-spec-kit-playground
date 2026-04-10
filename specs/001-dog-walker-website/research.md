# Research: Dog Walker Website

All research items resolved from existing project configuration and established best practices.
No external unknowns remain.

---

## R-001: Pastel Theme in Tailwind CSS 4

**Decision**: Define a pastel color palette using CSS custom properties inside `app/globals.css` via Tailwind v4's `@theme inline` syntax.

**Rationale**: Tailwind v4 eliminates `tailwind.config.js` in favour of CSS-first configuration. Custom colors are defined as `--color-*` variables inside `@theme inline {}` in the CSS file. This integrates naturally with the existing `globals.css` setup and requires no new dependencies.

**Color palette**:

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-blush` | `#FADADD` | Primary accent (soft pink) |
| `--color-lavender` | `#E6DEFF` | Secondary accent |
| `--color-mint` | `#D4F5E2` | Nature/freshness highlight |
| `--color-peach` | `#FDEBD0` | Warm section backgrounds |
| `--color-sky` | `#D6EAF8` | Cool section backgrounds |
| `--color-cream` | `#FFF8F0` | Page background base |
| `--color-bark` | `#5C3D2E` | Primary text (dark brown) |
| `--color-paw` | `#A0522D` | Secondary text / accent borders |

**Contrast verification**: `bark` (#5C3D2E) on any pastel background achieves >7:1 contrast ratio (WCAG AAA). All body text meets WCAG 2.1 AA at minimum.

**Alternatives considered**:
- Tailwind arbitrary values (`bg-[#FADADD]`) — rejected: verbose, not reusable as semantic tokens
- Shadcn/ui — rejected: unnecessary dependency for a static site (YAGNI per Principle IV)
- CSS Modules — rejected: Tailwind covers all styling needs without separate module files

---

## R-002: App Router Routing Structure

**Decision**: Next.js App Router with route files at `app/services/page.tsx`, `app/about/page.tsx`, `app/pack/page.tsx`. Root layout at `app/layout.tsx` hosts `NavBar` and `Footer`.

**Rationale**: The existing project already uses App Router (confirmed: `app/` directory, `app/layout.tsx`, `app/page.tsx`). Each page is a React Server Component by default — no `'use client'` directive needed for static content pages. Data files are imported directly at the page level.

**Alternatives considered**:
- Pages Router (`pages/`) — rejected: project already configured for App Router; no reason to introduce a second routing system
- Route groups `app/(site)/` — rejected: no layout nesting or colocation benefit on a 4-page site (YAGNI)

---

## R-003: Local Data File Pattern

**Decision**: Export typed arrays from TypeScript files in a `data/` directory at the project root. Import directly in page Server Components.

**File layout**:
- `data/services.ts` — exports `services: Service[]` (3 entries)
- `data/dogs.ts` — exports `dogs: Dog[]` (12 entries)
- `about/page.tsx` — credentials defined inline as a typed constant (2–3 entries, no dedicated file needed)

**Rationale**: TypeScript files provide compile-time type checking and IDE autocompletion at zero runtime cost. No build steps, no import configuration. Consistent with Principle IV (no unnecessary abstractions until used in two distinct places).

**Alternatives considered**:
- JSON files — rejected: no TypeScript type safety; require `resolveJsonModule` config change
- Environment variables — rejected: wrong tool for structured UI content
- External database — explicitly excluded by user requirement
- Markdown/MDX — rejected: overkill for small static datasets

---

## R-004: Accessibility Implementation

**Decision**: Semantic HTML5 structure throughout. ARIA labels where semantic meaning is ambiguous. Skip-to-content link in layout. Next.js `<Image>` with descriptive `alt` text. Keyboard navigation via Tailwind `focus-visible:ring-*` utilities.

**Specific patterns**:
- `<nav aria-label="Main navigation">` with `<ul>` list of links
- `<main id="main-content">` targeted by skip link
- `DogCard`: `<article aria-label="{name} — {breed}">`
- `ServiceCard`: `<article>` with proper heading hierarchy (`<h2>` for card title)
- Decorative emoji: `<span role="img" aria-label="...">` 
- Page headings: single `<h1>` per page, `<h2>` for section/card titles

**Alternatives considered**:
- Radix UI / HeadlessUI — rejected: no interactive widgets (dropdowns, modals) that require an accessibility library; all navigation is plain anchor links
- axe-core automated testing — desirable addition but not a dependency requirement for this spec

---

## R-005: Responsive Layout Strategy

**Decision**: Mobile-first Tailwind utility classes. Base styles target 375px; `sm:` (640px) and `md:` (768px) breakpoints handle layout expansion.

**Grid layouts**:
- **Services**: `grid grid-cols-1 sm:grid-cols-3` — stacked on mobile, 3-column on desktop
- **Pack**: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4` — 2-col mobile, 3–4 col desktop
- **NavBar**: horizontal flex with `flex-wrap`; 4 short links fit without a hamburger menu on 375px
- **About**: single column with stacked credential cards (`flex flex-col gap-4`)

**Alternatives considered**:
- Hamburger menu for NavBar — rejected: 4 navigation items fit horizontally even at 375px when styled compactly
- CSS Grid via custom CSS — rejected: Tailwind grid utilities are sufficient and keep styling co-located
- Separate mobile/desktop components — rejected: responsive class variants cleanly handle all breakpoints
