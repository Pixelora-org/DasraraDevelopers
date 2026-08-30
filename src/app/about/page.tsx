import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { utsav } from "@/content/utsav";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dasara Developers builds considered homes in East Bengaluru. Founded in 2010 by Surineni Prasad Naidu.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest-deep pt-32 pb-20 text-cream">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">Since {site.founded}</p>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-7xl">
            Homes with space, quiet, and a real address.
          </h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">The story</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Together we grow.</h2>
            <p className="mt-6 text-base leading-8 text-brown/80">
              Dasara Developers was launched in {site.founded} with a simple brief: affordable,
              well-made homes for families who want more than a flat number. We still work that
              way — collaboratively with buyers, on land that will matter in ten years, not just
              this quarter.
            </p>
            <p className="mt-5 text-base leading-8 text-brown/80">
              Our first focus now is{" "}
              <Link href="/projects/utsav" className="text-copper">
                Dasara Utsav
              </Link>
              , a 6.08-acre gated villa community in Chikkatirupathi. More communities will follow.
              We will not list them until they are real.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-6">
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

      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">Founder</p>
          <h2 className="mt-3 font-display text-5xl">{site.founder.name}</h2>
          <p className="mt-2 text-[0.72rem] tracking-[0.2em] uppercase text-muted">{site.founder.role}</p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl">Vision</h3>
              <p className="mt-3 text-sm leading-7 text-brown/75">
                Affordable, sustainable homes that take price, quality, location, security, privacy,
                and amenities seriously — so a family can find a place that fits how they actually
                live.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl">How we build</h3>
              <p className="mt-3 text-sm leading-7 text-brown/75">
                Clear specifications, gated planning, and partners we name. Utsav is designed with{" "}
                {site.partners[0].name}, {site.partners[0].place}, and brought to market with{" "}
                {site.partners[1].name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">On the land now</p>
          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">{utsav.name}</h2>
              <p className="mt-3 max-w-lg text-cream/70">{utsav.shortLocation}. {utsav.acres} acres. 4BHK triplex villas.</p>
            </div>
            <Link
              href="/projects/utsav"
              className="border border-cream/30 px-6 py-3 text-[0.72rem] tracking-[0.2em] uppercase hover:bg-cream hover:text-ink"
            >
              Open the project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
