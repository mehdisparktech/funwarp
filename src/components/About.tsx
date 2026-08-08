"use client";

import { motion } from "framer-motion";
import { aboutStats } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
              About
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
              Engineers who
              <br />
              actually enjoy
              <br />
              building things.
            </h2>
          </Reveal>
          <Reveal delay={0.1} direction="right">
            <p className="text-lg leading-relaxed text-cream/65">
              FUNWARP started by helping clients build software remotely. Over
              time, projects became partnerships — and the studio became a
              dedicated technology company for international businesses.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cream/65">
              Today we design, build and scale digital products with speed,
              clarity and craft.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid grid-cols-2 gap-px bg-cream/10 lg:grid-cols-4" delay={0.1}>
          {aboutStats.map((stat) => (
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
