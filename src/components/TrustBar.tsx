"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";

export function TrustBar() {
  const { trustBar } = useContent();
  const loop = [...trustBar.logos, ...trustBar.logos];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-y border-dark/8 bg-surface py-7"
    >
      <div className="overflow-hidden">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-10 px-6">
          {loop.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="font-display text-2xl font-semibold tracking-tight text-dark/25 transition hover:text-primary sm:text-3xl"
            >
              {logo}
              <span className="mx-10 text-dark/10">•</span>
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
