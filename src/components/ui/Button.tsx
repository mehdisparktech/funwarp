"use client";

import Link from "next/link";
import { type ReactNode, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
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
  withArrow?: boolean;
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
  withArrow = true,
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
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  const classes = cn(
    "group inline-flex items-center justify-center gap-3 rounded-full py-1.5 pr-1.5 pl-6 text-[15px] font-medium capitalize transition-all duration-300 will-change-transform",
    variant === "primary" &&
    "border border-primary bg-primary text-white hover:bg-primary/90",
    variant === "secondary" &&
    "border border-dark/15 bg-white text-dark hover:border-primary hover:text-primary",
    variant === "ghost" && "px-0 py-0 pr-0 text-dark/70 hover:text-primary",
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && variant !== "ghost" ? (
        <span
          className={cn(
            "grid h-9 w-9 place-items-center rounded-full border transition",
            variant === "primary" &&
            "border-primary bg-white text-primary group-hover:bg-dark group-hover:text-white group-hover:border-dark",
            variant === "secondary" &&
            "border-dark/10 bg-surface text-dark group-hover:bg-primary group-hover:text-white group-hover:border-primary",
          )}
        >
          <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:rotate-45" />
        </span>
      ) : null}
    </>
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
        {content}
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
      {content}
    </button>
  );
}
