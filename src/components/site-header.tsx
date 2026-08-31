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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-gold/40 bg-void/95 backdrop-blur-md"
          : pathname === "/"
            ? "border-transparent bg-transparent"
            : "border-gold/20 bg-void/70"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2 text-gold">
          <Mark className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
          <span className="leading-none">
            <span className="block font-display text-[1.05rem] tracking-[0.12em] text-ivory sm:text-[1.15rem] sm:tracking-[0.22em]">
              DASARA
            </span>
            <span className="block text-[0.52rem] tracking-[0.22em] uppercase text-gold sm:text-[0.58rem] sm:tracking-[0.38em]">
              Developers
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[0.68rem] tracking-[0.24em] uppercase text-ivory/70 md:flex">
          {site.nav.map((item) => {
            const path = item.href.split("#")[0] || "/";
            const active = item.href.includes("#") ? false : pathname === path;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 hover:text-gold ${
                  item.href === pathname || (item.href === "/" && pathname === "/") ? "text-gold" : ""
                }`}
              >
                {item.label}
                {active ? <span className="absolute inset-x-0 -bottom-1 h-px bg-gold" /> : null}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden bg-gold px-5 py-2.5 text-[0.68rem] tracking-[0.2em] uppercase text-void hover:bg-gold-bright md:inline-block"
        >
          Site visit
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-gold md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="flex flex-col items-end gap-1.5">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </span>
          )}
        </button>
      </div>

      {open ? (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-gold/30 bg-void px-5 py-8 md:hidden">
          <nav className="flex flex-col gap-5 font-display text-3xl text-ivory">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 text-lg tracking-[0.16em] uppercase text-gold" onClick={() => setOpen(false)}>
              Book a site visit
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
