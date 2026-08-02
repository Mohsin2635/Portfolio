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
    description: "Designing autonomous, stateful agent chains and tool-use pipelines that reason through multi-step engineering tasks.",
    shapeType: "torusKnot",
  },
  {
    id: "lightweight-web",
    title: "Lightweight Web",
    description: "Building fast, zero-bloat web applications using Next.js App Router, Tailwind CSS v4, and minimal client JS dependencies.",
    shapeType: "octahedron",
  },
  {
    id: "practical-ai",
    title: "Practical AI",
    description: "Embedding RAG search, intelligent vector retrieval, and structured JSON outputs into responsive user experiences.",
    shapeType: "icosahedron",
  },
];

export const projects: Project[] = [
  {
    id: "humanoid-robotics-book",
    index: "01",
    title: "Humanoid Robotics Book",
    summary: "Documentation platform & Q&A retrieval agent for advanced physical AI robotics.",
    description: "Interactive documentation system and vector-search RAG assistant built to guide students through humanoid robotics kinematics, control systems, and embodied AI fundamentals.",
    tags: ["Agentic AI", "Next.js", "Python", "RAG"],
    fullTechStack: ["Next.js App Router", "TypeScript", "Python (OpenAI Agent SDK)", "ChromaDB", "Tailwind CSS v4"],
    highlights: [
      "Sub-second vector retrieval over 500+ pages of technical robotics documentation.",
      "Custom dynamic mathematical formula renderer using LaTeX syntax.",
      "Embedded interactive assistant capable of explaining code snippets line-by-line.",
    ],
    // [SITE OWNER PLACEHOLDER]: Update project 01 case-study link before live launch
    link: "https://github.com/example-username/humanoid-robotics-book",
  },
  {
    id: "bandage-ecommerce",
    index: "02",
    title: "Bandage E-commerce",
    summary: "CMS-driven storefront engineered for high performance and modular catalog management.",
    description: "Full-featured e-commerce digital storefront built with strict atomic UI components, responsive layout systems, cart management, and seamless category navigation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "CMS"],
    fullTechStack: ["Next.js App Router", "React 19", "Sanity CMS", "Tailwind CSS v4", "Lucide React"],
    highlights: [
      "Optimized server-side component architecture for instant product catalog filtering.",
      "Custom responsive drawer navigation with zero layout shift on mobile viewports.",
      "Complete design token integration using CSS custom variables.",
    ],
    // [SITE OWNER PLACEHOLDER]: Update project 02 case-study link before live launch
    link: "https://github.com/example-username/bandage-ecommerce",
  },
  {
    id: "portfolio-experience",
    index: "03",
    title: "Portfolio Experience",
    summary: "Interactive Next.js portfolio featuring Three.js visual accents & noir-gold aesthetics.",
    description: "An intentional personal portfolio site built with Next.js 15, Tailwind CSS v4 OKLCH dark theme tokens, interactive 3D wireframe canvases, and smooth page transitions.",
    tags: ["Next.js 15", "Three.js", "R3F", "Tailwind v4"],
    fullTechStack: ["Next.js 15 App Router", "React Three Fiber", "@react-three/drei", "Tailwind CSS v4", "TypeScript"],
    highlights: [
      "Dynamic imports for 3D canvases to maintain 0-byte initial server render payload.",
      "Native mobile fallback (<768px) replacing WebGL with static visual assets.",
      "Pure CSS hardware-accelerated entrance and page transition keyframe animations.",
    ],
    // [SITE OWNER PLACEHOLDER]: Update project 03 case-study link before live launch
    link: "https://github.com/example-username/portfolio-experience",
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
    description: "Architecting multi-agent reasoning loops, automated task resolution CLI pipelines, and interactive web tools powered by modern LLM orchestration.",
  },
  {
    year: "2025",
    title: "Full-Stack Web Development",
    roleOrContext: "Open Source & Client Projects",
    description: "Shipped CMS-driven storefronts, interactive documentation platforms, and modern Next.js App Router codebases with tailored design systems.",
  },
  {
    year: "2024",
    title: "Software Engineering Student",
    roleOrContext: "Undergraduate Degree",
    description: "Deepened core computer science foundations in data structures, algorithms, object-oriented design, relational databases, and computer systems.",
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
