import type { Metadata } from "next";
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
    "Italienischer Quartierladen im Zürcher Seefeld: Caffè, warme Panini, Focaccia und ein liebevoll kuratiertes Sortiment. Seefeldstrasse 86, 8008 Zürich.",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
