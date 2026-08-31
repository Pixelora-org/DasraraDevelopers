import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { utsav } from "@/content/utsav";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dasara Developers builds gated homes in East Bengaluru. Founded in 2010 by Surineni Prasad Naidu.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-gold/30 bg-void pt-24 pb-12 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">Since {site.founded}</p>
          <h1 className="mt-4 font-display text-3xl uppercase leading-tight sm:text-5xl md:text-7xl">
            East Bengaluru. Gated villas. A name on the gate.
          </h1>
        </div>
      </section>

      <section className="bg-void">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">The story</p>
            <h2 className="mt-4 font-display text-3xl uppercase sm:text-4xl md:text-5xl">{site.motto}</h2>
            <p className="mt-6 text-base leading-8 text-ivory/70">
              Dasara Developers launched in {site.founded} to build homes families can show, live in,
              and hold. We still work that way — with buyers, on land that will matter in ten years.
            </p>
            <p className="mt-5 text-base leading-8 text-ivory/70">
              Right now the flagship is{" "}
              <Link href="/#villas" className="text-gold">
                Dasara Utsav
              </Link>
              : 6.08 acres in Chikkatirupathi. More communities will follow when they are real.
            </p>
          </div>
          <div className="gold-frame relative aspect-4/5 overflow-hidden lg:col-span-6">
            <Image
              src="/images/lifestyle-wide.png"
              alt="Dasara Utsav living"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-panel px-4 py-12 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">Founder</p>
          <h2 className="mt-3 font-display text-3xl uppercase sm:text-5xl">{site.founder.name}</h2>
          <p className="mt-2 text-[0.72rem] tracking-[0.2em] uppercase text-gold">{site.founder.role}</p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl uppercase text-gold">Vision</h3>
              <p className="mt-3 text-sm leading-7 text-ivory/70">
                Homes that take price, quality, location, security, privacy, and amenities seriously
                — so a family finds a place that fits how they live.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl uppercase text-gold">How we build</h3>
              <p className="mt-3 text-sm leading-7 text-ivory/70">
                Named partners. Named specs. Utsav is designed with {site.partners[0].name},{" "}
                {site.partners[0].place}, and brought to market with {site.partners[1].name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-maroon">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">On the land now</p>
          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl uppercase md:text-5xl">{utsav.name}</h2>
              <p className="mt-3 max-w-lg text-ivory/70">
                {utsav.shortLocation}. {utsav.acres} acres. 4BHK triplex villas.
              </p>
            </div>
            <Link
              href="/#villas"
              className="inline-flex border border-gold px-6 py-3 text-center text-[0.72rem] tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-void"
            >
              Open the project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
