import type { MetadataRoute } from "next";
import { localePath, locales } from "@/lib/i18n";
import { products } from "@/lib/products";
import { absolute, languageAlternates } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/products",
    ...products.map((p) => `/products/${p.slug}`),
    "/logistics",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const lastModified = new Date();
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: absolute(localePath(locale, path)),
      lastModified,
      changeFrequency: path === "/" || path === "/products" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path.startsWith("/products") ? 0.8 : 0.5,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
