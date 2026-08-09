"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";

export function ClientExperience() {
  const { experience } = useContent();

  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-3">{experience.eyebrow}</p>
          <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            <RichLines value={experience.headline} />
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-3" delay={0.08}>
          {experience.cards.map((card, i) => (
            <StaggerItem key={card.title}>
              <motion.article
                whileHover={{ y: -4 }}
                className="h-full rounded-[24px] border border-dark/8 bg-white p-8"
              >
                <p className="text-sm font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-dark/60">
                  {card.description}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.12} className="mt-6">
          <div className="flex flex-wrap items-center gap-3 rounded-[20px] border border-dark/8 bg-white p-5">
            {experience.journey.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  {step}
                </span>
                {i < experience.journey.length - 1 ? (
                  <span className="text-dark/30">→</span>
                ) : null}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
