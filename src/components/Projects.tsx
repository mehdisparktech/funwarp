"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { RichLines } from "@/lib/content/rich-text";
import { easeOut } from "@/lib/motion";

const visuals = [
  {
    shell: "from-[#5235f6] to-[#8b75ff]",
    panels: ["bg-white/20", "bg-white/12", "bg-white/25"],
  },
  {
    shell: "from-[#1a1630] to-[#5235f6]",
    panels: ["bg-white/15", "bg-white/22", "bg-white/10"],
  },
  {
    shell: "from-[#2d2468] via-[#5235f6] to-[#9b87ff]",
    panels: ["bg-white/18", "bg-white/10", "bg-white/24"],
  },
  {
    shell: "from-[#15131f] to-[#6b52f8]",
    panels: ["bg-white/14", "bg-white/20", "bg-white/12"],
  },
];

function ProductPreview({
  index,
  name,
  industry,
}: {
  index: number;
  name: string;
  industry: string;
}) {
  const visual = visuals[index % visuals.length];

  return (
    <div
      className={`relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-[22px] bg-gradient-to-br p-5 sm:min-h-[280px] sm:p-6 ${visual.shell}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

      <div className="relative flex items-center justify-between gap-3">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {industry}
        </span>
        <span className="font-mono text-xs tracking-widest text-white/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-6 space-y-2.5">
        <div className={`h-3 w-[42%] rounded-full ${visual.panels[0]}`} />
        <div className={`h-3 w-[68%] rounded-full ${visual.panels[1]}`} />
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((n) => (
            <div
              key={n}
              className={`aspect-[4/3] rounded-xl ${visual.panels[n]} ring-1 ring-white/10`}
            />
          ))}
        </div>
      </div>

      <div className="relative mt-6">
        <p className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {name}
        </p>
      </div>
    </div>
  );
}

export function Projects() {
  const { projects } = useContent();

  return (
    <section id="work" className="section-pad bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">{projects.eyebrow}</p>
              <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                <RichLines value={projects.headline} />
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-dark/60">
              Real products we designed and engineered — each one with a clear
              problem, stack, and measurable outcome.
            </p>
          </div>
        </Reveal>

        <div className="space-y-5">
          {projects.items.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: easeOut }}
                className="overflow-hidden rounded-[28px] border border-dark/8 bg-white shadow-[0_16px_50px_rgba(33,33,33,0.04)]"
              >
                <div
                  className={`grid lg:min-h-[340px] ${i % 2 === 0
                      ? "lg:grid-cols-[1.05fr_0.95fr]"
                      : "lg:grid-cols-[0.95fr_1.05fr]"
                    }`}
                >
                  <div
                    className={`p-4 sm:p-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <ProductPreview
                      index={i}
                      name={project.name}
                      industry={project.industry}
                    />
                  </div>

                  <div
                    className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${i % 2 === 1 ? "lg:order-1" : ""
                      }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {project.industry}
                      </span>
                      <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-dark/50">
                        Case study
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-dark sm:text-4xl">
                      {project.name}
                    </h3>

                    <p className="mt-4 text-[15px] leading-relaxed text-dark/65 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-surface p-4">
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-dark/40">
                          Outcome
                        </p>
                        <p className="mt-2 font-display text-lg font-semibold tracking-tight text-primary">
                          {project.results}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-surface p-4">
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-dark/40">
                          Built with
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-dark/70 ring-1 ring-dark/5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={project.link || "/contact"}
                      className="group mt-7 inline-flex w-fit items-center gap-2 text-[15px] font-medium text-primary transition hover:gap-3"
                    >
                      {projects.cardCta}
                      <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-col items-start justify-between gap-5 rounded-[28px] bg-dark p-8 text-white sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="text-sm font-medium text-white/50">Next project</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Have a product idea like these?
              </h3>
              <p className="mt-2 max-w-lg text-white/60">
                Tell us the goal — we will map scope, timeline and the right
                stack to ship it.
              </p>
            </div>
            <PrimaryButton href="/contact" variant="dark">
              Start a project
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
