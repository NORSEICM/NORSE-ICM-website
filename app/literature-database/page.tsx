"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* =====================================================================
   PAGE « LITERATURE DATABASE » — NORSE Evidence Database
   Chiffres et textes regroupés ci-dessous pour les mettre à jour facilement.
   ===================================================================== */

/* Nombre total d'articles éligibles (utilisé en haut de page et dans la méthodologie) */
const TOTAL_ARTICLES = "470";

const STATS = [
  { number: TOTAL_ARTICLES, label: "Eligible articles" },
  { number: "4,000+", label: "Patients described" },
  { number: "1,920+", label: "Individual-level data" },
  { number: "40+", label: "Countries represented" },
];

const PROSPERO = { id: "CRD420261395810", url: "https://www.crd.york.ac.uk/prospero/" };

const SEARCH_FACTS = [
  { label: "Search date", value: "Updated November 06, 2026" },
  { label: "Selection process", value: "Multi-step screening by two independent experts" },
  { label: "Study types", value: "Case reports, case series, reviews, pathophysiology studies, guidelines" },
];

const ARTICLE_TYPES = [
  { n: "187", l: "Case reports" },
  { n: "152", l: "Case series" },
  { n: "63", l: "Reviews" },
  { n: "30", l: "Pathophysiology studies" },
];

const SCOPE = [
  "More than 4,000 patients described across all studies",
  "More than 1,920 patients with individual-level data available",
  "Both pediatric and adult populations",
  "Multi-country representation across 40+ countries",
];

const TOP_COUNTRIES = [
  { country: "United States", count: "125 articles" },
  { country: "Japan", count: "51 articles" },
  { country: "China", count: "40 articles" },
];

/* ================= STYLE (thème du site) ================= */

const SERIF = "font-[family-name:var(--font-bodoni)]";
const ORANGE = "#f5a524";
const CARD = "rounded-xl border border-slate-200 bg-white shadow-sm transition duration-500 ease-out hover:shadow-md";
const EASE = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 28, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};
const revealDelay = (delay: number) => ({ ...reveal, transition: { ...reveal.transition, delay } });

function Section({ id, kicker, title, muted = false, children }: { id?: string; kicker: string; title: string; muted?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={`w-full scroll-mt-20 ${muted ? "bg-slate-50" : "bg-white"} text-slate-700`}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <motion.div {...reveal} className="mb-12 flex flex-col items-center text-center">
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
        </motion.div>
        {children}
      </div>
    </section>
  );
}

const Icon = ({ d, className = "h-5 w-5" }: { d: string; className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);
const I = {
  check: "m4.5 12.75 6 6 9-13.5",
  info: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
  shield: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  search: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
  globe: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  mail: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
};

/* Petite liste à puces orange */
function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
          <span className="mt-0.5 shrink-0 text-[#c27c06]">
            <Icon d={I.check} className="h-4 w-4" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* Catégories d'extraction (A à F) */
const CATEGORIES: { id: string; title: string; summary: string; content: ReactNode }[] = [
  {
    id: "A",
    title: "Demographics",
    summary: "Country, center, age group, age at presentation, sex",
    content: (
      <p className="text-sm leading-relaxed text-slate-600">
        Country of enrollment, center of enrollment, age group (pediatric vs. adult), age at presentation, sex.
      </p>
    ),
  },
  {
    id: "B",
    title: "Presentation",
    summary: "FIRES classification and prodromal symptoms",
    content: (
      <div className="space-y-2 text-sm leading-relaxed text-slate-600">
        <p>
          <strong className="text-slate-800">FIRES classification</strong>
        </p>
        <p>
          <strong className="text-slate-800">Prodromal symptoms:</strong> fatigue, respiratory symptoms, gastrointestinal symptoms,
          behavioral changes, headache, rash, consciousness alterations, memory disturbances, sleep disorders.
        </p>
      </div>
    ),
  },
  {
    id: "C",
    title: "Etiology",
    summary: "Cryptogenic, autoimmune, viral, genetic and other causes",
    content: (
      <p className="text-sm leading-relaxed text-slate-600">
        Cryptogenic, autoimmune encephalitis (AIE), viral, genetic, and other identified causes with detailed characterization.
      </p>
    ),
  },
  {
    id: "D",
    title: "Treatment",
    summary: "Immunotherapies, ASMs, anesthetics and other approaches",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-slate-600">
        <div>
          <p className="mb-2 font-semibold text-slate-800">Immunotherapies</p>
          <Bullets
            items={[
              <>
                <strong className="text-slate-800">First-line:</strong> steroids, intravenous immunoglobulin, plasma exchange
              </>,
              <>
                <strong className="text-slate-800">Second-line:</strong> anakinra, tocilizumab, intrathecal steroids, rituximab,
                cyclophosphamide, anti-JAK-STAT agents
              </>,
              <>Dosages and time-to-initiation when available</>,
            ]}
          />
        </div>
        <div>
          <p className="mb-1 font-semibold text-slate-800">Other therapeutic approaches</p>
          <p>Ketogenic diet (KD), vagus nerve stimulation (VNS), electroconvulsive therapy (ECT), therapeutic hypothermia.</p>
        </div>
        <div>
          <p className="mb-1 font-semibold text-slate-800">Antiseizure medications (ASMs)</p>
          <p>Levetiracetam, phenobarbital, phenytoin, valproic acid, lacosamide, perampanel, and others.</p>
        </div>
        <div>
          <p className="mb-1 font-semibold text-slate-800">Continuous intravenous anesthetic drugs (CIVADs)</p>
          <p>Propofol, midazolam, ketamine/esketamine, thiopental, and inhaled anesthetics.</p>
        </div>
      </div>
    ),
  },
  {
    id: "E",
    title: "Workup",
    summary: "Blood, CSF, metabolic & genetic tests, imaging, EEG",
    content: (
      <div className="overflow-hidden rounded-lg border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs tracking-wider text-slate-500 uppercase">
            <tr>
              <th className="w-1/3 px-4 py-3 font-semibold">Modality</th>
              <th className="px-4 py-3 font-semibold">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {[
              ["Blood tests", "CBC, organ function, cytokines, auto-immune panels"],
              ["CSF analysis", "WBC/RBC counts, protein, glucose, oligoclonal bands, cytokines, viral/bacterial tests, auto-immune panels"],
              ["Metabolic & genetic tests", "Individual-level results"],
              ["Neuroimaging", "CT head and MRI findings during ICU stay"],
              ["Advanced imaging", "PET findings during ICU stay"],
              ["Electrophysiology", "EEG findings during ICU stay"],
            ].map(([m, d]) => (
              <tr key={m}>
                <td className="px-4 py-3 align-top font-semibold text-slate-800">{m}</td>
                <td className="px-4 py-3">{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "F",
    title: "Clinical outcomes",
    summary: "Acute phase and long-term follow-up",
    content: (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-slate-50 p-5">
          <p className="mb-3 font-semibold text-slate-800">Acute phase</p>
          <Bullets
            items={[
              "ICU complications",
              "Need for tracheostomy",
              "Duration of status epilepticus, ICU length of stay, mechanical ventilation duration",
              "Mortality at discharge",
            ]}
          />
        </div>
        <div className="rounded-lg bg-slate-50 p-5">
          <p className="mb-3 font-semibold text-slate-800">Follow-up period</p>
          <Bullets
            items={[
              "Duration of follow-up",
              "Functional outcomes",
              "Mortality at last follow-up",
              "Development of post-NORSE epilepsy",
              "Status epilepticus recurrence and number of subsequent events",
              "Treatment during follow-up",
              "Chronic MRI, PET, and EEG findings",
            ]}
          />
        </div>
      </div>
    ),
  },
];

/* ================= PAGE ================= */

export default function LiteratureDatabasePage() {
  return (
    <div className="w-full overflow-x-hidden bg-white text-slate-700">
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
            Literature Database
          </motion.p>

          <motion.h1
            className={`${SERIF} mt-4 text-5xl font-bold tracking-tight md:text-6xl`}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
          >
            NORSE Evidence Database
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
          >
            Building the largest systematic dataset on NORSE &amp; FIRES worldwide.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
          >
            <a
              href="#methodology"
              className="rounded-lg px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition duration-500 ease-out hover:-translate-y-0.5"
              style={{ backgroundColor: ORANGE }}
            >
              Explore the methodology
            </a>
            <a
              href="mailto:aurelie.hanin@icm-institute.org"
              className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition duration-500 ease-out hover:bg-white/10"
            >
              Collaborate with us
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
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <Section kicker="About the database" title="Systematic database review">
        <motion.p {...reveal} className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-600">
          To advance understanding of NORSE and FIRES, the ICM NORSE team created a comprehensive, systematic evidence database.
          Using rigorous <strong className="text-slate-900">PRISMA methodology</strong>, we aggregated data from published
          literature to establish a large-scale, multi-center dataset enabling novel research and clinical insights.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div {...reveal} className={`${CARD} flex items-center justify-between gap-6 p-6`}>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5a524]/15 text-[#c27c06]">
                <Icon d={I.shield} />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase">PROSPERO registration</p>
                <p className="mt-1 font-mono text-sm font-semibold text-slate-900">{PROSPERO.id}</p>
              </div>
            </div>
            <a
              href={PROSPERO.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-semibold whitespace-nowrap text-slate-900 underline decoration-[#f5a524] decoration-2 underline-offset-4"
            >
              View registry →
            </a>
          </motion.div>

          <motion.div {...revealDelay(0.1)} className={`${CARD} flex items-center gap-4 p-6`}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
              <Icon d={I.info} />
            </span>
            <p className="text-sm leading-relaxed text-slate-600">
              Results from this systematic database review will be published in peer-reviewed journals.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ---------- METHODOLOGY ---------- */}
      <Section id="methodology" kicker="PRISMA methodology" title="How the database was built" muted>
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Recherche */}
          <motion.div {...reveal} className={`${CARD} p-7 lg:col-span-3`}>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5a524]/15 text-[#c27c06]">
                <Icon d={I.search} />
              </span>
              <p className={`${SERIF} text-xl font-bold text-slate-900`}>Search strategy</p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              A systematic PRISMA search was conducted using the key terms{" "}
              <em className="text-slate-800">
                &apos;new-onset refractory status epilepticus&apos;, &apos;febrile infection-related epilepsy syndrome&apos;,
                &apos;NORSE&apos;, &apos;FIRES&apos;
              </em>
              , and related variants.
            </p>
            <dl className="mt-6 divide-y divide-slate-100 border-t border-slate-100">
              {SEARCH_FACTS.map((f) => (
                <div key={f.label} className="grid gap-1 py-3 sm:grid-cols-3">
                  <dt className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">{f.label}</dt>
                  <dd className="text-sm text-slate-800 sm:col-span-2">{f.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Périmètre */}
          <motion.div {...revealDelay(0.1)} className={`${CARD} p-7 lg:col-span-2`}>
            <p className={`${SERIF} text-xl font-bold text-slate-900`}>Database scope</p>
            <p className="mt-2 mb-5 text-sm text-slate-500">One of the largest aggregated NORSE/FIRES datasets worldwide.</p>
            <Bullets items={SCOPE} />
          </motion.div>
        </div>

        {/* Répartition des articles */}
        <motion.div {...reveal} className="mt-6 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-7 text-white">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">Eligible articles</p>
            <p className={`${SERIF} text-4xl font-bold`} style={{ color: ORANGE }}>
              {TOTAL_ARTICLES}
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {ARTICLE_TYPES.map((t) => (
              <div key={t.l} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className={`${SERIF} text-2xl font-bold`}>{t.n}</p>
                <p className="mt-1 text-xs text-slate-300">{t.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ---------- GLOBAL COVERAGE ---------- */}
      <Section kicker="40+ countries" title="Global research coverage">
        <motion.div {...reveal} className={`${CARD} p-4 md:p-6`}>
          <Image src="/map.png" alt="Global research coverage map" width={1400} height={800} className="h-auto w-full rounded-lg" />
        </motion.div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {TOP_COUNTRIES.map((c, i) => (
            <motion.div key={c.country} {...revealDelay(i * 0.1)} className={`${CARD} flex items-center gap-4 p-5`}>
              <span className={`${SERIF} text-3xl font-bold text-slate-200`}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-semibold text-slate-900">{c.country}</p>
                <p className="text-sm text-slate-500">{c.count}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p {...reveal} className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-slate-500 italic">
          <Icon d={I.globe} className="h-4 w-4 shrink-0" />
          This international dataset reflects the global recognition of NORSE/FIRES as a significant clinical challenge.
        </motion.p>
      </Section>

      {/* ---------- DATA EXTRACTION ---------- */}
      <Section kicker="Variables collected" title="Data extraction categories" muted>
        <div className="mx-auto max-w-4xl space-y-3">
          {CATEGORIES.map((c, i) => (
            <motion.details key={c.id} {...revealDelay(i * 0.05)} className={`${CARD} group overflow-hidden`}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f5a524] text-sm font-bold text-[#c27c06]">
                    {c.id}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{c.title}</p>
                    <p className="text-xs text-slate-500">{c.summary}</p>
                  </div>
                </div>
                <span className="text-xl leading-none text-slate-400 transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-slate-100 px-6 py-5">{c.content}</div>
            </motion.details>
          ))}
        </div>
      </Section>

      {/* ---------- COLLABORATION ---------- */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/5" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-white/5" />
        <motion.div {...reveal} className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <h2 className={`${SERIF} text-3xl font-bold tracking-tight md:text-4xl`}>Collaborate with us</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-300">
            Are you interested in contributing clinical data or collaborating on analyses?
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:aurelie.hanin@icm-institute.org"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition duration-500 ease-out hover:-translate-y-0.5"
              style={{ backgroundColor: ORANGE }}
            >
              <Icon d={I.mail} className="h-4 w-4" />
              aurelie.hanin@icm-institute.org
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}