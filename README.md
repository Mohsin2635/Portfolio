# Muhammad Mohsin — Interactive Personal Portfolio

An interactive, high-performance personal portfolio website engineered for **Muhammad Mohsin**, a software engineering student specializing in agentic AI development and calm, intent-driven web applications.

---

## 🌟 Overview & Architecture

Built with **Next.js 15+ App Router**, **React 19**, and **Tailwind CSS v4**, this portfolio features a noir & gold aesthetic (OKLCH design system), dynamic 3D visual accents via Three.js / React Three Fiber (R3F), pure CSS page transitions, responsive navigation, and an interactive assistant chat widget.

### Key Highlights
- **Noir & Gold Aesthetic**: Centralized OKLCH design tokens with glassmorphism and subtle gold light-sweep visual accents.
- **Dynamic 3D Canvases & Mobile Fallbacks**: 3D geometric shapes dynamically imported with `ssr: false`. Automatically renders lightweight static SVG/CSS fallbacks on mobile viewports (<768px) to protect frame rates and battery life.
- **Pure CSS Transitions**: Hardware-accelerated keyframe page entrance animations that respect `@media (prefers-reduced-motion: reduce)`.
- **Decoupled Content**: All site configuration, bio info, skills, projects, and manifesto principles stored in typed `lib/site-config.ts` and `lib/content.ts` files for effortless updates.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/)
- **UI & Logic**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with OKLCH theme variables
- **3D Visuals**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **UI Components**: [Radix UI Dialog](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/) icons, custom shadcn/ui primitives

---

## 📁 Directory Structure

```
├── app/
│   ├── layout.tsx             # Root layout (Google Fonts, Metadata, Header, Footer, Chat)
│   ├── page.tsx               # Home Page (Hero, Info Strip, Capabilities 3D Grid)
│   ├── projects/              # Projects Page & Case Study Detail Modal
│   ├── about/                 # About Page (Bio, Stat Callouts, Orbit 3D, Manifesto, Skills, Timeline)
│   ├── contact/               # Contact Page (Direct Mailto Card & Socials)
│   └── globals.css            # Tailwind v4 theme, OKLCH design tokens, keyframes
├── components/
│   ├── logo.tsx               # Standalone Monogram SVG Logo component (variants & tones)
│   ├── site-header.tsx        # Top navigation header & mobile drawer
│   ├── site-footer.tsx        # Footer with branding & social links
│   ├── page-shell.tsx         # Page wrapper with entrance transition & gold light-sweep
│   ├── floating-chat.tsx      # Floating interactive assistant stub widget
│   ├── project-modal.tsx      # Accessible Radix Dialog project case-study detail modal
│   ├── ui/                    # Base design primitives (Button, Card, Badge, Dialog, Progress)
│   └── three/                 # 3D R3F Canvases (HeroCanvas, CardCanvas, OrbitScene)
├── hooks/
│   └── use-is-mobile.ts       # Responsive breakpoint hook (<768px detection)
├── lib/
│   ├── site-config.ts         # Site metadata, owner info, social links, navigation
│   ├── content.ts            # Typed content schemas (Capabilities, Projects, Skills, Timeline)
│   └── utils.ts              # Classname merger helper (cn)
├── specs/                     # Feature specifications, architecture plan, tasks
└── history/                   # Prompt History Records (PHRs)
```

---

## 🚀 Local Development Setup

### 1. Prerequisites
- Node.js 18.x or later
- npm 9.x or later

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
Validate code compilation and create an optimized production bundle:
```bash
npm run build
```

---

## ⚠️ Pre-Launch Site Owner Customization Checklist

Before deploying this website to a live domain, update all placeholders in `lib/site-config.ts` and `lib/content.ts`:

- [ ] **Email Address**: Update `email` in `lib/site-config.ts` (currently `mohsin@example.com`).
- [ ] **GitHub Profile URL**: Update `socials.github` in `lib/site-config.ts` (currently `https://github.com/example-username`).
- [ ] **LinkedIn Profile URL**: Update `socials.linkedin` in `lib/site-config.ts` (currently `https://linkedin.com/in/example-username`).
- [ ] **Project 01 Link**: Update `link` for Humanoid Robotics Book in `lib/content.ts`.
- [ ] **Project 02 Link**: Update `link` for Bandage E-commerce in `lib/content.ts`.
- [ ] **Project 03 Link**: Update `link` for Portfolio Experience in `lib/content.ts`.

---

## 📄 License
This project is licensed under the MIT License.
