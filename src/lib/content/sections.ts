import type { AdminSectionKey } from "./types";

export const ADMIN_SECTIONS: {
  key: AdminSectionKey;
  label: string;
  description: string;
}[] = [
    { key: "site", label: "Site & SEO", description: "Brand, meta, social links" },
    { key: "navbar", label: "Navbar", description: "Logo, links, CTA" },
    { key: "hero", label: "Hero", description: "Homepage hero section" },
    { key: "trustBar", label: "Trust bar", description: "Client logos marquee" },
    { key: "projects", label: "Projects", description: "Selected work" },
    { key: "services", label: "Services", description: "Capabilities list" },
    { key: "process", label: "Process", description: "Six-step process" },
    { key: "principles", label: "Principles", description: "Why Funwarp" },
    { key: "technology", label: "Technology", description: "Tech stacks" },
    { key: "fun", label: "Why FUN", description: "Fun section cards" },
    { key: "experience", label: "Experience", description: "Client experience" },
    { key: "about", label: "About", description: "Story and stats" },
    { key: "team", label: "Team", description: "People and profiles" },
    { key: "testimonials", label: "Testimonials", description: "Client quotes" },
    { key: "global", label: "Global", description: "Map and regions" },
    { key: "faq", label: "FAQ", description: "Questions and answers" },
    { key: "cta", label: "Final CTA", description: "Bottom call to action" },
    { key: "footer", label: "Footer", description: "Footer columns and status" },
    { key: "contact", label: "Contact page", description: "Form copy and options" },
    { key: "privacy", label: "Privacy", description: "Privacy policy page" },
    { key: "terms", label: "Terms", description: "Terms of service page" },
  ];
