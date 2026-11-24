import type { Metadata } from "next";
import { getDict } from "./dict";
import { fill, isLocale, type Locale } from "./i18n";
import { getProduct } from "./products";
import { pageMeta } from "./seo";

export type PageKey = "home" | "products" | "logistics" | "about" | "contact" | "privacy" | "terms";

const paths: Record<PageKey, string> = {
  home: "/",
  products: "/products",
  logistics: "/logistics",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
};

export function metaFor(locale: Locale, key: PageKey): Metadata {
  const m = getDict(locale).meta;
  const text: Record<PageKey, [string, string]> = {
    home: [m.homeTitle, m.homeDesc],
    products: [m.productsTitle, m.productsDesc],
    logistics: [m.logisticsTitle, m.logisticsDesc],
    about: [m.aboutTitle, m.aboutDesc],
    contact: [m.contactTitle, m.contactDesc],
    privacy: [m.privacyTitle, m.aboutDesc],
    terms: [m.termsTitle, m.aboutDesc],
  };
  const [title, description] = text[key];
  return pageMeta(locale, paths[key], title, description);
}

export function productMeta(locale: Locale, slug: string): Metadata {
  const product = getProduct(slug);
  if (!product) return {};
  const m = getDict(locale).meta;
  const name = product.name[locale];
  return pageMeta(
    locale,
    `/products/${slug}`,
    fill(m.productTitle, { name }),
    fill(m.productDesc, { name, key: product.key }),
  );
}

/** Resolve the `[locale]` route param, which is always one of the prefixed locales. */
export async function routeLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params;
  return isLocale(locale) ? locale : "en";
}
