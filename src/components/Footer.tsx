const COLS: { title: string; items: { label: string; href?: string }[] }[] = [
  {
    title: "Besuch",
    items: [
      { label: "Seefeldstrasse 86" },
      { label: "8008 Zürich" },
      { label: "044 261 58 27", href: "tel:+41442615827" },
    ],
  },
  {
    title: "Öffnung",
    items: [
      { label: "Mo–Fr  7.30–19.00" },
      { label: "Sa  8.00–17.00" },
      { label: "So  geschlossen" },
    ],
  },
  {
    title: "Folgen",
    items: [
      { label: "Instagram", href: "https://instagram.com/russoderquartierladen" },
      { label: "Impressum", href: "/impressum" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="font-serif text-2xl leading-none">
            Russo <span className="text-white/55">der Quartierladen</span>
          </div>
          <p className="mt-4 font-serif text-lg text-white/70">
            Genuss auf Italienisch
          </p>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-sand">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2">
              {col.items.map((it) => (
                <li key={it.label} className="font-sans text-sm text-white/80">
                  {it.href ? (
                    <a
                      href={it.href}
                      className="transition-colors hover:text-sand"
                      {...(it.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {it.label}
                    </a>
                  ) : (
                    it.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="font-sans text-xs text-white/50">
            © 2026 Russo der Quartierladen. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
