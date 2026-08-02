"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles, MapPin, Briefcase, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";
import { capabilities } from "@/lib/content";

// Dynamically import 3D Canvas components with ssr: false
const HeroCanvas = dynamic(
  () => import("@/components/three/hero-canvas").then((mod) => mod.HeroCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-72 w-72 items-center justify-center rounded-full border border-gold/20 bg-card/20 backdrop-blur-sm">
        <span className="font-mono text-xs text-gold/60">Loading 3D Visual...</span>
      </div>
    ),
  }
);

const CardCanvas = dynamic(
  () => import("@/components/three/card-canvas").then((mod) => mod.CardCanvas),
  { ssr: false }
);

export default function HomePage() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <div className="space-y-20 pb-12">
      {/* Hero Section */}
      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-mono text-gold shadow-[0_0_12px_rgba(212,175,55,0.2)]">
            <Sparkles className="h-3.5 w-3.5 text-gold animate-pulse" />
            <span>Available for collaboration</span>
          </div>

          {/* Name & Headline */}
          <div className="space-y-3">
            <span className="font-serif text-lg text-gold/90 font-medium block">
              {siteConfig.name}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              I build <span className="gold-gradient-text">agentic software</span> with intent.
            </h1>
          </div>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {siteConfig.subheadline} Focused on clean TypeScript design systems, autonomous LLM agent execution, and zero-bloat web architecture.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/projects">
              <Button variant="gold" size="lg" className="gap-2 group">
                <span>View projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get in touch
              </Button>
            </Link>
          </div>

          {/* Skill Tags */}
          <div className="pt-4 flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono text-muted-foreground mr-2">Core Focus:</span>
            {["Agentic Dev", "OpenAI Agent SDK", "Python", "MySQL", "Modern Web"].map((skill) => (
              <Badge key={skill} variant="default" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* 3D Wireframe Canvas Accent */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <HeroCanvas />
        </div>
      </section>

      {/* Info Strip */}
      <section className="relative z-10 border-y border-border/60 bg-card/30 py-6 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold border border-gold/30">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase text-muted-foreground">Location</span>
              <span className="text-sm font-semibold text-foreground">{siteConfig.location}</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold border border-gold/30">
              <Briefcase className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase text-muted-foreground">Role</span>
              <span className="text-sm font-semibold text-foreground">{siteConfig.role}</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold border border-gold/30">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase text-muted-foreground">Specialization</span>
              <span className="text-sm font-semibold text-foreground">{siteConfig.focus}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section (3-Column Grid) */}
      <section className="relative z-10 space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-gold uppercase tracking-widest">
            [01] / Core Capabilities
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Architecting with Precision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <Card
              key={cap.id}
              className="relative overflow-hidden group cursor-pointer card-hover-effect min-h-[250px] flex flex-col justify-between border border-border/80 bg-card/80"
              onMouseEnter={() => setHoveredCardId(cap.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              {/* Background 3D Canvas (z-0, top-right anchored) */}
              <CardCanvas
                shapeType={cap.shapeType}
                isHovered={hoveredCardId === cap.id}
              />

              {/* Gradient Mask for contrast and 100% text legibility (z-1) */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/65 to-transparent pointer-events-none z-[1]" />

              <CardHeader className="relative z-10 space-y-4">
                <div className="flex justify-end items-start">
                  <span className="font-mono text-xs text-muted-foreground font-semibold bg-card/60 px-2 py-0.5 rounded border border-border/40">
                    0{index + 1}
                  </span>
                </div>
                <CardTitle className="group-hover:text-gold transition-colors pt-2 font-bold">
                  {cap.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground text-xs leading-relaxed">
                  {cap.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
