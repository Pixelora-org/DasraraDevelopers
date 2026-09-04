"use client";

import { FormEvent, useState } from "react";
import { utsav } from "@/content/utsav";

const types = ["Any villa", ...utsav.villas.map((v) => `${v.name} · ${v.plot}`)];

export function EnquireForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);
    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      villa: String(data.get("villa") || "Any villa"),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Could not submit");
      setSent(true);
    } catch {
      setError("Something went wrong. Please call us or try again.");
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="border border-gold/40 bg-cream px-6 py-10 text-center">
        <p className="font-display text-2xl text-ink">Thank you.</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          We have your details. Our team will call you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Full name" name="name" autoComplete="name" required />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
      <Field label="Email" name="email" type="email" autoComplete="email" />
      <label className="block text-[0.68rem] tracking-[0.16em] uppercase text-gold-deep">
        Villa type
        <select
          name="villa"
          className="mt-2 w-full border border-line bg-white px-4 py-3 text-base text-ink outline-none focus:border-gold"
        >
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block text-[0.68rem] tracking-[0.16em] uppercase text-gold-deep sm:col-span-2">
        Message
        <textarea
          name="message"
          rows={4}
          placeholder="Preferred day for a site visit"
          className="mt-2 w-full border border-line bg-white px-4 py-3 text-base text-ink outline-none placeholder:text-muted focus:border-gold"
        />
      </label>
      {error ? <p className="text-sm text-brown sm:col-span-2">{error}</p> : null}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-gold px-6 py-3.5 text-[0.72rem] tracking-[0.18em] uppercase text-white hover:bg-gold-deep disabled:opacity-60"
        >
          {pending ? "Sending..." : "Request a site visit"}
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
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block text-[0.68rem] tracking-[0.16em] uppercase text-gold-deep">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full border border-line bg-white px-4 py-3 text-base text-ink outline-none focus:border-gold"
      />
    </label>
  );
}
