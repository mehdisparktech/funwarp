"use client";

import { FormEvent, useState } from "react";
import { budgets, projectTypes, timelines } from "@/lib/data";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream outline-none transition focus:border-cream/50 placeholder:text-cream/30";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-cream/20 bg-slate/20 p-10">
        <p className="font-display text-3xl">
          Message received. We&apos;ll be in touch soon.
        </p>
        <button
          type="button"
          className="mt-6 text-sm uppercase tracking-[0.16em] text-taupe hover:text-cream"
          onClick={() => setSubmitted(false)}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-cream/10 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-taupe">
            Name
          </span>
          <input name="name" required className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-taupe">
            Email
          </span>
          <input name="email" type="email" required className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-taupe">
            Company
          </span>
          <input name="company" className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-taupe">
            Website
          </span>
          <input name="website" type="url" className={fieldClass} />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-taupe">
          What are you building?
        </span>
        <input name="building" required className={fieldClass} />
      </label>

      <fieldset className="mt-6">
        <legend className="mb-3 text-xs uppercase tracking-[0.16em] text-taupe">
          Project type
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {projectTypes.map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-center gap-2 border border-cream/10 px-3 py-3 text-sm has-[:checked]:border-cream/40 has-[:checked]:bg-cream/[0.04]"
            >
              <input type="radio" name="projectType" value={type} required />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-taupe">
            Budget
          </span>
          <select name="budget" required className={cn(fieldClass, "bg-ink")}>
            <option value="">Select</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-taupe">
            Timeline
          </span>
          <select name="timeline" required className={cn(fieldClass, "bg-ink")}>
            <option value="">Select</option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-taupe">
          Message
        </span>
        <textarea name="message" required rows={5} className={fieldClass} />
      </label>

      <button
        type="submit"
        className="mt-7 w-full bg-cream px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-[#efe4d0] sm:w-auto"
      >
        Send project inquiry
      </button>
    </form>
  );
}
