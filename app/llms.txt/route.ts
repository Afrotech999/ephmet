import { getDict } from "@/lib/dict";
import { localePath, locales, localeInfo } from "@/lib/i18n";
import { lineOrder, productsByLine } from "@/lib/products";
import { absolute } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/** A plain-text summary for AI assistants (https://llmstxt.org), built from the same data as the site. */
export function GET() {
  const t = getDict("en");
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${t.meta.homeDesc}`,
    "",
    `- Location: ${t.contact.address}`,
    `- Phone and WhatsApp: ${site.phone}`,
    `- Email: ${site.email}`,
    `- Office hours: ${t.contact.hours.join("; ")} (East Africa Time)`,
    `- Markets: Djibouti, Ethiopia and East Africa`,
    `- Quote reply: within 48 hours`,
    `- Languages: ${locales.map((l) => `${localeInfo[l].name} (${absolute(localePath(l, "/"))})`).join(", ")}`,
    "",
    "Product sizes and grades listed are typical ranges; the exact specification is confirmed in each quote.",
    "",
  ];
  for (const line of lineOrder) {
    lines.push(`## ${t.lines[line].name}`, "");
    for (const p of productsByLine(line)) {
      lines.push(`- [${p.name.en}](${absolute(`/products/${p.slug}`)}): ${p.text.en} Typical: ${p.key}.`);
    }
    lines.push("");
  }
  lines.push(
    "## Pages",
    "",
    `- [Products](${absolute("/products")}): all 21 products by line`,
    `- [Logistics](${absolute("/logistics")}): ${t.meta.logisticsDesc}`,
    `- [About](${absolute("/about")}): ${t.meta.aboutDesc}`,
    `- [Request a quote](${absolute("/contact")}): ${t.meta.contactDesc}`,
    "",
  );
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
