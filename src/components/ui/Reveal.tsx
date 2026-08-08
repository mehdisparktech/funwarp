"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { easeOut, viewport } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  duration?: number;
};

const offsets = {
  up: { y: 40, x: 0, scale: 1 },
  down: { y: -28, x: 0, scale: 1 },
  left: { y: 0, x: -48, scale: 1 },
  right: { y: 0, x: 48, scale: 1 },
  scale: { y: 20, x: 0, scale: 0.94 },
  fade: { y: 0, x: 0, scale: 1 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.7,
}: RevealProps) {
  const o = offsets[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: o.x,
        y: o.y,
        scale: o.scale,
        filter: "blur(6px)",
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={viewport}
      transition={{ duration, delay, ease: easeOut }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const variants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: delay },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.96, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.65, ease: easeOut },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
