"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { easeOut } from "@/lib/motion";

export function Testimonials() {
  return (
    <section id="insights" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
            Words
          </p>
          <h2 className="mb-16 font-display text-4xl font-bold sm:text-5xl">
            Good software.
            <br />
            Happy humans.
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
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
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
                className="font-display text-5xl leading-none text-cream/25"
              >
                “
              </motion.span>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.22 + i * 0.12, duration: 0.55 }}
                className="mt-2 flex-1 font-display text-2xl leading-snug text-cream/90 sm:text-[1.65rem]"
              >
                {t.quote}
              </motion.p>

              <motion.footer
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.32 + i * 0.12, duration: 0.5 }}
                className="mt-10 border-t border-cream/10 pt-5"
              >
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="mt-1 text-xs text-taupe">{t.role}</p>
              </motion.footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
