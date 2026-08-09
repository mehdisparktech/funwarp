"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useContent } from "@/components/content/ContentProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";
import { RichLines } from "@/lib/content/rich-text";

export function Team() {
  const { team } = useContent();

  return (
    <section id="team" className="section-pad bg-white">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">{team.eyebrow}</p>
              <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                <RichLines value={team.headline} />
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-dark/60 md:pb-1">
              {team.description}
            </p>
          </div>
        </Reveal>

        <Stagger className="mb-10 grid grid-cols-2 gap-3 lg:grid-cols-4" delay={0.04}>
          {team.stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="rounded-[18px] bg-surface px-5 py-5">
                <p className="font-display text-3xl font-semibold tracking-tight text-dark sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-sm text-dark/50">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4" delay={0.06}>
          {team.members.map((member) => (
            <StaggerItem key={member.name}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-surface"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#ddd8f0]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      sizes="(max-width: 1280px) 50vw, 25vw"
                      className="object-cover object-[center_15%] transition duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="grid h-full place-items-center font-display text-5xl font-semibold text-primary/40">
                      {member.initials}
                    </div>
                  )}

                  <div className="absolute right-3 top-3 flex gap-1.5 translate-y-1 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href={member.social.linkedin}
                      aria-label={`${member.name} on LinkedIn`}
                      className="grid h-8 w-8 place-items-center rounded-full bg-white text-dark shadow-sm transition hover:bg-primary hover:text-white"
                    >
                      <LinkedinIcon size={13} />
                    </a>
                    <a
                      href={member.social.github}
                      aria-label={`${member.name} on GitHub`}
                      className="grid h-8 w-8 place-items-center rounded-full bg-white text-dark shadow-sm transition hover:bg-primary hover:text-white"
                    >
                      <GithubIcon size={13} />
                    </a>
                    <a
                      href={member.social.x}
                      aria-label={`${member.name} on X`}
                      className="grid h-8 w-8 place-items-center rounded-full bg-white text-dark shadow-sm transition hover:bg-primary hover:text-white"
                    >
                      <XIcon size={13} />
                    </a>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-[1.35rem] font-semibold tracking-tight text-dark">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-dark/55">
                    {member.bio}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-dark/65"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {member.website ? (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition hover:gap-2.5"
                    >
                      View portfolio
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <div className="mt-5 flex gap-2 sm:hidden">
                      <a
                        href={member.social.linkedin}
                        aria-label={`${member.name} on LinkedIn`}
                        className="grid h-8 w-8 place-items-center rounded-full bg-white text-dark/50"
                      >
                        <LinkedinIcon size={13} />
                      </a>
                      <a
                        href={member.social.github}
                        aria-label={`${member.name} on GitHub`}
                        className="grid h-8 w-8 place-items-center rounded-full bg-white text-dark/50"
                      >
                        <GithubIcon size={13} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-col items-start justify-between gap-5 rounded-[28px] border border-dark/8 bg-surface p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
                {team.ctaHeadline}
              </h3>
              <p className="mt-2 max-w-lg text-dark/60">{team.ctaDescription}</p>
            </div>
            <PrimaryButton href={team.ctaHref}>
              {team.ctaLabel}
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
