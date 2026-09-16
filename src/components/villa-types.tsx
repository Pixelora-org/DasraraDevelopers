"use client";

import { useEffect, useRef, useState, type TransitionEvent } from "react";
import { utsav, type Villa } from "@/content/utsav";
import { FloorPlanOverlay } from "@/components/floor-plan-overlay";
import { Photo } from "@/components/photo";

const villas = utsav.villas;
const n = villas.length;
const slides = [villas[n - 1], ...villas, villas[0]];
const AUTO_MS = 7000;
const SLIDE_MS = 700;

export function VillaTypes() {
  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);
  const startX = useRef(0);
  const jumping = useRef(false);

  function go(dir: number) {
    if (jumping.current) return;
    setAnimate(true);
    setPos((current) => current + dir);
  }

  function onSlideEnd(event: TransitionEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (pos !== 0 && pos !== n + 1) return;
    jumping.current = true;
    setAnimate(false);
    setPos(pos === n + 1 ? 1 : n);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        jumping.current = false;
        setAnimate(true);
      });
    });
  }

  useEffect(() => {
    if (paused || planOpen) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, planOpen, pos]);

  const slideStyle = {
    transform: `translateX(-${pos * 100}%)`,
    transition: animate ? `transform ${SLIDE_MS}ms ease-in-out` : "none",
  };
  const nameStyle = {
    transform: `translateX(-${pos * 12}rem)`,
    transition: animate ? `transform ${SLIDE_MS}ms ease-in-out` : "none",
  };

  return (
    <div
      id="villa-showroom"
      className="scroll-mt-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-8 flex items-center justify-center gap-4 sm:gap-6">
        <button
          type="button"
          aria-label="Previous villa"
          onClick={() => go(-1)}
          className="flex h-9 w-9 shrink-0 items-center justify-center text-lg text-gold-deep hover:text-ink"
        >
          ‹
        </button>
        <nav className="w-48 overflow-hidden">
          <div className="flex" style={nameStyle}>
            {slides.map((item, i) => (
              <p
                key={`${item.slug}-name-${i}`}
                className="relative w-48 shrink-0 pb-2.5 text-center font-display text-lg tracking-wide text-ink sm:text-xl"
              >
                {item.name}
                <span className="absolute inset-x-6 bottom-0 h-px bg-gold" />
              </p>
            ))}
          </div>
        </nav>
        <button
          type="button"
          aria-label="Next villa"
          onClick={() => go(1)}
          className="flex h-9 w-9 shrink-0 items-center justify-center text-lg text-gold-deep hover:text-ink"
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
          if (dx > 48) go(-1);
          if (dx < -48) go(1);
          setPaused(false);
        }}
      >
        <div className="flex w-full" style={slideStyle} onTransitionEnd={onSlideEnd}>
          {slides.map((item, i) => {
            const nearby = Math.abs(i - pos) <= 1;
            return (
              <article
                key={`${item.slug}-slide-${i}`}
                className="grid w-full min-w-0 shrink-0 basis-full items-center overflow-hidden lg:grid-cols-12"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-cream lg:col-span-7 lg:aspect-[10/11]">
                  <Photo
                    src={item.image}
                    alt={`${item.name} villa`}
                    fill
                    {...(i === 1
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
                      onClick={() => {
                        setSelectedVilla(item);
                        setPlanOpen(true);
                      }}
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

      {planOpen && selectedVilla ? (
        <FloorPlanOverlay
          villa={selectedVilla}
          onClose={() => {
            setPlanOpen(false);
            setSelectedVilla(null);
          }}
        />
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
