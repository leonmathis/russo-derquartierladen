/* Menu — transcribed from the shop's chalkboards.
   Prices in CHF; defaults read from the photo (easy to adjust here). */

type Item = { name: string; desc?: string; price?: string };
type Group = { title: string; note?: string; items: Item[]; addons?: string[] };

const GROUPS: Group[] = [
  {
    title: "Warme Speisen",
    items: [
      { name: "Lasagne Bolognese", price: "12.50" },
      { name: "Lasagne Vegi", price: "12.50" },
      { name: "Parmigiana di Melanzane", price: "12.50" },
    ],
  },
  {
    title: "Focaccie",
    items: [
      { name: "Focaccia Mortadella", price: "9.90" },
      { name: "Focaccia Coppa", price: "11.90" },
      { name: "Focaccia Bresaola", price: "10.90" },
      { name: "Focaccia Rohschinken", price: "11.90" },
      { name: "Focaccia Salami piccante", price: "9.90" },
      { name: "Focaccia Schinken", price: "10.90" },
      { name: "Focaccia Truten", price: "10.90" },
    ],
  },
  {
    title: "Pinse",
    items: [{ name: "Pinsa Margherita", price: "13.50" }],
    addons: ["+ Fleischbeilagen 3.50", "+ Beilagen nach Wahl, je 1.00"],
  },
  {
    title: "Piadine",
    items: [
      {
        name: "Piadina Classica",
        desc: "Rohschinken · Stracchino · Rucola",
        price: "13.00",
      },
    ],
    addons: ["+ Fleischbeilage 3.50", "+ Beilagen nach Wahl, je 1.00"],
  },
  {
    title: "Panini",
    items: [
      { name: "Panino Caprese", desc: "Tomaten · Mozzarella · Pesto", price: "10.50" },
      { name: "Panino Roastbeef" },
      { name: "Panino Lachs", price: "15.00" },
    ],
  },
  {
    title: "Salate",
    items: [
      { name: "Gemischter Salat", price: "9.50" },
      { name: "Caprese", price: "12.50" },
    ],
    addons: ["+ Beilagen nach Wahl"],
  },
  {
    title: "Beilagen",
    note: "Tomaten · Rucola · Oliven · Auberginen · Zucchetti · Artischocken · Dörrtomaten · Mozzarella · Stracchino",
    items: [],
    addons: ["Je Beilage 1.00"],
  },
];

function Row({ item }: { item: Item }) {
  return (
    <li>
      <div className="flex items-baseline gap-2">
        <span className="font-sans text-sm font-semibold text-ink">{item.name}</span>
        {item.price && (
          <>
            <span
              aria-hidden
              className="min-w-4 flex-1 -translate-y-[0.3em] border-b border-dotted border-line-2"
            />
            <span className="font-sans text-sm font-semibold tabular-nums text-ink">
              {item.price}
            </span>
          </>
        )}
      </div>
      {item.desc && (
        <p className="mt-0.5 font-sans text-xs text-grey">{item.desc}</p>
      )}
    </li>
  );
}

export default function Menu() {
  return (
    <section id="karte" className="relative z-10 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ochre">
            Mittagskarte
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.8rem,3.2vw,2.4rem)]">
            Frisch zubereitet
          </h2>
        </div>

        <div className="mt-12 grid gap-x-12 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <div key={g.title} className="break-inside-avoid">
              <h3 className="font-serif text-xl text-ink">{g.title}</h3>
              <span aria-hidden className="mt-2 block h-[2px] w-9 bg-ochre" />

              {g.note && (
                <p className="mt-3 font-sans text-xs leading-relaxed text-grey">{g.note}</p>
              )}

              {g.items.length > 0 && (
                <ul className="mt-4 space-y-3">
                  {g.items.map((it) => (
                    <Row key={it.name} item={it} />
                  ))}
                </ul>
              )}

              {g.addons && (
                <ul className="mt-3 space-y-1">
                  {g.addons.map((a) => (
                    <li key={a} className="font-sans text-xs italic text-grey">
                      {a}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-sans text-xs text-grey">
          Preise in CHF · Änderungen vorbehalten.
        </p>
      </div>
    </section>
  );
}
