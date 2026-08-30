"use client";

import Image from "next/image";
import { useState } from "react";
import { utsav, type Villa } from "@/content/utsav";
import { Lightbox } from "@/components/lightbox";

export function VillaGallery() {
  const [open, setOpen] = useState<Villa | null>(null);

  return (
    <>
      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {utsav.villas.map((villa) => (
          <article key={villa.slug} id={villa.slug} className="scroll-mt-28 bg-cream">
            <button
              type="button"
              className="relative block aspect-[4/5] w-full overflow-hidden"
              onClick={() => setOpen(villa)}
            >
              <Image
                src={villa.image}
                alt={`${villa.name} villa`}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
              />
            </button>
            <div className="px-5 py-6">
              <p className="text-[0.68rem] tracking-[0.2em] uppercase text-copper">{villa.facing}</p>
              <h3 className="mt-1 font-display text-3xl">{villa.name}</h3>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm text-brown">
                <div>
                  <dt className="text-[0.62rem] tracking-[0.16em] uppercase text-muted">Plot</dt>
                  <dd>
                    {villa.plot} · {villa.plotSqft} sq.ft
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.62rem] tracking-[0.16em] uppercase text-muted">Built-up</dt>
                  <dd>{villa.builtUp} sq.ft</dd>
                </div>
                <div>
                  <dt className="text-[0.62rem] tracking-[0.16em] uppercase text-muted">Carpet</dt>
                  <dd>{villa.carpet} sq.ft</dd>
                </div>
                <div>
                  <dt className="text-[0.62rem] tracking-[0.16em] uppercase text-muted">Type</dt>
                  <dd>4 BHK triplex</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => setOpen(villa)}
                className="mt-5 text-[0.7rem] tracking-[0.18em] uppercase text-forest"
              >
                View floor plans →
              </button>
            </div>
          </article>
        ))}
      </div>
      {open ? (
        <Lightbox src={open.plan} alt={`${open.name} floor plans`} onClose={() => setOpen(null)} />
      ) : null}
    </>
  );
}
