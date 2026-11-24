import { LegalView } from "@/components/views/InfoViews";
import { metaFor } from "@/lib/pages";

export const metadata = metaFor("en", "privacy");

export default function Page() {
  return <LegalView locale="en" kind="privacy" />;
}
