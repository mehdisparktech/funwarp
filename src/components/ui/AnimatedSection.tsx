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
      initial={{ opacity: 0, y: 72 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.12, margin: "-40px" }}
      transition={{ duration: 0.75, ease: easeOut }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
