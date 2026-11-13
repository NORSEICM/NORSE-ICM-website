import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { REFERRAL_MAILTO } from "./referral";

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/cytokine-platform", label: "Cytokine Platform" },
  { href: "/literature-database", label: "Literature Database" },
  { href: "/publications", label: "Publications" },
  { href: "/collaboration-and-access", label: "Collaboration & Access" },
];

/* Petit titre de colonne, avec le trait orange du site */
function ColTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-0.5 w-6 rounded-full bg-[#f5a524]" />
      <p className="text-xs font-semibold tracking-[0.2em] text-white uppercase">{children}</p>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-[#0f1e33] to-[#0b1626] text-sm text-slate-400">
      {/* fin liseré orange en haut */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#f5a524]/60 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-white/[0.03]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-12">
        {/* ---------- Identité ---------- */}
        <div className="lg:col-span-4">
          <Link href="/" className="group inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NORSE‑ICM Logo"
              width={48}
              height={48}
              className="rounded-full ring-2 ring-white/20 transition group-hover:ring-white/50"
            />
            <div className="border-l border-white/15 pl-3">
              <p className="mb-1 text-sm leading-none font-bold tracking-[0.15em] text-white uppercase">NORSE‑ICM</p>
              <p className="text-[10px] leading-none tracking-[0.2em] text-white/50 uppercase">Paris Brain Institute</p>
            </div>
          </Link>
          <p className="mt-5 max-w-xs leading-relaxed">
            Research on New Onset Refractory Status Epilepticus and FIRES at the Paris Brain Institute.
          </p>
          <p className="mt-5 leading-relaxed text-slate-500">
            Hôpital Pitié‑Salpêtrière
            <br />
            47 boulevard de l&apos;Hôpital, 75013 Paris
          </p>
        </div>

        {/* ---------- Pages ---------- */}
        <div className="lg:col-span-3">
          <ColTitle>Explore</ColTitle>
          <ul className="space-y-2.5">
            {siteLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-block transition duration-300 hover:translate-x-1 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Contact ---------- */}
        <div className="lg:col-span-2">
          <ColTitle>Contact</ColTitle>
          <ul className="space-y-2.5">
            <li>
              <a href="mailto:aurelie.hanin@icm-institute.org" className="transition hover:text-white">
                Email us
              </a>
            </li>
            <li>
              <a href={REFERRAL_MAILTO} className="transition hover:text-white">
                Cytokine analysis
              </a>
            </li>
            <li>
              <a href="https://institutducerveau-icm.org/en" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                Paris Brain Institute ↗
              </a>
            </li>
          </ul>
        </div>

        {/* ---------- Encart congrès ---------- */}
        <div className="md:col-span-2 lg:col-span-3">
          <Link
            href="/norse-europe"
            className="group block rounded-xl border border-white/10 bg-white/[0.04] p-5 transition duration-500 hover:-translate-y-1 hover:border-[#f5a524]/50 hover:bg-white/[0.07]"
          >
            <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-[#f5a524] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5a524]" />
              November 15-17 2027 · Paris
            </p>
            <p className="mt-3 font-[family-name:var(--font-bodoni)] text-lg leading-snug font-bold text-white">
              Neuroinflammation &amp; Epilepsy
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">International Training School and Translational Workshop</p>
            <p className="mt-4 text-xs font-semibold text-white transition group-hover:text-[#f5a524]">Register your interest →</p>
          </Link>
        </div>
      </div>

      {/* ---------- Bas de page ---------- */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-slate-500 md:flex-row">
          <p>{`© ${year} NORSE‑ICM Project — Paris Brain Institute (ICM)`}</p>
          <p>Pitié‑Salpêtrière Hospital · Paris, France</p>
        </div>
      </div>
    </footer>
  );
}