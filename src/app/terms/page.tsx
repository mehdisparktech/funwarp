import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "FUNWARP terms of service placeholder.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-28 sm:px-8">
      <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mt-6 leading-relaxed text-muted">
        This is a placeholder terms of service page for the FUNWARP website.
        Replace this page with your final legal copy before launch.
      </p>
    </section>
  );
}
