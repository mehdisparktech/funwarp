import type { Metadata } from "next";
import { Geist_Mono, Manrope, Syne } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { getSiteContent } from "@/lib/content/store";
import "./globals.css";

export const dynamic = "force-dynamic";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  const siteUrl = content.site.url || "https://funwarp.com";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: content.site.ogTitle,
      template: `%s — ${content.site.brand}`,
    },
    description: content.site.description,
    keywords: content.site.keywords,
    authors: [{ name: content.site.brand }],
    creator: content.site.brand,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: content.site.brand,
      title: content.site.ogTitle,
      description: content.site.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: content.site.ogTitle,
      description: content.site.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const content = await getSiteContent();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: content.site.brand,
    url: content.site.url,
    description: content.site.description,
    slogan: content.site.tagline,
    sameAs: content.site.socialLinks,
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <SiteChrome content={content}>{children}</SiteChrome>
      </body>
    </html>
  );
}
