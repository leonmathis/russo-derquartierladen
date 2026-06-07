import type { Metadata, Viewport } from "next";
import { Marcellus, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serif = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Russo der Quartierladen — Genuss auf Italienisch | Seefeld Zürich",
  description:
    "Prototyp / Redesign-Konzept (nicht die offizielle Website) für Russo «Der Quartierladen», italienischer Quartierladen im Zürcher Seefeld: Caffè, warme Panini, Focaccia und ein liebevoll kuratiertes Sortiment. Seefeldstrasse 86, 8008 Zürich.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-2 focus:font-sans focus:text-sm"
        >
          Zum Inhalt springen
        </a>
        <div
          role="note"
          className="bg-ink text-paper"
        >
          <p className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-6 py-2 text-center font-sans text-[11px] leading-snug tracking-wide">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-sand" />
            <span className="font-semibold uppercase tracking-[0.18em]">Prototyp</span>
            <span className="text-paper/80">
              Redesign-Konzept · Nicht die offizielle Website von Russo «Der Quartierladen».
            </span>
            <a
              href="https://russo-derquartierladen.ch"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-paper/40 underline-offset-2 transition-colors hover:decoration-paper"
            >
              russo-derquartierladen.ch
            </a>
          </p>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
