# Feature Specification: Portfolio Rebuild

**Feature Name**: `portfolio-rebuild`  
**Target Project**: Muhammad Mohsin — Interactive Portfolio  
**Framework/Stack**: Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, Three.js (`@react-three/fiber`, `@react-three/drei`), shadcn/ui, Radix UI

---

## 1. Executive Summary

Rebuild the personal interactive portfolio website for **Muhammad Mohsin**, a software engineering student focused on agentic AI development. The site features four primary pages (`/`, `/projects`, `/about`, `/contact`), persistent header navigation with responsive mobile menu, persistent footer, floating stub chat widget, smooth page transitions, and subtle 3D visual accents via Three.js/R3F.

---

## 2. Page & Component Specifications

### 2.1 Persistent Layout & Shared Behavior
- **Header**:
  - Logo: Interlocked "MM" monogram mark and wordmark "Muhammad Mohsin".
  - Desktop Navigation: Links for `Home` (`/`), `Projects` (`/projects`), `About` (`/about`), `Contact` (`/contact`).
  - Active page visual indicator based on current route.
  - Mobile Navigation: Collapsible hamburger menu toggle with keyboard trap and `aria-expanded` state.
- **Footer**:
  - Logo monogram & wordmark, tagline ("Building agentic software with intent."), copyright line.
  - External social & contact links (Email, GitHub, LinkedIn).
- **Floating Chat Widget**:
  - Positioned in bottom-right corner across all pages.
  - Floating toggle button to open/close chat panel.
  - Includes header, welcome message, message list, text input box, and stubbed assistant auto-replies.
  - Clean UI placeholder for future agent integration.
- **Page Transitions & Animations**:
  - Page content entrance animation (fade/blur/lift-in + gold light-sweep accent).
  - Respects `prefers-reduced-motion` media query (disables/simplifies transition effects and 3D auto-rotations).
- **SEO & Metadata**:
  - Page-specific titles, descriptions, OpenGraph tags, and Twitter cards configured via Next.js `metadata` export for every route.

---

### 2.2 Home Page (`/`)
- **Hero Section**:
  - Badge: `"Available for collaboration"` tag above main heading.
  - Title: `"Muhammad Mohsin"`
  - Headline: `"I build agentic software with intent."`
  - Intro Paragraph: Focus on agentic workflows, OpenAI Agent SDK, and calm/responsive web experiences.
  - CTAs: Primary button `"View projects"` (`/projects`), Secondary button `"Get in touch"` (`/contact`).
  - Skill Tags: `Agentic Dev`, `OpenAI Agent SDK`, `Python`, `MySQL`, `Modern Web`.
  - 3D Accent: Subtle rotating 3D gold wireframe shape next to hero text on desktop (dynamic import, `ssr: false`).
  - Background Accent: Mouse-tracking radial gold glow effect.
- **Info Strip**:
  - Displays Location (`Karachi, Pakistan`), Role (`Software Engineering Student`), and Focus Area (`Agentic AI`).
- **Capabilities Section (3-Column Grid)**:
  - Card 1: `"Agentic workflows"` — Description + hover-reactive Torus Knot 3D wireframe shape.
  - Card 2: `"Lightweight web"` — Description + hover-reactive Octahedron 3D wireframe shape.
  - Card 3: `"Practical AI"` — Description + hover-reactive Icosahedron 3D wireframe shape.
  - Hover Interaction: Shapes scale up slightly and rotate faster on mouse hover.

---

### 2.3 Projects Page (`/projects`)
- **Header**:
  - Label: `"Selected work"`
  - Title: `"Projects"`
  - Description: Overview of shipped projects and experiments.
- **Projects Grid (3 Cards)**:
  - Card 1: `"Humanoid Robotics Book"` (Documentation site + Q&A retrieval agent).
  - Card 2: `"Bandage E-commerce"` (CMS-driven storefront).
  - Card 3: `"Portfolio Experience"` (Interactive Next.js portfolio site).
  - Card Elements: Index number (`01`, `02`, `03`), title, 1-line summary, tech stack chips.
  - Card Hover: Lift effect + gold border glow.
- **Project Detail Modal / Dialog**:
  - Clicking any card opens a accessible dialog overlay (`Radix Dialog` / `shadcn`).
  - Content: Full project description, comprehensive tech stack list, architecture highlights.
  - Dismiss: Close "X" button or backdrop click.

---

### 2.4 About Page (`/about`)
- **Hero Section**:
  - Label: `"[01] / about"`
  - Headline: `"A quiet practitioner."`
  - Short Bio Line: Software engineering student pursuing intent-driven agentic software.
- **Stat Callouts (3 Columns)**:
  - `"3+ Projects shipped"`, `"6 Core skills"`, `"∞ Curiosity"`.
- **3D Orbit Scene Accent**:
  - Central wireframe icosahedron with 3 smaller spheres orbiting at varying speeds.
  - Dynamic import with fallback and mouse-tracking gold radial background glow.
- **Manifesto Section (3 Principles)**:
  - Principle 1: `Restraint` — Purposeful software, clean design, zero bloat.
  - Principle 2: `Reusability` — Modular components and extensible patterns.
  - Principle 3: `Understanding` — Deep comprehension from principles to production.
- **Capabilities & Animated Progress Bars**:
  - 6 skills listed with name, category tag, and visual progress bar that animates from 0% to target percentage upon scroll-into-view.
- **Milestone Timeline**:
  - Vertical timeline in reverse chronological order detailing key education and project milestones.
  - Scroll-triggered entrance animations for timeline nodes.

---

### 2.5 Contact Page (`/contact`)
- **Header**:
  - Headline: `"Let's build something."`
  - Subtitle: Open for collaborations, agentic AI projects, and engineering discussions.
- **Contact Card**:
  - Prominent Mailto Email action (`mailto:mohsin@example.com` placeholder).
  - Secondary Profile links (GitHub, LinkedIn).
  - Helper note for site owner indicating location in `config/constants.ts` to update real links.
- **Constraint**: Pure frontend contact card (no backend API submission, no contact form fields).

---

## 3. Out of Scope
1. Database integration, server-side persistence, CMS.
2. Real AI LLM backend wiring for chat widget (stubbed mock replies only).
3. Real contact form endpoint / email server integration (pure mailto link).
4. User authentication or authorization.

---

## 4. Acceptance Criteria & Quality Checklist

- [ ] **Next.js App Router Setup**: Clean project structure using Next.js, React 19, TypeScript, Tailwind CSS v4.
- [ ] **Shared Layout**: Monogram logo, 4-route header nav with mobile menu, persistent footer, stub chat widget.
- [ ] **Home Page**: Hero section, 3D accent, radial glow, info strip, 3 capability cards with hover 3D shapes.
- [ ] **Projects Page**: 3 project cards with tech chips, modal overlay with full project details.
- [ ] **About Page**: Hero bio, 3 stat callouts, 3D orbit canvas, manifesto, 6 animated skill bars, vertical timeline.
- [ ] **Contact Page**: Centered heading, mailto card, GitHub/LinkedIn links, config helper note.
- [ ] **Content Centralization**: All configurable content stored in `config/constants.ts`.
- [ ] **Performance & Accessibility**: 3D components dynamic imported (`ssr: false`), `prefers-reduced-motion` supported, full metadata per page.
