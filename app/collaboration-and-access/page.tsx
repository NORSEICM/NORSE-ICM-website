"use client";

import { motion } from "framer-motion";

export default function CollaborationAndAccess() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800">

      {/* ---------- HERO ---------- */}
      <section className="w-full">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen flex flex-col items-center justify-center px-8 py-12 text-white text-center shadow-xl relative overflow-hidden">

          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-36 -translate-x-36" />

          <motion.h1
            className="relative text-5xl font-bold mb-4 font-[family-name:var(--font-bodoni)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Collaboration &amp; Access
          </motion.h1>

          <motion.p
            className="relative text-slate-300 text-lg max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join our international network and contribute to advancing NORSE research
          </motion.p>

          <motion.div
            className="relative animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>

        </div>
      </section>

      <section className="w-full bg-white shadow-md px-6 md:px-16 lg:px-32 py-10 leading-relaxed">

        {/* ---------- WHY COLLABORATE ---------- */}
        <div className="mb-10">
          <motion.h2
            className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-slate-500 pl-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why collaborate with us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { num: "01", title: "Share data", desc: "Contribute clinical data to the largest NORSE/FIRES international literature database" },
              { num: "02", title: "Co-analyze", desc: "Collaborate on joint analyses and gain access to aggregated insights" },
              { num: "03", title: "Co-publish", desc: "Be part of international peer-reviewed publications on NORSE" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <span className="inline-block bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded-md mb-3">
                  {item.num}
                </span>
                <p className="font-bold text-slate-800 mb-2">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 mb-10" />

        {/* ---------- WHAT WE OFFER ---------- */}
        <div className="mb-10">
          <motion.h2
            className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-slate-500 pl-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What we offer to collaborators
          </motion.h2>
          <ul className="list-none space-y-3 text-gray-700">
            {[
              "Access to standardized data collection tools and protocols",
              "Cytokine analysis support via our platform (serum and CSF)",
              "Scientific support for local analyses and publications",
            ].map((item, index) => (
              <motion.li
                key={item}
                className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-lg px-4 py-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-green-600 font-bold mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-200 mb-10" />

        {/* ---------- WHO CAN COLLABORATE ---------- */}
        <div className="mb-10">
          <motion.h2
            className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-slate-500 pl-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Who can collaborate?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Clinicians", desc: "Neurologists, intensivists, or pediatricians managing NORSE/FIRES patients" },
              { title: "Researchers", desc: "Scientists working on epilepsy, neuroinflammation, or related fields" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5"
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded-md shrink-0 mt-0.5">
                  →
                </span>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 mb-10" />

        {/* ---------- HOW TO START ---------- */}
        <div className="mb-10">
          <motion.h2
            className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-slate-500 pl-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            How to start a collaboration
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { step: "01", title: "Get in touch", desc: "Send us an email describing your interest" },
              { step: "02", title: "Discuss scope", desc: "We will schedule a call to define the collaboration framework" },
              { step: "03", title: "Start together", desc: "Sign a collaboration agreement and begin contributing" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-700 px-5 py-3 flex items-center gap-3">
                  <span className="text-white font-bold text-sm">Step {item.step}</span>
                </div>
                <div className="bg-white px-5 py-4">
                  <p className="font-semibold text-slate-800 mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 mb-10" />

        {/* ---------- CONTACT ---------- */}
        <motion.div
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-2">Ready to collaborate?</h2>
          <p className="text-slate-300 mb-2 max-w-xl mx-auto">
            </p>
          <p className="text-slate-300 mb-6">
            Contact{" "}
            <strong className="text-white">Dr. Aurélie Hanin</strong>{" "}
            — Co-Principal Investigator, ICM NORSE Project
          </p>
          <a
            href="mailto:aurelie.hanin@icm-institute.org"
            className="inline-block bg-white text-slate-800 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors"
          >
            aurelie.hanin@icm-institute.org →
          </a>
          <p className="text-slate-400 mt-4 italic text-sm">We are happy to help!</p>
        </motion.div>

      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="w-full bg-slate-900 py-6 text-sm text-slate-400 text-center">
        &copy; {new Date().getFullYear()} NORSE-ICM Project &ndash; Paris Brain Institute (ICM)
      </footer>

    </main>
  );
}