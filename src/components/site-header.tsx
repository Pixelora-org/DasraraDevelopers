"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const overHero = isHome && !scrolled && !open;
  const projectsActive = pathname.startsWith("/projects");

  useEffect(() => {
    setOpen(false);
    setProjectsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  if (pathname.startsWith("/owner")) return null;

  const linkTone = overHero ? "text-white hover:text-gold" : "text-brown hover:text-gold-deep";
  const activeTone = overHero ? "text-gold" : "text-gold-deep";

  return (
    <header
      className={`top-0 z-50 ${isHome ? "fixed inset-x-0" : "sticky"} ${
        overHero ? "border-b border-transparent bg-transparent" : "border-b border-line bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-8">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src={site.logo}
            alt="Dasara Developers"
            width={220}
            height={56}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[0.95rem] md:flex ${
            overHero ? "text-white" : "text-brown"
          }`}
        >
          <Link href="/" className={`${pathname === "/" ? activeTone : linkTone}`}>
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1.5 ${projectsActive || projectsOpen ? activeTone : linkTone}`}
              aria-expanded={projectsOpen}
              onClick={() => setProjectsOpen((v) => !v)}
            >
              Projects
              <span className="text-[0.6rem]">{projectsOpen ? "▴" : "▾"}</span>
            </button>
            {projectsOpen ? (
              <div className="absolute left-1/2 top-full z-20 w-64 -translate-x-1/2 pt-3">
                <div className="border border-line bg-white px-5 py-4 text-left shadow-sm">
                  {site.projects.map((project) => (
                    <Link
                      key={project.href}
                      href={project.href}
                      className="block"
                      onClick={() => setProjectsOpen(false)}
                    >
                      <span className="block font-display text-base tracking-normal text-ink normal-case">
                        {project.name}
                      </span>
                      <span className="mt-1 block text-[0.62rem] tracking-[0.14em] text-muted">
                        {project.place}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <Link href="/about" className={`${pathname === "/about" ? activeTone : linkTone}`}>
            About
          </Link>
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden bg-gold px-5 py-2.5 text-[0.68rem] tracking-[0.18em] uppercase text-white hover:bg-gold-deep md:inline-block"
          >
            Enquire
          </Link>
          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center md:hidden ${overHero ? "text-white" : "text-brown"}`}
            aria-label={open ? "Close menu" : "Open menu"}
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
      </div>

      {open ? (
        <div className="border-t border-line bg-white px-5 py-8 md:hidden">
          <nav className="flex flex-col gap-5 font-display text-2xl text-ink">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <div>
              <p className="text-[0.68rem] tracking-[0.18em] uppercase text-gold-deep">Projects</p>
              {site.projects.map((project) => (
                <Link
                  key={project.href}
                  href={project.href}
                  className="mt-3 block"
                  onClick={() => setOpen(false)}
                >
                  {project.name}
                </Link>
              ))}
            </div>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Enquire
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
