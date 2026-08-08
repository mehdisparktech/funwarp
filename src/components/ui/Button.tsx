"use client";

import Link from "next/link";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  fullWidth?: boolean;
  magnetic?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  fullWidth,
  magnetic = true,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!magnetic || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 will-change-transform",
    variant === "primary" &&
    "bg-cream text-ink shadow-[0_10px_40px_rgba(223,208,184,0.18)] hover:bg-[#efe4d0] hover:shadow-[0_14px_48px_rgba(223,208,184,0.28)]",
    variant === "secondary" &&
    "border border-cream/20 bg-transparent text-cream hover:border-cream/45 hover:bg-cream/[0.06]",
    variant === "ghost" && "text-cream/80 hover:text-cream",
    fullWidth && "w-full",
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={classes}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={classes}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </button>
  );
}
