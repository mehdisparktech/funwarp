import { Fragment, type ReactNode } from "react";

/** Renders multiline text. Wrap accent words/phrases in *like this*. */
export function RichLines({
  value,
  className,
  as: Tag = "span",
}: {
  value: string;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3";
}) {
  const lines = value.split("\n");

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {renderInline(line)}
        </span>
      ))}
    </Tag>
  );
}

function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <span key={i} className="text-taupe">
          {part.slice(1, -1)}
        </span>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function splitParagraphs(body: string) {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
