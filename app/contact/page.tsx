import React from "react";
import { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Muhammad Mohsin for agentic AI collaborations, software engineering, and inquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
