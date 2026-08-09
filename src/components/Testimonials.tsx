"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

export function Testimonials() {
  const { testimonials } = useContent();

  return (
    <section id="insights" className="section-pad bg-white">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-3">{testimonials.eyebrow}</p>
          <h2 className="mb-12 font-display text-4xl font-semibold tracking-tight sm:mb-16 sm:text-5xl">
            <RichLines value={testimonials.headline} />
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <motion.blockquote
              key={t.name + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: easeOut,
              }}
              whileHover={{ y: -8 }}
              className="flex h-full flex-col rounded-[24px] border border-dark/8 bg-surface p-8"
            >
              <p className="text-4xl font-semibold text-primary/30">“</p>
              <p className="mt-2 flex-1 text-base leading-relaxed text-dark/75">
                {t.quote}
              </p>
              <footer className="mt-8 border-t border-dark/8 pt-5">
                <p className="font-display text-lg font-semibold tracking-tight">
                  {t.name}
                </p>
                <p className="mt-1 text-sm text-dark/50">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
