"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

export function Hero() {
  const { hero, navbar } = useContent();
  const lines = hero.headline.split("\n");

  return (
    <section className="relative overflow-hidden bg-white pt-[72px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_85%_15%,rgba(82,53,246,0.12),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-primary/[0.06] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pb-24">
        {/* Left — text */}
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-medium text-primary"
          >
            <span className="status-dot h-2 w-2 rounded-full bg-primary" />
            {hero.badge}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5, ease: easeOut }}
            className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.28em] text-dark/35"
          >
            {navbar.brand}
          </motion.p>

          <h1 className="font-display text-[clamp(2.6rem,6.5vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-dark">
            {lines.map((line, i) => (
              <motion.span
                key={`${line}-${i}`}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + i * 0.08,
                  ease: easeOut,
                }}
                className="block"
              >
                <RichLines value={line} />
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: easeOut }}
            className="mt-6 max-w-md text-base leading-relaxed text-dark/60 sm:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: easeOut }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <PrimaryButton href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </PrimaryButton>
            <PrimaryButton href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </PrimaryButton>
          </motion.div>
        </div>

        {/* Right — funwarp.com preview */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.85, ease: easeOut }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-primary/15 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-[28px] bg-dark p-3 shadow-[0_40px_100px_rgba(33,33,33,0.16)] sm:rounded-[32px] sm:p-4">
            <div className="mb-3 flex items-center gap-2 px-1 sm:mb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-2 text-xs font-medium tracking-wide text-white/35">
                funwarp.com
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-12 sm:gap-4">
              <div className="relative min-h-[200px] overflow-hidden rounded-[20px] bg-gradient-to-br from-primary via-[#6b52f8] to-[#a897ff] sm:col-span-7 sm:min-h-[280px]">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, white 0 1px, transparent 1.5px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.28),transparent_40%)]" />
                <div className="relative flex h-full flex-col justify-between p-5 sm:p-7">
                  <p className="text-sm font-medium text-white/70">
                    Software studio
                  </p>
                  <div>
                    <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                      {hero.megaText}
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">
                      Web, mobile, SaaS and AI — shipped with speed and craft.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:col-span-5 sm:grid-rows-2">
                {hero.capabilities.slice(0, 2).map((cap, i) => (
                  <motion.div
                    key={cap.label}
                    animate={{ y: i === 0 ? [0, -6, 0] : [0, 6, 0] }}
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex min-h-[90px] flex-col justify-between rounded-[20px] bg-white/5 p-5 ring-1 ring-white/10 sm:min-h-0"
                  >
                    <p className="text-xs font-medium tracking-[0.16em] text-white/40">
                      {cap.number}
                    </p>
                    <p className="font-display text-2xl font-semibold text-white">
                      {cap.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 sm:mt-4 sm:gap-3">
              {hero.capabilities.map((cap) => (
                <div
                  key={cap.number + cap.label}
                  className="min-w-[120px] flex-1 rounded-2xl bg-white/[0.06] px-4 py-3 ring-1 ring-white/10"
                >
                  <p className="text-[11px] text-white/40">{cap.number}</p>
                  <p className="mt-1 text-sm font-medium text-white/90">
                    {cap.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
