import React from "react";
import { Metadata } from "next";
import { ProjectsClient } from "./projects-client";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Selected software engineering projects, agentic AI tools, and web applications built by Muhammad Mohsin.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
