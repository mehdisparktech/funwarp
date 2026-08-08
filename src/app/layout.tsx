import type { Metadata } from "next";
import { Geist_Mono, Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { MouseTracer } from "@/components/MouseTracer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

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

const siteUrl = "https://funwarp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FUNWARP — Warp-speed code. Unlimited fun.",
    template: "%s — FUNWARP",
  },
  description:
    "FUNWARP is a global software development company building high-performance web apps, mobile apps, SaaS platforms, AI products and custom software.",
  keywords: [
    "software development company",
    "custom software development",
    "web application development",
    "mobile app development",
    "SaaS development",
    "AI development",
    "software engineering company",
    "digital product development",
  ],
  authors: [{ name: "FUNWARP" }],
  creator: "FUNWARP",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "FUNWARP",
    title: "FUNWARP — Warp-speed code. Unlimited fun.",
    description:
      "FUNWARP is a global software development company building high-performance web apps, mobile apps, SaaS platforms, AI products and custom software.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FUNWARP — Warp-speed code. Unlimited fun.",
    description:
      "FUNWARP is a global software development company building high-performance web apps, mobile apps, SaaS platforms, AI products and custom software.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FUNWARP",
  url: siteUrl,
  description:
    "Global software development company building high-performance web apps, mobile apps, SaaS platforms, AI products and custom software.",
  slogan: "Warp-speed code. Unlimited fun.",
  sameAs: [
    "https://linkedin.com",
    "https://github.com",
    "https://x.com",
    "https://dribbble.com",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
        <MouseTracer />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
