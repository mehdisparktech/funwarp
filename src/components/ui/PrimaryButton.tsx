import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark";
};

export function PrimaryButton({
  href,
  children,
  className,
  variant = "primary",
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-12 items-center gap-3 rounded-full border pl-5 pr-1.5 text-[15px] font-medium leading-none transition-all duration-300",
        variant === "primary" &&
        "border-primary bg-primary text-white hover:bg-primary/90",
        variant === "secondary" &&
        "border-dark/15 bg-white text-dark hover:border-primary hover:text-primary",
        variant === "dark" &&
        "border-white/20 bg-white text-dark hover:border-primary hover:bg-primary hover:text-white",
        className,
      )}
    >
      <span className="whitespace-nowrap">{children}</span>
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300",
          variant === "primary" &&
          "border-white/0 bg-white text-primary group-hover:bg-dark group-hover:text-white",
          variant === "secondary" &&
          "border-dark/10 bg-surface text-dark group-hover:border-primary group-hover:bg-primary group-hover:text-white",
          variant === "dark" &&
          "border-dark/10 bg-dark text-white group-hover:bg-white group-hover:text-primary",
        )}
      >
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
      </span>
    </Link>
  );
}
