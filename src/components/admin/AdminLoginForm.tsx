"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Wrong password");
        return;
      }
      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Could not sign in");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a1f26] px-5">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md border border-cream/15 bg-ink p-8"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-taupe">Admin</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-cream">
          FUNWARP Dashboard
        </h1>
        <p className="mt-2 text-sm text-cream/55">
          Sign in to edit every section of the website.
        </p>

        <label className="mt-8 block">
          <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-taupe">
            Password
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus
            className="w-full border border-cream/20 bg-transparent px-4 py-3 text-cream outline-none focus:border-cream/50"
          />
        </label>

        {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-cream px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-[#efe4d0] disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
