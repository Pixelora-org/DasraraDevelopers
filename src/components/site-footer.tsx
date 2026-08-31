import Link from "next/link";
import { site } from "@/content/site";
import { utsav } from "@/content/utsav";
import { Mark } from "@/components/mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/30 bg-void text-ivory">
      <div className="h-1 bg-gradient-to-r from-maroon via-gold to-maroon" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5 text-gold">
            <Mark className="h-8 w-8" />
            <div>
              <p className="font-display text-2xl tracking-[0.16em] text-ivory">DASARA</p>
              <p className="text-[0.62rem] tracking-[0.3em] uppercase text-gold">Developers · Bengaluru</p>
            </div>
          </div>
          <p className="font-hindi mt-6 text-3xl text-gold">उत्सव</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-ivory/65">
            Premium 4BHK gated villas between Whitefield and Sarjapur. Built to be seen. Built to live.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-gold">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={utsav.brochure} download className="hover:text-gold">
                Download brochure
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-gold">Office</p>
          <address className="mt-4 not-italic text-sm leading-7 text-ivory/70">
            {site.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="mt-4 space-y-1 text-sm">
            {site.phones.map((p) => (
              <a key={p.href} href={p.href} className="block text-gold hover:text-gold-bright">
                {p.label}
              </a>
            ))}
            <a href={`mailto:${site.email}`} className="block break-all text-ivory/70 hover:text-gold">
              {site.email}
            </a>
          </div>
          <p className="mt-5 break-all text-[0.7rem] tracking-wide text-muted">RERA {utsav.rera}</p>
        </div>
      </div>

      <div className="border-t border-gold/20 px-5 py-6 pb-24 sm:px-8 md:pb-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[0.7rem] leading-5 text-ivory/35 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Dasara Developers. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
