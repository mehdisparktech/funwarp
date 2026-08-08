"use client";

import { cn } from "@/lib/utils";

export const inputClass =
  "w-full border border-cream/15 bg-[#1a1f26] px-3 py-2.5 text-sm text-cream outline-none transition focus:border-cream/40 placeholder:text-cream/30";

export function Field({
  label,
  hint,
  children,
  className,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-taupe">
        {label}
      </span>
      {children}
      {hint ? <span className="mt-1 block text-xs text-cream/40">{hint}</span> : null}
    </label>
  );
}

export function TextInput({
  label,
  value,
  onChange,
  hint,
  type = "text",
  className,
}: {
  label: string;
  value: string | number;
  onChange: (v: string) => void;
  hint?: string;
  type?: string;
  className?: string;
}) {
  return (
    <Field label={label} hint={hint} className={className}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </Field>
  );
}

export function TextArea({
  label,
  value,
  onChange,
  hint,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
  rows?: number;
}) {
  return (
    <Field label={label} hint={hint}>
      <textarea
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className={cn(inputClass, "resize-y")}
      />
    </Field>
  );
}

export function StringListEditor({
  label,
  values,
  onChange,
  hint,
}: {
  label: string;
  values: string[];
  onChange: (v: string[]) => void;
  hint?: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">{label}</p>
        <button
          type="button"
          onClick={() => onChange([...values, ""])}
          className="text-xs text-cream/70 hover:text-cream"
        >
          + Add
        </button>
      </div>
      {hint ? <p className="mb-2 text-xs text-cream/40">{hint}</p> : null}
      <div className="space-y-2">
        {values.map((v, i) => (
          <div key={i} className="flex gap-2">
            <input
              value={v}
              onChange={(e) => {
                const next = [...values];
                next[i] = e.target.value;
                onChange(next);
              }}
              className={inputClass}
            />
            <button
              type="button"
              onClick={() => onChange(values.filter((_, j) => j !== i))}
              className="shrink-0 border border-cream/15 px-3 text-xs text-cream/60 hover:border-cream/40 hover:text-cream"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CardShell({
  title,
  onRemove,
  children,
}: {
  title: string;
  onRemove?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-cream/10 bg-ink/60 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="font-display text-sm font-semibold text-cream/90">{title}</p>
        {onRemove ? (
          <button
            type="button"
            onClick={onRemove}
            className="text-xs text-cream/50 hover:text-red-300"
          >
            Remove
          </button>
        ) : null}
      </div>
      <div className="grid gap-3">{children}</div>
    </div>
  );
}
