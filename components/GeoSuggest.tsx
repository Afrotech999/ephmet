"use client";

import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { geoStrings } from "@/lib/dict";
import { localeInfo, localePath, splitPath, type Locale } from "@/lib/i18n";
import { CHOICE_KEY, rememberChoice } from "./LanguageSwitcher";

const DISMISS_KEY = "ephmet-geo-dismissed";

/**
 * Time zones mapped to the language we offer there. The visitor's time zone comes from their own
 * device, so this needs no IP lookup and sends nothing anywhere.
 */
const zoneLocale: Record<string, Locale> = {
  // China
  "Asia/Shanghai": "zh",
  "Asia/Urumqi": "zh",
  "Asia/Chongqing": "zh",
  "Asia/Chungking": "zh",
  "Asia/Harbin": "zh",
  "Asia/Kashgar": "zh",
  "Asia/Hong_Kong": "zh",
  "Asia/Macau": "zh",
  "PRC": "zh",
  // Arabic-speaking countries (UAE, Gulf, Egypt, Sudan, Levant, Iraq, Yemen, Libya)
  "Asia/Dubai": "ar",
  "Asia/Riyadh": "ar",
  "Asia/Qatar": "ar",
  "Asia/Bahrain": "ar",
  "Asia/Kuwait": "ar",
  "Asia/Muscat": "ar",
  "Asia/Aden": "ar",
  "Asia/Baghdad": "ar",
  "Asia/Amman": "ar",
  "Asia/Damascus": "ar",
  "Asia/Beirut": "ar",
  "Africa/Cairo": "ar",
  "Africa/Khartoum": "ar",
  "Africa/Tripoli": "ar",
  // French-speaking countries, including Djibouti
  "Africa/Djibouti": "fr",
  "Europe/Paris": "fr",
  "Europe/Brussels": "fr",
  "Europe/Luxembourg": "fr",
  "Europe/Monaco": "fr",
  "Africa/Abidjan": "fr",
  "Africa/Dakar": "fr",
  "Africa/Douala": "fr",
  "Africa/Kinshasa": "fr",
  "Africa/Lubumbashi": "fr",
  "Africa/Brazzaville": "fr",
  "Africa/Libreville": "fr",
  "Africa/Bamako": "fr",
  "Africa/Niamey": "fr",
  "Africa/Ouagadougou": "fr",
  "Africa/Lome": "fr",
  "Africa/Porto-Novo": "fr",
  "Africa/Conakry": "fr",
  "Africa/Ndjamena": "fr",
  "Africa/Bangui": "fr",
  "Indian/Comoro": "fr",
  "Indian/Antananarivo": "fr",
};

function browserLocale(): Locale | null {
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const raw of langs) {
    const tag = (raw || "").toLowerCase();
    if (tag.startsWith("zh")) {
      // Offer Simplified Chinese only to Simplified readers.
      if (/zh-(tw|hk|mo|hant)/.test(tag)) continue;
      return "zh";
    }
    const base = tag.split("-")[0];
    if (base === "fr" || base === "ar" || base === "en") return base;
  }
  return null;
}

function zoneSuggestion(): Locale | null {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return zoneLocale[zone] ?? null;
  } catch {
    return null;
  }
}

/** Pick a language to suggest, or null. Order: the browser's own language, then location, then English. */
export function suggestLocale(current: Locale): Locale | null {
  const fromBrowser = browserLocale();
  const candidates: (Locale | null)[] = [
    fromBrowser && fromBrowser !== "en" ? fromBrowser : null,
    zoneSuggestion(),
    fromBrowser === "en" ? "en" : null,
  ];
  for (const c of candidates) if (c && c !== current) return c;
  return null;
}

/**
 * A slim bar under the header that offers the visitor's language. It never switches on its own:
 * the visitor taps to switch or dismisses it, and the choice is remembered.
 */
export function GeoSuggest({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const [target, setTarget] = useState<Locale | null>(null);

  useEffect(() => {
    let dismissed: string | null = null;
    let chosen: string | null = null;
    try {
      dismissed = window.localStorage.getItem(DISMISS_KEY);
      chosen = window.localStorage.getItem(CHOICE_KEY);
    } catch {
      /* ignore */
    }
    if (chosen) return;
    const suggestion = suggestLocale(locale);
    if (suggestion && suggestion !== dismissed) setTarget(suggestion);
  }, [locale]);

  if (!target) return null;
  const s = geoStrings[target];
  const info = localeInfo[target];
  const { path } = splitPath(pathname);

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISS_KEY, target);
    } catch {
      /* ignore */
    }
    rememberChoice(locale);
    setTarget(null);
  };

  return (
    <div role="region" aria-label={s.offer} lang={info.lang} dir={info.dir} className="border-b border-sky/30 bg-[#e6f2fd] text-ink">
      <div className="wrap flex flex-wrap items-center gap-x-4 gap-y-2 py-2.5">
        <p className="min-w-0 flex-1 text-[15px]">{s.offer}</p>
        <div className="flex items-center gap-2">
          <a
            href={localePath(target, path)}
            hrefLang={info.lang}
            onClick={() => rememberChoice(target)}
            className="inline-flex min-h-11 items-center rounded-md bg-ink px-4 text-sm font-semibold text-white hover:bg-ink-3"
          >
            {s.switch}
          </a>
          <button
            type="button"
            onClick={dismiss}
            aria-label={s.dismiss}
            className="grid size-11 place-items-center rounded-md text-muted hover:bg-white hover:text-ink"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
