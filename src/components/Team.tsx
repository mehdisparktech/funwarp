"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { team, teamStats } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";

export function Team() {
  return (
    <section id="team" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">
            People
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.02] sm:text-6xl">
            Meet the people
            <br />
            <span className="text-taupe">behind the warp.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/55 sm:text-lg">
            A small, focused team of developers and designers who love turning
            complex ideas into simple, powerful products.
          </p>
        </Reveal>

        <Stagger
          className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4"
          delay={0.05}
        >
          {teamStats.map((s) => (
            <StaggerItem key={s.label}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(223,208,184,0.28)" }}
                className="rounded-2xl border border-cream/10 bg-gradient-to-b from-slate/40 to-ink/40 px-5 py-6"
              >
                <p className="font-display text-3xl font-bold text-cream sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs leading-snug text-cream/45 sm:text-sm">
                  {s.label}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger
          className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          delay={0.08}
        >
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cream/10 bg-[#1a1f26] shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                {/* top accent line */}
                <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-cream/50 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    sizes="(max-width: 1280px) 50vw, 25vw"
                    className="object-cover object-[center_20%] transition duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f26] via-[#1a1f26]/25 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex rounded-md bg-cream px-2.5 py-1 font-display text-[11px] font-semibold tracking-wide text-ink">
                      {member.role}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-xl font-semibold leading-tight text-cream sm:text-2xl">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/55">
                    {member.bio}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-cream/[0.06] px-2.5 py-1 font-display text-[11px] font-medium tracking-wide text-cream/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-cream/10 pt-5 mt-6">
                    {"website" in member && member.website ? (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-xs font-semibold tracking-[0.14em] text-cream transition hover:text-taupe"
                      >
                        PORTFOLIO →
                      </a>
                    ) : (
                      <span className="font-display text-xs tracking-[0.14em] text-cream/30">
                        TEAM
                      </span>
                    )}

                    <div className="flex gap-2">
                      <a
                        href={member.social.linkedin}
                        aria-label={`${member.name} on LinkedIn`}
                        className="grid h-8 w-8 place-items-center rounded-lg border border-cream/15 text-cream/60 transition hover:border-cream/40 hover:bg-cream/10 hover:text-cream"
                      >
                        <LinkedinIcon size={14} />
                      </a>
                      <a
                        href={member.social.github}
                        aria-label={`${member.name} on GitHub`}
                        className="grid h-8 w-8 place-items-center rounded-lg border border-cream/15 text-cream/60 transition hover:border-cream/40 hover:bg-cream/10 hover:text-cream"
                      >
                        <GithubIcon size={14} />
                      </a>
                      <a
                        href={member.social.x}
                        aria-label={`${member.name} on X`}
                        className="grid h-8 w-8 place-items-center rounded-lg border border-cream/15 text-cream/60 transition hover:border-cream/40 hover:bg-cream/10 hover:text-cream"
                      >
                        <XIcon size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12">
          <motion.div
            whileHover={{ borderColor: "rgba(223,208,184,0.35)" }}
            className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-cream/10 bg-gradient-to-r from-slate/30 to-ink p-8 sm:flex-row sm:items-center sm:p-10"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                Have a project for the team?
              </h3>
              <p className="mt-2 max-w-lg text-cream/55">
                Tell us what you&apos;re building and we&apos;ll put the right
                people around it.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-cream px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-[#efe4d0]"
            >
              Start a project
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
