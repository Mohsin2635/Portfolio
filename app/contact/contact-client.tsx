"use client";

import React from "react";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function ContactClient() {
  return (
    <div className="mx-auto max-w-3xl space-y-12 pb-12 pt-6">
      {/* Header */}
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-mono text-gold">
          <MessageSquare className="h-3.5 w-3.5" />
          <span>Get In Touch</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
          Let's build something.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Open for collaborations, agentic AI development, full-stack web engineering, and technical discussions.
        </p>
      </div>

      {/* Main Mailto & Social Contact Card */}
      <Card className="border-gold/40 bg-card/80 p-8 shadow-2xl backdrop-blur-2xl space-y-8">
        <div className="text-center space-y-4">
          <span className="font-mono text-xs text-gold uppercase tracking-widest block">
            Direct Email Action
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-3 font-serif text-2xl sm:text-3xl font-bold text-foreground hover:text-gold transition-colors underline decoration-gold/40 underline-offset-8"
          >
            <Mail className="h-6 w-6 text-gold" />
            <span>{siteConfig.email}</span>
          </a>
        </div>

        <div className="flex justify-center pt-2">
          <Button asChild variant="gold" size="lg" className="gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <a href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4" />
              <span>Send Email Directly</span>
            </a>
          </Button>
        </div>

        {/* Secondary Links */}
        <div className="border-t border-border/80 pt-6 space-y-4">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block text-center">
            Or connect via social networks
          </span>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline" size="sm" className="gap-2 text-xs">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4 fill-current text-gold" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2 text-xs">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4 fill-current text-gold" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
