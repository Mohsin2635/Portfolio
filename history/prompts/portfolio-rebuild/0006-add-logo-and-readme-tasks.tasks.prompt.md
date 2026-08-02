---
id: 6
title: Add logo component and README documentation tasks
stage: tasks
date: 2026-08-01
surface: agent
model: Gemini 3.6 Flash (High)
feature: portfolio-rebuild
branch: main
user: mohsin
command: /sp.tasks
labels: ["tasks", "portfolio-rebuild", "logo", "documentation"]
links:
  spec: specs/portfolio-rebuild/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/portfolio-rebuild/tasks.md
tests: []
---

## Prompt

<USER_REQUEST>
/sp.tasks Add a new task in Phase 2 (Base UI Primitives) for building a standalone, reusable Logo component at components/logo.tsx, supporting the variants mark/full/compact/wordmark and tones dark/light/mono, matching the original interlocked "MM" monogram SVG design. This component must be imported by both the site header and site footer tasks (update Task 3.1 and 3.2 to reference importing this shared Logo component instead of building the logo mark independently in each).

Also add a new task in Phase 6 (or as a final Phase 7) for writing/updating the project README.md: covering project overview, tech stack, setup instructions (install, dev, build commands), directory structure explanation, and a clearly marked section listing every placeholder the site owner must replace before going live (email address, GitHub URL, LinkedIn URL, and the three project case-study links), matching the constitution's Quality Gate requirement.
</USER_REQUEST>

## Response snapshot

Updated `specs/portfolio-rebuild/tasks.md` to:
1. Add Task 2.3: Reusable Monogram Logo Component (`Logo`) in `components/logo.tsx` supporting variants (`mark`, `full`, `compact`, `wordmark`) and tones (`dark`, `light`, `mono`).
2. Update Task 3.1 and Task 3.2 to import the shared `Logo` component.
3. Add Task 6.3: Comprehensive Project Documentation & Pre-Launch Checklist in `README.md`.

## Outcome

- ✅ Impact: Updated task breakdown with reusable Logo component requirement and pre-launch README checklist.
- 🧪 Tests: None run (tasks specification update).
- 📁 Files: `specs/portfolio-rebuild/tasks.md`
- 🔁 Next prompts: Begin executing Task 1.1.
- 🧠 Reflection: Explicitly listing shared components and documentation tasks in the roadmap prevents duplication and ensures constitution quality gate compliance.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin executing Task 1.1.
