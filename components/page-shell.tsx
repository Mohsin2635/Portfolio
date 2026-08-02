"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";

export interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mx", `${x}px`);
    containerRef.current.style.setProperty("--my", `${y}px`);
  };

  return (
    <div
      key={pathname}
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative min-h-[calc(100vh-4rem)] w-full animate-page-in"
    >
      {/* Page-Wide Radial Gold Glow Layer (Behind Content, Pointer-Events None) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-60"
          style={{
            background:
              "radial-gradient(600px circle at var(--mx, 50%) var(--my, 200px), rgba(212, 175, 55, 0.14), transparent 70%)",
          }}
        />
      </div>

      {/* Gold Light Sweep Route-Transition Overlay */}
      <div
        key={`sweep-${pathname}`}
        className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-gold/25 to-transparent mix-blend-screen animate-page-sweep" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
