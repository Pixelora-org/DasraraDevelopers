"use client";

import { useEffect, useRef, useState } from "react";
import { utsav, type Villa } from "@/content/utsav";
import { Photo } from "@/components/photo";

const FLOORS = [
  { key: "stilt" as const, label: "Stilt" },
  { key: "ground" as const, label: "Ground" },
  { key: "first" as const, label: "First" },
];

const AUTO_MS = 6000;

export function FloorPlanOverlay({
  villa,
  onClose,
}: {
  villa: Villa;
  onClose: () => void;
}) {
  const [floor, setFloor] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);
  const current = FLOORS[floor];

  function go(next: number) {
    setFloor((next + FLOORS.length) % FLOORS.length);
  }

  function enquire() {
    onClose();
    window.setTimeout(() => {
      document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") go(floor + 1);
      if (event.key === "ArrowLeft") go(floor - 1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, floor]);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = window.setInterval(() => {
      setFloor((currentFloor) => (currentFloor + 1) % FLOORS.length);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, floor]);

  return (
    <div
      className="fixed inset-0 z-80 flex items-center justify-center bg-ink/45 p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${villa.name} floor plans`}
    >
      <div
        className="relative flex h-[92dvh] w-full max-w-5xl flex-col overflow-y-auto bg-cream"
        onClick={(event) => event.stopPropagation()}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <header className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-8">
          <div>
            <p className="text-[0.68rem] tracking-[0.18em] uppercase text-gold-deep">
              Dasara Utsav
            </p>
            <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">{villa.name}</h2>
            <p className="mt-2 text-[0.72rem] tracking-[0.08em] uppercase text-muted">
              {villa.facing} · {villa.plot} · {villa.plotSqft} sq.ft plot · {villa.builtUp} sq.ft
              built-up
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-2xl text-ink hover:text-gold-deep"
            aria-label="Close"
          >
            ×
          </button>
        </header>

        <div className="flex items-center justify-center gap-2 border-b border-line px-5 py-3 sm:gap-3">
          {FLOORS.map((item, i) => (
            <button
              key={item.key}
              type="button"
              aria-current={i === floor}
              onClick={() => setFloor(i)}
              className={`px-3 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase sm:px-4 ${
                i === floor
                  ? "bg-gold text-white"
                  : "border border-line text-ink hover:border-gold hover:text-gold-deep"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          className="relative min-h-[38vh] flex-1 bg-white sm:min-h-[44vh]"
          onTouchStart={(event) => {
            startX.current = event.touches[0].clientX;
            setPaused(true);
          }}
          onTouchEnd={(event) => {
            const dx = event.changedTouches[0].clientX - startX.current;
            if (dx > 48) go(floor - 1);
            if (dx < -48) go(floor + 1);
            setPaused(false);
          }}
        >
          {FLOORS.map((item, i) => (
            <div
              key={item.key}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === floor ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <Photo
                src={villa.plans[item.key].image}
                alt={`${villa.name} ${item.label} floor`}
                fill
                fade={false}
                className="object-contain p-2 sm:p-4"
                sizes="(min-width: 1024px) 48rem, 100vw"
              />
            </div>
          ))}
          <button
            type="button"
            aria-label="Previous floor"
            onClick={() => go(floor - 1)}
            className="absolute left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center text-lg text-gold-deep hover:text-ink sm:flex"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next floor"
            onClick={() => go(floor + 1)}
            className="absolute right-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center text-lg text-gold-deep hover:text-ink sm:flex"
          >
            ›
          </button>
        </div>

        <footer className="flex flex-col gap-4 border-t border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[0.68rem] tracking-widest uppercase text-muted">
            {utsav.villaFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <button
            type="button"
            onClick={enquire}
            className="shrink-0 bg-gold px-5 py-3 text-[0.7rem] tracking-[0.16em] uppercase text-white hover:bg-gold-deep"
          >
            Enquire
          </button>
        </footer>
      </div>
    </div>
  );
}
