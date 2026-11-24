# Ephmet Red Sea FZCO website

Website for Ephmet Red Sea FZCO, a steel, bitumen and Sinotruk truck supplier in the Djibouti Free Zone.
Built with Next.js (App Router) and Tailwind CSS, exported as plain static files.

## Languages

English is the default at `/`. Chinese, French and Arabic live under `/zh`, `/fr` and `/ar`
(Arabic is right-to-left). The language button in the header switches between them on the same page.

A visitor whose browser language or time zone points to another language (for example China,
the UAE or Djibouti) sees a small bar offering that language. It never switches on its own.

## Where things live

| What | File |
| --- | --- |
| Phone, WhatsApp, email, domain | `lib/site.ts` |
| All page text, per language | `lib/dict/en.ts`, `zh.ts`, `fr.ts`, `ar.ts` |
| Products, specs and photos | `lib/products.ts` |
| Colours and fonts | `app/globals.css`, `lib/fonts.ts` |
| Photos | `public/img/` (WebP, 640 px and 1200 px) |

To add a product, add an entry to `lib/products.ts` with its name and description in all four
languages. Its page, its place in the sitemap and in `llms.txt` are created automatically.

## Quote requests

There is no server. Visitors build a quote list (saved in their own browser) and send it as a
pre-filled WhatsApp message to the number in `lib/site.ts`, or by email.

## Commands

```bash
npm install
npm run dev        # local development on http://localhost:3000
npm run build      # static site in ./out
npm run typecheck
```

Deploy the `out` folder to any static host, or connect the repository to Vercel
(visitor statistics through Vercel Web Analytics only run there).
