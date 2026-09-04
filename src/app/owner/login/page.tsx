"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function OwnerLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);
    const password = String(new FormData(event.currentTarget).get("password") || "");

    try {
      const res = await fetch("/api/owner/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) throw new Error("Invalid password");
      router.replace("/owner");
      router.refresh();
    } catch {
      setError("That password is not correct.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-cream px-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm border border-line bg-white p-8">
        <p className="text-[0.68rem] tracking-[0.18em] uppercase text-gold-deep">Private</p>
        <h1 className="mt-2 font-display text-3xl text-ink">Owner</h1>
        <p className="mt-2 text-sm text-muted">Enter the site password to view enquiries.</p>
        <label className="mt-6 block text-[0.68rem] tracking-[0.16em] uppercase text-gold-deep">
          Password
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="mt-2 w-full border border-line bg-white px-4 py-3 text-base text-ink outline-none focus:border-gold"
          />
        </label>
        {error ? <p className="mt-3 text-sm text-brown">{error}</p> : null}
        <button
          type="submit"
          disabled={pending}
          className="mt-6 w-full bg-gold px-6 py-3.5 text-[0.72rem] tracking-[0.16em] uppercase text-white hover:bg-gold-deep disabled:opacity-60"
        >
          {pending ? "Checking…" : "Open worksheet"}
        </button>
      </form>
    </section>
  );
}
