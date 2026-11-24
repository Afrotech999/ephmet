import type { Locale } from "../i18n";
import en, { type Dict } from "./en";
import zh from "./zh";
import fr from "./fr";
import ar from "./ar";

const dicts: Record<Locale, Dict> = { en, zh, fr, ar };

export function getDict(locale: Locale): Dict {
  return dicts[locale];
}

/** The geo-suggestion strings for every locale, so the banner can speak the suggested language. */
export const geoStrings: Record<Locale, Dict["geo"]> = {
  en: en.geo,
  zh: zh.geo,
  fr: fr.geo,
  ar: ar.geo,
};

export type { Dict };
