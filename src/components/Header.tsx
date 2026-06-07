"use client";

import { useState } from "react";

const NAV = [
  { label: "Über uns", href: "/#ueber" },
  { label: "Instagram", href: "/#instagram" },
];

const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Seefeldstrasse+86+8008+Z%C3%BCrich";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`font-serif leading-none tracking-[0.01em] ${className}`}>
      Russo <span className="text-grey">der Quartierladen</span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Wordmark className="text-lg sm:text-xl md:text-2xl" />

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-sans text-sm text-ink/90 transition-colors hover:text-ochre"
            >
              {n.label}
            </a>
          ))}
          <a
            href={MAPS}
            target="_blank"
            rel="noreferrer"
            className="border border-ink px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Anfahrt
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 block h-[1.5px] w-6 bg-ink transition-transform ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-[1.5px] w-6 bg-ink transition-transform ${
                open ? "bottom-1/2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* mobile panel — absolute overlay so opening it never resizes the
          header or shifts the page below it */}
      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-line bg-paper px-6 pb-6 pt-2 shadow-[0_12px_24px_rgba(20,18,16,0.06)] md:hidden"
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 font-serif text-xl text-ink"
            >
              {n.label}
            </a>
          ))}
          <a
            href={MAPS}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block self-start border border-ink px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink"
          >
            Anfahrt
          </a>
        </nav>
      )}
    </header>
  );
}
