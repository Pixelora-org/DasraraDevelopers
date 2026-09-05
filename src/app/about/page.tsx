import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/photo";
import { site } from "@/content/site";
import { utsav } from "@/content/utsav";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dasara Developers builds gated homes in East Bengaluru. Founded in 2010 by Kodanda Reddy.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-20">
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-deep">Since {site.founded}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-6xl">
            East Bengaluru. Gated villas. A name on the gate.
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-deep">The story</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{site.motto}</h2>
            <p className="mt-5 text-sm leading-7 text-brown sm:text-base">
              Dasara Developers launched in {site.founded} to build homes families can show, live in,
              and hold. We still work that way, with buyers, on land that will matter in ten years.
            </p>
            <p className="mt-4 text-sm leading-7 text-brown sm:text-base">
              Right now the flagship is{" "}
              <Link href="/projects/utsav" className="text-gold-deep">
                Dasara Utsav
              </Link>
              : 6.08 acres in Chikkatirupathi. More communities will follow when they are real.
            </p>
          </div>
          <div className="relative aspect-4/5 overflow-hidden lg:col-span-6">
            <Photo
              src="/images/pool-clean.webp"
              alt="Dasara Utsav clubhouse pool"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-14 sm:grid-cols-2 sm:px-8">
          <figure className="relative aspect-4/3 overflow-hidden bg-cream">
            <Photo
              src="/images/community.webp"
              alt="Dasara Utsav villa street"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/55 to-transparent px-4 py-4 text-[0.72rem] tracking-[0.16em] uppercase text-white">
              The community
            </figcaption>
          </figure>
          <figure className="relative aspect-4/3 overflow-hidden bg-cream">
            <Photo
              src="/images/amenities/clubhouse.webp"
              alt="Dasara Utsav clubhouse"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/55 to-transparent px-4 py-4 text-[0.72rem] tracking-[0.16em] uppercase text-white">
              The clubhouse
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-cream px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-deep">Founder</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-5xl">{site.founder.name}</h2>
          <p className="mt-2 text-[0.72rem] tracking-[0.16em] uppercase text-muted">{site.founder.role}</p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl text-gold-deep">Vision</h3>
              <p className="mt-3 text-sm leading-7 text-brown">
                Homes that take price, quality, location, security, privacy, and amenities seriously,
                so a family finds a place that fits how they live.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-gold-deep">How we build</h3>
              <p className="mt-3 text-sm leading-7 text-brown">
                Named partners. Named specs. Utsav is designed with {site.partners[0].name},{" "}
                {site.partners[0].place}, and brought to market with {site.partners[1].name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 pb-28 sm:px-8 md:pb-16">
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-deep">On the land now</p>
          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl text-ink md:text-5xl">{utsav.name}</h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
                {utsav.shortLocation}. {utsav.acres} acres. 4BHK triplex villas.
              </p>
            </div>
            <Link
              href="/projects/utsav"
              className="inline-flex bg-gold px-6 py-3 text-center text-[0.72rem] tracking-[0.16em] uppercase text-white hover:bg-gold-deep"
            >
              Open the project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
