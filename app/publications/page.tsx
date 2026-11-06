"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* =====================================================================
   PAGE « PUBLICATIONS » — NORSE / FIRES Bibliography
   Pour ajouter un article : copier une ligne dans la liste REFS (en bas
   du fichier) et changer les champs :
     c = catégorie ("series" | "report" | "other")
     a = auteurs, t = titre, y = année, u = lien, l = texte du lien
   Les chiffres du haut de page se mettent à jour tout seuls.
   ===================================================================== */

type Cat = "series" | "report" | "other";
type Ref = { c: Cat; a: string; t: string; y: number; u: string; l: string };

const CONTACT_EMAIL = "aurelie.hanin@icm-institute.org";
const SUGGEST_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("NORSE bibliography — missing publication")}&body=${encodeURIComponent(
  "Dear NORSE-ICM team,\n\nI would like to suggest a publication for the NORSE / FIRES bibliography.\n\nReference (authors, title, journal, year):\nPMID or DOI:\nType (case report, case series, review, other):\n\nThank you."
)}`;

const CATS: { id: Cat; label: string; short: string; badge: string }[] = [
  { id: "series", label: "Case series", short: "Case series", badge: "bg-slate-800 text-white" },
  { id: "report", label: "Case reports", short: "Case report", badge: "bg-[#f5a524]/15 text-[#a86a05]" },
  { id: "other", label: "Other", short: "Other", badge: "border border-slate-300 text-slate-600" },
];

const PERIODS = [
  { id: "all", label: "All years", from: 0, to: 9999 },
  { id: "2024", label: "2024–2026", from: 2024, to: 2026 },
  { id: "2021", label: "2021–2023", from: 2021, to: 2023 },
  { id: "2016", label: "2016–2020", from: 2016, to: 2020 },
  { id: "2011", label: "2011–2015", from: 2011, to: 2015 },
  { id: "2001", label: "2001–2010", from: 2001, to: 2010 },
];

const PAGE_SIZE = 40;

/* ================= STYLE (thème du site) ================= */

const SERIF = "font-[family-name:var(--font-bodoni)]";
const ORANGE = "#f5a524";
const EASE = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 28, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};

function SectionTitle({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <motion.div {...reveal} className="mb-10 flex flex-col items-center text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">{kicker}</p>
      <h2 className={`${SERIF} mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl`}>{title}</h2>
      <motion.div
        className="mt-5 h-0.5 w-10 rounded-full"
        style={{ backgroundColor: ORANGE }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
      />
      {children}
    </motion.div>
  );
}

const Icon = ({ d, className = "h-5 w-5" }: { d: string; className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);
const I = {
  search: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
  external: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
  close: "M6 18 18 6M6 6l12 12",
  sort: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5",
  mail: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
};

/* Recherche insensible aux accents, majuscules et tirets spéciaux */
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[‐‑‒–—]/g, "-");

/* ================= PAGE ================= */

export default function Publications() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<"all" | Cat>("all");
  const [period, setPeriod] = useState("all");
  const [sort, setSort] = useState<"desc" | "asc">("desc");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const total = REFS.length;
  const countBy = (c: Cat) => REFS.filter((r) => r.c === c).length;
  const firstYear = Math.min(...REFS.map((r) => r.y));
  const lastYear = Math.max(...REFS.map((r) => r.y));

  const STATS = [
    { number: String(total), label: "Publications" },
    { number: String(countBy("series")), label: "Case series" },
    { number: String(countBy("report")), label: "Case reports" },
    { number: String(countBy("other")), label: "Other publications" },
  ];

  /* Filtre recherche + période (sert aussi aux compteurs des onglets) */
  const base = useMemo(() => {
    const q = norm(query.trim());
    const p = PERIODS.find((x) => x.id === period) ?? PERIODS[0];
    return INDEX.filter((r) => r.y >= p.from && r.y <= p.to && (!q || r.s.includes(q)));
  }, [query, period]);

  const filtered = useMemo(() => {
    const list = cat === "all" ? base : base.filter((r) => r.c === cat);
    return [...list].sort((a, b) => (sort === "desc" ? b.y - a.y : a.y - b.y) || a.i - b.i);
  }, [base, cat, sort]);

  const visible = filtered.slice(0, limit);
  const groups: { year: number; items: typeof visible }[] = [];
  visible.forEach((r) => {
    const last = groups[groups.length - 1];
    if (last && last.year === r.y) last.items.push(r);
    else groups.push({ year: r.y, items: [r] });
  });

  const resetPage = () => setLimit(PAGE_SIZE);
  const hasFilters = query !== "" || cat !== "all" || period !== "all";
  const clearAll = () => {
    setQuery("");
    setCat("all");
    setPeriod("all");
    resetPage();
  };

  return (
    <div className="w-full overflow-x-clip bg-white text-slate-700">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* ---------- HERO ---------- */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div aria-hidden className="absolute top-0 right-0 h-96 w-96 translate-x-48 -translate-y-48 rounded-full bg-white/5" />
        <div aria-hidden className="absolute bottom-0 left-0 h-72 w-72 -translate-x-36 translate-y-36 rounded-full bg-white/5" />

        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
          <motion.p
            className="text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: ORANGE }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Publications
          </motion.p>

          <motion.h1
            className={`${SERIF} mt-4 text-5xl font-bold tracking-tight md:text-6xl`}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
          >
            NORSE / FIRES Bibliography
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
          >
            A curated list of published case series, case reports and other publications on NORSE and FIRES, {firstYear}–{lastYear}.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
          >
            <a
              href="#bibliography"
              className="rounded-lg px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition duration-500 ease-out hover:-translate-y-0.5"
              style={{ backgroundColor: ORANGE }}
            >
              Browse the bibliography
            </a>
            <a
              href={SUGGEST_MAILTO}
              className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition duration-500 ease-out hover:bg-white/10"
            >
              Suggest a publication
            </a>
          </motion.div>

          <div className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/[0.06] px-5 py-5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 + i * 0.1, ease: EASE }}
              >
                <p className={`${SERIF} text-3xl font-bold text-white`}>{s.number}</p>
                <p className="mt-1 text-xs tracking-wide text-slate-300">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#rasmussen"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#f5a524]/50 bg-[#f5a524]/10 py-1.5 pr-4 pl-1.5 text-sm text-slate-200 transition duration-500 ease-out hover:border-[#f5a524] hover:bg-[#f5a524]/20"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
          >
            <span className="rounded-full bg-[#f5a524] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-slate-900 uppercase">Coming soon</span>
            <span>
              The same bibliography for <strong className="text-white">Rasmussen encephalitis</strong>
            </span>
            <span className="text-[#f5a524] transition group-hover:translate-x-0.5">→</span>
          </motion.a>
        </div>
      </section>

      {/* ---------- BIBLIOGRAPHY ---------- */}
      <section id="bibliography" className="w-full scroll-mt-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <SectionTitle kicker="Search the literature" title="Browse the bibliography">
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500">
              Search by author, title, keyword, year or PMID. Filter by type of publication and period.
            </p>
            <p className="mt-2 max-w-2xl text-xs text-slate-400">
              <span className="font-semibold text-slate-500">Other</span> includes reviews, pathophysiology studies, definitions,
              guidelines, letters and commentaries.
            </p>
          </SectionTitle>

          {/* Barre de recherche et filtres (reste visible en défilant) */}
          <div className="z-20 -mx-2 rounded-xl md:sticky md:top-20 border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur md:mx-0 md:p-5">
            <div className="relative">
              <Icon d={I.search} className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  resetPage();
                }}
                placeholder="Search e.g. anakinra, ketogenic diet, Hanin, 2024, 38837761…"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pr-10 pl-10 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#f5a524] focus:bg-white focus:ring-2 focus:ring-[#f5a524]/20 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    resetPage();
                  }}
                  aria-label="Clear search"
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded p-0.5 text-slate-400 hover:text-slate-700"
                >
                  <Icon d={I.close} className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {[{ id: "all" as const, label: "All", n: base.length }, ...CATS.map((c) => ({ id: c.id, label: c.label, n: base.filter((r) => r.c === c.id).length }))].map(
                (t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setCat(t.id);
                      resetPage();
                    }}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                      cat === t.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {t.label}
                    <span className={`ml-1.5 ${cat === t.id ? "text-[#f5a524]" : "text-slate-400"}`}>{t.n}</span>
                  </button>
                )
              )}

              <div className="ml-auto flex items-center gap-2">
                <select
                  value={period}
                  onChange={(e) => {
                    setPeriod(e.target.value);
                    resetPage();
                  }}
                  aria-label="Period"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 focus:border-[#f5a524] focus:outline-none"
                >
                  {PERIODS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-slate-300"
                >
                  <Icon d={I.sort} className="h-3.5 w-3.5" />
                  {sort === "desc" ? "Newest first" : "Oldest first"}
                </button>
              </div>
            </div>
          </div>

          {/* Résumé des résultats */}
          <div className="mt-6 flex items-center justify-between px-1 text-xs text-slate-500">
            <p>
              <span className="font-semibold text-slate-800">{filtered.length}</span> publication{filtered.length > 1 ? "s" : ""}
              {hasFilters ? " match your filters" : ""}
            </p>
            {hasFilters && (
              <button type="button" onClick={clearAll} className="font-semibold text-slate-700 underline decoration-[#f5a524] decoration-2 underline-offset-4">
                Reset filters
              </button>
            )}
          </div>

          {/* Liste groupée par année */}
          {filtered.length === 0 ? (
            <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
              <p className="font-semibold text-slate-800">No publication matches your search.</p>
              <p className="mt-2 text-sm text-slate-500">Try another keyword, or reset the filters.</p>
            </div>
          ) : (
            <div className="mt-4 space-y-8">
              {groups.map((g) => (
                <div key={g.year}>
                  <div className="mb-3 flex items-baseline gap-3 px-1">
                    <h3 className={`${SERIF} text-2xl font-bold text-slate-900`}>{g.year}</h3>
                    <span className="h-px flex-1 bg-slate-200" />
                    <span className="text-xs text-slate-400">
                      {g.items.length} article{g.items.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <ul className="divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    {g.items.map((r) => {
                      const c = CATS.find((x) => x.id === r.c)!;
                      return (
                        <li key={r.i} className="group flex flex-col gap-3 px-5 py-4 transition-colors hover:bg-slate-50 md:flex-row md:items-start md:gap-6">
                          <div className="min-w-0 flex-1">
                            <div className="mb-1.5 flex flex-wrap items-center gap-2">
                              <span className={`rounded px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase ${c.badge}`}>{c.short}</span>
                              <span className="text-sm font-semibold text-slate-900">{r.a}</span>
                            </div>
                            <p className="text-sm leading-relaxed text-slate-600">{r.t}</p>
                          </div>
                          <a
                            href={r.u}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-md border border-slate-200 px-2.5 py-1 font-mono text-[11px] text-slate-600 transition group-hover:border-[#f5a524] hover:bg-[#f5a524]/10 hover:text-slate-900"
                          >
                            {r.l}
                            <Icon d={I.external} className="h-3 w-3" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {filtered.length > limit && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setLimit(limit + PAGE_SIZE)}
                className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Show more
                <span className="ml-2 text-[#f5a524]">{filtered.length - limit} remaining</span>
              </button>
            </div>
          )}

          <p className="mt-10 text-center text-xs text-slate-400 italic">
            This bibliography supports our{" "}
            <Link href="/literature-database" className="underline underline-offset-2 hover:text-slate-600">
              NORSE Evidence Database
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ---------- BIENTÔT : RASMUSSEN ---------- */}
      <section id="rasmussen" className="w-full scroll-mt-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <motion.div
            {...reveal}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:flex md:items-center md:gap-10 md:p-10"
          >
            <div aria-hidden className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: ORANGE }} />
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f5a524]/15 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#a86a05] uppercase">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5a524]" />
                Coming soon
              </span>
              <h2 className={`${SERIF} mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl`}>Rasmussen encephalitis</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
                We are building the same curated bibliography for Rasmussen encephalitis: case series, case reports and other
                publications, searchable in one place. It will be available on this page soon.
              </p>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Rasmussen encephalitis bibliography")}`}
              className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-slate-800 md:mt-0"
            >
              <Icon d={I.mail} className="h-4 w-4" />
              Get notified or contribute
            </a>
          </motion.div>
        </div>
      </section>

      {/* ---------- SUGGEST ---------- */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/5" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-white/5" />
        <motion.div {...reveal} className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <h2 className={`${SERIF} text-2xl font-bold tracking-tight whitespace-nowrap sm:text-3xl md:text-4xl`}>Missing a publication?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-balance text-slate-300">
            Help us keep this bibliography complete. Send us the reference and we will add it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={SUGGEST_MAILTO}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition duration-500 ease-out hover:-translate-y-0.5"
              style={{ backgroundColor: ORANGE }}
            >
              <Icon d={I.mail} className="h-4 w-4" />
              Suggest a publication
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

/* =====================================================================
   LISTE DES PUBLICATIONS
   ===================================================================== */

const REFS: Ref[] = [
  { c: "series", a: "Sahin et al.", t: "Outcome of severe refractory status epilepticus in children.", y: 2001, u: "https://pubmed.ncbi.nlm.nih.gov/11879350/", l: "PMID 11879350" },
  { c: "series", a: "Van Lierde et al.", t: "De novo cryptogenic refractory multifocal febrile status epilepticus in young adults.", y: 2003, u: "https://pubmed.ncbi.nlm.nih.gov/12892002/", l: "PMID 12892002" },
  { c: "series", a: "Baxter et al.", t: "Idiopathic catastrophic epileptic encephalopathy with acute onset intractable status.", y: 2003, u: "https://pubmed.ncbi.nlm.nih.gov/12915084/", l: "PMID 12915084" },
  { c: "series", a: "Kramer et al.", t: "Severe refractory status epilepticus owing to presumed encephalitis.", y: 2005, u: "https://pubmed.ncbi.nlm.nih.gov/15832606/", l: "PMID 15832606" },
  { c: "series", a: "Wilder‑Smith et al.", t: "The NORSE syndrome: defining a disease entity.", y: 2005, u: "https://pubmed.ncbi.nlm.nih.gov/16123813/", l: "PMID 16123813" },
  { c: "series", a: "Mikaeloff et al.", t: "Devastating epileptic encephalopathy in school‑aged children (DESC): a pseudo encephalitis.", y: 2006, u: "https://pubmed.ncbi.nlm.nih.gov/16469483/", l: "PMID 16469483" },
  { c: "series", a: "Saito et al.", t: "Acute encephalitis with refractory, repetitive partial seizures: case reports of this unusual post‑encephalitic epilepsy.", y: 2007, u: "https://pubmed.ncbi.nlm.nih.gov/17008042/", l: "PMID 17008042" },
  { c: "series", a: "Lin et al.", t: "Analysis of status epilepticus related presumed encephalitis in children.", y: 2008, u: "https://pubmed.ncbi.nlm.nih.gov/17584506/", l: "PMID 17584506" },
  { c: "series", a: "Shyu et al.", t: "Acute encephalitis with refractory, repetitive partial seizures.", y: 2008, u: "https://pubmed.ncbi.nlm.nih.gov/18078728/", l: "PMID 18078728" },
  { c: "series", a: "Glaser et al.", t: "Refractory status epilepticus in suspect encephalitis.", y: 2008, u: "https://pubmed.ncbi.nlm.nih.gov/18097641/", l: "PMID 18097641" },
  { c: "series", a: "Costello et al.", t: "Cryptogenic new‑onset refractory status epilepticus in adults — infectious or not?", y: 2009, u: "https://pubmed.ncbi.nlm.nih.gov/19013586/", l: "PMID 19013586" },
  { c: "series", a: "Specchio et al.", t: "Epileptic encephalopathy in children possibly related to immune‑mediated pathogenesis.", y: 2010, u: "https://pubmed.ncbi.nlm.nih.gov/19850427/", l: "PMID 19850427" },
  { c: "series", a: "Sakuma et al.", t: "Acute encephalitis with refractory, repetitive partial seizures (AERRPS): a peculiar form of childhood encephalitis.", y: 2010, u: "https://pubmed.ncbi.nlm.nih.gov/20028339/", l: "PMID 20028339" },
  { c: "series", a: "Van Baalen et al.", t: "Febrile infection‑related epilepsy syndrome (FIRES): a non‑encephalitic encephalopathy in childhood.", y: 2010, u: "https://pubmed.ncbi.nlm.nih.gov/20345937/", l: "PMID 20345937" },
  { c: "series", a: "Nabbout et al.", t: "Efficacy of ketogenic diet in severe refractory status epilepticus initiating fever‑induced refractory epileptic encephalopathy in school‑age children (FIRES).", y: 2010, u: "https://pubmed.ncbi.nlm.nih.gov/20813015/", l: "PMID 20813015" },
  { c: "series", a: "Okumura et al.", t: "Amplitude-integrated electroencephalography in patients with acute encephalopathy with refractory, repetitive partial seizures.", y: 2010, u: "https://pubmed.ncbi.nlm.nih.gov/20092972/", l: "PMID 20092972" },
  { c: "series", a: "Fugate et al.", t: "Prolonged high-dose isoflurane for refractory status epilepticus: is it safe?.", y: 2010, u: "https://pubmed.ncbi.nlm.nih.gov/20841413/", l: "PMID 20841413" },
  { c: "series", a: "Mazzuca et al.", t: "18F‑FDG PET reveals frontotemporal dysfunction in children with fever‑induced refractory epileptic encephalopathy.", y: 2011, u: "https://pubmed.ncbi.nlm.nih.gov/21149491/", l: "PMID 21149491" },
  { c: "series", a: "Kramer et al.", t: "Febrile infection‑related epilepsy syndrome (FIRES): pathogenesis, treatment, and outcome — a multicenter study on 77 children.", y: 2011, u: "https://pubmed.ncbi.nlm.nih.gov/21883180/", l: "PMID 21883180" },
  { c: "series", a: "Kramer et al.", t: "Febrile infection‑related epilepsy syndrome (FIRES): does duration of anesthesia affect outcome?", y: 2011, u: "https://pubmed.ncbi.nlm.nih.gov/21967356/", l: "PMID 21967356" },
  { c: "series", a: "Nam et al.", t: "The role of ketogenic diet in the treatment of refractory status epilepticus.", y: 2011, u: "https://pubmed.ncbi.nlm.nih.gov/22003821/", l: "PMID 22003821" },
  { c: "series", a: "Howell et al.", t: "Long‑term follow‑up of febrile infection‑related epilepsy syndrome.", y: 2012, u: "https://pubmed.ncbi.nlm.nih.gov/22191582/", l: "PMID 22191582" },
  { c: "series", a: "Lin et al.", t: "Therapeutic hypothermia for febrile infection‑related epilepsy syndrome in two patients.", y: 2012, u: "https://pubmed.ncbi.nlm.nih.gov/23127267/", l: "PMID 23127267" },
  { c: "series", a: "Li et al.", t: "Plasma exchange in cryptogenic new‑onset refractory status epilepticus.", y: 2013, u: "https://pubmed.ncbi.nlm.nih.gov/23068971/", l: "PMID 23068971" },
  { c: "series", a: "Gall et al.", t: "Five cases of new‑onset refractory status epilepticus (NORSE) syndrome: outcomes with early immunotherapy.", y: 2013, u: "https://pubmed.ncbi.nlm.nih.gov/23333762/", l: "PMID 23333762" },
  { c: "series", a: "Caraballo et al.", t: "Febrile infection‑related epilepsy syndrome: a study of 12 patients.", y: 2013, u: "https://pubmed.ncbi.nlm.nih.gov/23643626/", l: "PMID 23643626" },
  { c: "series", a: "Sort et al.", t: "Ketogenic diet in three cases of childhood refractory status epilepticus.", y: 2013, u: "https://pubmed.ncbi.nlm.nih.gov/23751291/", l: "PMID 23751291" },
  { c: "series", a: "Caraballo et al.", t: "Ketogenic diet in pediatric patients with refractory focal status epilepticus.", y: 2014, u: "https://pubmed.ncbi.nlm.nih.gov/25454503/", l: "PMID 25454503" },
  { c: "series", a: "Singh et al.", t: "Cognitive outcomes in febrile infection‑related epilepsy syndrome treated with the ketogenic diet.", y: 2014, u: "https://pubmed.ncbi.nlm.nih.gov/25332495/", l: "PMID 25332495" },
  { c: "series", a: "Ueda et al.", t: "Effect of levetiracetam in acute encephalitis with refractory repetitive partial seizures during acute and chronic phase.", y: 2015, u: "https://pubmed.ncbi.nlm.nih.gov/25174548/", l: "PMID 25174548" },
  { c: "series", a: "Khawaja et al.", t: "New‑onset refractory status epilepticus (NORSE) — the potential role for immunotherapy.", y: 2015, u: "https://pubmed.ncbi.nlm.nih.gov/26010959/", l: "PMID 26010959" },
  { c: "series", a: "Gaspard et al.", t: "New‑onset refractory status epilepticus: etiology, clinical features and outcome.", y: 2015, u: "https://pubmed.ncbi.nlm.nih.gov/26296517/", l: "PMID 26296517" },
  { c: "series", a: "Tan et al.", t: "Use of magnesium sulfate infusion for the management of febrile illness‑related epilepsy syndrome: a case series.", y: 2015, u: "https://pubmed.ncbi.nlm.nih.gov/28503584/", l: "PMID 28503584" },
  { c: "series", a: "Rivas‑Coppola et al.", t: "Chronological evolution of MRI findings in children with febrile infection‑related epilepsy syndrome (FIRES).", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/26597039/", l: "PMID 26597039" },
  { c: "series", a: "Patil et al.", t: "Clinical profile and treatment outcome of febrile infection‑related epilepsy syndrome in South Indian children.", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/27293328/", l: "PMID 27293328" },
  { c: "series", a: "Appavu et al.", t: "Ketogenic diet treatment for pediatric super‑refractory status epilepticus.", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/27475280/", l: "PMID 27475280" },
  { c: "series", a: "Farias Moeller et al.", t: "A practical approach to ketogenic diet in the pediatric intensive care unit for super‑refractory status epilepticus.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/27553113/", l: "PMID 27553113" },
  { c: "series", a: "Gofshteyn et al.", t: "Cannabidiol as a potential treatment for febrile infection‑related epilepsy syndrome (FIRES) in the acute and chronic phases.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/27655472/", l: "PMID 27655472" },
  { c: "series", a: "Meletti et al.", t: "New‑onset refractory status epilepticus with claustrum damage: definition of clinical and neuroimaging features.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28396650/", l: "PMID 28396650" },
  { c: "series", a: "Farias Moeller et al.", t: "Early ictal and interictal patterns in FIRES: the sparks before the blaze.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28555777/", l: "PMID 28555777" },
  { c: "series", a: "Iizuka et al.", t: "Cryptogenic NORSE: its distinctive clinical features and response to immunotherapy.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28959704/", l: "PMID 28959704" },
  { c: "series", a: "Jafarpour et al.", t: "New‑onset status epilepticus in pediatric patients: causes, characteristics and outcomes.", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/29373157/", l: "PMID 29373157" },
  { c: "series", a: "Lee et al.", t: "Febrile infection‑related epilepsy syndrome (FIRES): therapeutic complications, long‑term neurological and neuroimaging follow‑up.", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/29453111/", l: "PMID 29453111" },
  { c: "series", a: "Farias Moeller et al.", t: "Fueling the FIRES: hemophagocytic lymphohistiocytosis in FIRES.", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/30132834/", l: "PMID 30132834" },
  { c: "series", a: "Jun et al.", t: "Tocilizumab treatment for new‑onset refractory status epilepticus.", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/30408233/", l: "PMID 30408233" },
  { c: "series", a: "Strohm et al.", t: "FDG‑PET and MRI in the evolution of new‑onset refractory status epilepticus.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/30679215/", l: "PMID 30679215" },
  { c: "series", a: "Peng et al.", t: "Ketogenic diet as treatment for super‑refractory status epilepticus in FIRES.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31105638/", l: "PMID 31105638" },
  { c: "series", a: "Sa et al.", t: "Centromedian thalamic nuclei deep brain stimulation and anakinra treatment for FIRES — two different outcomes.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31446001/", l: "PMID 31446001" },
  { c: "series", a: "Choi et al.", t: "Prognostic significance of subsequent extra‑temporal involvement in cryptogenic NORSE initially diagnosed with limbic encephalitis.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31669912/", l: "PMID 31669912" },
  { c: "series", a: "Lam et al.", t: "Short‑term and long‑term outcome of FIRES in children.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/31035103/", l: "PMID 31035103" },
  { c: "series", a: "Husari et al.", t: "New‑onset refractory status epilepticus in children: etiologies, treatments and outcomes.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/31568262/", l: "PMID 31568262" },
  { c: "series", a: "Aurangzeb et al.", t: "New‑onset super‑refractory status epilepticus: a case series.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/31757748/", l: "PMID 31757748" },
  { c: "series", a: "Gugger et al.", t: "New‑onset refractory status epilepticus: a retrospective cohort study.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/31830676/", l: "PMID 31830676" },
  { c: "series", a: "Cantarin‑Extremera et al.", t: "Tocilizumab in pediatric refractory status epilepticus and acute epilepsy: experience in two patients.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/31935626/", l: "PMID 31935626" },
  { c: "series", a: "Wang et al.", t: "Is rat hippocampus section immunostaining an indicator for immunotherapy in cryptogenic adult NORSE?", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32066091/", l: "PMID 32066091" },
  { c: "series", a: "Kim et al.", t: "Timelines of MRI findings related to outcomes in adult NORSE.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32715470/", l: "PMID 32715470" },
  { c: "series", a: "Yanagida et al.", t: "Clinically based score predicting cryptogenic NORSE at early stage of status epilepticus.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32727813/", l: "PMID 32727813" },
  { c: "series", a: "Matthews et al.", t: "New‑onset super‑refractory status epilepticus: a case series of 26 patients.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32943479/", l: "PMID 32943479" },
  { c: "series", a: "Lai et al.", t: "Anakinra usage in FIRES: an international cohort.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/33506622/", l: "PMID 33506622" },
  { c: "series", a: "Wang et al.", t: "The ketogenic diet for paediatric patients with super‑refractory status epilepticus in FIRES.", y: 2020, u: "https://doi.org/10.1186/s42494-020-00013-1", l: "doi.org/10.1186/s42494-020-00013-1" },
  { c: "series", a: "Horino et al.", t: "Intrathecal dexamethasone therapy for febrile infection‑related epilepsy syndrome.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33547757/", l: "PMID 33547757" },
  { c: "series", a: "Manganotti et al.", t: "Intravenous immunoglobulin response in new‑onset refractory status epilepticus (NORSE) COVID‑19 adult patients.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33709220/", l: "PMID 33709220" },
  { c: "series", a: "Sculier et al.", t: "Clinical presentation of new‑onset refractory status epilepticus in children (the pSERG cohort).", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34091885/", l: "PMID 34091885" },
  { c: "series", a: "Nass et al.", t: "Permanent loss of independence in adult FIRES survivors: an underestimated and unsolved challenge.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34091969/", l: "PMID 34091969" },
  { c: "series", a: "Yildirim et al.", t: "Therapeutic plasma exchange in clinical pediatric neurology practice: experience from a tertiary referral hospital.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34304066/", l: "PMID 34304066" },
  { c: "series", a: "Suchdev et al.", t: "Histopathology of new‑onset refractory status epilepticus (NORSE) in adults.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34740145/", l: "PMID 34740145" },
  { c: "series", a: "Neligan et al.", t: "The Queen Square Neuro‑ICU experience in new‑onset refractory status epilepticus (NORSE).", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34781063/", l: "PMID 34781063" },
  { c: "series", a: "Wu et al.", t: "A retrospective study of 92 children with new‑onset refractory status epilepticus.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34794014/", l: "PMID 34794014" },
  { c: "series", a: "Lim et al.", t: "Utility and safety of perampanel in pediatric FIRES and other drug‑resistant epilepsies.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34820471/", l: "PMID 34820471" },
  { c: "series", a: "Nausch et al.", t: "NORSE and FIRES of unknown aetiology: a comparison of the incomparable?", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35042004/", l: "PMID 35042004" },
  { c: "series", a: "Aledo‑Serrano et al.", t: "Anakinra and tocilizumab in the chronic phase of FIRES: effectiveness and safety from a case series.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35759951/", l: "PMID 35759951" },
  { c: "series", a: "Jain et al.", t: "Enteral lorazepam as a promising weaning strategy for midazolam‑responsive FIRES: a case series.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35770765/", l: "PMID 35770765" },
  { c: "series", a: "Werbaneth et al.", t: "A retrospective cohort study of NORSE: clinical features, timing of immunotherapy and outcomes.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35892128/", l: "PMID 35892128" },
  { c: "series", a: "Espino et al.", t: "Long‑term outcomes after NORSE treated with vagus nerve stimulation.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/36177520/", l: "PMID 36177520" },
  { c: "series", a: "Pavone et al.", t: "FIRES: a severe encephalopathy with status epilepticus; literature review and two new cases.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/36527084/", l: "PMID 36527084" },
  { c: "series", a: "Tainski de Azevedo et al.", t: "New‑onset refractory status epilepticus in paediatric patients: causes, characteristics and outcomes.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/36530417/", l: "PMID 36530417" },
  { c: "series", a: "Haanpää et al.", t: "Early clinical features of new‑onset refractory status epilepticus (NORSE) in adults.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/36539824/", l: "PMID 36539824" },
  { c: "series", a: "Lai et al.", t: "Systemic inflammatory markers and EEG features of children with FIRES receiving anakinra.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36645080/", l: "PMID 36645080" },
  { c: "series", a: "Shi et al.", t: "Long‑term outcomes of adult cryptogenic FIRES.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36686522/", l: "PMID 36686522" },
  { c: "series", a: "Girardin et al.", t: "Treatment of new‑onset refractory status epilepticus and FIRES with tocilizumab in a child and a young adult.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36961094/", l: "PMID 36961094" },
  { c: "series", a: "Shrestha et al.", t: "Long‑term neuropsychological outcomes in children with FIRES treated with anakinra.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36970506/", l: "PMID 36970506" },
  { c: "series", a: "Fetta et al.", t: "Cannabidiol in the acute phase of FIRES.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37042946/", l: "PMID 37042946" },
  { c: "series", a: "Nabbout et al.", t: "Ketogenic diet for super‑refractory status epilepticus (SRSE) with NORSE and FIRES.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37122314/", l: "PMID 37122314" },
  { c: "series", a: "Soler Wenglein et al.", t: "No evidence of neuronal/glial autoantibodies in FIRES: a prospective clinic‑serologic analysis.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37599999/", l: "PMID 37599999" },
  { c: "series", a: "Eisele et al.", t: "The role of neuronal antibodies in cryptogenic new‑onset refractory status epilepticus.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37607299/", l: "PMID 37607299" },
  { c: "series", a: "Furlanis et al.", t: "Role of vagus nerve stimulation in refractory and super‑refractory status epilepticus: a pediatric case series.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/38002548/", l: "PMID 38002548" },
  { c: "series", a: "Moreno‑Braurer P et al.", t: "Spectrum, evolution and clinical relationship of MRI in 31 children with FIRES.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/37798920/", l: "PMID 37798920" },
  { c: "series", a: "Alaskar et al.", t: "Time to FIRE NORSE: a single acronym for heterogeneous presentation.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38330780/", l: "PMID 38330780" },
  { c: "series", a: "Bai et al.", t: "FIRES with claustrum lesion: an underdiagnosed inflammatory encephalopathy.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38342839/", l: "PMID 38342839" },
  { c: "series", a: "Stretti et al.", t: "Long‑term outcome in new‑onset refractory status epilepticus: a retrospective study.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38475798/", l: "PMID 38475798" },
  { c: "series", a: "Costello et al.", t: "Clinical outcomes among initial survivors of cryptogenic new‑onset refractory status epilepticus (NORSE).", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38498313/", l: "PMID 38498313" },
  { c: "series", a: "Jimenez et al.", t: "Comparative analysis of patients with FIRES versus without prior fever: interim analysis.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38625055/", l: "PMID 38625055" },
  { c: "series", a: "Oliger et al.", t: "Responsive neurostimulation as therapy for epilepsy following NORSE: case series and literature review.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38640819/", l: "PMID 38640819" },
  { c: "series", a: "Hanin et al.", t: "Trends in management of NORSE patients from 2016 to 2023: an interim analysis.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38837761/", l: "PMID 38837761" },
  { c: "series", a: "Jang et al.", t: "Prognosis prediction and immunotherapy optimisation for cryptogenic NORSE.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/39237150/", l: "PMID 39237150" },
  { c: "series", a: "Reecher et al.", t: "New‑onset refractory status epilepticus with diffuse cerebral restricted diffusion in young children.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39541921/", l: "PMID 39541921" },
  { c: "series", a: "Yorichika et al.", t: "Early initiation of intravenous cyclophosphamide and one‑year outcomes in super‑refractory cryptogenic NORSE.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39701580/", l: "PMID 39701580" },
  { c: "series", a: "Nemati et al.", t: "NORSE and FIRES cases in children: a retrospective cohort study in South of Iran.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39896696/", l: "PMID 39896696" },
  { c: "series", a: "Bandi et al.", t: "Challenges in management of FIRES: real‑world experience from a large paediatric cohort.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39908710/", l: "PMID 39908710" },
  { c: "series", a: "Fisher et al.", t: "Combined systemic immunotherapy and intrathecal dexamethasone in FIRES.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39932904/", l: "PMID 39932904" },
  { c: "series", a: "Saad et al.", t: "FIRES in children: a retrospective cohort study.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39988600/", l: "PMID 39988600" },
  { c: "series", a: "Liu et al.", t: "Vagus nerve stimulation and fast parameter programming protocol in children with FIRES in ICU.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40000337/", l: "PMID 40000337" },
  { c: "series", a: "Adiga et al.", t: "Phenotype, outcome, interleukins and miRNA levels in NORSE: a prospective cohort study.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40047557/", l: "PMID 40047557" },
  { c: "series", a: "Goh et al.", t: "Clinical outcomes of cryptogenic new‑onset refractory status epilepticus in Singapore.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40053179/", l: "PMID 40053179" },
  { c: "series", a: "Pasqualini et al.", t: "Dramatic response to delayed tocilizumab treatment in new‑onset refractory status epilepticus.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40100558/", l: "PMID 40100558" },
  { c: "series", a: "Diao et al.", t: "Clinical analysis of seven cases of cryptogenic NORSE.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40193644/", l: "PMID 40193644" },
  { c: "series", a: "Halawani et al.", t: "Comparative analysis of NORSE in adult and pediatric patients.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40251332/", l: "PMID 40251332" },
  { c: "series", a: "Farias Moeller et al.", t: "Intrathecal dexamethasone as a FIRES extinguisher: experience in 12 patients.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40279013/", l: "PMID 40279013" },
  { c: "series", a: "Spoden et al.", t: "A case series and review of FIRES.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40310164/", l: "PMID 40310164" },
  { c: "series", a: "Ferreira et al.", t: "Performance of cryptogenic NORSE score in a Brazilian cohort.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40318023/", l: "PMID 40318023" },
  { c: "series", a: "Chin et al.", t: "Pediatric new‑onset super‑refractory status epilepticus (NOSRSE): case series.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40318399/", l: "PMID 40318399" },
  { c: "series", a: "Muccioli et al.", t: "Secondary sclerosing cholangitis in critically ill patients with FIRES.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40343187/", l: "PMID 40343187" },
  { c: "series", a: "Teo et al.", t: "Comparative clinical outcomes in children with FIRES.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40382999/", l: "PMID 40382999" },
  { c: "series", a: "Kilmer et al.", t: "Role of metabolic testing in adult NORSE: single‑centre retrospective study.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40470573/", l: "PMID 40470573" },
  { c: "series", a: "Feng et al.", t: "Minocycline in chronic management of FIRES: case series and literature review.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40481521/", l: "PMID 40481521" },
  { c: "series", a: "Zhao et al.", t: "Clinical and neuroimaging features of patients with claustrum sign.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40496135/", l: "PMID 40496135" },
  { c: "series", a: "He et al.", t: "Observational study of tocilizumab in children with FIRES.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40556126/", l: "PMID 40556126" },
  { c: "series", a: "Shin et al.", t: "Analysis of early EEG changes after tocilizumab treatment in NORSE.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40563808/", l: "PMID 40563808" },
  { c: "series", a: "Giussani et al.", t: "Retrospective multicenter study on cryptogenic NORSE/FIRES treated with anakinra.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40614647/", l: "PMID 40614647" },
  { c: "series", a: "Wang et al.", t: "Clinical characteristics of 27 children with FIRES in a single center.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40625895/", l: "PMID 40625895" },
  { c: "series", a: "Shrestha et al.", t: "Gastrointestinal symptoms are common in patients with NORSE.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40835780/", l: "PMID 40835780" },
  { c: "series", a: "Wang et al.", t: "Vagus nerve stimulation combined with ketogenic diet versus ketogenic diet alone in children with FIRES.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41047417/", l: "PMID 41047417" },
  { c: "series", a: "Das et al.", t: "Spectrum of pediatric acute leukoencephalopathy with restricted diffusion presenting as FIRES.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41129842/", l: "PMID 41129842" },
  { c: "series", a: "Peng et al.", t: "Factors associated with long‑term outcomes in people with new‑onset refractory epilepticus.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41277767/", l: "PMID 41277767" },
  { c: "series", a: "Han et al.", t: "Symmetrical claustrum sign in pediatric FIRES: diagnostic value and clinical implications.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41427492/", l: "PMID 41427492" },
  { c: "series", a: "Fan et al.", t: "Ketogenic diet therapy for adult FIRES: case series of five patients and efficacy analysis.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41466766/", l: "PMID 41466766" },
  { c: "series", a: "Lattanzi et al.", t: "Predicting epilepsy after NORSE due to autoimmune encephalitis: the DAME score.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41467927/", l: "PMID 41467927" },
  { c: "series", a: "Levi Strauss et al.", t: "Extreme type of new‑onset refractory status epilepticus with stimulus‑induced seizures.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/40847775/", l: "PMID 40847775" },
  { c: "series", a: "Gruen et al.", t: "Quality of life over time after new‑onset refractory status epilepticus.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/40944696/", l: "PMID 40944696" },
  { c: "series", a: "Murugesu et al.", t: "Tocilizumab for super‑refractory status epilepticus in children with FIRES: case series.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41401655/", l: "PMID 41401655" },
  { c: "series", a: "Lim et al.", t: "New‑onset refractory status epilepticus associated with Sjögren's disease.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41561677/", l: "PMID 41561677" },
  { c: "series", a: "Yan et al.", t: "Efficacy differences between tocilizumab and ketogenic diet during acute phase of FIRES in children.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41633319/", l: "PMID 41633319" },
  { c: "series", a: "Chidambaram et al.", t: "Pediatric new‑onset super‑refractory status epilepticus: potential of timely immunotherapy in a resource‑limited PICU.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41679100/", l: "PMID 41679100" },
  { c: "series", a: "Li et al.", t: "Metabolism‑corrected propofol exposure intensity and long‑term IQ in pediatric FIRES: retrospective cohort study.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41767518/", l: "PMID 41767518" },
  { c: "series", a: "Yoo et al.", t: "Vagus nerve stimulation as adjunct therapy for super‑refractory status epilepticus including NORSE.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41875755/", l: "PMID 41875755" },
  { c: "series", a: "Deng et al.", t: "Clinical outcomes of tocilizumab usage in cryptogenic FIRES at acute and chronic phase.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42094697/", l: "PMID 42094697" },
  { c: "series", a: "Jayalakshmi et al.", t: "Clinical characteristics, etiology, and outcome of NORSE in adults.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41498863/", l: "PMID 41498863" },
  { c: "series", a: "Abe et al.", t: "Longitudinal changes in brain volume, cognitive function and seizure outcomes in cryptogenic NORSE.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42184585/", l: "PMID 42184585" },
  { c: "series", a: "Tian et al.", t: "The electroencephalographic patterns in the acute phase of febrile infection related epilepsy syndrome in children.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42241938/", l: "PMID 42241938" },
  { c: "series", a: "Pang et al.", t: "Case report: tocilizumab in pediatric febrile infection-related epilepsy syndrome.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42317346/", l: "PMID 42317346" },
  { c: "series", a: "Gilani et al.", t: "Acute and Long-Term EEG and seizure characteristics in new onset refractory status epilepticus (NORSE).", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/42359767/", l: "PMID 42359767" },
  { c: "series", a: "Romozzi et al.", t: "Cenobamate use in super-refractory status epilepticus: A report of three cases.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/42400400/", l: "PMID 42400400" },
  { c: "series", a: "Soler Wenglein et al.", t: "Febrile infection-related epilepsy syndrome (FIRES): duration of therapeutic coma and treatment intensity correlate with poorer functional outcome.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42537571/", l: "PMID 42537571" },
  { c: "series", a: "Hawksworth et al.", t: "New onset refractory status epilepticus (NORSE) versus refractory status epilepticus not meeting NORSE criteria: A comparative clinical and electroencephalography-based study.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42446501/", l: "PMID 42446501" },
  { c: "series", a: "Lin et al.", t: "Multidisciplinary management and nursing care for pediatric patients with febrile infection-related epilepsy syndrome in the acute phase: A case series.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42470032/", l: "PMID 42470032" },
  { c: "series", a: "Cruz-Perez et al.", t: "Management Challenges and Clinical Characteristics of Refractory Status Epilepticus in Mexico: A 102 Patient Retrospective Cohort Study.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42568019/", l: "PMID 42568019" },
  { c: "series", a: "Khan et al.", t: "Claustrum Sign in Febrile Infection-Related Epilepsy Syndrome.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42619283/", l: "PMID 42619283" },
  { c: "series", a: "Han et al.", t: "Electroencephalographic and neuroimaging prognosticators in pediatric FIRES with claustrum lesions: A 21-case retrospective study.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42641489/", l: "PMID 42641489" },
  { c: "series", a: "Junemann et al.", t: "Clinical outcomes and unmet therapeutic needs in new-onset refractory status epilepticus: evidence from a retrospective cohort.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42665853/", l: "PMID 42665853" },
  { c: "series", a: "Liu et al.", t: "Efficacy and safety of tocilizumab in the chronic phase of febrile infection-related epilepsy syndrome: a retrospective cohort study.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42696242/", l: "PMID 42696242" },
  { c: "series", a: "Shivarthi et al.", t: "Initial experience of bortezomib in cryptogenic new-onset refractory status epilepticus: a case series.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42843215/", l: "PMID 42843215" },
  { c: "report", a: "Okanishi et al.", t: "Refractory epilepsy accompanying acute encephalitis with multifocal cortical lesions: possible autoimmune etiology.", y: 2007, u: "https://pubmed.ncbi.nlm.nih.gov/17442514/", l: "PMID 17442514" },
  { c: "report", a: "Boyd et al.", t: "New‑onset refractory status epilepticus with restricted DWI and neuronophagia in the pulvinar.", y: 2010, u: "https://pubmed.ncbi.nlm.nih.gov/20308685/", l: "PMID 20308685" },
  { c: "report", a: "Milh et al.", t: "New‑onset refractory convulsive status epilepticus associated with serum neuropil auto‑antibodies in a school‑aged child.", y: 2011, u: "https://pubmed.ncbi.nlm.nih.gov/21075572/", l: "PMID 21075572" },
  { c: "report", a: "Illingworth et al.", t: "Elevated VGKC‑complex antibodies in a boy with fever‑induced refractory epileptic encephalopathy in school‑age children (FIRES).", y: 2011, u: "https://pubmed.ncbi.nlm.nih.gov/21592118/", l: "PMID 21592118" },
  { c: "report", a: "Specchio et al.", t: "Acute‑onset epilepsy triggered by fever mimicking FIRES: the role of PCDH19 gene mutation.", y: 2011, u: "https://pubmed.ncbi.nlm.nih.gov/21777234/", l: "PMID 21777234" },
  { c: "report", a: "Ismail et al.", t: "AERRPS, DESC, NORSE, FIRES: multi‑labeling or distinct epileptic entities?", y: 2011, u: "https://pubmed.ncbi.nlm.nih.gov/22004046/", l: "PMID 22004046" },
  { c: "report", a: "Boyd et al.", t: "Temporal lobe epilepsy after refractory status epilepticus: an illustrative case and review of the literature.", y: 2012, u: "https://pubmed.ncbi.nlm.nih.gov/22953058/", l: "PMID 22953058" },
  { c: "report", a: "Wakamoto et al.", t: "An immunologic case study of acute encephalitis with refractory, repetitive partial seizures.", y: 2012, u: "https://pubmed.ncbi.nlm.nih.gov/22265641/", l: "PMID 22265641" },
  { c: "report", a: "Nozaki et al.", t: "Reversible splenic lesion in a patient with febrile infection‑related epilepsy syndrome (FIRES).", y: 2013, u: "https://pubmed.ncbi.nlm.nih.gov/23794447/", l: "PMID 23794447" },
  { c: "report", a: "Verma et al.", t: "New‑onset refractory status epilepticus (NORSE) as the heralding manifestation of herpes simplex encephalitis.", y: 2013, u: "https://pubmed.ncbi.nlm.nih.gov/23887985/", l: "PMID 23887985" },
  { c: "report", a: "Puoti et al.", t: "New‑onset refractory status epilepticus mimicking herpes virus encephalitis.", y: 2013, u: "https://pubmed.ncbi.nlm.nih.gov/24163672/", l: "PMID 24163672" },
  { c: "report", a: "Pankajakshan et al.", t: "Refractory status epilepticus complicated by drug‑induced involuntary movements.", y: 2014, u: "https://pubmed.ncbi.nlm.nih.gov/24518529/", l: "PMID 24518529" },
  { c: "report", a: "Barros et al.", t: "Resective surgery in the treatment of super‑refractory partial status epilepticus secondary to NMDAR antibody encephalitis.", y: 2014, u: "https://pubmed.ncbi.nlm.nih.gov/24594428/", l: "PMID 24594428" },
  { c: "report", a: "Gedik et al.", t: "Therapeutic plasma exchange for malignant refractory status epilepticus: a case report.", y: 2014, u: "https://pubmed.ncbi.nlm.nih.gov/24630284/", l: "PMID 24630284" },
  { c: "report", a: "Matsuzono et al.", t: "Ketogenic diet therapy is effective in encephalitis with refractory seizures.", y: 2014, u: "https://pubmed.ncbi.nlm.nih.gov/24735348/", l: "PMID 24735348" },
  { c: "report", a: "Nolan et al.", t: "Anti‑N‑Methyl‑D‑Aspartate receptor encephalitis presenting to the emergency department with status epilepticus.", y: 2014, u: "https://pubmed.ncbi.nlm.nih.gov/25227654/", l: "PMID 25227654" },
  { c: "report", a: "Ibrahim et al.", t: "New‑onset refractory status epilepticus in a young man with H1N1 infection.", y: 2014, u: "https://pubmed.ncbi.nlm.nih.gov/25379313/", l: "PMID 25379313" },
  { c: "report", a: "Hainsworth et al.", t: "Treatment‑responsive GABA(B)‑receptor limbic encephalitis presenting as new‑onset super‑refractory status epilepticus (NORSE) in a deployed soldier.", y: 2014, u: "https://pubmed.ncbi.nlm.nih.gov/25465280/", l: "PMID 25465280" },
  { c: "report", a: "Byler et al.", t: "Rapid onset of hippocampal atrophy in febrile infection‑related epilepsy syndrome (FIRES).", y: 2014, u: "https://pubmed.ncbi.nlm.nih.gov/23400244/", l: "PMID 23400244" },
  { c: "report", a: "Capizzi et al.", t: "Lidocaine treatment in refractory status epilepticus resulting from FIRES: a case report and follow‑up.", y: 2015, u: "https://pubmed.ncbi.nlm.nih.gov/25343330/", l: "PMID 25343330" },
  { c: "report", a: "Moriyama et al.", t: "Protein‑losing enteropathy as a rare complication of the ketogenic diet.", y: 2015, u: "https://pubmed.ncbi.nlm.nih.gov/25724370/", l: "PMID 25724370" },
  { c: "report", a: "Kumari et al.", t: "&quot;The great imitator&quot;: neurosyphilis and new‑onset refractory status epilepticus (NORSE) syndrome.", y: 2015, u: "https://pubmed.ncbi.nlm.nih.gov/25859427/", l: "PMID 25859427" },
  { c: "report", a: "Amer et al.", t: "Refractory status epilepticus from NMDA receptor encephalitis successfully treated with an adjunctive ketogenic diet.", y: 2015, u: "https://pubmed.ncbi.nlm.nih.gov/26019434/", l: "PMID 26019434" },
  { c: "report", a: "Laswell et al.", t: "New‑onset refractory status epilepticus in an adult with an atypical presentation of cat‑scratch disease.", y: 2015, u: "https://pubmed.ncbi.nlm.nih.gov/26044784/", l: "PMID 26044784" },
  { c: "report", a: "Agarwal et al.", t: "Hippocampal changes in febrile infection‑related epilepsy syndrome (FIRES).", y: 2015, u: "https://pubmed.ncbi.nlm.nih.gov/26379807/", l: "PMID 26379807" },
  { c: "report", a: "Ogawa et al.", t: "Autopsy findings of a patient with acute encephalitis and refractory, repetitive partial seizures.", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/26803054/", l: "PMID 26803054" },
  { c: "report", a: "Khawaja et al.", t: "Refractory status epilepticus and glutamic acid decarboxylase antibodies in adults: presentation, treatment and outcomes.", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/26878120/", l: "PMID 26878120" },
  { c: "report", a: "Sato et al.", t: "Acute encephalitis with refractory, repetitive partial seizures: pathological findings and a new therapeutic approach using tacrolimus.", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/26906012/", l: "PMID 26906012" },
  { c: "report", a: "Uchida et al.", t: "High-dose phenobarbital with intermittent short-acting barbiturates for acute encephalitis with refractory, repetitive partial seizures.", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/27273286/", l: "PMID 27273286" },
  { c: "report", a: "Chou et al.", t: "Marked improvement in febrile infection‑related epilepsy syndrome after lidocaine plus MgSO₄ treatment in a 12‑year‑old girl.", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/27358770/", l: "PMID 27358770" },
  { c: "report", a: "Dillien et al.", t: "New‑onset refractory status epilepticus: more investigations, more questions.", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/27462243/", l: "PMID 27462243" },
  { c: "report", a: "Kenney Jung et al.", t: "Febrile infection‑related epilepsy syndrome treated with anakinra.", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/27770579/", l: "PMID 27770579" },
  { c: "report", a: "Zhang et al.", t: "Acute encephalitis with refractory, repetitive partial seizures: a case report and literature review.", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/27882170/", l: "PMID 27882170" },
  { c: "report", a: "Miras Veiga et al.", t: "Effectiveness of electroconvulsive therapy for refractory status epilepticus in FIRES.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/27434885/", l: "PMID 27434885" },
  { c: "report", a: "Uchida et al.", t: "Combination of ketogenic diet and stiripentol for super‑refractory status epilepticus.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28131220/", l: "PMID 28131220" },
  { c: "report", a: "Yamazoe et al.", t: "New‑onset refractory status epilepticus treated with vagus nerve stimulation: a case report.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28267658/", l: "PMID 28267658" },
  { c: "report", a: "Varrasi et al.", t: "Auditory seizures in autoimmune epilepsy: a case with anti‑thyroid antibodies.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28287071/", l: "PMID 28287071" },
  { c: "report", a: "Kaufman et al.", t: "Moyamoya in a patient with FIRES: a first case report.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28436815/", l: "PMID 28436815" },
  { c: "report", a: "Marashly et al.", t: "Successful surgical management of NORSE presenting with gelastic seizures in a 3‑year‑old girl.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28725554/", l: "PMID 28725554" },
  { c: "report", a: "Shrivastava et al.", t: "Plasma exchange as a therapeutic modality in a rare case of cryptogenic NORSE.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28892919/", l: "PMID 28892919" },
  { c: "report", a: "Hau Man et al.", t: "Effect of plasmapheresis on serum levels of clobazam, levetiracetam and topiramate.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28951835/", l: "PMID 28951835" },
  { c: "report", a: "Nardetto et al.", t: "18F‑FDG PET/MRI in cryptogenic NORSE: a potential marker of disease location and activity.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28991656/", l: "PMID 28991656" },
  { c: "report", a: "Matar et al.", t: "New‑onset refractory status epilepticus due to primary angiitis of the central nervous system.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/29062691/", l: "PMID 29062691" },
  { c: "report", a: "Villamar et al.", t: "Rabies encephalitis presenting with new‑onset refractory status epilepticus (NORSE).", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/29620067/", l: "PMID 29620067" },
  { c: "report", a: "Alparslan et al.", t: "FIRES treated with immunomodulation in an 8‑year‑old boy and review of the literature.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/29624228/", l: "PMID 29624228" },
  { c: "report", a: "Kaplan et al.", t: "Limbic and new‑onset refractory tonic status epilepticus in anti‑NMDAR encephalitis.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/30214986/", l: "PMID 30214986" },
  { c: "report", a: "Caputo et al.", t: "FIRES with super‑refractory status epilepticus revealing autoimmune encephalitis due to GABA(A)R antibodies.", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/29203057/", l: "PMID 29203057" },
  { c: "report", a: "Savard et al.", t: "Jamestown Canyon encephalitis with NORSE and electrographic response to ribavirin.", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/29881809/", l: "PMID 29881809" },
  { c: "report", a: "Chan et al.", t: "Electroconvulsive therapy for new‑onset super‑refractory status epilepticus.", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/29926794/", l: "PMID 29926794" },
  { c: "report", a: "Tan et al.", t: "FIRES with multifocal subcortical infarcts: a new imaging phenotype.", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/29980149/", l: "PMID 29980149" },
  { c: "report", a: "Kodama et al.", t: "Favorable outcome of intensive immunotherapies for new‑onset refractory status epilepticus.", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/30083346/", l: "PMID 30083346" },
  { c: "report", a: "Agarwal et al.", t: "Unusual cause of fever, vision loss and super‑refractory status epilepticus in association with simian virus 40 (SV40).", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/30317196/", l: "PMID 30317196" },
  { c: "report", a: "Kurukumbi et al.", t: "Vagus nerve stimulation in super‑refractory NORSE.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/30805233/", l: "PMID 30805233" },
  { c: "report", a: "Ungureanu et al.", t: "Bilateral fronto‑insular FLAIR hyperintensities in NORSE.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31004289/", l: "PMID 31004289" },
  { c: "report", a: "Fatuzzo et al.", t: "FIRES in an adult patient: an early neuroradiological finding.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31093785/", l: "PMID 31093785" },
  { c: "report", a: "Dilena et al.", t: "Therapeutic effect of anakinra in relapsing chronic phase of FIRES.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31168503/", l: "PMID 31168503" },
  { c: "report", a: "Eguchi et al.", t: "Reversible splenial lesion in NORSE: case report.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31254907/", l: "PMID 31254907" },
  { c: "report", a: "Al‑Khateeb et al.", t: "Schizophrenia following NORSE secondary to antiphospholipid syndrome.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31380826/", l: "PMID 31380826" },
  { c: "report", a: "Daida et al.", t: "NORSE involving limbic system, spinal cord, and peripheral nerves.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/31511489/", l: "PMID 31511489" },
  { c: "report", a: "Hainsworth et al.", t: "Super‑refractory status epilepticus treated with high‑dose perampanel.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31565443/", l: "PMID 31565443" },
  { c: "report", a: "Cho et al.", t: "Encephalitis with anti‑SOX1 antibodies presenting with NORSE.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31591846/", l: "PMID 31591846" },
  { c: "report", a: "Westbrook et al.", t: "FIRES treated successfully with anakinra in a 21‑year‑old woman.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31682750/", l: "PMID 31682750" },
  { c: "report", a: "Mizutani et al.", t: "Reversible splenial lesion in a patient with NORSE.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31909228/", l: "PMID 31909228" },
  { c: "report", a: "Hurth et al.", t: "Microdialysis findings in new‑onset refractory non‑convulsive status epilepticus.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/31556003/", l: "PMID 31556003" },
  { c: "report", a: "Monti et al.", t: "Anti‑NMDA receptor encephalitis presenting as NORSE in COVID‑19.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32688169/", l: "PMID 32688169" },
  { c: "report", a: "Eaton et al.", t: "Avoiding anaesthetics after multiple failed drug‑induced comas: an unorthodox NORSE management approach.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/31708492/", l: "PMID 31708492" },
  { c: "report", a: "Houk et al.", t: "Abdominal compartment syndrome as a rare complication of pentobarbital treatment for NORSE.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32223826/", l: "PMID 32223826" },
  { c: "report", a: "Brunker et al.", t: "NORSE with underlying autoimmune etiology.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32435752/", l: "PMID 32435752" },
  { c: "report", a: "Ferlisi et al.", t: "Very prolonged cryptogenic NORSE with good neurological recovery.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32458254/", l: "PMID 32458254" },
  { c: "report", a: "Najjar et al.", t: "CNS complications associated with SARS‑CoV‑2 infection: integrative concepts and case reports.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32758257/", l: "PMID 32758257" },
  { c: "report", a: "Goyal et al.", t: "Atypical case of FIRES following acute encephalitis: impact of physiotherapy on regaining locomotor abilities.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32774660/", l: "PMID 32774660" },
  { c: "report", a: "Kern‑Smith et al.", t: "The cat&apos;s out of the bag: NORSE due to Bartonella henselae.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32891052/", l: "PMID 32891052" },
  { c: "report", a: "Seniaray et al.", t: "18F‑FDG PET/CT in initial diagnosis and treatment response evaluation of NORSE.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/33082685/", l: "PMID 33082685" },
  { c: "report", a: "Vallecoccia et al.", t: "Use of unconventional therapies in super‑refractory status epilepticus: case report and literature review.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/33233961/", l: "PMID 33233961" },
  { c: "report", a: "Kwan et al.", t: "Status epilepticus from GABA(B)R antibody positive encephalitis due to mixed small cell and adenocarcinoma of prostate.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/33257388/", l: "PMID 33257388" },
  { c: "report", a: "Jaafar et al.", t: "Super‑refractory status epilepticus secondary to anti‑GAD antibody encephalitis successfully treated with immunotherapy.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/33305253/", l: "PMID 33305253" },
  { c: "report", a: "Theroux et al.", t: "Improved seizure burden and cognitive performance in a child treated with RNS following FIRES.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/33331273/", l: "PMID 33331273" },
  { c: "report", a: "Stredny et al.", t: "Interleukin‑6 blockade with tocilizumab in anakinra‑refractory FIRES.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/33403221/", l: "PMID 33403221" },
  { c: "report", a: "Dono et al.", t: "New‑onset refractory status epilepticus (NORSE) in post‑SARS‑CoV‑2 autoimmune encephalitis: a case report.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33145624/", l: "PMID 33145624" },
  { c: "report", a: "Yang et al.", t: "Successful treatment of pediatric FIRES with anakinra.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33227629/", l: "PMID 33227629" },
  { c: "report", a: "Baba et al.", t: "Possible role of high‑dose barbiturates and early parenteral ketogenic diet to reduce chronic epilepsy development in FIRES: a case report.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33231274/", l: "PMID 33231274" },
  { c: "report", a: "Jang et al.", t: "Tofacitinib treatment for refractory autoimmune encephalitis.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33656171/", l: "PMID 33656171" },
  { c: "report", a: "Katz et al.", t: "Pearls and pitfalls of introducing ketogenic diet in adult status epilepticus: a guide for intensivists.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33671485/", l: "PMID 33671485" },
  { c: "report", a: "Meenakshi‑Sundaram et al.", t: "Super‑refractory status in FIRES due to hemophagocytic lymphocytic histiocytosis.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33681644/", l: "PMID 33681644" },
  { c: "report", a: "Donnelly et al.", t: "Resolution of cryptogenic new onset refractory status epilepticus with tocilizumab.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33748736/", l: "PMID 33748736" },
  { c: "report", a: "Cossu et al.", t: "Remote teamwork management of NORSE during the COVID‑19 lockdown.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33842087/", l: "PMID 33842087" },
  { c: "report", a: "Wu et al.", t: "Cryptogenic NORSE following blood transfusion in severe anemia.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33881399/", l: "PMID 33881399" },
  { c: "report", a: "Choi et al.", t: "Super‑refractory status epilepticus in autoimmune encephalitis treated with interleukin‑1 receptor antagonist (anakinra).", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34057410/", l: "PMID 34057410" },
  { c: "report", a: "Aladdin et al.", t: "New‑onset refractory status epilepticus following the ChAdOx1 nCoV‑19 vaccine.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34153802/", l: "PMID 34153802" },
  { c: "report", a: "Appleberry et al.", t: "Child with febrile status epilepticus and post‑COVID multisystem inflammatory syndrome.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34285930/", l: "PMID 34285930" },
  { c: "report", a: "Rachfalska et al.", t: "Dramatic course of pediatric cryptogenic FIRES with unusual chronic phase presentation and literature review.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34439649/", l: "PMID 34439649" },
  { c: "report", a: "L&apos;Erario et al.", t: "Sevoflurane as bridge therapy for plasma exchange and anakinra in FIRES.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34596364/", l: "PMID 34596364" },
  { c: "report", a: "Li et al.", t: "Ketogenic diet therapy in the acute phase of FIRES: a case report.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34733679/", l: "PMID 34733679" },
  { c: "report", a: "Nath et al.", t: "Role for electroconvulsive therapy in management of NORSE in a young child.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34747817/", l: "PMID 34747817" },
  { c: "report", a: "Luo et al.", t: "Vagus nerve stimulation for super‑refractory status epilepticus in FIRES: pediatric case report and literature review.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34762158/", l: "PMID 34762158" },
  { c: "report", a: "Shah et al.", t: "NORSE as a manifestation of tuberculosis of the CNS.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34979693/", l: "PMID 34979693" },
  { c: "report", a: "Kumar et al.", t: "Anti‑N‑methyl‑D‑aspartate receptor encephalitis presenting as NORSE responding to rituximab in an adolescent girl.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/36531781/", l: "PMID 36531781" },
  { c: "report", a: "Hect et al.", t: "Deep brain stimulation of the centromedian thalamic nucleus for treatment of FIRES.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/34862854/", l: "PMID 34862854" },
  { c: "report", a: "Palacios‑Mendoza et al.", t: "Response to anakinra in new‑onset refractory status epilepticus: a clinical case.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/34875544/", l: "PMID 34875544" },
  { c: "report", a: "Al‑Chalabi et al.", t: "NORSE secondary to HIV CNS viral escape syndrome: case report.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/34894438/", l: "PMID 34894438" },
  { c: "report", a: "Aydemir et al.", t: "High‑dose cannabidiol (CBD) in treatment of NORSE.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/34896815/", l: "PMID 34896815" },
  { c: "report", a: "Wadayama et al.", t: "Cryptogenic NORSE responded to anti‑interleukin‑6 treatment.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34973472/", l: "PMID 34973472" },
  { c: "report", a: "Obara et al.", t: "Ketogenic diet for a young adult patient with chronic‑phase FIRES.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35165646/", l: "PMID 35165646" },
  { c: "report", a: "Juneja et al.", t: "Evidence‑based approach to diagnosis and prognosis in a young woman with new‑onset super‑refractory status epilepticus.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35221970/", l: "PMID 35221970" },
  { c: "report", a: "Nawfal et al.", t: "New‑onset refractory status epilepticus as early manifestation of multisystem inflammatory syndrome in adults after COVID‑19.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35306658/", l: "PMID 35306658" },
  { c: "report", a: "Perulli et al.", t: "Fighting autoinflammation in FIRES: role of interleukins and early immunomodulation.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35356746/", l: "PMID 35356746" },
  { c: "report", a: "Orlandi et al.", t: "An ultra‑long new‑onset refractory status epilepticus: winning the battle but losing the war.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35445189/", l: "PMID 35445189" },
  { c: "report", a: "Lala et al.", t: "Multifocal multilobar focal cortical dysplasia type IIa in FIRES.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35483186/", l: "PMID 35483186" },
  { c: "report", a: "Acampora et al.", t: "A case of FIRES in a young adult: still a diagnostic and therapeutic challenge.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35507191/", l: "PMID 35507191" },
  { c: "report", a: "Kurimoto et al.", t: "Anti‑inflammatory and immune‑mediated therapy for FIRES with rapid recurrence.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35685830/", l: "PMID 35685830" },
  { c: "report", a: "Sivathanu et al.", t: "Favorable response to classic ketogenic diet in anti‑GAD65 antibody‑mediated super‑refractory status epilepticus.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35789965/", l: "PMID 35789965" },
  { c: "report", a: "Coban et al.", t: "Combined immunoglobulin and plasmapheresis treatment for FIRES.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35879215/", l: "PMID 35879215" },
  { c: "report", a: "Varughese et al.", t: "Initial presentation of PCDH19‑related epilepsy with NORSE treated with anakinra.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35914944/", l: "PMID 35914944" },
  { c: "report", a: "Basso et al.", t: "Connections between FIRES and autoimmune encephalitis: new anti‑neuronal antibodies in a child.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/36003492/", l: "PMID 36003492" },
  { c: "report", a: "Werner et al.", t: "NORSE due to autoimmune encephalitis after SARS‑CoV‑2 vaccination: first case report.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/36051224/", l: "PMID 36051224" },
  { c: "report", a: "Chen et al.", t: "Role of responsive neurostimulation and immunotherapy in refractory epilepsy due to autoimmune encephalitis.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/36408512/", l: "PMID 36408512" },
  { c: "report", a: "Won et al.", t: "The increased interleukin‑6 levels can be an early diagnostic marker for new‑onset refractory status epilepticus.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/36685741/", l: "PMID 36685741" },
  { c: "report", a: "Astner‑Rohracher et al.", t: "NORSE in a patient with FASTKD2‑related mitochondrial disease.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36712458/", l: "PMID 36712458" },
  { c: "report", a: "Kam et al.", t: "Inflammatory epilepsy (FIRES) and hemophagocytic lymphohistiocytosis (HLH): an adult case.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36720516/", l: "PMID 36720516" },
  { c: "report", a: "Bonardi et al.", t: "Myoclonic super‑refractory status epilepticus in a teenager with FIRES treated with VNS and cannabidiol.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36725381/", l: "PMID 36725381" },
  { c: "report", a: "Goh et al.", t: "Bridging the gap: tailoring an approach to treatment in FIRES.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36797068/", l: "PMID 36797068" },
  { c: "report", a: "Rodriguez‑Villar et al.", t: "New‑onset refractory status epilepticus responsive to VNS.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37087686/", l: "PMID 37087686" },
  { c: "report", a: "Indelicato et al.", t: "NORSE due to a novel MT‑TF variant: time for acute genetic testing before treatment.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37090940/", l: "PMID 37090940" },
  { c: "report", a: "Mehta et al.", t: "Intrathecal dexamethasone in FIRES: a case report.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37197372/", l: "PMID 37197372" },
  { c: "report", a: "Guo et al.", t: "Claustrum sign in FIRES.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37273001/", l: "PMID 37273001" },
  { c: "report", a: "Ernst et al.", t: "Responsive neurostimulation as treatment for super‑refractory focal status epilepticus: systematic review and case series.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37329518/", l: "PMID 37329518" },
  { c: "report", a: "Di Dier et al.", t: "Claustrum sign in FIRES.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37396965/", l: "PMID 37396965" },
  { c: "report", a: "Alemdar et al.", t: "Anti‑NMDA receptor encephalitis presenting with NORSE.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37435283/", l: "PMID 37435283" },
  { c: "report", a: "Osbourn et al.", t: "NORSE in a traveler with Japanese encephalitis.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37659268/", l: "PMID 37659268" },
  { c: "report", a: "Sugata et al.", t: "Lidocaine as a potential therapeutic option for super‑refractory status epilepticus.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37692459/", l: "PMID 37692459" },
  { c: "report", a: "Bellingham et al.", t: "Multimodal management of FIRES in a 17‑year‑old male.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37791156/", l: "PMID 37791156" },
  { c: "report", a: "Yang et al.", t: "Refractory status epilepticus associated with a pathogenic variant in TNFRSF13B.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/38054159/", l: "PMID 38054159" },
  { c: "report", a: "Cupane et al.", t: "Beneficial outcome of subsequent treatment with anakinra during chronic phase of FIRES.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/38132976/", l: "PMID 38132976" },
  { c: "report", a: "Watanabe et al.", t: "Reversible Brain Atrophy in Cryptogenic New-onset Refractory Status Epilepticus.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36351577/", l: "PMID 36351577" },
  { c: "report", a: "Mehboob et al.", t: "Refractory status epilepticus arrested by vagus nerve stimulation.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/37875347/", l: "PMID 37875347" },
  { c: "report", a: "Ruttkowski et al.", t: "Febrile infection‑related epilepsy syndrome in a 14‑year‑old girl with multiple organ failure and lethal outcome.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38505775/", l: "PMID 38505775" },
  { c: "report", a: "Nakamura et al.", t: "Treatment of cryptogenic new‑onset refractory status epilepticus (C‑NORSE) with tocilizumab.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38658340/", l: "PMID 38658340" },
  { c: "report", a: "Sun et al.", t: "Electroconvulsive therapy in new‑onset refractory status epilepticus (NORSE) in a pediatric patient.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38763413/", l: "PMID 38763413" },
  { c: "report", a: "Ohno et al.", t: "Steroid‑responsive involuntary movements as a remote symptom of FIRES.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38887352/", l: "PMID 38887352" },
  { c: "report", a: "Kumar et al.", t: "Serial MRI changes in FIRES: a clinical and radiologic exploration.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38912543/", l: "PMID 38912543" },
  { c: "report", a: "Liverant et al.", t: "His brain is on FIRES.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/39033467/", l: "PMID 39033467" },
  { c: "report", a: "Yoneno et al.", t: "Efficacy of ketogenic diet in chronic phase FIRES.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/39119419/", l: "PMID 39119419" },
  { c: "report", a: "Yarimi et al.", t: "IT‑DEX and B cell depletion in a child with anti‑GAD65 autoimmune encephalitis presenting as NORSE.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/39128431/", l: "PMID 39128431" },
  { c: "report", a: "Harrar et al.", t: "Successful management of FIRES using cytokine‑directed therapy.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/39196283/", l: "PMID 39196283" },
  { c: "report", a: "Vrushabhendra et al.", t: "A case of FIRES with favorable response to tocilizumab.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/39257172/", l: "PMID 39257172" },
  { c: "report", a: "Shide‑Moriguchi et al.", t: "Myelin oligodendrocyte glycoprotein antibody‑associated cerebral cortical encephalitis with super‑refractory status epilepticus.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/39261182/", l: "PMID 39261182" },
  { c: "report", a: "Levee et al.", t: "POLG epilepsy presenting as new‑onset refractory status epilepticus (NORSE) in pregnancy.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39209381/", l: "PMID 39209381" },
  { c: "report", a: "Takahasi et al.", t: "Cryptogenic NORSE with bilateral basal ganglia T1‑weighted hyperintensity: autopsy report.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39343569/", l: "PMID 39343569" },
  { c: "report", a: "Wan et al.", t: "Favorable outcomes and FDG‑PET changes after tocilizumab treatment for FIRES in a child.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39689594/", l: "PMID 39689594" },
  { c: "report", a: "Vaingankar et al.", t: "Myelin oligodendrocyte glycoprotein antibody‑associated disease (MOGAD) as a cause of NORSE.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39799767/", l: "PMID 39799767" },
  { c: "report", a: "Li et al.", t: "NORSE secondary to anti‑GAD65 antibody‑positive encephalitis treated with rapid VNS titration protocol.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39801479/", l: "PMID 39801479" },
  { c: "report", a: "Sudarsanan et al.", t: "Early intrathecal dexamethasone associated with faster recovery and good outcome in adolescent FIRES.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39900388/", l: "PMID 39900388" },
  { c: "report", a: "Ochiai et al.", t: "Potential role of perampanel in reducing barbiturate dependency in FIRES: a case report.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39958143/", l: "PMID 39958143" },
  { c: "report", a: "Horiuchi et al.", t: "Status Epilepticus Caused by Tick-borne Encephalitis.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40128988/", l: "PMID 40128988" },
  { c: "report", a: "Konomatsu et al.", t: "Adult‑onset epilepsy with startle‑induced seizure after FIRES.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40232152/", l: "PMID 40232152" },
  { c: "report", a: "Sabaka et al.", t: "Autoimmune encephalitis associated with anti‑SOX1 autoantibodies in COVID‑19.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40330578/", l: "PMID 40330578" },
  { c: "report", a: "Heinrich et al.", t: "Adult‑onset FIRES treated with short‑term anakinra.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40568054/", l: "PMID 40568054" },
  { c: "report", a: "Kola et al.", t: "Rescue use of electroconvulsive therapy in NORSE during pregnancy.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40774775/", l: "PMID 40774775" },
  { c: "report", a: "Karadjole et al.", t: "New‑onset refractory status epilepticus diagnosed in the second trimester.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41113454/", l: "PMID 41113454" },
  { c: "report", a: "Ding et al.", t: "Hemorrhagic cystitis induced by intravenous esketamine in treatment of NORSE in children: a case report.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41113565/", l: "PMID 41113565" },
  { c: "report", a: "Li et al.", t: "Bartonella henselae‑related NORSE/FIRES complicated by stimulus‑induced ictal discharges.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41124380/", l: "PMID 41124380" },
  { c: "report", a: "Okochi et al.", t: "Early recovery from cryptogenic NORSE following repeated C‑NORSE score assessment and cyclophosphamide treatment.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41125373/", l: "PMID 41125373" },
  { c: "report", a: "Kambe et al.", t: "Intensive intracranial pressure and temperature monitoring improving outcome in severe cryptogenic NORSE.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41181192/", l: "PMID 41181192" },
  { c: "report", a: "Lan et al.", t: "Successful treatment of cryptogenic NORSE resistant to immunosuppression with IV ganaxolone and ECT.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41210562/", l: "PMID 41210562" },
  { c: "report", a: "Sasaki et al.", t: "Deep brain stimulation of the anterior thalamic nucleus for seizures after NORSE.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41245234/", l: "PMID 41245234" },
  { c: "report", a: "Caporale et al.", t: "Successful multimodal management of FIRES in a pediatric patient using anakinra, ketogenic diet and induced hypothermia.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41293210/", l: "PMID 41293210" },
  { c: "report", a: "Takatsu et al.", t: "Emergence of atypical lymphocytes before cryptogenic NORSE.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41306648/", l: "PMID 41306648" },
  { c: "report", a: "Tang et al.", t: "Refractory status epilepticus treated with bilateral pulvinar deep brain stimulation.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41345856/", l: "PMID 41345856" },
  { c: "report", a: "Abdullah et al.", t: "Claustrum sign: an increasingly recognized imaging feature of NORSE.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41357437/", l: "PMID 41357437" },
  { c: "report", a: "Foong et al.", t: "Breaking the neuroinflammatory loop with intrathecal dexamethasone in FIRES.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41454105/", l: "PMID 41454105" },
  { c: "report", a: "Yang et al.", t: "Lidocaine as a potential anti‑seizure therapy for pediatric FIRES: a promising approach.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/41480377/", l: "PMID 41480377" },
  { c: "report", a: "Park et al.", t: "Advancing FIRES treatment: the potential of intrathecal dexamethasone.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/42563795/", l: "PMID 42563795" },
  { c: "report", a: "Nico et al.", t: "Rapid recovery after intrathecal dexamethasone in FIRES.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41502299/", l: "PMID 41502299" },
  { c: "report", a: "Tan et al.", t: "FIRES in adults: case report and review of factors associated with survival.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41524901/", l: "PMID 41524901" },
  { c: "report", a: "McLaughlin et al.", t: "Use of electroconvulsive therapy in NORSE: case report and systematic review.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41557907/", l: "PMID 41557907" },
  { c: "report", a: "Chan et al.", t: "Secondary hemophagocytic lymphohistiocytosis concurrent with FIRES in a child.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41637924/", l: "PMID 41637924" },
  { c: "report", a: "Muccioli et al.", t: "Extreme cryptogenic NORSE/FIRES: evidence of profound neuroinflammation and neuronal injury.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41697173/", l: "PMID 41697173" },
  { c: "report", a: "Mirian et al.", t: "Claustrum sign in Hashimoto encephalopathy presenting with NORSE.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42022976/", l: "PMID 42022976" },
  { c: "report", a: "Bildik et al.", t: "Neuroimaging spectrum of immune‑mediated CNS disorders in children following SARS‑CoV‑2 infection — case series component.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42100917/", l: "PMID 42100917" },
  { c: "report", a: "Meng et al.", t: "Superfast VNS titration for the treatment of SRSE in the acute phase of FIRES: a pediatric case report and literature review.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/42261675/", l: "PMID 42261675" },
  { c: "report", a: "Zhang et al.", t: "Anakinra for tocilizumab-refractory febrile infection-related epilepsy syndrome with normal IL-1β levels: a case report.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42367793/", l: "PMID 42367793" },
  { c: "report", a: "Ocakdan et al.", t: "Super-refractory Status Epilepticus in Febrile Infection-Related Epilepsy Syndrome Triggered by Influenza A: A Pediatric Case Report.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42404327/", l: "PMID 42404327" },
  { c: "report", a: "Alamri et al.", t: "Febrile infection-related epilepsy syndrome (FIRES): Long-term challenges of phenobarbital management and drug-resistant epilepsy.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42494178/", l: "PMID 42494178" },
  { c: "report", a: "Chou et al.", t: "Case Report: Anti-GABA-B receptor encephalitis with refractory status epilepticus and favorable short-term recovery.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42614298/", l: "PMID 42614298" },
  { c: "report", a: "Yang et al.", t: "Febrile infection-related epilepsy syndrome with claustrum sign following a human rhinovirus-positive respiratory illness in an adult: a case report.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42824462/", l: "PMID 42824462" },
  { c: "report", a: "Gonzalez et al.", t: "Successful Use of Tocilizumab in a 2-Year-Old Girl With Probable C-NORSE/FIRES: A Case Report.", y: 2026, u: "https://onlinelibrary.wiley.com/doi/10.1111/cen3.70054", l: "doi.org/10.1111/cen3.70054" },
  { c: "report", a: "Kumar Tirlangi et al.", t: "New-onset refractory status epilepticus with a hyperferritinemic hyperinflammatory phenotype in Kyasanur Forest Disease.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42847124/", l: "PMID 42847124" },
  { c: "report", a: "Shide-Moriguchi et al.", t: "Probable sudden unexpected death in epilepsy in chronic febrile infection-related epilepsy syndrome survivors: Silent threat after the storm.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42836786/", l: "PMID 42836786" },
  { c: "other", a: "Van Baalen et al.", t: "FIRES: febrile infection responsive epileptic (FIRE) encephalopathies of school age.", y: 2009, u: "https://pubmed.ncbi.nlm.nih.gov/18573629/", l: "PMID 18573629" },
  { c: "other", a: "Sakuma et al.", t: "Acute encephalitis with refractory, repetitive partial seizures.", y: 2009, u: "https://pubmed.ncbi.nlm.nih.gov/19327924/", l: "PMID 19327924" },
  { c: "other", a: "Rathakrishnan et al.", t: "New onset refractory status epilepticus (NORSE).", y: 2009, u: "https://pubmed.ncbi.nlm.nih.gov/19356770/", l: "PMID 19356770" },
  { c: "other", a: "Kobayashi et al.", t: "Genetic seizure susceptibility underlying acute encephalopathies in childhood.", y: 2010, u: "https://pubmed.ncbi.nlm.nih.gov/20675100/", l: "PMID 20675100" },
  { c: "other", a: "Nabbout et al.", t: "Acute encephalopathy with inflammation-mediated status epilepticus.", y: 2011, u: "https://pubmed.ncbi.nlm.nih.gov/21163447/", l: "PMID 21163447" },
  { c: "other", a: "Suleiman et al.", t: "VGKC antibodies in pediatric encephalitis presenting with status epilepticus.", y: 2011, u: "https://pubmed.ncbi.nlm.nih.gov/21464429/", l: "PMID 21464429" },
  { c: "other", a: "Carranza Rojo et al.", t: "Febrile infection-related epilepsy syndrome is not caused by SCN1A mutations.", y: 2012, u: "https://pubmed.ncbi.nlm.nih.gov/22386634/", l: "PMID 22386634" },
  { c: "other", a: "Kobayashi et al.", t: "Acute encephalopathy with a novel point mutation in the SCN2A gene.", y: 2012, u: "https://pubmed.ncbi.nlm.nih.gov/22591750/", l: "PMID 22591750" },
  { c: "other", a: "Köertvelyessy et al.", t: "FIRES and NORSE are distinct entities.", y: 2012, u: "https://pubmed.ncbi.nlm.nih.gov/22759241/", l: "PMID 22759241" },
  { c: "other", a: "Van Baalen et al.", t: "Febrile Infection-Related Epilepsy Syndrome without Detectable Autoantibodies and Response to Immunotherapy.", y: 2012, u: "https://pubmed.ncbi.nlm.nih.gov/22911482/", l: "PMID 22911482" },
  { c: "other", a: "Appenzeller et al.", t: "Febrile infection-related epilepsy syndrome (FIRES) is not caused by SCN1A, POLG, PCDH19 mutations or rare copy number variations.", y: 2012, u: "https://pubmed.ncbi.nlm.nih.gov/23066759/", l: "PMID 23066759" },
  { c: "other", a: "Nabbout et al.", t: "FIRES and IHHE: Delineation of the syndromes.", y: 2013, u: "https://pubmed.ncbi.nlm.nih.gov/24001074/", l: "PMID 24001074" },
  { c: "other", a: "Pardo et al.", t: "Mechanisms of Epileptogenesis in Pediatric Epileptic Syndromes: Rasmussen Encephalitis, Infantile Spasms, and Febrile Infection-related Epilepsy Syndrome (FIRES).", y: 2014, u: "https://pubmed.ncbi.nlm.nih.gov/24639375/", l: "PMID 24639375" },
  { c: "other", a: "Sakuma et al.", t: "Intrathecal overproduction of proinflammatory cytokines and chemokines in febrile infection-related refractory status epilepticus.", y: 2015, u: "https://pubmed.ncbi.nlm.nih.gov/25398790/", l: "PMID 25398790" },
  { c: "other", a: "Millichap et al.", t: "Ketogenic Diet as Preferred Treatment of FIRES.", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/26933526/", l: "PMID 26933526" },
  { c: "other", a: "Saitoh et al.", t: "Cytokine-related and sodium channel polymorphism as candidate predisposing factors for childhood encephalopathy FIRES/AERRPS.", y: 2016, u: "https://pubmed.ncbi.nlm.nih.gov/27538648/", l: "PMID 27538648" },
  { c: "other", a: "Van Baalen et al.", t: "Febrile Infection–Related Epilepsy Syndrome: Clinical Review and Hypotheses of Epileptogenesis.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/27919115/", l: "PMID 27919115" },
  { c: "other", a: "Neubauer et al.", t: "Treatment of Super-Refractory Status Epilepticus in FIRES.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28027569/", l: "PMID 28027569" },
  { c: "other", a: "Kang et al.", t: "Survey of the diagnostic and therapeutic approach to new-onset refractory status epilepticus.", y: 2017, u: "https://pubmed.ncbi.nlm.nih.gov/28222319/", l: "PMID 28222319" },
  { c: "other", a: "Hirsch et al.", t: "Proposed consensus definitions for new-onset refractory status epilepticus (NORSE), febrile infection-related epilepsy syndrome (FIRES), and related conditions.", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/29399791/", l: "PMID 29399791" },
  { c: "other", a: "Gaspard et al.", t: "New-onset refractory status epilepticus (NORSE) and febrile infection-related epilepsy syndrome (FIRES): State of the art and perspectives.", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/29476535/", l: "PMID 29476535" },
  { c: "other", a: "Hon et al.", t: "Febrile Infection-Related Epilepsy Syndrome (FIRES): An Overview of Treatment and Recent Patents.", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/29745347/", l: "PMID 29745347" },
  { c: "other", a: "Sculier et al.", t: "New onset refractory status epilepticus (NORSE).", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/30482654/", l: "PMID 30482654" },
  { c: "other", a: "Jackson et al.", t: "Reader Response: Rabies encephalitis presenting with new-onset refractory status epilepticus (NORSE).", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/30564485/", l: "PMID 30564485" },
  { c: "other", a: "Smith et al.", t: "Author Response: Rabies encephalitis presenting with new-onset refractory status epilepticus (NORSE).", y: 2018, u: "https://pubmed.ncbi.nlm.nih.gov/30564487/", l: "PMID 30564487" },
  { c: "other", a: "Clarkson et al.", t: "Functional Deficiency in Endogenous Interleukin-1 Receptor Antagonist in Patients with Febrile Infection-Related Epilepsy Syndrome.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/30779222/", l: "PMID 30779222" },
  { c: "other", a: "Culleton et al.", t: "The spectrum of neuroimaging findings in febrile infection-related epilepsy syndrome (FIRES): A literature review.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/30854647/", l: "PMID 30854647" },
  { c: "other", a: "Gofton et al.", t: "New onset refractory status epilepticus research: What is on the horizon?", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/30894443/", l: "PMID 30894443" },
  { c: "other", a: "Gofton et al.", t: "Communication Challenges: A Spotlight on New-Onset Refractory Status Epilepticus.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/30935709/", l: "PMID 30935709" },
  { c: "other", a: "Gaspard et al.", t: "A New Hose to Extinguish the FIRES?.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/30955421/", l: "PMID 30955421" },
  { c: "other", a: "Kothur et al.", t: "Etiology is the key determinant of neuroinflammation in epilepsy: Elevation of cerebrospinal fluid cytokines and chemokines in febrile infection-related epilepsy syndrome and febrile status epilepticus.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31283843/", l: "PMID 31283843" },
  { c: "other", a: "Serino et al.", t: "Febrile infection-related epilepsy syndrome (FIRES): prevalence, impact and management strategies.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31371963/", l: "PMID 31371963" },
  { c: "other", a: "Wickstrom et al.", t: "Strategies for extinguishing FIRES.", y: 2019, u: "https://pubmed.ncbi.nlm.nih.gov/31530449/", l: "PMID 31530449" },
  { c: "other", a: "Payne et al.", t: "Extinguishing Febrile Infection-Related Epilepsy Syndrome: Pipe Dream or Reality?", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32185792/", l: "PMID 32185792" },
  { c: "other", a: "Villamar et al.", t: "Rabies encephalitis presenting with new-onset refractory status epilepticus-Update.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32190425/", l: "PMID 32190425" },
  { c: "other", a: "Sethi et al.", t: "Reader response: New onset refractory status epilepticus research: What is on the horizon?", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32229638/", l: "PMID 32229638" },
  { c: "other", a: "Gofton et al.", t: "Author response: New onset refractory status epilepticus research: What is on the horizon?", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32229639/", l: "PMID 32229639" },
  { c: "other", a: "Sakuma et al.", t: "Neurocritical care and target immunotherapy for febrile infection-related epilepsy syndrome.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32330681/", l: "PMID 32330681" },
  { c: "other", a: "Specchio et al.", t: "New-onset refractory status epilepticus and febrile infection-related epilepsy syndrome.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32372459/", l: "PMID 32372459" },
  { c: "other", a: "Kessi et al.", t: "Efficacy of different treatment modalities for acute and chronic phases of the febrile infection-related epilepsy syndrome: A systematic review.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32417686/", l: "PMID 32417686" },
  { c: "other", a: "Hsieh et al.", t: "Diminished toll-like receptor response in febrile infection-related epilepsy syndrome (FIRES).", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32651134/", l: "PMID 32651134" },
  { c: "other", a: "Helbig et al.", t: "Whole-exome and HLA sequencing in Febrile infection-related epilepsy syndrome.", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32666661/", l: "PMID 32666661" },
  { c: "other", a: "Dinoto et al.", t: "Comment on \"Anti-NMDA receptor encephalitis presenting as new onset refractory status epilepticus in COVID-19\".", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32827979/", l: "PMID 32827979" },
  { c: "other", a: "Ruegg et al.", t: "New-onset super-refractory status epilepticus (NOSRSE): What's in a name?", y: 2020, u: "https://pubmed.ncbi.nlm.nih.gov/32943484/", l: "PMID 32943484" },
  { c: "other", a: "Bhatia et al.", t: "New Onset Refractory Status Epilepticus.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/33620842/", l: "PMID 33620842" },
  { c: "other", a: "Mantoan et al.", t: "New-onset refractory status epilepticus (NORSE).", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33674412/", l: "PMID 33674412" },
  { c: "other", a: "Koh et al.", t: "Proposal to optimize evaluation and treatment of Febrile infection-related epilepsy syndrome (FIRES): A Report from FIRES workshop.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33681649/", l: "PMID 33681649" },
  { c: "other", a: "Kazazian et al.", t: "How to Help Your Patients Enroll in the NORSE and FIRES Family Registry, and Other Rare Epilepsy Registries.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/33769129/", l: "PMID 33769129" },
  { c: "other", a: "Farias Moeller et al.", t: "Parental perception of FIRES outcomes, emotional states, and social media usage.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34098587/", l: "PMID 34098587" },
  { c: "other", a: "Lin et al.", t: "Hypothesis: Febrile infection-related epilepsy syndrome is a microglial NLRP3 inflammasome/IL-1 axis-driven autoinflammatory syndrome.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34141434/", l: "PMID 34141434" },
  { c: "other", a: "Yamanaka et al.", t: "Towards a Treatment for Neuroinflammation in Epilepsy: Interleukin-1 Receptor Antagonist, Anakinra, as a Potential Treatment in Intractable Epilepsy.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/34208064/", l: "PMID 34208064" },
  { c: "other", a: "Lattanzi et al.", t: "Unraveling the enigma of new-onset refractory status epilepticus: a systematic review of aetiologies.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/34661330/", l: "PMID 34661330" },
  { c: "other", a: "Périn et al.", t: "New onset refractory status epilepticus: State of the art.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35031143/", l: "PMID 35031143" },
  { c: "other", a: "Specchio et al.", t: "International League Against Epilepsy classification and definition of epilepsy syndromes with onset in childhood.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35503717/", l: "PMID 35503717" },
  { c: "other", a: "Wickstrom et al.", t: "International consensus recommendations for management of NORSE including FIRES: Summary and Clinical Tools.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35951466/", l: "PMID 35951466" },
  { c: "other", a: "Wickstrom et al.", t: "International consensus recommendations for management of NORSE including FIRES: Statements and Supporting Evidence.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/35997591/", l: "PMID 35997591" },
  { c: "other", a: "Arif et al.", t: "New-Onset Refractory Status Epilepticus Secondary to COVID-19 Infection in Adults: A Systematic Review.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/36065386/", l: "PMID 36065386" },
  { c: "other", a: "Cabezudo-Garcia et al.", t: "Functional outcomes of patients with NORSE and FIRES treated with immunotherapy: A systematic review.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/36155099/", l: "PMID 36155099" },
  { c: "other", a: "Kaur et al.", t: "Fever, Seizures and Encephalopathy: From Bush Fires to Firestorms.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/36211150/", l: "PMID 36211150" },
  { c: "other", a: "Wang et al.", t: "Multi-proteomic Analysis Revealed Distinct Protein Profiles in Cerebrospinal Fluid of Patients Between Anti-NMDAR Encephalitis NORSE and Cryptogenic NORSE.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36224320/", l: "PMID 36224320" },
  { c: "other", a: "Lin et al.", t: "The nuances of immunotherapy for NORSE/FIRES.", y: 2022, u: "https://pubmed.ncbi.nlm.nih.gov/36266948/", l: "PMID 36266948" },
  { c: "other", a: "Wong et al.", t: "Surviving status epilepticus: The patient and family perspective.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36521408/", l: "PMID 36521408" },
  { c: "other", a: "Tharmaraja et al.", t: "The etiology and mortality of new-onset refractory status epilepticus (NORSE) in adults: A systematic review and meta-analysis.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36727541/", l: "PMID 36727541" },
  { c: "other", a: "Taraschenko et al.", t: "Seizure burden and neuropsychological outcomes of new-onset refractory status epilepticus: Systematic review.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36761344/", l: "PMID 36761344" },
  { c: "other", a: "Sculier et al.", t: "New-onset refractory status epilepticus and febrile infection-related epilepsy syndrome.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36762646/", l: "PMID 36762646" },
  { c: "other", a: "Gaspard et al.", t: "Is NORSE a meaningful clinical entity?", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36807989/", l: "PMID 36807989" },
  { c: "other", a: "Hanin et al.", t: "Cytokines in New-Onset Refractory Status Epilepticus Predict Outcomes.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36871188/", l: "PMID 36871188" },
  { c: "other", a: "Li et al.", t: "Blood–brain barrier damage and new onset refractory status epilepticus: An exploratory study using dynamic contrast-enhanced magnetic resonance imaging.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36892496/", l: "PMID 36892496" },
  { c: "other", a: "Howe et al.", t: "Drug-resistant seizures associated with hyperinflammatory monocytes in FIRES.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/36924141/", l: "PMID 36924141" },
  { c: "other", a: "Gopaul et al.", t: "The seasonality of new-onset refractory status epilepticus (NORSE).", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37013696/", l: "PMID 37013696" },
  { c: "other", a: "Cerovic et al.", t: "An in vitro model of drug-resistant seizures for selecting clinically effective antiseizure medications in Febrile Infection-Related Epilepsy Syndrome.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37034097/", l: "PMID 37034097" },
  { c: "other", a: "Hanin et al.", t: "Review and standard operating procedures for collection of biospecimens and analysis of biomarkers in new onset refractory status epilepticus.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37039049/", l: "PMID 37039049" },
  { c: "other", a: "DeCampo et al.", t: "Investigating the genetic contribution in febrile infection-related epilepsy syndrome and refractory status epilepticus.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37077567/", l: "PMID 37077567" },
  { c: "other", a: "Hanin et al.", t: "Neuropathology of New-Onset Refractory Status Epilepticus (NORSE).", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37079033/", l: "PMID 37079033" },
  { c: "other", a: "Vinette et al.", t: "Early identification of NORSE and transfer to care setting with appropriate supports: A proposed algorithm.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37114231/", l: "PMID 37114231" },
  { c: "other", a: "Mantoan et al.", t: "Perspective: Vagal nerve stimulation in the treatment of new-onset refractory status epilepticus.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37153661/", l: "PMID 37153661" },
  { c: "other", a: "Sheikh et al.", t: "A practical approach to in-hospital management of new-onset refractory status epilepticus/febrile infection related epilepsy syndrome.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37251223/", l: "PMID 37251223" },
  { c: "other", a: "Dale et al.", t: "CSF neopterin and quinolinic acid are biomarkers of neuroinflammation and neurotoxicity in FIRES and other infection-triggered encephalopathy syndromes.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37340737/", l: "PMID 37340737" },
  { c: "other", a: "Stavropoulos et al.", t: "Neuromodulation in new-onset refractory status epilepticus.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37388544/", l: "PMID 37388544" },
  { c: "other", a: "Shin et al.", t: "Understanding new-onset refractory status epilepticus from an immunological point of view.", y: 2021, u: "https://pubmed.ncbi.nlm.nih.gov/37469848/", l: "PMID 37469848" },
  { c: "other", a: "Van Baalen et al.", t: "Febrile infection-related epilepsy syndrome in childhood: A clinical review and practical approach.", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37703593/", l: "PMID 37703593" },
  { c: "other", a: "Thomschewski et al.", t: "Editorial: Advances in diagnosing and treating new-onset refractory status epilepticus (NORSE).", y: 2023, u: "https://pubmed.ncbi.nlm.nih.gov/37712084/", l: "PMID 37712084" },
  { c: "other", a: "Carson et al.", t: "Severe, Refractory Seizures: New-Onset Refractory Status Epilepticus and Febrile Infection-Related Epilepsy Syndrome.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/37951651/", l: "PMID 37951651" },
  { c: "other", a: "Kang et al.", t: "Interleukin-1 in Febrile Infection-Related Epilepsy Syndrome.", y: 2023, u: "https://doi.org/10.26815/acn.2023.00031", l: "doi.org/10.26815/acn.2023.00031" },
  { c: "other", a: "Hanin et al.", t: "New onset refractory status epilepticus: Summary of the NORSE Institute roundtable during the 2023 American Epilepsy Society meeting.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38421053/", l: "PMID 38421053" },
  { c: "other", a: "Hanin et al.", t: "Second-line immunotherapy in new onset refractory status epilepticus.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38430119/", l: "PMID 38430119" },
  { c: "other", a: "Bolle et al.", t: "NORSE seasonality may vary geographically in adults.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38635008/", l: "PMID 38635008" },
  { c: "other", a: "Hanin et al.", t: "Single-Cell Transcriptomic Analyses of Brain Parenchyma in Patients With NORSE.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/38810181/", l: "PMID 38810181" },
  { c: "other", a: "Champsas et al.", t: "NORSE/FIRES: how can we advance our understanding of this devastating condition?", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/39175762/", l: "PMID 39175762" },
  { c: "other", a: "Kazazian et al.", t: "Communication trends over time in new-onset refractory status epilepticus (NORSE): Interim analysis from the NORSE/FIRES Family Registry.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/39241640/", l: "PMID 39241640" },
  { c: "other", a: "Jang et al.", t: "Polygenic Landscape of Cryptogenic New-Onset Refractory Status Epilepticus: A Comprehensive Whole-Genome Sequencing Study.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/39440581/", l: "PMID 39440581" },
  { c: "other", a: "Sheikh et al.", t: "Corrigendum: A practical approach to in-hospital management of new-onset refractory status epilepticus/febrile infection related epilepsy syndrome.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/39588231/", l: "PMID 39588231" },
  { c: "other", a: "Eschbach et al.", t: "Navigating life after NORSE and FIRES: Insights from caregiver and patient interviews.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39740258/", l: "PMID 39740258" },
  { c: "other", a: "Kazazian et al.", t: "Age-associated differences in FIRES: Characterizing prodromal presentation and long-term outcomes via the web-based NORSE/FIRES Family Registry.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39804054/", l: "PMID 39804054" },
  { c: "other", a: "Stavropoulos et al.", t: "New-onset refractory status epilepticus after SARS-CoV-2 infection: a review of literature.", y: 2024, u: "https://pubmed.ncbi.nlm.nih.gov/39812100/", l: "PMID 39812100" },
  { c: "other", a: "Espino et al.", t: "New onset refractory status epilepticus: Long-term outcomes beyond seizures.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/39825688/", l: "PMID 39825688" },
  { c: "other", a: "Goh et al.", t: "CSF Tau Is a Biomarker of Hippocampal Injury in Cryptogenic New-Onset Refractory Status Epilepticus.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40164513/", l: "PMID 40164513" },
  { c: "other", a: "Jin et al.", t: "Cytokines in new-onset refractory status epilepticus: ready for clinical use?.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40217433/", l: "PMID 40217433" },
  { c: "other", a: "Wang et al.", t: "Potential inflammatory mechanisms of the ketogenic diet against febrile infection-related epilepsy syndrome.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40217546/", l: "PMID 40217546" },
  { c: "other", a: "Guillemaud et al.", t: "Identification of Distinct Biological Groups of Patients With Cryptogenic NORSE via Inflammatory Profiling.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40334176/", l: "PMID 40334176" },
  { c: "other", a: "Steriade et al.", t: "Patients with status epilepticus and new-onset refractory status epilepticus display drastically altered fecal microbiomes compared to chronic epilepsy patients.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40387216/", l: "PMID 40387216" },
  { c: "other", a: "Hanin et al.", t: "Immune dysregulation in new-onset refractory status epilepticus (NORSE): current insights and therapeutic perspectives.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40712353/", l: "PMID 40712353" },
  { c: "other", a: "Shah et al.", t: "Update in new-onset refractory status epilepticus and febrile infection-related epilepsy syndrome.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40831349/", l: "PMID 40831349" },
  { c: "other", a: "Aphale et al.", t: "Letter to the editor: Immune dysregulation in new-onset refractory status epilepticus (NORSE): current insights and therapeutic perspectives.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40834618/", l: "PMID 40834618" },
  { c: "other", a: "Guillemaud et al.", t: "Standard complete blood count to predict long-term outcomes in febrile infection-related epilepsy syndrome (FIRES): A multicenter study.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40844418/", l: "PMID 40844418" },
  { c: "other", a: "Fisher et al.", t: "De novo pathogenic CSF1R variant implicates microglial dysfunction in pathogenesis of febrile infection-related epilepsy syndrome.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40956030/", l: "PMID 40956030" },
  { c: "other", a: "Al Wahaibi et al.", t: "The spectrum of cognitive outcomes following admission to hospital for refractory status epilepticus (RSE): A scoping review.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/40972237/", l: "PMID 40972237" },
  { c: "other", a: "Suri-Baez et al.", t: "Beyond Anakinra and Tocilizumab: Additional Adjunctive Therapies in Pediatric NORSE and FIRES - A Narrative Review.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41265024/", l: "PMID 41265024" },
  { c: "other", a: "Hanin et al.", t: "Exploring pathways leading to drug-resistant epilepsy for patients with cryptogenic new onset refractory status epilepticus.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41697646/", l: "PMID 41697646" },
  { c: "other", a: "Nasuno et al.", t: "An increase in cerebrospinal fluid macrophage migration inhibitory factor levels in pediatric patients with acute neuroinflammatory diseases.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41707435/", l: "PMID 41707435" },
  { c: "other", a: "Shen et al.", t: "A model of new-onset refractory status epilepticus (NORSE) using intrahippocampal kainic acid in adolescent mice.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/41762487/", l: "PMID 41762487" },
  { c: "other", a: "Meletti et al.", t: "Acute Brain Injury in New-Onset Refractory Status Epilepticus and Etiology-Defined Status Epilepticus.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42043830/", l: "PMID 42043830" },
  { c: "other", a: "Konomatsu et al.", t: "Vagus nerve stimulation markedly reduced startle-induced seizures after febrile infection-related epilepsy syndrome.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/42216995/", l: "PMID 42216995" },
  { c: "other", a: "Eschbach et al.", t: "New-onset refractory status epilepticus/febrile infection-related epilepsy syndrome centers of excellence: a framework for coordinated care, research, and improved outcomes.", y: 2025, u: "https://pubmed.ncbi.nlm.nih.gov/42257690/", l: "PMID 42257690" },
  { c: "other", a: "Farias-Moeller & Lai", t: "Biomarkers of new onset refractory status epilepticus (NORSE) and febrile infection-related epilepsy syndrome (FIRES).", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42822996/", l: "PMID 42822996" },
  { c: "other", a: "Hanin et al.", t: "Insights into new-onset refractory status epilepticus (NORSE) from biorepository-based studies.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42822994/", l: "PMID 42822994" },
  { c: "other", a: "Eschbach & Gofton", t: "The post-acute phase of new-onset refractory status epilepticus (NORSE) / febrile infection-related epilepsy syndrome (FIRES).", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42823003/", l: "PMID 42823003" },
  { c: "other", a: "Fisher & Muscal", t: "Immunotherapies for NORSE and FIRES.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42822993/", l: "PMID 42822993" },
  { c: "other", a: "Wickström et al.", t: "Recognizing NORSE and FIRES — clinical course, diagnosis and evaluation.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42822992/", l: "PMID 42822992" },
  { c: "other", a: "Thomas et al.", t: "The creation of an international NORSE/FIRES virtual consultation forum.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42822995/", l: "PMID 42822995" },
  { c: "other", a: "Wong et al.", t: "Physician–Family Communication in New-Onset Refractory Status Epilepticus (NORSE): Communicating when there are few answers.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42822999/", l: "PMID 42822999" },
  { c: "other", a: "Phong et al.", t: "Time-dependent changes in cerebrospinal fluid cytokines in NORSE and FIRES: A systematic review.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42462374/", l: "PMID 42462374" },
  { c: "other", a: "Gettings et al.", t: "Symptomatic Management of NORSE/FIRES: Acute and Chronic Anti-seizure Treatment.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42823000/", l: "PMID 42823000" },
  { c: "other", a: "Mantoan Ritter et al.", t: "Neuromodulation in NORSE/FIRES.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42823002/", l: "PMID 42823002" },
  { c: "other", a: "Kuo et al.", t: "Vagus nerve stimulation for refractory status epilepticus: A systematic review.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42531696/", l: "PMID 42531696" },
  { c: "other", a: "Wang et al.", t: "Total bilirubin-to-albumin ratio and systemic immune inflammation index as prognostic indicators in children with febrile infection-related epilepsy syndrome.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42551214/", l: "PMID 42551214" },
  { c: "other", a: "Burani et al.", t: "Claustrum Involvement in New Onset Refractory Status Epilepticus: A Systematic Review.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42552664/", l: "PMID 42552664" },
  { c: "other", a: "Phong et al.", t: "Adaptive immune dysregulation drives new-onset refractory status epilepticus.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42597690/", l: "PMID 42597690" },
  { c: "other", a: "Eyre et al.", t: "Infection-triggered encephalopathy syndromes: a meta-analysis of clinical characteristics and outcomes in 1946 cases.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42699010/", l: "PMID 42699010" },
  { c: "other", a: "Foong et al.", t: "Intrathecal dexamethasone in FIRES.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42801909/", l: "PMID 42801909" },
  { c: "other", a: "Hanin et al.", t: "Longitudinal serum and CSF cytokine dynamics in NORSE: Associations with immunotherapy exposure.", y: 2026, u: "https://pubmed.ncbi.nlm.nih.gov/42984304/", l: "PMID 42984304" },
];

/* Index de recherche (calculé une seule fois) */
const INDEX = REFS.map((r, i) => ({ ...r, i, s: norm(`${r.a} ${r.t} ${r.y} ${r.l}`) }));