"use client";

import { usePathname } from "next/navigation";
import { site, whatsappHref } from "@/content/site";

export function MobileCta() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream/95 px-3 py-2.5 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3 gap-2 text-center text-[0.68rem] tracking-[0.14em] uppercase">
        <a href={site.phones[0].href} className="bg-paper py-3 text-ink">
          Call
        </a>
        <a
          href={whatsappHref("Hi, I want details on Dasara Utsav.")}
          target="_blank"
          rel="noreferrer"
          className="bg-forest py-3 text-cream"
        >
          WhatsApp
        </a>
        <a href="/contact" className="bg-copper py-3 text-cream">
          Site visit
        </a>
      </div>
    </div>
  );
}
