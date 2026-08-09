"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { easeOut } from "@/lib/motion";

export function CTA() {
  const { cta } = useContent();

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-primary px-6 py-14 text-center text-white sm:px-12 sm:py-16"
      >
        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none font-display text-[18vw] font-bold leading-none text-white/[0.07]"
        >
          {cta.megaText}
        </p>

        <div className="relative mx-auto max-w-2xl">
          <p className="text-sm font-medium text-white/70">{cta.eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
            {cta.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/75">
            {cta.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href={cta.primaryCta.href} variant="dark">
              {cta.primaryCta.label}
            </PrimaryButton>
            <PrimaryButton
              href={cta.secondaryCta.href}
              className="border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-primary [&_span.grid]:border-white/20 [&_span.grid]:bg-white/10 [&_span.grid]:text-white [&_span.grid]:group-hover:bg-primary [&_span.grid]:group-hover:text-white"
            >
              {cta.secondaryCta.label}
            </PrimaryButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
