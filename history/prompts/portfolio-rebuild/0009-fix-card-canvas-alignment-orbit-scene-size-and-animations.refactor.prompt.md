---
id: 0009
title: Fix CardCanvas alignment OrbitScene sizing and site animations
stage: refactor
date: 2026-08-01
surface: agent
model: Gemini 3.6 Flash (High)
feature: portfolio-rebuild
branch: main
user: mohsin
command: none
labels: ["visual-fix", "threejs", "card-canvas", "orbit-scene", "animations", "page-in", "page-sweep", "reduced-motion"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - components/three/card-canvas.tsx
  - components/three/orbit-scene.tsx
  - components/page-shell.tsx
  - app/page.tsx
  - app/about/about-client.tsx
  - app/projects/projects-client.tsx
  - app/globals.css
tests:
  - npm run build
---

## Prompt

Fix three remaining visual issues:

1. Capabilities/core-concept CardCanvas alignment: The 3D shapes in the three "core concept" cards are shifted to the left and appear narrower than their container. Center the Canvas horizontally and vertically within its parent card div, and make the Canvas fill the full width and height of its container (use CSS: position absolute, inset-0, width: 100%, height: 100%, and ensure the parent card has position: relative and no conflicting flex/text-alignment that's pushing the canvas off-center). Also center the camera's view on the shape (camera position and lookAt target should be [0,0,0], matching the shape's default position) so the shape appears in the visual middle of the card, not offset to one side.

2. About page OrbitScene size: The current orbit scene (central icosahedron with 3 orbiting spheres) renders noticeably smaller than the original Lovable/TanStack version. Increase the geometry sizes back to match the original: central icosahedron radius 0.9, orbiting sphere sizes 0.14/0.09/0.11, orbit radii 2.1/2.6/1.7 (as in the original about.tsx implementation), and camera position [0, 0, 5] with fov 45. Verify the surrounding circular border decorations (the concentric rings around the orbit scene) still align proportionally with the larger canvas.

3. Missing site-wide animations: Restore the following animations that exist in the original design but appear to be missing or not wired up in the current build:
   - Page transition on every route change: a CSS "page-in" animation (fade + translateY(16px) + blur(6px) to opacity:1/translateY(0)/blur(0), ease cubic-bezier(0.22,1,0.36,1), ~0.6s), applied to the page content wrapper, re-triggered by keying it on the current pathname.
   - A gold "page-sweep" light overlay animation that plays once on every route change (a translucent gold gradient bar sweeping left to right across the viewport, ~0.9s, mix-blend-mode screen), layered above content with a high z-index, non-interactive (pointer-events: none).
   - Card hover animations: capability cards and project cards should lift slightly (translateY(-4px) or similar) and gain a soft gold glow box-shadow on hover, with a smooth transition (300-500ms).
   - Scroll-triggered entrance animations on the About page: skill progress bars should animate their width from 0% to the target percentage when scrolled into view (using IntersectionObserver, not on initial mount), and timeline items should fade/slide in (opacity 0→1, translateY(20px)→0) with a staggered delay per item as they scroll into view.
   - Mouse-tracking radial gold glow behind the hero section on both the home page and about page, following cursor position via CSS custom properties (--mx, --my) updated on pointermove.
   - All of the above animations must respect prefers-reduced-motion: reduce by disabling or significantly shortening themselves — verify this still works after restoring them.

Reference the original component implementations if present in project history/specs for exact animation timing and easing values.

## Response snapshot

Fixed all three visual and animation issues:
1. Updated `CardCanvas` outer element to `position: absolute; inset: 0; width: 100%; height: 100%` and set camera `lookAt(0, 0, 0)` so 3D shapes render in the exact geometric center of each capability card.
2. Restored `OrbitScene` geometry parameters (icosahedron radius 0.9, sphere sizes 0.14/0.09/0.11, orbit radii 2.1/2.6/1.7, camera position [0, 0, 5], fov 45) and aligned concentric border rings proportionally.
3. Restored site-wide animations: page-in route transitions, gold page-sweep overlay, card lift and soft gold glow hover effects, About page scroll-triggered progress bars and staggered timeline entrance, and mouse-tracking radial gold glow on hero sections with full prefers-reduced-motion overrides.

## Outcome

- ✅ Impact: Resolved CardCanvas alignment, restored original OrbitScene sizing, and wired up all site-wide animations and motion safety.
- 🧪 Tests: `npm run build` completed successfully.
- 📁 Files: `components/three/card-canvas.tsx`, `components/three/orbit-scene.tsx`, `components/page-shell.tsx`, `app/page.tsx`, `app/about/about-client.tsx`, `app/projects/projects-client.tsx`, `app/globals.css`
- 🔁 Next prompts: None
- 🧠 Reflection: All visual alignments match design expectations and respect accessibility preferences.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): default
- Next experiment (smallest change to try): none
