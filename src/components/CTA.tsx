"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Reveal } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

export function CTA() {
  const { cta } = useContent();

  return (
    <section className="relative overflow-hidden bg-primary px-5 py-20 text-white sm:px-8 sm:py-28">
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: easeOut }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display text-[18vw] font-bold leading-none text-white/[0.06] select-none"
      >
        {cta.megaText}
      </motion.div>

      <div className="relative mx-auto max-w-[900px] text-center">
        <Reveal direction="scale">
          <p className="mb-4 text-sm font-medium text-white/70">{cta.eyebrow}</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl [&_.italic]:text-white/90">
            <RichLines value={cta.headline} />
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-white/75 sm:text-lg">
            {cta.description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href={cta.primaryCta.href} variant="dark">
              {cta.primaryCta.label}
            </PrimaryButton>
            <PrimaryButton
              href={cta.secondaryCta.href}
              className="border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-primary [&_span.grid]:border-white/30 [&_span.grid]:bg-white/10 [&_span.grid]:text-white"
            >
              {cta.secondaryCta.label}
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
