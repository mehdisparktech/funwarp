"use client";

import {
  CardShell,
  TextArea,
  TextInput,
  StringListEditor,
  inputClass,
} from "@/components/admin/fields";
import type { SiteContent } from "@/lib/content/types";

type Props<K extends keyof SiteContent> = {
  value: SiteContent[K];
  onChange: (value: SiteContent[K]) => void;
};

export function SiteEditor({ value, onChange }: Props<"site">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Brand" value={value.brand} onChange={(brand) => onChange({ ...value, brand })} />
      <TextInput label="Tagline" value={value.tagline} onChange={(tagline) => onChange({ ...value, tagline })} />
      <TextInput label="Site URL" value={value.url} onChange={(url) => onChange({ ...value, url })} />
      <TextArea label="SEO description" value={value.description} onChange={(description) => onChange({ ...value, description })} />
      <StringListEditor label="Keywords" values={value.keywords} onChange={(keywords) => onChange({ ...value, keywords })} />
      <TextInput label="OG title" value={value.ogTitle} onChange={(ogTitle) => onChange({ ...value, ogTitle })} />
      <TextArea label="OG description" value={value.ogDescription} onChange={(ogDescription) => onChange({ ...value, ogDescription })} />
      <StringListEditor label="Social links (sameAs)" values={value.socialLinks} onChange={(socialLinks) => onChange({ ...value, socialLinks })} />
    </div>
  );
}

export function NavbarEditor({ value, onChange }: Props<"navbar">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Brand" value={value.brand} onChange={(brand) => onChange({ ...value, brand })} />
      <TextInput label="CTA label" value={value.ctaLabel} onChange={(ctaLabel) => onChange({ ...value, ctaLabel })} />
      <TextInput label="Mobile CTA label" value={value.ctaMobileLabel} onChange={(ctaMobileLabel) => onChange({ ...value, ctaMobileLabel })} />
      <TextInput label="CTA href" value={value.ctaHref} onChange={(ctaHref) => onChange({ ...value, ctaHref })} />
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Nav links</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                links: [...value.links, { href: "/#", label: "New" }],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.links.map((link, i) => (
            <CardShell
              key={i}
              title={`Link ${i + 1}`}
              onRemove={() =>
                onChange({
                  ...value,
                  links: value.links.filter((_, j) => j !== i),
                })
              }
            >
              <TextInput
                label="Label"
                value={link.label}
                onChange={(label) => {
                  const links = [...value.links];
                  links[i] = { ...link, label };
                  onChange({ ...value, links });
                }}
              />
              <TextInput
                label="Href"
                value={link.href}
                onChange={(href) => {
                  const links = [...value.links];
                  links[i] = { ...link, href };
                  onChange({ ...value, links });
                }}
              />
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroEditor({ value, onChange }: Props<"hero">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Badge" value={value.badge} onChange={(badge) => onChange({ ...value, badge })} />
      <TextArea
        label="Headline"
        value={value.headline}
        onChange={(headline) => onChange({ ...value, headline })}
        hint="Use new lines for breaks. Wrap accent words in *stars*."
      />
      <TextInput label="Mega text" value={value.megaText} onChange={(megaText) => onChange({ ...value, megaText })} />
      <TextArea label="Description" value={value.description} onChange={(description) => onChange({ ...value, description })} />
      <div className="grid gap-3 sm:grid-cols-2">
        <TextInput
          label="Primary CTA label"
          value={value.primaryCta.label}
          onChange={(label) => onChange({ ...value, primaryCta: { ...value.primaryCta, label } })}
        />
        <TextInput
          label="Primary CTA href"
          value={value.primaryCta.href}
          onChange={(href) => onChange({ ...value, primaryCta: { ...value.primaryCta, href } })}
        />
        <TextInput
          label="Secondary CTA label"
          value={value.secondaryCta.label}
          onChange={(label) => onChange({ ...value, secondaryCta: { ...value.secondaryCta, label } })}
        />
        <TextInput
          label="Secondary CTA href"
          value={value.secondaryCta.href}
          onChange={(href) => onChange({ ...value, secondaryCta: { ...value.secondaryCta, href } })}
        />
      </div>
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Capabilities</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                capabilities: [
                  ...value.capabilities,
                  { number: String(value.capabilities.length + 1).padStart(2, "0"), label: "New" },
                ],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.capabilities.map((cap, i) => (
            <CardShell
              key={i}
              title={`Capability ${i + 1}`}
              onRemove={() =>
                onChange({
                  ...value,
                  capabilities: value.capabilities.filter((_, j) => j !== i),
                })
              }
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <TextInput
                  label="Number"
                  value={cap.number}
                  onChange={(number) => {
                    const capabilities = [...value.capabilities];
                    capabilities[i] = { ...cap, number };
                    onChange({ ...value, capabilities });
                  }}
                />
                <TextInput
                  label="Label"
                  value={cap.label}
                  onChange={(label) => {
                    const capabilities = [...value.capabilities];
                    capabilities[i] = { ...cap, label };
                    onChange({ ...value, capabilities });
                  }}
                />
              </div>
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TrustBarEditor({ value, onChange }: Props<"trustBar">) {
  return (
    <StringListEditor
      label="Client logos / names"
      values={value.logos}
      onChange={(logos) => onChange({ ...value, logos })}
    />
  );
}

export function ProjectsEditor({ value, onChange }: Props<"projects">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea
        label="Headline"
        value={value.headline}
        onChange={(headline) => onChange({ ...value, headline })}
        hint="New lines + *accent* supported"
      />
      <TextInput label="Card CTA" value={value.cardCta} onChange={(cardCta) => onChange({ ...value, cardCta })} />
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Projects</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                items: [
                  ...value.items,
                  {
                    name: "New project",
                    industry: "Industry",
                    description: "",
                    tech: [],
                    results: "",
                    accent: "from-taupe/40 via-cream/15 to-transparent",
                    link: "/contact",
                  },
                ],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.items.map((item, i) => (
            <CardShell
              key={i}
              title={item.name || `Project ${i + 1}`}
              onRemove={() =>
                onChange({ ...value, items: value.items.filter((_, j) => j !== i) })
              }
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <TextInput
                  label="Name"
                  value={item.name}
                  onChange={(name) => {
                    const items = [...value.items];
                    items[i] = { ...item, name };
                    onChange({ ...value, items });
                  }}
                />
                <TextInput
                  label="Industry"
                  value={item.industry}
                  onChange={(industry) => {
                    const items = [...value.items];
                    items[i] = { ...item, industry };
                    onChange({ ...value, items });
                  }}
                />
              </div>
              <TextArea
                label="Description"
                value={item.description}
                onChange={(description) => {
                  const items = [...value.items];
                  items[i] = { ...item, description };
                  onChange({ ...value, items });
                }}
              />
              <StringListEditor
                label="Tech"
                values={item.tech}
                onChange={(tech) => {
                  const items = [...value.items];
                  items[i] = { ...item, tech };
                  onChange({ ...value, items });
                }}
              />
              <TextInput
                label="Results"
                value={item.results}
                onChange={(results) => {
                  const items = [...value.items];
                  items[i] = { ...item, results };
                  onChange({ ...value, items });
                }}
              />
              <TextInput
                label="Accent classes"
                value={item.accent}
                onChange={(accent) => {
                  const items = [...value.items];
                  items[i] = { ...item, accent };
                  onChange({ ...value, items });
                }}
              />
              <TextInput
                label="Link"
                value={item.link ?? "/contact"}
                onChange={(link) => {
                  const items = [...value.items];
                  items[i] = { ...item, link };
                  onChange({ ...value, items });
                }}
              />
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicesEditor({ value, onChange }: Props<"services">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      <TextArea label="Description" value={value.description} onChange={(description) => onChange({ ...value, description })} />
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Services</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                items: [...value.items, { title: "New service", description: "", icon: "globe" }],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.items.map((item, i) => (
            <CardShell
              key={i}
              title={item.title || `Service ${i + 1}`}
              onRemove={() =>
                onChange({ ...value, items: value.items.filter((_, j) => j !== i) })
              }
            >
              <TextInput
                label="Title"
                value={item.title}
                onChange={(title) => {
                  const items = [...value.items];
                  items[i] = { ...item, title };
                  onChange({ ...value, items });
                }}
              />
              <TextArea
                label="Description"
                value={item.description}
                onChange={(description) => {
                  const items = [...value.items];
                  items[i] = { ...item, description };
                  onChange({ ...value, items });
                }}
              />
              <TextInput
                label="Icon key"
                value={item.icon}
                onChange={(icon) => {
                  const items = [...value.items];
                  items[i] = { ...item, icon };
                  onChange({ ...value, items });
                }}
                hint="globe, smartphone, layers, sparkles, code, palette"
              />
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

function NumberedListEditor({
  value,
  onChange,
  itemLabel,
}: {
  value: SiteContent["process"];
  onChange: (v: SiteContent["process"]) => void;
  itemLabel: string;
}) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      {"megaText" in value ? (
        <TextInput
          label="Mega text"
          value={value.megaText}
          onChange={(megaText) => onChange({ ...value, megaText })}
        />
      ) : null}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">{itemLabel}</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                items: [
                  ...value.items,
                  {
                    number: String(value.items.length + 1).padStart(2, "0"),
                    title: "New",
                    description: "",
                  },
                ],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.items.map((item, i) => (
            <CardShell
              key={i}
              title={`${item.number} ${item.title}`}
              onRemove={() =>
                onChange({ ...value, items: value.items.filter((_, j) => j !== i) })
              }
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <TextInput
                  label="Number"
                  value={item.number}
                  onChange={(number) => {
                    const items = [...value.items];
                    items[i] = { ...item, number };
                    onChange({ ...value, items });
                  }}
                />
                <TextInput
                  label="Title"
                  value={item.title}
                  onChange={(title) => {
                    const items = [...value.items];
                    items[i] = { ...item, title };
                    onChange({ ...value, items });
                  }}
                />
              </div>
              <TextArea
                label="Description"
                value={item.description}
                onChange={(description) => {
                  const items = [...value.items];
                  items[i] = { ...item, description };
                  onChange({ ...value, items });
                }}
              />
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProcessEditor({ value, onChange }: Props<"process">) {
  return <NumberedListEditor value={value} onChange={onChange} itemLabel="Steps" />;
}

export function PrinciplesEditor({ value, onChange }: Props<"principles">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      <TextArea label="Description" value={value.description} onChange={(description) => onChange({ ...value, description })} />
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Principles</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                items: [
                  ...value.items,
                  {
                    number: String(value.items.length + 1).padStart(2, "0"),
                    title: "New",
                    description: "",
                  },
                ],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.items.map((item, i) => (
            <CardShell
              key={i}
              title={`${item.number} ${item.title}`}
              onRemove={() =>
                onChange({ ...value, items: value.items.filter((_, j) => j !== i) })
              }
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <TextInput
                  label="Number"
                  value={item.number}
                  onChange={(number) => {
                    const items = [...value.items];
                    items[i] = { ...item, number };
                    onChange({ ...value, items });
                  }}
                />
                <TextInput
                  label="Title"
                  value={item.title}
                  onChange={(title) => {
                    const items = [...value.items];
                    items[i] = { ...item, title };
                    onChange({ ...value, items });
                  }}
                />
              </div>
              <TextArea
                label="Description"
                value={item.description}
                onChange={(description) => {
                  const items = [...value.items];
                  items[i] = { ...item, description };
                  onChange({ ...value, items });
                }}
              />
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TechnologyEditor({ value, onChange }: Props<"technology">) {
  return (
    <div className="grid gap-4">
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      <TextArea label="Description" value={value.description} onChange={(description) => onChange({ ...value, description })} />
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Groups</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                groups: [...value.groups, { category: "New", items: [] }],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.groups.map((group, i) => (
            <CardShell
              key={i}
              title={group.category || `Group ${i + 1}`}
              onRemove={() =>
                onChange({ ...value, groups: value.groups.filter((_, j) => j !== i) })
              }
            >
              <TextInput
                label="Category"
                value={group.category}
                onChange={(category) => {
                  const groups = [...value.groups];
                  groups[i] = { ...group, category };
                  onChange({ ...value, groups });
                }}
              />
              <StringListEditor
                label="Items"
                values={group.items}
                onChange={(items) => {
                  const groups = [...value.groups];
                  groups[i] = { ...group, items };
                  onChange({ ...value, groups });
                }}
              />
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FunEditor({ value, onChange }: Props<"fun">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      <TextArea label="Description" value={value.description} onChange={(description) => onChange({ ...value, description })} />
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Reasons</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                reasons: [...value.reasons, { title: "New", copy: "" }],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.reasons.map((item, i) => (
            <CardShell
              key={i}
              title={item.title || `Reason ${i + 1}`}
              onRemove={() =>
                onChange({ ...value, reasons: value.reasons.filter((_, j) => j !== i) })
              }
            >
              <TextInput
                label="Title"
                value={item.title}
                onChange={(title) => {
                  const reasons = [...value.reasons];
                  reasons[i] = { ...item, title };
                  onChange({ ...value, reasons });
                }}
              />
              <TextArea
                label="Copy"
                value={item.copy}
                onChange={(copy) => {
                  const reasons = [...value.reasons];
                  reasons[i] = { ...item, copy };
                  onChange({ ...value, reasons });
                }}
              />
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceEditor({ value, onChange }: Props<"experience">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      <StringListEditor label="Journey steps" values={value.journey} onChange={(journey) => onChange({ ...value, journey })} />
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Cards</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                cards: [...value.cards, { title: "New", description: "" }],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.cards.map((card, i) => (
            <CardShell
              key={i}
              title={card.title || `Card ${i + 1}`}
              onRemove={() =>
                onChange({ ...value, cards: value.cards.filter((_, j) => j !== i) })
              }
            >
              <TextInput
                label="Title"
                value={card.title}
                onChange={(title) => {
                  const cards = [...value.cards];
                  cards[i] = { ...card, title };
                  onChange({ ...value, cards });
                }}
              />
              <TextArea
                label="Description"
                value={card.description}
                onChange={(description) => {
                  const cards = [...value.cards];
                  cards[i] = { ...card, description };
                  onChange({ ...value, cards });
                }}
              />
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AboutEditor({ value, onChange }: Props<"about">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      <StringListEditor
        label="Paragraphs"
        values={value.paragraphs}
        onChange={(paragraphs) => onChange({ ...value, paragraphs })}
        hint="Each item is one paragraph"
      />
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Stats</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                stats: [...value.stats, { value: 0, suffix: "+", label: "New" }],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.stats.map((stat, i) => (
            <CardShell
              key={i}
              title={stat.label || `Stat ${i + 1}`}
              onRemove={() =>
                onChange({ ...value, stats: value.stats.filter((_, j) => j !== i) })
              }
            >
              <div className="grid gap-3 sm:grid-cols-3">
                <TextInput
                  label="Value"
                  type="number"
                  value={stat.value}
                  onChange={(v) => {
                    const stats = [...value.stats];
                    stats[i] = { ...stat, value: Number(v) || 0 };
                    onChange({ ...value, stats });
                  }}
                />
                <TextInput
                  label="Suffix"
                  value={stat.suffix}
                  onChange={(suffix) => {
                    const stats = [...value.stats];
                    stats[i] = { ...stat, suffix };
                    onChange({ ...value, stats });
                  }}
                />
                <TextInput
                  label="Label"
                  value={stat.label}
                  onChange={(label) => {
                    const stats = [...value.stats];
                    stats[i] = { ...stat, label };
                    onChange({ ...value, stats });
                  }}
                />
              </div>
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

async function uploadImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const res = await fetch("/api/admin/upload", { method: "POST", body: form });
  if (!res.ok) throw new Error("Upload failed");
  const data = (await res.json()) as { url: string };
  return data.url;
}

export function TeamEditor({ value, onChange }: Props<"team">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      <TextArea label="Description" value={value.description} onChange={(description) => onChange({ ...value, description })} />
      <TextInput label="CTA headline" value={value.ctaHeadline} onChange={(ctaHeadline) => onChange({ ...value, ctaHeadline })} />
      <TextArea label="CTA description" value={value.ctaDescription} onChange={(ctaDescription) => onChange({ ...value, ctaDescription })} />
      <div className="grid gap-3 sm:grid-cols-2">
        <TextInput label="CTA label" value={value.ctaLabel} onChange={(ctaLabel) => onChange({ ...value, ctaLabel })} />
        <TextInput label="CTA href" value={value.ctaHref} onChange={(ctaHref) => onChange({ ...value, ctaHref })} />
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Team stats</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                stats: [...value.stats, { value: "0", label: "New" }],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.stats.map((stat, i) => (
            <CardShell
              key={i}
              title={stat.label || `Stat ${i + 1}`}
              onRemove={() =>
                onChange({ ...value, stats: value.stats.filter((_, j) => j !== i) })
              }
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <TextInput
                  label="Value"
                  value={stat.value}
                  onChange={(v) => {
                    const stats = [...value.stats];
                    stats[i] = { ...stat, value: v };
                    onChange({ ...value, stats });
                  }}
                />
                <TextInput
                  label="Label"
                  value={stat.label}
                  onChange={(label) => {
                    const stats = [...value.stats];
                    stats[i] = { ...stat, label };
                    onChange({ ...value, stats });
                  }}
                />
              </div>
            </CardShell>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Members</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                members: [
                  ...value.members,
                  {
                    name: "New member",
                    role: "Role",
                    bio: "",
                    skills: [],
                    initials: "NM",
                    accent: "from-taupe/50 to-cream/30",
                    image: "/uploads/placeholder.png",
                    social: { linkedin: "#", github: "#", x: "#" },
                  },
                ],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.members.map((member, i) => (
            <CardShell
              key={i}
              title={member.name || `Member ${i + 1}`}
              onRemove={() =>
                onChange({
                  ...value,
                  members: value.members.filter((_, j) => j !== i),
                })
              }
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <TextInput
                  label="Name"
                  value={member.name}
                  onChange={(name) => {
                    const members = [...value.members];
                    members[i] = { ...member, name };
                    onChange({ ...value, members });
                  }}
                />
                <TextInput
                  label="Role"
                  value={member.role}
                  onChange={(role) => {
                    const members = [...value.members];
                    members[i] = { ...member, role };
                    onChange({ ...value, members });
                  }}
                />
              </div>
              <TextArea
                label="Bio"
                value={member.bio}
                onChange={(bio) => {
                  const members = [...value.members];
                  members[i] = { ...member, bio };
                  onChange({ ...value, members });
                }}
              />
              <StringListEditor
                label="Skills"
                values={member.skills}
                onChange={(skills) => {
                  const members = [...value.members];
                  members[i] = { ...member, skills };
                  onChange({ ...value, members });
                }}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <TextInput
                  label="Initials"
                  value={member.initials}
                  onChange={(initials) => {
                    const members = [...value.members];
                    members[i] = { ...member, initials };
                    onChange({ ...value, members });
                  }}
                />
                <TextInput
                  label="Accent"
                  value={member.accent}
                  onChange={(accent) => {
                    const members = [...value.members];
                    members[i] = { ...member, accent };
                    onChange({ ...value, members });
                  }}
                />
              </div>
              <TextInput
                label="Image URL"
                value={member.image}
                onChange={(image) => {
                  const members = [...value.members];
                  members[i] = { ...member, image };
                  onChange({ ...value, members });
                }}
              />
              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-taupe">
                  Upload image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className={inputClass}
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    try {
                      const url = await uploadImage(file);
                      const members = [...value.members];
                      members[i] = { ...member, image: url };
                      onChange({ ...value, members });
                    } catch {
                      alert("Upload failed");
                    }
                  }}
                />
              </label>
              <TextInput
                label="Website"
                value={member.website ?? ""}
                onChange={(website) => {
                  const members = [...value.members];
                  members[i] = { ...member, website };
                  onChange({ ...value, members });
                }}
              />
              <div className="grid gap-3 sm:grid-cols-3">
                <TextInput
                  label="LinkedIn"
                  value={member.social.linkedin}
                  onChange={(linkedin) => {
                    const members = [...value.members];
                    members[i] = {
                      ...member,
                      social: { ...member.social, linkedin },
                    };
                    onChange({ ...value, members });
                  }}
                />
                <TextInput
                  label="GitHub"
                  value={member.social.github}
                  onChange={(github) => {
                    const members = [...value.members];
                    members[i] = {
                      ...member,
                      social: { ...member.social, github },
                    };
                    onChange({ ...value, members });
                  }}
                />
                <TextInput
                  label="X"
                  value={member.social.x}
                  onChange={(x) => {
                    const members = [...value.members];
                    members[i] = { ...member, social: { ...member.social, x } };
                    onChange({ ...value, members });
                  }}
                />
              </div>
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsEditor({ value, onChange }: Props<"testimonials">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Quotes</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                items: [...value.items, { quote: "", name: "Name", role: "Role" }],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.items.map((item, i) => (
            <CardShell
              key={i}
              title={item.name || `Quote ${i + 1}`}
              onRemove={() =>
                onChange({ ...value, items: value.items.filter((_, j) => j !== i) })
              }
            >
              <TextArea
                label="Quote"
                value={item.quote}
                onChange={(quote) => {
                  const items = [...value.items];
                  items[i] = { ...item, quote };
                  onChange({ ...value, items });
                }}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <TextInput
                  label="Name"
                  value={item.name}
                  onChange={(name) => {
                    const items = [...value.items];
                    items[i] = { ...item, name };
                    onChange({ ...value, items });
                  }}
                />
                <TextInput
                  label="Role"
                  value={item.role}
                  onChange={(role) => {
                    const items = [...value.items];
                    items[i] = { ...item, role };
                    onChange({ ...value, items });
                  }}
                />
              </div>
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GlobalEditor({ value, onChange }: Props<"global">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      <TextArea label="Description" value={value.description} onChange={(description) => onChange({ ...value, description })} />
      <div className="grid gap-3 sm:grid-cols-2">
        <TextInput label="Map title" value={value.mapTitle} onChange={(mapTitle) => onChange({ ...value, mapTitle })} />
        <TextInput label="Map count" value={value.mapCount} onChange={(mapCount) => onChange({ ...value, mapCount })} />
      </div>
      <TextInput label="Map subtitle" value={value.mapSubtitle} onChange={(mapSubtitle) => onChange({ ...value, mapSubtitle })} />
      <TextArea label="Map embed URL" value={value.mapEmbedUrl} onChange={(mapEmbedUrl) => onChange({ ...value, mapEmbedUrl })} rows={3} />
      <TextArea label="Map disclaimer" value={value.mapDisclaimer} onChange={(mapDisclaimer) => onChange({ ...value, mapDisclaimer })} />
      <TextInput label="Regions label" value={value.regionsLabel} onChange={(regionsLabel) => onChange({ ...value, regionsLabel })} />
      <StringListEditor label="Regions" values={value.regions} onChange={(regions) => onChange({ ...value, regions })} />
    </div>
  );
}

export function FaqEditor({ value, onChange }: Props<"faq">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">FAQs</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                items: [...value.items, { q: "New question?", a: "" }],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-3">
          {value.items.map((item, i) => (
            <CardShell
              key={i}
              title={item.q || `FAQ ${i + 1}`}
              onRemove={() =>
                onChange({ ...value, items: value.items.filter((_, j) => j !== i) })
              }
            >
              <TextInput
                label="Question"
                value={item.q}
                onChange={(q) => {
                  const items = [...value.items];
                  items[i] = { ...item, q };
                  onChange({ ...value, items });
                }}
              />
              <TextArea
                label="Answer"
                value={item.a}
                onChange={(a) => {
                  const items = [...value.items];
                  items[i] = { ...item, a };
                  onChange({ ...value, items });
                }}
              />
            </CardShell>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CtaEditor({ value, onChange }: Props<"cta">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      <TextArea label="Description" value={value.description} onChange={(description) => onChange({ ...value, description })} />
      <TextInput label="Mega text" value={value.megaText} onChange={(megaText) => onChange({ ...value, megaText })} />
      <div className="grid gap-3 sm:grid-cols-2">
        <TextInput
          label="Primary CTA label"
          value={value.primaryCta.label}
          onChange={(label) => onChange({ ...value, primaryCta: { ...value.primaryCta, label } })}
        />
        <TextInput
          label="Primary CTA href"
          value={value.primaryCta.href}
          onChange={(href) => onChange({ ...value, primaryCta: { ...value.primaryCta, href } })}
        />
        <TextInput
          label="Secondary CTA label"
          value={value.secondaryCta.label}
          onChange={(label) => onChange({ ...value, secondaryCta: { ...value.secondaryCta, label } })}
        />
        <TextInput
          label="Secondary CTA href"
          value={value.secondaryCta.href}
          onChange={(href) => onChange({ ...value, secondaryCta: { ...value.secondaryCta, href } })}
        />
      </div>
    </div>
  );
}

export function FooterEditor({ value, onChange }: Props<"footer">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Brand" value={value.brand} onChange={(brand) => onChange({ ...value, brand })} />
      <TextInput label="Tagline" value={value.tagline} onChange={(tagline) => onChange({ ...value, tagline })} />
      <TextInput label="Status label" value={value.statusLabel} onChange={(statusLabel) => onChange({ ...value, statusLabel })} />
      <TextInput label="Status text" value={value.statusText} onChange={(statusText) => onChange({ ...value, statusText })} />
      <TextInput label="Copyright" value={value.copyright} onChange={(copyright) => onChange({ ...value, copyright })} />

      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Columns</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                columns: [...value.columns, { title: "New", links: [] }],
              })
            }
          >
            + Add column
          </button>
        </div>
        <div className="space-y-3">
          {value.columns.map((col, i) => (
            <CardShell
              key={i}
              title={col.title || `Column ${i + 1}`}
              onRemove={() =>
                onChange({
                  ...value,
                  columns: value.columns.filter((_, j) => j !== i),
                })
              }
            >
              <TextInput
                label="Title"
                value={col.title}
                onChange={(title) => {
                  const columns = [...value.columns];
                  columns[i] = { ...col, title };
                  onChange({ ...value, columns });
                }}
              />
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Links</p>
                  <button
                    type="button"
                    className="text-xs text-cream/70 hover:text-cream"
                    onClick={() => {
                      const columns = [...value.columns];
                      columns[i] = {
                        ...col,
                        links: [...col.links, { href: "/#", label: "New" }],
                      };
                      onChange({ ...value, columns });
                    }}
                  >
                    + Link
                  </button>
                </div>
                <div className="space-y-2">
                  {col.links.map((link, li) => (
                    <div key={li} className="grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                      <input
                        className={inputClass}
                        value={link.label}
                        placeholder="Label"
                        onChange={(e) => {
                          const columns = [...value.columns];
                          const links = [...col.links];
                          links[li] = { ...link, label: e.target.value };
                          columns[i] = { ...col, links };
                          onChange({ ...value, columns });
                        }}
                      />
                      <input
                        className={inputClass}
                        value={link.href}
                        placeholder="Href"
                        onChange={(e) => {
                          const columns = [...value.columns];
                          const links = [...col.links];
                          links[li] = { ...link, href: e.target.value };
                          columns[i] = { ...col, links };
                          onChange({ ...value, columns });
                        }}
                      />
                      <button
                        type="button"
                        className="border border-cream/15 px-3 text-xs text-cream/60"
                        onClick={() => {
                          const columns = [...value.columns];
                          columns[i] = {
                            ...col,
                            links: col.links.filter((_, j) => j !== li),
                          };
                          onChange({ ...value, columns });
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </CardShell>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-taupe">Bottom links</p>
          <button
            type="button"
            className="text-xs text-cream/70 hover:text-cream"
            onClick={() =>
              onChange({
                ...value,
                bottomLinks: [...value.bottomLinks, { href: "/", label: "New" }],
              })
            }
          >
            + Add
          </button>
        </div>
        <div className="space-y-2">
          {value.bottomLinks.map((link, i) => (
            <div key={i} className="grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
              <input
                className={inputClass}
                value={link.label}
                onChange={(e) => {
                  const bottomLinks = [...value.bottomLinks];
                  bottomLinks[i] = { ...link, label: e.target.value };
                  onChange({ ...value, bottomLinks });
                }}
              />
              <input
                className={inputClass}
                value={link.href}
                onChange={(e) => {
                  const bottomLinks = [...value.bottomLinks];
                  bottomLinks[i] = { ...link, href: e.target.value };
                  onChange({ ...value, bottomLinks });
                }}
              />
              <button
                type="button"
                className="border border-cream/15 px-3 text-xs text-cream/60"
                onClick={() =>
                  onChange({
                    ...value,
                    bottomLinks: value.bottomLinks.filter((_, j) => j !== i),
                  })
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContactEditor({ value, onChange }: Props<"contact">) {
  return (
    <div className="grid gap-4">
      <TextInput label="Eyebrow" value={value.eyebrow} onChange={(eyebrow) => onChange({ ...value, eyebrow })} />
      <TextArea label="Headline" value={value.headline} onChange={(headline) => onChange({ ...value, headline })} />
      <TextArea label="Description" value={value.description} onChange={(description) => onChange({ ...value, description })} />
      <TextInput label="Submit label" value={value.submitLabel} onChange={(submitLabel) => onChange({ ...value, submitLabel })} />
      <TextArea label="Success message" value={value.successMessage} onChange={(successMessage) => onChange({ ...value, successMessage })} />
      <StringListEditor label="Project types" values={value.projectTypes} onChange={(projectTypes) => onChange({ ...value, projectTypes })} />
      <StringListEditor label="Budgets" values={value.budgets} onChange={(budgets) => onChange({ ...value, budgets })} />
      <StringListEditor label="Timelines" values={value.timelines} onChange={(timelines) => onChange({ ...value, timelines })} />
    </div>
  );
}

export function LegalEditor({
  value,
  onChange,
}: {
  value: SiteContent["privacy"] | SiteContent["terms"];
  onChange: (v: SiteContent["privacy"]) => void;
}) {
  return (
    <div className="grid gap-4">
      <TextInput label="Title" value={value.title} onChange={(title) => onChange({ ...value, title })} />
      <TextArea
        label="Body"
        value={value.body}
        onChange={(body) => onChange({ ...value, body })}
        rows={12}
        hint="Separate paragraphs with a blank line"
      />
    </div>
  );
}
