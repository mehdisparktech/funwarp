"use client";

import { motion } from "framer-motion";
import { globalRegions } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { easeOut } from "@/lib/motion";

/** World view centered for a global collaboration map (no API key required). */
const GOOGLE_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127248000!2d20!3d22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd";

function WorldMap() {
  return (
    <div className="overflow-hidden border border-cream/15 bg-[#1a1f26]">
      <div className="flex items-end justify-between gap-4 border-b border-cream/10 px-5 py-4 sm:px-6">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
            Global reach
          </p>
          <p className="mt-1 text-sm leading-relaxed text-cream/45">
            Teams & clients we collaborate with worldwide
          </p>
        </div>
        <p className="shrink-0 font-display text-3xl font-bold text-cream/15 sm:text-4xl">
          12+
        </p>
      </div>

      <div className="relative aspect-[16/10] w-full bg-slate/40 sm:aspect-[16/9]">
        <iframe
          title="FUNWARP global collaboration map"
          src={GOOGLE_MAP_EMBED}
          className="absolute inset-0 h-full w-full border-0 grayscale contrast-125 saturate-50"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        {/* soft brand overlay edges so it blends with the dark site */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1f26]/80 via-transparent to-[#1a1f26]/35"
        />
      </div>

      <div className="border-t border-cream/10 px-5 py-5 sm:px-6">
        <p className="mb-3 font-display text-sm font-medium text-cream/70">
          Active regions
        </p>
        <div className="flex flex-wrap gap-2">
          {globalRegions.map((region, i) => (
            <motion.span
              key={region}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.05 + i * 0.04, duration: 0.35, ease: easeOut }}
              className="inline-flex items-center gap-2 bg-cream/[0.06] px-3 py-1.5 font-display text-[13px] font-medium tracking-wide text-cream/85"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cream/70" />
              {region}
            </motion.span>
          ))}
        </div>
        <p className="mt-4 text-[12px] leading-relaxed text-cream/35">
          Map shows a global view — regions below are places we collaborate with,
          not physical office locations.
        </p>
      </div>
    </div>
  );
}

export function Global() {
  return (
    <section className="border-y border-cream/10 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
              Global
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.02] sm:text-6xl">
              Built here.
              <br />
              <span className="text-taupe">Used everywhere.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/55 sm:text-lg">
              A global mindset, wherever we&apos;re building from. We collaborate
              with founders and teams across continents.
            </p>
          </Reveal>

          <Reveal delay={0.1} direction="right">
            <WorldMap />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
