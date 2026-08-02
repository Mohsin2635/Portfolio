"use client";

import React from "react";
import { ExternalLink, CheckCircle2, Layers } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/content";

export interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[85vh] overflow-y-auto border-gold/40 bg-card/95 backdrop-blur-2xl">
        <DialogHeader className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-gold border border-gold/30 px-2 py-0.5 rounded-md bg-gold/10">
              Project {project.index}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="gold">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-serif text-foreground font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-gold/90 font-medium">
            {project.summary}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4 border-t border-border/80 text-sm">
          {/* Detailed Overview */}
          <div>
            <h4 className="font-serif text-base font-semibold text-foreground mb-2">
              Overview
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture & Highlights */}
          <div>
            <h4 className="font-serif text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" /> Key Engineering Highlights
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gold font-bold text-xs mt-1">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Tech Stack */}
          <div>
            <h4 className="font-serif text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              <Layers className="h-4 w-4 text-gold" /> Full Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.fullTechStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border/80 bg-accent/40 px-2.5 py-1 font-mono text-xs text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link */}
          {project.link && (
            <div className="pt-4 border-t border-border/80 flex justify-end">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="gold" className="gap-2">
                  <span>View Project Source</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
