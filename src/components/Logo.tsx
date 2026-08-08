import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markOnly?: boolean;
};

export function Logo({ className, markOnly }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-cream/20"
      >
        <span className="absolute inset-0 bg-[image:var(--gradient-brand)]" />
        <span className="relative font-display text-sm font-bold tracking-tighter text-ink">
          FW
        </span>
      </span>
      {!markOnly ? (
        <span className="font-display text-lg font-bold tracking-tight text-cream">
          FUN<span className="text-gradient">WARP</span>
        </span>
      ) : null}
    </span>
  );
}
