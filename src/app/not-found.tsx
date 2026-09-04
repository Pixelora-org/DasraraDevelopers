import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-deep">Page not found</p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">This page is not here.</h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-brown">
          The link may be old. Start from home or open Dasara Utsav.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="bg-gold px-6 py-3.5 text-center text-[0.72rem] tracking-[0.16em] uppercase text-white hover:bg-gold-deep"
          >
            Home
          </Link>
          <Link
            href="/projects/utsav"
            className="border border-line px-6 py-3.5 text-center text-[0.72rem] tracking-[0.16em] uppercase text-ink hover:border-gold"
          >
            Dasara Utsav
          </Link>
        </div>
      </div>
    </section>
  );
}
