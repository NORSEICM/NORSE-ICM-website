"use client";

import Image from "next/image";
import cytokinesplatform from "./cytokinesplatform.png";
import iconeapp from "./iconeapp.png";
import { motion } from "framer-motion";

export default function EuropeanBiobank() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800">

      {/* ---------- HERO ---------- */}
      <section className="w-full">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen flex flex-col items-center justify-center px-8 py-12 text-white text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-36 -translate-x-36" />

          <motion.p
            className="relative text-slate-300 text-sm uppercase tracking-widest mb-3 font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            NORSE-ICM Project
          </motion.p>

          <motion.h1
            className="relative text-4xl font-bold mb-3 font-[family-name:var(--font-bodoni)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Cytokine Platform
          </motion.h1>

          <motion.p
            className="relative text-slate-300 text-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Rapid, standardized inflammatory profiling for NORSE patients across Europe
          </motion.p>

          <motion.div
            className="relative flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { number: "12", label: "Inflammatory markers" },
              { number: "880", label: "Serum samples analyzed" },
              { number: "360", label: "CSF samples analyzed" },
              { number: "<7 days", label: "Turnaround time" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/10 rounded-xl px-6 py-4 text-center min-w-[130px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <p className="text-2xl font-bold text-white">{stat.number}</p>
                <p className="text-slate-300 text-xs mt-1">{stat.label}</p>
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

      <section className="w-full bg-white shadow-md px-6 md:px-16 lg:px-32 py-10 leading-relaxed">

        {/* ---------- WHAT WE OFFER ---------- */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-slate-500 pl-3">
            What we offer
          </h2>
          <p className="text-gray-700 mb-6 text-justify leading-relaxed">
            The Cytokine Platform of the NORSE-ICM Project provides rapid and standardized
            inflammatory profiling for patients presenting with <strong>NORSE</strong> across
            Europe. Led by <strong>Dr. Aurélie Hanin</strong>, our platform enables comprehensive
            analysis of <strong>12 key inflammatory markers</strong> to help clinicians and
            researchers understand disease pathophysiology during both acute and chronic phases.
          </p>
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
            <div className="bg-slate-700 text-white rounded-lg p-3 text-2xl shrink-0">⚡</div>
            <div>
              <p className="font-semibold text-slate-800">Key Advantage</p>
              <p className="text-gray-600 text-sm">Average turnaround time of &lt;7 days from sample receipt to results delivery.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
            <span className="text-slate-500 font-bold shrink-0 mt-0.5">ℹ</span>
            <p className="text-gray-600 text-sm leading-relaxed">
              Similar analyses are conducted at <strong>Yale University</strong> for patients enrolled in the US/Canada.{" "}
              <a href="https://www.norseinstitute.org/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">
                Learn more at the NORSE Institute →
              </a>
            </p>
          </div>
        </motion.div>

        <hr className="border-gray-200 mb-10" />

        {/* ---------- PLATFORM SPECIFICATIONS ---------- */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-2 border-l-4 border-slate-500 pl-3">
            Platform specifications
          </h2>
          <p className="text-gray-500 text-sm italic mb-6">
            12 inflammatory markers measured by cytometric bead array (CBA) technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                bg: "bg-slate-700",
                title: "Plate 1",
                dot: "bg-slate-500",
                items: [
                  "CCL2 (Monocyte Chemoattractant Protein-1)",
                  "CCL3 (Macrophage Inflammatory Protein-1α)",
                  "IL-2 (Interleukin-2)",
                  "IL-6 (Interleukin-6)",
                  "CXCL8/IL-8 (Interleukin-8)",
                  "G-CSF (Granulocyte-Colony Stimulating Factor)",
                ],
              },
              {
                bg: "bg-slate-600",
                title: "Plate 2",
                dot: "bg-slate-400",
                items: [
                  "IL-1β (Interleukin-1 beta)",
                  "IL-4 (Interleukin-4)",
                  "IL-10 (Interleukin-10)",
                  "IL-12p70 (Interleukin-12p70)",
                  "IL-17A (Interleukin-17A)",
                  "TNF-α (Tumor Necrosis Factor-alpha)",
                ],
              },
            ].map((plate, index) => (
              <motion.div
                key={plate.title}
                className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`${plate.bg} px-5 py-3`}>
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wide">{plate.title}</h3>
                </div>
                <ul className="divide-y divide-gray-100">
                  {plate.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-slate-50 transition-colors">
                      <span className={`w-2 h-2 rounded-full ${plate.dot} shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center my-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image src={cytokinesplatform} alt="Cytokines Platform Protocol" className="rounded-xl shadow-lg" priority />
          </motion.div>
        </motion.div>

        <hr className="border-gray-200 mb-10" />
        {/* ---------- PRELIMINARY RESULTS ---------- */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-2 border-l-4 border-slate-500 pl-3">
            Preliminary results &amp; impact
          </h2>

          <p className="text-sm text-gray-400 italic mb-6">
            Updated: June 12, 2026
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                number: "880",
                label: "Serum Samples Analyzed",
                from: "from-slate-700",
                to: "to-slate-500",
              },
              {
                number: "360",
                label: "CSF Samples Analyzed",
                from: "from-slate-600",
                to: "to-slate-400",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`bg-gradient-to-br ${stat.from} ${stat.to} rounded-xl p-6 text-white text-center shadow-md`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-bold mb-1">{stat.number}</p>
                <p className="text-slate-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-700 mb-4 text-justify">
            These analyses have identified distinct inflammatory profiles among
            patients with cryptogenic NORSE, highlighting:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "🔬", text: "Cytokine-based patient stratification" },
              { icon: "🧠", text: "Inflammatory pathways" },
              { icon: "📊", text: "Potential biomarkers for treatment response" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl mb-2">{item.icon}</p>
                <p className="text-sm text-gray-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <hr className="border-gray-200 mb-10" />

{/* ---------- NORSE PROFILES ---------- */}
<motion.section
  className="mb-12"
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* HEADER */}
  <div className="mb-6 border-l-4 border-indigo-500 pl-4">
    <h2 className="text-2xl font-semibold text-slate-900">
      NORSE Profiles
    </h2>
    <p className="text-sm text-slate-500 mt-1">
      Inflammatory signature stratification in NORSE patients
    </p>
  </div>

  {/* CARD */}
  <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
    <div className="grid md:grid-cols-2 gap-0">

      {/* IMAGE */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-6">
        <Image
          src={iconeapp}
          alt="NORSE Profiles platform"
          className="rounded-xl shadow-lg w-full max-w-[320px] h-auto"
        />
      </div>

      {/* CONTENT */}
      <div className="p-7 md:p-8">

        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>NORSE Profiles</strong> is a translational research initiative
          focused on identifying inflammatory endotypes in NORSE using
          extended cytokine profiling.
        </p>

        <p className="text-slate-700 leading-relaxed mb-4">
          Rather than relying on single biomarkers, the platform models cytokines
          as integrated biological networks to better support 
          <strong> precision medicine strategies</strong> and guide 
          <strong> targeted immunotherapy selection</strong>.
        </p>

        <p className="text-slate-500 text-sm mb-6">
          The platform is currently under active development and clinical research validation.
        </p>

        {/* TEAM */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
          <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
            Core development team
          </p>
          <p className="text-sm font-medium text-slate-800">
            Linon Denis · Martin Guillemaud · Mario Chavez · Aurélie Hanin
          </p>
        </div>

        {/* CTA */}
        <a
          href="https://youtu.be/8fhLC8kwKcU"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2
                     bg-indigo-600 hover:bg-indigo-700
                     text-white text-sm font-medium
                     px-5 py-3 rounded-xl transition"
        >
          Watch project overview
        </a>

      </div>
    </div>
  </div>
</motion.section>

        {/* ---------- PUBLISHED RESULTS ---------- */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-2 border-l-4 border-slate-500 pl-3">
            Published results
          </h2>
          <p className="text-gray-500 text-sm italic mb-6">Peer-reviewed publications from the cytokine platform</p>

          <div className="space-y-4">
            {[
              {
                title: "Identification of Distinct Biological Groups of Patients With Cryptogenic NORSE via Inflammatory Profiling",
                authors: "Guillemaud et al.",
                journal: "Neurology® Neuroimmunology & Neuroinflammation — 2025",
                ids: "PMID: 40334176 | PMCID: PMC12063244 | DOI: 10.1212/NXI.0000000000200403",
                url: "https://www.neurology.org/doi/10.1212/NXI.0000000000200403",
              },
              {
                title: "Cytokines in New-Onset Refractory Status Epilepticus Predict Outcomes",
                authors: "Hanin et al.",
                journal: "Annals of Neurology — 2023",
                ids: "PMID: 36871188 | DOI: 10.1002/ana.26627",
                url: "https://onlinelibrary.wiley.com/doi/10.1002/ana.26627",
              },
            ].map((pub, index) => (
              <motion.div
                key={pub.title}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-slate-700 to-slate-500 px-6 py-4">
                  <p className="text-white font-bold text-base leading-relaxed">{pub.title}</p>
                  <p className="text-slate-300 text-sm mt-1">{pub.authors}</p>
                </div>
                <div className="bg-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">{pub.journal}</span>
                    <p className="text-gray-400 text-xs">{pub.ids}</p>
                  </div>
                  <a href={pub.url} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap bg-slate-700 text-white font-semibold px-5 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm">
                    Read the publication →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <hr className="border-gray-200 mb-10" />

        {/* ---------- HOW TO ACCESS ---------- */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-slate-500 pl-3">
            How to access the platform
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { step: "01", title: "Contact us", desc: "Send us your clinical information, cohort size and research question" },
              { step: "02", title: "Collect & ship", desc: "Follow our protocol and ship samples in dry ice" },
              { step: "03", title: "Receive results", desc: "Get your cytokine report within 7 days" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <span className="inline-block bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Step {item.step}</span>
                <p className="font-semibold text-slate-800 mb-2">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center mb-6">
            <p className="text-gray-800 font-medium">Platform coordinator: <strong>Dr. Aurélie Hanin</strong></p>
          </div>

          <p className="text-gray-700 font-semibold mb-3">We will provide:</p>
          <ul className="list-none space-y-2 text-gray-700 ml-2">
            {[
              "Sample collection instructions",
              "Shipping logistics",
              "Data analysis and interpretation",
              "Results delivery typically within 7 days (for research use only)",
              "Confidential and secure data handling",
            ].map((item, index) => (
              <motion.li
                key={item}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <hr className="border-gray-200 mb-10" />

        {/* ---------- SAMPLE COLLECTION PROTOCOL ---------- */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-slate-500 pl-3">
            Sample collection protocol
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Serum Samples",
                items: ["Use red-top serum tubes (non-anticoagulant)", "Centrifuge (1,500 g, 10 min, RT) within 2 hours", "Separate into microtubes (250 µL per aliquot)", "Maintain sterile conditions"],
              },
              {
                title: "CSF Samples",
                items: ["Lumbar puncture using sterile technique", "Collect in sterile tubes without additives", "Centrifuge (1,500 g, 10 min, RT) within 2 hours", "Separate supernatant (250 µL per aliquot)"],
              },
              {
                title: "Storage & Transport",
                items: ["Store aliquots at -80°C", "Ship with dry ice", "Transport fees in Europe supported by ICM", "Include collection time & patient ID"],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-700 px-5 py-3">
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wide">{section.title}</h3>
                </div>
                <ul className="divide-y divide-gray-100">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 px-5 py-3 text-sm text-gray-700">
                      <span className="text-green-600 font-bold shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a href="/flowhchart.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm">
              Download Flowchart →
            </a>
          </div>
        </motion.div>

        <hr className="border-gray-200 mb-10" />

        {/* ---------- FAQ ---------- */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-2 border-l-4 border-slate-500 pl-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 italic mb-6 text-sm">Click on a question to expand the answer.</p>

          <div className="space-y-3">
            {[
              { q: "What is the cost of cytokine analysis?", a: "Cytokine analyses are supported by the NORSE-ICM research team. There is no cost for clinicians.", tag: "Cost" },
              { q: "How many samples can you process simultaneously?", a: "Our platform can measure up to 36 samples per analysis run. This allows us to maintain our rapid turnaround time (<7 days) while ensuring high-quality standardized results.", tag: "Capacity" },
              { q: "Can you analyze retrospectively collected samples?", a: "Yes, we can analyze samples that were collected retrospectively, if they have been collected following our protocol and stored at -80°C without being thawed and refrozen.", tag: "Samples" },
              { q: "Can samples be collected at different time points?", a: "Yes. Longitudinal sampling at multiple time points provides valuable information about inflammatory dynamics throughout the disease course.", tag: "Protocol" },
              { q: "What quality control measures are in place?", a: "All analyses include controls, standard curves, and documented quality parameters.", tag: "Quality" },
              { q: "How are results reported?", a: "Results are provided as cytokine concentrations (pg/mL) in a detailed report with interpretative notes when available.", tag: "Results" },
              { q: "Are both serum and CSF analysis necessary?", a: "Ideally, paired serum and CSF samples provide the most comprehensive view of inflammatory responses, as CSF often reflects compartmentalized CNS inflammation. However, serum alone is acceptable if CSF collection is not feasible.", tag: "Samples" },
            ].map((item, index) => (
              <motion.details
                key={item.q}
                className="border border-gray-200 rounded-xl bg-gray-50 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-slate-700 bg-slate-200 rounded-full px-2 py-0.5 whitespace-nowrap">{item.tag}</span>
                    <span className="font-semibold text-gray-800 text-sm">{item.q}</span>
                  </div>
                  <span className="text-slate-600 font-bold text-lg ml-4 shrink-0">+</span>
                </summary>
                <div className="px-6 py-4 border-t border-gray-200 bg-white">
                  <p className="text-gray-700 leading-relaxed text-sm">{item.a}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </motion.div>

        <hr className="border-gray-200 mb-10" />

        {/* ---------- CONTACT ---------- */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
          <p className="text-slate-300 mb-1">Interested in submitting samples or collaborating with our cytokine platform?</p>
          <p className="text-slate-300 mb-6">
            <strong className="text-white">Dr. Aurélie Hanin</strong> — Co-Principal Investigator, ICM NORSE Project
          </p>
          <a href="mailto:aurelie.hanin@icm-institute.org" className="inline-block bg-white text-slate-800 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors">
            aurelie.hanin@icm-institute.org →
          </a>
          <p className="text-slate-400 mt-4 italic text-sm">We are happy to help!</p>
        </motion.div>

        {/* ---------- FOOTER ---------- */}
        <footer className="mt-10 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} NORSE-ICM Project &ndash; Paris Brain Institute (ICM)
        </footer>

      </section>
    </main>
  );
}