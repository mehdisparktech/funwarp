import { promises as fs } from "fs";
import path from "path";
import { defaultContent } from "./defaults";
import type { ContactLead, SiteContent } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTENT_FILE = path.join(DATA_DIR, "site-content.json");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

function mergeContent(base: SiteContent, patch: Partial<SiteContent>): SiteContent {
  const next = structuredClone(base);
  for (const key of Object.keys(patch) as (keyof SiteContent)[]) {
    const value = patch[key];
    if (value !== undefined) {
      (next as Record<string, unknown>)[key] = value;
    }
  }
  return next;
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const raw = await fs.readFile(CONTENT_FILE, "utf8");
    const parsed = JSON.parse(raw) as Partial<SiteContent>;
    return mergeContent(defaultContent, parsed);
  } catch {
    await ensureDataDir();
    await fs.writeFile(CONTENT_FILE, JSON.stringify(defaultContent, null, 2), "utf8");
    return structuredClone(defaultContent);
  }
}

export async function saveSiteContent(content: SiteContent): Promise<void> {
  await ensureDataDir();
  const tmp = `${CONTENT_FILE}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(content, null, 2), "utf8");
  await fs.rename(tmp, CONTENT_FILE);
}

export async function updateSiteSection<K extends keyof SiteContent>(
  key: K,
  value: SiteContent[K],
): Promise<SiteContent> {
  const current = await getSiteContent();
  const next = { ...current, [key]: value };
  await saveSiteContent(next);
  return next;
}

export async function getLeads(): Promise<ContactLead[]> {
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf8");
    return JSON.parse(raw) as ContactLead[];
  } catch {
    return [];
  }
}

export async function saveLead(
  lead: Omit<ContactLead, "id" | "createdAt">,
): Promise<ContactLead> {
  const leads = await getLeads();
  const entry: ContactLead = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  leads.unshift(entry);
  await ensureDataDir();
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");
  return entry;
}

export async function deleteLead(id: string): Promise<void> {
  const leads = await getLeads();
  const next = leads.filter((l) => l.id !== id);
  await ensureDataDir();
  await fs.writeFile(LEADS_FILE, JSON.stringify(next, null, 2), "utf8");
}
