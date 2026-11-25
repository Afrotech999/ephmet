"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localePath, splitPath, type Locale } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { LanguageRow, LanguageSwitcher } from "./LanguageSwitcher";
import { useQuote } from "./QuoteProvider";

export type HeaderText = {
  nav: { home: string; products: string; logistics: string; about: string; contact: string; menu: string; close: string; language: string };
  requestQuote: string;
  chatWhatsapp: string;
  call: string;
  hoursLabel: string;
  hours: string;
  productsCount: string;
};

export function Brand({ locale, tone }: { locale: Locale; tone: "dark" | "light" }) {
  return (
    <Link href={localePath(locale, "/")} className="flex items-center gap-2.5" aria-label="Ephmet Red Sea FZCO">
      <span className={`grid size-10 place-items-center rounded-lg bg-white ${tone === "light" ? "border border-line" : ""}`}>
        <img src="/img/logo-mark.webp" alt="" width={32} height={32} className="size-8" />
      </span>
      <span
        dir="ltr"
        className={`font-[family-name:var(--font-wordmark)] text-[22px] leading-none tracking-[0.06em] ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        EPHMET
      </span>
    </Link>
  );
}

export function Header({ locale, text }: { locale: Locale; text: HeaderText }) {
  const pathname = usePathname() ?? "/";
  const { path } = splitPath(pathname);
  const tone: "dark" | "light" = path === "/" ? "dark" : "light";
  const [open, setOpen] = useState(false);
  const { items } = useQuote();
  const closeRef = useRef<HTMLButtonElement>(null);

  const links = [
    { href: "/products", label: text.nav.products },
    { href: "/logistics", label: text.nav.logistics },
    { href: "/about", label: text.nav.about },
    { href: "/contact", label: text.nav.contact },
  ];

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const bar = tone === "dark" ? "bg-ink text-white border-white/10" : "bg-paper text-ink border-line";

  return (
    <header className={`sticky top-0 z-40 border-b ${bar}`} style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
      <div className="wrap flex h-16 items-center justify-between gap-3 lg:h-[72px]">
        <Brand locale={locale} tone={tone} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => {
              const active = path === l.href || path.startsWith(l.href + "/");
              return (
                <li key={l.href}>
                  <Link
                    href={localePath(locale, l.href)}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-md px-3.5 py-2.5 text-[15px] font-medium transition-colors ${
                      tone === "dark"
                        ? active
                          ? "text-white"
                          : "text-white/75 hover:text-white"
                        : active
                          ? "text-blue"
                          : "text-muted hover:text-ink"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.tel}`}
            dir="ltr"
            className={`spec hidden text-sm xl:block ${tone === "dark" ? "text-white/80 hover:text-white" : "text-muted hover:text-ink"}`}
          >
            {site.phone}
          </a>
          <LanguageSwitcher locale={locale} label={text.nav.language} tone={tone} />
          <Link href={localePath(locale, "/contact")} className="btn btn-primary hidden min-h-11 px-4 text-[15px] lg:inline-flex">
            {text.requestQuote}
            {items.length > 0 && (
              <span className="rounded bg-white/20 px-1.5 text-xs tabular-nums">{items.length}</span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={text.nav.menu}
            aria-expanded={open}
            aria-controls="site-menu"
            className={`grid size-11 place-items-center rounded-md lg:hidden ${tone === "dark" ? "bg-white/10" : "border border-line"}`}
          >
            <Menu className="size-[22px]" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label={text.nav.menu}
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink text-white lg:hidden"
          style={{ paddingTop: "env(safe-area-inset-top, 0px)", paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="wrap flex h-16 shrink-0 items-center justify-between">
            <Brand locale={locale} tone="dark" />
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label={text.nav.close}
              className="grid size-11 place-items-center rounded-md bg-white/10"
            >
              <X className="size-[22px]" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Main" className="wrap flex-1 pb-6">
            <ul>
              {[{ href: "/", label: text.nav.home }, ...links].map((l) => (
                <li key={l.href} className="border-b border-white/12">
                  <Link
                    href={localePath(locale, l.href)}
                    onClick={() => setOpen(false)}
                    className="display flex min-h-16 items-center justify-between py-3 text-[34px]"
                  >
                    {l.label}
                    {l.href === "/products" && (
                      <span className="spec text-xs font-normal normal-case tracking-normal text-white/55">{text.productsCount}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              <a href={`tel:${site.tel}`} className="rounded-lg bg-ink-2 p-3.5">
                <span className="eyebrow flex items-center gap-1.5 text-sky">
                  <Phone className="size-3.5" aria-hidden="true" />
                  {text.call}
                </span>
                <span dir="ltr" className="spec mt-1.5 block text-[15px] font-medium">
                  {site.phone}
                </span>
              </a>
              <div className="rounded-lg bg-ink-2 p-3.5">
                <span className="eyebrow block text-sky">{text.hoursLabel}</span>
                <span className="spec mt-1.5 block text-[15px] font-medium">{text.hours}</span>
              </div>
            </div>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-wa mt-3 w-full">
              <WhatsAppIcon />
              {text.chatWhatsapp}
            </a>
            <Link href={localePath(locale, "/contact")} onClick={() => setOpen(false)} className="btn btn-primary mt-2 w-full">
              {text.requestQuote}
            </Link>
            <div className="mt-6">
              <p className="eyebrow mb-2 text-white/55">{text.nav.language}</p>
              <LanguageRow locale={locale} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
