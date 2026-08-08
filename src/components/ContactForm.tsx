"use client";

import { FormEvent, useState } from "react";
import { useContent } from "@/components/content/ContentProvider";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream outline-none transition focus:border-cream/50 placeholder:text-cream/30";

export function ContactForm() {
  const { contact } = useContent();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      website: String(form.get("website") ?? ""),
      building: String(form.get("building") ?? ""),
      projectType: String(form.get("projectType") ?? ""),
      budget: String(form.get("budget") ?? ""),
      timeline: String(form.get("timeline") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Could not send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-cream/20 bg-slate/20 p-10">
        <p className="font-display text-3xl">{contact.successMessage}</p>
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
          {contact.projectTypes.map((type) => (
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
            {contact.budgets.map((b) => (
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
            {contact.timelines.map((t) => (
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

      {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-7 w-full bg-cream px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-[#efe4d0] disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Sending…" : contact.submitLabel}
      </button>
    </form>
  );
}
