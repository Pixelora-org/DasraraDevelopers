import Link from "next/link";
import { site } from "@/content/site";
import { utsav } from "@/content/utsav";
import { Mark } from "@/components/mark";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <Mark className="h-8 w-8 text-gold" />
            <div>
              <p className="font-display text-2xl tracking-[0.16em]">DASARA</p>
              <p className="text-[0.62rem] tracking-[0.3em] uppercase text-cream/60">Developers · Bengaluru</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-cream/70">
            Homes with space, quiet, and a real address — between Whitefield and Sarjapur, in the
            landscapes of Chikkatirupathi.
          </p>
          <p className="mt-4 font-display text-xl italic text-gold">{site.motto}</p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-gold">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={utsav.brochure} download className="hover:text-cream">
                Download brochure
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-gold">Office</p>
          <address className="mt-4 not-italic text-sm leading-7 text-cream/75">
            {site.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="mt-4 space-y-1 text-sm">
            {site.phones.map((p) => (
              <a key={p.href} href={p.href} className="block text-cream hover:text-gold">
                {p.label}
              </a>
            ))}
            <a href={`mailto:${site.email}`} className="block text-cream/80 hover:text-gold">
              {site.email}
            </a>
          </div>
          <p className="mt-5 text-[0.7rem] tracking-wide text-cream/45">RERA {utsav.rera}</p>
        </div>
      </div>

      <div className="border-t border-cream/10 px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[0.7rem] leading-5 text-cream/40 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Dasara Developers. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
