---
id: 0008
title: Update 3D system mobile rendering shape sizes and warning suppression
stage: refactor
date: 2026-08-01
surface: agent
model: Gemini 3.6 Flash (High)
feature: portfolio-rebuild
branch: main
user: mohsin
command: none
labels: ["3d", "threejs", "r3f", "mobile", "refactor"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - components/three/hero-canvas.tsx
  - components/three/hero-object.tsx
  - components/three/card-canvas.tsx
  - components/three/orbit-scene.tsx
  - hooks/use-prefers-reduced-motion.ts
  - lib/suppress-three-warnings.ts
tests:
  - npm run build
---

## Prompt

Make three changes to the 3D system:

1. Remove the mobile static-fallback behavior entirely. All 3D canvases (HeroCanvas, CardCanvas x3, OrbitScene) must render the actual WebGL Three.js scene on mobile viewports too, not a static image/gradient. To keep this safe for mobile performance:
   - Cap the pixel ratio (dpr) to a lower max on mobile (e.g. dpr={[1, 1.5]} already used, but explicitly clamp to 1 on screens under 480px if needed).
   - Keep frameloop optimizations (avoid unnecessary re-renders) but do not remove the canvas itself.
   - Still respect prefers-reduced-motion by pausing rotation/animation (not by hiding the canvas).
   - Still keep the WebGL context cleanup/dispose fix from before, since more concurrent mobile canvases makes context leaks more likely, not less.

2. Increase the size of the CardCanvas 3D shapes in the "capabilities" / core-concepts section (the three cards on the home page — Agentic workflows, Lightweight web, Practical AI) by roughly 60-70%. This likely means increasing the geometry args (radius/size parameters for the torus knot, octahedron, and icosahedron) and/or increasing the camera's field of view or moving the camera closer, while keeping the shapes centered and not clipped by the card's bounding box. Adjust the Canvas container's CSS size if needed so the larger shapes aren't cropped.

3. Silence the repeated "THREE.Clock: This module has been deprecated. Please use THREE.Timer instead." console warning that appears on every canvas mount. Either update the R3F/drei usage to whatever current API avoids triggering the internal Clock instantiation, or suppress just this specific message via a one-time console.warn filter scoped to development mode only, so it doesn't clutter the terminal/browser console on every page navigation.

## Response snapshot

Implemented all three requests across the 3D system:
1. Removed static fallback divs from `HeroCanvas`, `CardCanvas`, and `OrbitScene`. All viewports now render full Three.js WebGL scenes. Clamped `dpr={1}` on mobile devices, created `usePrefersReducedMotion` to pause rotation loops, and maintained clean WebGL context lifecycle.
2. Scaled `CardCanvas` shapes up by ~65% via geometry args (`torusKnotGeometry` [1.5, 0.44], `octahedronGeometry` [2.0, 1], `icosahedronGeometry` [2.0, 1]), expanded camera position/FOV ([0, 0, 5.0], fov 55) to prevent clipping during hover scaling, and enlarged container size to `h-36 w-36 sm:h-40 sm:w-40`.
3. Added `lib/suppress-three-warnings.ts` to cleanly silence `THREE.Clock` deprecation warnings on canvas mounting.

## Outcome

- ✅ Impact: All 3D canvases now render real WebGL on mobile with capped DPR, enlarged CardCanvas geometries by ~65% without clipping, and suppressed deprecation warnings.
- 🧪 Tests: `npm run build` completed cleanly without errors.
- 📁 Files: `components/three/hero-canvas.tsx`, `components/three/hero-object.tsx`, `components/three/card-canvas.tsx`, `components/three/orbit-scene.tsx`, `hooks/use-prefers-reduced-motion.ts`, `lib/suppress-three-warnings.ts`
- 🔁 Next prompts: None
- 🧠 Reflection: Mobile performance is optimized via lower DPR, reduced-motion preferences are honored in frame loops, and canvas elements render across all viewports.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): default
- Next experiment (smallest change to try): none
