"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Serious work, human energy",
    copy: "We take your product seriously — without making the process feel stiff or exhausting. Clear updates, honest feedback, and a team that actually enjoys building.",
  },
  {
    title: "Creativity with discipline",
    copy: "Fun doesn’t mean careless. It means we explore better ideas, push UX further, and still ship with solid architecture, testing and deadlines.",
  },
  {
    title: "Partnership, not handoff",
    copy: "Working with FUNWARP should feel like adding a product team — not buying a silent agency package and hoping for the best.",
  },
] as const;

export function FunSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
            Why FUN?
          </p>
          <h2 className="max-w-4xl font-display text-4xl font-bold leading-[1.02] sm:text-6xl">
            Because great software
            <br />
            shouldn&apos;t feel boring.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/65">
            The “FUN” in FUNWARP isn&apos;t decoration. It&apos;s our belief that
            strong engineering and creative thinking belong together — so the
            product feels sharp, and the collaboration feels easy.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-4 md:grid-cols-3" delay={0.08}>
          {reasons.map((item, i) => (
            <StaggerItem key={item.title}>
              <motion.article
                whileHover={{ y: -6 }}
                className="h-full border border-cream/10 bg-slate/20 p-7 sm:p-8"
              >
                <p className="font-mono text-xs text-taupe">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60 sm:text-base">
                  {item.copy}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
