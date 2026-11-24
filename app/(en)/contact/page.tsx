import { ContactView } from "@/components/views/ContactView";
import { metaFor } from "@/lib/pages";

export const metadata = metaFor("en", "contact");

export default function Page() {
  return <ContactView locale="en" />;
}
