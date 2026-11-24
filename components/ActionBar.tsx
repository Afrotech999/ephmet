"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, splitPath, type Locale } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { useQuote } from "./QuoteProvider";

/** Thumb-reach bar fixed to the bottom of phone screens: call, WhatsApp, quote. */
export function ActionBar({
  locale,
  text,
}: {
  locale: Locale;
  text: { call: string; whatsapp: string; requestQuote: string; quoteList: string };
}) {
  const pathname = usePathname() ?? "/";
  const { path } = splitPath(pathname);
  const { items } = useQuote();
  const onContact = path === "/contact";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "max(10px, env(safe-area-inset-bottom, 0px))" }}
    >
      <div className={`wrap grid gap-2 pt-2.5 ${onContact ? "grid-cols-[3.25rem_1fr]" : "grid-cols-[3.25rem_1fr_1.25fr]"}`}>
        <a href={`tel:${site.tel}`} aria-label={`${text.call} ${site.phone}`} className="btn btn-outline px-0">
          <Phone className="size-5" aria-hidden="true" />
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-wa px-3">
          <WhatsAppIcon />
          {text.whatsapp}
        </a>
        {!onContact && (
          <Link href={localePath(locale, "/contact")} className="btn btn-primary px-3">
            {items.length > 0 ? (
              <>
                {text.quoteList}
                <span className="rounded bg-white/20 px-1.5 text-sm tabular-nums">{items.length}</span>
              </>
            ) : (
              text.requestQuote
            )}
          </Link>
        )}
      </div>
    </div>
  );
}
