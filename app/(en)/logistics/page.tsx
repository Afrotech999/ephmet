import { LogisticsView } from "@/components/views/InfoViews";
import { metaFor } from "@/lib/pages";

export const metadata = metaFor("en", "logistics");

export default function Page() {
  return <LogisticsView locale="en" />;
}
