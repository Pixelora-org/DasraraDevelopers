import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { utsav } from "@/content/utsav";
import { VillaGallery } from "@/components/villa-gallery";
import { EnquireForm } from "@/components/enquire-form";

export const metadata: Metadata = {
  title: "Dasara Utsav",
  description: utsav.intro,
};

export default function UtsavPage() {
  return (
    <>
      <section className="relative h-[88svh] min-h-[560px] overflow-hidden bg-forest-deep">
        <Image
          src="/images/lifestyle.png"
          alt="Dasara Utsav villa community"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-ink/25" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-14 sm:px-8">
          <p className="text-[0.7rem] tracking-[0.32em] uppercase text-gold">{utsav.kicker}</p>
          <h1 className="mt-3 font-display text-6xl text-cream md:text-8xl">Utsav</h1>
          <p className="mt-4 max-w-xl text-lg text-cream/80">{utsav.shortLocation} · {utsav.village}</p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">The community</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{utsav.headline}</h2>
          <p className="mt-6 text-base leading-8 text-brown/80">{utsav.intro}</p>
          <p className="mt-6 text-[0.72rem] tracking-wide text-muted">RERA {utsav.rera}</p>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        {utsav.pillars.map((pillar, i) => (
          <article
            key={pillar.title}
            className={`px-8 py-12 md:px-14 ${i % 2 === 0 ? "bg-forest text-cream" : "bg-paper text-ink"}`}
          >
            <p className={`text-[0.68rem] tracking-[0.22em] uppercase ${i % 2 === 0 ? "text-gold" : "text-copper"}`}>
              0{i + 1}
            </p>
            <h3 className="mt-3 font-display text-3xl">{pillar.title}</h3>
            <p className={`mt-4 max-w-md text-sm leading-7 ${i % 2 === 0 ? "text-cream/70" : "text-brown/75"}`}>
              {pillar.text}
            </p>
          </article>
        ))}
      </section>

      <section id="villas" className="scroll-mt-20 bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">Villa types</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">Six 4BHK triplex homes.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-brown/75">
            Stilt parking, ground living, and a first-floor family level. Every villa has two car
            parks, lift provision, and Vastu-compliant planning.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {utsav.villaFeatures.map((f) => (
              <li key={f} className="border border-ink/15 px-3 py-1.5 text-[0.7rem] tracking-[0.12em] uppercase text-brown">
                {f}
              </li>
            ))}
          </ul>
          <VillaGallery />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">Master plan</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">A community planned for a quieter day.</h2>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-brown">
              {utsav.masterPlan.items.map((item) => (
                <li key={item} className="border-l border-copper/50 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-paper lg:col-span-7">
            <Image
              src={utsav.masterPlan.image}
              alt="Dasara Utsav master plan"
              fill
              className="object-contain p-3"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden bg-ink">
        <Image src="/images/pool.png" alt="Community swimming pool" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-5 py-16 sm:px-8">
          <div className="max-w-xl text-cream">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">Clubhouse & water</p>
            <h2 className="mt-3 font-display text-5xl">Where every splash brings the day back.</h2>
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">Amenities</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Thoughtful spaces. Stronger community.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {utsav.amenities.map((item) => (
              <article key={item.title} className="border-t border-cream/20 pt-5">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cream/65">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="scroll-mt-20 bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">Location</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Off Sarjapur. Close to Whitefield. Away from the noise.</h2>
            <p className="mt-6 text-base leading-8 text-brown/80">{utsav.connectivity}</p>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-brown">
              {utsav.nearby.map((place) => (
                <li key={place}>— {place}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden bg-paper">
              <Image
                src="/images/location-map.png"
                alt="Dasara Utsav location map"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
            <iframe
              title="Chikkatirupathi on Google Maps"
              src={utsav.projectMap}
              className="h-64 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">Specifications</p>
          <h2 className="mt-3 font-display text-4xl">Built as specified. Finished as promised.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {utsav.specifications.map((spec) => (
              <article key={spec.title} className="border-t border-ink/10 pt-5">
                <h3 className="font-display text-2xl">{spec.title}</h3>
                <p className="mt-2 text-sm leading-7 text-brown/75">{spec.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">Enquire</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Request a site visit.</h2>
            <p className="mt-5 text-base leading-8 text-brown/75">
              Choose a villa type if you already have one in mind. We will confirm a time on
              WhatsApp or email.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a href={site.phones[0].href} className="text-forest">
                {site.phones[0].label}
              </a>
              <a href={site.phones[1].href} className="text-forest">
                {site.phones[1].label}
              </a>
              <a href={utsav.brochure} download className="text-copper">
                Download the brochure PDF →
              </a>
            </div>
          </div>
          <EnquireForm />
        </div>
      </section>
    </>
  );
}
