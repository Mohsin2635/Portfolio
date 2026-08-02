import React from "react";
import { Metadata } from "next";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description: "Background, engineering principles, technical skills, and milestones for Muhammad Mohsin.",
};

export default function AboutPage() {
  return <AboutClient />;
}
