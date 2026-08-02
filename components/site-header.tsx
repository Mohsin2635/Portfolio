"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Monogram Brand Logo */}
        <Logo variant="full" tone="dark" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md hover:text-gold",
                  isActive
                    ? "text-gold font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-card/60 text-foreground hover:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-gold" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/80 bg-card/95 backdrop-blur-2xl px-4 pt-2 pb-6 animate-fade-lift">
          <nav className="flex flex-col gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-all",
                    isActive
                      ? "bg-gold/10 text-gold border border-gold/30"
                      : "text-foreground hover:bg-accent/40"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_6px_rgba(212,175,55,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
