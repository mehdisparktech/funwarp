"use client";

import { motion } from "framer-motion";
import { principles } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { easeOut } from "@/lib/motion";

export function WhyFunwarp() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal direction="left">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
                Principles
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.02] sm:text-5xl">
                Fast is not
                <br />
                rushed.
                <br />
                <span className="text-taupe">It&apos;s precise.</span>
              </h2>
              <p className="mt-6 max-w-md text-cream/60">
                Speed with craft. Clarity with ownership. That&apos;s how FUNWARP
                ships.
              </p>
            </div>
          </Reveal>

          <div className="space-y-0 border-t border-cream/10">
            {principles.map((item, i) => (
              <Reveal key={item.number} delay={i * 0.08} direction="right">
                <motion.div
                  whileHover={{ x: 8, backgroundColor: "rgba(223,208,184,0.03)" }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="grid grid-cols-[4rem_1fr] gap-4 border-b border-cream/10 py-8 sm:grid-cols-[6rem_1fr] sm:gap-8"
                >
                  <p className="font-display text-3xl text-taupe sm:text-4xl">
                    {item.number}
                  </p>
                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-cream/60">
                      {item.description}
                    </p>
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
