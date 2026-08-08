"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AboutEditor,
  ContactEditor,
  CtaEditor,
  ExperienceEditor,
  FaqEditor,
  FooterEditor,
  FunEditor,
  GlobalEditor,
  HeroEditor,
  LegalEditor,
  NavbarEditor,
  PrinciplesEditor,
  ProcessEditor,
  ProjectsEditor,
  ServicesEditor,
  SiteEditor,
  TeamEditor,
  TechnologyEditor,
  TestimonialsEditor,
  TrustBarEditor,
} from "@/components/admin/SectionEditors";
import { ADMIN_SECTIONS } from "@/lib/content/sections";
import type { ContactLead, SiteContent } from "@/lib/content/types";
import { cn } from "@/lib/utils";

type Tab = keyof SiteContent | "leads";

export function AdminDashboard({
  initialContent,
  initialLeads,
}: {
  initialContent: SiteContent;
  initialLeads: ContactLead[];
}) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("hero");
  const [content, setContent] = useState(initialContent);
  const [leads, setLeads] = useState(initialLeads);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  const activeMeta = useMemo(
    () => ADMIN_SECTIONS.find((s) => s.key === tab),
    [tab],
  );

  function updateSection<K extends keyof SiteContent>(key: K, value: SiteContent[K]) {
    setContent((prev) => ({ ...prev, [key]: value }));
  }

  async function save() {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (!res.ok) throw new Error("Save failed");
      setMessage("Saved — live site updated");
      router.refresh();
    } catch {
      setMessage("Could not save changes");
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  async function removeLead(id: string) {
    const res = await fetch(`/api/admin/leads?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    if (res.ok) setLeads((prev) => prev.filter((l) => l.id !== id));
  }

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[260px_1fr]">
      <aside
        className={cn(
          "border-b border-cream/10 bg-[#11151a] lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r",
          mobileNav ? "block" : "hidden lg:block",
        )}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <div>
            <p className="font-display text-lg font-bold">FUNWARP</p>
            <p className="text-xs text-taupe">Content admin</p>
          </div>
          <button
            type="button"
            className="text-xs text-cream/60 lg:hidden"
            onClick={() => setMobileNav(false)}
          >
            Close
          </button>
        </div>
        <nav className="px-3 pb-6">
          <button
            type="button"
            onClick={() => {
              setTab("leads");
              setMobileNav(false);
            }}
            className={cn(
              "mb-2 flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition",
              tab === "leads"
                ? "bg-cream/10 text-cream"
                : "text-cream/55 hover:bg-cream/[0.04] hover:text-cream",
            )}
          >
            <span>Leads / Inbox</span>
            <span className="font-mono text-xs text-taupe">{leads.length}</span>
          </button>
          <div className="mb-2 mt-4 px-3 text-[10px] uppercase tracking-[0.2em] text-taupe">
            Sections
          </div>
          {ADMIN_SECTIONS.map((section) => (
            <button
              key={section.key}
              type="button"
              onClick={() => {
                setTab(section.key);
                setMobileNav(false);
              }}
              className={cn(
                "mb-0.5 flex w-full flex-col rounded-md px-3 py-2 text-left transition",
                tab === section.key
                  ? "bg-cream/10 text-cream"
                  : "text-cream/55 hover:bg-cream/[0.04] hover:text-cream",
              )}
            >
              <span className="text-sm">{section.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 border-b border-cream/10 bg-[#15191f]/95 px-5 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="border border-cream/20 px-3 py-1.5 text-xs uppercase tracking-[0.14em] lg:hidden"
              onClick={() => setMobileNav(true)}
            >
              Menu
            </button>
            <div>
              <h1 className="font-display text-xl font-bold">
                {tab === "leads" ? "Leads / Inbox" : activeMeta?.label}
              </h1>
              <p className="text-xs text-cream/45">
                {tab === "leads"
                  ? "Contact form submissions"
                  : activeMeta?.description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="border border-cream/20 px-3 py-2 text-xs uppercase tracking-[0.14em] text-cream/70 hover:border-cream/40 hover:text-cream"
            >
              View site
            </Link>
            <button
              type="button"
              onClick={logout}
              className="border border-cream/20 px-3 py-2 text-xs uppercase tracking-[0.14em] text-cream/70 hover:border-cream/40 hover:text-cream"
            >
              Log out
            </button>
            {tab !== "leads" ? (
              <button
                type="button"
                onClick={save}
                disabled={saving}
                className="bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink hover:bg-[#efe4d0] disabled:opacity-60"
              >
                {saving ? "Saving…" : "Save changes"}
              </button>
            ) : null}
          </div>
        </header>

        {message ? (
          <div className="border-b border-cream/10 px-5 py-3 text-sm text-cream/70">
            {message}
          </div>
        ) : null}

        <div className="mx-auto max-w-4xl px-5 py-8">
          {tab === "leads" ? (
            <LeadsPanel leads={leads} onDelete={removeLead} />
          ) : (
            <SectionPanel
              tab={tab}
              content={content}
              updateSection={updateSection}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function LeadsPanel({
  leads,
  onDelete,
}: {
  leads: ContactLead[];
  onDelete: (id: string) => void;
}) {
  if (!leads.length) {
    return (
      <div className="border border-cream/10 p-8 text-cream/55">
        No inquiries yet. New contact form submissions will appear here.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {leads.map((lead) => (
        <article key={lead.id} className="border border-cream/10 bg-ink/40 p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-display text-xl font-semibold">{lead.name}</p>
              <p className="text-sm text-cream/55">{lead.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-mono text-xs text-taupe">
                {new Date(lead.createdAt).toLocaleString()}
              </p>
              <button
                type="button"
                onClick={() => onDelete(lead.id)}
                className="text-xs text-cream/50 hover:text-red-300"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="mt-4 grid gap-2 text-sm text-cream/70 sm:grid-cols-2">
            <p>
              <span className="text-taupe">Company:</span> {lead.company || "—"}
            </p>
            <p>
              <span className="text-taupe">Website:</span> {lead.website || "—"}
            </p>
            <p>
              <span className="text-taupe">Building:</span> {lead.building}
            </p>
            <p>
              <span className="text-taupe">Type:</span> {lead.projectType}
            </p>
            <p>
              <span className="text-taupe">Budget:</span> {lead.budget}
            </p>
            <p>
              <span className="text-taupe">Timeline:</span> {lead.timeline}
            </p>
          </div>
          <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-cream/75">
            {lead.message}
          </p>
        </article>
      ))}
    </div>
  );
}

function SectionPanel({
  tab,
  content,
  updateSection,
}: {
  tab: keyof SiteContent;
  content: SiteContent;
  updateSection: <K extends keyof SiteContent>(key: K, value: SiteContent[K]) => void;
}) {
  switch (tab) {
    case "site":
      return <SiteEditor value={content.site} onChange={(v) => updateSection("site", v)} />;
    case "navbar":
      return <NavbarEditor value={content.navbar} onChange={(v) => updateSection("navbar", v)} />;
    case "hero":
      return <HeroEditor value={content.hero} onChange={(v) => updateSection("hero", v)} />;
    case "trustBar":
      return <TrustBarEditor value={content.trustBar} onChange={(v) => updateSection("trustBar", v)} />;
    case "projects":
      return <ProjectsEditor value={content.projects} onChange={(v) => updateSection("projects", v)} />;
    case "services":
      return <ServicesEditor value={content.services} onChange={(v) => updateSection("services", v)} />;
    case "process":
      return <ProcessEditor value={content.process} onChange={(v) => updateSection("process", v)} />;
    case "principles":
      return <PrinciplesEditor value={content.principles} onChange={(v) => updateSection("principles", v)} />;
    case "technology":
      return <TechnologyEditor value={content.technology} onChange={(v) => updateSection("technology", v)} />;
    case "fun":
      return <FunEditor value={content.fun} onChange={(v) => updateSection("fun", v)} />;
    case "experience":
      return <ExperienceEditor value={content.experience} onChange={(v) => updateSection("experience", v)} />;
    case "about":
      return <AboutEditor value={content.about} onChange={(v) => updateSection("about", v)} />;
    case "team":
      return <TeamEditor value={content.team} onChange={(v) => updateSection("team", v)} />;
    case "testimonials":
      return <TestimonialsEditor value={content.testimonials} onChange={(v) => updateSection("testimonials", v)} />;
    case "global":
      return <GlobalEditor value={content.global} onChange={(v) => updateSection("global", v)} />;
    case "faq":
      return <FaqEditor value={content.faq} onChange={(v) => updateSection("faq", v)} />;
    case "cta":
      return <CtaEditor value={content.cta} onChange={(v) => updateSection("cta", v)} />;
    case "footer":
      return <FooterEditor value={content.footer} onChange={(v) => updateSection("footer", v)} />;
    case "contact":
      return <ContactEditor value={content.contact} onChange={(v) => updateSection("contact", v)} />;
    case "privacy":
      return <LegalEditor value={content.privacy} onChange={(v) => updateSection("privacy", v)} />;
    case "terms":
      return <LegalEditor value={content.terms} onChange={(v) => updateSection("terms", v)} />;
    default:
      return null;
  }
}
