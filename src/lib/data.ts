export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/#insights", label: "Insights" },
] as const;

export const services = [
  {
    title: "Web Applications",
    description:
      "Fast, scalable and beautiful web applications built for real users.",
    icon: "globe",
  },
  {
    title: "Mobile Applications",
    description:
      "Modern iOS and Android applications with smooth user experiences.",
    icon: "smartphone",
  },
  {
    title: "SaaS Products",
    description: "Scalable SaaS platforms designed for growth.",
    icon: "layers",
  },
  {
    title: "AI & Intelligent Software",
    description: "AI-powered products, automation and intelligent workflows.",
    icon: "sparkles",
  },
  {
    title: "Custom Software",
    description:
      "Software engineered around your exact business requirements.",
    icon: "code",
  },
  {
    title: "UI/UX & Product Design",
    description: "Interfaces that are simple, intuitive and built to convert.",
    icon: "palette",
  },
] as const;

export const projects = [
  {
    name: "FlowDesk",
    industry: "Operations",
    description:
      "Business workflow automation platform that turns messy processes into clear, trackable systems.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    results: "42% faster ops throughput",
    accent: "from-taupe/40 via-cream/15 to-transparent",
  },
  {
    name: "Medora",
    industry: "Healthcare",
    description:
      "Modern healthcare management application built for clinics that need clarity under pressure.",
    tech: ["React", "TypeScript", "Supabase"],
    results: "3x faster patient intake",
    accent: "from-cream/30 via-taupe/20 to-transparent",
  },
  {
    name: "Finora",
    industry: "Fintech",
    description:
      "Financial analytics SaaS platform delivering live insights without spreadsheet chaos.",
    tech: ["Next.js", "Python", "AWS"],
    results: "Real-time reporting at scale",
    accent: "from-slate/60 via-taupe/25 to-transparent",
  },
  {
    name: "Shoply",
    industry: "E-commerce",
    description:
      "Scalable e-commerce experience designed for conversion, speed and growth.",
    tech: ["Flutter", "Node.js", "Cloudflare"],
    results: "+28% conversion lift",
    accent: "from-taupe/50 via-cream/20 to-transparent",
  },
] as const;

export const principles = [
  {
    number: "01",
    title: "Speed",
    description:
      "We move quickly without sacrificing engineering quality.",
  },
  {
    number: "02",
    title: "Clarity",
    description: "Clear communication. Clear scope. Clear execution.",
  },
  {
    number: "03",
    title: "Craft",
    description: "Every interface and every line of code has a purpose.",
  },
  {
    number: "04",
    title: "Ownership",
    description: "We treat your product like we own the outcome.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, users and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define architecture, features and roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description: "Turn ideas into intuitive product experiences.",
  },
  {
    number: "04",
    title: "Build",
    description: "Engineering, integrations, testing and iteration.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy, monitor and optimize.",
  },
  {
    number: "06",
    title: "Scale",
    description: "Continue improving as the product grows.",
  },
] as const;

export const technologies = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Flutter"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Supabase", "PostgreSQL"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Vercel", "Cloudflare"],
  },
  {
    category: "AI",
    items: ["OpenAI", "AI APIs", "Machine Learning", "Automation"],
  },
] as const;

export const experienceCards = [
  {
    title: "Clear Communication",
    description: "No disappearing developers. No confusing updates.",
  },
  {
    title: "Predictable Delivery",
    description: "Transparent milestones and realistic timelines.",
  },
  {
    title: "Long-Term Partnership",
    description: "We don't disappear after launch.",
  },
] as const;

export const journey = ["Idea", "Design", "Build", "Launch", "Growth"] as const;

export const testimonials = [
  {
    quote:
      "FUNWARP turned a rough idea into a product we could actually launch.",
    name: "Alex Rivera",
    role: "Founder, Placeholder Co.",
  },
  {
    quote:
      "The communication was excellent and the engineering quality exceeded our expectations.",
    name: "Jordan Lee",
    role: "Product Lead, Sample Labs",
  },
  {
    quote:
      "It felt less like hiring an agency and more like adding an engineering team.",
    name: "Sam Okonkwo",
    role: "CEO, Demo Ventures",
  },
] as const;

export const aboutStats = [
  { value: 40, suffix: "+", label: "Projects" },
  { value: 25, suffix: "+", label: "Clients" },
  { value: 12, suffix: "", label: "Countries" },
  { value: 6, suffix: "+", label: "Years Experience" },
] as const;

export const globalRegions = [
  "Bangladesh",
  "United States",
  "United Kingdom",
  "Europe",
  "Australia",
  "Canada",
  "Middle East",
] as const;

export const teamStats = [
  { value: "4+", label: "Core Specialists" },
  { value: "40+", label: "Projects Delivered" },
  { value: "20+", label: "Years Combined Experience" },
  { value: "12", label: "Countries Served" },
] as const;

export const team = [
  {
    name: "MD Irfan Hossain",
    role: "Senior App Developer",
    bio: "Builds fast, reliable mobile experiences that feel great on every device.",
    skills: ["Flutter", "Dart", "iOS", "Android", "Firebase"],
    initials: "IH",
    accent: "from-taupe/50 to-cream/30",
    image: "/team/irfan-hossain.png",
    social: {
      linkedin: "#",
      github: "#",
      x: "#",
    },
  },
  {
    name: "Mehdi Hasan",
    role: "Senior Web Developer",
    bio: "Turns complex product ideas into fast, scalable and intuitive web experiences.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Frontend Architecture"],
    initials: "MH",
    accent: "from-cream/40 to-taupe/40",
    image: "/team/mehdi-hasan.png",
    social: {
      linkedin: "#",
      github: "#",
      x: "#",
    },
  },
  {
    name: "Sabbir Ahmed",
    role: "UI/UX Designer",
    bio: "Designs interfaces that make complex products feel simple.",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Product Design"],
    initials: "SA",
    accent: "from-slate/80 to-taupe/50",
    image: "/team/ui-designer.png",
    website: "https://rpsabbir303.framer.website/",
    social: {
      linkedin: "#",
      github: "#",
      x: "#",
    },
  },
  {
    name: "MD Abdur Razzak Rakib",
    role: "Backend Developer",
    bio: "Builds secure, scalable systems that power everything behind the interface.",
    skills: ["Node.js", "Python", "PostgreSQL", "Supabase", "REST API"],
    initials: "RR",
    accent: "from-taupe/60 to-cream/25",
    image: "/team/abdur-razzak-rakib.png",
    social: {
      linkedin: "#",
      github: "#",
      x: "#",
    },
  },
] as const;

export const clientLogos = [
  "Nexora",
  "Brightlane",
  "Orbital",
  "Kinetic",
  "Lumina",
  "Vaultly",
] as const;

export const projectTypes = [
  "Web App",
  "Mobile App",
  "SaaS",
  "AI Product",
  "Custom Software",
  "Other",
] as const;

export const budgets = [
  "Under $5k",
  "$5k–$15k",
  "$15k–$50k",
  "$50k+",
] as const;

export const timelines = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "Flexible",
] as const;

export const faqs = [
  {
    q: "Do we need a full product brief before starting?",
    a: "No. A rough idea is enough. We'll help shape scope, priorities and milestones during discovery.",
  },
  {
    q: "Can FUNWARP work with our existing tools and stack?",
    a: "Yes. We integrate with common platforms, APIs and cloud tools, or recommend a cleaner stack when needed.",
  },
  {
    q: "Do you build both design and engineering?",
    a: "Yes. Product design, frontend, backend and mobile specialists collaborate as one team.",
  },
  {
    q: "How do timelines and communication work?",
    a: "Clear milestones, predictable updates and a dedicated point of contact — no disappearing developers.",
  },
  {
    q: "Can you continue after launch?",
    a: "Absolutely. We support iteration, monitoring and long-term product growth after launch.",
  },
] as const;
