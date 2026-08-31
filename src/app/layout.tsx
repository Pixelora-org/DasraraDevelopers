import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCta } from "@/components/mobile-cta";
import { site } from "@/content/site";
import { utsav } from "@/content/utsav";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Dasara Utsav — 4BHK Villas | Dasara Developers",
    template: "%s — Dasara Developers",
  },
  description:
    "Dasara Utsav is a 6.08-acre gated villa community in Chikkatirupathi, between Whitefield and Sarjapur. Premium 4BHK triplex villas by Dasara Developers, Bengaluru.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${syne.variable} h-full`}
    >
      <body className="min-h-full overflow-x-hidden bg-void font-sans text-ivory antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileCta />
        <p className="sr-only">
          RERA {utsav.rera}. {site.disclaimer}
        </p>
      </body>
    </html>
  );
}
