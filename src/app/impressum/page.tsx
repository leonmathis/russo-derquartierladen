import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Russo der Quartierladen",
  description:
    "Impressum von Russo der Quartierladen — Liquid GmbH, Seefeldstrasse 86, 8008 Zürich.",
};

const ROWS: { label: string; value: string | string[] }[] = [
  { label: "Firma", value: "Liquid GmbH" },
  { label: "Adresse", value: ["Seefeldstrasse 86", "8008 Zürich"] },
  { label: "Geschäftsinhaberin", value: "Sandra Städeli" },
  { label: "UID / MWST", value: "CHE-109.689.738" },
];

export default function Impressum() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-2xl px-6 py-20 md:py-28">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-grey">
          Rechtliches
        </p>
        <h1 className="mt-3 font-serif text-[clamp(2.2rem,5vw,3.4rem)]">Impressum</h1>

        <dl className="mt-10 border-y border-line">
          {ROWS.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-1 gap-1 border-b border-line py-5 last:border-b-0 sm:grid-cols-[200px_1fr] sm:gap-6"
            >
              <dt className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-grey">
                {r.label}
              </dt>
              <dd className="font-serif text-lg text-ink">
                {Array.isArray(r.value)
                  ? r.value.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))
                  : r.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 font-sans text-sm text-grey">
          © 2026 Russo der Quartierladen. All Rights Reserved.
        </p>
      </section>
    </main>
  );
}
