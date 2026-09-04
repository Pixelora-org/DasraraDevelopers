import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { utsav } from "@/content/utsav";

export default function HomePage() {
  return (
    <>
      <section className="relative h-svh min-h-svh overflow-hidden bg-cream">
        <Image
          src="/images/street.png"
          alt="Dasara Utsav villa community"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ink/55 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full min-h-svh max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:px-8 sm:pb-20">
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-white sm:text-6xl">
            Creating considered homes in East Bengaluru.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
            Premium 4BHK gated villas at Dasara Utsav, Chikkatirupathi, between Whitefield and
            Sarjapur.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects/utsav"
              className="bg-gold px-6 py-3.5 text-center text-[0.72rem] tracking-[0.16em] uppercase text-white hover:bg-gold-deep"
            >
              View project
            </Link>
            <Link
              href="/contact"
              className="border border-white/70 px-6 py-3.5 text-center text-[0.72rem] tracking-[0.16em] uppercase text-white hover:bg-white hover:text-ink"
            >
              Enquire
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-8 md:grid-cols-4">
          {utsav.facts.map((fact) => (
            <div key={fact.label} className="border-t border-gold pt-4">
              <p className="font-display text-3xl text-gold-deep">{fact.value}</p>
              <p className="mt-1 text-[0.68rem] tracking-[0.16em] uppercase text-muted">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-deep">Our presence</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{utsav.name}</h2>
            <p className="mt-2 text-sm text-brown">
              {utsav.village} · {utsav.shortLocation}
            </p>
            <p className="mt-5 text-sm leading-7 text-muted sm:text-base">{utsav.intro}</p>
            <Link
              href="/projects/utsav"
              className="mt-6 inline-block text-[0.72rem] tracking-[0.16em] uppercase text-gold-deep"
            >
              Explore Utsav →
            </Link>
          </div>
          <div className="relative aspect-5/4 overflow-hidden lg:col-span-7">
            <Image
              src="/images/lifestyle.png"
              alt="Dasara Utsav"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8">
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-deep">The makers</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{site.founder.name}</h2>
          <p className="mt-1 text-[0.72rem] tracking-[0.16em] uppercase text-muted">{site.founder.role}</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-brown">
            Dasara Developers was launched in {site.founded}. Our motto is {site.motto}. We build
            gated homes with named specifications and a real address.
          </p>
          <Link href="/about" className="mt-6 inline-block text-[0.72rem] tracking-[0.16em] uppercase text-gold-deep">
            Our story →
          </Link>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 pb-28 sm:px-8 md:flex-row md:items-end md:pb-16">
          <div>
            <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-deep">Visit the land</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Request a site visit</h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
              Walk Dasara Utsav at Chikkatirupathi. Leave your details and we will call you back.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-gold px-6 py-3.5 text-center text-[0.72rem] tracking-[0.16em] uppercase text-white hover:bg-gold-deep"
          >
            Enquire
          </Link>
        </div>
      </section>
    </>
  );
}
