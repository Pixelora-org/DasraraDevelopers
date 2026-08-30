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
    <section className="bg-cream pt-32 pb-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-copper">Contact</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">Schedule a site visit.</h1>
          <p className="mt-6 text-base leading-8 text-brown/80">
            Walk the land at Chikkatirupathi, or start with a conversation. We reply on WhatsApp
            and email.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-[0.68rem] tracking-[0.2em] uppercase text-muted">Phone</dt>
              <dd className="mt-2 space-y-1">
                {site.phones.map((p) => (
                  <a key={p.href} href={p.href} className="block text-lg text-forest hover:text-copper">
                    {p.label}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.2em] uppercase text-muted">WhatsApp</dt>
              <dd className="mt-2">
                <a
                  href={whatsappHref("Hi, I want to schedule a site visit for Dasara Utsav.")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-forest hover:text-copper"
                >
                  Message us
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.2em] uppercase text-muted">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${site.email}`} className="text-lg text-forest hover:text-copper">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.2em] uppercase text-muted">Office</dt>
              <dd className="mt-2 leading-7 text-brown">
                {site.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <a href={site.address.maps} target="_blank" rel="noreferrer" className="mt-2 inline-block text-copper">
                  Open in Maps →
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.2em] uppercase text-muted">Brochure</dt>
              <dd className="mt-2">
                <a href={utsav.brochure} download className="text-forest hover:text-copper">
                  Download Dasara Utsav PDF
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-ink/10 bg-paper/50 p-6 sm:p-8">
            <EnquireForm />
          </div>
          <iframe
            title="Dasara Developers office"
            src={site.address.embed}
            className="mt-6 h-72 w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
