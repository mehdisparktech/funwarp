"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="border-t border-cream/10"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-bold">FUNWARP</p>
          <p className="mt-4 max-w-xs text-cream/55">
            Warp-speed code. Unlimited fun.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-taupe">
            Studio
          </p>
          <div className="flex flex-col gap-3 text-sm text-cream/70">
            <Link href="/#about">About</Link>
            <Link href="/#work">Work</Link>
            <Link href="/#services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-taupe">
            More
          </p>
          <div className="flex flex-col gap-3 text-sm text-cream/70">
            <Link href="/#process">Process</Link>
            <Link href="/#team">Team</Link>
            <Link href="/#insights">Insights</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-taupe">
            Status
          </p>
          <p className="inline-flex items-center gap-2 text-sm text-cream/70">
            <span className="status-dot h-2 w-2 rounded-full bg-cream" />
            Open for projects
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-6 text-xs text-taupe sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 FUNWARP</p>
          <div className="flex gap-5">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
