import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCta } from "@/components/mobile-cta";
import { site } from "@/content/site";
import { utsav } from "@/content/utsav";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Dasara Utsav — 4BHK Villas | Dasara Developers",
    template: "%s — Dasara Developers",
  },
  description:
    "Dasara Utsav is a 6.08-acre gated villa community in Chikkatirupathi, between Whitefield and Sarjapur. Premium 4BHK triplex villas by Dasara Developers, Bengaluru.",
  keywords: [
    "Dasara Utsav",
    "Dasara Developers",
    "4BHK villas Bangalore",
    "Chikkatirupathi",
    "Whitefield Sarjapur villas",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable} h-full`}>
      <body className="min-h-full bg-cream font-sans text-ink antialiased">
        <SiteHeader />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <SiteFooter />
        <MobileCta />
        <p className="sr-only">RERA {utsav.rera}. {site.disclaimer}</p>
      </body>
    </html>
  );
}
