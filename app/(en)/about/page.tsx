import { AboutView } from "@/components/views/InfoViews";
import { metaFor } from "@/lib/pages";

export const metadata = metaFor("en", "about");

export default function Page() {
  return <AboutView locale="en" />;
}
