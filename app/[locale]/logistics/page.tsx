import type { Metadata } from "next";
import { LogisticsView } from "@/components/views/InfoViews";
import { metaFor, routeLocale } from "@/lib/pages";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metaFor(await routeLocale(params), "logistics");
}

export default async function Page({ params }: Props) {
  return <LogisticsView locale={await routeLocale(params)} />;
}
