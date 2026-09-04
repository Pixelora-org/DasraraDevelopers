import { type Villa } from "@/content/utsav";

export function VillaCard({
  villa,
  selected,
  onSelect,
}: {
  villa: Villa;
  selected?: boolean;
  onSelect: (villa: Villa) => void;
}) {
  return (
    <article id={villa.slug} className="scroll-mt-24">
      <button
        type="button"
        onClick={() => onSelect(villa)}
        className={`w-full border bg-white p-5 text-left sm:p-7 ${
          selected ? "border-gold" : "border-line"
        }`}
      >
        <p className="text-[0.68rem] tracking-[0.18em] uppercase text-gold-deep">{villa.facing}</p>
        <h3 className="mt-2 font-display text-3xl text-ink">{villa.name}</h3>
        <p className="mt-1 text-sm text-muted">4 BHK triplex</p>

        <dl className="mt-6 space-y-3 text-sm">
          <Row label="Plot" value={`${villa.plot} · ${villa.plotSqft} sq.ft`} />
          <Row label="Built-up" value={`${villa.builtUp} sq.ft`} />
          <Row label="Carpet" value={`${villa.carpet} sq.ft`} />
          <Row label="Parking" value="2 cars · lift provision" />
        </dl>

        <span className="mt-6 inline-block bg-gold px-5 py-3 text-[0.7rem] tracking-[0.16em] uppercase text-white">
          {selected ? "Viewing villa" : "View villa"}
        </span>
      </button>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-line pb-2">
      <dt className="text-[0.62rem] tracking-[0.16em] uppercase text-gold-deep">{label}</dt>
      <dd className="text-right text-brown">{value}</dd>
    </div>
  );
}
