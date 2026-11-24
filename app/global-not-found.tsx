import type { Metadata } from "next";
import { latinFontVars } from "@/lib/fonts";
import { locales, localeInfo, localePath } from "@/lib/i18n";
import { getDict } from "@/lib/dict";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found | Ephmet",
  robots: { index: false },
};

/** One 404 page for every URL that matches no route, offering each language's home page. */
export default function GlobalNotFound() {
  const t = getDict("en");
  return (
    <html lang="en" className={latinFontVars}>
      <body className="grid min-h-dvh place-items-center bg-ink px-5 text-white">
        <main className="w-full max-w-lg py-16">
          <a href="/" className="font-[family-name:var(--font-wordmark)] text-2xl tracking-[0.06em]">
            EPHMET
          </a>
          <p className="spec mt-10 text-sky">404</p>
          <h1 className="display mt-2 text-5xl">{t.notFound.title}</h1>
          <p className="mt-3 text-lg text-white/75">{t.notFound.lead}</p>
          <ul className="mt-8 grid gap-2">
            {locales.map((l) => (
              <li key={l}>
                <a
                  href={localePath(l, "/")}
                  lang={localeInfo[l].lang}
                  dir={localeInfo[l].dir}
                  className="flex min-h-12 items-center justify-between rounded-md border border-white/20 px-4 hover:border-white"
                >
                  <span>{getDict(l).notFound.home}</span>
                  <span className="text-sm text-white/60">{localeInfo[l].name}</span>
                </a>
              </li>
            ))}
          </ul>
        </main>
      </body>
    </html>
  );
}
