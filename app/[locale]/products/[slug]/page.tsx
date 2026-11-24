import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductView } from "@/components/views/ProductView";
import { productMeta, routeLocale } from "@/lib/pages";
import { getProduct, products } from "@/lib/products";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return productMeta(await routeLocale(params), (await params).slug);
}

export default async function Page({ params }: Props) {
  const locale = await routeLocale(params);
  const product = getProduct((await params).slug);
  if (!product) notFound();
  return <ProductView locale={locale} product={product} />;
}
