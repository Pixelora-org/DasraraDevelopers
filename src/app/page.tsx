import Image from "next/image";
import Link from "next/link";
import { site, whatsappHref } from "@/content/site";
import { utsav } from "@/content/utsav";
import { VillaShowroom } from "@/components/villa-showroom";
import { EnquireForm } from "@/components/enquire-form";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-dvh flex-col justify-end overflow-hidden bg-void pt-20 pb-[5.5rem] md:pb-10">
        <Image
          src="/images/street.png"
          alt="Dasara Utsav gated villa street"
          fill
          priority
          className="object-cover object-[center_38%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/20" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-maroon via-gold to-maroon" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8">
          <p className="font-hindi text-3xl text-gold sm:text-5xl">उत्सव</p>
          <h1 className="mt-1 font-display text-5xl leading-[0.9] uppercase text-ivory sm:text-8xl lg:text-9xl">
            Utsav
          </h1>
          <p className="mt-3 max-w-lg text-xs leading-5 tracking-[0.08em] uppercase text-gold sm:text-base sm:tracking-[0.18em] sm:leading-7">
            4BHK gated villas · Chikkatirupathi · Whitefield / Sarjapur
          </p>

          <div className="mt-6 grid grid-cols-2 gap-px bg-gold/40 sm:mt-8 sm:grid-cols-4">
            {utsav.facts.map((fact) => (
              <div key={fact.label} className="bg-void/80 px-2 py-3 sm:px-4 sm:py-4">
                <p className="font-display text-xl text-gold sm:text-3xl">{fact.value}</p>
                <p className="mt-1 text-[0.55rem] tracking-[0.12em] uppercase text-ivory/60 sm:text-[0.58rem] sm:tracking-[0.16em]">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3">
            <Link
              href="/contact"
              className="bg-gold px-5 py-3.5 text-center text-[0.7rem] tracking-[0.18em] uppercase text-void hover:bg-gold-bright sm:px-8 sm:py-4 sm:text-[0.75rem] sm:tracking-[0.22em]"
            >
              Book site visit
            </Link>
            <a
              href={whatsappHref("Hi, I want details on Dasara Utsav.")}
              target="_blank"
              rel="noreferrer"
              className="border border-gold px-5 py-3.5 text-center text-[0.7rem] tracking-[0.18em] uppercase text-gold hover:bg-gold hover:text-void sm:px-8 sm:py-4 sm:text-[0.75rem] sm:tracking-[0.22em]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <VillaShowroom />

      <section
        id="clubhouse"
        className="relative flex min-h-[70dvh] scroll-mt-16 items-end overflow-hidden md:min-h-dvh"
      >
        <Image src="/images/clubhouse.png" alt="Dasara Utsav clubhouse" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 pb-24 sm:px-8 md:pb-12">
          <p className="text-[0.65rem] tracking-[0.24em] uppercase text-gold sm:text-[0.7rem] sm:tracking-[0.3em]">
            Clubhouse
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase text-ivory sm:text-5xl md:text-7xl">6,620 sq.ft</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-ivory/80 sm:text-base sm:leading-7">
            Pool. Gym. Guest rooms. Hall. Built to show, not to tick a list.
          </p>
        </div>
      </section>

      <section className="relative flex min-h-[70dvh] items-end overflow-hidden md:min-h-dvh">
        <Image src="/images/pool.png" alt="Community swimming pool" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 pb-24 sm:px-8 md:pb-12">
          <h2 className="font-display text-4xl uppercase text-ivory sm:text-5xl md:text-7xl">
            The pool is
            <span className="block text-gold">the statement.</span>
          </h2>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[42vh] sm:min-h-[50vh]">
          <Image
            src={utsav.masterPlan.image}
            alt="Dasara Utsav master plan"
            fill
            className="object-contain bg-panel p-4 sm:p-6"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-maroon px-4 py-12 sm:px-12 sm:py-16">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-gold sm:text-[0.7rem] sm:tracking-[0.28em]">
            6.08 acres
          </p>
          <h2 className="mt-3 font-display text-3xl uppercase sm:text-4xl md:text-5xl">Gated. Vastu. 30-ft roads.</h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 text-sm text-ivory/85 sm:grid-cols-2">
            {utsav.masterPlan.items.map((item) => (
              <li key={item} className="border-l border-gold pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="location" className="relative min-h-[75dvh] overflow-hidden md:min-h-[90svh]">
        <Image src="/images/location-map.png" alt="Location map" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-void/80" />
        <div className="relative z-10 mx-auto flex min-h-[75dvh] max-w-7xl flex-col justify-end px-4 py-12 pb-24 sm:px-8 md:min-h-[90svh] md:pb-16">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-gold sm:text-[0.7rem] sm:tracking-[0.28em]">
            Location
          </p>
          <h2 className="mt-2 font-display text-3xl uppercase sm:text-4xl md:text-6xl">
            Whitefield.
            <span className="block">Sarjapur.</span>
            <span className="block text-gold">Chikkatirupathi.</span>
          </h2>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gold sm:mt-8 sm:gap-x-6 sm:text-sm">
            {utsav.nearby.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-xl break-all text-xs text-ivory/50 sm:text-sm">RERA {utsav.rera}</p>
        </div>
      </section>

      <section className="bg-gold px-4 py-12 text-void sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-hindi text-2xl sm:text-3xl">आएं, देखें</p>
            <h2 className="mt-1 font-display text-3xl uppercase sm:text-4xl md:text-5xl">Come. See the gate.</h2>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="bg-void px-6 py-3.5 text-center text-[0.7rem] tracking-[0.18em] uppercase text-gold hover:bg-maroon sm:px-7 sm:tracking-[0.2em]"
            >
              Book visit
            </Link>
            <a
              href={site.phones[0].href}
              className="border border-void px-6 py-3.5 text-center text-[0.7rem] tracking-[0.18em] uppercase hover:bg-void hover:text-gold sm:px-7"
            >
              {site.phones[0].label}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-void px-4 py-14 pb-28 sm:px-8 sm:py-20 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-gold sm:text-[0.7rem] sm:tracking-[0.28em]">
              Site visit
            </p>
            <h2 className="mt-3 font-display text-3xl uppercase sm:text-4xl">WhatsApp us the villa.</h2>
            <p className="mt-4 text-sm leading-7 text-ivory/65 sm:text-base">
              We confirm a time. You walk the 6.08 acres.
            </p>
            <a href={utsav.brochure} download className="mt-6 inline-block text-gold">
              Download brochure PDF →
            </a>
          </div>
          <EnquireForm />
        </div>
      </section>
    </>
  );
}
