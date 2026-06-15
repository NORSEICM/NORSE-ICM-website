"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800">

      {/* ---------- HERO ---------- */}
<section className="w-full mb-8">
  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen flex flex-col items-center justify-center px-8 py-20 text-white shadow-xl relative overflow-hidden">

    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-36 -translate-x-36" />
    <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/3 rounded-full" />

    {/* Logos */}
    <motion.div
      className="relative flex items-center justify-center gap-8 mb-12"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image src="/logo.png" alt="NORSE‑ICM Logo" width={200} height={120} />
      <div className="h-20 w-px bg-white/20" />
      <div className="bg-white rounded-xl px-4 py-2">
        <Image src="/logoicm.png" alt="ICM Logo" width={200} height={85} />
      </div>
    </motion.div>

    {/* Titre */}
    <motion.h1
      className="relative text-5xl md:text-6xl font-bold text-center mb-6 tracking-tight max-w-4xl leading-tight font-[family-name:var(--font-bodoni)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      NORSE‑ICM Project
    </motion.h1>

    {/* Sous-titre */}
    <motion.p
      className="relative text-slate-400 text-center text-sm tracking-[0.2em] uppercase mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      Paris Brain Institute &ndash; Pitié‑Salpêtrière Hospital (Paris)
    </motion.p>

    {/* Description */}
    <motion.p
      className="relative text-slate-300 text-center text-lg max-w-2xl leading-relaxed mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      A research initiative to advance the understanding, diagnosis, and treatment of{" "}
      <strong className="text-white">New Onset Refractory Status Epilepticus</strong> and its
      subtype <strong className="text-white">FIRES</strong>.
    </motion.p>

    {/* Logos partenaires */}
<motion.div
  className="relative mb-8"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.9 }}
>
  <div className="flex flex-wrap items-center justify-center gap-8">

    {/* APHP */}
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1 }}>
      <Image src="/aphp.png" alt="AP-HP Pitié-Salpêtrière" width={250} height={60} className="object-contain" />
    </motion.div>

    {/* ICM avec fond blanc */}
    <motion.div
      className="bg-white rounded-xl px-3 py-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.1 }}
    >
      <Image src="/logoicm.png" alt="Paris Brain Institute ICM" width={150} height={60} className="object-contain" />
    </motion.div>

    {/* Fondation */}
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.2 }}>
      <Image src="/logo_fondation.png" alt="Fondation AP-HP" width={140} height={60} className="object-contain" />
    </motion.div>

    {/* Paratonerre */}
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.3 }}>
      <Image src="/asso_paratonnerre.png" alt="Association Paratonerre" width={160} height={60} className="object-contain" />
    </motion.div>

    {/* NORSE Institute */}
    <motion.div
      className="rounded-xl px-3 py-2 bg-[#1a1060]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.4 }}
    >
      <Image src="/NORSE_institute.png" alt="NORSE Institute" width={110} height={45} className="object-contain" />
    </motion.div>

  </div>
</motion.div>

    {/* Flèche */}
    <motion.div
      className="relative animate-bounce mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>

  </div>
</section>

      {/* ---------- INTRO SECTION ---------- */}
      <section className="w-full bg-white shadow-md px-6 md:px-16 lg:px-32 py-10 leading-relaxed mb-8">

        {/* INTRO */}
        <motion.div
          className="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-600 rounded-r-xl p-6 mb-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong className="text-slate-800">NORSE</strong> (New Onset Refractory Status Epilepticus) is a rare and poorly
            understood medical emergency. The ICM NORSE team at Paris Brain Institute is developing
            an innovative approach to better <strong>diagnose</strong>,{" "}
            <strong>understand</strong>, and <strong>treat</strong> this condition.
          </p>
        </motion.div>

        {/* WHO WE ARE */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-slate-500 pl-3">
            Who we are
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            The ICM NORSE team is led by <strong>Pr. Vincent Navarro</strong> and{" "}
            <strong>Dr. Aurélie Hanin</strong>. We are part of the{" "}
            <strong>EPIC research team</strong> (Clinical and Experimental Epilepsy, led by
            Pr. Navarro and Pr. Poncer), at the{" "}
            <a href="https://institutducerveau-icm.org/en" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900">
              Paris Brain Institute (ICM)
            </a>
            , a leading scientific and medical research center dedicated to the study of the brain
            and the discovery of new treatments for diseases of the nervous system. Based at the{" "}
            <strong>Pitié‑Salpêtrière Hospital</strong> (Paris, France), we combine clinical
            expertise and fundamental research to advance the field.
          </p>
        </motion.div>

        <hr className="border-gray-100 mb-8" />

        {/* OUR MISSION */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-slate-500 pl-3">
            Our mission
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            We focus on <em>de novo</em> refractory status epilepticus, occurring in patients
            without any prior neurological disease or epilepsy, and without any acute or active
            structural, toxic, or metabolic cause identified in the first few days (
            <a href="#definitions" className="text-slate-700 underline hover:text-slate-900">
              see definitions of NORSE and FIRES
            </a>
            ).
          </p>
        </motion.div>

        <hr className="border-gray-100 mb-8" />

        {/* OUR OBJECTIVES */}
        <div className="mb-8">
          <motion.h2
            className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-slate-500 pl-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our objectives
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { num: "01", title: "Characterize", desc: "Immune-mediated processes and brain injury in NORSE" },
              { num: "02", title: "Integrate", desc: "Clinical data, neuroimaging, and biological analyses" },
              { num: "03", title: "Deliver", desc: "Personalized medicine based on individual patient data" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow duration-200"
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

        <hr className="border-gray-100 mb-8" />
{/* CONTACT US */}
<div>
  <motion.h2
    className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-slate-500 pl-3"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Contact us
  </motion.h2>

  {/* Photo de groupe */}
  <motion.div
    className="mb-10 rounded-2xl overflow-hidden shadow-lg relative"
    initial={{ opacity: 0, scale: 0.97 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <Image
      src="/teamnorse.png"
      alt="The NORSE-ICM Team"
      width={1200}
      height={500}
      className="w-full object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent px-8 py-6">
      <p className="text-white font-semibold text-lg">The NORSE‑ICM Team</p>
      <p className="text-slate-300 text-sm">Paris Brain Institute — Pitié‑Salpêtrière Hospital</p>
    </div>
  </motion.div>

  {/* Team Photos individuelles */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
    {[
      { name: "Pr. Vincent Navarro", role: ["MD, PhD", "Neurologist — Team Leader"], image: "/vincent.png", position: "center" },
      { name: "Dr. Aurélie Hanin", role: ["PharmD, PhD", "Research Coordinator & Biologist"], image: "/aurelie.png", position: "center" },
      { name: "Dr. Zineb Hayatou", role: ["Clinical Research", "Associate (CRA)"], image: "/zineb3.png", position: "top" },
      { name: "BS. Léa Cosme", role: ["Project", "Manager (PM)"], image: "/lea.png", position: "top" },
    ].map((m, index) => (
      <motion.div
        key={m.name}
        className="flex flex-col items-center bg-gray-50 rounded-xl border border-gray-200 shadow-sm px-4 py-6 hover:shadow-md transition-shadow duration-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true }}
      >
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-4 shadow-md relative ring-4 ring-slate-200">
          <Image
            src={m.image}
            alt={m.name}
            fill
            sizes="120px"
            style={{ objectFit: "cover", objectPosition: m.position }}
          />
        </div>
        <h3 className="text-sm font-bold text-slate-800 mb-1">{m.name}</h3>
        <p className="text-xs text-gray-500 leading-snug text-center">
          {m.role.map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}
        </p>
      </motion.div>
    ))}
  </div>

  {/* Contact Info */}
  <motion.div
    className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-6 text-white text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <p className="text-slate-300 mb-4 text-sm">
      For any inquiries regarding the NORSE‑ICM project or collaborations:
    </p>
    <div className="flex flex-col md:flex-row items-center justify-center gap-3">
      <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 border border-white/10">
        <span>📞</span>
        <span className="text-white font-medium text-sm">+33 6 52 27 51 80</span>
      </div>
      <a href="mailto:norseicm@gmail.com" className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 border border-white/10 hover:bg-white/20 transition-colors">
        <span>✉️</span>
        <span className="text-white font-medium text-sm">norseicm@gmail.com</span>
      </a>
      <a href="mailto:aurelie.hanin@icm-institute.org" className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 border border-white/10 hover:bg-white/20 transition-colors">
        <span>✉️</span>
        <span className="text-white font-medium text-sm">aurelie.hanin@icm-institute.org</span>
      </a>
    </div>
  </motion.div>
</div>
        

          
      </section>

      {/* ---------- NORSE & FIRES DEFINITIONS ---------- */}
      <motion.section
        id="definitions"
        className="w-full shadow-md overflow-hidden mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-6 text-white text-center">
          <h2 className="text-3xl font-bold mb-1">Definitions</h2>
          <p className="text-slate-400 text-sm">
            Reference: Hirsch et al., <em>Epilepsia</em> 2018
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-white px-6 md:px-16 lg:px-32">
          <motion.div
            className="px-8 py-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">NORSE</span>
              <p className="text-xs text-gray-400 italic">New Onset Refractory Status Epilepticus</p>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify text-sm mb-4">
              <strong>NORSE</strong> is defined as a clinical presentation in a patient without
              prior history of epilepsy or another relevant neurological disorder, where a
              refractory status epilepticus occurs without a clearly identifiable acute
              structural, toxic, metabolic or infectious cause within the first days of evaluation.
            </p>
            <a href="https://pubmed.ncbi.nlm.nih.gov/29399791/" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-700 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
              PMID 29399791 →
            </a>
          </motion.div>

          <motion.div
            className="px-8 py-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-slate-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">FIRES</span>
              <p className="text-xs text-gray-400 italic">Febrile Infection-Related Epilepsy Syndrome</p>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify text-sm mb-4">
              <strong>FIRES</strong> is a subcategory of NORSE that requires a febrile infection
              between 2 weeks and 24 hours before the onset of refractory status epilepticus,
              with or without fever at the onset of status epilepticus, and excluding patients
              with diagnosed encephalitis.
            </p>
            <a href="https://pubmed.ncbi.nlm.nih.gov/29399791/" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-500 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
              PMID 29399791 →
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* ---------- FRIENDS ---------- */}
      <motion.section
        className="w-full bg-white border-y border-gray-200 shadow-sm px-6 md:px-16 lg:px-32 py-8 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px bg-gray-200 flex-1" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 shrink-0">
            Friends of the NORSE‑ICM Project
          </p>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {[
            { src: "/aphp.png", alt: "AP-HP Pitié-Salpêtrière", width: 200, height: 80 },
            { src: "/logoicm.png", alt: "Paris Brain Institute ICM", width: 160, height: 80 },
            { src: "/logo_fondation.png", alt: "Fondation AP-HP", width: 200, height: 200 },
            { src: "/asso_paratonnerre.png", alt: "Association Paratonerre", width: 200, height: 80 },
          ].map((logo, index) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="object-contain" />
            </motion.div>
          ))}
          <motion.div
            className="rounded-xl px-4 py-3 bg-[#1a1060]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image src="/NORSE_institute.png" alt="NORSE Institute" width={150} height={60} className="object-contain" />
          </motion.div>
        </div>
      </motion.section>

      {/* ---------- FOOTER ---------- */}
      <footer className="w-full bg-slate-900 py-6 text-sm text-slate-400 text-center">
        &copy; {new Date().getFullYear()} NORSE-ICM Project &ndash; Paris Brain Institute (ICM)
      </footer>

    </main>
  );
}