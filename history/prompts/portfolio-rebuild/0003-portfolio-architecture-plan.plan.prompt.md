---
id: "0003"
title: "Portfolio architecture plan"
stage: "plan"
date: "2026-08-01"
surface: "agent"
model: "Gemini 3.6 Flash"
feature: "portfolio-rebuild"
branch: "main"
user: "mohsin"
command: "/sp.plan Implement using Next.js 15+ App Router with React 19 and TypeScript in strict mode"
labels: ["plan", "architecture", "nextjs", "app-router", "r3f", "oklch"]
links:
  spec: "specs/portfolio-rebuild/spec.md"
  ticket: null
  adr: null
  pr: null
files:
  - "specs/portfolio-rebuild/plan.md"
  - "history/prompts/portfolio-rebuild/0003-portfolio-architecture-plan.plan.prompt.md"
tests: []
---

## Prompt

/sp.plan Implement using Next.js 15+ App Router with React 19 and TypeScript in strict mode. Use Tailwind CSS v4 with the existing noir/gold oklch design tokens ported into globals.css via @theme. Use shadcn/ui (new-york style) for base UI primitives, matching the components already in use (button, dialog, card, etc.).

Directory structure:
- app/ — route segments: app/page.tsx (home), app/projects/page.tsx, app/about/page.tsx, app/contact/page.tsx, app/layout.tsx (root layout with header/footer/providers), each with its own metadata export.
- components/ui/ — shadcn primitives.
- components/ — custom shared components: SiteHeader, SiteFooter, PageShell, Logo, CapabilityCard, ProjectCard, ProjectModal, SkillBar, TimelineItem, FloatingChat, PageTransition.
- components/three/ — all Three.js/R3F components, dynamically imported with ssr:false: HeroObject, HeroCanvas, CardCanvas, OrbitScene.
- lib/ — utilities: cn() helper, site config/constants (email, social links, project data, skills data, timeline data) as typed exports.
- All Three.js-related components must be Client Components, dynamically imported via next/dynamic with ssr:false and a lightweight loading fallback (pulsing circle or static gradient), and must respect prefers-reduced-motion by disabling rotation/float animation.
- Fonts (Fraunces, Space Grotesk, JetBrains Mono) loaded via next/font/google in the root layout, not runtime <link> tags.
- Page transition and gold-sweep effect implemented as a Client Component wrapping children in the root layout, keyed on the Next.js pathname (from next/navigation's usePathname), triggering a CSS animation on route change.
- Content data (project list, skills list, timeline entries, nav links) centralized in lib/site-config.ts and lib/content.ts as typed constants, imported by the relevant page/section components — not inlined per-route.
- Mobile navigation uses a simple state-toggled Client Component; desktop nav uses next/link with pathname-based active-state styling.
- Contact page uses a plain mailto: anchor link; no form libraries, no server actions for submission.
- Floating chat widget is a self-contained Client Component with local React state only (no backend call), matching existing UX (toggle button, message list, composer, simulated delayed reply).

## Response snapshot

Created architecture plan `specs/portfolio-rebuild/plan.md` defining scope, dependencies, system architecture, data contracts (`lib/site-config.ts`, `lib/content.ts`), non-functional requirements (p95 latency, Core Web Vitals, accessibility, SEO metadata), risk mitigations, and evaluation criteria.

## Outcome

- ✅ Impact: Comprehensive technical architecture planned and documented.
- 🧪 Tests: N/A (Architecture Plan phase)
- 📁 Files: `specs/portfolio-rebuild/plan.md`, `history/prompts/portfolio-rebuild/0003-portfolio-architecture-plan.plan.prompt.md`
- 🔁 Next prompts: Run `/sp.tasks` to create concrete task breakdown.
- 🧠 Reflection: Plan addresses all user specifications including strict RSC separation, dynamic R3F loading, central content constants, and OKLCH Tailwind v4 themes.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
