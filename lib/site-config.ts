export interface SiteConfig {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  role: string;
  location: string;
  focus: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
  };
  navLinks: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Muhammad Mohsin",
  title: "Muhammad Mohsin — Interactive Portfolio",
  headline: "I build agentic software with intent.",
  subheadline: "I'm a software engineering student building resilient AI workflows, calm interfaces, and intent-driven web systems.",
  role: "Software Engineering Student",
  location: "Karachi, Pakistan",
  focus: "Agentic AI & Web Systems",
  // [SITE OWNER PLACEHOLDER]: Update real email address before live launch
  email: "m0826352@gmail.com",
  socials: {
    // [SITE OWNER PLACEHOLDER]: Update real GitHub profile URL before live launch
    github: "https://github.com/Mohsin2635",
    // [SITE OWNER PLACEHOLDER]: Update real LinkedIn profile URL before live launch
    linkedin: "https://www.linkedin.com/in/muhammad-mohsin-m0826/",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
