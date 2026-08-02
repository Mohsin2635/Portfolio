# Personal Portfolio

This is my personal portfolio site. I built it to showcase my projects, skills, and work in agentic AI development and web systems.

## Overview

I built this with Next.js 15 (App Router), React 19, and Tailwind CSS v4. The design uses a dark noir and gold theme with OKLCH colors, interactive 3D elements powered by Three.js and React Three Fiber, and standard CSS entrance transitions.

To keep performance reasonable on smaller devices, 3D scenes are dynamically loaded with `ssr: false` and fall back to static SVG/CSS graphics on mobile screens (under 768px).

Content is separated into `lib/site-config.ts` and `lib/content.ts` so bio details, project lists, and links can be modified without touching component code.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language & Library**: TypeScript, React 19
- **Styling**: Tailwind CSS v4 (with custom OKLCH color variables)
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **UI & Icons**: Radix UI Dialog, Lucide React

## Directory Structure

```
├── app/
│   ├── layout.tsx             # Root layout (fonts, metadata, header, footer, chat widget)
│   ├── page.tsx               # Home page (hero, info strip, 3D capabilities grid)
│   ├── projects/              # Projects page and modal case study detail view
│   ├── about/                 # About page (bio, stats, 3D orbit, principles, skills, timeline)
│   ├── contact/               # Contact page (direct mail link and social links)
│   └── globals.css            # Tailwind v4 theme, OKLCH variables, animation keyframes
├── components/
│   ├── logo.tsx               # Monogram SVG logo component
│   ├── site-header.tsx        # Top navigation bar and mobile drawer
│   ├── site-footer.tsx        # Footer with branding and social links
│   ├── page-shell.tsx         # Page wrapper with entrance transition and light effect
│   ├── floating-chat.tsx      # Interactive assistant chat widget
│   ├── project-modal.tsx      # Project detail modal using Radix Dialog
│   ├── ui/                    # UI primitives (Button, Card, Badge, Dialog, Progress)
│   └── three/                 # R3F 3D canvases (HeroCanvas, CardCanvas, OrbitScene)
├── hooks/
│   └── use-is-mobile.ts       # Breakpoint hook for mobile viewport detection (<768px)
├── lib/
│   ├── site-config.ts         # Site metadata, contact info, social links, navigation
│   ├── content.ts            # Content data (capabilities, projects, skills, timeline)
│   └── utils.ts              # Helper functions (cn class merger)
├── specs/                     # Feature specifications and architecture notes
└── history/                   # Prompt history records (PHRs)
```

## Setup & Running Locally

### Prerequisites
- Node.js 18.x or later
- npm 9.x or later

### Installation & Run

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build

To create a production build:
```bash
npm run build
```
