---
id: "0004"
title: "Update plan pure CSS animations and mobile 3D fallback"
stage: "plan"
date: "2026-08-01"
surface: "agent"
model: "Gemini 3.6 Flash"
feature: "portfolio-rebuild"
branch: "main"
user: "mohsin"
command: "/sp.plan Update the plan: remove Framer Motion entirely from the dependency list and architecture"
labels: ["plan", "pure-css", "intersection-observer", "mobile-fallback", "performance"]
links:
  spec: "specs/portfolio-rebuild/spec.md"
  ticket: null
  adr: null
  pr: null
files:
  - "specs/portfolio-rebuild/plan.md"
  - "history/prompts/portfolio-rebuild/0004-update-plan-pure-css-animations-and-mobile-3d-fallback.plan.prompt.md"
tests: []
---

## Prompt

/sp.plan Update the plan: remove Framer Motion entirely from the dependency list and architecture. Replace it with the original CSS-based approach:

- Page transitions and the gold light-sweep overlay must be implemented using pure CSS @keyframes (a page-in fade/lift/blur/scale animation, and a page-sweep translucent gold gradient animation), triggered by re-keying the content wrapper on route change (using the pathname from usePathname()), exactly matching the original TanStack implementation's approach — no animation library dependency.
- Skill bar progress fills and timeline item entrance animations must use the native browser IntersectionObserver API (no library), toggling a "visible" state per element when it scrolls into view, with CSS transitions handling the actual animation (width transition for skill bars, opacity/transform transition for timeline items).
- All animations must respect prefers-reduced-motion via a CSS media query that disables or shortens transitions and hides the page-sweep effect.
- Remove Framer Motion from the Key Decisions table and any NFR or task references to it.

Also add an explicit non-functional requirement: all Three.js/R3F canvas components (HeroObject, CardCanvas, OrbitScene) must detect small viewports (below the mobile breakpoint, matching the existing useIsMobile hook logic at 768px) and render a static fallback (a simple gold radial-gradient or SVG mark) instead of mounting the WebGL canvas, to protect performance and battery life on mobile devices.

## Response snapshot

Updated architecture plan `specs/portfolio-rebuild/plan.md` to completely eliminate Framer Motion in favor of pure CSS `@keyframes` and native `IntersectionObserver` API. Added explicit NFR for mobile viewport (<768px) WebGL unmounting in favor of static gold radial-gradient/SVG fallback.

## Outcome

- ✅ Impact: Architecture updated for zero JS animation library dependencies and optimized mobile performance.
- 🧪 Tests: N/A (Architecture Plan phase)
- 📁 Files: `specs/portfolio-rebuild/plan.md`, `history/prompts/portfolio-rebuild/0004-update-plan-pure-css-animations-and-mobile-3d-fallback.plan.prompt.md`
- 🔁 Next prompts: Generate task breakdown or proceed to implementation.
- 🧠 Reflection: Eliminating Framer Motion reduces bundle size and runtime CPU usage while retaining visual excellence.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
