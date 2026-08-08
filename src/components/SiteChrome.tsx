"use client";

import { usePathname } from "next/navigation";
import { ContentProvider } from "@/components/content/ContentProvider";
import { Footer } from "@/components/Footer";
import { MouseTracer } from "@/components/MouseTracer";
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
      {!isAdmin ? <MouseTracer /> : null}
      {!isAdmin ? <Navbar /> : null}
      <main className={isAdmin ? undefined : "flex-1"}>{children}</main>
      {!isAdmin ? <Footer /> : null}
    </ContentProvider>
  );
}
