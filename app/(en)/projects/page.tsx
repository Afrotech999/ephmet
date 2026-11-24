import type { Metadata } from "next";
import Link from "next/link";
import { absolute } from "@/lib/seo";

/** The old Projects page moved to Logistics. Static hosting has no redirects, so this page forwards visitors. */
export const metadata: Metadata = {
  title: "Moved to Logistics | Ephmet",
  robots: { index: false, follow: true },
  alternates: { canonical: absolute("/logistics") },
};

export default function ProjectsMoved() {
  return (
    <div className="wrap py-16">
      <meta httpEquiv="refresh" content="0; url=/logistics" />
      <p className="text-lg">
        This page has moved to{" "}
        <Link href="/logistics" className="font-semibold text-blue underline">
          Logistics
        </Link>
        .
      </p>
    </div>
  );
}
