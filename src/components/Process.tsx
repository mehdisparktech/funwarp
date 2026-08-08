"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

export function Process() {
  const { process } = useContent();

  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easeOut }}
        className="pointer-events-none absolute right-0 top-10 font-display text-[20vw] font-bold leading-none text-cream/[0.04] select-none"
      >
        {process.megaText}
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
            {process.eyebrow}
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.02] sm:text-6xl">
            <RichLines value={process.headline} />
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-px bg-cream/10 sm:grid-cols-2 lg:grid-cols-3" delay={0.1}>
          {process.items.map((step) => (
            <StaggerItem key={step.number + step.title}>
              <motion.article
                whileHover={{ backgroundColor: "rgba(57,62,70,0.45)" }}
                className="h-full bg-ink p-7 sm:p-8"
              >
                <p className="font-mono text-xs text-taupe">{step.number}</p>
                <h3 className="mt-5 font-display text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-cream/60">{step.description}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
