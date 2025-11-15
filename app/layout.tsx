import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Google Fonts
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// Metadata for SEO and favicon
export const metadata: Metadata = {
  title: "Steel Manufacturing & Supply | Professional Steel Solutions",
  description:
    "High-quality steel rebars, structural steel, sheets, and metal fabrication services for construction and industrial projects.",
  generator: "v0.app",
  authors: [{ name: "V0 Steel Company" }],
  keywords: [
    "steel",
    "fabrication",
    "construction",
    "industrial steel",
    "rebars",
  ],
  icons: {
    icon: [
      {
        url: "/v0-favicon.ico", // Main favicon
        type: "image/x-icon",
      },
      {
        url: "/v0-favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/v0-favicon-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/v0-favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
