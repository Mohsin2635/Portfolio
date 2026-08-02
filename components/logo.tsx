import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoProps {
  variant?: "mark" | "full" | "compact" | "wordmark";
  tone?: "dark" | "light" | "mono";
  className?: string;
  showLink?: boolean;
}

export function Logo({
  variant = "full",
  tone = "dark",
  className,
  showLink = true,
}: LogoProps) {
  // Tone styling maps
  const toneClasses = {
    dark: "text-foreground hover:text-gold transition-colors",
    light: "text-zinc-100 hover:text-amber-300 transition-colors",
    mono: "text-current",
  };

  const markGlowClass = tone === "mono" ? "" : "group-hover:border-gold/60 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]";

  // Monogram SVG Mark
  const MonogramMark = (
    <div
      className={cn(
        "relative flex items-center justify-center w-9 h-9 rounded-lg bg-card/80 border border-border/80 text-gold transition-all duration-300 group-hover:scale-105",
        markGlowClass
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-gold stroke-current"
      >
        {/* Interlocked MM Monogram Vector Path */}
        <path
          d="M6 28V8L14 20L22 8V28"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        />
        <path
          d="M14 28V14L22 26L30 14V28"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-amber-200 opacity-100"
        />
      </svg>
    </div>
  );

  // Wordmark element
  const Wordmark = (
    <div className="flex flex-col leading-none">
      <span className="font-serif text-lg font-bold tracking-tight text-foreground group-hover:text-gold transition-colors">
        Muhammad Mohsin
      </span>
      {variant === "full" && (
        <span className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground mt-0.5">
          Agentic Dev
        </span>
      )}
    </div>
  );

  const content = (
    <div
      className={cn(
        "group inline-flex items-center gap-3 select-none",
        toneClasses[tone],
        className
      )}
    >
      {variant !== "wordmark" && MonogramMark}
      {variant !== "mark" && Wordmark}
    </div>
  );

  if (showLink) {
    return (
      <Link href="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
