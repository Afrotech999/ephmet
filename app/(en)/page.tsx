import { HomeView } from "@/components/views/HomeView";
import { metaFor } from "@/lib/pages";

export const metadata = metaFor("en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
