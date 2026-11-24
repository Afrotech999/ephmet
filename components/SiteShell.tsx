import { Analytics } from "@vercel/analytics/next";
import { getDict } from "@/lib/dict";
import { latinFontVars, plexArabic } from "@/lib/fonts";
import { fill, localeInfo, type Locale } from "@/lib/i18n";
import { products } from "@/lib/products";
import { organizationJsonLd } from "@/lib/seo";
import { ActionBar } from "./ActionBar";
import { Footer } from "./Footer";
import { GeoSuggest } from "./GeoSuggest";
import { Header } from "./Header";
import { JsonLd } from "./JsonLd";
import { QuoteProvider } from "./QuoteProvider";

/** The full document for one locale. Used by both root layouts (English at "/", others under "/zh", "/fr", "/ar"). */
export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = getDict(locale);
  const info = localeInfo[locale];
  const fontVars = locale === "ar" ? `${latinFontVars} ${plexArabic.variable}` : latinFontVars;

  return (
    <html lang={info.lang} dir={info.dir} className={fontVars}>
      <body className="min-h-dvh">
        <QuoteProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-paper focus:px-4 focus:py-3 focus:text-ink"
          >
            {t.nav.skip}
          </a>
          <Header
            locale={locale}
            text={{
              nav: t.nav,
              requestQuote: t.action.requestQuote,
              chatWhatsapp: t.action.chatWhatsapp,
              call: t.action.call,
              hoursLabel: t.contact.hoursLabel,
              hours: t.contact.hours[0],
              productsCount: fill(t.products.count, { n: products.length }),
            }}
          />
          <GeoSuggest locale={locale} />
          <main id="main">{children}</main>
          <Footer locale={locale} t={t} />
          {/* Room for the fixed action bar on phones. */}
          <div className="h-[84px] bg-ink lg:hidden" aria-hidden="true" />
          <ActionBar
            locale={locale}
            text={{
              call: t.action.call,
              whatsapp: t.action.whatsapp,
              requestQuote: t.action.requestQuote,
              quoteList: t.action.quoteList,
            }}
          />
        </QuoteProvider>
        <JsonLd data={organizationJsonLd(locale)} />
        {/* Visitor statistics exist only on Vercel hosting. */}
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
