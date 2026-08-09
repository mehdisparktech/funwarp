"use client";

import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

function WorldMap() {
  const { global } = useContent();

  return (
    <div className="overflow-hidden rounded-[28px] border border-dark/8 bg-white shadow-[0_20px_50px_rgba(33,33,33,0.06)]">
      <div className="flex items-end justify-between gap-4 border-b border-dark/8 px-5 py-4 sm:px-6">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            {global.mapTitle}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-dark/50">
            {global.mapSubtitle}
          </p>
        </div>
        <p className="shrink-0 font-display text-3xl font-bold text-primary/20 sm:text-4xl">
          {global.mapCount}
        </p>
      </div>

      <div className="relative aspect-[16/10] w-full bg-surface sm:aspect-[16/9]">
        <iframe
          title="FUNWARP global collaboration map"
          src={global.mapEmbedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="border-t border-dark/8 px-5 py-5 sm:px-6">
        <p className="mb-3 text-sm font-medium text-dark/70">
          {global.regionsLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {global.regions.map((region, i) => (
            <motion.span
              key={region}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 + i * 0.04, duration: 0.35, ease: easeOut }}
              className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[13px] font-medium text-dark/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {region}
            </motion.span>
          ))}
        </div>
        <p className="mt-4 text-[12px] leading-relaxed text-dark/40">
          {global.mapDisclaimer}
        </p>
      </div>
    </div>
  );
}

export function Global() {
  const { global } = useContent();

  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="eyebrow mb-3">{global.eyebrow}</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              <RichLines value={global.headline} />
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-dark/60 sm:text-lg">
              {global.description}
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
