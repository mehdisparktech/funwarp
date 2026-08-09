"use client";

import { FormEvent, useState } from "react";
import { useContent } from "@/components/content/ContentProvider";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-2xl border border-dark/10 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary placeholder:text-dark/30";

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
      <div className="rounded-[28px] border border-primary/15 bg-primary/[0.04] p-10">
        <p className="font-display text-3xl font-semibold tracking-tight">
          {contact.successMessage}
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-primary hover:underline"
          onClick={() => setSubmitted(false)}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[28px] border border-dark/8 bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-dark/55">Name</span>
          <input name="name" required className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-dark/55">Email</span>
          <input name="email" type="email" required className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-dark/55">
            Company
          </span>
          <input name="company" className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-dark/55">
            Website
          </span>
          <input name="website" type="url" className={fieldClass} />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-medium text-dark/55">
          What are you building?
        </span>
        <input name="building" required className={fieldClass} />
      </label>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-medium text-dark/55">
          Project type
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {contact.projectTypes.map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-center gap-2 rounded-2xl border border-dark/8 bg-white px-3 py-3 text-sm has-[:checked]:border-primary has-[:checked]:bg-primary/[0.04]"
            >
              <input type="radio" name="projectType" value={type} required />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-dark/55">
            Budget
          </span>
          <select name="budget" required className={fieldClass}>
            <option value="">Select</option>
            {contact.budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-dark/55">
            Timeline
          </span>
          <select name="timeline" required className={fieldClass}>
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
        <span className="mb-2 block text-sm font-medium text-dark/55">
          Message
        </span>
        <textarea name="message" required rows={5} className={fieldClass} />
      </label>

      {error ? <p className="mt-4 text-sm text-red-500">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className={cn(
          "mt-7 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-[15px] font-medium text-white transition hover:bg-primary/90 disabled:opacity-60",
          "w-full sm:w-auto",
        )}
      >
        {loading ? "Sending…" : contact.submitLabel}
      </button>
    </form>
  );
}
