"use client";

import { Check, Plus } from "lucide-react";
import { useQuote } from "./QuoteProvider";

export function AddToQuote({
  slug,
  label,
  addedLabel,
  size = "sm",
  className = "",
}: {
  slug: string;
  label: string;
  addedLabel: string;
  size?: "sm" | "lg";
  className?: string;
}) {
  const { has, toggle } = useQuote();
  const added = has(slug);
  const sizing = size === "lg" ? "min-h-[3.25rem] px-5 text-base" : "min-h-11 px-3 text-sm";
  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={added}
      className={`inline-flex items-center justify-center gap-1.5 rounded-md font-semibold transition-colors ${sizing} ${
        added ? "bg-ink text-white hover:bg-ink-3" : "bg-blue text-white hover:bg-blue-deep"
      } ${className}`}
    >
      {added ? <Check className="size-4" aria-hidden="true" /> : <Plus className="size-4" aria-hidden="true" />}
      {added ? addedLabel : label}
    </button>
  );
}
