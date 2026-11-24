"use client";

import { Check, ChevronDown, Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { localeInfo, localePath, locales, splitPath, type Locale } from "@/lib/i18n";

export const CHOICE_KEY = "ephmet-locale-choice";

export function rememberChoice(locale: Locale) {
  try {
    window.localStorage.setItem(CHOICE_KEY, locale);
  } catch {
    /* ignore */
  }
}

/** Compact language button for the header; opens a list of the four languages. */
export function LanguageSwitcher({
  locale,
  label,
  tone,
}: {
  locale: Locale;
  label: string;
  tone: "dark" | "light";
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const { path } = splitPath(pathname);
  const ref = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const button =
    tone === "dark"
      ? "border-white/25 text-white hover:border-white/60"
      : "border-line text-ink hover:border-ink";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${label}: ${localeInfo[locale].name}`}
        className={`flex h-11 items-center gap-1.5 rounded-md border px-2.5 text-sm font-semibold transition-colors ${button}`}
      >
        <Globe className="size-[18px]" aria-hidden="true" />
        <span lang={localeInfo[locale].lang}>{localeInfo[locale].label}</span>
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <ul
          id={listId}
          className="absolute end-0 top-[calc(100%+6px)] z-50 w-52 overflow-hidden rounded-lg border border-line bg-paper py-1 text-ink shadow-xl shadow-ink/15"
        >
          {locales.map((l) => (
            <li key={l}>
              <a
                href={localePath(l, path)}
                hrefLang={localeInfo[l].lang}
                lang={localeInfo[l].lang}
                aria-current={l === locale ? "true" : undefined}
                onClick={() => rememberChoice(l)}
                className="flex min-h-12 items-center justify-between gap-3 px-4 text-[15px] hover:bg-steel"
              >
                <span className={l === locale ? "font-semibold" : ""}>{localeInfo[l].name}</span>
                {l === locale && <Check className="size-4 text-blue" aria-hidden="true" />}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Full-width language row for the mobile menu. */
export function LanguageRow({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const { path } = splitPath(pathname);
  return (
    <div className="grid grid-cols-4 gap-1 rounded-lg border border-white/20 p-1">
      {locales.map((l) => (
        <a
          key={l}
          href={localePath(l, path)}
          hrefLang={localeInfo[l].lang}
          lang={localeInfo[l].lang}
          aria-current={l === locale ? "true" : undefined}
          onClick={() => rememberChoice(l)}
          className={`flex min-h-11 items-center justify-center rounded-md text-sm font-semibold ${
            l === locale ? "bg-white text-ink" : "text-white/75 hover:bg-white/10"
          }`}
        >
          {localeInfo[l].name}
        </a>
      ))}
    </div>
  );
}
