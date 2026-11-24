import type { Metadata } from "next";
import { getDict } from "./dict";
import { localeInfo, localePath, locales, type Locale } from "./i18n";
import { site } from "./site";

export function absolute(path: string): string {
  return `${site.url}${path === "/" ? "" : path}` || site.url;
}

/** hreflang alternates for one English path across every locale, plus x-default. */
export function languageAlternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of locales) out[localeInfo[l].lang] = absolute(localePath(l, path));
  out["x-default"] = absolute(localePath("en", path));
  return out;
}

export function pageMeta(locale: Locale, path: string, title: string, description: string): Metadata {
  const url = absolute(localePath(locale, path));
  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url,
      locale: localeInfo[locale].og,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeInfo[l].og),
      images: [{ url: `${site.url}/og.jpg`, width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${site.url}/og.jpg`] },
  };
}

/** Business details for search engines and AI assistants, on every page. */
export function organizationJsonLd(locale: Locale) {
  const t = getDict(locale);
  return {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: "EPHMET",
    legalName: site.name,
    url: absolute(localePath(locale, "/")),
    logo: `${site.url}/icon-512.png`,
    image: `${site.url}/og.jpg`,
    description: t.meta.homeDesc,
    telephone: site.tel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Djibouti Free Zone",
      addressLocality: "Djibouti",
      addressCountry: "DJ",
    },
    areaServed: [
      { "@type": "Country", name: "Djibouti" },
      { "@type": "Country", name: "Ethiopia" },
      { "@type": "Place", name: "East Africa" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: site.tel,
        email: site.email,
        availableLanguage: ["English", "Chinese", "French", "Arabic"],
      },
    ],
    knowsAbout: [
      "Hot rolled steel coils",
      "Galvanized steel",
      "Reinforcing steel bars",
      "Structural steel",
      "Bitumen",
      "Sinotruk Howo trucks",
    ],
    inLanguage: localeInfo[locale].lang,
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.url),
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
