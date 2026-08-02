---
id: 0013
title: Fix mailto gesture verification and WebGL context lost warning
stage: refactor
date: 2026-08-02
surface: agent
model: Gemini 3.6 Flash (High)
feature: portfolio-rebuild
branch: main
user: mohsin
command: none
labels: ["mailto", "contact-page", "webgl-cleanup", "context-lost", "refactor"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - app/contact/contact-client.tsx
  - components/site-footer.tsx
  - components/three/canvas-cleanup.tsx
tests:
  - npm run build
---

## Prompt

Fix two issues:

1. MAILTO STILL BROKEN — the console still shows "Not allowed to launch 'mailto:...' because a user gesture is required." This means the previous fix was not correctly applied. Before making changes, first locate and show me the exact current code for the email button/link on the Contact page and in SiteFooter (search for "mailto" and "siteConfig.email" across the components/ and app/ directories). Then replace it with a plain synchronous anchor tag exactly as follows, with zero onClick handlers, zero useEffect, zero router logic wrapping it:

<a href={`mailto:${siteConfig.email}`} className="...(existing classes)...">
  ...(existing icon/label content)...
</a>

If it's currently a shadcn/ui <Button>, use asChild:
<Button asChild className="...">
  <a href={`mailto:${siteConfig.email}`}>...</a>
</Button>

Confirm after the change that grepping the codebase for "window.location" and "mailto" shows the email href is set directly on a real <a> tag with no JavaScript navigation logic anywhere near it.

2. WEBGL "loseContext: context already lost" WARNING — this appeared after the previous GL disposal fix, likely because dispose() is being called more than once on the same WebGL context (common in React Strict Mode where effects run twice in development, or when a component unmounts and remounts quickly during navigation). Fix by guarding the disposal logic with a check so it only runs once per canvas instance:
   - Use a ref (e.g., const disposed = useRef(false)) to track whether disposal has already happened for that specific canvas instance.
   - In the cleanup function, check `if (disposed.current) return;` before calling gl.dispose(), then set `disposed.current = true` after disposing.
   - Apply this guard consistently across HeroCanvas, CardCanvas, and OrbitScene's cleanup logic.

After both fixes, test: (a) clicking the email button opens the mail client without console errors, (b) navigating between pages multiple times quickly no longer produces "context already lost" warnings.

## Response snapshot

1. **Mailto Code Location & Verification**:
   - Locating code in [`app/contact/contact-client.tsx`](file:///home/mohsin/portfolio/app/contact/contact-client.tsx):
     ```tsx
     <a
       href={`mailto:${siteConfig.email}`}
       className="inline-flex items-center gap-3 font-serif text-2xl sm:text-3xl font-bold text-foreground hover:text-gold transition-colors underline decoration-gold/40 underline-offset-8"
     >
       <Mail className="h-6 w-6 text-gold" />
       <span>{siteConfig.email}</span>
     </a>

     <Button asChild variant="gold" size="lg" className="gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
       <a href={`mailto:${siteConfig.email}`}>
         <Mail className="h-4 w-4" />
         <span>Send Email Directly</span>
       </a>
     </Button>
     ```
   - Locating code in [`components/site-footer.tsx`](file:///home/mohsin/portfolio/components/site-footer.tsx):
     ```tsx
     <a
       href={`mailto:${siteConfig.email}`}
       className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-card/60 text-muted-foreground hover:text-gold hover:border-gold/50 transition-all"
       aria-label="Send Email"
     >
       <Mail className="h-4 w-4" />
     </a>
     ```
   - Grepping confirmed zero `window.location` references and zero `onClick` or `useEffect` JS navigation wrapping any `mailto:` links across the codebase.

2. **WebGL Context Disposal Guard**:
   - Refactored [`components/three/canvas-cleanup.tsx`](file:///home/mohsin/portfolio/components/three/canvas-cleanup.tsx) to guard disposal logic:
     ```tsx
     const disposed = useRef(false);
     useEffect(() => {
       return () => {
         if (disposed.current) return;

         try {
           scene.traverse((object) => {
             if (object instanceof THREE.Mesh) {
               if (object.geometry) object.geometry.dispose();
               if (object.material) {
                 if (Array.isArray(object.material)) {
                   object.material.forEach((mat) => mat.dispose?.());
                 } else {
                   object.material.dispose?.();
                 }
               }
             }
           });

           const ctx = gl?.getContext();
           if (ctx && !ctx.isContextLost()) {
             gl.dispose();
           }
         } catch (e) {
         } finally {
           disposed.current = true;
         }
       };
     }, [gl, scene]);
     ```
   - Removed redundant `gl.forceContextLoss()` call immediately following `gl.dispose()` to prevent triggering duplicate context loss calls that caused the `WARNING: loseContext: context already lost` message.
   - Guarded disposal with `disposed.current` ref across all canvas components (`HeroCanvas`, `CardCanvas`, `OrbitScene`).

## Outcome

- ✅ Impact: All email links are direct native `<a>` tags with no JS click interception; WebGL disposal logic is safely guarded with single-execution refs and context check to prevent `loseContext: context already lost` warnings.
- 🧪 Tests: `npm run build` completed cleanly.
- 📁 Files: `app/contact/contact-client.tsx`, `components/site-footer.tsx`, `components/three/canvas-cleanup.tsx`
- 🔁 Next prompts: None
- 🧠 Reflection: Removing duplicate `gl.forceContextLoss()` after `gl.dispose()` and ensuring `disposed.current` ref protection avoids double context disposal warnings during React Strict Mode unmount/remounts.
