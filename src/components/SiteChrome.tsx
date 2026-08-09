"use client";

import { usePathname } from "next/navigation";
import { ContentProvider } from "@/components/content/ContentProvider";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { SiteContent } from "@/lib/content/types";

export function SiteChrome({
  content,
  children,
}: {
  content: SiteContent;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <ContentProvider initial={content}>
      <div className={isAdmin ? "admin-theme min-h-full bg-[#15191f] text-cream" : undefined}>
        {!isAdmin ? <Navbar /> : null}
        <main className={isAdmin ? undefined : "flex-1"}>{children}</main>
        {!isAdmin ? <Footer /> : null}
      </div>
    </ContentProvider>
  );
}
