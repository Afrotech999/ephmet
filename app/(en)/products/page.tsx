import { ProductsView } from "@/components/views/ProductsView";
import { metaFor } from "@/lib/pages";

export const metadata = metaFor("en", "products");

export default function Page() {
  return <ProductsView locale="en" />;
}
