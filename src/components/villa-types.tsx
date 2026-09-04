"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { utsav, type Villa } from "@/content/utsav";
import { VillaCard } from "@/components/villa-card";
import { Lightbox } from "@/components/lightbox";

export function VillaTypes() {
  const [active, setActive] = useState<Villa | null>(null);
  const [planOpen, setPlanOpen] = useState(false);

  useEffect(() => {
    if (!active) return;
    document.getElementById("villa-showroom")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [active]);

  return (
    <>
      {active ? (
        <div
          id="villa-showroom"
          className="mb-10 scroll-mt-24 overflow-hidden border border-line bg-white lg:grid lg:grid-cols-12"
        >
          <div className="relative aspect-4/3 bg-cream lg:col-span-7 lg:aspect-auto lg:min-h-[32rem]">
            <Image
              src={active.image}
              alt={`${active.name} villa`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-cream p-6 sm:p-8 lg:col-span-5">
            <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold-deep">Dasara</p>
            <h3 className="mt-1 font-display text-3xl text-ink sm:text-4xl">{active.name}</h3>
            <p className="mt-3 text-[0.72rem] tracking-[0.12em] uppercase text-brown">
              {active.facing} ({active.plot})
            </p>

            <dl className="mt-6 space-y-3 border-y border-gold py-4 text-sm">
              <Row label="Total built-up area" value={`${active.builtUp} sq.ft`} />
              <Row label="Total carpet area" value={`${active.carpet} sq.ft`} />
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

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setPlanOpen(true)}
                className="bg-gold px-5 py-3 text-[0.7rem] tracking-[0.16em] uppercase text-white hover:bg-gold-deep"
              >
                View floor plans
              </button>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="border border-line bg-white px-5 py-3 text-[0.7rem] tracking-[0.16em] uppercase text-brown hover:border-gold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {utsav.villas.map((villa) => (
          <VillaCard
            key={villa.slug}
            villa={villa}
            selected={active?.slug === villa.slug}
            onSelect={(next) => setActive(next)}
          />
        ))}
      </div>

      {planOpen && active ? (
        <Lightbox src={active.plan} alt={`${active.name} floor plans`} onClose={() => setPlanOpen(false)} />
      ) : null}
    </>
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
