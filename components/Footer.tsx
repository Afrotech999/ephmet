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

      {/* Oversized outlined wordmark, drawn to its exact letter bounds so it spans the content width. */}
      <div className="wrap pointer-events-none mt-10 select-none lg:mt-14" aria-hidden="true">
        <svg viewBox="5 -67 417.4 67" direction="ltr" className="block h-auto w-full overflow-visible" fill="none" style={{ direction: "ltr" }}>
          <text
            x="0"
            y="0"
            fontSize="100"
            letterSpacing="4"
            stroke="rgb(88 176 242 / 0.3)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            textAnchor="start"
            style={{ fontFamily: "var(--font-wordmark)", direction: "ltr", unicodeBidi: "isolate" }}
          >
            EPHMET
          </text>
        </svg>
      </div>

      <div className="mt-8 border-t border-white/10 lg:mt-10">
        <div className="wrap flex flex-col gap-3 py-5 text-sm text-white/55 lg:flex-row lg:items-center lg:justify-between">
          <FooterLanguages locale={locale} label={t.nav.language} />
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>{fill(t.footer.rights, { year })}</p>
            <Link href={localePath(locale, "/privacy")} className="hover:text-white">
              {t.footer.privacy}
            </Link>
            <Link href={localePath(locale, "/terms")} className="hover:text-white">
              {t.footer.terms}
            </Link>
            <p>
              {t.footer.builtBy}{" "}
              <a href={site.builtBy.url} target="_blank" rel="noopener" className="text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white">
                {site.builtBy.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
