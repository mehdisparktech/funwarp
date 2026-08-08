"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { useContent } from "@/components/content/ContentProvider";
import { cn } from "@/lib/utils";

function getSectionId(href: string) {
  return href.includes("#") ? href.split("#")[1] : null;
}

export function Navbar() {
  const { navbar } = useContent();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sectionIds = useMemo(
    () =>
      navbar.links
        .map((l) => (l.href.includes("#") ? l.href.split("#")[1] : ""))
        .filter(Boolean),
    [navbar.links],
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(null);
      setScrolled(true);
      return;
    }

    const NAV_OFFSET = 96;

    const updateActive = () => {
      setScrolled(window.scrollY > 8);

      if (window.scrollY < 80) {
        setActiveId(null);
        return;
      }

      const marker = window.scrollY + NAV_OFFSET;
      let current: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = id;
      }

      const docHeight = document.documentElement.scrollHeight;
      const viewportBottom = window.scrollY + window.innerHeight;
      if (viewportBottom >= docHeight - 40) {
        const last = [...sectionIds]
          .reverse()
          .find((id) => document.getElementById(id));
        if (last) current = last;
      }

      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    window.addEventListener("hashchange", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
      window.removeEventListener("hashchange", updateActive);
    };
  }, [pathname, sectionIds]);

  const linkClass = (href: string, mobile = false) => {
    const id = getSectionId(href);
    const isActive = Boolean(id && activeId === id);

    if (mobile) {
      return cn(
        "font-display text-3xl transition-colors",
        isActive ? "text-cream" : "text-cream/45",
      );
    }

    return cn(
      "relative text-[13px] uppercase tracking-[0.16em] transition-colors",
      isActive ? "text-cream" : "text-cream/55 hover:text-cream",
      isActive &&
      "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-cream",
    );
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled || open ? "bg-ink/90 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight"
          onClick={() => setActiveId(null)}
        >
          {navbar.brand}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navbar.links.map((l) => {
            const id = getSectionId(l.href);
            return (
              <Link
                key={l.href + l.label}
                href={l.href}
                className={linkClass(l.href)}
                aria-current={activeId === id ? "true" : undefined}
                onClick={() => {
                  if (id) setActiveId(id);
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href={navbar.ctaHref}
            className={cn(
              "border px-4 py-2 text-[13px] uppercase tracking-[0.16em] transition",
              pathname === navbar.ctaHref
                ? "border-cream bg-cream text-ink"
                : "border-cream/30 text-cream hover:bg-cream hover:text-ink",
            )}
          >
            {navbar.ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          className="text-cream md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-cream/10 bg-ink px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navbar.links.map((l) => {
              const id = getSectionId(l.href);
              return (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  onClick={() => {
                    if (id) setActiveId(id);
                    setOpen(false);
                  }}
                  className={linkClass(l.href, true)}
                  aria-current={activeId === id ? "true" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href={navbar.ctaHref}
              onClick={() => setOpen(false)}
              className={cn(
                "mt-2 inline-flex w-fit border px-5 py-3 uppercase tracking-[0.16em]",
                pathname === navbar.ctaHref
                  ? "border-cream bg-cream text-ink"
                  : "border-cream",
              )}
            >
              {navbar.ctaMobileLabel}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
