"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";

export function Technology() {
  const { technology } = useContent();

  return (
    <section className="section-pad relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 max-w-3xl md:mb-14">
            <p className="eyebrow mb-3">Technology</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              <RichLines value={technology.headline} />
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-dark/60 sm:text-lg">
              {technology.description}
            </p>
          </div>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2" delay={0.06}>
          {technology.groups.map((group, i) => (
            <StaggerItem key={group.category}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`h-full rounded-[24px] border p-6 sm:p-8 ${i === 0
                    ? "border-primary/20 bg-primary text-white sm:col-span-2"
                    : "border-dark/8 bg-white text-dark"
                  }`}
              >
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p
                      className={`text-sm font-medium ${i === 0 ? "text-white/70" : "text-primary"
                        }`}
                    >
                      {String(i + 1).padStart(2, "0")} — {group.category}
                    </p>
                    <div
                      className={`mt-5 flex flex-wrap gap-2 ${i === 0 ? "sm:mt-6" : ""
                        }`}
                    >
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={`rounded-full px-4 py-2 text-sm font-medium ${i === 0
                              ? "bg-white/15 text-white"
                              : "bg-surface text-dark/80"
                            }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
