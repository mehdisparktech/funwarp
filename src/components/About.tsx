"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RichLines } from "@/lib/content/rich-text";

export function About() {
  const { about } = useContent();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
              {about.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
              <RichLines value={about.headline} />
            </h2>
          </Reveal>
          <Reveal delay={0.1} direction="right">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed text-cream/65 ${i > 0 ? "mt-4" : ""}`}
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <Stagger className="mt-16 grid grid-cols-2 gap-px bg-cream/10 lg:grid-cols-4" delay={0.1}>
          {about.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                whileHover={{ backgroundColor: "rgba(57,62,70,0.45)" }}
                className="bg-ink p-6 sm:p-8"
              >
                <p className="font-display text-4xl font-bold sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-taupe">{stat.label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
