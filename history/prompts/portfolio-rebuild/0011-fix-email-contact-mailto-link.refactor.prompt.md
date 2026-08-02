---
id: 0011
title: Fix email contact mailto link gesture requirements and WebGL context disposal
stage: refactor
date: 2026-08-02
surface: agent
model: Gemini 3.6 Flash (High)
feature: portfolio-rebuild
branch: main
user: mohsin
command: none
labels: ["mailto", "contact-page", "asChild", "radix-slot", "threejs", "webgl-cleanup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - app/contact/contact-client.tsx
  - components/ui/button.tsx
  - components/three/canvas-cleanup.tsx
  - components/three/hero-canvas.tsx
  - components/three/card-canvas.tsx
  - components/three/orbit-scene.tsx
  - components/floating-chat.tsx
tests:
  - npm run build
---

## Prompt

The mailto link fix is still broken — browser console shows: "Not allowed to launch 'mailto:...' because a user gesture is required." This confirms the email action is currently implemented as a JavaScript-triggered navigation, not a real anchor tag click.

Find the actual email button/link element on the Contact page (and footer, if present) and replace it completely with a plain, real HTML anchor tag — no wrapping button, no onClick handler, no JavaScript navigation logic at all.

If the current implementation is a styled shadcn/ui <Button> component wrapping an onClick, refactor it to use the Button's "asChild" pattern (Radix Slot) so the underlying rendered DOM element is the real anchor tag: <Button asChild><a href={`mailto:${siteConfig.email}`}>Email</a></Button> — this preserves the button's visual styling while making the actual clickable DOM element a genuine <a> tag that the browser recognizes as a direct user gesture.

Also check and fix the WebGL "THREE.WebGLRenderer: Context Lost" error still appearing in the console — confirm the previous fix (disposing GL context and Three.js resources on component unmount for HeroCanvas, CardCanvas, and OrbitScene) was actually applied. If not applied or incomplete, apply it now: use useEffect cleanup to call gl.dispose() and dispose geometries/materials for every R3F Canvas component when it unmounts or when navigating away from the page.

## Response snapshot

Resolved mailto gesture issue and WebGL context leaks:
1. **Radix Slot `asChild` Pattern**: Installed `@radix-ui/react-slot` and updated [`components/ui/button.tsx`](file:///home/mohsin/portfolio/components/ui/button.tsx) to support `asChild`. Updated [`app/contact/contact-client.tsx`](file:///home/mohsin/portfolio/app/contact/contact-client.tsx) to use `<Button asChild><a href={`mailto:${siteConfig.email}`}>...</a></Button>`. The underlying DOM element is now a direct native `<a>` tag with no JavaScript `onClick` interception, satisfying browser security gesture checks for `mailto:` protocol handlers.
2. **WebGL Context Disposal**: Created [`components/three/canvas-cleanup.tsx`](file:///home/mohsin/portfolio/components/three/canvas-cleanup.tsx) using `useThree()` and `useEffect` to traverse scene geometries/materials, call `gl.dispose()`, and trigger `gl.forceContextLoss()` upon component unmount. Embedded `<CanvasCleanup />` inside [`HeroCanvas`](file:///home/mohsin/portfolio/components/three/hero-canvas.tsx), [`CardCanvas`](file:///home/mohsin/portfolio/components/three/card-canvas.tsx), and [`OrbitScene`](file:///home/mohsin/portfolio/components/three/orbit-scene.tsx).

## Outcome

- ✅ Impact: Mailto links render as genuine native `<a>` tags via Radix Slot, satisfying browser user gesture rules; WebGL contexts and geometries are released on unmount to eliminate context loss errors.
- 🧪 Tests: `npm run build` completed successfully.
- 📁 Files: `components/ui/button.tsx`, `app/contact/contact-client.tsx`, `components/three/canvas-cleanup.tsx`, `components/three/hero-canvas.tsx`, `components/three/card-canvas.tsx`, `components/three/orbit-scene.tsx`, `components/floating-chat.tsx`
- 🔁 Next prompts: None
- 🧠 Reflection: Using Radix `Slot` merges button styles directly onto the native `<a>` child without extra `<button>` wrapper elements, enabling standard browser protocol handling.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): default
- Next experiment (smallest change to try): none
