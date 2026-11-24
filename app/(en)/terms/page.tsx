import { LegalView } from "@/components/views/InfoViews";
import { metaFor } from "@/lib/pages";

export const metadata = metaFor("en", "terms");

export default function Page() {
  return <LegalView locale="en" kind="terms" />;
}
