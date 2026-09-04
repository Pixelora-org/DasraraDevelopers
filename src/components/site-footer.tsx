"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { utsav } from "@/content/utsav";

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname.startsWith("/owner")) return null;

  return (
    <footer className="border-t border-line bg-cream text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-8 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <Image src={site.logo} alt="Dasara Developers" width={200} height={52} className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
            Premium 4BHK gated villas between Whitefield and Sarjapur. Founded {site.founded}.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold-deep">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-brown">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-deep">
                  {item.label}
                </Link>
              </li>
            ))}
            {site.projects.map((project) => (
              <li key={project.href}>
                <Link href={project.href} className="hover:text-gold-deep">
                  {project.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-gold-deep">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold-deep">Address</p>
          <address className="mt-4 not-italic text-sm leading-7 text-brown">
            {site.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a
              href={site.address.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-gold-deep hover:text-ink"
            >
              Open in Maps →
            </a>
          </address>
          <div className="mt-4 space-y-1 text-sm">
            {site.phones.map((p) => (
              <a key={p.href} href={p.href} className="block text-ink hover:text-gold-deep">
                {p.label}
              </a>
            ))}
            {site.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="block break-all text-brown hover:text-gold-deep">
                {email}
              </a>
            ))}
          </div>
          <p className="mt-5 break-all text-[0.7rem] text-muted">RERA {utsav.rera}</p>
        </div>
      </div>
      <div className="border-t border-line px-4 py-6 pb-24 sm:px-8 md:pb-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-[0.7rem] leading-5 text-muted md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Dasara Developers. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
