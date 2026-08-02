---
id: 0014
title: Rewrite README in First-Person Developer Tone
stage: refactor
date: 2026-08-02
surface: agent
model: Gemini 3.6 Flash (High)
feature: portfolio-rebuild
branch: main
user: mohsin
command: None
labels: ["readme", "refactor", "documentation", "tone"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - README.md
tests:
  - n/a (documentation change)
---

## Prompt

Rewrite README.md completely in a natural, first-person tone as if Muhammad Mohsin (the actual site owner and developer) wrote it himself about his own project — not as AI-generated marketing copy written about him in third person.

Specific changes:
1. Remove all emoji section headers (🌟, 🛠, 📁, 🚀) — use plain markdown headers instead.
2. Remove marketing/corporate phrasing like "engineered for", "Key Highlights", "high-performance", "aesthetic engineered". Write plainly, like a developer explaining their own project to another developer.
3. Switch from third-person ("this portfolio features...", "Muhammad Mohsin, a software engineering student specializing in...") to first-person ("This is my personal portfolio site, built with...", "I used Next.js because...").
4. Keep it factual and useful — tech stack, setup instructions, directory structure, and the placeholder-replacement checklist should stay, but written concisely and plainly, not as bullet-point sales copy.
5. Remove excessive bolding and over-structured subsections where a plain sentence would read more naturally.
6. Keep a short section (near the top or bottom) explicitly listing what still needs to be customized before deploying — email, social links, project case-study links — since those were real placeholders in lib/site-config.ts and lib/content.ts.
7. Tone should be brief, direct, and slightly informal — like a real developer's README, not generated documentation. Avoid superlatives ("premium", "cutting-edge", "seamless") entirely.

Keep technical accuracy from the current README (Next.js 15+, React 19, Tailwind v4, R3F, directory structure) — only change the voice and formatting style, not the factual content.

## Response snapshot

Completely rewrote `README.md` to speak directly in Muhammad Mohsin's voice in first person ("This is my personal portfolio site...", "I built this with..."), removing all emoji headers, marketing buzzwords, and third-person phrasing while keeping full technical accuracy and adding a checklist of real site placeholders (`lib/site-config.ts` and `lib/content.ts`).

## Outcome

- ✅ Impact: README written in natural developer tone without marketing fluff or emojis.
- 🧪 Tests: n/a
- 📁 Files: README.md
- 🔁 Next prompts: none
- 🧠 Reflection: Plain writing communicates project capabilities more effectively than buzzwords.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
