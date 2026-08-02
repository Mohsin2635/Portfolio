---
id: "0001"
title: "Create portfolio constitution"
stage: "constitution"
date: "2026-08-01"
surface: "agent"
model: "Gemini 3.6 Flash"
feature: "none"
branch: "main"
user: "mohsin"
command: "/sp.constitution Create the governing constitution for \"Muhammad Mohsin — Interactive Portfolio\""
labels: ["constitution", "rules", "portfolio", "nextjs"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - ".specify/memory/constitution.md"
  - "history/prompts/constitution/0001-create-portfolio-constitution.constitution.prompt.md"
tests: []
---

## Prompt

/sp.constitution Create the governing constitution for "Muhammad Mohsin — Interactive Portfolio", a rebuild of an existing Lovable-generated site (originally TanStack Start) into Next.js.

## Project Context
- This is a migration/rebuild of an existing, working design — not a new design. The visual design, copy, routes, and UX (noir & gold theme, Fraunces/Space Grotesk/JetBrains Mono typography, 3D accents via Three.js/R3F) are already finalized and must be preserved faithfully.
- Target framework: Next.js (App Router), React 19, TypeScript, Tailwind CSS v4.
- UI primitives: shadcn/ui (new-york style), Radix UI underneath.
- 3D: three, @react-three/fiber, @react-three/drei — used only as subtle accents, never for spectacle.

## Core Principles

1. Component-Driven Architecture
   Every reusable visual pattern (cards, buttons, section headers, chips, nav items) must be extracted into its own component under a clear components/ directory. No copy-pasted JSX blocks across routes. Rationale: maintainability and the user's explicit requirement for reusable, non-messy code.

2. Performance-First Rendering
   Default to Server Components. Client Components ("use client") are only used where interactivity, browser APIs, or Three.js/R3F genuinely require it (3D canvases, chat widget, mobile nav toggle, hover-state cards). Heavy client-only libraries (three, @react-three/fiber, @react-three/drei) must be dynamically imported with ssr: false and lazy-loaded, never included in the initial server-rendered bundle. Images must use next/image. Fonts must use next/font (no runtime <link> tags to Google Fonts). Rationale: fast page load and good Core Web Vitals were explicitly requested.

3. Design Token Discipline
   All colors, radii, and spacing derive from CSS custom properties defined once (noir/gold oklch tokens). No hardcoded hex/oklch colors or arbitrary Tailwind color utilities inside components. Rationale: consistency and easy re-theming, matches the existing design system.

4. Accessibility & Responsiveness
   Mobile-first layout. All interactive elements keyboard-navigable and screen-reader labeled (aria-label on icon-only buttons, semantic headings). Reduced-motion (prefers-reduced-motion) must disable/simplify all animations and 3D auto-rotation.

5. Content Centralization
   Placeholder data that the user will edit (email, social links, project links, bio copy) lives in a single typed config/constants file, not scattered inline across route files. Rationale: user explicitly stated they will add real project/social links later themselves.

6. Type Safety
   Strict TypeScript. No `any` unless justified with a comment. Props interfaces exported where components may be reused.

7. No Backend Scope Creep
   This remains a frontend-only project: no database, no auth, no real contact-form submission (mailto only), no CMS. The floating chat widget stays UI-only/stubbed unless the user explicitly asks to wire a backend.

## Quality Gates
- Every new route/page must define Next.js metadata (title, description, OpenGraph, Twitter card) equivalent to what existed in the original TanStack `head()` blocks.
- Lighthouse/Core Web Vitals performance must not regress versus a plain static Next.js baseline — 3D and animation must be justified as accents, not defaults.
- README must be kept up to date after implementation, describing setup, structure, and how to replace placeholder content.

## Governance
This constitution supersedes ad hoc decisions during /sp.plan and /sp.implement. Any deviation (e.g., a Client Component that isn't clearly interactive, a hardcoded color) must be flagged and justified before implementation proceeds. Amendments require an explicit user-approved update via /sp.constitution, with a rationale recorded.

## Response snapshot

Created `.specify/memory/constitution.md` with 7 core principles (Component-Driven Architecture, Performance-First Rendering, Design Token Discipline, Accessibility & Responsiveness, Content Centralization, Type Safety, No Backend Scope Creep), quality gates, and governance rules.

## Outcome

- ✅ Impact: Established governing constitution for Next.js portfolio rebuild.
- 🧪 Tests: N/A (Documentation/Governance)
- 📁 Files: `.specify/memory/constitution.md`, `history/prompts/constitution/0001-create-portfolio-constitution.constitution.prompt.md`
- 🔁 Next prompts: Next feature creation via `/sp.feature` or architecture planning via `/sp.plan`.
- 🧠 Reflection: Constitution covers all tech stack mandates (Next.js App Router, React 19, Tailwind v4, Three.js/R3F, shadcn/ui), accessibility, design tokens, performance, and governance rules.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
