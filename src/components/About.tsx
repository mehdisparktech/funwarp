"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RichLines } from "@/lib/content/rich-text";

export function About() {
  const { about } = useContent();

  return (
    <section id="about" className="section-pad bg-white">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <p className="eyebrow mb-3">{about.eyebrow}</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              <RichLines value={about.headline} />
            </h2>
          </Reveal>
          <Reveal delay={0.1} direction="right">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed text-dark/65 sm:text-lg ${i > 0 ? "mt-4" : ""}`}
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4" delay={0.08}>
          {about.stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`rounded-[24px] border p-6 sm:p-8 ${i === 0
                    ? "border-primary bg-primary text-white"
                    : "border-dark/8 bg-surface text-dark"
                  }`}
              >
                <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p
                  className={`mt-2 text-sm ${i === 0 ? "text-white/75" : "text-dark/55"
                    }`}
                >
                  {stat.label}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
