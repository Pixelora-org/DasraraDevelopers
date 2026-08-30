import Image from "next/image";
import Link from "next/link";
import { site, whatsappHref } from "@/content/site";
import { utsav } from "@/content/utsav";

export default function HomePage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 pt-28 pb-8 sm:px-8 lg:grid-cols-12 lg:pt-32 lg:pb-10">
          <div className="lg:col-span-7">
            <p className="fade-up text-[0.7rem] tracking-[0.28em] uppercase text-copper">
              {utsav.kicker} · {utsav.village}
            </p>
            <h1 className="fade-up delay-1 mt-4 font-display text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
              Dasara <span className="italic text-copper">Utsav</span>
            </h1>
          </div>
          <div className="fade-up delay-2 lg:col-span-5 lg:pb-2">
            <p className="max-w-md text-base leading-8 text-brown/80">
              Premium 4BHK villas between Whitefield and Sarjapur. A gated community on 6.08 acres
              — quiet, connected, and built to live in.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/projects/utsav"
                className="bg-forest px-6 py-3 text-[0.72rem] tracking-[0.2em] uppercase text-cream hover:bg-forest-deep"
              >
                Explore the villas
              </Link>
              <a
                href={whatsappHref("Hi, I want details on Dasara Utsav.")}
                target="_blank"
                rel="noreferrer"
                className="border border-ink/20 px-6 py-3 text-[0.72rem] tracking-[0.2em] uppercase text-ink hover:border-ink"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative aspect-[16/9] overflow-hidden bg-paper sm:aspect-[2/1]">
            <Image
              src="/images/street.png"
              alt="Dasara Utsav villa street at dusk"
              fill
              priority
              className="object-cover object-[center_40%]"
              sizes="(min-width: 1152px) 1152px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-cream/10 md:grid-cols-4">
          {utsav.facts.map((fact) => (
            <div key={fact.label} className="bg-forest px-6 py-10 text-center md:py-14">
              <p className="font-display text-4xl text-gold md:text-5xl">{fact.value}</p>
              <p className="mt-2 text-[0.68rem] tracking-[0.2em] uppercase text-cream/60">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">The address</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-6xl">
              Between Whitefield &amp; Sarjapur. In the heart of nature.
            </h2>
            <p className="mt-6 text-base leading-8 text-brown/80">{utsav.intro}</p>
            <p className="mt-6 font-display text-2xl italic text-forest">{utsav.promise}</p>
            <Link
              href="/projects/utsav#location"
              className="mt-8 inline-block text-[0.72rem] tracking-[0.2em] uppercase text-copper"
            >
              See connectivity →
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-7 lg:aspect-[5/4]">
            <Image
              src="/images/lifestyle.png"
              alt="Dasara Utsav villa community"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">Six villa types</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Named homes, not unit numbers.</h2>
            </div>
            <Link
              href="/projects/utsav#villas"
              className="text-[0.72rem] tracking-[0.2em] uppercase text-forest"
            >
              Compare all six →
            </Link>
          </div>
          <div className="mt-12 flex gap-5 overflow-x-auto pb-4">
            {utsav.villas.map((villa) => (
              <Link
                key={villa.slug}
                href={`/projects/utsav#${villa.slug}`}
                className="group min-w-[260px] flex-1 bg-cream"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={villa.image}
                    alt={`${villa.name} 4BHK villa`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="280px"
                  />
                </div>
                <div className="px-5 py-5">
                  <p className="font-display text-2xl">{villa.name}</p>
                  <p className="mt-1 text-[0.7rem] tracking-[0.16em] uppercase text-muted">
                    {villa.facing} · {villa.plot}
                  </p>
                  <p className="mt-3 text-sm text-brown">
                    {villa.builtUp} sq.ft built-up · {villa.carpet} carpet
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-deep text-cream">
        <Image
          src="/images/clubhouse.png"
          alt="Dasara Utsav clubhouse"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/80 to-forest-deep/40" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">Clubhouse</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              6,620 sq.ft to refresh, rejuvenate, reconnect.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-cream/75">
              Pool, gym, meditation, indoor games, guest rooms, and a hall for the evenings that
              make a community feel like one.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-5 self-end text-sm text-cream/80">
            {utsav.amenities.slice(0, 8).map((item) => (
              <li key={item.title} className="border-t border-cream/20 pt-4">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">The makers</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {site.founder.name}
            </h2>
            <p className="mt-2 text-[0.72rem] tracking-[0.2em] uppercase text-muted">{site.founder.role}</p>
            <p className="mt-6 max-w-lg text-base leading-8 text-brown/80">
              Dasara Developers was launched in {site.founded} to build homes people can actually
              live in — priced with care, finished with honesty, and placed where the city is
              growing next. Our motto is simple: {site.motto}.
            </p>
            <Link href="/about" className="mt-8 inline-block text-[0.72rem] tracking-[0.2em] uppercase text-copper">
              Our story →
            </Link>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden">
            <Image
              src="/images/peaceful.png"
              alt="Landscaped living at Dasara Utsav"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">Visit the land</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">Walk the 6.08 acres.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-brown/75">
            See the entrance, the clubhouse, and a villa type that fits your family. We will take
            you through it in person.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-forest px-8 py-3.5 text-[0.72rem] tracking-[0.2em] uppercase text-cream hover:bg-forest-deep"
            >
              Book a site visit
            </Link>
            <a
              href={site.phones[0].href}
              className="border border-ink/20 px-8 py-3.5 text-[0.72rem] tracking-[0.2em] uppercase text-ink hover:border-ink"
            >
              Call {site.phones[0].label}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
