import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Dict } from "@/lib/dict";
import { localePath, type Locale } from "@/lib/i18n";
import type { Product } from "@/lib/products";
import { whatsappLink } from "@/lib/site";
import { AddToQuote } from "./AddToQuote";
import { Glyph } from "./Glyph";
import { WhatsAppIcon } from "./icons";

export function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "light",
  as: Tag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && <p className={`eyebrow ${tone === "dark" ? "text-sky" : "text-blue"}`}>{eyebrow}</p>}
      <Tag className={`display mt-2 ${Tag === "h1" ? "text-[44px] sm:text-6xl" : "text-[34px] sm:text-5xl"}`}>{title}</Tag>
      {lead && <p className={`mt-3 text-[17px] leading-relaxed ${tone === "dark" ? "text-white/75" : "text-muted"}`}>{lead}</p>}
    </div>
  );
}

/** Responsive photo from the optimized set in /public/img (base path without "-640.webp"). */
export function Photo({
  base,
  alt,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  large = true,
  priority = false,
  className = "",
}: {
  base: string;
  alt: string;
  sizes?: string;
  large?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <img
      src={`${base}-640.webp`}
      srcSet={large ? `${base}-640.webp 640w, ${base}-1200.webp 1200w` : undefined}
      sizes={large ? sizes : undefined}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

export function ProductMedia({ product, alt, className = "" }: { product: Product; alt: string; className?: string }) {
  if (product.photo) {
    return (
      <div className={`overflow-hidden bg-steel-2 ${className}`}>
        <Photo base={product.photo} alt={alt} large={false} />
      </div>
    );
  }
  return (
    <div className={`blueprint grid place-items-center ${className}`} role="img" aria-label={alt}>
      <Glyph kind={product.glyph} className="h-auto w-[88%] max-w-56" />
    </div>
  );
}

export function ProductRow({ product, locale, t }: { product: Product; locale: Locale; t: Dict }) {
  const href = localePath(locale, `/products/${product.slug}`);
  const name = product.name[locale];
  return (
    <article className="card grid grid-cols-[5.25rem_1fr] gap-3 p-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-3.5">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
        <ProductMedia product={product} alt="" className="h-full min-h-28 rounded-[5px]" />
      </Link>
      <div className="flex min-w-0 flex-col py-0.5 pe-1">
        <p className="eyebrow text-[11px] text-muted">{t.lines[product.line].name}</p>
        <h3 className="mt-1 text-[17px] font-semibold leading-snug">
          <Link href={href} className="hover:text-blue">
            {name}
          </Link>
        </h3>
        <p dir="ltr" className="spec mt-1 text-[12.5px] leading-snug text-muted [text-align:start]">
          {product.key}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          <AddToQuote slug={product.slug} label={t.action.addToQuote} addedLabel={t.action.inQuote} />
          <Link href={href} className="inline-flex min-h-11 items-center gap-1 rounded-md border border-line px-3 text-sm font-semibold hover:border-ink">
            {t.action.specs}
            <ChevronRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="eyebrow flex flex-wrap items-center gap-1.5 text-[11px] text-muted">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-paper">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-[16px] font-semibold [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown className="size-5 shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="px-4 pb-4 text-[15px] leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ locale, t }: { locale: Locale; t: Dict }) {
  return (
    <section className="bg-steel py-14 sm:py-20">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-xl bg-ink px-5 py-10 text-white sm:px-10 sm:py-14">
          <div className="blueprint pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <h2 className="display text-[36px] sm:text-5xl">{t.home.ctaTitle}</h2>
              <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-white/75">{t.home.ctaLead}</p>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              <Link href={localePath(locale, "/contact")} className="btn btn-primary">
                {t.action.requestQuote}
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-wa">
                <WhatsAppIcon />
                {t.action.chatWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
