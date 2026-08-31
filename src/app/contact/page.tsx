import type { Metadata } from "next";
import { site, whatsappHref } from "@/content/site";
import { utsav } from "@/content/utsav";
import { EnquireForm } from "@/components/enquire-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Schedule a Dasara Utsav site visit or speak with Dasara Developers in Bengaluru.",
};

export default function ContactPage() {
  return (
    <section className="bg-void pt-24 pb-16 sm:pt-32 sm:pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="font-hindi text-3xl text-gold">संपर्क</p>
          <h1 className="mt-3 font-display text-4xl uppercase sm:text-5xl md:text-6xl">Book the visit.</h1>
          <p className="mt-6 text-base leading-8 text-ivory/70">
            Walk the land at Chikkatirupathi. We reply on WhatsApp and phone.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-[0.68rem] tracking-[0.2em] uppercase text-gold">Phone</dt>
              <dd className="mt-2 space-y-1">
                {site.phones.map((p) => (
                  <a key={p.href} href={p.href} className="block text-lg text-ivory hover:text-gold">
                    {p.label}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.2em] uppercase text-gold">WhatsApp</dt>
              <dd className="mt-2">
                <a
                  href={whatsappHref("Hi, I want to schedule a site visit for Dasara Utsav.")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-gold hover:text-gold-bright"
                >
                  Message us now
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.2em] uppercase text-gold">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${site.email}`} className="text-lg break-all text-ivory hover:text-gold">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.2em] uppercase text-gold">Office</dt>
              <dd className="mt-2 leading-7 text-ivory/75">
                {site.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <a href={site.address.maps} target="_blank" rel="noreferrer" className="mt-2 inline-block text-gold">
                  Open in Maps →
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.2em] uppercase text-gold">Brochure</dt>
              <dd className="mt-2">
                <a href={utsav.brochure} download className="text-ivory hover:text-gold">
                  Download Dasara Utsav PDF
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-gold/40 bg-panel p-4 sm:p-8">
            <EnquireForm />
          </div>
          <iframe
            title="Dasara Developers office"
            src={site.address.embed}
            className="mt-6 h-72 w-full border border-gold/30"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
