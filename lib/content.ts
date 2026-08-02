export interface Capability {
  id: string;
  title: string;
  description: string;
  shapeType: "torusKnot" | "octahedron" | "icosahedron";
}

export interface Project {
  id: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  fullTechStack: string[];
  highlights: string[];
  // [SITE OWNER PLACEHOLDER]: Update external link URL before live launch
  link?: string;
}

export interface Skill {
  name: string;
  tag: string;
  percentage: number;
}

export interface TimelineEntry {
  year: string;
  title: string;
  roleOrContext: string;
  description: string;
}

export interface ManifestoPrinciple {
  number: string;
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    id: "agentic-workflows",
    title: "Agentic Workflows",
    description: "I design autonomous, stateful agent chains and tool-use pipelines that reason through multi-step engineering tasks.",
    shapeType: "torusKnot",
  },
  {
    id: "lightweight-web",
    title: "Lightweight Web",
    description: "I build fast, zero-bloat web applications using Next.js App Router, Tailwind CSS v4, and minimal client JS dependencies.",
    shapeType: "octahedron",
  },
  {
    id: "practical-ai",
    title: "Practical AI",
    description: "I embed RAG search, intelligent vector retrieval, and structured JSON outputs into responsive user experiences.",
    shapeType: "icosahedron",
  },
];

export const projects: Project[] = [
  {
    id: "humanoid-robotics-book",
    index: "01",
    title: "Humanoid Robotics Book",
    summary: "An interactive documentation platform and Q&A retrieval agent I built for physical AI robotics.",
    description: "An interactive documentation system and vector-search RAG assistant I built to guide students through humanoid robotics kinematics, control systems, and embodied AI fundamentals.",
    tags: ["Agentic AI", "Next.js", "Python", "RAG"],
    fullTechStack: ["Next.js App Router", "TypeScript", "Python (OpenAI Agent SDK)", "ChromaDB", "Tailwind CSS v4"],
    highlights: [
      "Built sub-second vector retrieval over 50+ pages of technical robotics documentation.",
      "Integrated a custom dynamic mathematical formula renderer using LaTeX syntax.",
      "Embedded an interactive assistant capable of explaining code snippets line-by-line.",
    ],
    // [SITE OWNER PLACEHOLDER]: Update project 01 case-study link before live launch
    link: "https://humanoid-robotics-book-k6pr.vercel.app/",
  },
  {
    id: "bandage-ecommerce",
    index: "02",
    title: "Bandage E-commerce",
    summary: "A CMS-driven storefront I built focused on performance and modular catalog management.",
    description: "A full-featured e-commerce storefront I built using atomic UI components, responsive layout systems, cart management, and category navigation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "CMS"],
    fullTechStack: ["Next.js App Router", "React 19", "Sanity CMS", "Tailwind CSS v4", "Lucide React"],
    highlights: [
      "Optimized server-side component architecture for fast product catalog filtering.",
      "Designed a custom responsive drawer navigation with zero layout shift on mobile viewports.",
      "Integrated custom OKLCH design tokens using CSS variables.",
    ],
    // [SITE OWNER PLACEHOLDER]: Update project 02 case-study link before live launch
    link: "https://e-commerce-hackathone-project-template-5.vercel.app/",
  },
  {
    id: "portfolio-experience",
    index: "03",
    title: "Portfolio Experience",
    summary: "My personal portfolio site built with Next.js 15, Three.js, and a dark noir-gold aesthetic.",
    description: "My personal portfolio site built with Next.js 15, Tailwind CSS v4 OKLCH dark theme tokens, interactive 3D wireframe canvases, and smooth page transitions.",
    tags: ["Next.js 15", "Three.js", "R3F", "Tailwind v4"],
    fullTechStack: ["Next.js 15 App Router", "React Three Fiber", "@react-three/drei", "Tailwind CSS v4", "TypeScript"],
    highlights: [
      "Used dynamic imports for 3D canvases to keep initial server render payloads small.",
      "Implemented a mobile fallback (<768px) replacing WebGL with static visual assets.",
      "Built CSS hardware-accelerated entrance and page transition keyframe animations.",
    ],
    // [SITE OWNER PLACEHOLDER]: Update project 03 case-study link before live launch
    link: "https://mohsinportfolio-sable.vercel.app/",
  },
];

export const skills: Skill[] = [
  { name: "Agentic Workflows & OpenAI SDK", tag: "AI Engineering", percentage: 92 },
  { name: "TypeScript & Next.js App Router", tag: "Frontend Systems", percentage: 90 },
  { name: "Python & Data Structures", tag: "Core Engineering", percentage: 88 },
  { name: "MySQL & Relational Modeling", tag: "Database", percentage: 84 },
  { name: "Tailwind CSS v4 & UI Systems", tag: "Styling & Design", percentage: 94 },
  { name: "Three.js & WebGL Visuals", tag: "3D & Interactive", percentage: 78 },
];

export const timelineEntries: TimelineEntry[] = [
  {
    year: "2026 — Present",
    title: "Agentic AI Developer & Student",
    roleOrContext: "Independent Engineering Focus",
    description: "I architect multi-agent reasoning loops, automated task resolution CLI pipelines, and interactive web tools powered by modern LLM orchestration.",
  },
  {
    year: "2025",
    title: "Full-Stack Web Development",
    roleOrContext: "Open Source & Client Projects",
    description: "I shipped CMS-driven storefronts, interactive documentation platforms, and modern Next.js App Router codebases with tailored design systems.",
  },
  {
    year: "2024",
    title: "Software Engineering Student",
    roleOrContext: "Undergraduate Degree",
    description: "I focused on core computer science foundations in data structures, algorithms, object-oriented design, relational databases, and computer systems.",
  },
];

export const manifestoPrinciples: ManifestoPrinciple[] = [
  {
    number: "01",
    title: "Restraint",
    description: "Purposeful software over noisy bloat. Every line of code, visual accent, and animation should serve clarity and intent.",
  },
  {
    number: "02",
    title: "Reusability",
    description: "Modular component architecture and clean design tokens that enable long-term stability and effortless extension.",
  },
  {
    number: "03",
    title: "Understanding",
    description: "Building deep comprehension from first principles to production systems—never masking symptoms or leaning on unverified assumptions.",
  },
];
