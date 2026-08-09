"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { useContent } from "@/components/content/ContentProvider";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-dark/8 bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(33,33,33,0.04)]"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-[1.35rem] font-bold tracking-tight text-dark"
          onClick={() => setActiveId(null)}
        >
          {navbar.brand}
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navbar.links.map((l) => {
            const id = getSectionId(l.href);
            const isActive = Boolean(id && activeId === id);
            return (
              <Link
                key={l.href + l.label}
                href={l.href}
                className={cn(
                  "text-[15px] font-medium capitalize transition-colors",
                  isActive ? "text-primary" : "text-dark/70 hover:text-primary",
                )}
                aria-current={isActive ? "true" : undefined}
                onClick={() => {
                  if (id) setActiveId(id);
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <PrimaryButton href={navbar.ctaHref}>{navbar.ctaLabel}</PrimaryButton>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-dark/10 text-dark lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-dark/8 bg-white px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navbar.links.map((l) => {
              const id = getSectionId(l.href);
              const isActive = Boolean(id && activeId === id);
              return (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  onClick={() => {
                    if (id) setActiveId(id);
                    setOpen(false);
                  }}
                  className={cn(
                    "font-display text-2xl font-semibold capitalize",
                    isActive ? "text-primary" : "text-dark/55",
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="pt-2" onClick={() => setOpen(false)}>
              <PrimaryButton href={navbar.ctaHref}>
                {navbar.ctaMobileLabel}
              </PrimaryButton>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
