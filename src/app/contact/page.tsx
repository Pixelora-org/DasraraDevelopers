import type { Metadata } from "next";
import { site } from "@/content/site";
import { utsav } from "@/content/utsav";
import { EnquireForm } from "@/components/enquire-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Schedule a Dasara Utsav site visit or speak with Dasara Developers in Bengaluru.",
};

export default function ContactPage() {
  return (
    <section className="bg-cream pb-16 pt-10 sm:pb-20 sm:pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-deep">Contact</p>
          <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Book a site visit</h1>
          <p className="mt-5 text-sm leading-7 text-brown sm:text-base">
            Walk the land at Chikkatirupathi. Leave your details and we will call you back.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-[0.68rem] tracking-[0.16em] uppercase text-gold-deep">Phone</dt>
              <dd className="mt-2 space-y-1">
                {site.phones.map((p) => (
                  <a key={p.href} href={p.href} className="block text-lg text-ink hover:text-gold-deep">
                    {p.label}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.16em] uppercase text-gold-deep">Email</dt>
              <dd className="mt-2 space-y-1">
                {site.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="block text-lg break-all text-ink hover:text-gold-deep">
                    {email}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.16em] uppercase text-gold-deep">Address</dt>
              <dd className="mt-2 leading-7 text-brown">
                {site.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <a href={site.address.maps} target="_blank" rel="noreferrer" className="mt-2 inline-block text-gold-deep">
                  Open in Maps →
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] tracking-[0.16em] uppercase text-gold-deep">Brochure</dt>
              <dd className="mt-2">
                <a href={utsav.brochure} download className="text-ink hover:text-gold-deep">
                  Download Dasara Utsav PDF
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-line bg-white p-4 sm:p-8">
            <EnquireForm />
          </div>
          <iframe
            title="Dasara Utsav site"
            src={site.address.embed}
            className="mt-6 h-72 w-full border border-line"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
