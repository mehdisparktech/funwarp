"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";

export function Services() {
  const { services } = useContent();

  return (
    <section id="services" className="section-pad bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow mb-3">{services.eyebrow}</p>
            <h2 className="max-w-xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              <RichLines value={services.headline} />
            </h2>
          </Reveal>
          <Reveal delay={0.1} direction="right">
            <p className="max-w-sm text-[15px] leading-relaxed text-dark/65">
              {services.description}
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.items.map((service, i) => (
            <StaggerItem key={service.title}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/contact"
                  className="group flex h-full flex-col rounded-[24px] border border-dark/8 bg-white p-7 transition hover:border-primary/25 hover:shadow-[0_20px_50px_rgba(82,53,246,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-dark/10 text-dark/40 transition group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-dark/60">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
