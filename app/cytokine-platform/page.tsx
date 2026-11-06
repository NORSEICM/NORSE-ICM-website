"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cytokinesplatform from "./cytokinesplatform.png";
import iconeapp from "./iconeapp.png";
import { REFERRAL_MAILTO } from "../referral";

/* =====================================================================
   PAGE « CYTOKINE PLATFORM »
   Les chiffres, marqueurs, publications et FAQ sont regroupés ci-dessous.
   ===================================================================== */

const STATS = [
  { number: "12", label: "Inflammatory markers" },
  { number: "942", label: "Serum samples analyzed" },
  { number: "409", label: "CSF samples analyzed" },
  { number: "<7 days", label: "Turnaround time" },
];

const RESULTS_UPDATED = "November 06, 2026";

const PLATES = [
  {
    title: "Plate 1",
    items: [
      ["CCL2", "Monocyte Chemoattractant Protein-1"],
      ["CCL3", "Macrophage Inflammatory Protein-1α"],
      ["IL-2", "Interleukin-2"],
      ["IL-6", "Interleukin-6"],
      ["CXCL8 / IL-8", "Interleukin-8"],
      ["G-CSF", "Granulocyte-Colony Stimulating Factor"],
    ],
  },
  {
    title: "Plate 2",
    items: [
      ["IL-1β", "Interleukin-1 beta"],
      ["IL-4", "Interleukin-4"],
      ["IL-10", "Interleukin-10"],
      ["IL-12p70", "Interleukin-12p70"],
      ["IL-17A", "Interleukin-17A"],
      ["TNF-α", "Tumor Necrosis Factor-alpha"],
    ],
  },
];

/* Publications : la plus récente en premier.
   ⚠ Les 2 premières sont à compléter (titre, auteurs, revue, année) à partir de PubMed. */
const PUBLICATIONS = [
    {
    title: "Longitudinal serum and CSF cytokine dynamics in NORSE: Associations with immunotherapy exposure",
    authors: "Hanin et al.",
    journal: "Epilepsia — 2026",
    ids: "PMID: 42984304 · DOI: 10.1002/epi.70566",
    url: "https://doi.org/10.1002/epi.70566",
  },
  {
    title: "Exploring pathways leading to drug-resistant epilepsy for patients with cryptogenic new onset refractory status epilepticus",
    authors: "Hanin et al.",
    journal: "Epilepsia — 2026",
    ids: "PMID: 41697646 · PMCID: PMC13179670 · DOI: 10.1002/epi.70146",
    url: "https://doi.org/10.1002/epi.70146",
  },
  {
    title: "Graph-based analysis of inflammatory profiles in New Onset Refractory Status Epilepticus (NORSE)",
    authors: "Denis et al.",
    journal: "arXiv — 2026",
    ids: "arXiv: 2606.24351",
    url: "https://arxiv.org/abs/2606.24351",
  },
  {
    title: "Identification of Distinct Biological Groups of Patients With Cryptogenic NORSE via Inflammatory Profiling",
    authors: "Guillemaud et al.",
    journal: "Neurology® Neuroimmunology & Neuroinflammation — 2025",
    ids: "PMID: 40334176 · PMCID: PMC12063244 · DOI: 10.1212/NXI.0000000000200403",
    url: "https://www.neurology.org/doi/10.1212/NXI.0000000000200403",
  },
  {
    title: "Cytokines in New-Onset Refractory Status Epilepticus Predict Outcomes",
    authors: "Hanin et al.",
    journal: "Annals of Neurology — 2023",
    ids: "PMID: 36871188 · DOI: 10.1002/ana.26627",
    url: "https://onlinelibrary.wiley.com/doi/10.1002/ana.26627",
  },
];

const FAQ = [
  { tag: "Cost", q: "What is the cost of cytokine analysis?", a: "Cytokine analyses are supported by the NORSE-ICM research team. There is no cost for clinicians." },
  { tag: "Capacity", q: "How many samples can you process simultaneously?", a: "Our platform can measure up to 36 samples per analysis run. This allows us to maintain our rapid turnaround time (<7 days) while ensuring high-quality standardized results." },
  { tag: "Samples", q: "Can you analyze retrospectively collected samples?", a: "Yes, we can analyze samples that were collected retrospectively, if they have been collected following our protocol and stored at -80°C without being thawed and refrozen." },
  { tag: "Protocol", q: "Can samples be collected at different time points?", a: "Yes. Longitudinal sampling at multiple time points provides valuable information about inflammatory dynamics throughout the disease course." },
  { tag: "Quality", q: "What quality control measures are in place?", a: "All analyses include controls, standard curves, and documented quality parameters." },
  { tag: "Results", q: "How are results reported?", a: "Results are provided as cytokine concentrations (pg/mL) in a detailed report with interpretative notes when available." },
  { tag: "Samples", q: "Are both serum and CSF analysis necessary?", a: "Ideally, paired serum and CSF samples provide the most comprehensive view of inflammatory responses, as CSF often reflects compartmentalized CNS inflammation. However, serum alone is acceptable if CSF collection is not feasible." },
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

/* Icônes (traits fins, sans emoji) */
const Icon = ({ d, className = "h-5 w-5" }: { d: string; className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);
const I = {
  bolt: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  info: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
  layers: "M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3",
  network: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z",
  chart: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
  check: "m4.5 12.75 6 6 9-13.5",
  doc: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  mail: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
};

/* ================= PAGE ================= */

export default function CytokinePlatformPage() {
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
            NORSE‑ICM Project
          </motion.p>

          <motion.h1
            className={`${SERIF} mt-4 text-5xl font-bold tracking-tight md:text-6xl`}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
          >
            Cytokine Platform
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
          >
            Rapid, standardized inflammatory profiling for NORSE patients across Europe.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
          >
            <a
              href={REFERRAL_MAILTO}
              className="rounded-lg px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition duration-500 ease-out hover:-translate-y-0.5"
              style={{ backgroundColor: ORANGE }}
            >
              Request an analysis
            </a>
            <a
              href="#access"
              className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition duration-500 ease-out hover:bg-white/10"
            >
              How it works
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

      {/* ---------- WHAT WE OFFER ---------- */}
      <Section kicker="Overview" title="What we offer">
        <motion.p {...reveal} className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-600">
          The Cytokine Platform of the NORSE‑ICM Project provides rapid and standardized inflammatory profiling for patients
          presenting with <strong className="text-slate-900">NORSE</strong> across Europe. Led by{" "}
          <strong className="text-slate-900">Dr. Aurélie Hanin</strong>, it enables the analysis of{" "}
          <strong className="text-slate-900">12 key inflammatory markers</strong> to help clinicians and researchers understand
          disease pathophysiology during both acute and chronic phases.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div {...reveal} className={`${CARD} flex gap-4 p-6`}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5a524]/15 text-[#c27c06]">
              <Icon d={I.bolt} />
            </span>
            <div>
              <p className="font-semibold text-slate-900">Fast turnaround</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Average turnaround time of less than 7 days from sample receipt to results delivery.
              </p>
            </div>
          </motion.div>
          <motion.div {...revealDelay(0.1)} className={`${CARD} flex gap-4 p-6`}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
              <Icon d={I.info} />
            </span>
            <div>
              <p className="font-semibold text-slate-900">North America</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Similar analyses are conducted at <strong className="text-slate-800">Yale University</strong> for patients enrolled in
                the US and Canada.{" "}
                <a
                  href="https://www.norseinstitute.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 underline decoration-[#f5a524] decoration-2 underline-offset-4"
                >
                  NORSE Institute →
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ---------- SPECIFICATIONS ---------- */}
      <Section kicker="12 markers · Cytometric bead array (CBA)" title="Platform specifications" muted>
        <div className="grid gap-6 md:grid-cols-2">
          {PLATES.map((plate, i) => (
            <motion.div key={plate.title} {...revealDelay(i * 0.12)} className={`${CARD} overflow-hidden`}>
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <p className={`${SERIF} text-xl font-bold text-slate-900`}>{plate.title}</p>
                <span className="text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase">6 markers</span>
              </div>
              <ul className="divide-y divide-slate-100">
                {plate.items.map(([abbr, full]) => (
                  <li key={abbr} className="flex items-baseline gap-4 px-6 py-3 transition-colors hover:bg-slate-50">
                    <span className="w-28 shrink-0 font-semibold text-slate-900">{abbr}</span>
                    <span className="text-sm text-slate-500">{full}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div {...reveal} className={`${CARD} mt-8 p-4 md:p-6`}>
          <Image src={cytokinesplatform} alt="Cytokine platform protocol" className="h-auto w-full rounded-lg" />
        </motion.div>
      </Section>

      {/* ---------- RESULTS ---------- */}
      <Section kicker={`Updated ${RESULTS_UPDATED}`} title="Preliminary results & impact">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { n: "942", l: "Serum samples analyzed" },
            { n: "409", l: "CSF samples analyzed" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              {...revealDelay(i * 0.12)}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-center text-white"
            >
              <div aria-hidden className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-white/5" />
              <p className={`${SERIF} relative text-5xl font-bold`} style={{ color: ORANGE }}>
                {s.n}
              </p>
              <p className="relative mt-2 text-sm tracking-wide text-slate-300">{s.l}</p>
            </motion.div>
          ))}
        </div>

        <motion.p {...reveal} className="mx-auto mt-12 max-w-2xl text-center leading-relaxed text-slate-600">
          These analyses have identified distinct inflammatory profiles among patients with cryptogenic NORSE, highlighting:
        </motion.p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { icon: I.layers, t: "Cytokine-based patient stratification" },
            { icon: I.network, t: "Inflammatory pathways" },
            { icon: I.chart, t: "Potential biomarkers for treatment response" },
          ].map((x, i) => (
            <motion.div key={x.t} {...revealDelay(i * 0.1)} className={`${CARD} p-6 text-center hover:-translate-y-1`}>
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f5a524]/15 text-[#c27c06]">
                <Icon d={x.icon} />
              </span>
              <p className="mt-4 font-semibold text-slate-900">{x.t}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------- NORSE PROFILES ---------- */}
      <Section kicker="Active research" title="NORSE Profiles" muted>
        <motion.div {...reveal} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <div className="grid lg:grid-cols-5">
            {/* visuel */}
            <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-10 lg:col-span-2">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
              />
              <div aria-hidden className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5" />
              <div className="relative w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                <Image src={iconeapp} alt="NORSE Profiles platform" className="h-auto w-full" />
              </div>
              <p className="relative mt-6 text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase">Platform preview</p>
            </div>

            {/* contenu */}
            <div className="flex flex-col p-8 lg:col-span-3 lg:p-10">
              <p className="leading-relaxed text-slate-700">
                <strong className="text-slate-900">NORSE Profiles</strong> is a translational research initiative focused on
                identifying inflammatory endotypes in NORSE through extended cytokine profiling.
              </p>
              <p className="mt-3 leading-relaxed text-slate-500">
                Rather than relying on single biomarkers, the platform models cytokines as integrated biological networks,
                supporting <strong className="text-slate-700">precision medicine</strong> and guiding{" "}
                <strong className="text-slate-700">targeted immunotherapy selection</strong>.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Cytokine network modelling", "Endotype stratification", "Immunotherapy targeting"].map((t) => (
                  <span key={t} className="rounded-full border border-[#f5a524]/40 bg-[#f5a524]/10 px-3 py-1.5 text-xs font-semibold text-slate-800">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { v: "5", l: "Publications" },
                  { v: "4", l: "Researchers" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-slate-100 bg-slate-50 py-3 text-center">
                    <p className={`${SERIF} text-2xl font-bold text-slate-900`}>{s.v}</p>
                    <p className="text-xs text-slate-500">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-slate-100" />

              <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-slate-400 uppercase">Core development team</p>
              <div className="flex flex-wrap gap-2">
                {["Linon Denis", "Martin Guillemaud", "Mario Chavez", "Aurélie Hanin"].map((name) => (
                  <span key={name} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold text-white">
                      {name[0]}
                    </span>
                    {name}
                  </span>
                ))}
              </div>

              <a
                href="https://youtu.be/8fhLC8kwKcU"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-slate-800"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: ORANGE }}>
                  <svg className="h-3 w-3 translate-x-px fill-slate-900" viewBox="0 0 10 12">
                    <path d="M0 0l10 6-10 6z" />
                  </svg>
                </span>
                Watch project overview
              </a>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ---------- PUBLICATIONS ---------- */}
      <Section kicker="Peer-reviewed output" title="Published results">
        <div className="space-y-4">
          {PUBLICATIONS.map((pub, i) => (
            <motion.a
              key={pub.url}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              {...revealDelay(i * 0.08)}
              className={`${CARD} group flex flex-col gap-4 p-6 hover:-translate-y-0.5 hover:border-slate-300 md:flex-row md:items-center md:justify-between`}
            >
              <div className="flex gap-5">
                <span className="mt-1 hidden h-full w-1 shrink-0 self-stretch rounded-full md:block" style={{ backgroundColor: ORANGE }} />
                <div>
                  <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{pub.journal}</span>
                  <p className="mt-3 font-semibold leading-snug text-slate-900">{pub.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{pub.authors}</p>
                  <p className="mt-2 text-xs text-slate-400">{pub.ids}</p>
                </div>
              </div>
              <span className="shrink-0 text-sm font-semibold whitespace-nowrap text-slate-900 transition group-hover:text-[#c27c06]">
                Read →
              </span>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* ---------- HOW TO ACCESS ---------- */}
      <Section id="access" kicker="For clinicians & researchers" title="How to access the platform" muted>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Contact us", d: "Send us your clinical information, cohort size and research question." },
            { t: "Collect & ship", d: "Follow our protocol and ship samples on dry ice." },
            { t: "Receive results", d: "Get your cytokine report within 7 days." },
          ].map((s, i) => (
            <motion.div key={s.t} {...revealDelay(i * 0.12)} className={`${CARD} p-7 text-center hover:-translate-y-1`}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f5a524] text-sm font-bold text-[#c27c06]">
                {i + 1}
              </span>
              <p className="mt-4 text-lg font-semibold text-slate-900">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-5">
          <motion.div {...reveal} className={`${CARD} p-7 md:col-span-3`}>
            <p className="font-semibold text-slate-900">We will provide</p>
            <ul className="mt-4 space-y-3">
              {[
                "Sample collection instructions",
                "Shipping logistics",
                "Data analysis and interpretation",
                "Results delivery typically within 7 days (for research use only)",
                "Confidential and secure data handling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 text-[#c27c06]">
                    <Icon d={I.check} className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            {...revealDelay(0.12)}
            className="flex flex-col justify-center rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-7 text-white md:col-span-2"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">Platform coordinator</p>
            <p className={`${SERIF} mt-2 text-2xl font-bold`}>Dr. Aurélie Hanin</p>
            <a
              href={REFERRAL_MAILTO}
              className="mt-6 inline-block w-fit rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              style={{ backgroundColor: ORANGE }}
            >
              Request an analysis
            </a>
          </motion.div>
        </div>
      </Section>

      {/* ---------- PROTOCOL ---------- */}
      <Section kicker="Pre-analytical requirements" title="Sample collection protocol">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Serum samples",
              items: ["Use red-top serum tubes (non-anticoagulant)", "Centrifuge (1,500 g, 10 min, RT) within 2 hours", "Separate into microtubes (250 µL per aliquot)", "Maintain sterile conditions"],
            },
            {
              title: "CSF samples",
              items: ["Lumbar puncture using sterile technique", "Collect in sterile tubes without additives", "Centrifuge (1,500 g, 10 min, RT) within 2 hours", "Separate supernatant (250 µL per aliquot)"],
            },
            {
              title: "Storage & transport",
              items: ["Store aliquots at -80°C", "Ship with dry ice", "Transport fees in Europe supported by ICM", "Include collection time & patient ID"],
            },
          ].map((s, i) => (
            <motion.div key={s.title} {...revealDelay(i * 0.12)} className={`${CARD} overflow-hidden`}>
              <div className="border-b border-slate-100 px-6 py-4">
                <p className={`${SERIF} text-xl font-bold text-slate-900`}>{s.title}</p>
              </div>
              <ul className="space-y-3 px-6 py-5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-0.5 text-[#c27c06]">
                      <Icon d={I.check} className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div {...reveal} className="mt-10 text-center">
          <a
            href="/flowhchart.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-slate-800"
          >
            <Icon d={I.doc} className="h-4 w-4" />
            Download the flowchart (PDF)
          </a>
        </motion.div>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section kicker="Good to know" title="Frequently asked questions" muted>
        <div className="mx-auto max-w-4xl space-y-3">
          {FAQ.map((item, i) => (
            <motion.details key={item.q} {...revealDelay(i * 0.04)} className={`${CARD} group overflow-hidden`}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#f5a524]/15 px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap text-[#a86a05]">
                    {item.tag}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">{item.q}</span>
                </div>
                <span className="text-xl leading-none text-slate-400 transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-slate-100 px-6 py-4">
                <p className="text-sm leading-relaxed text-slate-600">{item.a}</p>
              </div>
            </motion.details>
          ))}
        </div>
      </Section>

      {/* ---------- CONTACT ---------- */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/5" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-white/5" />
        <motion.div {...reveal} className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <h2 className={`${SERIF} text-3xl font-bold tracking-tight md:text-4xl`}>Get in touch</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-300">
            Interested in submitting samples or collaborating with our cytokine platform? We are happy to help.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            <strong className="text-white">Dr. Aurélie Hanin</strong> — Co-Principal Investigator, ICM NORSE Project
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={REFERRAL_MAILTO}
              className="rounded-lg px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition duration-500 ease-out hover:-translate-y-0.5"
              style={{ backgroundColor: ORANGE }}
            >
              Request an analysis
            </a>
            <a
              href="mailto:aurelie.hanin@icm-institute.org"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition duration-500 ease-out hover:bg-white/10"
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