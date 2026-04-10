import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "../index.css";
import Providers from "./providers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ente Maxwell – Formazione Professionale Napoli",
  description:
    "Ente di Formazione Professionale Maxwell a Napoli. Corsi accreditati dalla Regione Campania: informatica, sicurezza, lingue, sanitario e molto altro.",
  authors: [{ name: "Ente Maxwell" }],
  keywords: [
    "formazione professionale",
    "napoli",
    "corsi",
    "regione campania",
    "ente maxwell",
    "IeFP",
    "GOL",
    "EIPASS",
    "RSPP",
    "concorsi pubblici",
  ],
  openGraph: {
    title: "Ente Maxwell – Formazione Professionale Napoli",
    description:
      "Corsi professionali accreditati dalla Regione Campania. Informatica, sicurezza, lingue e molto altro.",
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ente Maxwell – Formazione Professionale Napoli",
    description:
      "Corsi professionali accreditati dalla Regione Campania. Informatica, sicurezza, lingue e molto altro.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${dmSans.variable} ${dmSerifDisplay.variable}`} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
