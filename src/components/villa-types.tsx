"use client";

import { useEffect, useRef, useState } from "react";
import { utsav } from "@/content/utsav";
import { Lightbox } from "@/components/lightbox";
import { Photo } from "@/components/photo";

const villas = utsav.villas;
const AUTO_MS = 7000;

export function VillaTypes() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  const startX = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const villa = villas[index];

  function go(next: number) {
    setIndex((next + villas.length) % villas.length);
  }

  useEffect(() => {
    const nav = navRef.current;
    const tab = tabRefs.current[index];
    if (!nav || !tab) return;
    const navBox = nav.getBoundingClientRect();
    const tabBox = tab.getBoundingClientRect();
    const offset = tabBox.left - navBox.left - navBox.width / 2 + tabBox.width / 2;
    nav.scrollTo({ left: nav.scrollLeft + offset, behavior: "smooth" });
  }, [index]);

  useEffect(() => {
    if (paused || planOpen) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % villas.length);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, planOpen, index]);

  return (
    <div
      id="villa-showroom"
      className="scroll-mt-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-8 flex items-center gap-3 sm:gap-5">
        <button
          type="button"
          aria-label="Previous villa"
          onClick={() => go(index - 1)}
          className="hidden h-9 w-9 shrink-0 items-center justify-center text-lg text-gold-deep hover:text-ink md:flex"
        >
          ‹
        </button>
        <nav
          ref={navRef}
          className="hide-scroll flex min-w-0 flex-1 items-end justify-start gap-6 overflow-x-auto sm:justify-center sm:gap-10"
        >
          {villas.map((item, i) => {
            const active = i === index;
            return (
              <button
                key={item.slug}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                onClick={() => go(i)}
                className={`relative shrink-0 pb-2.5 font-display text-base tracking-wide sm:text-lg ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.name}
                <span
                  className={`absolute inset-x-0 bottom-0 h-px ${active ? "bg-gold" : "bg-transparent"}`}
                />
              </button>
            );
          })}
        </nav>
        <button
          type="button"
          aria-label="Next villa"
          onClick={() => go(index + 1)}
          className="hidden h-9 w-9 shrink-0 items-center justify-center text-lg text-gold-deep hover:text-ink md:flex"
        >
          ›
        </button>
      </div>

      <div
        className="w-full overflow-hidden"
        onTouchStart={(event) => {
          startX.current = event.touches[0].clientX;
          setPaused(true);
        }}
        onTouchEnd={(event) => {
          const dx = event.changedTouches[0].clientX - startX.current;
          if (dx > 48) go(index - 1);
          if (dx < -48) go(index + 1);
          setPaused(false);
        }}
      >
        <div
          className="flex w-full"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: "transform 700ms ease-in-out",
          }}
        >
          {villas.map((item, i) => {
            const nearby =
              Math.abs(i - index) <= 1 ||
              (index === 0 && i === villas.length - 1) ||
              (index === villas.length - 1 && i === 0);
            return (
            <article
              key={item.slug}
              className="grid w-full min-w-0 shrink-0 basis-full items-center overflow-hidden lg:grid-cols-12"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-cream lg:col-span-7 lg:aspect-[10/11]">
                <Photo
                  src={item.image}
                  alt={`${item.name} villa`}
                  fill
                  {...(i === 0
                    ? { priority: true }
                    : { loading: nearby ? "eager" : "lazy" })}
                  className="max-w-none object-contain object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center bg-cream px-6 py-8 sm:px-10 lg:col-span-5 lg:px-10">
                <p className="text-[0.75rem] tracking-[0.2em] uppercase text-gold-deep">Dasara</p>
                <h3 className="mt-1 font-display text-3xl text-ink sm:text-4xl">{item.name}</h3>
                <p className="mt-3 text-[0.8rem] tracking-[0.12em] uppercase text-ink">
                  {item.facing} ({item.plot})
                </p>
                <dl className="mt-6 space-y-3 border-y border-gold/50 py-4 text-sm">
                  <Row label="Total built-up area" value={`${item.builtUp} sq.ft`} />
                </dl>
                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
                  {utsav.villaFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="text-center text-[0.75rem] leading-5 tracking-[0.08em] uppercase text-ink"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => setPlanOpen(true)}
                    className="bg-gold px-5 py-3 text-[0.7rem] tracking-[0.16em] uppercase text-white hover:bg-gold-deep"
                  >
                    View floor plans
                  </button>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>

      {planOpen ? (
        <Lightbox src={villa.plan} alt={`${villa.name} floor plans`} onClose={() => setPlanOpen(false)} />
      ) : null}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-[0.75rem] tracking-[0.14em] uppercase text-ink">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}
