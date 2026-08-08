"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { easeOut } from "@/lib/motion";

export function ContactClient() {
  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-taupe">
            Contact
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.95] sm:text-6xl">
            Let&apos;s build
            <br />
            something.
          </h1>
          <p className="mt-6 max-w-md text-cream/60">
            Share a bit about your product, timeline and goals. We&apos;ll
            reply with clear next steps.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.12, ease: easeOut }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
