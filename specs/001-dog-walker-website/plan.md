# Implementation Plan: Dog Walker Website

**Branch**: `001-dog-walker-website` | **Date**: 2026-04-10 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `specs/001-dog-walker-website/spec.md`

## Summary

Build a four-page informational dog walker website (Home, Services, About, Pack) on the existing Next.js 16 + Tailwind CSS 4 project. All content is served from local TypeScript data files — no external APIs or databases. The site uses a pastel, friendly visual theme with full mobile responsiveness (375px+) and meets WCAG 2.1 AA accessibility standards.

## Technical Context

**Language/Version**: TypeScript 5 (strict mode)
**Primary Dependencies**: Next.js 16 (App Router), React 19, Tailwind CSS 4
**Storage**: Local TypeScript data files (data/services.ts, data/dogs.ts)
**Testing**: npm run lint, npx tsc --noEmit, npm run build
**Target Platform**: Web (desktop + mobile, 375px width and above)
**Project Type**: Static web application
**Performance Goals**: All pages load and display content within 2 seconds on standard broadband
**Constraints**: No external data fetching; no database; responsive from 375px; WCAG 2.1 AA contrast
**Scale/Scope**: 4 pages, 12 dog profiles, 3 service types, about page with credentials

## Constitution Check

### Principle I — Specification-First ✅
Spec completed at `specs/001-dog-walker-website/spec.md`. Plan derived directly from spec.

### Principle II — Type Safety (NON-NEGOTIABLE) ✅
TypeScript strict mode already enabled in `tsconfig.json`. All data entities (`Service`, `Dog`, `Credential`) carry explicit interface types. No `any` usage permitted.

### Principle III — Component-Driven Development ✅
Each UI element is an isolated component: `ServiceCard`, `DogCard`, `CredentialCard`, `NavBar`, `Footer`, `Hero`. Page files under `app/` are thin orchestrators that import and compose these components. No business logic in page files.

### Principle IV — Simplicity & YAGNI ✅
No unnecessary abstractions. Data is plain TypeScript arrays. No state management library needed. No theming provider — Tailwind v4 CSS variables in `globals.css` handle the pastel theme. No new dependencies required beyond the existing stack.

### Principle V — Quality Gates (NON-NEGOTIABLE) ✅
All work must pass before merge:
- `npm run lint` — zero ESLint errors
- `npx tsc --noEmit` — zero TypeScript errors
- `npm run build` — production build succeeds

**Gate result: PASS — no violations; proceed to implementation**

## Project Structure

### Documentation (this feature)

```
specs/001-dog-walker-website/
├── plan.md              # This file (/speckit.plan output)
├── research.md          # Phase 0 output (/speckit.plan)
├── data-model.md        # Phase 1 output (/speckit.plan)
├── quickstart.md        # Phase 1 output (/speckit.plan)
└── tasks.md             # Phase 2 output (/speckit.tasks — NOT created here)
```

### Source Code (repository root)

```
app/
├── layout.tsx               # Root layout: NavBar + Footer + font/metadata
├── page.tsx                 # Home page
├── globals.css              # Tailwind import + pastel theme CSS variables
├── services/
│   └── page.tsx             # Services page (3 service cards)
├── about/
│   └── page.tsx             # About page (insurance + certifications)
└── pack/
    └── page.tsx             # Pack page (12 dog profile cards)

components/
├── layout/
│   ├── NavBar.tsx           # Site-wide navigation bar
│   └── Footer.tsx           # Site-wide footer
├── home/
│   └── Hero.tsx             # Home page hero section
├── services/
│   └── ServiceCard.tsx      # Individual service display card
├── pack/
│   └── DogCard.tsx          # Individual dog profile card
└── about/
    └── CredentialCard.tsx   # Insurance/certification display card

data/
├── services.ts              # Mock service data (3 entries)
└── dogs.ts                  # Mock dog profiles (12 entries)
```

**Structure Decision**: Single Next.js App Router project. No backend/frontend split needed — all content is static, served from local TypeScript files. Components live at root `components/` per Next.js App Router convention. Data files live at root `data/` alongside `app/` and `components/`.
