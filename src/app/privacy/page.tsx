import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "FUNWARP privacy policy placeholder.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-28 sm:px-8">
      <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mt-6 leading-relaxed text-muted">
        This is a placeholder privacy policy for the FUNWARP website. Replace
        this page with your final legal copy before launch.
      </p>
    </section>
  );
}
