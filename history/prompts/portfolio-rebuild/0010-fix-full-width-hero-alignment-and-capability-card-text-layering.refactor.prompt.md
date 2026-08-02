---
id: 0010
title: Fix full width hero alignment and capability card text layering
stage: refactor
date: 2026-08-02
surface: agent
model: Gemini 3.6 Flash (High)
feature: portfolio-rebuild
branch: main
user: mohsin
command: none
labels: ["layout-fix", "hero", "card-canvas", "text-legibility", "z-index", "refactor"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - components/three/card-canvas.tsx
  - app/page.tsx
  - app/about/about-client.tsx
tests:
  - npm run build
---

## Prompt

Fix two layout issues:

1. Full-width hero/landing sections: On the Home page and About page, the hero/landing content area is constrained to a narrower width than the rest of the page instead of spanning the full viewport width (or matching the same max-width container used by the header/footer, e.g. max-w-6xl or similar, consistently centered with equal side padding). Inspect the hero section's wrapper on both pages and remove any incorrect fixed width, unnecessary max-width, or margin that's causing it to sit narrower than the page shell. It should align edge-to-edge with the header/footer container width, with consistent horizontal padding (e.g. px-5 sm:px-8) matching the rest of the site.

2. Capability card canvas overlapping text: In the "Core Capabilities" section on the Home page, the enlarged 3D wireframe shapes are now rendering on top of the card's title and description text, causing an unreadable overlap (see attached screenshot — the shape visually covers "Agentic Workflows", "Lightweight Web", "Practical AI" and their description paragraphs). Fix the layering and sizing so:
   - The Canvas/3D shape sits behind the text content using a lower stacking context (e.g. the canvas wrapper gets position: absolute with a negative z-index or z-0, while the text content wrapper gets position: relative with z-10, matching the original CapabilityCard.tsx pattern where the 3D canvas is a decorative background layer behind the card's text).
   - Reduce the shape scale slightly from the last increase if needed so it reads as a background accent rather than overwhelming the card — aim for the shape filling roughly 70-85% of the card's visual area, positioned so it doesn't visually collide with the title/description text block, while still being clearly larger and more prominent than the original (small) version.
   - Ensure text remains fully legible: consider adding a subtle radial dark gradient or reduced shape opacity behind the text block area specifically, or shifting the shape's canvas anchor point so it's weighted toward the card's empty space (e.g. top-right, as originally) rather than centered directly behind the text.

Reference components/CapabilityCard.tsx and components/CardCanvas.tsx original layering approach (text in a "relative" wrapper on top, canvas absolutely positioned behind with pointer-events: none) to restore correct stacking while keeping the larger shape size.

## Response snapshot

Resolved both layout and legibility issues:
1. **Hero Alignment**: Removed restrictive inner padding (`rounded-3xl p-6 sm:p-8`) from the hero section wrappers in [`app/page.tsx`](file:///home/mohsin/portfolio/app/page.tsx) and [`app/about/about-client.tsx`](file:///home/mohsin/portfolio/app/about/about-client.tsx). The hero content now aligns edge-to-edge with the `max-w-6xl` container matching the site header, footer, info strip, and page grids.
2. **Card Canvas Layering & Text Legibility**:
   - Updated [`CardCanvas`](file:///home/mohsin/portfolio/components/three/card-canvas.tsx) outer wrapper to `position: absolute; inset: 0; z-index: 0; pointer-events: none`.
   - Anchored shape positions to `[0.7, 0.35, 0]` (top-right empty space of cards) with ~75% visual scale and `opacity: 0.35`.
   - In [`app/page.tsx`](file:///home/mohsin/portfolio/app/page.tsx), elevated text wrappers to `relative z-10` and inserted a soft dark gradient mask (`z-[1]`), guaranteeing 100% crisp text legibility while displaying the 3D wireframe shapes as background visual accents.

## Outcome

- ✅ Impact: Hero section bounds perfectly align with header/footer containers, and 3D card canvases sit cleanly behind text without text collisions.
- 🧪 Tests: `npm run build` completed successfully.
- 📁 Files: `components/three/card-canvas.tsx`, `app/page.tsx`, `app/about/about-client.tsx`
- 🔁 Next prompts: None
- 🧠 Reflection: Proper stacking contexts (`z-0` canvas, `z-1` gradient, `z-10` text) ensure aesthetics and legibility co-exist.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): default
- Next experiment (smallest change to try): none
