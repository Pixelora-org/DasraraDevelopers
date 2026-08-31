"use client";

import Image from "next/image";
import { useState } from "react";
import { utsav, type Villa } from "@/content/utsav";
import { whatsappHref } from "@/content/site";
import { Lightbox } from "@/components/lightbox";

export function VillaShowroom() {
  const [active, setActive] = useState<Villa>(utsav.villas[0]);
  const [plan, setPlan] = useState(false);

  return (
    <section id="villas" className="scroll-mt-16 bg-void md:scroll-mt-20">
      <div className="border-y border-gold/30 bg-panel">
        <div className="hide-scroll mx-auto flex max-w-7xl snap-x snap-mandatory gap-1 overflow-x-auto px-2 sm:px-4">
          {utsav.villas.map((villa) => {
            const on = villa.slug === active.slug;
            return (
              <button
                key={villa.slug}
                type="button"
                onClick={() => setActive(villa)}
                className={`snap-start shrink-0 px-3 py-3 text-[0.62rem] tracking-[0.12em] uppercase sm:px-5 sm:py-4 sm:text-[0.68rem] sm:tracking-[0.2em] ${
                  on ? "bg-gold text-void" : "text-ivory/60 hover:text-gold"
                }`}
              >
                {villa.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-12">
        <button
          type="button"
          className="relative aspect-4/5 w-full sm:min-h-[50vh] lg:col-span-8 lg:aspect-auto lg:min-h-[85svh]"
          onClick={() => setPlan(true)}
        >
          <Image
            src={active.image}
            alt={`${active.name} 4BHK villa`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 66vw, 100vw"
          />
          <span className="absolute right-3 bottom-3 bg-gold px-3 py-2 text-[0.6rem] tracking-[0.14em] uppercase text-void sm:right-5 sm:bottom-5 sm:px-4 sm:text-[0.65rem]">
            Floor plan
          </span>
        </button>

        <div className="flex flex-col justify-center border-t border-gold/30 bg-void px-4 py-8 sm:px-6 sm:py-12 lg:col-span-4 lg:border-t-0 lg:border-l lg:px-10">
          <p className="text-[0.62rem] tracking-[0.2em] uppercase text-gold sm:text-[0.68rem] sm:tracking-[0.28em]">
            {active.facing}
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase text-ivory sm:text-5xl">{active.name}</h2>
          <p className="mt-2 text-sm text-ivory/50">4 BHK triplex</p>

          <dl className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
            <Row label="Plot" value={`${active.plot} · ${active.plotSqft} sq.ft`} />
            <Row label="Built-up" value={`${active.builtUp} sq.ft`} />
            <Row label="Carpet" value={`${active.carpet} sq.ft`} />
            <Row label="Parking" value="2 cars · lift provision" />
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10">
            <button
              type="button"
              onClick={() => setPlan(true)}
              className="bg-gold py-3.5 text-[0.7rem] tracking-[0.16em] uppercase text-void hover:bg-gold-bright sm:text-[0.72rem] sm:tracking-[0.2em]"
            >
              View floor plans
            </button>
            <a
              href={whatsappHref(`Hi, I want details on Dasara Utsav — ${active.name} (${active.plot}).`)}
              target="_blank"
              rel="noreferrer"
              className="border border-gold py-3.5 text-center text-[0.7rem] tracking-[0.16em] uppercase text-gold hover:bg-gold hover:text-void sm:text-[0.72rem] sm:tracking-[0.2em]"
            >
              WhatsApp this villa
            </a>
          </div>
        </div>
      </div>
      {plan ? <Lightbox src={active.plan} alt={`${active.name} floor plans`} onClose={() => setPlan(false)} /> : null}
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-gold/20 pb-3">
      <dt className="shrink-0 text-[0.58rem] tracking-[0.14em] uppercase text-gold sm:text-[0.62rem] sm:tracking-[0.18em]">
        {label}
      </dt>
      <dd className="text-right text-sm text-ivory sm:text-base">{value}</dd>
    </div>
  );
}
