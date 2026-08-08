"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal } from "@/components/ui/Reveal";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

export function Projects() {
  const { projects } = useContent();

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
              {projects.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.02] sm:text-6xl">
              <RichLines value={projects.headline} />
            </h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          {projects.items.map((project, i) => (
            <Reveal
              key={project.name}
              delay={i * 0.06}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: easeOut }}
                className={`grid overflow-hidden border border-cream/10 bg-slate/20 lg:min-h-[340px] ${i % 2 === 0
                    ? "lg:grid-cols-[1.15fr_0.85fr]"
                    : "lg:grid-cols-[0.85fr_1.15fr]"
                  }`}
              >
                <div
                  className={`relative min-h-[240px] overflow-hidden bg-gradient-to-br p-8 ${project.accent} ${i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                >
                  <motion.div
                    aria-hidden
                    className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cream/50 to-transparent"
                    animate={{ x: ["-30%", "30%", "-30%"], opacity: [0.3, 0.9, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative flex h-full flex-col justify-between">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
                      {project.industry}
                    </p>
                    <motion.p
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: easeOut }}
                      className="font-display text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-cream/90"
                    >
                      {project.name}
                    </motion.p>
                    <p className="text-sm text-cream/70">{project.results}</p>
                  </div>
                </div>

                <div
                  className={`flex flex-col justify-center p-8 sm:p-10 ${i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                >
                  <h3 className="font-display text-3xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-cream/65">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono text-xs text-taupe">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link || "/contact"}
                    className="mt-8 inline-flex w-fit border-b border-cream/40 pb-1 text-sm uppercase tracking-[0.16em] transition hover:border-cream"
                  >
                    {projects.cardCta}
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
