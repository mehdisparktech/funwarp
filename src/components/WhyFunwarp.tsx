"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

export function WhyFunwarp() {
  const { principles } = useContent();

  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal direction="left">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-3">{principles.eyebrow}</p>
              <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                <RichLines value={principles.headline} />
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-dark/65">
                {principles.description}
              </p>
            </div>
          </Reveal>

          <div className="space-y-3">
            {principles.items.map((item, i) => (
              <Reveal key={item.number + item.title} delay={i * 0.06} direction="right">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="grid grid-cols-[4.5rem_1fr] gap-4 rounded-[20px] border border-dark/8 bg-white p-6 sm:grid-cols-[5.5rem_1fr] sm:gap-6"
                >
                  <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                    {item.number}
                  </p>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-dark/60">
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
