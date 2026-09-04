"use client";

import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export function MobileCta() {
  const pathname = usePathname();
  if (pathname === "/contact" || pathname.startsWith("/owner")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="grid grid-cols-2 gap-2 text-center text-[0.68rem] tracking-[0.14em] uppercase">
        <a href={site.phones[0].href} className="border border-line py-3 text-brown">
          Call
        </a>
        <a href="/contact" className="bg-gold py-3 text-white">
          Enquire
        </a>
      </div>
    </div>
  );
}
