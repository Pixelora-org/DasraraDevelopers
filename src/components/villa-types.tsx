"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { utsav } from "@/content/utsav";
import { Lightbox } from "@/components/lightbox";

const villas = utsav.villas;
const AUTO_MS = 7000;

export function VillaTypes() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  const startX = useRef(0);
  const villa = villas[index];

  function go(next: number) {
    setIndex((next + villas.length) % villas.length);
  }

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
      <div className="mx-auto mb-8 flex max-w-6xl items-center gap-3 px-4 sm:gap-5 sm:px-8">
        <button
          type="button"
          aria-label="Previous villa"
          onClick={() => go(index - 1)}
          className="hidden h-9 w-9 shrink-0 items-center justify-center text-lg text-gold-deep hover:text-ink md:flex"
        >
          ‹
        </button>
        <nav className="hide-scroll flex min-w-0 flex-1 items-end justify-start gap-6 overflow-x-auto sm:justify-center sm:gap-10">
          {villas.map((item, i) => {
            const active = i === index;
            return (
              <button
                key={item.slug}
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
          {villas.map((item) => (
            <article
              key={item.slug}
              className="grid w-full min-w-0 shrink-0 basis-full overflow-hidden lg:grid-cols-12"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-ink lg:col-span-7 lg:aspect-auto lg:h-full lg:min-h-[32rem]">
                <Image
                  src={item.image}
                  alt={`${item.name} villa`}
                  fill
                  className="max-w-none object-cover object-center"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center bg-cream px-6 py-8 sm:px-10 lg:col-span-5 lg:px-12">
                <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold-deep">Dasara</p>
                <h3 className="mt-1 font-display text-3xl text-ink sm:text-4xl">{item.name}</h3>
                <p className="mt-3 text-[0.72rem] tracking-[0.12em] uppercase text-brown">
                  {item.facing} ({item.plot})
                </p>
                <dl className="mt-6 space-y-3 border-y border-gold/50 py-4 text-sm">
                  <Row label="Total built-up area" value={`${item.builtUp} sq.ft`} />
                  <Row label="Total carpet area" value={`${item.carpet} sq.ft`} />
                </dl>
                <ul className="mt-6 grid grid-cols-3 gap-x-3 gap-y-4">
                  {utsav.villaFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="text-center text-[0.62rem] leading-4 tracking-[0.06em] uppercase text-brown"
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
          ))}
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
      <dt className="text-[0.62rem] tracking-[0.14em] uppercase text-gold-deep">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}
