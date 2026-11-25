import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { Dict } from "@/lib/dict";
import { fill, localePath, type Locale } from "@/lib/i18n";
import { lineOrder } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";
import { Brand } from "./Header";
import { WhatsAppIcon } from "./icons";
import { FooterLanguages } from "./LanguageSwitcher";

export function Footer({ locale, t }: { locale: Locale; t: Dict }) {
  const year = new Date().getFullYear();
  const linkClass = "inline-flex min-h-10 items-center text-[15px] text-white/70 transition-colors hover:text-white";
  const credit = (
    <>
      <span>{t.footer.builtBy}</span>
      <img src={site.builtBy.logo} alt={site.builtBy.name} width={80} height={22} className="h-[18px] w-auto" />
    </>
  );

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="wrap relative pt-12 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr_1fr_1.15fr] lg:gap-12">
          {/* Brand and the three ways to reach Ephmet. */}
          <div>
            <Brand locale={locale} tone="dark" />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/65">{t.footer.tagline}</p>
            <div className="mt-6 grid grid-cols-3 gap-2 lg:max-w-sm">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                className="group flex flex-col gap-3 rounded-lg bg-wa p-3.5 transition-colors hover:bg-wa-deep"
              >
                <WhatsAppIcon className="size-6" />
                <span className="text-sm font-semibold">{t.action.whatsapp}</span>
              </a>
              <a href={`tel:${site.tel}`} className="flex flex-col gap-3 rounded-lg bg-ink-2 p-3.5 ring-1 ring-white/10 transition-colors hover:bg-ink-3">
                <Phone className="size-6 text-sky" aria-hidden="true" />
                <span className="text-sm font-semibold">{t.action.call}</span>
              </a>
              <a href={`mailto:${site.email}`} className="flex flex-col gap-3 rounded-lg bg-ink-2 p-3.5 ring-1 ring-white/10 transition-colors hover:bg-ink-3">
                <Mail className="size-6 text-sky" aria-hidden="true" />
                <span className="text-sm font-semibold">{t.contact.emailLabel}</span>
              </a>
            </div>
          </div>

          {/* Links: two columns side by side, even on phones. */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:gap-12">
            <nav aria-label={t.footer.productsTitle}>
              <h2 className="eyebrow mb-2 text-sky">{t.footer.productsTitle}</h2>
              <ul>
                {lineOrder.map((line) => (
                  <li key={line}>
                    <Link href={`${localePath(locale, "/products")}#${line}`} className={linkClass}>
                      {t.lines[line].name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label={t.footer.companyTitle}>
              <h2 className="eyebrow mb-2 text-sky">{t.footer.companyTitle}</h2>
              <ul>
                {[
                  ["/about", t.nav.about],
                  ["/logistics", t.nav.logistics],
                  ["/contact", t.action.requestQuote],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link href={localePath(locale, href)} className={linkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Where and when. */}
          <div className="rounded-xl bg-ink-2 p-5 ring-1 ring-white/10">
            <h2 className="eyebrow text-sky">{t.footer.contactTitle}</h2>
            <ul className="mt-3 space-y-3 text-[15px] text-white/80">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-[18px] shrink-0 text-sky" aria-hidden="true" />
                <a href={`tel:${site.tel}`} dir="ltr" className="spec hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-[18px] shrink-0 text-sky" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-[18px] shrink-0 text-sky" aria-hidden="true" />
                <a href={site.mapsUrl} target="_blank" rel="noopener" className="underline decoration-white/25 underline-offset-4 hover:text-white">
                  {t.contact.address}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-[18px] shrink-0 text-sky" aria-hidden="true" />
                <span className="spec text-[14px] leading-relaxed">
                  {t.contact.hours.map((h) => (
                    <span key={h} className="block">
                      {h}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Oversized wordmark: the footer's one decorative gesture. */}
      <div className="wrap pointer-events-none select-none" aria-hidden="true">
        <p
          dir="ltr"
          className="mt-10 font-[family-name:var(--font-wordmark)] text-[25vw] leading-[0.8] tracking-[0.04em] text-transparent [-webkit-text-stroke:1px_rgb(88_176_242/0.28)] lg:mt-14 lg:text-[218px]"
        >
          EPHMET
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-4 py-5 text-sm text-white/55 lg:flex-row lg:items-center lg:justify-between">
          <FooterLanguages locale={locale} label={t.nav.language} />
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            <p>{fill(t.footer.rights, { year })}</p>
            <p className="flex gap-4">
              <Link href={localePath(locale, "/privacy")} className="hover:text-white">
                {t.footer.privacy}
              </Link>
              <Link href={localePath(locale, "/terms")} className="hover:text-white">
                {t.footer.terms}
              </Link>
            </p>
            {site.builtBy.url ? (
              <a href={site.builtBy.url} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-white">
                {credit}
              </a>
            ) : (
              <p className="flex items-center gap-2">{credit}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
