import type { Metadata } from "next";
import { ProductsView } from "@/components/views/ProductsView";
import { metaFor, routeLocale } from "@/lib/pages";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metaFor(await routeLocale(params), "products");
}

export default async function Page({ params }: Props) {
  return <ProductsView locale={await routeLocale(params)} />;
}
