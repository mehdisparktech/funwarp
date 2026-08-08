"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { easeOut } from "@/lib/motion";

export function Footer() {
  const { footer } = useContent();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="border-t border-cream/10"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-bold">{footer.brand}</p>
          <p className="mt-4 max-w-xs text-cream/55">{footer.tagline}</p>
        </div>
        {footer.columns.map((col) => (
          <div key={col.title}>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-taupe">
              {col.title}
            </p>
            <div className="flex flex-col gap-3 text-sm text-cream/70">
              {col.links.map((link) => (
                <Link key={link.href + link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-taupe">
            {footer.statusLabel}
          </p>
          <p className="inline-flex items-center gap-2 text-sm text-cream/70">
            <span className="status-dot h-2 w-2 rounded-full bg-cream" />
            {footer.statusText}
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-6 text-xs text-taupe sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{footer.copyright}</p>
          <div className="flex gap-5">
            {footer.bottomLinks.map((link) => (
              <Link key={link.href + link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
