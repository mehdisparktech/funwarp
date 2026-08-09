"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

/** Wraps a page section so it animates in whenever it enters the viewport. */
export function AnimatedSection({
  children,
  id,
  className,
}: AnimatedSectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: easeOut }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
