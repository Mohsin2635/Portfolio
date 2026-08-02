"use client";

import React, { useState } from "react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectModal } from "@/components/project-modal";
import { projects, Project } from "@/lib/content";

export function ProjectsClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-mono text-gold">
          <FolderGit2 className="h-3.5 w-3.5" />
          <span>Selected Work</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
          Projects & Experiments
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Detailed case studies showcasing agentic AI tools, documentation retrieval systems, performance-focused web apps, and modern frontend design.
        </p>
      </div>

      {/* Projects 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative cursor-pointer overflow-hidden border border-border/80 bg-card/70 card-hover-effect flex flex-col justify-between"
          >
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-gold/40 group-hover:text-gold transition-colors">
                  {project.index}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground group-hover:border-gold/50 group-hover:text-gold transition-all">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <CardTitle className="font-serif text-2xl group-hover:text-gold transition-colors">
                {project.title}
              </CardTitle>

              <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                {project.summary}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="gold" className="text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Detail Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
