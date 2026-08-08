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
      className="border-y border-cream/10 bg-slate/30 py-6"
    >
      <div className="overflow-hidden">
        <div className="flex w-max animate-[marquee_26s_linear_infinite] items-center gap-12 px-6">
          {loop.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="font-display text-2xl tracking-tight text-cream/25 transition hover:text-cream/55 sm:text-3xl"
            >
              {logo}
              <span className="mx-12 text-cream/15">/</span>
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
