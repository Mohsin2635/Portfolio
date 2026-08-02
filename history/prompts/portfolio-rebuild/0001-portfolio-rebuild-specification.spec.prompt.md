---
id: "0001"
title: "Portfolio rebuild specification"
stage: "spec"
date: "2026-08-01"
surface: "agent"
model: "Gemini 3.6 Flash"
feature: "portfolio-rebuild"
branch: "main"
user: "mohsin"
command: "/sp.specify Build a personal interactive portfolio website for Muhammad Mohsin"
labels: ["spec", "portfolio", "nextjs", "threejs", "spec-driven"]
links:
  spec: "specs/portfolio-rebuild/spec.md"
  ticket: null
  adr: null
  pr: null
files:
  - "specs/portfolio-rebuild/spec.md"
  - "history/prompts/portfolio-rebuild/0001-portfolio-rebuild-specification.spec.prompt.md"
tests: []
---

## Prompt

/sp.specify Build a personal interactive portfolio website for Muhammad Mohsin, a software engineering student focused on agentic AI development. The site has four pages, each reachable from a persistent header navigation and footer:

## Home page (/)
- Hero section: name "Muhammad Mohsin", a headline "I build agentic software with intent.", a short intro paragraph describing his focus on agentic workflows, the OpenAI Agent SDK, and calm/responsive web experiences.
- A small "available for collaboration" badge above the headline.
- Two calls to action: "View projects" (links to /projects) and "Get in touch" (links to /contact).
- A row of skill tags: Agentic Dev, OpenAI Agent SDK, Python, MySQL, Modern Web.
- A subtle rotating 3D gold wireframe object next to the hero text on desktop (decorative, not interactive), with a mouse-tracking radial gold glow effect behind the hero content.
- A thin info strip below the hero showing location (Karachi, Pakistan), role, and focus area.
- A three-column "capabilities" section below the hero with three cards: "Agentic workflows", "Lightweight web", and "Practical AI", each with a short description and its own hover-reactive 3D wireframe shape (a torus knot, an octahedron, and an icosahedron respectively) that rotates faster and scales up slightly on hover.

## Projects page (/projects)
- Page header: "Selected work" label, "Projects" title, one-line description.
- Three project cards in a grid, each showing: an index number, title, one-line summary, and a row of stack/tech chips. Cards lift slightly and glow gold on hover.
- Clicking a card opens a modal/dialog with a fuller description of the project and its full tech stack list. Modal closes via an X button or clicking outside it.
- The three projects are: "Humanoid Robotics Book" (a documentation site with a Q&A retrieval agent), "Bandage E-commerce" (a CMS-driven storefront), and "Portfolio Experience" (this site itself).

## About page (/about)
- Hero: "[01] / about" label, headline "A quiet practitioner.", short bio line.
- Three stat callouts: "3+ Projects shipped", "6 Core skills", "∞ Curiosity".
- A rotating 3D orbit scene (a central wireframe icosahedron with three smaller spheres orbiting it at different speeds) as a decorative visual, with the same mouse-tracking gold glow as the home page.
- A three-item "manifesto" section with short principles: Restraint, Reusability, Understanding.
- A "capabilities" section listing 6 skills, each with a name, a short tag, and an animated progress bar (0 to a percentage value) that fills in when scrolled into view.
- A vertical timeline section showing career/project milestones in reverse chronological order, each with a year label, title, and short description, animating into view on scroll.

## Contact page (/contact)
- Centered heading "Let's build something." with a short supporting line.
- A card containing a prominent mailto email link/button, and two secondary links to GitHub and LinkedIn profiles.
- A small helper note telling the site owner where to edit the placeholder email and social links.
- No contact form, no backend submission — email is handled entirely via a mailto: link.

## Site-wide / shared behavior
- Persistent header with a logo (interlocked "MM" monogram mark) and wordmark, navigation links (Home, Projects, About, Contact) with active-page highlighting, collapsing into a hamburger menu on mobile.
- Persistent footer with logo, tagline, email/GitHub/LinkedIn links, and copyright line.
- A floating chat widget in the bottom-right corner of every page: a toggle button that opens a chat panel with a welcome message, a text input, and simulated assistant replies (no real backend wired yet — this is a UI placeholder for a future AI assistant feature).
- A smooth transition animation plays whenever the user navigates between pages (a brief fade/blur/lift-in of the new page content, plus a gold light-sweep overlay), and this must be skipped or simplified for users with reduced-motion preferences.
- All 3D visual elements are decorative accents only — they must never block or slow down the page becoming interactive, and must gracefully degrade (fall back to a static visual) on very small screens or low-end devices.
- Every page has a distinct, descriptive browser tab title and meta description appropriate to its content, for SEO and link-preview purposes.

## Out of scope for this version
- No user authentication, no database, no CMS integration.
- No real backend for the chat widget or contact form.
- Real project links and real social media URLs will be added by the site owner after launch — placeholders are acceptable for now.

## Response snapshot

Created feature specification file `specs/portfolio-rebuild/spec.md` for `portfolio-rebuild` covering all 4 pages (`/`, `/projects`, `/about`, `/contact`), shared components (header, footer, stub chat widget, page transitions), 3D accents, accessibility, SEO metadata, and out-of-scope bounds.

## Outcome

- ✅ Impact: Detailed feature specification written and validated against project constitution.
- 🧪 Tests: N/A (Specification phase)
- 📁 Files: `specs/portfolio-rebuild/spec.md`, `history/prompts/portfolio-rebuild/0001-portfolio-rebuild-specification.spec.prompt.md`
- 🔁 Next prompts: Generate architecture plan via `/sp.plan` or task breakdown via `/sp.tasks`.
- 🧠 Reflection: Specification aligns with constitution principles (RSC default, central constants, accessibility, dynamic 3D import).

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
