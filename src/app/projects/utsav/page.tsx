import type { Metadata } from "next";
import { utsav } from "@/content/utsav";
import { Photo } from "@/components/photo";
import { VillaTypes } from "@/components/villa-types";
import { EnquireForm } from "@/components/enquire-form";

export const metadata: Metadata = {
  title: "Dasara Utsav",
  description: utsav.intro,
};

export default function UtsavPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-cream">
        <Photo
          src="/images/hero-dusk.webp"
          alt="Dasara Utsav"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/70 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-6xl flex-col justify-end px-4 py-10 sm:px-8">
          <h1 className="font-display text-4xl text-white sm:text-6xl">{utsav.name}</h1>
          <p className="mt-3 text-sm text-white/85 sm:text-base">
            {utsav.shortLocation} · {utsav.village}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-8">
          <p className="text-[0.75rem] tracking-[0.2em] uppercase text-gold-deep">The community</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{utsav.headline}</h2>
          <p className="mt-5 text-sm leading-7 text-brown sm:text-base">{utsav.intro}</p>
          <p className="mt-5 break-all text-xs text-muted">RERA {utsav.rera}</p>
        </div>
      </section>

      <section id="villas" className="scroll-mt-20 bg-cream px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.75rem] tracking-[0.2em] uppercase text-gold-deep">Villa types</p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Six 4BHK triplex homes</h2>
          <div className="mt-10">
            <VillaTypes />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-[0.75rem] tracking-[0.2em] uppercase text-gold-deep">Master plan</p>
            <h2 className="mt-2 font-display text-3xl text-ink">6.08 acres</h2>
            <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-brown sm:grid-cols-2">
              {utsav.masterPlan.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-4/3 overflow-hidden bg-cream">
            <Photo
              src={utsav.masterPlan.image}
              alt="Master plan"
              fill
              className="object-contain p-3"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8">
          <p className="text-[0.75rem] tracking-[0.2em] uppercase text-gold-deep">Amenities</p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Everyday living, on the land</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {utsav.amenities.map((item) => (
              <article key={item.title} className="overflow-hidden bg-white">
                <div className="relative aspect-4/3">
                  <Photo
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="px-4 py-5">
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[0.75rem] tracking-[0.2em] uppercase text-gold-deep">Location</p>
            <h2 className="mt-2 font-display text-3xl text-ink">Off Sarjapur. Close to Whitefield.</h2>
            <p className="mt-4 text-sm leading-7 text-brown">{utsav.connectivity}</p>
            <a
              href={utsav.projectMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-gold-deep"
            >
              Open project location →
            </a>
            <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-brown sm:grid-cols-2">
              {utsav.nearby.map((place) => (
                <li key={place} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-gold" />
                  {place}
                </li>
              ))}
            </ul>
          </div>
          <iframe
            title="Dasara Utsav project location"
            src={utsav.projectMap}
            className="h-72 w-full border border-line"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-cream px-4 py-14 pb-28 sm:px-8 md:pb-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[0.75rem] tracking-[0.2em] uppercase text-gold-deep">Enquire</p>
            <h2 className="mt-2 font-display text-3xl text-ink">Request a site visit</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Share your details. We will call you back.
            </p>
          </div>
          <div className="border border-line bg-white p-4 sm:p-8">
            <EnquireForm />
          </div>
        </div>
      </section>
    </>
  );
}
