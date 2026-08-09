"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";

export function FunSection() {
  const { fun } = useContent();

  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-3">{fun.eyebrow}</p>
          <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            <RichLines value={fun.headline} />
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-dark/65 sm:text-lg">
            {fun.description}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-3" delay={0.08}>
          {fun.reasons.map((item, i) => (
            <StaggerItem key={item.title}>
              <motion.article
                whileHover={{ y: -6 }}
                className="h-full rounded-[24px] border border-dark/8 bg-surface p-7 sm:p-8"
              >
                <p className="text-sm font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-dark/60">
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
