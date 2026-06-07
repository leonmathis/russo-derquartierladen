import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Prototyp · Russo der Quartierladen",
  description:
    "Prototyp / Redesign-Konzept — nicht die offizielle Website von Russo «Der Quartierladen». Originalbetreiber: Liquid GmbH, Seefeldstrasse 86, 8008 Zürich.",
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

        <div className="mt-8 border-l-2 border-ochre bg-line/40 px-5 py-4">
          <p className="font-sans text-sm leading-relaxed text-ink">
            <span className="font-semibold">Hinweis:</span> Diese Seite ist ein
            unverbindlicher Redesign-Entwurf und nicht die offizielle Website von
            Russo «Der Quartierladen». Es besteht keine geschäftliche Verbindung
            zum unten genannten Betrieb. Für verbindliche Informationen,
            Bestellungen oder Kontakt besuchen Sie bitte{" "}
            <a
              href="https://russo-derquartierladen.ch"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-ochre underline-offset-2 hover:text-ochre"
            >
              russo-derquartierladen.ch
            </a>
            .
          </p>
        </div>

        <p className="mt-12 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-grey">
          Originalbetreiber des modellierten Geschäfts
        </p>
        <dl className="mt-4 border-y border-line">
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

        <p className="mt-10 font-sans text-xs leading-relaxed text-grey">
          Inhalte (Texte, Bilder, Markenelemente) der modellierten Marke gehören
          dem Originalbetreiber. Dieser Prototyp dient ausschliesslich
          Demonstrations- und Konzeptzwecken.
        </p>
      </section>
    </main>
  );
}
