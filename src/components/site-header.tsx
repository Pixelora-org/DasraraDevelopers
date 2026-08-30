"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Mark } from "@/components/mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const darkHero = pathname.startsWith("/projects/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open || !darkHero;
  const text = solid ? "text-ink" : "text-cream";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-cream/92 shadow-[0_1px_0_rgba(20,17,14,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className={`flex items-center gap-2.5 ${text}`}>
          <Mark className={`h-8 w-8 ${solid ? "text-copper" : "text-gold"}`} />
          <span className="leading-none">
            <span className="block font-display text-[1.35rem] tracking-[0.18em]">DASARA</span>
            <span className="block text-[0.62rem] tracking-[0.32em] uppercase opacity-70">Developers</span>
          </span>
        </Link>

        <nav className={`hidden items-center gap-8 text-[0.72rem] tracking-[0.22em] uppercase md:flex ${text}`}>
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-opacity hover:opacity-100 ${active ? "opacity-100" : "opacity-70"}`}
              >
                {item.label}
                {active ? <span className="absolute inset-x-1 -bottom-1 h-px bg-copper" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className={`text-[0.72rem] tracking-[0.18em] uppercase transition-colors ${
              solid
                ? "bg-forest px-5 py-2.5 text-cream hover:bg-forest-deep"
                : "border border-cream/40 px-5 py-2.5 text-cream hover:bg-cream hover:text-ink"
            }`}
          >
            Site visit
          </Link>
        </div>

        <button
          type="button"
          className={`md:hidden ${text}`}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-7 bg-current" />
          <span className="mt-2 block h-px w-5 bg-current" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/10 bg-cream px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4 font-display text-3xl text-ink">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 text-lg tracking-[0.16em] uppercase text-copper">
              Book a site visit
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
