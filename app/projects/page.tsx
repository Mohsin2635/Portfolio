import React from "react";
import { Metadata } from "next";
import { ProjectsClient } from "./projects-client";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Explore personal projects, agentic AI documentation platforms, and CMS storefronts built by Muhammad Mohsin.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
