"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { easeOut } from "@/lib/motion";

export function Footer() {
  const { footer } = useContent();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="bg-dark text-white"
    >
      <div className="mx-auto max-w-[1240px] px-5 pt-16 pb-10 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <p className="font-display text-3xl font-bold tracking-tight">
              {footer.brand}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/55">
              {footer.tagline}
            </p>
            <div className="mt-7 inline-flex">
              <PrimaryButton href="/contact" variant="dark">
                Start a project
              </PrimaryButton>
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-white/35">
                {col.title}
              </p>
              <div className="flex flex-col gap-3.5 text-[15px] text-white/75">
                {col.links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="w-fit transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-white/35">
              {footer.statusLabel}
            </p>
            <p className="inline-flex items-center gap-2.5 text-[15px] text-white/80">
              <span className="status-dot h-2 w-2 rounded-full bg-primary" />
              {footer.statusText}
            </p>
            <div className="mt-6 flex flex-col gap-3 text-[15px] text-white/60">
              {footer.bottomLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="w-fit transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{footer.copyright}</p>
          <p className="text-white/30">Warp-speed code. Unlimited fun.</p>
        </div>
      </div>
    </motion.footer>
  );
}
