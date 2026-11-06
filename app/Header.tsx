"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

/* Pages du menu (l'événement est affiché à part, en pastille orange) */
const pages = [
  { name: "Home", href: "/" },
  { name: "Literature Database", href: "/literature-database" },
  { name: "Cytokine Platform", href: "/cytokine-platform" },
  { name: "Publications", href: "/publications" },
  { name: "Collaboration & Access", href: "/collaboration-and-access" },
];

const EVENT = { name: "Congress 2027", href: "/norse-europe" };

const CONTACT = "mailto:aurelie.hanin@icm-institute.org";

const MailIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
);

/* Point qui « pulse » doucement (orange, ou foncé sur fond orange) */
const PulseDot = ({ dark = false }: { dark?: boolean }) => {
  const color = dark ? "bg-slate-900" : "bg-[#f5a524] group-hover:bg-slate-900";
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${color}`} />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  );
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* La barre devient plus opaque, avec une ombre, dès qu'on fait défiler la page */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const eventActive = pathname === EVENT.href;

  return (
    <header
      className={`sticky top-0 z-50 text-white transition-all duration-500 ${
        scrolled ? "bg-[#0a1830]/97 shadow-xl shadow-black/30 backdrop-blur-md" : "bg-[#0a1830] shadow-lg shadow-black/20"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-6 min-[1440px]:px-8">
        {/* ---------- LOGO + TITRE ---------- */}
        <Link href="/" className="group flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="NORSE‑ICM Logo"
            width={56}
            height={56}
            className="rounded-full ring-2 ring-white/25 transition duration-500 group-hover:ring-[#f5a524]/70"
          />
          <div className="border-l border-white/20 pl-3">
            <p className="mb-1.5 text-base leading-none font-bold tracking-[0.15em] whitespace-nowrap uppercase 2xl:text-lg">NORSE‑ICM</p>
            <p className="text-[11px] leading-none tracking-[0.2em] whitespace-nowrap text-white/55 uppercase">Paris Brain Institute</p>
          </div>
        </Link>

        {/* ---------- NAVIGATION (grand écran) ---------- */}
        <nav className="hidden h-full items-center xl:flex">
          {pages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                className={`group relative flex h-full items-center px-2 text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-300 min-[1440px]:px-3 2xl:px-4 2xl:text-[15px] ${
                  isActive ? "text-white" : "text-white/75 hover:text-white"
                }`}
              >
                {page.name}
                {/* soulignement : orange si page active, apparaît au survol sinon */}
                <span
                  className={`absolute right-2 bottom-0 left-2 h-[3px] origin-center rounded-full transition-transform duration-300 min-[1440px]:right-3 min-[1440px]:left-3 2xl:right-4 2xl:left-4 ${
                    isActive ? "scale-x-100 bg-[#f5a524]" : "scale-x-0 bg-white/40 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}

          {/* Événement mis en avant */}
          <Link
            href={EVENT.href}
            className={`group ml-2 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm min-[1440px]:ml-3 min-[1440px]:px-4 font-semibold whitespace-nowrap shadow-md shadow-[#f5a524]/10 transition duration-300 2xl:px-5 2xl:py-2.5 2xl:text-[15px] ${
              eventActive
                ? "border-[#f5a524] bg-[#f5a524] text-slate-900"
                : "border-[#f5a524]/50 bg-[#f5a524]/10 text-[#f5a524] hover:border-[#f5a524] hover:bg-[#f5a524] hover:text-slate-900"
            }`}
          >
            <PulseDot dark={eventActive} />
            {EVENT.name}
          </Link>

          <span className="mx-3 h-6 w-px bg-white/15 min-[1440px]:mx-4" />

          <a
            href={CONTACT}
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-3.5 py-2 text-sm min-[1440px]:px-4 font-semibold whitespace-nowrap transition duration-300 hover:border-white/60 hover:bg-white/10 2xl:px-5 2xl:py-2.5 2xl:text-[15px]"
          >
            <MailIcon />
            Contact us
          </a>
        </nav>

        {/* ---------- BOUTON MENU (petit écran) ---------- */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 transition hover:bg-white/10 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* fin liseré orange en bas de la barre */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#f5a524]/20 via-[#f5a524] to-[#f5a524]/20" />

      {/* ---------- MENU DÉROULANT (petit écran) ---------- */}
      {open && (
        <nav className="border-t border-white/10 px-4 pt-2 pb-4 sm:px-6 xl:hidden">
          {pages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                onClick={() => setOpen(false)}
                className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {isActive && <span className="mr-2.5 h-4 w-0.5 rounded-full bg-[#f5a524]" />}
                {page.name}
              </Link>
            );
          })}

          <Link
            href={EVENT.href}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center gap-2.5 rounded-lg border border-[#f5a524]/40 bg-[#f5a524]/10 px-3 py-2.5 text-sm font-semibold text-[#f5a524]"
          >
            <PulseDot dark={false} />
            {EVENT.name}
          </Link>

          <a
            href={CONTACT}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-white/30 px-3 py-2.5 text-sm font-semibold transition hover:bg-white/10"
          >
            <MailIcon />
            Contact us
          </a>
        </nav>
      )}
    </header>
  );
}