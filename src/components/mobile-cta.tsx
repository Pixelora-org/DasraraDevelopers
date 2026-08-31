"use client";

import { usePathname } from "next/navigation";
import { site, whatsappHref } from "@/content/site";

export function MobileCta() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-void px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="grid grid-cols-3 gap-2 text-center text-[0.68rem] tracking-[0.14em] uppercase">
        <a href={site.phones[0].href} className="border border-gold/40 py-3 text-ivory">
          Call
        </a>
        <a
          href={whatsappHref("Hi, I want details on Dasara Utsav.")}
          target="_blank"
          rel="noreferrer"
          className="bg-maroon py-3 text-ivory"
        >
          WhatsApp
        </a>
        <a href="/contact" className="bg-gold py-3 text-void">
          Site visit
        </a>
      </div>
    </div>
  );
}
