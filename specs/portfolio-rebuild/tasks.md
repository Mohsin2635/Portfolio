# Development Tasks: Portfolio Rebuild

**Feature**: `portfolio-rebuild`  
**Target Path**: `specs/portfolio-rebuild/tasks.md`  
**Spec Reference**: `specs/portfolio-rebuild/spec.md`  
**Plan Reference**: `specs/portfolio-rebuild/plan.md`  

---

## Task Breakdown & Implementation Roadmap

### Phase 1: Environment & Foundation Setup
- [x] **Task 1.1: Core Next.js 15 & Dependencies Setup**
  - Initialize Next.js 15+ App Router application with TypeScript (Strict Mode).
  - Install dependencies: `three`, `@react-three/fiber`, `@react-three/drei`, `@radix-ui/react-dialog`, `clsx`, `tailwind-merge`, `lucide-react`.
  - Verify `tsconfig.json` and package configurations.
  - *Acceptance Check*: `npm run build` succeeds on clean template.

- [x] **Task 1.2: Design System & Tailwind v4 OKLCH Setup**
  - Configure `app/globals.css` with `@theme` OKLCH noir & gold color palette (`--background`, `--foreground`, `--gold`, `--gold-glow`, `--muted`, `--accent`).
  - Configure Google Fonts (`Fraunces`, `Space Grotesk`, `JetBrains Mono`) via `next/font/google` in `app/layout.tsx`.
  - Add CSS `@keyframes` for entrance animations (`fadeLift`, `goldSweep`) and `prefers-reduced-motion` resets.
  - *Acceptance Check*: Tailwind utility classes and fonts load cleanly on test page.

- [x] **Task 1.3: Content Centralization & Data Schema**
  - Create `lib/site-config.ts` containing site identity, social links (`email`, `github`, `linkedin`), and navigation route mapping.
  - Create `lib/content.ts` containing structured data for Projects, Capabilities, Skills, Timeline entries, and Manifesto principles.
  - Create utility helpers in `lib/utils.ts` (e.g. `cn()` helper).
  - *Acceptance Check*: Content objects pass TypeScript type checking without errors.

---

### Phase 2: Base UI Primitives & Design Components
- [x] **Task 2.1: shadcn/ui Component Primitives**
  - Build/configure reusable base components in `components/ui/`: `Button`, `Card`, `Badge`, `Dialog`, `Progress`.
  - Ensure dark luxury styling (gold accents, subtle borders, hover highlights) applied to all primitives.
  - *Acceptance Check*: Primitives render with correct dark/gold aesthetics and pass keyboard accessibility checks.

- [x] **Task 2.2: Mobile Detection Hook**
  - Create `hooks/use-is-mobile.ts` utilizing `window.matchMedia('(max-width: 767px)')` with event listener cleanup.
  - *Acceptance Check*: Hook returns `true` on mobile screen widths (<768px) and `false` on desktop.

- [x] **Task 2.3: Standalone Monogram Logo Component (`Logo`)**
  - Build `components/logo.tsx` as a standalone, reusable SVG component rendering the interlocked "MM" monogram mark and wordmark.
  - Support display variants: `mark` (monogram icon only), `full` (monogram + "Muhammad Mohsin" wordmark), `compact`, and `wordmark` (text only).
  - Support tone themes: `dark`, `light`, and `mono`.
  - *Acceptance Check*: Component renders cleanly across all variant and tone combinations without visual distortion.

---

### Phase 3: Shared Layout & Navigation
- [x] **Task 3.1: Site Header & Mobile Drawer**
  - Build `components/site-header.tsx`, importing the shared `Logo` component (`components/logo.tsx`) for brand representation.
  - Implement active page indicator matching current `usePathname()`.
  - Add responsive mobile menu toggle with `aria-expanded` state, smooth drawer transition, and trap focus behavior.
  - *Acceptance Check*: Header navigation highlights active route; mobile menu opens/closes seamlessly on small screens; uses shared `Logo`.

- [x] **Task 3.2: Site Footer**
  - Build `components/site-footer.tsx`, importing the shared `Logo` component (`components/logo.tsx`) alongside tagline ("Building agentic software with intent."), copyright, and mailto/social links.
  - *Acceptance Check*: Footer rendered cleanly at bottom of all pages with working external links and shared `Logo`.

- [x] **Task 3.3: Page Shell & Pure CSS Page Transitions**
  - Build `components/page-shell.tsx` wrapping page content with fade/lift entrance animation and gold light-sweep accent.
  - Ensure animations key on `pathname` and automatically disable when `prefers-reduced-motion` is active.
  - *Acceptance Check*: Smooth page transition triggers on route change without blocking interaction.

- [x] **Task 3.4: Floating Chat Widget**
  - Build `components/floating-chat.tsx` positioned fixed in bottom-right corner across all routes.
  - Implement toggle button, chat header, scrollable message list, input box, and stubbed assistant auto-replies.
  - *Acceptance Check*: User can open chat, send message, and receive automated stub response; panel closes cleanly.

---

### Phase 4: 3D Canvases & Visual Accents (Dynamic Imports & Mobile Fallbacks)
- [x] **Task 4.1: Hero 3D Object & Canvas (`HeroCanvas`)**
  - Build `components/three/hero-object.tsx` featuring rotating gold wireframe geometry using Three.js/R3F.
  - Build `components/three/hero-canvas.tsx` dynamically imported (`ssr: false`) with loading skeleton fallback.
  - Implement mobile check via `useIsMobile()` to render static SVG/CSS gold mark instead of WebGL canvas on screens <768px.
  - *Acceptance Check*: 3D Hero canvas renders dynamically on desktop without blocking SSR; renders static SVG on mobile.

- [x] **Task 4.2: Capabilities Hover 3D Canvas (`CardCanvas`)**
  - Build `components/three/card-canvas.tsx` supporting 3 wireframe shapes: Torus Knot, Octahedron, and Icosahedron.
  - Implement hover-reactive rotation speedup and scale effect.
  - Add mobile viewport detection fallback (<768px renders static CSS icon).
  - *Acceptance Check*: Hovering capability cards speeds up shape rotation on desktop; displays clean fallback on mobile.

- [x] **Task 4.3: About Page Orbit Scene (`OrbitScene`)**
  - Build `components/three/orbit-scene.tsx` featuring central wireframe shape with 3 smaller orbiting spheres.
  - Dynamically import with `ssr: false` and render radial gold background glow.
  - Add mobile fallback.
  - *Acceptance Check*: Orbiting spheres animate smoothly on desktop; mobile displays quiet static fallback.

---

### Phase 5: Page Implementations
- [x] **Task 5.1: Home Page (`app/page.tsx`)**
  - Assemble Hero Section with "Available for collaboration" badge, headline, CTA buttons, skill chips, and `HeroCanvas`.
  - Build Info Strip (Karachi, Software Engineering Student, Agentic AI).
  - Build Capabilities Grid (3 cards using `CardCanvas` for Torus Knot, Octahedron, Icosahedron).
  - Add mouse-tracking radial gold glow background effect.
  - *Acceptance Check*: Home page matches design spec, interactive hover cards work, 3D elements render cleanly.

- [x] **Task 5.2: Projects Page (`app/projects/page.tsx`) & Detail Modal**
  - Build Projects page header and 3-card grid (Humanoid Robotics Book, Bandage E-commerce, Portfolio Experience).
  - Implement hover lift & gold border glow effect on cards.
  - Implement `ProjectModal` using Radix Dialog displaying full description, tech stack tags, and architecture highlights.
  - *Acceptance Check*: Clicking any project card opens modal overlay with full project details; closes via X button or Esc key.

- [x] **Task 5.3: About Page (`app/about/page.tsx`) & Scroll Observers**
  - Build About Hero ("A quiet practitioner."), 3 stat callouts, and `OrbitScene` accent.
  - Build Manifesto Section (Restraint, Reusability, Understanding).
  - Build Skill Progress Bars with native `IntersectionObserver` triggering 0% -> target % animation when scrolled into view.
  - Build Vertical Milestone Timeline with entrance animations triggered on scroll.
  - *Acceptance Check*: Skill progress bars fill smoothly upon scroll into view; timeline items animate gracefully.

- [x] **Task 5.4: Contact Page (`app/contact/page.tsx`)**
  - Build Contact section header ("Let's build something.").
  - Build Mailto Contact Card with email CTA, GitHub, LinkedIn links, and developer update note.
  - *Acceptance Check*: Pure frontend card renders cleanly; clicking mailto opens default mail handler; config note visible.

---

### Phase 6: SEO, Accessibility & Production Build Verification
- [x] **Task 6.1: Route Metadata & SEO Configuration**
  - Add page-specific Next.js `metadata` exports (Title, Description, OpenGraph, Twitter Cards) across all 4 page files.
  - *Acceptance Check*: Viewing page source confirms correct page titles and meta description tags per route.

- [x] **Task 6.2: Final Production Build & Performance Audit**
  - Execute `npm run build` / `next build` to verify zero TypeScript or lint errors.
  - Test keyboard navigation across desktop and mobile menus.
  - Verify `@media (prefers-reduced-motion)` suppresses 3D auto-rotations and CSS transitions.
  - *Acceptance Check*: Build finishes cleanly; zero WebGL memory leaks; mobile fallback renders on small screens.

- [x] **Task 6.3: Comprehensive Project Documentation & Pre-Launch Checklist (`README.md`)**
  - Create/update `README.md` covering:
    - Project overview and architectural principles.
    - Tech stack details (Next.js App Router, React 19, TypeScript, Tailwind CSS v4, Three.js/R3F, shadcn/ui).
    - Local setup instructions (`npm install`, `npm run dev`, `npm run build`).
    - Directory structure breakdown.
    - Prominently marked section listing all placeholders the site owner must customize before going live (email address, GitHub URL, LinkedIn URL, and 3 project case-study links in `lib/site-config.ts` and `lib/content.ts`), fulfilling Constitution Quality Gate requirements.
  - *Acceptance Check*: `README.md` contains accurate setup instructions, project structure, and explicit pre-launch placeholder checklist.
