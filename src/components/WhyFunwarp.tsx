"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

export function WhyFunwarp() {
  const { principles } = useContent();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal direction="left">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
                {principles.eyebrow}
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.02] sm:text-5xl">
                <RichLines value={principles.headline} />
              </h2>
              <p className="mt-6 max-w-md text-cream/60">
                {principles.description}
              </p>
            </div>
          </Reveal>

          <div className="space-y-0 border-t border-cream/10">
            {principles.items.map((item, i) => (
              <Reveal key={item.number + item.title} delay={i * 0.08} direction="right">
                <motion.div
                  whileHover={{ x: 8, backgroundColor: "rgba(223,208,184,0.03)" }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="grid grid-cols-[4rem_1fr] gap-4 border-b border-cream/10 py-8 sm:grid-cols-[6rem_1fr] sm:gap-8"
                >
                  <p className="font-display text-3xl text-taupe sm:text-4xl">
                    {item.number}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-cream/60">{item.description}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
