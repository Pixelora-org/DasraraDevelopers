"use client";

import { FormEvent, useState } from "react";
import { site, whatsappHref } from "@/content/site";
import { utsav } from "@/content/utsav";

const types = ["Any villa", ...utsav.villas.map((v) => `${v.name} · ${v.plot}`)];

export function EnquireForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const villa = String(data.get("villa") || "Any villa");
    const message = String(data.get("message") || "").trim();

    const body = [
      `Site visit request — Dasara Utsav`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      `Villa: ${villa}`,
      message ? `Note: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappHref(body), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-gold/40 bg-paper/60 px-6 py-10 text-center">
        <p className="font-display text-3xl text-forest">We have your request.</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          WhatsApp and email should have opened. If they did not, call {site.phones[0].label}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
      <Field label="Full name" name="name" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" />
      <label className="block text-[0.68rem] tracking-[0.16em] uppercase text-muted">
        Villa type
        <select
          name="villa"
          className="mt-2 w-full border border-ink/15 bg-transparent px-4 py-3 text-sm tracking-normal text-ink outline-none focus:border-copper"
        >
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className={`${compact ? "" : "sm:col-span-2"} block text-[0.68rem] tracking-[0.16em] uppercase text-muted`}>
        Message
        <textarea
          name="message"
          rows={4}
          placeholder="Preferred day for a site visit"
          className="mt-2 w-full border border-ink/15 bg-transparent px-4 py-3 text-sm tracking-normal text-ink outline-none placeholder:text-ink/30 focus:border-copper"
        />
      </label>
      <div className={compact ? "" : "sm:col-span-2"}>
        <button
          type="submit"
          className="w-full bg-forest px-6 py-3.5 text-[0.72rem] tracking-[0.2em] uppercase text-cream transition-colors hover:bg-forest-deep"
        >
          Request a site visit
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-[0.68rem] tracking-[0.16em] uppercase text-muted">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-ink/15 bg-transparent px-4 py-3 text-sm tracking-normal text-ink outline-none focus:border-copper"
      />
    </label>
  );
}
