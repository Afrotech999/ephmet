import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { Dict } from "@/lib/dict";
import { fill, localePath, type Locale } from "@/lib/i18n";
import { lineOrder } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";
import { Brand } from "./Header";
import { WhatsAppIcon } from "./icons";

export function Footer({ locale, t }: { locale: Locale; t: Dict }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/75">
      <div className="wrap grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:py-16">
        <div>
          <Brand locale={locale} tone="dark" />
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed">{t.footer.tagline}</p>
        </div>
        <nav aria-label={t.footer.productsTitle}>
          <h2 className="eyebrow mb-3 text-sky">{t.footer.productsTitle}</h2>
          <ul className="space-y-1">
            {lineOrder.map((line) => (
              <li key={line}>
                <Link href={`${localePath(locale, "/products")}#${line}`} className="inline-block py-1.5 hover:text-white">
                  {t.lines[line].name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={t.footer.companyTitle}>
          <h2 className="eyebrow mb-3 text-sky">{t.footer.companyTitle}</h2>
          <ul className="space-y-1">
            {[
              ["/about", t.nav.about],
              ["/logistics", t.nav.logistics],
              ["/contact", t.action.requestQuote],
              ["/privacy", t.footer.privacy],
              ["/terms", t.footer.terms],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={localePath(locale, href)} className="inline-block py-1.5 hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="eyebrow mb-3 text-sky">{t.footer.contactTitle}</h2>
          <ul className="space-y-1 text-[15px]">
            <li>
              <a href={`tel:${site.tel}`} className="flex min-h-10 items-center gap-2.5 hover:text-white">
                <Phone className="size-4 shrink-0 text-sky" aria-hidden="true" />
                <span dir="ltr" className="spec">{site.phone}</span>
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener" className="flex min-h-10 items-center gap-2.5 hover:text-white">
                <WhatsAppIcon className="size-4 shrink-0 text-sky" />
                {t.action.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex min-h-10 items-center gap-2.5 break-all hover:text-white">
                <Mail className="size-4 shrink-0 text-sky" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noopener" className="flex min-h-10 items-center gap-2.5 hover:text-white">
                <MapPin className="size-4 shrink-0 text-sky" aria-hidden="true" />
                {t.contact.address}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{fill(t.footer.rights, { year })}</p>
          <p className="flex items-center gap-2">
            {t.footer.builtBy}
            <a href={site.builtBy.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 hover:text-white">
              <img src="/img/thriving.png" alt="" width={18} height={18} className="size-[18px]" />
              {site.builtBy.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
