import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";
import { metaFor, routeLocale } from "@/lib/pages";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metaFor(await routeLocale(params), "contact");
}

export default async function Page({ params }: Props) {
  return <ContactView locale={await routeLocale(params)} />;
}
