"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

export function Testimonials() {
  const { testimonials } = useContent();

  return (
    <section id="insights" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
            {testimonials.eyebrow}
          </p>
          <h2 className="mb-16 font-display text-4xl font-bold sm:text-5xl">
            <RichLines value={testimonials.headline} />
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <motion.blockquote
              key={t.name + i}
              initial={{ opacity: 0, y: 60, scale: 0.92, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: easeOut,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                borderColor: "rgba(223,208,184,0.35)",
              }}
              className="flex h-full flex-col border border-cream/10 bg-gradient-to-b from-slate/40 to-ink p-8"
            >
              <p className="flex-1 text-lg leading-relaxed text-cream/80">
                “{t.quote}”
              </p>
              <footer className="mt-8 border-t border-cream/10 pt-5">
                <p className="font-display text-lg font-semibold">{t.name}</p>
                <p className="mt-1 text-sm text-taupe">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
