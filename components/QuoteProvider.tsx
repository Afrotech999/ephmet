"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type QuoteItem = { slug: string; qty: string };

type QuoteState = {
  items: QuoteItem[];
  ready: boolean;
  has: (slug: string) => boolean;
  add: (slug: string) => void;
  remove: (slug: string) => void;
  toggle: (slug: string) => void;
  setQty: (slug: string, qty: string) => void;
};

const STORAGE_KEY = "ephmet-quote-v1";
const QuoteContext = createContext<QuoteState | null>(null);

function read(): QuoteItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((x): x is QuoteItem => typeof x?.slug === "string")
      .map((x) => ({ slug: x.slug, qty: typeof x.qty === "string" ? x.qty : "" }));
  } catch {
    return [];
  }
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItems(read());
    setReady(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setItems(read());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable: the list still works for this visit */
    }
  }, [items, ready]);

  const has = useCallback((slug: string) => items.some((i) => i.slug === slug), [items]);
  const add = useCallback(
    (slug: string) => setItems((cur) => (cur.some((i) => i.slug === slug) ? cur : [...cur, { slug, qty: "" }])),
    [],
  );
  const remove = useCallback((slug: string) => setItems((cur) => cur.filter((i) => i.slug !== slug)), []);
  const toggle = useCallback(
    (slug: string) =>
      setItems((cur) => (cur.some((i) => i.slug === slug) ? cur.filter((i) => i.slug !== slug) : [...cur, { slug, qty: "" }])),
    [],
  );
  const setQty = useCallback(
    (slug: string, qty: string) => setItems((cur) => cur.map((i) => (i.slug === slug ? { ...i, qty } : i))),
    [],
  );

  const value = useMemo(() => ({ items, ready, has, add, remove, toggle, setQty }), [items, ready, has, add, remove, toggle, setQty]);
  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote(): QuoteState {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used inside QuoteProvider");
  return ctx;
}
