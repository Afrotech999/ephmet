import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Google Fonts
const _geist = Geist({ subsets: ["latin"] });

// Metadata for SEO and browser tab
export const metadata: Metadata = {
  title: "EPHMET RED SEA FZCO | Steel Supply & Services",
  description:
    "High-quality steel rebars, structural steel, sheets, and metal services for construction and industrial projects.",
  authors: [{ name: "EPHMET RED SEA FZCO" }],
  keywords: [
    "steel",
    "fabrication",
    "construction",
    "industrial steel",
    "rebars",
  ],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className={`font-sans antialiased ${_geist.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
