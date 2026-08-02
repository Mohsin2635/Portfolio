import React from "react";
import { Metadata } from "next";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Muhammad Mohsin, personal engineering manifesto, core skills, and milestone trajectory.",
};

export default function AboutPage() {
  return <AboutClient />;
}
