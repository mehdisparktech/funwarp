export type NavLink = { href: string; label: string };

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type ProjectItem = {
  name: string;
  industry: string;
  description: string;
  tech: string[];
  results: string;
  accent: string;
  link?: string;
};

export type NumberedItem = {
  number: string;
  title: string;
  description: string;
};

export type TechGroup = {
  category: string;
  items: string[];
};

export type CardItem = {
  title: string;
  description: string;
};

export type FunReason = {
  title: string;
  copy: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

export type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

export type TeamStat = {
  value: string;
  label: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  initials: string;
  accent: string;
  image: string;
  website?: string;
  social: {
    linkedin: string;
    github: string;
    x: string;
  };
};

export type FaqItem = {
  q: string;
  a: string;
};

export type HeroCapability = {
  number: string;
  label: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type SiteContent = {
  site: {
    brand: string;
    tagline: string;
    url: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    socialLinks: string[];
  };
  navbar: {
    brand: string;
    links: NavLink[];
    ctaLabel: string;
    ctaMobileLabel: string;
    ctaHref: string;
  };
  hero: {
    badge: string;
    headline: string;
    megaText: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    capabilities: HeroCapability[];
  };
  trustBar: {
    logos: string[];
  };
  projects: {
    eyebrow: string;
    headline: string;
    cardCta: string;
    items: ProjectItem[];
  };
  services: {
    eyebrow: string;
    headline: string;
    description: string;
    items: ServiceItem[];
  };
  process: {
    eyebrow: string;
    headline: string;
    megaText: string;
    items: NumberedItem[];
  };
  principles: {
    eyebrow: string;
    headline: string;
    description: string;
    items: NumberedItem[];
  };
  technology: {
    headline: string;
    description: string;
    groups: TechGroup[];
  };
  fun: {
    eyebrow: string;
    headline: string;
    description: string;
    reasons: FunReason[];
  };
  experience: {
    eyebrow: string;
    headline: string;
    cards: CardItem[];
    journey: string[];
  };
  about: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    stats: StatItem[];
  };
  team: {
    eyebrow: string;
    headline: string;
    description: string;
    stats: TeamStat[];
    members: TeamMember[];
    ctaHeadline: string;
    ctaDescription: string;
    ctaLabel: string;
    ctaHref: string;
  };
  testimonials: {
    eyebrow: string;
    headline: string;
    items: TestimonialItem[];
  };
  global: {
    eyebrow: string;
    headline: string;
    description: string;
    mapTitle: string;
    mapSubtitle: string;
    mapCount: string;
    mapEmbedUrl: string;
    mapDisclaimer: string;
    regionsLabel: string;
    regions: string[];
  };
  faq: {
    eyebrow: string;
    headline: string;
    items: FaqItem[];
  };
  cta: {
    eyebrow: string;
    headline: string;
    description: string;
    megaText: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  footer: {
    brand: string;
    tagline: string;
    columns: FooterColumn[];
    statusLabel: string;
    statusText: string;
    copyright: string;
    bottomLinks: NavLink[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    description: string;
    successMessage: string;
    submitLabel: string;
    projectTypes: string[];
    budgets: string[];
    timelines: string[];
  };
  privacy: {
    title: string;
    body: string;
  };
  terms: {
    title: string;
    body: string;
  };
};

export type ContactLead = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  company: string;
  website: string;
  building: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

export type AdminSectionKey = Exclude<keyof SiteContent, never>;
