<!--
SYNC IMPACT REPORT
==================
Version change: [template] → 1.0.0 (initial ratification — all placeholders resolved)

Modified principles:
  (none — first-time fill from template)

Added sections:
  - Core Principles (5 principles defined)
  - Technology Stack
  - Development Workflow
  - Governance

Removed sections:
  (none)

Templates reviewed:
  ✅ .specify/templates/plan-template.md — Constitution Check section aligns with principles below
  ✅ .specify/templates/spec-template.md — Mandatory sections (User Scenarios, Requirements, Success Criteria) consistent
  ✅ .specify/templates/tasks-template.md — Phase structure and parallel-execution guidance consistent
  ✅ .specify/templates/constitution-template.md — Source template; no changes needed

Follow-up TODOs:
  (none — all fields resolved from repo context)
-->

# SpecKit Playground Constitution

## Core Principles

### I. Specification-First

Every feature MUST go through the full SpecKit workflow before implementation begins:
`/speckit.specify` → `/speckit.clarify` → `/speckit.plan` → `/speckit.tasks` → `/speckit.implement`.

Skipping or reordering these stages is not permitted. The specification artifact in
`specs/<###-feature-name>/spec.md` is the source of truth for scope; implementation
MUST NOT exceed the agreed spec without a new specify cycle.

### II. Type Safety (NON-NEGOTIABLE)

TypeScript strict mode MUST be enabled at all times. The use of `any` is forbidden
except where a third-party library offers no typed alternative, in which case the
exception MUST be narrowed with a cast and annotated with a `// eslint-disable` comment
explaining why. All public component props and service interfaces MUST carry explicit
type annotations. Runtime type assertions (`as X`) require a documented justification.

### III. Component-Driven Development

UI features MUST be built as isolated, reusable React components. Each component:
- MUST accept props only (no direct context reads in leaf components unless unavoidable)
- MUST be independently renderable and testable in isolation
- MUST NOT embed business logic; delegate to hooks or service modules

Page-level files in `app/` are thin orchestrators. Component complexity escalates
via composition, not inheritance.

### IV. Simplicity & YAGNI

Build only what the current spec requires. Abstractions, utilities, and shared helpers
MUST NOT be introduced until used in at least two distinct places. Dependencies MUST be
justified at PR time; each new package addition requires a short rationale comment in
the PR description. Prefer Next.js and React built-in primitives over third-party
alternatives when capability is equivalent.

### V. Quality Gates (NON-NEGOTIABLE)

All of the following MUST pass before any branch is merged to `main`:
- `npm run lint` — zero ESLint errors (warnings reviewed, not blocking)
- `npx tsc --noEmit` — zero TypeScript errors
- `npm run build` — production build succeeds without errors

No dead code, commented-out blocks, or TODO comments MAY be merged without a linked
spec item. Unused imports and variables are linting errors and treated as build failures.

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4 (utility-first; no custom CSS unless Tailwind cannot express the style)
- **Package Manager**: npm
- **Linting**: ESLint with `eslint-config-next`
- **Target Runtime**: Node.js (server components) + browser (client components)
- **Deployment Target**: Vercel (primary) or any Node.js-compatible host

Technology changes (major version bumps, new frameworks) require a constitution amendment
at MINOR version or above before adoption.

## Development Workflow

All feature work MUST follow this lifecycle:

1. **Branch**: feature branches named `###-kebab-feature-name` created from `main`
2. **Specify**: `/speckit.specify` generates `specs/<###>/spec.md`
3. **Clarify**: `/speckit.clarify` resolves ambiguities before planning
4. **Plan**: `/speckit.plan` produces implementation plan and research artefacts
5. **Tasks**: `/speckit.tasks` generates the actionable task list
6. **Implement**: `/speckit.implement` executes tasks with constitution compliance
7. **PR**: opened against `main`; requires Quality Gates (Principle V) to pass
8. **Merge**: squash merge preferred; branch deleted post-merge

Hotfixes for production bugs MAY bypass the specify/clarify stages but MUST still
satisfy Quality Gates and be back-filled with a spec item within one working day.

## Governance

This constitution supersedes all other development guidelines for this repository.
Conflicts between the constitution and any other document resolve in favour of the
constitution.

**Amendment procedure**:
1. Open a PR that modifies this file
2. Increment `CONSTITUTION_VERSION` per semver rules (MAJOR/MINOR/PATCH as defined above)
3. Update `LAST_AMENDED_DATE` to the merge date
4. Run the `/speckit-constitution` skill to propagate changes to dependent templates
5. PR description MUST summarise what changed and why

**Compliance**: All PRs and code reviews MUST verify adherence to the five Core Principles.
Violations noted during review block merge until resolved or formally exempted via a
constitution amendment.

**Version policy**:
- MAJOR: principle removal, redefinition, or backward-incompatible governance change
- MINOR: new principle or section added, material guidance expansion
- PATCH: clarifications, wording improvements, typo fixes

**Version**: 1.0.0 | **Ratified**: 2026-04-10 | **Last Amended**: 2026-04-10
