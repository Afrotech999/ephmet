import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getDict } from "@/lib/dict";
import { fill, localePath, type Locale } from "@/lib/i18n";
import { getProduct, lineCover, lineOrder, popularSlugs, products, productsByLine } from "@/lib/products";
import { site } from "@/lib/site";
import { CtaBand, Photo, ProductRow, SectionHead } from "../blocks";
import { Glyph } from "../Glyph";
import { VideoFacade } from "../VideoFacade";

export const routePhotos = ["/img/gallery/photo1", "/img/gallery/photo5", "/img/gallery/photo10", "/img/gallery/photo6"];

export function HomeView({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const [before, after] = t.home.title.split("{place}");
  const popular = popularSlugs.map((s) => getProduct(s)!).filter(Boolean);

  return (
    <>
      {/* Hero: what Ephmet supplies, from where, and the two ways to act. */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src="/img/hero-yard-900.webp"
          srcSet="/img/hero-yard-900.webp 900w, /img/hero-yard-1024.webp 1024w"
          sizes="100vw"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 size-full object-cover object-[60%_center] opacity-60"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,22,38,.78)_0%,rgba(11,22,38,.55)_35%,rgba(11,22,38,.97)_80%)] lg:bg-[linear-gradient(90deg,rgba(11,22,38,.97)_0%,rgba(11,22,38,.88)_45%,rgba(11,22,38,.3)_100%)] rtl:lg:bg-[linear-gradient(270deg,rgba(11,22,38,.97)_0%,rgba(11,22,38,.88)_45%,rgba(11,22,38,.3)_100%)]"
          aria-hidden="true"
        />
        <div className="wrap pb-8 pt-14 sm:pt-28 lg:pb-14 lg:pt-28">
          <p className="eyebrow text-sky">{t.home.eyebrow}</p>
          <h1 className="display mt-4 max-w-4xl text-[52px] xs:text-[58px] sm:text-7xl lg:text-[104px] rtl:text-[40px] rtl:sm:text-6xl rtl:lg:text-[80px]">
            {before}
            <span className="text-sky">{t.home.place}</span>
            {after}
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/80 sm:text-xl">{t.home.lead}</p>
          <div className="mt-7 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap">
            <Link href={localePath(locale, "/contact")} className="btn btn-primary sm:px-7">
              {t.action.requestQuote}
            </Link>
            <Link href={localePath(locale, "/products")} className="btn btn-ghost-dark sm:px-7">
              {t.action.seeProducts}
            </Link>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/20 pt-4">
            {t.home.stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="eyebrow order-2 mt-1 text-[10.5px] text-white/60">{s.label}</dt>
                <dd className="display order-1 text-[30px] sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Four product lines. */}
      <section className="py-14 sm:py-20" aria-labelledby="lines-title">
        <div className="wrap">
          <SectionHead eyebrow={t.home.linesEyebrow} title={<span id="lines-title">{t.home.linesTitle}</span>} lead={t.home.linesLead} />
          <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
            {lineOrder.map((line) => {
              const cover = lineCover[line];
              const count = productsByLine(line).length;
              return (
                <li key={line}>
                  <Link
                    href={`${localePath(locale, "/products")}#${line}`}
                    className="group relative block aspect-[4/5] overflow-hidden rounded-lg text-white sm:aspect-[4/3] lg:aspect-[3/4]"
                  >
                    {cover.photo ? (
                      <Photo base={cover.photo} alt="" large={false} className="transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="blueprint flex size-full justify-center pt-[14%]">
                        <Glyph kind={cover.glyph} className="h-auto w-[68%] max-w-48 self-start" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" aria-hidden="true" />
                    <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                      <h3 className="display text-[26px] sm:text-3xl">{t.lines[line].name}</h3>
                      <p className="mt-1 text-[13px] leading-snug text-white/75">{t.lines[line].text}</p>
                      <p className="spec mt-2 text-[11px] text-sky">{fill(t.products.count, { n: count })}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 flex items-end justify-between gap-4">
            <h3 className="display text-[28px] sm:text-4xl">{t.home.popularTitle}</h3>
            <Link href={localePath(locale, "/products")} className="inline-flex min-h-11 items-center gap-1 text-[15px] font-semibold text-blue">
              {fill(t.action.viewAll, { n: products.length })}
              <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-4 grid gap-2.5 md:grid-cols-2">
            {popular.map((p) => (
              <ProductRow key={p.slug} product={p} locale={locale} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* The route, in Ephmet's own photos. */}
      <section className="border-y border-line bg-paper py-14 sm:py-20" aria-labelledby="route-title">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead eyebrow={t.home.routeEyebrow} title={<span id="route-title">{t.home.routeTitle}</span>} lead={t.home.routeLead} />
            <Link href={localePath(locale, "/logistics")} className="inline-flex min-h-11 items-center gap-1 text-[15px] font-semibold text-blue">
              {t.home.routeMore}
              <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            </Link>
          </div>
          <ol className="relative mt-8 grid gap-0 lg:grid-cols-4 lg:gap-4">
            {t.route.map((stage, i) => (
              <li key={stage.title} className="relative grid grid-cols-[1fr_7rem] items-center gap-4 border-t border-line py-4 first:border-t-0 lg:block lg:border-t-0 lg:py-0">
                <div className="lg:order-2 lg:mt-4">
                  <p className="eyebrow text-blue">{fill(t.logistics.stage, { n: i + 1 })}</p>
                  <h3 className="display mt-1 text-[24px]">{stage.title}</h3>
                  <p className="mt-1 text-[14.5px] leading-snug text-muted">{stage.short}</p>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-md lg:aspect-[4/3]">
                  <Photo base={routePhotos[i]} alt={t.gallery[[0, 4, 9, 5][i]]} sizes="(min-width: 1024px) 25vw, 7rem" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Djibouti. */}
      <section className="bg-ink py-14 text-white sm:py-20" aria-labelledby="why-title">
        <div className="wrap">
          <SectionHead tone="dark" eyebrow={t.home.whyEyebrow} title={<span id="why-title">{t.home.whyTitle}</span>} />
          <ul className="mt-8 grid gap-px overflow-hidden rounded-lg bg-white/12 md:grid-cols-3">
            {t.home.why.map((w) => (
              <li key={w.title} className="bg-ink-2 p-5 sm:p-6">
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-white/70">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Video and gallery. */}
      <section className="py-14 sm:py-20" aria-labelledby="gallery-title">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHead eyebrow={t.home.videoEyebrow} title={t.home.videoTitle} />
          <VideoFacade id={site.youtubeId} title={t.home.videoTitle} playLabel={t.home.videoPlay} />
        </div>
        <div className="wrap mt-16">
          <SectionHead eyebrow={t.home.galleryEyebrow} title={<span id="gallery-title">{t.home.galleryTitle}</span>} lead={t.home.galleryLead} />
        </div>
        <ul className="wrap scroll-x mt-6 flex gap-3 pb-2 md:grid md:grid-cols-4">
          {t.gallery.map((caption, i) => (
            <li key={caption} className="w-[72vw] max-w-72 shrink-0 snap-start md:w-auto md:max-w-none">
              <figure>
                <div className="aspect-[4/3] overflow-hidden rounded-md bg-steel-2">
                  <Photo base={`/img/gallery/photo${i + 1}`} alt={caption} sizes="(min-width: 768px) 25vw, 72vw" />
                </div>
                <figcaption className="mt-2 text-[13.5px] leading-snug text-muted">{caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand locale={locale} t={t} />
    </>
  );
}
