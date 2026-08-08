import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { defaultContent } from "@/lib/content/defaults";
import { getSiteContent, saveSiteContent } from "@/lib/content/store";
import type { SiteContent } from "@/lib/content/types";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const content = await getSiteContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as SiteContent | null;
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid content" }, { status: 400 });
  }

  // Ensure required top-level keys exist
  for (const key of Object.keys(defaultContent) as (keyof SiteContent)[]) {
    if (!(key in body)) {
      return NextResponse.json(
        { error: `Missing section: ${key}` },
        { status: 400 },
      );
    }
  }

  await saveSiteContent(body);
  revalidatePath("/", "layout");
  revalidatePath("/contact");
  revalidatePath("/privacy");
  revalidatePath("/terms");

  return NextResponse.json({ ok: true });
}
