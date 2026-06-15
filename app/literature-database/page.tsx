"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LiteratureDatabase() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800">

      {/* ---------- HERO HEADER ---------- */}
      <section className="w-full">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen flex flex-col items-center justify-center px-8 py-12 text-white text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-36 -translate-x-36" />

          <motion.h1
            className="relative text-4xl font-bold mb-3 font-[family-name:var(--font-bodoni)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            NORSE Evidence Database
          </motion.h1>

          <motion.p
            className="relative text-slate-300 text-lg mb-10 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Building the largest systematic dataset on NORSE &amp; FIRES worldwide
          </motion.p>

          <motion.div
            className="relative flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { number: "421", label: "Eligible articles" },
              { number: "4,000+", label: "Patients described" },
              { number: "1,300+", label: "Individual-level data" },
              { number: "40+", label: "Countries represented" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/10 rounded-xl px-6 py-4 text-center min-w-[120px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <p className="text-3xl font-bold text-white">{stat.number}</p>
                <p className="text-slate-300 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="relative animate-bounce mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>

        </div>
      </section>

      {/* --- NOTE --- */}
      <motion.div
        className="w-full px-6 md:px-16 lg:px-32 mb-8 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <div className="bg-slate-700 text-white rounded-lg px-3 py-2 text-xs font-bold shrink-0">
            NOTE
          </div>
          <p className="text-gray-700 italic text-sm">
            Results from this systematic database review will be published in peer-reviewed journals.
          </p>
        </div>
      </motion.div>

      <section className="w-full bg-white shadow-md px-6 md:px-16 lg:px-32 py-10 leading-relaxed">

        {/* ---------- INTRO ---------- */}
        <motion.p
          className="text-gray-700 mb-6 text-justify leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          To advance understanding of NORSE and FIRES, the ICM NORSE team created a comprehensive,
          systematic evidence database. Using rigorous PRISMA methodology, we aggregated data from
          published literature to establish a large-scale, multi-center dataset enabling novel
          research and clinical insights.
        </motion.p>

        {/* ---------- PROSPERO ---------- */}
        <motion.div
          className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-4 mb-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide mb-1">
              PROSPERO Registration
            </p>
            <p className="text-gray-800 font-mono text-sm">CRD420261395810</p>
          </div>
          <a
            href="https://www.crd.york.ac.uk/prospero/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap"
          >
            View Registry →
          </a>
        </motion.div>

        {/* ---------- METHODOLOGY TITLE ---------- */}
        <motion.h2
          className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-slate-500 pl-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Methodology
        </motion.h2>

        {/* ---------- ACCORDEONS ---------- */}
        {[
          {
            id: "01",
            title: "PRISMA Search Summary",
            content: (
              <div className="px-6 py-5 border-t border-gray-200 space-y-4 text-gray-700">
                <p>
                  A systematic PRISMA search was conducted using key terms:{" "}
                  <em>
                    &apos;new-onset refractory status epilepticus&apos;,
                    &apos;febrile infection-related epilepsy syndrome&apos;,
                    &apos;NORSE&apos;, &apos;FIRES&apos;
                  </em>
                  , and related variants.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    { label: "Search date", value: "Updated May 13, 2026" },
                    { label: "Selection process", value: "Multi-step screening by two independent experts" },
                    { label: "Study types", value: "Case reports, case series, reviews, pathophysiology studies, guidelines" },
                    { label: "Total eligible articles", value: "421 (175 case reports, 136 case series, 47 reviews, 28 pathophysiology studies)" },
                  ].map((item) => (
                    <div key={item.label} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">{item.label}</p>
                      <p className="text-gray-800 text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            id: "02",
            title: "Database Scope",
            content: (
              <div className="px-6 py-5 border-t border-gray-200 text-gray-700">
                <p className="mb-4">Our systematic review represents one of the largest aggregated NORSE/FIRES datasets worldwide:</p>
                <ul className="list-none space-y-2">
                  {[
                    "More than 4,000 patients described across all studies",
                    "More than 1,300 patients with individual-level data available",
                    "Both pediatric and adult populations",
                    "Multi-country representation across 40+ countries",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-slate-600 font-bold mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          },
          {
            id: "03",
            title: "Global Research Coverage",
            content: (
              <div className="px-6 py-5 border-t border-gray-200 text-gray-700 space-y-4">
                <div className="flex justify-center">
                  <Image src="/map.png" alt="Global research coverage map" width={700} height={400} className="rounded-xl shadow-md" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {[
                    { country: "United States", count: "114 articles" },
                    { country: "Japan", count: "45 articles" },
                    { country: "Italy", count: "37 articles" },
                  ].map((item) => (
                    <div key={item.country} className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">
                      <p className="font-semibold text-slate-800">{item.country}</p>
                      <p className="text-gray-600 text-sm">{item.count}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 italic text-sm text-center">
                  This international dataset reflects the global recognition of NORSE/FIRES as a significant clinical challenge.
                </p>
              </div>
            ),
          },
        ].map((section, index) => (
          <motion.details
            key={section.id}
            className="group mb-4 border border-gray-200 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="bg-slate-600 text-white text-xs font-bold px-2 py-1 rounded-md">{section.id}</span>
                <span className="text-lg font-semibold text-slate-800">{section.title}</span>
              </div>
              <span className="text-slate-600 font-bold text-xl">+</span>
            </summary>
            {section.content}
          </motion.details>
        ))}

        {/* ---------- DATA EXTRACTION CATEGORIES ---------- */}
        <motion.details
          className="group mb-10 border border-gray-200 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-slate-600 text-white text-xs font-bold px-2 py-1 rounded-md">04</span>
              <span className="text-lg font-semibold text-slate-800">Data Extraction Categories</span>
            </div>
            <span className="text-slate-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200 space-y-3">
            {[
              { id: "A", title: "Demographics", content: <p className="text-gray-700">Country of enrollment, age group (pediatric vs. adult), age at presentation, sex.</p> },
              { id: "B", title: "Presentation", content: <div className="text-gray-700 space-y-2"><p><strong>FIRES classification</strong></p><p><strong>Prodromal symptoms:</strong> fatigue, respiratory symptoms, gastrointestinal symptoms, behavioral changes, headache, rash, consciousness alterations, memory disturbances, sleep disorders.</p></div> },
              { id: "C", title: "Etiology", content: <p className="text-gray-700">Cryptogenic, autoimmune encephalitis (AIE), viral, genetic, and other identified causes with detailed characterization.</p> },
            { id: "D", title: "Treatment", content: (
  <div className="text-gray-700 space-y-4">
    <div>
      <p className="font-semibold mb-2">Immunotherapies:</p>
      <ul className="list-none space-y-1 ml-2">
        {[
          { label: "First-line", value: "steroids, Intravenous immunoglobulin, plasma exchange" },
          { label: "Second-line", value: "anakinra, tocilizumab, intrathecal steroids, rituximab, cyclophosphamide, anti-JAK-STAT agents" },
          { label: "Dosages", value: "and time-to-initiation when available" },
        ].map((item) => (
          <li key={item.label} className="flex items-start gap-2">
            <span className="text-slate-600 font-bold mt-0.5">→</span>
            {item.label === "Dosages" ? (
              // ✅ Cas spécial : pas de gras, pas de ":"
              <span>{item.label} {item.value}</span>
            ) : (
              // Par défaut : en gras + ":"
              <span><strong>{item.label}:</strong> {item.value}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
                  <div><p className="font-semibold mb-1">Other Therapeutic Approaches:</p><p>Ketogenic diet (KD), vagus nerve stimulation (VNS), electroconvulsive therapy (ECT), therapeutic hypothermia.</p></div>
                  <div><p className="font-semibold mb-1">Antiseizure Medications (ASMs):</p><p>Levetiracetam, phenobarbital, phenytoin, valproic acid, lacosamide, perampanel, and others.</p></div>
                  <div><p className="font-semibold mb-1">Continuous Intravenous Anesthetic Drugs (CIVADs):</p><p>Propofol, midazolam, ketamine/esketamine, thiopental, and inhaled anesthetics.</p></div>
                </div>
              )},
              { id: "E", title: "Workup", content: (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-700 border-collapse">
                    <thead>
                      <tr className="bg-slate-700 text-white">
                        <th className="text-left font-semibold p-3 w-1/3 rounded-tl-lg">Modality</th>
                        <th className="text-left font-semibold p-3 rounded-tr-lg">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { modality: "Blood Tests", details: "CBC, organ function, cytokines, auto-immune panels", bg: "bg-white" },
                        { modality: "CSF Analysis", details: "WBC/RBC counts, protein, glucose, oligoclonal bands, cytokines, viral/bacterial tests, auto-immune panels", bg: "bg-slate-50" },
                        { modality: "Metabolic & Genetic Tests", details: "Individual-level results", bg: "bg-white" },
                        { modality: "Neuroimaging", details: "CT head and MRI findings during ICU stay", bg: "bg-slate-50" },
                        { modality: "Advanced Imaging", details: "PET findings during ICU stay", bg: "bg-white" },
                        { modality: "Electrophysiology", details: "EEG findings during ICU stay", bg: "bg-slate-50" },
                      ].map((row) => (
                        <tr key={row.modality} className={row.bg}>
                          <td className="p-3 border border-gray-200 font-semibold align-top">{row.modality}</td>
                          <td className="p-3 border border-gray-200">{row.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )},
              { id: "F", title: "Clinical Outcomes", content: (
                <div className="text-gray-700 space-y-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="font-semibold text-slate-800 mb-2">Acute phase</p>
                    <ul className="list-none space-y-1">
                      {["ICU complications", "Need for tracheostomy", "Duration of status epilepticus, ICU length of stay, mechanical ventilation duration", "Mortality at discharge"].map((item) => (
                        <li key={item} className="flex items-start gap-2"><span className="text-slate-600 font-bold mt-0.5">→</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="font-semibold text-slate-800 mb-2">Follow-up period</p>
                    <ul className="list-none space-y-1">
                      {["Duration of follow-up", "Functional outcomes (modified Rankin scale score and classification : good mRS 0-2 vs. poor outcome mRS 3-6)", "Mortality at last follow-up", "Development of post-NORSE epilepsy", "Status epilepticus recurrence and number of subsequent events", "Chronic MRI, PET, and EEG findings"].map((item) => (
                        <li key={item} className="flex items-start gap-2"><span className="text-slate-600 font-bold mt-0.5">→</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )},
            ].map((item) => (
              <details key={item.id} className="border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-white hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="bg-slate-200 text-slate-700 text-xs font-bold px-2 py-1 rounded-md">{item.id}</span>
                    <span className="font-semibold text-slate-800">{item.title}</span>
                  </div>
                  <span className="text-slate-600 font-bold">+</span>
                </summary>
                <div className="px-5 py-4 border-t border-gray-100">{item.content}</div>
              </details>
            ))}
          </div>
        </motion.details>

        {/* ---------- COLLABORATION ---------- */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-600 rounded-2xl p-8 text-white text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-3">Collaborate with us</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Are you interested in contributing clinical data or collaborating on analyses?
          </p>
          <a
            href="mailto:aurelie.hanin@icm-institute.org"
            className="inline-block bg-white text-slate-800 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors"
          >
            aurelie.hanin@icm-institute.org →
          </a>
        </motion.div>

        {/* ---------- FOOTER ---------- */}
        <footer className="mt-10 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} NORSE-ICM Project &ndash; Literature Database
        </footer>

      </section>
    </main>
  );
}