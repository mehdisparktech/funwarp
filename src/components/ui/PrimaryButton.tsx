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
        "group inline-flex items-center gap-4 rounded-full border py-1.5 pr-1.5 pl-6 text-[15px] font-medium capitalize transition",
        variant === "primary" &&
        "border-primary bg-primary text-white hover:bg-primary/90",
        variant === "secondary" &&
        "border-dark/15 bg-white text-dark hover:border-primary hover:text-primary",
        variant === "dark" &&
        "border-white/20 bg-white text-dark hover:bg-primary hover:text-white hover:border-primary",
        className,
      )}
    >
      <span className="relative overflow-hidden leading-none">
        <span className="block transition duration-300 group-hover:-translate-y-[120%]">
          {children}
        </span>
        <span className="absolute inset-0 translate-y-[120%] transition duration-300 group-hover:translate-y-0">
          {children}
        </span>
      </span>
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-full border transition",
          variant === "primary" &&
          "border-primary bg-white text-primary group-hover:bg-dark group-hover:text-white group-hover:border-dark",
          variant === "secondary" &&
          "border-dark/10 bg-surface text-dark group-hover:bg-primary group-hover:text-white group-hover:border-primary",
          variant === "dark" &&
          "border-dark/10 bg-dark text-white group-hover:bg-white group-hover:text-primary",
        )}
      >
        <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:rotate-45" />
      </span>
    </Link>
  );
}
