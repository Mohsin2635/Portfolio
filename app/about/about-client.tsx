"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { UserCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";
import { skills, timelineEntries, manifestoPrinciples } from "@/lib/content";

const OrbitScene = dynamic(
  () => import("@/components/three/orbit-scene").then((mod) => mod.OrbitScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-64 w-64 items-center justify-center rounded-full border border-gold/20 bg-card/20 backdrop-blur-sm">
        <span className="font-mono text-xs text-gold/60">Loading Orbit Visual...</span>
      </div>
    ),
  }
);

export function AboutClient() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const [timelineVisible, setTimelineVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const timelineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }
    if (timelineRef.current) {
      timelineObserver.observe(timelineRef.current);
    }

    return () => {
      skillsObserver.disconnect();
      timelineObserver.disconnect();
    };
  }, []);

  return (
    <div className="space-y-20 pb-12">
      {/* Hero Section */}
      <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-mono text-gold shadow-[0_0_12px_rgba(212,175,55,0.2)]">
            <UserCheck className="h-3.5 w-3.5" />
            <span>[01] / About</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            A quiet practitioner.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I am <strong className="text-foreground">{siteConfig.name}</strong>, a software engineering student based in {siteConfig.location}. I approach software engineering with high restraint—striving to build calm, intent-driven agentic tools and fast web experiences without unnecessary bloat.
          </p>

          {/* Stat Callouts (3 Columns) */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/80 text-center sm:text-left">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-gold block">3+</span>
              <span className="font-mono text-xs text-muted-foreground">Projects Shipped</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-gold block">6</span>
              <span className="font-mono text-xs text-muted-foreground">Core Skills</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-gold block">∞</span>
              <span className="font-mono text-xs text-muted-foreground">Curiosity</span>
            </div>
          </div>
        </div>

        {/* 3D Orbit Accent */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <OrbitScene />
        </div>
      </section>

      {/* Manifesto Section (3 Principles) */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-gold uppercase tracking-widest">
            Engineering Manifesto
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Guiding Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {manifestoPrinciples.map((principle) => (
            <Card key={principle.number} className="border-border/80 bg-card/60 card-hover-effect">
              <CardHeader className="space-y-3">
                <span className="font-mono text-2xl font-bold text-gold/50">
                  {principle.number}
                </span>
                <CardTitle className="text-xl text-foreground">
                  {principle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                  {principle.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills & Animated Progress Bars */}
      <section ref={skillsRef} className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-gold uppercase tracking-widest">
            Technical Proficiency
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Core Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="border-border/80 bg-card/60 p-5 space-y-3 card-hover-effect">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm font-semibold text-foreground">
                  {skill.name}
                </span>
                <Badge variant="gold" className="text-[10px]">
                  {skill.tag}
                </Badge>
              </div>
              <Progress value={skillsVisible ? skill.percentage : 0} />
              <div className="flex justify-end text-[10px] font-mono text-muted-foreground">
                <span>{skill.percentage}% Proficiency</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Milestone Timeline */}
      <section ref={timelineRef} className="space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-gold uppercase tracking-widest">
            Trajectory
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Key Milestones
          </h2>
        </div>

        <div className="relative pl-6 space-y-8 border-l border-gold/30">
          {timelineEntries.map((entry, index) => (
            <div
              key={index}
              className="relative group transition-all duration-700 ease-out"
              style={{
                opacity: timelineVisible ? 1 : 0,
                transform: timelineVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold bg-background group-hover:bg-gold transition-colors" />

              <div className="space-y-1">
                <span className="font-mono text-xs text-gold font-medium">
                  {entry.year}
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {entry.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground block pb-1">
                  {entry.roleOrContext}
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
