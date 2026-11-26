export const locales = ["en", "zh", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
/** Locales served under a URL prefix. English lives at the site root. */
export const prefixedLocales = ["zh", "fr", "ar"] as const;

export const localeInfo: Record<
  Locale,
  { name: string; label: string; dir: "ltr" | "rtl"; lang: string; og: string }
> = {
  en: { name: "English", label: "EN", dir: "ltr", lang: "en", og: "en_US" },
  zh: { name: "中文", label: "中文", dir: "ltr", lang: "zh-Hans", og: "zh_CN" },
  fr: { name: "Français", label: "FR", dir: "ltr", lang: "fr", og: "fr_FR" },
  ar: { name: "العربية", label: "ع", dir: "rtl", lang: "ar", og: "ar_AR" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build a site path for a locale. `path` is the English path, e.g. "/products". */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  if (locale === defaultLocale) return `${clean}/`;
  return `/${locale}${clean}/`;
}

/** Split a pathname into its locale and the locale-free path. */
export function splitPath(pathname: string): { locale: Locale; path: string } {
  const parts = pathname.split("/");
  const first = parts[1] ?? "";
  if (isLocale(first) && first !== defaultLocale) {
    const rest = "/" + parts.slice(2).join("/");
    return { locale: first, path: rest === "/" ? "/" : rest.replace(/\/$/, "") };
  }
  return { locale: defaultLocale, path: pathname.replace(/\/$/, "") || "/" };
}

/** Replace {name} placeholders. */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));
}
