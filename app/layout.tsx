import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const bodoni = Bodoni_Moda({ variable: "--font-bodoni", subsets: ["latin"] });

const SITE_URL = "https://norse-icm-website.vercel.app";
const DESCRIPTION =
  "Research program on New Onset Refractory Status Epilepticus (NORSE) and FIRES at the Paris Brain Institute (ICM) – Pitié-Salpêtrière Hospital, Paris. Literature database, cytokine platform, publications and collaboration.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NORSE‑ICM Project | Paris Brain Institute",
    template: "%s | NORSE‑ICM Project",
  },
  description: DESCRIPTION,
  keywords: [
    "NORSE",
    "FIRES",
    "New Onset Refractory Status Epilepticus",
    "Febrile Infection-Related Epilepsy Syndrome",
    "refractory status epilepticus",
    "cytokines",
    "Paris Brain Institute",
    "ICM",
    "Pitié-Salpêtrière",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "NORSE‑ICM Project",
    title: "NORSE‑ICM Project | Paris Brain Institute",
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NORSE‑ICM Project | Paris Brain Institute",
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}