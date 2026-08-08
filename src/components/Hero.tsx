"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

export function Hero() {
  const { hero } = useContent();
  const lines = hero.headline.split("\n");

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-16">
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 1.2, ease: easeOut }}
        className="pointer-events-none absolute -left-8 top-[18%] font-display text-[28vw] font-bold leading-none mega-outline select-none sm:top-[12%] animate-drift"
      >
        {hero.megaText}
      </motion.div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[42%] space-y-3">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cream/40 to-transparent animate-streak" />
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-taupe/50 to-transparent animate-streak"
          style={{ animationDelay: "1.1s" }}
        />
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-cream/25 to-transparent animate-streak"
          style={{ animationDelay: "2.2s" }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1400px] flex-col justify-between px-5 pb-10 pt-20 sm:px-8 sm:pb-14 sm:pt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-taupe"
            >
              <span className="status-dot h-2 w-2 rounded-full bg-cream" />
              {hero.badge}
            </motion.div>

            <h1 className="max-w-[11ch] font-display text-[clamp(3.4rem,9vw,7.5rem)] font-bold leading-[0.9]">
              {lines.map((line, i) => (
                <motion.span
                  key={`${line}-${i}`}
                  initial={{ opacity: 0, y: 50, rotateX: 25 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.12 + i * 0.1,
                    ease: easeOut,
                  }}
                  className="block origin-left"
                >
                  <RichLines value={line} />
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.45, duration: 0.8, ease: easeOut }}
            className="max-w-sm lg:pt-16"
          >
            <p className="text-base leading-relaxed text-cream/70 sm:text-lg">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={hero.primaryCta.href}
                  className="inline-flex w-full items-center justify-center bg-cream px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-[#efe4d0] sm:w-auto"
                >
                  {hero.primaryCta.label}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex w-full items-center justify-center border border-cream/25 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition hover:border-cream sm:w-auto"
                >
                  {hero.secondaryCta.label}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } },
          }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-cream/10 pt-8 sm:grid-cols-4"
        >
          {hero.capabilities.map((cap) => (
            <motion.div
              key={cap.number + cap.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: easeOut },
                },
              }}
              whileHover={{ x: 6 }}
              className="group cursor-default"
            >
              <p className="font-mono text-xs text-taupe">{cap.number}</p>
              <p className="mt-2 font-display text-2xl text-cream transition group-hover:text-taupe sm:text-3xl">
                {cap.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
