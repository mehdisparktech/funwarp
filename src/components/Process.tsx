"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";

export function Process() {
  const { process } = useContent();

  return (
    <section id="process" className="section-pad relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute right-0 top-10 select-none font-display text-[18vw] font-bold leading-none text-primary/[0.05]">
        {process.megaText}
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-3">{process.eyebrow}</p>
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            <RichLines value={process.headline} />
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.08}>
          {process.items.map((step) => (
            <StaggerItem key={step.number + step.title}>
              <motion.article
                whileHover={{ y: -4 }}
                className="h-full rounded-[24px] border border-dark/8 bg-surface p-7"
              >
                <p className="text-sm font-semibold text-primary">{step.number}</p>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-dark/60">
                  {step.description}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
