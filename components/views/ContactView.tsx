import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { getDict } from "@/lib/dict";
import { localePath, type Locale } from "@/lib/i18n";
import { products } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";
import { Breadcrumbs, SectionHead } from "../blocks";
import { WhatsAppIcon } from "../icons";
import { QuoteBuilder } from "../QuoteBuilder";

export function ContactView({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const c = t.contact;
  const options = products.map((p) => ({
    slug: p.slug,
    name: p.name[locale],
    nameEn: p.name.en,
    unit: p.unit,
    group: t.lines[p.line].name,
  }));

  return (
    <>
      <div className="border-b border-line bg-paper">
        <div className="wrap pb-8 pt-8 sm:pb-10 sm:pt-12">
          <Breadcrumbs items={[{ label: t.nav.home, href: localePath(locale, "/") }, { label: t.nav.contact }]} />
          <SectionHead as="h1" className="mt-4" eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
        </div>
      </div>
      <div className="wrap grid gap-10 py-8 sm:py-12 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <QuoteBuilder locale={locale} options={options} c={c} units={t.units} browseLabel={c.browse} />

        <aside aria-labelledby="direct-title" className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-xl bg-ink p-5 text-white sm:p-6">
            <h2 id="direct-title" className="display text-[28px]">
              {c.directTitle}
            </h2>
            <div className="mt-5 grid gap-2.5">
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-wa">
                <WhatsAppIcon />
                {t.action.chatWhatsapp}
              </a>
            </div>
            <ul className="mt-5 divide-y divide-white/10 text-[15px]">
              <li>
                <a href={`tel:${site.tel}`} className="flex min-h-14 items-center gap-3 py-2 hover:text-sky">
                  <Phone className="size-5 shrink-0 text-sky" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-white/55">{c.phoneLabel}</span>
                    <span dir="ltr" className="spec">{site.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex min-h-14 items-center gap-3 py-2 hover:text-sky">
                  <Mail className="size-5 shrink-0 text-sky" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-xs text-white/55">{c.emailLabel}</span>
                    <span className="break-all">{site.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.mapsUrl} target="_blank" rel="noopener" className="flex min-h-14 items-center gap-3 py-2 hover:text-sky">
                  <MapPin className="size-5 shrink-0 text-sky" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-white/55">{c.addressLabel}</span>
                    {c.address}
                    <span className="block text-sm text-sky">{c.map}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 py-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
                <span>
                  <span className="block text-xs text-white/55">{c.hoursLabel}</span>
                  {c.hours.map((h) => (
                    <span key={h} className="spec block text-[14px]">
                      {h}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
