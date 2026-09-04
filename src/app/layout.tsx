import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCta } from "@/components/mobile-cta";
import { BackToTop } from "@/components/back-to-top";
import { site } from "@/content/site";
import { utsav } from "@/content/utsav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
  title: {
    default: "Dasara Developers | Dasara Utsav",
    template: "%s | Dasara Developers",
  },
  description:
    "Dasara Developers. Premium 4BHK gated villas at Dasara Utsav, Chikkatirupathi, between Whitefield and Sarjapur.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Dasara Developers",
    title: "Dasara Developers | Dasara Utsav",
    description:
      "Premium 4BHK gated villas at Dasara Utsav, Chikkatirupathi, between Whitefield and Sarjapur.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full overflow-x-hidden bg-white font-sans text-ink antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileCta />
        <BackToTop />
        <p className="sr-only">
          RERA {utsav.rera}. {site.disclaimer}
        </p>
      </body>
    </html>
  );
}
