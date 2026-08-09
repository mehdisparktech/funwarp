"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

export function FAQ() {
  const { faq } = useContent();
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad bg-white">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-3">{faq.eyebrow}</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            <RichLines value={faq.headline} />
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.04, duration: 0.45, ease: easeOut }}
                className={`overflow-hidden rounded-[20px] border transition ${isOpen
                    ? "border-primary/25 bg-primary/[0.04]"
                    : "border-dark/8 bg-surface"
                  }`}
              >
                <button
                  type="button"
                  className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="pt-1 text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-lg font-semibold tracking-tight sm:text-xl">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-xl text-primary"
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
                      <p className="px-5 pb-5 pl-[3.75rem] pr-8 text-[15px] leading-relaxed text-dark/60 sm:px-6">
                        {item.a}
                      </p>
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
