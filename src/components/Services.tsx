"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

export function Services() {
  const { services } = useContent();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
              {services.eyebrow}
            </p>
            <h2 className="max-w-xl font-display text-4xl font-bold leading-[1.02] sm:text-6xl">
              <RichLines value={services.headline} />
            </h2>
          </Reveal>
          <Reveal delay={0.12} direction="right">
            <p className="max-w-sm text-cream/65">{services.description}</p>
          </Reveal>
        </div>
      </div>

      <Stagger className="border-y border-cream/10">
        {services.items.map((service, i) => (
          <StaggerItem key={service.title}>
            <motion.div
              whileHover={{ backgroundColor: "rgba(223,208,184,0.04)" }}
              transition={{ duration: 0.25 }}
            >
              <Link
                href="/contact"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-cream/10 px-5 py-7 sm:gap-8 sm:px-8 sm:py-9"
              >
                <motion.span
                  className="font-mono text-xs text-taupe"
                  whileHover={{ scale: 1.1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-semibold transition duration-300 group-hover:translate-x-3 sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-cream/55 transition duration-300 group-hover:text-cream/75 sm:text-base">
                    {service.description}
                  </p>
                </div>
                <motion.span
                  className="hidden font-display text-4xl text-cream/20 sm:block"
                  initial={false}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25, ease: easeOut }}
                >
                  <span className="inline-block transition duration-300 group-hover:translate-x-2 group-hover:text-cream">
                    →
                  </span>
                </motion.span>
              </Link>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
