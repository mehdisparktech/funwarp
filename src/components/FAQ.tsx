"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { easeOut } from "@/lib/motion";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
            FAQ
          </p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Questions,
            <br />
            answered.
          </h2>
        </Reveal>

        <div className="border-t border-cream/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: easeOut }}
                className="border-b border-cream/10"
              >
                <button
                  type="button"
                  className="flex w-full items-start gap-4 py-6 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="pt-1 font-mono text-xs text-taupe">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-xl sm:text-2xl">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-taupe"
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easeOut }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-12 pr-8 text-cream/60">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
