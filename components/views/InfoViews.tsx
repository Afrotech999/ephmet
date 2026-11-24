import { Check } from "lucide-react";
import { getDict } from "@/lib/dict";
import { fill, localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Breadcrumbs, CtaBand, Photo, SectionHead } from "../blocks";
import { routePhotos } from "./HomeView";

function PageHead({ locale, crumb, eyebrow, title, lead }: { locale: Locale; crumb: string; eyebrow: string; title: string; lead: string }) {
  const t = getDict(locale);
  return (
    <div className="border-b border-line bg-paper">
      <div className="wrap pb-8 pt-8 sm:pb-12 sm:pt-12">
        <Breadcrumbs items={[{ label: t.nav.home, href: localePath(locale, "/") }, { label: crumb }]} />
        <SectionHead as="h1" className="mt-4" eyebrow={eyebrow} title={title} lead={lead} />
      </div>
    </div>
  );
}

export function LogisticsView({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <>
      <PageHead locale={locale} crumb={t.nav.logistics} eyebrow={t.logistics.eyebrow} title={t.logistics.title} lead={t.logistics.lead} />
      <div className="wrap py-10 sm:py-14">
        <ol className="space-y-4">
          {t.route.map((stage, i) => (
            <li key={stage.title} className="card grid overflow-hidden sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
              <div className="aspect-[16/10] sm:aspect-auto sm:min-h-56">
                <Photo base={routePhotos[i]} alt={t.gallery[[0, 4, 9, 5][i]]} sizes="(min-width: 640px) 45vw, 100vw" />
              </div>
              <div className="p-5 sm:p-8">
                <p className="eyebrow text-blue">{fill(t.logistics.stage, { n: i + 1 })}</p>
                <h2 className="display mt-2 text-[30px] sm:text-4xl">{stage.title}</h2>
                <p className="mt-3 text-[16px] leading-relaxed text-muted">{stage.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <section aria-labelledby="send-title" className="mt-12 max-w-2xl">
          <h2 id="send-title" className="display text-[30px] sm:text-4xl">
            {t.logistics.sendTitle}
          </h2>
          <ul className="mt-5 divide-y divide-line rounded-lg border border-line bg-paper">
            {t.logistics.send.map((item) => (
              <li key={item} className="flex items-start gap-3 px-4 py-3.5 text-[16px]">
                <Check className="mt-0.5 size-5 shrink-0 text-blue" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <CtaBand locale={locale} t={t} />
    </>
  );
}

export function AboutView({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const a = t.about;
  return (
    <>
      <PageHead locale={locale} crumb={t.nav.about} eyebrow={a.eyebrow} title={a.title} lead={a.lead} />
      <div className="wrap grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-10">
          {[
            [a.doTitle, a.doText],
            [a.whereTitle, a.whereText],
          ].map(([h, p]) => (
            <section key={h}>
              <h2 className="display text-[30px] sm:text-4xl">{h}</h2>
              <p className="mt-3 max-w-prose text-[17px] leading-relaxed text-muted">{p}</p>
            </section>
          ))}
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [a.missionTitle, a.mission],
              [a.visionTitle, a.vision],
            ].map(([h, p]) => (
              <div key={h} className="rounded-lg bg-ink p-5 text-white">
                <p className="eyebrow text-sky">{h}</p>
                <p className="mt-2 text-[17px] leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="space-y-4">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="aspect-square overflow-hidden rounded-lg">
              <Photo base="/img/gallery/photo8" alt={t.gallery[7]} sizes="(min-width: 1024px) 20vw, 50vw" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <Photo base="/img/gallery/photo5" alt={t.gallery[4]} sizes="(min-width: 1024px) 20vw, 50vw" />
            </div>
          </div>
          <section aria-labelledby="facts-title" className="card p-5">
            <h2 id="facts-title" className="eyebrow text-blue">
              {a.factsTitle}
            </h2>
            <dl className="mt-3 divide-y divide-line">
              {a.facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[42%_1fr] gap-3 py-3 text-[15px]">
                  <dt className="text-muted">{f.label}</dt>
                  <dd className="font-medium">{f.value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[42%_1fr] gap-3 py-3 text-[15px]">
                <dt className="text-muted">{t.contact.phoneLabel}</dt>
                <dd>
                  <a href={`tel:${site.tel}`} dir="ltr" className="spec font-medium text-blue">
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </aside>
      </div>
      <CtaBand locale={locale} t={t} />
    </>
  );
}

export function LegalView({ locale, kind }: { locale: Locale; kind: "privacy" | "terms" }) {
  const t = getDict(locale);
  const title = kind === "privacy" ? t.legal.privacyTitle : t.legal.termsTitle;
  const sections = kind === "privacy" ? t.legal.privacy : t.legal.terms;
  return (
    <div className="wrap max-w-3xl py-10 sm:py-14">
      <Breadcrumbs items={[{ label: t.nav.home, href: localePath(locale, "/") }, { label: title }]} />
      <h1 className="display mt-4 text-[40px] sm:text-6xl">{title}</h1>
      <div className="mt-8 space-y-7">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-xl font-semibold">{s.h}</h2>
            <p className="mt-2 text-[16px] leading-relaxed text-muted">{fill(s.p, { email: site.email })}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
