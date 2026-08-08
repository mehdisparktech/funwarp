import { NextResponse } from "next/server";
import { saveLead } from "@/lib/content/store";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<
    string,
    unknown
  > | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const building = String(body.building ?? "").trim();
  const projectType = String(body.projectType ?? "").trim();
  const budget = String(body.budget ?? "").trim();
  const timeline = String(body.timeline ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !building || !projectType || !budget || !timeline || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  await saveLead({
    name,
    email,
    company: String(body.company ?? "").trim(),
    website: String(body.website ?? "").trim(),
    building,
    projectType,
    budget,
    timeline,
    message,
  });

  return NextResponse.json({ ok: true });
}
