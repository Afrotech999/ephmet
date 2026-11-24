import { getDict } from "@/lib/dict";
import { fill, localePath, type Locale } from "@/lib/i18n";
import { productsByLine, specValue, type Product } from "@/lib/products";
import { breadcrumbJsonLd } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";
import { AddToQuote } from "../AddToQuote";
import { Breadcrumbs, FaqList, ProductMedia, ProductRow } from "../blocks";
import { WhatsAppIcon } from "../icons";
import { JsonLd } from "../JsonLd";

export function ProductView({ locale, product }: { locale: Locale; product: Product }) {
  const t = getDict(locale);
  const name = product.name[locale];
  const related = productsByLine(product.line)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);
  const crumbs = [
    { label: t.nav.home, href: localePath(locale, "/") },
    { label: t.nav.products, href: localePath(locale, "/products") },
    { label: t.lines[product.line].name, href: `${localePath(locale, "/products")}#${product.line}` },
  ];

  return (
    <>
      <div className="border-b border-line bg-paper">
        <div className="wrap grid gap-6 py-6 sm:py-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <ProductMedia product={product} alt={name} className="aspect-[16/10] rounded-lg lg:order-2 lg:aspect-[4/3]" />
          <div className="min-w-0">
            <Breadcrumbs items={[...crumbs, { label: name }]} />
            <h1 className="display mt-4 text-[40px] sm:text-6xl">{name}</h1>
            <p dir="ltr" className="spec mt-3 text-sm text-muted [text-align:start]">
              {product.key}
            </p>
            <p className="mt-5 text-[17px] leading-relaxed">
              <strong className="font-semibold">{fill(t.product.answer, { company: site.name, name })}</strong> {product.text[locale]}
            </p>
            <div className="mt-6 grid gap-2.5 sm:flex sm:flex-wrap">
              <AddToQuote slug={product.slug} label={t.action.addToQuote} addedLabel={t.action.inQuote} size="lg" />
              <a
                href={whatsappLink(fill(t.product.askWhatsapp, { name }))}
                target="_blank"
                rel="noopener"
                className="btn btn-wa"
              >
                <WhatsAppIcon />
                {t.action.chatWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap grid gap-12 py-10 sm:py-14 lg:grid-cols-[1.1fr_1fr]">
        <section aria-labelledby="spec-title">
          <h2 id="spec-title" className="display text-[30px] sm:text-4xl">
            {t.product.specTitle}
          </h2>
          <div className="mt-5 overflow-hidden rounded-lg border border-line bg-paper">
            <table className="w-full text-[14px]">
              <tbody>
                {product.specs.map((s) => (
                  <tr key={s.label} className="border-t border-line first:border-t-0">
                    <th scope="row" className="w-[38%] px-4 py-3 text-start align-top font-medium text-muted">
                      {t.spec[s.label]}
                    </th>
                    <td className="px-4 py-3 align-top">
                      {typeof s.value === "string" ? (
                        <span dir="ltr" className="spec inline-block [text-align:start]">
                          {s.value}
                        </span>
                      ) : (
                        specValue(s.value, locale)
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[14px] text-muted">{t.product.specNote}</p>
        </section>

        <section aria-labelledby="faq-title">
          <h2 id="faq-title" className="display text-[30px] sm:text-4xl">
            {t.faq.title}
          </h2>
          <div className="mt-5">
            <FaqList items={t.faq.items} />
          </div>
        </section>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-line bg-paper py-10 sm:py-14">
          <div className="wrap">
            <h2 id="related-title" className="display text-[30px] sm:text-4xl">
              {t.product.relatedTitle}
            </h2>
            <div className="mt-5 grid gap-2.5 md:grid-cols-2 xl:grid-cols-3">
              {related.map((p) => (
                <ProductRow key={p.slug} product={p} locale={locale} t={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <JsonLd
        data={breadcrumbJsonLd([
          ...crumbs.slice(0, 2).map((c) => ({ name: c.label, url: c.href })),
          { name, url: localePath(locale, `/products/${product.slug}`) },
        ])}
      />
    </>
  );
}
