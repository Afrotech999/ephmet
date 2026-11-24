"use client";

import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";
import type { Dict } from "@/lib/dict";
import { fill, localePath, type Locale } from "@/lib/i18n";
import { mailLink, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { useQuote } from "./QuoteProvider";

export type QuoteProductOption = { slug: string; name: string; nameEn: string; unit: "t" | "units"; group: string };

type Fields = { deliverTo: string; name: string; company: string; phone: string; email: string; message: string };
type Errors = Partial<Record<"name" | "phone" | "content", string>>;

const inputClass =
  "block min-h-[3.25rem] w-full rounded-md border-[1.5px] border-line bg-paper px-3.5 text-[16px] text-ink placeholder:text-muted/70 focus:border-blue focus:outline-none aria-[invalid=true]:border-red-600";

export function QuoteBuilder({
  locale,
  options,
  c,
  units,
  browseLabel,
}: {
  locale: Locale;
  options: QuoteProductOption[];
  c: Dict["contact"];
  units: Dict["units"];
  browseLabel: string;
}) {
  const { items, ready, add, remove, setQty } = useQuote();
  const [f, setF] = useState<Fields>({ deliverTo: "", name: "", company: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const uid = useId();
  const byslug = new Map(options.map((o) => [o.slug, o]));
  const listed = items.filter((i) => byslug.has(i.slug));
  const remaining = options.filter((o) => !items.some((i) => i.slug === o.slug));
  const groups = [...new Set(remaining.map((o) => o.group))];

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((cur) => ({ ...cur, [k]: e.target.value }));

  function compose(): string {
    const lines = [c.msgGreeting];
    for (const item of listed) {
      const o = byslug.get(item.slug)!;
      const label = locale === "en" ? o.name : `${o.name} (${o.nameEn})`;
      const qty = item.qty.trim() ? ` – ${item.qty.trim()} ${units[o.unit]}` : "";
      lines.push(`• ${label}${qty}`);
    }
    lines.push("");
    if (f.deliverTo.trim()) lines.push(`${c.deliverTo}: ${f.deliverTo.trim()}`);
    lines.push(`${c.msgName}: ${f.name.trim()}`);
    if (f.company.trim()) lines.push(`${c.company}: ${f.company.trim()}`);
    lines.push(`${c.phoneLabel}: ${f.phone.trim()}`);
    if (f.email.trim()) lines.push(`${c.emailLabel}: ${f.email.trim()}`);
    if (f.message.trim()) lines.push("", `${c.message} ${f.message.trim()}`);
    return lines.join("\n");
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const via = submitter?.value === "email" ? "email" : "whatsapp";
    const next: Errors = {};
    if (!f.name.trim()) next.name = c.errName;
    if (!f.phone.trim()) next.phone = c.errPhone;
    if (listed.length === 0 && !f.message.trim()) next.content = c.errContent;
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("");
      const first = next.content ? `${uid}-message` : next.name ? `${uid}-name` : `${uid}-phone`;
      document.getElementById(first)?.focus();
      return;
    }
    const text = compose();
    if (via === "email") {
      window.location.href = mailLink(fill(c.msgSubject, { name: f.name.trim() }), text);
      setStatus(c.sentEmail);
    } else {
      const url = whatsappLink(text);
      // Open in a new tab and keep this page. If a popup blocker stops it, go there directly.
      const win = window.open(url, "_blank");
      if (win) win.opener = null;
      else window.location.href = url;
      setStatus(c.sentWhatsapp);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <fieldset>
        <legend className="eyebrow text-muted">{c.productsLabel}</legend>
        {ready && listed.length === 0 && (
          <div className="mt-3 rounded-lg border border-dashed border-line bg-paper p-4 text-[15px] text-muted">
            {c.empty}{" "}
            <Link href={localePath(locale, "/products")} className="font-semibold text-blue underline-offset-2 hover:underline">
              {browseLabel}
            </Link>
          </div>
        )}
        <ul className="mt-3 space-y-2">
          {listed.map((item) => {
            const o = byslug.get(item.slug)!;
            const qtyId = `${uid}-qty-${item.slug}`;
            return (
              <li key={item.slug} className="grid grid-cols-[1fr_auto_auto] items-center gap-2 rounded-md border-[1.5px] border-line bg-paper py-2 ps-3.5 pe-1.5">
                <span className="text-[15px] font-semibold leading-snug">{o.name}</span>
                <label htmlFor={qtyId} className="sr-only">
                  {c.qty}: {o.name}
                </label>
                <span className="flex h-11 w-28 items-center rounded-md border-[1.5px] border-line focus-within:border-blue">
                  <input
                    id={qtyId}
                    inputMode="decimal"
                    autoComplete="off"
                    value={item.qty}
                    onChange={(e) => setQty(item.slug, e.target.value.slice(0, 12))}
                    placeholder={c.qty}
                    className="spec h-full w-full min-w-0 bg-transparent ps-2.5 text-[15px] focus:outline-none"
                  />
                  <span className="pe-2.5 text-xs text-muted">{units[o.unit]}</span>
                </span>
                <button
                  type="button"
                  onClick={() => remove(item.slug)}
                  aria-label={fill(c.remove, { name: o.name })}
                  className="grid size-11 place-items-center rounded-md text-muted hover:bg-steel hover:text-ink"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>
        {remaining.length > 0 && (
          <div className="relative mt-2">
            <label htmlFor={`${uid}-add`} className="sr-only">
              {c.addMore}
            </label>
            <Plus className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-blue" aria-hidden="true" />
            <select
              id={`${uid}-add`}
              value=""
              onChange={(e) => e.target.value && add(e.target.value)}
              className="min-h-12 w-full appearance-none rounded-md border-[1.5px] border-dashed border-line bg-transparent ps-10 pe-4 text-[15px] font-semibold text-blue focus:border-blue focus:outline-none"
            >
              <option value="">{c.addMore}</option>
              {groups.map((g) => (
                <optgroup key={g} label={g}>
                  {remaining
                    .filter((o) => o.group === g)
                    .map((o) => (
                      <option key={o.slug} value={o.slug}>
                        {o.name}
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
          </div>
        )}
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={`${uid}-deliver`} label={c.deliverTo} className="sm:col-span-2">
          <input id={`${uid}-deliver`} value={f.deliverTo} onChange={set("deliverTo")} placeholder={c.deliverToHint} autoComplete="address-level2" className={inputClass} />
        </Field>
        <Field id={`${uid}-name`} label={c.name} error={errors.name}>
          <input id={`${uid}-name`} value={f.name} onChange={set("name")} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? `${uid}-name-err` : undefined} className={inputClass} />
        </Field>
        <Field id={`${uid}-company`} label={c.company} optional={c.optional}>
          <input id={`${uid}-company`} value={f.company} onChange={set("company")} autoComplete="organization" className={inputClass} />
        </Field>
        <Field id={`${uid}-phone`} label={c.phone} error={errors.phone}>
          <input id={`${uid}-phone`} type="tel" dir="ltr" value={f.phone} onChange={set("phone")} autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${uid}-phone-err` : undefined} className={`${inputClass} spec [text-align:start]`} />
        </Field>
        <Field id={`${uid}-email`} label={c.email} optional={c.optional}>
          <input id={`${uid}-email`} type="email" dir="ltr" value={f.email} onChange={set("email")} autoComplete="email" className={`${inputClass} [text-align:start]`} />
        </Field>
        <Field id={`${uid}-message`} label={c.message} optional={c.optional} error={errors.content} className="sm:col-span-2">
          <textarea
            id={`${uid}-message`}
            value={f.message}
            onChange={set("message")}
            rows={3}
            placeholder={c.messageHint}
            aria-invalid={!!errors.content}
            aria-describedby={errors.content ? `${uid}-message-err` : undefined}
            className={`${inputClass} py-3`}
          />
        </Field>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        <button type="submit" name="via" value="whatsapp" className="btn btn-wa">
          <WhatsAppIcon />
          {c.sendWhatsapp}
        </button>
        <button type="submit" name="via" value="email" className="btn btn-outline">
          {c.sendEmail}
        </button>
      </div>
      <p role="status" aria-live="polite" className={status ? "rounded-md bg-[#e7f6ec] px-4 py-3 text-[15px] text-wa-deep" : "sr-only"}>
        {status}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  optional,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  optional?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-[14px] font-semibold">
        {label}
        {optional && <span className="ms-1.5 font-normal text-muted">({optional})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-[14px] font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
