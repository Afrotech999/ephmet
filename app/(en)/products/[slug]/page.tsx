import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductView } from "@/components/views/ProductView";
import { productMeta } from "@/lib/pages";
import { getProduct, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return productMeta("en", (await params).slug);
}

export default async function Page({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  return <ProductView locale="en" product={product} />;
}
