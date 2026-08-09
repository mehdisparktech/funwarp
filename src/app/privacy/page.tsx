import type { Metadata } from "next";
import { splitParagraphs } from "@/lib/content/rich-text";
import { getSiteContent } from "@/lib/content/store";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return {
    title: content.privacy.title,
    description: content.privacy.body.slice(0, 160),
  };
}

export default async function PrivacyPage() {
  const content = await getSiteContent();
  const paragraphs = splitParagraphs(content.privacy.body);

  return (
    <section className="mx-auto max-w-3xl px-5 py-28 sm:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-dark">
        {content.privacy.title}
      </h1>
      <div className="mt-6 space-y-4 leading-relaxed text-dark/65">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
