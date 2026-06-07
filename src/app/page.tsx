import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import BasketBackdrop from "@/components/BasketBackdrop";
import Menu from "@/components/Menu";

/* content 1:1 with russo-derquartierladen.ch, in our rustic-simple identity.
   The basket illustration is the centerpiece: fixed, oversized, fading on scroll.
   Order: Hero → Story → Instagram. */

const hasAsset = (file: string) =>
  fs.existsSync(path.join(process.cwd(), "public", file));

const DIRECTIONS = "https://maps.app.goo.gl/6BTtZZDaA2BuHvFZA";
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.6381123120605!2d8.551914!3d47.360462899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa763b1ea93fd%3A0xeca3575aa8d8c6b5!2sRusso%20-%20Der%20Quartierladen!5e0!3m2!1sen!2sch!4v1780861415212!5m2!1sen!2sch";

export default function Home() {
  const hasBasket = hasAsset("basket.png");
  const hasStorefront = hasAsset("storefront.jpg");

  return (
    <main id="top" className="relative flex-1">
      {hasBasket && <BasketBackdrop />}

      {/* ── Hero — exactly one screen (minus the 5rem nav); the basket slot
           and the title share equal, flex-distributed gaps on every device.
           The visible basket is the fixed backdrop, anchored to #basket-slot. ── */}
      <section className="relative z-10 flex h-[calc(100svh-5rem)] flex-col items-center justify-evenly px-6 text-center">
        <div
          id="basket-slot"
          aria-hidden
          className="w-[80vw] aspect-[1032/1004] md:h-[44vh] md:w-auto md:aspect-[1920/1004]"
        />
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-grey">
            Seefeld · Zürich
          </p>
          <h1 className="mt-3 font-serif text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.04]">
            Genuss auf Italienisch
          </h1>
        </div>
      </section>

      {/* ── Story — photo on top, text below ─────────────────── */}
      <section id="ueber" className="relative z-10 border-t border-line">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:py-16">
          {hasStorefront && (
            <div className="mb-12 overflow-hidden">
              <Image
                src="/storefront.jpg"
                alt="Russo der Quartierladen an der Seefeldstrasse 86, Zürich"
                width={1169}
                height={791}
                className="h-auto w-full"
              />
            </div>
          )}

          <div className="space-y-5 font-serif text-[1.26rem] leading-relaxed text-ink/90">
            <p>
              Zwanzig Jahre war der Quartierladen Russo eine Institution bei der Uni.
              Nun ist er zurück und bietet Typisches aus Italien mitten im Zürcher Seefeld.
            </p>
            <p>
              Am Morgen Caffè und Cornetto ripieno. Für den Mittagshunger Focacce, Panini
              caldi, Pinse romane, Piadine, Insalate, Lasagne e Dolci. Italo-Klassiker zum
              Verschenken wie Pesto, Prosciutto und Prosecco. Ausserdem bieten wir:
              schmackhafte Degustationen und führen Caterings durch.
            </p>
            <p>
              Wer den Russo kennt, weiss: Hier wirst du schon nach kurzer Zeit mit Namen
              begrüsst und man freut sich über eine chiacchierata.
            </p>
          </div>

          <p className="mt-8 font-serif text-2xl">
            Ci vediamo! <span className="text-grey">Dein Russo-Team</span>
          </p>
        </div>
      </section>

      {/* ── Menu / Karte ─────────────────────────────────────── */}
      <Menu />

      {/* ── Instagram — heading + handle ─────────────────────── */}
      <section id="instagram" className="relative z-10 border-t border-line">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ochre">
            Instagram
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.8rem,3.2vw,2.4rem)]">
            Folgen Sie uns auf Instagram
          </h2>
          <a
            href="https://instagram.com/russoderquartierladen"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block font-sans text-sm text-ink underline decoration-1 underline-offset-4 transition-colors hover:text-ochre"
          >
            @russoderquartierladen
          </a>
        </div>
      </section>

      {/* ── Standort / Anfahrt — map embed + address & hours ─── */}
      <section id="anfahrt" className="relative z-10 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ochre">
              Standort
            </p>
            <h2 className="mt-3 font-serif text-[clamp(1.8rem,3.2vw,2.4rem)]">
              So finden Sie uns
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.7fr]">
            <div className="flex flex-col justify-center gap-7">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ochre">
                  Adresse
                </p>
                <p className="mt-2 font-sans text-lg text-ink">
                  Seefeldstrasse 86
                  <br />
                  8008 Zürich
                </p>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ochre">
                  Öffnungszeiten
                </p>
                <p className="mt-2 font-sans text-lg text-ink">
                  Mo–Fr 7.30–19.00
                  <br />
                  Sa 8.00–17.00
                  <br />
                  So geschlossen
                </p>
              </div>
              <a
                href={DIRECTIONS}
                target="_blank"
                rel="noreferrer"
                className="self-start border border-ink px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Route planen
              </a>
            </div>

            <div className="h-[340px] border border-ink md:h-[460px]">
              <iframe
                title="Karte: Russo der Quartierladen, Seefeldstrasse 86, Zürich"
                src={MAP_EMBED}
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
