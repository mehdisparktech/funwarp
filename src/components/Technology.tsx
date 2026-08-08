"use client";

import { motion } from "framer-motion";
import { technologies } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Technology() {
  return (
    <section className="border-y border-cream/10 bg-[#1c2229] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-4xl font-bold sm:text-5xl">
              Right tools.
              <br />
              Long shelf life.
            </h2>
            <p className="max-w-sm text-cream/55">
              We choose stacks for reliability and velocity — not trend cycles.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
          {technologies.map((group) => (
            <StaggerItem key={group.category}>
              <div>
                <p className="border-b border-cream/15 pb-3 font-mono text-xs uppercase tracking-[0.2em] text-taupe">
                  {group.category}
                </p>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item, i) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 8, color: "#dfd0b8" }}
                      transition={{ duration: 0.25 }}
                      className="font-display text-2xl text-cream/85"
                      style={{ transitionDelay: `${i * 20}ms` }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
