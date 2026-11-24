import type { Metadata } from "next";
import { HomeView } from "@/components/views/HomeView";
import { metaFor, routeLocale } from "@/lib/pages";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metaFor(await routeLocale(params), "home");
}

export default async function Page({ params }: Props) {
  return <HomeView locale={await routeLocale(params)} />;
}
