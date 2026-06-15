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
    <header className="absolute top-0 left-0 right-0 z-50 text-white border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-8 flex items-center justify-between h-16">

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
    <p className="text-base font-bold tracking-[0.15em] text-white uppercase leading-none mb-1">
      NORSE‑ICM
    </p>
    <p className="text-xs text-white/50 tracking-[0.2em] uppercase leading-none">
      Paris Brain Institute
    </p>
  </div>
</Link>

        {/* ---------- NAVIGATION ---------- */}
        <nav className="flex items-center h-full">
          {pages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                className={`
                  relative flex items-center h-full px-5 text-base tracking-wide font-medium
                  transition-all duration-200
                  ${isActive
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                  }
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
            className="ml-4 px-4 py-2 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 shrink-0"
          >
            Contact us
          </a>
        </nav>

      </div>
    </header>
  );
}