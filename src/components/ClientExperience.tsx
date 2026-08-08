"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";

export function ClientExperience() {
  const { experience } = useContent();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
            {experience.eyebrow}
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            <RichLines value={experience.headline} />
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-px bg-cream/10 md:grid-cols-3" delay={0.08}>
          {experience.cards.map((card, i) => (
            <StaggerItem key={card.title}>
              <motion.article
                whileHover={{ y: -4 }}
                className="h-full bg-ink p-8"
              >
                <p className="font-mono text-xs text-taupe">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-display text-2xl">{card.title}</h3>
                <p className="mt-3 text-cream/60">{card.description}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-8">
          <div className="flex flex-wrap items-center gap-3 border border-cream/10 p-5">
            {experience.journey.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <span className="font-display text-xl text-cream/80">{step}</span>
                {i < experience.journey.length - 1 ? (
                  <span className="text-taupe">→</span>
                ) : null}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
