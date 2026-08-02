# Muhammad Mohsin — Interactive Portfolio Constitution

## Project Context
- **Project Name**: Muhammad Mohsin — Interactive Portfolio
- **Type**: Rebuild / Migration of existing Lovable-generated site (originally TanStack Start) into Next.js.
- **Stack**: Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (new-york style), Radix UI primitives, Three.js (`three`, `@react-three/fiber`, `@react-three/drei`).
- **Visual Design & UX**: Noir & gold theme, Fraunces / Space Grotesk / JetBrains Mono typography, 3D accents via Three.js / R3F (subtle accents, never spectacle). Preserve existing design, copy, routes, and UX faithfully.

---

## Core Principles

### I. Component-Driven Architecture
Every reusable visual pattern (cards, buttons, section headers, chips, nav items) must be extracted into its own component under a clear `components/` directory structure. No copy-pasted JSX blocks across routes.
- **Rationale**: Maximize maintainability and produce clean, modular, reusable code.

### II. Performance-First Rendering
Default to React Server Components (RSC). Client Components (`"use client"`) are restricted strictly to elements requiring interactivity, browser APIs, or 3D rendering (e.g., 3D canvases, chat widget, mobile nav toggle, interactive hover state cards).
- Heavy client libraries (`three`, `@react-three/fiber`, `@react-three/drei`) must be lazy-loaded dynamically with `ssr: false` and never included in initial server bundles.
- Images must use `next/image` for automatic optimization.
- Fonts must use `next/font` (no runtime `<link>` tags to Google Fonts).
- **Rationale**: Fast initial page load and top-tier Core Web Vitals.

### III. Design Token Discipline
All colors, border radii, and spacing derive from CSS custom properties defined centrally (noir/gold oklch tokens).
- No hardcoded hex or oklch colors or arbitrary Tailwind color utility overrides inside components.
- **Rationale**: Maintain visual consistency and support clean re-theming aligned with the existing design system.

### IV. Accessibility & Responsiveness
Mobile-first layout across all screens.
- All interactive elements must be fully keyboard-navigable and screen-reader labeled (`aria-label` on icon-only buttons, semantic headings `h1`-`h6`).
- Respect `prefers-reduced-motion` by disabling or simplifying all complex animations and 3D auto-rotations.
- **Rationale**: Inclusive, accessible experience for all users and devices.

### V. Content Centralization
All configurable content and placeholder data (email, social profiles, project metadata, bio copy) must reside in a single, strictly-typed config/constants file (`config/constants.ts` or `config/site.ts`).
- Content must not be scattered inline across route files.
- **Rationale**: Allow easy user replacement of social, project, and bio content without modifying component code.

### VI. Type Safety
Strict TypeScript across the entire codebase.
- No `any` type usage unless explicitly justified with inline comment rationale.
- Export props interfaces for all reusable components.
- **Rationale**: Prevent runtime errors and enforce clean API contracts across components.

### VII. No Backend Scope Creep
Maintain a pure frontend scope.
- No database, no authentication framework, no server-side contact form endpoints (mailto link only).
- Floating chat widget remains UI-only / stubbed unless explicitly instructed otherwise by the user.
- **Rationale**: Keep architecture simple, secure, fast, and easy to deploy as a static or serverless Next.js application.

---

## Quality Gates

1. **Metadata Completeness**: Every route/page must define complete Next.js metadata (title, description, OpenGraph, Twitter card) matching the original design specifications.
2. **Performance Non-Regression**: Core Web Vitals and Lighthouse metrics must meet high performance baselines. 3D and canvas animations must serve as subtle visual accents without blocking thread execution or page load.
3. **Documentation**: The `README.md` must be kept updated following implementation, clearly describing project setup, directory structure, and instructions for replacing content placeholders.

---

## Governance

- This Constitution supersedes ad hoc design or implementation decisions made during `/sp.plan` and `/sp.implement`.
- Any proposed deviation (e.g., converting a Server Component to Client Component without interactivity needs, or introducing hardcoded inline styles) must be explicitly flagged and justified.
- Amendments to this Constitution require explicit user approval via `/sp.constitution` with rationale recorded.

**Version**: 1.0.0 | **Ratified**: 2026-08-01 | **Last Amended**: 2026-08-01
