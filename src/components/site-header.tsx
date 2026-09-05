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
  const isHome = pathname === "/";
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

  if (pathname.startsWith("/owner")) return null;

  const linkClass = (active: boolean) =>
    `pb-1 text-[0.82rem] tracking-[0.12em] text-white hover:text-gold ${
      active ? "border-b border-white" : "border-b border-transparent"
    }`;

  return (
    <header
      className={`top-0 z-50 w-full bg-ink/55 backdrop-blur-md ${isHome ? "fixed inset-x-0" : "sticky inset-x-0"}`}
    >
      <div className="relative mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8 lg:px-12">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src={site.logoOnDark}
            alt="Dasara Developers"
            width={220}
            height={44}
            sizes="220px"
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="pointer-events-none absolute inset-x-0 hidden justify-center md:pointer-events-auto md:flex">
          <div className="flex items-center gap-10">
            <Link href="/" className={linkClass(pathname === "/")}>
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1.5 ${linkClass(projectsActive || projectsOpen)}`}
                aria-expanded={projectsOpen}
                onClick={() => setProjectsOpen((v) => !v)}
              >
                Projects
                <svg
                  viewBox="0 0 12 8"
                  className={`h-2 w-2.5 fill-none stroke-current ${projectsOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <path d="M1 1.5 6 6.5 11 1.5" strokeWidth="1.4" />
                </svg>
              </button>
              {projectsOpen ? (
                <div className="absolute left-1/2 top-full z-20 w-72 -translate-x-1/2 pt-4">
                  <div className="bg-ink/95 px-6 py-5 text-left shadow-lg backdrop-blur-md">
                    {site.projects.map((project) => (
                      <Link
                        key={project.href}
                        href={project.href}
                        className="block"
                        onClick={() => setProjectsOpen(false)}
                      >
                        <span className="block text-sm text-white">{project.name}</span>
                        <span className="mt-1 block text-[0.7rem] text-white/55">{project.place}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <Link href="/about" className={linkClass(pathname === "/about")}>
              About
            </Link>
          </div>
        </nav>

        <div className="relative z-10 flex shrink-0 items-center">
          <Link
            href="/contact"
            className="hidden items-center gap-2 text-[0.72rem] tracking-[0.16em] uppercase text-white hover:text-gold md:inline-flex"
          >
            <EnquireIcon />
            Enquire
          </Link>
          <button
            type="button"
            className="-mr-1.5 flex h-11 w-11 shrink-0 items-center justify-center text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="flex flex-col items-end gap-1.5">
                <span className="block h-0.5 w-6 bg-current" />
                <span className="block h-0.5 w-4 bg-current" />
              </span>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/15 bg-ink/95 px-5 py-8 md:hidden">
          <nav className="flex flex-col gap-5 text-xl text-white">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <div>
              <p className="text-[0.68rem] tracking-[0.18em] uppercase text-gold">Projects</p>
              {site.projects.map((project) => (
                <Link
                  key={project.href}
                  href={project.href}
                  className="mt-3 block text-lg"
                  onClick={() => setOpen(false)}
                >
                  {project.name}
                </Link>
              ))}
            </div>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2" onClick={() => setOpen(false)}>
              <EnquireIcon />
              Enquire
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function EnquireIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" aria-hidden>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" strokeWidth="1.5" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4" strokeWidth="1.5" />
    </svg>
  );
}
