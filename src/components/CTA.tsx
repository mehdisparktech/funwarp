"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

export function CTA() {
  const { cta } = useContent();

  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: easeOut }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display text-[18vw] font-bold leading-none text-cream/[0.04] select-none"
      >
        {cta.megaText}
      </motion.div>

      <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">
        <Reveal direction="scale">
          <p className="mb-6 text-xs uppercase tracking-[0.22em] text-taupe">
            {cta.eyebrow}
          </p>
          <h2 className="font-display text-5xl font-bold leading-[0.95] sm:text-7xl">
            <RichLines value={cta.headline} />
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-cream/60">
            {cta.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={cta.primaryCta.href}
                className="inline-flex w-full items-center justify-center bg-cream px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-[#efe4d0] sm:w-auto"
              >
                {cta.primaryCta.label}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={cta.secondaryCta.href}
                className="inline-flex w-full items-center justify-center border border-cream/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] transition hover:border-cream sm:w-auto"
              >
                {cta.secondaryCta.label}
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
