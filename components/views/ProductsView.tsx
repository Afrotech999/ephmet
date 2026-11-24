import { getDict } from "@/lib/dict";
import { fill, localePath, type Locale } from "@/lib/i18n";
import { lineOrder, products, productsByLine } from "@/lib/products";
import { absolute, faqJsonLd } from "@/lib/seo";
import { Breadcrumbs, CtaBand, FaqList, ProductRow, SectionHead } from "../blocks";
import { JsonLd } from "../JsonLd";

export function ProductsView({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.products.title,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name[locale],
      url: absolute(localePath(locale, `/products/${p.slug}`)),
    })),
  };

  return (
    <>
      <div className="border-b border-line bg-paper">
        <div className="wrap pb-8 pt-8 sm:pb-12 sm:pt-12">
          <Breadcrumbs items={[{ label: t.nav.home, href: localePath(locale, "/") }, { label: t.nav.products }]} />
          <SectionHead as="h1" className="mt-4" title={t.products.title} lead={t.products.lead} />
        </div>
      </div>

      {/* Line shortcuts, kept in reach while scrolling. */}
      <nav
        aria-label={t.nav.products}
        className="sticky top-[calc(4rem+env(safe-area-inset-top,0px))] z-20 border-b border-line bg-paper/95 backdrop-blur lg:top-[calc(72px+env(safe-area-inset-top,0px))]"
      >
        <ul className="scroll-x wrap flex gap-2 py-2.5">
          {lineOrder.map((line) => (
            <li key={line} className="shrink-0">
              <a
                href={`#${line}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border-[1.5px] border-line px-3.5 text-[15px] font-medium hover:border-ink"
              >
                {t.lines[line].name}
                <span className="spec text-xs text-muted">{productsByLine(line).length}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="wrap space-y-14 py-10 sm:py-14">
        {lineOrder.map((line) => {
          const list = productsByLine(line);
          return (
            <section key={line} id={line} aria-labelledby={`${line}-title`} className="scroll-mt-36">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 id={`${line}-title`} className="display text-[32px] sm:text-[40px]">
                  {t.lines[line].name}
                </h2>
                <p className="spec text-sm text-muted">{fill(t.products.count, { n: list.length })}</p>
              </div>
              <p className="mt-1 text-[15px] text-muted">{t.lines[line].text}</p>
              <div className="mt-5 grid gap-2.5 md:grid-cols-2 xl:grid-cols-3">
                {list.map((p) => (
                  <ProductRow key={p.slug} product={p} locale={locale} t={t} />
                ))}
              </div>
            </section>
          );
        })}

        <section aria-labelledby="faq-title" className="max-w-3xl">
          <h2 id="faq-title" className="display text-[32px] sm:text-[40px]">
            {t.faq.title}
          </h2>
          <div className="mt-5">
            <FaqList items={t.faq.items} />
          </div>
        </section>
      </div>

      <CtaBand locale={locale} t={t} />
      <JsonLd data={itemList} />
      <JsonLd data={faqJsonLd(t.faq.items)} />
    </>
  );
}
