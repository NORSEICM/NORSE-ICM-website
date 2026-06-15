"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const pages = [
    { name: "Home", href: "/" },
    { name: "Literature Database", href: "/literature-database" },
    { name: "Cytokine Platform", href: "/cytokine-platform" },
    { name: "Publications", href: "/publications" },
    { name: "Collaboration & Access", href: "/collaboration-and-access" },
  ];

  return (
<header className="relative z-50 text-white border-b border-white/10 bg-[#0b1d3a]/90 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center md:justify-between h-auto md:h-16 py-4 md:py-0 gap-4 md:gap-0">
        
        {/* ---------- LOGO + TITRE ---------- */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <Image
            src="/logo.png"
            alt="NORSE‑ICM Logo"
            width={52}
            height={52}
            className="rounded-full ring-2 ring-white/30 group-hover:ring-white/60 transition-all duration-300"
          />
          <div className="border-l border-white/20 pl-4">
            <p className="text-base font-bold tracking-[0.15em] text-white uppercase leading-none mb-1 text-center md:text-left">
              NORSE‑ICM
            </p>
            <p className="text-xs text-white/50 tracking-[0.2em] uppercase leading-none text-center md:text-left">
              Paris Brain Institute
            </p>
          </div>
        </Link>

        {/* ---------- NAVIGATION ---------- */}
        <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-0 w-full md:w-auto h-auto md:h-full justify-center md:justify-end">
          {pages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                className={`
                  relative flex items-center justify-center md:justify-start px-4 md:px-5 py-1 text-sm md:text-base tracking-wide font-medium
                  transition-all duration-200
                  ${isActive ? "text-white" : "text-white/60 hover:text-white"}
                `}
              >
                {page.name}
                <span
                  className={`
                    absolute bottom-0 left-3 right-3 h-0.5 rounded-full
                    transition-all duration-300
                    ${isActive ? "bg-white opacity-100" : "opacity-0"}
                  `}
                />
              </Link>
            );
          })}

          {/* Bouton Contact CTA */}
          <a
            href="mailto:aurelie.hanin@icm-institute.org"
            className="mt-2 md:mt-0 md:ml-4 px-4 py-2 border border-white/30 text-white text-xs md:text-sm font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 shrink-0"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}