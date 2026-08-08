"use client";

const items = [
  "Now booking product builds for Q3",
  "Web · Mobile · SaaS · AI · Custom software",
  "International remote engineering studio",
];

export function AnnouncementBar() {
  const loop = [...items, ...items, ...items];

  return (
    <div className="relative z-[60] overflow-hidden border-b border-cream/10 bg-[#1b2027] text-[12px] text-cream/75">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/35 to-transparent" />
      <div className="flex w-max animate-[marquee_34s_linear_infinite] gap-12 whitespace-nowrap py-2.5">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-cream/70" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
