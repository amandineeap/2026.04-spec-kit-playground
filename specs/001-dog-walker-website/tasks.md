# Tasks: Dog Walker Website

**Input**: Design documents from `specs/001-dog-walker-website/`
**Prerequisites**: plan.md ✅ | spec.md ✅ | research.md ✅ | data-model.md ✅
**Tests**: Not requested — no test tasks generated.
**Organization**: Tasks grouped by user story for independent, commit-granular delivery.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no shared dependencies)
- **[Story]**: User story this task belongs to (US1–US4)
- Each task = one focused, committable unit of work

---

## Phase 1: Setup

**Purpose**: Establish shared foundation — theme and shared type definitions.

- [x] T001 Configure pastel theme tokens and base styles in `app/globals.css` — add `@theme inline` block with `--color-blush`, `--color-lavender`, `--color-mint`, `--color-peach`, `--color-sky`, `--color-cream`, `--color-bark`, `--color-paw` CSS variables; set `background` to `cream`, `color` to `bark`; remove default Next.js boilerplate styles
- [x] T002 [P] Create shared TypeScript interfaces in `data/types.ts` — define and export `Service`, `Dog`, and `Credential` interfaces exactly as specified in `specs/001-dog-walker-website/data-model.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Root layout with navigation — required by every page before any user story can be rendered.

**⚠️ CRITICAL**: All user story phases depend on this phase completing first.

- [x] T003 [P] Create `components/layout/NavBar.tsx` — accessible `<nav aria-label="Main navigation">` with a `<ul>` of `<li><Link>` items to Home (`/`), Services (`/services`), About (`/about`), Pack (`/pack`); style with Tailwind using pastel theme tokens; active link highlight using `usePathname`; mark as `'use client'` because it uses `usePathname`
- [x] T004 [P] Create `components/layout/Footer.tsx` — simple `<footer>` with business name placeholder, short tagline, and copyright year; styled with `bg-bark text-cream` for contrast
- [x] T005 Update `app/layout.tsx` — add skip-to-content anchor (`<a href="#main-content">` visually hidden, visible on focus), import and render `NavBar` above and `Footer` below `<main id="main-content">`; update `metadata.title` and `metadata.description` with dog walker business placeholders

**Checkpoint**: Run `npm run dev` — verify NavBar and Footer appear on all routes at `http://localhost:3000`

---

## Phase 3: User Story 1 — Browse Services & Pricing (Priority: P1) 🎯 MVP

**Goal**: Visitors can navigate to `/services` and see all three service offerings (solo walk, group walk, daycare) each with a name, description, and price.

**Independent Test**: Navigate to `http://localhost:3000/services` — confirm three service cards are visible, each showing name, description, and price without additional interaction.

### Implementation

- [x] T006 [P] [US1] Create `data/services.ts` — define and export `services: Service[]` with exactly 3 entries: `{ id: 'solo-walk', name: 'Solo Walk', description: '...', price: '$25 per walk', icon: '🐕' }`, `{ id: 'group-walk', name: 'Group Walk', description: '...', price: '$18 per walk', icon: '🐕‍🦺' }`, `{ id: 'daycare', name: 'Daycare', description: '...', price: '$40 per day', icon: '🏠' }`; import `Service` from `data/types.ts`
- [x] T007 [P] [US1] Create `components/services/ServiceCard.tsx` — accept `service: Service` prop; render an `<article>` with icon, name as `<h2>`, description, and price in a visually distinct badge; styled with Tailwind pastel theme (e.g., `bg-blush` card background); include `aria-label` on the article
- [x] T008 [US1] Create `app/services/page.tsx` — import `services` from `data/services.ts` and `ServiceCard`; render a page with `<h1>Our Services</h1>` and a `<section>` grid (`grid grid-cols-1 sm:grid-cols-3 gap-6`); map services to `<ServiceCard key={service.id} service={service} />`; this is a Server Component (no `'use client'`)

**Checkpoint**: `npm run dev` — visit `/services`, confirm 3 cards with names, descriptions, prices visible. Run `npx tsc --noEmit` — zero errors.

---

## Phase 4: User Story 2 — Verify Credentials & Trust (Priority: P2)

**Goal**: Visitors can navigate to `/about` and see the dog walker's insurance coverage details and professional certifications.

**Independent Test**: Navigate to `http://localhost:3000/about` — confirm at least one insurance entry and at least one certification entry are visible with title and description.

### Implementation

- [x] T009 [P] [US2] Create `components/about/CredentialCard.tsx` — accept `credential: Credential` prop; render an `<article>` with a type badge (`insurance` vs `certification` styled differently — e.g., `bg-mint` for insurance, `bg-lavender` for certification), title as `<h2>`, description, and optional issuer; import `Credential` from `data/types.ts`
- [x] T010 [US2] Create `app/about/page.tsx` — define a typed `credentials: Credential[]` constant inline with mock data (1 insurance entry + 2 certification entries as specified in `specs/001-dog-walker-website/data-model.md`); import `CredentialCard`; render `<h1>About Us</h1>`, a brief bio paragraph (placeholder text), and a `<section>` listing all credentials via `<CredentialCard>`; Server Component

**Checkpoint**: `npm run dev` — visit `/about`, confirm insurance section and certifications are visible. Run `npx tsc --noEmit` — zero errors.

---

## Phase 5: User Story 3 — Meet the Pack (Priority: P3)

**Goal**: Visitors can navigate to `/pack` and see exactly 12 dog profiles, each showing at minimum the dog's name and breed.

**Independent Test**: Navigate to `http://localhost:3000/pack` — confirm exactly 12 dog cards are visible, each displaying a name and breed. Count them: must be exactly 12.

### Implementation

- [x] T011 [P] [US3] Create `data/dogs.ts` — define and export `dogs: Dog[]` with exactly 12 entries; each entry has `id`, `name`, `breed`, `emoji`, and optional `description`; use names: Biscuit, Mochi, Pepper, Daisy, Bruno, Luna, Archie, Coco, Max, Bella, Finn, Rosie; assign varied breeds and emoji; import `Dog` from `data/types.ts`
- [x] T012 [P] [US3] Create `components/pack/DogCard.tsx` — accept `dog: Dog` prop; render an `<article aria-label="{name} — {breed}">` with a large emoji avatar, name as `<h2>`, breed, and optional description; styled with Tailwind (e.g., `bg-peach` card background, rounded corners, shadow); import `Dog` from `data/types.ts`
- [x] T013 [US3] Create `app/pack/page.tsx` — import `dogs` from `data/dogs.ts` and `DogCard`; render `<h1>The Pack</h1>` with a brief intro paragraph; render a responsive grid (`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4`); map all 12 dogs to `<DogCard key={dog.id} dog={dog} />`; Server Component

**Checkpoint**: `npm run dev` — visit `/pack`, manually count: exactly 12 cards visible. Run `npx tsc --noEmit` — zero errors.

---

## Phase 6: User Story 4 — Get a First Impression (Priority: P4)

**Goal**: First-time visitors land on `/` and immediately understand the business, its name, and how to navigate to all other pages.

**Independent Test**: Visit `http://localhost:3000` — confirm business name/headline, tagline, and clearly labeled navigation CTAs to Services, About, and Pack are all visible without scrolling on a 1280×800 viewport.

### Implementation

- [x] T014 [P] [US4] Create `components/home/Hero.tsx` — render a full-width hero section with a headline (business name placeholder), tagline, and three CTA `<Link>` buttons to `/services`, `/about`, `/pack`; styled with `bg-cream`, large typography, and pastel accent buttons; accessible button text (`View Our Services`, `Meet the Team`, `Meet the Pack`)
- [x] T015 [US4] Update `app/page.tsx` — remove all default Next.js boilerplate content; import and render `Hero`; optionally add a brief "Why choose us" section below the hero with 2–3 short bullet points (placeholders); Server Component

**Checkpoint**: `npm run dev` — visit `/`, confirm hero is visible, all three CTA links navigate correctly. Run `npx tsc --noEmit` — zero errors.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility hardening, responsive verification, and quality gate sign-off.

- [x] T016 [P] Accessibility hardening pass — review and fix: (1) add `skip-to-content` focus visible styles in `app/globals.css`; (2) verify each page has exactly one `<h1>` and cards use `<h2>`; (3) confirm all emoji spans use `role="img" aria-label="..."` in `DogCard.tsx`, `ServiceCard.tsx`, `Hero.tsx`; (4) verify NavBar `usePathname` active link adds `aria-current="page"`
- [x] T017 [P] Mobile responsiveness review — open DevTools at 375px and verify: (1) NavBar links remain visible and tappable; (2) Services grid stacks to single column; (3) Pack grid shows 2 columns; (4) Hero text is readable; fix any overflow or clipping issues in the relevant component files
- [x] T018 Quality gates sign-off — run `npm run lint`, `npx tsc --noEmit`, and `npm run build` from repo root; fix every reported error before marking complete; confirm build output in `.next/` exists without errors

**Checkpoint**: All quality gates pass. Visit all 4 pages at 375px and 1280px — all content readable, navigation functional.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately; T001 and T002 can run in parallel
- **Foundational (Phase 2)**: Depends on Phase 1 completion; T003 and T004 can run in parallel; T005 depends on T003 + T004
- **User Stories (Phases 3–6)**: All depend on Phase 2 completion; can then run in priority order or in parallel
- **Polish (Phase 7)**: Depends on all user story phases; T016 and T017 can run in parallel; T018 must be last

### User Story Dependencies

- **US1 (P1)**: Starts after Phase 2; T006 and T007 can run in parallel; T008 depends on both
- **US2 (P2)**: Starts after Phase 2; T009 independent; T010 depends on T009
- **US3 (P3)**: Starts after Phase 2; T011 and T012 can run in parallel; T013 depends on both
- **US4 (P4)**: Starts after Phase 2; T014 independent; T015 depends on T014

### Parallel Opportunities

```text
Phase 1:   T001 ─┬─ (both immediately)
           T002 ─┘

Phase 2:   T003 ─┬─ then T005
           T004 ─┘

Phase 3:   T006 ─┬─ then T008  (US1)
           T007 ─┘

Phase 4:   T009 ─── then T010  (US2)

Phase 5:   T011 ─┬─ then T013  (US3)
           T012 ─┘

Phase 6:   T014 ─── then T015  (US4)

Phase 7:   T016 ─┬─ then T018
           T017 ─┘
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 (T001, T002)
2. Complete Phase 2 (T003 → T004 → T005)
3. Complete Phase 3 (T006 + T007 → T008)
4. **STOP and VALIDATE**: Visit `/services`, confirm 3 service cards visible — MVP is live
5. Run `npx tsc --noEmit` + `npm run lint` — confirm zero errors

### Incremental Delivery (commit-by-commit)

Each task maps to exactly one commit. Suggested commit messages:

| Task | Suggested commit message |
|------|--------------------------|
| T001 | `feat: add pastel theme tokens to globals.css` |
| T002 | `feat: add shared data type definitions` |
| T003 | `feat: add NavBar component with navigation` |
| T004 | `feat: add Footer component` |
| T005 | `feat: update root layout with NavBar, Footer, skip-to-content` |
| T006 | `feat: add services mock data` |
| T007 | `feat: add ServiceCard component` |
| T008 | `feat: add services page` |
| T009 | `feat: add CredentialCard component` |
| T010 | `feat: add about page with credentials` |
| T011 | `feat: add dogs mock data (12 entries)` |
| T012 | `feat: add DogCard component` |
| T013 | `feat: add pack page` |
| T014 | `feat: add Hero component` |
| T015 | `feat: update home page with Hero and CTAs` |
| T016 | `fix: accessibility hardening pass` |
| T017 | `fix: mobile responsiveness review` |
| T018 | `chore: quality gates sign-off` |

---

## Notes

- No tests requested — quality gates (`lint`, `tsc`, `build`) are the verification mechanism
- [P] tasks can be committed in any order relative to each other — no file conflicts
- Each checkpoint confirms the user story is independently testable before moving on
- Pastel color tokens (`bg-blush`, `bg-mint`, etc.) become available after T001
- All pages are React Server Components unless `'use client'` is explicitly needed (only NavBar requires it for `usePathname`)
