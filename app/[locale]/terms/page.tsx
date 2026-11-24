import type { Metadata } from "next";
import { LegalView } from "@/components/views/InfoViews";
import { metaFor, routeLocale } from "@/lib/pages";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metaFor(await routeLocale(params), "terms");
}

export default async function Page({ params }: Props) {
  return <LegalView locale={await routeLocale(params)} kind="terms" />;
}
