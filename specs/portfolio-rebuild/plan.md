# Architecture Plan: Portfolio Rebuild

**Feature**: `portfolio-rebuild`  
**Target Path**: `specs/portfolio-rebuild/plan.md`  
**Framework**: Next.js 15+ (App Router), React 19, TypeScript (Strict Mode), Tailwind CSS v4, Three.js (`@react-three/fiber`, `@react-three/drei`), shadcn/ui (new-york style)

---

## 1. Scope & Dependencies

### In Scope
- **Directory Structure & Layout**:
  - `app/` route segments: `app/page.tsx` (home), `app/projects/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `app/layout.tsx` (root layout with providers, site header, site footer, page transitions).
  - `components/ui/`: Base shadcn/ui primitives (button, dialog, card, badge, progress, etc.).
  - `components/`: Custom shared components (`SiteHeader`, `SiteFooter`, `PageShell`, `Logo`, `CapabilityCard`, `ProjectCard`, `ProjectModal`, `SkillBar`, `TimelineItem`, `FloatingChat`, `PageTransition`).
  - `components/three/`: 3D visual components (`HeroObject`, `HeroCanvas`, `CardCanvas`, `OrbitScene`), dynamically imported with `ssr: false`.
  - `lib/`: Utilities (`cn()` helper, `useIsMobile()` hook, `lib/site-config.ts`, `lib/content.ts`).
- **Styling & Design System**:
  - Tailwind CSS v4 configured with central noir & gold OKLCH tokens via `@theme` in `app/globals.css`.
  - Pure CSS `@keyframes` for page entrance animations and gold light-sweep overlays.
  - Native browser `IntersectionObserver` for scroll-triggered progress bars and timeline entrance animations.
  - Next.js font loading via `next/font/google` for Fraunces, Space Grotesk, and JetBrains Mono.
- **Interactivity & State**:
  - Pathname-based active nav link highlighting & mobile drawer menu toggle.
  - Page transition animation (pure CSS fade/lift + gold light-sweep) keyed on `usePathname()`.
  - Interactive project detail modal overlay.
  - Scroll-triggered skill bar progress fill & timeline entrance animations via native `IntersectionObserver`.
  - Floating stub chat widget with local React state (toggle button, message stream, simulated auto-reply).

### Out of Scope
- Framer Motion or external JS animation libraries (pure CSS & native browser APIs only).
- Backend API routes, database connections, CMS integration, server actions for form submission.
- Real LLM API key integration for the floating chat widget.

---

## 2. Key Decisions & Rationale

| Decision Area | Options Considered | Selected Choice | Rationale |
| :--- | :--- | :--- | :--- |
| **Framework & Router** | Next.js App Router vs Pages Router | **Next.js 15+ App Router** | Strict RSC default; optimal automatic code-splitting and metadata management per route. |
| **Styling System** | Tailwind CSS v3 vs Tailwind CSS v4 | **Tailwind CSS v4 with OKLCH `@theme`** | Direct CSS variable integration, zero config file bloat, ultra-fast engine. |
| **3D Rendering Integration** | Direct canvas context vs R3F with `ssr: false` | **R3F + `@react-three/drei` dynamically imported** | Modular declarative 3D code while enforcing 0-byte initial server render payload for 3D bundles. |
| **Animation Strategy** | JS Animation Libraries vs Pure CSS + Native APIs | **Pure CSS @keyframes + Native IntersectionObserver** | Zero JS runtime animation overhead; CSS handles hardware-accelerated transitions and reduced motion media queries natively. |
| **Content Management** | Inline JSX strings vs central typed files | **`lib/site-config.ts` & `lib/content.ts`** | Complete separation of content from view components; allows single-point edits for site owner. |

---

## 3. Architecture & Data Structures

### 3.1 Data Contracts (`lib/site-config.ts` & `lib/content.ts`)

```typescript
export interface SiteConfig {
  name: string;
  title: string;
  headline: string;
  role: string;
  location: string;
  focus: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
  };
  navLinks: Array<{ label: string; href: string }>;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  fullTechStack: string[];
  highlights: string[];
  link?: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  shapeType: 'torusKnot' | 'octahedron' | 'icosahedron';
}

export interface Skill {
  name: string;
  tag: string;
  percentage: number;
}

export interface TimelineEntry {
  year: string;
  title: string;
  roleOrContext: string;
  description: string;
}
```

---

## 4. Non-Functional Requirements (NFRs)

1. **Performance & Core Web Vitals**:
   - Initial Server Response < 200ms.
   - First Contentful Paint (FCP) < 1.2s.
   - 3D Canvases (`HeroCanvas`, `CardCanvas`, `OrbitScene`) strictly lazy-loaded post-hydration with skeleton placeholders.
   - **Mobile 3D Performance Optimization**: All 3D canvas components must detect small viewports (<768px matching `useIsMobile`) and render a static fallback visual (simple gold radial gradient or SVG mark) instead of mounting the WebGL canvas, protecting mobile battery and frame rate.
2. **Accessibility (a11y)**:
   - Full keyboard navigation for mobile menu, project modal, and chat widget.
   - Screen-reader tags (`aria-label`, `aria-expanded`, `aria-hidden` on 3D canvases).
   - Motion suppression via `@media (prefers-reduced-motion: reduce)` disabling CSS keyframe transitions and hiding gold light-sweep overlays.
3. **SEO & Social Sharing**:
   - Explicit `metadata` object exported from every `page.tsx` file (Title, Description, OpenGraph, Twitter Card).

---

## 5. Risk Analysis & Mitigations

1. **Risk: Mobile viewport WebGL memory overhead**.
   - *Mitigation*: Mandatory mobile viewport detection (<768px) rendering static CSS/SVG fallback instead of WebGL canvas.
2. **Risk: Canvas resize flickering on responsive desktop resize**.
   - *Mitigation*: Responsive flex/grid container wrappers with `aspect-ratio` bounds and `ResizeObserver`.
3. **Risk: Animation jump on fast route switches**.
   - *Mitigation*: Pure CSS `@keyframes` keyed on `pathname` with `animation-fill-mode: forwards`.

---

## 6. Evaluation & Validation Checklist

- [ ] Next.js 15+ App Router codebase compiles strictly with `next build`.
- [ ] Central design tokens (`oklch`) active in `globals.css`.
- [ ] All 4 routes render with correct layout, header, footer, and chat widget.
- [ ] 3D canvases lazy load properly without blocking initial HTML rendering.
- [ ] Mobile viewports (<768px) render static visual fallback instead of WebGL canvas.
- [ ] Project detail modal opens/closes cleanly.
- [ ] Skill progress bars and timeline items animate on scroll via native `IntersectionObserver`.
- [ ] Pure CSS page transition with gold light-sweep triggers on route change.
