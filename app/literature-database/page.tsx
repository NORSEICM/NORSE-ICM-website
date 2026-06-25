"use client";
import { motion } from "framer-motion";
export default function Publications() {
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
      NORSE / FIRES Bibliography
    </motion.h1>

    <motion.p
      className="relative text-slate-300 text-lg mb-10 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      Compiled list of published case series, case reports and reviews related to NORSE and FIRES, 2001–2026.
    </motion.p>

    <motion.div
      className="relative flex flex-wrap justify-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {[
        { number: "137", label: "Case series" },
        { number: "177", label: "Case reports" },
        { number: "53", label: "Reviews" },
        { number: "28", label: "Pathophysiology studies" },
      ].map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-white/10 rounded-xl px-6 py-4 text-center min-w-[120px]"
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

      <section className="w-full bg-white shadow-md px-6 md:px-16 lg:px-32 py-10 leading-relaxed text-justify">

        {/* ==================== CASE SERIES ==================== */}
<motion.h2
  className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-slate-500 pl-3"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  Case Series
</motion.h2>
        <p className="text-gray-500 text-sm italic mb-6">137 published case series — 2001 to 2026</p>

        {/* === SECTION 2001–2005 === */}
        <details className="group mb-4 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded-md">2001–2005</span>
              <span className="font-semibold text-slate-800">Case Series (2001 – 2005)</span>
              <span className="text-xs text-gray-400 italic">5 articles</span>
            </div>
            <span className="text-slate-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200">
            <ol className="list-decimal ml-6 space-y-2 text-gray-700 text-sm">
              <li>Sahin et al. Outcome of severe refractory status epilepticus in children. 2001. Case series.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/11879350/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 11879350</a>
              </li>
              <li>Van Lierde et al. De novo cryptogenic refractory multifocal febrile status epilepticus in young adults. 2003.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/12892002/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 12892002</a>
              </li>
              <li>Baxter et al. Idiopathic catastrophic epileptic encephalopathy with acute onset intractable status. 2003.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/12915084/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 12915084</a>
              </li>
              <li>Kramer et al. Severe refractory status epilepticus owing to presumed encephalitis. 2005.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/15832606/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 15832606</a>
              </li>
              <li>Wilder‑Smith et al. The NORSE syndrome: defining a disease entity. 2005.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/16123813/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 16123813</a>
              </li>
            </ol>
          </div>
        </details>

        {/* === SECTION 2006–2010 === */}
        <details className="group mb-4 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded-md">2006–2010</span>
              <span className="font-semibold text-slate-800">Case Series (2006 – 2010)</span>
              <span className="text-xs text-gray-400 italic">10 articles</span>
            </div>
            <span className="text-slate-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200">
            <ol className="list-decimal ml-6 space-y-2 text-gray-700 text-sm" start={6}>
              <li>Mikaeloff et al. Devastating epileptic encephalopathy in school‑aged children (DESC): a pseudo encephalitis. 2006.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/16469483/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 16469483</a>
              </li>
              <li>Saito et al. Acute encephalitis with refractory, repetitive partial seizures: case reports of this unusual post‑encephalitic epilepsy. 2007.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/17008042/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 17008042</a>
              </li>
              <li>Lin et al. Analysis of status epilepticus related presumed encephalitis in children. 2008.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/17584506/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 17584506</a>
              </li>
              <li>Shyu et al. Acute encephalitis with refractory, repetitive partial seizures. 2008.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/18078728/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 18078728</a>
              </li>
              <li>Glaser et al. Refractory status epilepticus in suspect encephalitis. 2008.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/18097641/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 18097641</a>
              </li>
              <li>Costello et al. Cryptogenic new‑onset refractory status epilepticus in adults — infectious or not? 2009.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/19013586/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 19013586</a>
              </li>
              <li>Specchio et al. Epileptic encephalopathy in children possibly related to immune‑mediated pathogenesis. 2010.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/19850427/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 19850427</a>
              </li>
              <li>Sakuma et al. Acute encephalitis with refractory, repetitive partial seizures (AERRPS): a peculiar form of childhood encephalitis. 2010.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/20028339/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 20028339</a>
              </li>
              <li>Van Baalen et al. Febrile infection‑related epilepsy syndrome (FIRES): a non‑encephalitic encephalopathy in childhood. 2010.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/20345937/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 20345937</a>
              </li>
              <li>Nabbout et al. Efficacy of ketogenic diet in severe refractory status epilepticus initiating fever‑induced refractory epileptic encephalopathy in school‑age children (FIRES). 2010.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/20813015/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 20813015</a>
              </li>
            </ol>
          </div>
        </details>

        {/* === SECTION 2011–2015 === */}
        <details className="group mb-4 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded-md">2011–2015</span>
              <span className="font-semibold text-slate-800">Case Series (2011 – 2015)</span>
              <span className="text-xs text-gray-400 italic">16 articles</span>
            </div>
            <span className="text-slate-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200">
            <ol className="list-decimal ml-6 space-y-2 text-gray-700 text-sm" start={16}>
              <li>Mazzuca et al. 18F‑FDG PET reveals frontotemporal dysfunction in children with fever‑induced refractory epileptic encephalopathy. 2011.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/21149491/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 21149491</a>
              </li>
              <li>Kramer et al. Febrile infection‑related epilepsy syndrome (FIRES): pathogenesis, treatment, and outcome — a multicenter study on 77 children. 2011.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/21883180/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 21883180</a>
              </li>
              <li>Kramer et al. Febrile infection‑related epilepsy syndrome (FIRES): does duration of anesthesia affect outcome? 2011.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/21967356/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 21967356</a>
              </li>
              <li>Nam et al. The role of ketogenic diet in the treatment of refractory status epilepticus. 2011.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/22003821/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 22003821</a>
              </li>
              <li>Howell et al. Long‑term follow‑up of febrile infection‑related epilepsy syndrome. 2012.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/22191582/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 22191582</a>
              </li>
              <li>Lin et al. Therapeutic hypothermia for febrile infection‑related epilepsy syndrome in two patients. 2012.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/23127267/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 23127267</a>
              </li>
              <li>Li et al. Plasma exchange in cryptogenic new‑onset refractory status epilepticus. 2013.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/23068971/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 23068971</a>
              </li>
              <li>Gall et al. Five cases of new‑onset refractory status epilepticus (NORSE) syndrome: outcomes with early immunotherapy. 2013.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/23333762/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 23333762</a>
              </li>
              <li>Caraballo et al. Febrile infection‑related epilepsy syndrome: a study of 12 patients. 2013.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/23643626/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 23643626</a>
              </li>
              <li>Sort et al. Ketogenic diet in three cases of childhood refractory status epilepticus. 2013.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/23751291/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 23751291</a>
              </li>
              <li>Caraballo et al. Ketogenic diet in pediatric patients with refractory focal status epilepticus. 2014.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25454503/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 25454503</a>
              </li>
              <li>Singh et al. Cognitive outcomes in febrile infection‑related epilepsy syndrome treated with the ketogenic diet. 2014.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25332495/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 25332495</a>
              </li>
              <li>Ueda et al. Effect of levetiracetam in acute encephalitis with refractory repetitive partial seizures during acute and chronic phase. 2015.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25174548/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 25174548</a>
              </li>
              <li>Khawaja et al. New‑onset refractory status epilepticus (NORSE) — the potential role for immunotherapy. 2015.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26010959/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 26010959</a>
              </li>
              <li>Gaspard et al. New‑onset refractory status epilepticus: etiology, clinical features and outcome. 2015.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26296517/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 26296517</a>
              </li>
              <li>Tan et al. Use of magnesium sulfate infusion for the management of febrile illness‑related epilepsy syndrome: a case series. 2015.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28503584/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 28503584</a>
              </li>
            </ol>
          </div>
        </details>

        {/* === SECTION 2016–2020 === */}
        <details className="group mb-4 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded-md">2016–2020</span>
              <span className="font-semibold text-slate-800">Case Series (2016 – 2020)</span>
              <span className="text-xs text-gray-400 italic">27 articles</span>
            </div>
            <span className="text-slate-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200">
            <ol className="list-decimal ml-6 space-y-2 text-gray-700 text-sm" start={32}>
              <li>Rivas‑Coppola et al. Chronological evolution of MRI findings in children with febrile infection‑related epilepsy syndrome (FIRES). 2016.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26597039/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 26597039</a>
              </li>
              <li>Patil et al. Clinical profile and treatment outcome of febrile infection‑related epilepsy syndrome in South Indian children. 2016.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27293328/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 27293328</a>
              </li>
              <li>Appavu et al. Ketogenic diet treatment for pediatric super‑refractory status epilepticus. 2016.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27475280/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 27475280</a>
              </li>
              <li>Farias Moeller et al. A practical approach to ketogenic diet in the pediatric intensive care unit for super‑refractory status epilepticus. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27553113/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 27553113</a>
              </li>
              <li>Gofshteyn et al. Cannabidiol as a potential treatment for febrile infection‑related epilepsy syndrome (FIRES) in the acute and chronic phases. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27655472/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 27655472</a>
              </li>
              <li>Meletti et al. New‑onset refractory status epilepticus with claustrum damage: definition of clinical and neuroimaging features. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28396650/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 28396650</a>
              </li>
              <li>Farias Moeller et al. Early ictal and interictal patterns in FIRES: the sparks before the blaze. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28555777/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 28555777</a>
              </li>
              <li>Iizuka et al. Cryptogenic NORSE: its distinctive clinical features and response to immunotherapy. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28959704/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 28959704</a>
              </li>
              <li>Jafarpour et al. New‑onset status epilepticus in pediatric patients: causes, characteristics and outcomes. 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29373157/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 29373157</a>
              </li>
              <li>Lee et al. Febrile infection‑related epilepsy syndrome (FIRES): therapeutic complications, long‑term neurological and neuroimaging follow‑up. 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29453111/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 29453111</a>
              </li>
              <li>Farias Moeller et al. Fueling the FIRES: hemophagocytic lymphohistiocytosis in FIRES. 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/30132834/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 30132834</a>
              </li>
              <li>Jun et al. Tocilizumab treatment for new‑onset refractory status epilepticus. 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/30408233/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 30408233</a>
              </li>
              <li>Strohm et al. FDG‑PET and MRI in the evolution of new‑onset refractory status epilepticus. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/30679215/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 30679215</a>
              </li>
              <li>Peng et al. Ketogenic diet as treatment for super‑refractory status epilepticus in FIRES. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31105638/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 31105638</a>
              </li>
              <li>Sa et al. Centromedian thalamic nuclei deep brain stimulation and anakinra treatment for FIRES — two different outcomes. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31446001/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 31446001</a>
              </li>
              <li>Choi et al. Prognostic significance of subsequent extra‑temporal involvement in cryptogenic NORSE initially diagnosed with limbic encephalitis. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31669912/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 31669912</a>
              </li>
              <li>Lam et al. Short‑term and long‑term outcome of FIRES in children. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31035103/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 31035103</a>
              </li>
              <li>Husari et al. New‑onset refractory status epilepticus in children: etiologies, treatments and outcomes. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31568262/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 31568262</a>
              </li>
              <li>Aurangzeb et al. New‑onset super‑refractory status epilepticus: a case series. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31757748/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 31757748</a>
              </li>
              <li>Gugger et al. New‑onset refractory status epilepticus: a retrospective cohort study. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31830676/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 31830676</a>
              </li>
              <li>Cantarin‑Extremera et al. Tocilizumab in pediatric refractory status epilepticus and acute epilepsy: experience in two patients. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31935626/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 31935626</a>
              </li>
              <li>Wang et al. Is rat hippocampus section immunostaining an indicator for immunotherapy in cryptogenic adult NORSE? 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32066091/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 32066091</a>
              </li>
              <li>Kim et al. Timelines of MRI findings related to outcomes in adult NORSE. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32715470/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 32715470</a>
              </li>
              <li>Yanagida et al. Clinically based score predicting cryptogenic NORSE at early stage of status epilepticus. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32727813/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 32727813</a>
              </li>
              <li>Matthews et al. New‑onset super‑refractory status epilepticus: a case series of 26 patients. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32943479/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 32943479</a>
              </li>
              <li>Lai et al. Anakinra usage in FIRES: an international cohort. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33506622/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 33506622</a>
              </li>
              <li>Wang et al. The ketogenic diet for paediatric patients with super‑refractory status epilepticus in FIRES. 2020.{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/s42494-020-00013-1/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMCID s42494‑020‑00013‑1</a>
              </li>
            </ol>
          </div>
        </details>

        {/* === SECTION 2021–2023 === */}
        <details className="group mb-4 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded-md">2021–2023</span>
              <span className="font-semibold text-slate-800">Case Series (2021 – 2023)</span>
              <span className="text-xs text-gray-400 italic">26 articles</span>
            </div>
            <span className="text-slate-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200">
            <ol className="list-decimal ml-6 space-y-2 text-gray-700 text-sm" start={59}>
              <li>Horino et al. Intrathecal dexamethasone therapy for febrile infection‑related epilepsy syndrome. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33547757/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 33547757</a>
              </li>
              <li>Manganotti et al. Intravenous immunoglobulin response in new‑onset refractory status epilepticus (NORSE) COVID‑19 adult patients. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33709220/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 33709220</a>
              </li>
              <li>Sculier et al. Clinical presentation of new‑onset refractory status epilepticus in children (the pSERG cohort). 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34091885/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 34091885</a>
              </li>
              <li>Nass et al. Permanent loss of independence in adult FIRES survivors: an underestimated and unsolved challenge. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34091969/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 34091969</a>
              </li>
              <li>Yildirim et al. Therapeutic plasma exchange in clinical pediatric neurology practice: experience from a tertiary referral hospital. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34304066/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 34304066</a>
              </li>
              <li>Suchdev et al. Histopathology of new‑onset refractory status epilepticus (NORSE) in adults. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34740145/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 34740145</a>
              </li>
              <li>Neligan et al. The Queen Square Neuro‑ICU experience in new‑onset refractory status epilepticus (NORSE). 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34781063/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 34781063</a>
              </li>
              <li>Wu et al. A retrospective study of 92 children with new‑onset refractory status epilepticus. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34794014/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 34794014</a>
              </li>
              <li>Lim et al. Utility and safety of perampanel in pediatric FIRES and other drug‑resistant epilepsies. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34820471/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 34820471</a>
              </li>
              <li>Nausch et al. NORSE and FIRES of unknown aetiology: a comparison of the incomparable? 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35042004/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 35042004</a>
              </li>
              <li>Aledo‑Serrano et al. Anakinra and tocilizumab in the chronic phase of FIRES: effectiveness and safety from a case series. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35759951/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 35759951</a>
              </li>
              <li>Jain et al. Enteral lorazepam as a promising weaning strategy for midazolam‑responsive FIRES: a case series. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35770765/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 35770765</a>
              </li>
              <li>Werbaneth et al. A retrospective cohort study of NORSE: clinical features, timing of immunotherapy and outcomes. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35892128/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 35892128</a>
              </li>
              <li>Espino et al. Long‑term outcomes after NORSE treated with vagus nerve stimulation. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36177520/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 36177520</a>
              </li>
              <li>Pavone et al. FIRES: a severe encephalopathy with status epilepticus; literature review and two new cases. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36527084/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 36527084</a>
              </li>
              <li>Tainski de Azevedo et al. New‑onset refractory status epilepticus in paediatric patients: causes, characteristics and outcomes. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36530417/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 36530417</a>
              </li>
              <li>Haanpää et al. Early clinical features of new‑onset refractory status epilepticus (NORSE) in adults. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36539824/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 36539824</a>
              </li>
              <li>Lai et al. Systemic inflammatory markers and EEG features of children with FIRES receiving anakinra. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36645080/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 36645080</a>
              </li>
              <li>Shi et al. Long‑term outcomes of adult cryptogenic FIRES. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36686522/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 36686522</a>
              </li>
              <li>Girardin et al. Treatment of new‑onset refractory status epilepticus and FIRES with tocilizumab in a child and a young adult. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36961094/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 36961094</a>
              </li>
              <li>Shrestha et al. Long‑term neuropsychological outcomes in children with FIRES treated with anakinra. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36970506/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 36970506</a>
              </li>
              <li>Fetta et al. Cannabidiol in the acute phase of FIRES. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37042946/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 37042946</a>
              </li>
              <li>Nabbout et al. Ketogenic diet for super‑refractory status epilepticus (SRSE) with NORSE and FIRES. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37122314/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 37122314</a>
              </li>
              <li>Soler Wenglein et al. No evidence of neuronal/glial autoantibodies in FIRES: a prospective clinic‑serologic analysis. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37599999/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 37599999</a>
              </li>
              <li>Eisele et al. The role of neuronal antibodies in cryptogenic new‑onset refractory status epilepticus. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37607299/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 37607299</a>
              </li>
              <li>Furlanis et al. Role of vagus nerve stimulation in refractory and super‑refractory status epilepticus: a pediatric case series. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38002548/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 38002548</a>
              </li>
            </ol>
          </div>
        </details>

        {/* === SECTION 2024–2026 === */}
        <details className="group mb-10 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded-md">2024–2026</span>
              <span className="font-semibold text-slate-800">Case Series (2024 – 2026)</span>
              <span className="text-xs text-gray-400 italic">53 articles</span>
            </div>
            <span className="text-slate-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200">
            <ol className="list-decimal ml-6 space-y-2 text-gray-700 text-sm" start={85}>
              <li>Moreno‑Braurer P et al. Spectrum, evolution and clinical relationship of MRI in 31 children with FIRES. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37798920/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 37798920</a>
              </li>
              <li>Alaskar et al. Time to FIRE NORSE: a single acronym for heterogeneous presentation. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38330780/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 38330780</a>
              </li>
              <li>Bai et al. FIRES with claustrum lesion: an underdiagnosed inflammatory encephalopathy. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38342839/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 38342839</a>
              </li>
              <li>Stretti et al. Long‑term outcome in new‑onset refractory status epilepticus: a retrospective study. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38475798/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 38475798</a>
              </li>
              <li>Costello et al. Clinical outcomes among initial survivors of cryptogenic new‑onset refractory status epilepticus (NORSE). 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38498313/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 38498313</a>
              </li>
              <li>Jimenez et al. Comparative analysis of patients with FIRES versus without prior fever: interim analysis. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38625055/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 38625055</a>
              </li>
              <li>Oliger et al. Responsive neurostimulation as therapy for epilepsy following NORSE: case series and literature review. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38640819/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 38640819</a>
              </li>
              <li>Hanin et al. Trends in management of NORSE patients from 2016 to 2023: an interim analysis. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38837761/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 38837761</a>
              </li>
              <li>Jang et al. Prognosis prediction and immunotherapy optimisation for cryptogenic NORSE. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39237150/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 39237150</a>
              </li>
              <li>Reecher et al. New‑onset refractory status epilepticus with diffuse cerebral restricted diffusion in young children. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39541921/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 39541921</a>
              </li>
              <li>Yorichika et al. Early initiation of intravenous cyclophosphamide and one‑year outcomes in super‑refractory cryptogenic NORSE. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39701580/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 39701580</a>
              </li>
              <li>Nemati et al. NORSE and FIRES cases in children: a retrospective cohort study in South of Iran. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39896696/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 39896696</a>
              </li>
              <li>Bandi et al. Challenges in management of FIRES: real‑world experience from a large paediatric cohort. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39908710/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 39908710</a>
              </li>
              <li>Fisher et al. Combined systemic immunotherapy and intrathecal dexamethasone in FIRES. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39932904/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 39932904</a>
              </li>
              <li>Saad et al. FIRES in children: a retrospective cohort study. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39988600/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 39988600</a>
              </li>
              <li>Liu et al. Vagus nerve stimulation and fast parameter programming protocol in children with FIRES in ICU. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40000337/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40000337</a>
              </li>
              <li>Adiga et al. Phenotype, outcome, interleukins and miRNA levels in NORSE: a prospective cohort study. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40047557/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40047557</a>
              </li>
              <li>Goh et al. Clinical outcomes of cryptogenic new‑onset refractory status epilepticus in Singapore. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40053179/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40053179</a>
              </li>
              <li>Pasqualini et al. Dramatic response to delayed tocilizumab treatment in new‑onset refractory status epilepticus. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40100558/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40100558</a>
              </li>
              <li>Diao et al. Clinical analysis of seven cases of cryptogenic NORSE. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40193644/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40193644</a>
              </li>
              <li>Halawani et al. Comparative analysis of NORSE in adult and pediatric patients. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40251332/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40251332</a>
              </li>
              <li>Farias Moeller et al. Intrathecal dexamethasone as a FIRES extinguisher: experience in 12 patients. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40279013/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40279013</a>
              </li>
              <li>Spoden et al. A case series and review of FIRES. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40310164/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40310164</a>
              </li>
              <li>Ferreira et al. Performance of cryptogenic NORSE score in a Brazilian cohort. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40318023/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40318023</a>
              </li>
              <li>Chin et al. Pediatric new‑onset super‑refractory status epilepticus (NOSRSE): case series. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40318399/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40318399</a>
              </li>
              <li>Muccioli et al. Secondary sclerosing cholangitis in critically ill patients with FIRES. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40343187/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40343187</a>
              </li>
              <li>Teo et al. Comparative clinical outcomes in children with FIRES. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40382999/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40382999</a>
              </li>
              <li>Kilmer et al. Role of metabolic testing in adult NORSE: single‑centre retrospective study. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40470573/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40470573</a>
              </li>
              <li>Feng et al. Minocycline in chronic management of FIRES: case series and literature review. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40481521/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40481521</a>
              </li>
              <li>Zhao et al. Clinical and neuroimaging features of patients with claustrum sign. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40496135/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40496135</a>
              </li>
              <li>He et al. Observational study of tocilizumab in children with FIRES. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40556126/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40556126</a>
              </li>
              <li>Shin et al. Analysis of early EEG changes after tocilizumab treatment in NORSE. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40563808/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40563808</a>
              </li>
              <li>Giussani et al. Retrospective multicenter study on cryptogenic NORSE/FIRES treated with anakinra. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40614647/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40614647</a>
              </li>
              <li>Wang et al. Clinical characteristics of 27 children with FIRES in a single center. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40625895/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40625895</a>
              </li>
              <li>Shrestha et al. Gastrointestinal symptoms are common in patients with NORSE. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40835780/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40835780</a>
              </li>
              <li>Wang et al. Vagus nerve stimulation combined with ketogenic diet versus ketogenic diet alone in children with FIRES. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41047417/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41047417</a>
              </li>
              <li>Das et al. Spectrum of pediatric acute leukoencephalopathy with restricted diffusion presenting as FIRES. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41129842/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41129842</a>
              </li>
              <li>Peng et al. Factors associated with long‑term outcomes in people with new‑onset refractory epilepticus. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41277767/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41277767</a>
              </li>
              <li>Han et al. Symmetrical claustrum sign in pediatric FIRES: diagnostic value and clinical implications. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41427492/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41427492</a>
              </li>
              <li>Fan et al. Ketogenic diet therapy for adult FIRES: case series of five patients and efficacy analysis. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41466766/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41466766</a>
              </li>
              <li>Lattanzi et al. Predicting epilepsy after NORSE due to autoimmune encephalitis: the DAME score. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41467927/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41467927</a>
              </li>
              <li>Levi Strauss et al. Extreme type of new‑onset refractory status epilepticus with stimulus‑induced seizures. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40847775/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40847775</a>
              </li>
              <li>Gruen et al. Quality of life over time after new‑onset refractory status epilepticus. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40944696/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 40944696</a>
              </li>
              <li>Murugesu et al. Tocilizumab for super‑refractory status epilepticus in children with FIRES: case series. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41401655/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41401655</a>
              </li>
              <li>Lim et al. New‑onset refractory status epilepticus associated with Sjögren's disease. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41561677/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41561677</a>
              </li>
              <li>Yan et al. Efficacy differences between tocilizumab and ketogenic diet during acute phase of FIRES in children. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41633319/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41633319</a>
              </li>
              <li>Chidambaram et al. Pediatric new‑onset super‑refractory status epilepticus: potential of timely immunotherapy in a resource‑limited PICU. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41679100/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41679100</a>
              </li>
              <li>Li et al. Metabolism‑corrected propofol exposure intensity and long‑term IQ in pediatric FIRES: retrospective cohort study. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41767518/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41767518</a>
              </li>
              <li>Yoo et al. Vagus nerve stimulation as adjunct therapy for super‑refractory status epilepticus including NORSE. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41875755/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41875755</a>
              </li>
              <li>Deng et al. Clinical outcomes of tocilizumab usage in cryptogenic FIRES at acute and chronic phase. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/42094697/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 42094697</a>
              </li>
              <li>Jayalakshmi et al. Clinical characteristics, etiology, and outcome of NORSE in adults. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41498863/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 41498863</a>
              </li>
              <li>Abe et al. Longitudinal changes in brain volume, cognitive function and seizure outcomes in cryptogenic NORSE. 2026.{" "}
                <a href="https://doi.org/10.1016/j.jns.2026.125981" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">DOI 10.1016/j.jns.2026.125981</a>
              </li>
              <li>Tian et al. The electroencephalographic patterns in the acute phase of febrile infection related epilepsy syndrome in children. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/42241938/" target="_blank" rel="noopener noreferrer" className="text-slate-700 underline hover:text-slate-900 font-medium">PMID 42241938</a>
              </li>
            </ol>
          </div>
        </details>

        {/* ==================== CASE REPORTS ==================== */}
<motion.h2
  className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-indigo-500 pl-3"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  Case Reports
</motion.h2>
        <p className="text-gray-500 text-sm italic mb-6">177 published case reports — 2006 to 2026</p>

        {/* === CASE REPORTS 2006–2010 === */}
        <details className="group mb-4 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-indigo-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-indigo-700 text-white text-xs font-bold px-2 py-1 rounded-md">2006–2010</span>
              <span className="font-semibold text-slate-800">Case Reports (2006 – 2010)</span>
              <span className="text-xs text-gray-400 italic">2 articles</span>
            </div>
            <span className="text-indigo-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200">
            <ol className="list-decimal ml-6 space-y-2 text-gray-700 text-sm" start={1}>
              <li>Okanishi et al. Refractory epilepsy accompanying acute encephalitis with multifocal cortical lesions: possible autoimmune etiology. 2007.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/17442514/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 17442514</a>
              </li>
              <li>Boyd et al. New‑onset refractory status epilepticus with restricted DWI and neuronophagia in the pulvinar. 2010.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/20308685/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 20308685</a>
              </li>
            </ol>
          </div>
        </details>

        {/* === CASE REPORTS 2011–2015 === */}
        <details className="group mb-4 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-indigo-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-indigo-700 text-white text-xs font-bold px-2 py-1 rounded-md">2011–2015</span>
              <span className="font-semibold text-slate-800">Case Reports (2011 – 2015)</span>
              <span className="text-xs text-gray-400 italic">22 articles</span>
            </div>
            <span className="text-indigo-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200">
            <ol className="list-decimal ml-6 space-y-2 text-gray-700 text-sm" start={3}>
              <li>Milh et al. New‑onset refractory convulsive status epilepticus associated with serum neuropil auto‑antibodies in a school‑aged child. 2011.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/21075572/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 21075572</a>
              </li>
              <li>Illingworth et al. Elevated VGKC‑complex antibodies in a boy with fever‑induced refractory epileptic encephalopathy in school‑age children (FIRES). 2011.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/21592118/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 21592118</a>
              </li>
              <li>Specchio et al. Acute‑onset epilepsy triggered by fever mimicking FIRES: the role of PCDH19 gene mutation. 2011.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/21777234/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 21777234</a>
              </li>
              <li>Ismail et al. AERRPS, DESC, NORSE, FIRES: multi‑labeling or distinct epileptic entities? 2011.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/22004046/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 22004046</a>
              </li>
              <li>Boyd et al. Temporal lobe epilepsy after refractory status epilepticus: an illustrative case and review of the literature. 2012.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/22953058/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 22953058</a>
              </li>
              <li>Nozaki et al. Reversible splenic lesion in a patient with febrile infection‑related epilepsy syndrome (FIRES). 2013.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/23794447/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 23794447</a>
              </li>
              <li>Verma et al. New‑onset refractory status epilepticus (NORSE) as the heralding manifestation of herpes simplex encephalitis. 2013.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/23887985/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 23887985</a>
              </li>
              <li>Puoti et al. New‑onset refractory status epilepticus mimicking herpes virus encephalitis. 2013.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/24163672/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 24163672</a>
              </li>
              <li>Pankajakshan et al. Refractory status epilepticus complicated by drug‑induced involuntary movements. 2014.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/24518529/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 24518529</a>
              </li>
              <li>Barros et al. Resective surgery in the treatment of super‑refractory partial status epilepticus secondary to NMDAR antibody encephalitis. 2014.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/24594428/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 24594428</a>
              </li>
              <li>Gedik et al. Therapeutic plasma exchange for malignant refractory status epilepticus: a case report. 2014.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/24630284/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 24630284</a>
              </li>
              <li>Matsuzono et al. Ketogenic diet therapy is effective in encephalitis with refractory seizures. 2014.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/24735348/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 24735348</a>
              </li>
              <li>Nolan et al. Anti‑N‑Methyl‑D‑Aspartate receptor encephalitis presenting to the emergency department with status epilepticus. 2014.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25227654/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 25227654</a>
              </li>
              <li>Ibrahim et al. New‑onset refractory status epilepticus in a young man with H1N1 infection. 2014.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25379313/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 25379313</a>
              </li>
              <li>Hainsworth et al. Treatment‑responsive GABA(B)‑receptor limbic encephalitis presenting as new‑onset super‑refractory status epilepticus (NORSE) in a deployed soldier. 2014.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25465280/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 25465280</a>
              </li>
              <li>Byler et al. Rapid onset of hippocampal atrophy in febrile infection‑related epilepsy syndrome (FIRES). 2014.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/23400244/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 23400244</a>
              </li>
              <li>Capizzi et al. Lidocaine treatment in refractory status epilepticus resulting from FIRES: a case report and follow‑up. 2015.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25343330/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 25343330</a>
              </li>
              <li>Moriyama et al. Protein‑losing enteropathy as a rare complication of the ketogenic diet. 2015.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25724370/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 25724370</a>
              </li>
              <li>Kumari et al. &quot;The great imitator&quot;: neurosyphilis and new‑onset refractory status epilepticus (NORSE) syndrome. 2015.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25859427/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 25859427</a>
              </li>
              <li>Amer et al. Refractory status epilepticus from NMDA receptor encephalitis successfully treated with an adjunctive ketogenic diet. 2015.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26019434/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 26019434</a>
              </li>
              <li>Laswell et al. New‑onset refractory status epilepticus in an adult with an atypical presentation of cat‑scratch disease. 2015.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26044784/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 26044784</a>
              </li>
              <li>Agarwal et al. Hippocampal changes in febrile infection‑related epilepsy syndrome (FIRES). 2015.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26379807/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 26379807</a>
              </li>
            </ol>
          </div>
        </details>

        {/* === CASE REPORTS 2016–2020 === */}
        <details className="group mb-4 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-indigo-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-indigo-700 text-white text-xs font-bold px-2 py-1 rounded-md">2016–2020</span>
              <span className="font-semibold text-slate-800">Case Reports (2016 – 2020)</span>
              <span className="text-xs text-gray-400 italic">52 articles</span>
            </div>
            <span className="text-indigo-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200">
            <ol className="list-decimal ml-6 space-y-2 text-gray-700 text-sm" start={25}>
              <li>Ogawa et al. Autopsy findings of a patient with acute encephalitis and refractory, repetitive partial seizures. 2016.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26803054/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 26803054</a>
              </li>
              <li>Khawaja et al. Refractory status epilepticus and glutamic acid decarboxylase antibodies in adults: presentation, treatment and outcomes. 2016.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26878120/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 26878120</a>
              </li>
              <li>Sato et al. Acute encephalitis with refractory, repetitive partial seizures: pathological findings and a new therapeutic approach using tacrolimus. 2016.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26906012/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 26906012</a>
              </li>
              <li>Chou et al. Marked improvement in febrile infection‑related epilepsy syndrome after lidocaine plus MgSO₄ treatment in a 12‑year‑old girl. 2016.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27358770/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 27358770</a>
              </li>
              <li>Dillien et al. New‑onset refractory status epilepticus: more investigations, more questions. 2016.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27462243/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 27462243</a>
              </li>
              <li>Kenney Jung et al. Febrile infection‑related epilepsy syndrome treated with anakinra. 2016.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27770579/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 27770579</a>
              </li>
              <li>Zhang et al. Acute encephalitis with refractory, repetitive partial seizures: a case report and literature review. 2016.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27882170/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 27882170</a>
              </li>
              <li>Miras Veiga et al. Effectiveness of electroconvulsive therapy for refractory status epilepticus in FIRES. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27434885/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 27434885</a>
              </li>
              <li>Uchida et al. Combination of ketogenic diet and stiripentol for super‑refractory status epilepticus. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28131220/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 28131220</a>
              </li>
              <li>Yamazoe et al. New‑onset refractory status epilepticus treated with vagus nerve stimulation: a case report. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28267658/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 28267658</a>
              </li>
              <li>Varrasi et al. Auditory seizures in autoimmune epilepsy: a case with anti‑thyroid antibodies. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28287071/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 28287071</a>
              </li>
              <li>Kaufman et al. Moyamoya in a patient with FIRES: a first case report. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28436815/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 28436815</a>
              </li>
              <li>Marashly et al. Successful surgical management of NORSE presenting with gelastic seizures in a 3‑year‑old girl. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28725554/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 28725554</a>
              </li>
              <li>Shrivastava et al. Plasma exchange as a therapeutic modality in a rare case of cryptogenic NORSE. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28892919/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 28892919</a>
              </li>
              <li>Hau Man et al. Effect of plasmapheresis on serum levels of clobazam, levetiracetam and topiramate. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28951835/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 28951835</a>
              </li>
              <li>Nardetto et al. 18F‑FDG PET/MRI in cryptogenic NORSE: a potential marker of disease location and activity. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/28991656/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 28991656</a>
              </li>
              <li>Matar et al. New‑onset refractory status epilepticus due to primary angiitis of the central nervous system. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29062691/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 29062691</a>
              </li>
              <li>Villamar et al. Rabies encephalitis presenting with new‑onset refractory status epilepticus (NORSE). 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29620067/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 29620067</a>
              </li>
              <li>Alparslan et al. FIRES treated with immunomodulation in an 8‑year‑old boy and review of the literature. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29624228/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 29624228</a>
              </li>
              <li>Kaplan et al. Limbic and new‑onset refractory tonic status epilepticus in anti‑NMDAR encephalitis. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/30214986/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 30214986</a>
              </li>
              <li>Caputo et al. FIRES with super‑refractory status epilepticus revealing autoimmune encephalitis due to GABA<sub>A</sub>R antibodies. 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29203057/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 29203057</a>
              </li>
              <li>Savard et al. Jamestown Canyon encephalitis with NORSE and electrographic response to ribavirin. 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29881809/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 29881809</a>
              </li>
              <li>Chan et al. Electroconvulsive therapy for new‑onset super‑refractory status epilepticus. 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29926794/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 29926794</a>
              </li>
              <li>Tan et al. FIRES with multifocal subcortical infarcts: a new imaging phenotype. 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29980149/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 29980149</a>
              </li>
              <li>Kodama et al. Favorable outcome of intensive immunotherapies for new‑onset refractory status epilepticus. 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/30083346/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 30083346</a>
              </li>
              <li>Agarwal et al. Unusual cause of fever, vision loss and super‑refractory status epilepticus in association with simian virus 40 (SV40). 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/30317196/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 30317196</a>
              </li>
              <li>Kurukumbi et al. Vagus nerve stimulation in super‑refractory NORSE. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/30805233/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 30805233</a>
              </li>
              <li>Ungureanu et al. Bilateral fronto‑insular FLAIR hyperintensities in NORSE. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31004289/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 31004289</a>
              </li>
              <li>Fatuzzo et al. FIRES in an adult patient: an early neuroradiological finding. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31093785/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 31093785</a>
              </li>
              <li>Dilena et al. Therapeutic effect of anakinra in relapsing chronic phase of FIRES. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31168503/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 31168503</a>
              </li>
              <li>Eguchi et al. Reversible splenial lesion in NORSE: case report. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31254907/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 31254907</a>
              </li>
              <li>Al‑Khateeb et al. Schizophrenia following NORSE secondary to antiphospholipid syndrome. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31380826/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 31380826</a>
              </li>
              <li>Daida et al. NORSE involving limbic system, spinal cord, and peripheral nerves. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31511489/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 31511489</a>
              </li>
              <li>Hainsworth et al. Super‑refractory status epilepticus treated with high‑dose perampanel. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31565443/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 31565443</a>
              </li>
              <li>Cho et al. Encephalitis with anti‑SOX1 antibodies presenting with NORSE. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31591846/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 31591846</a>
              </li>
              <li>Westbrook et al. FIRES treated successfully with anakinra in a 21‑year‑old woman. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31682750/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 31682750</a>
              </li>
              <li>Mizutani et al. Reversible splenial lesion in a patient with NORSE. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31909228/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 31909228</a>
              </li>
              <li>Hurth et al. Microdialysis findings in new‑onset refractory non‑convulsive status epilepticus. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31556003/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 31556003</a>
              </li>
              <li>Monti et al. Anti‑NMDA receptor encephalitis presenting as NORSE in COVID‑19. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32688169/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 32688169</a>
              </li>
              <li>Eaton et al. Avoiding anaesthetics after multiple failed drug‑induced comas: an unorthodox NORSE management approach. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31708492/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 31708492</a>
              </li>
              <li>Houk et al. Abdominal compartment syndrome as a rare complication of pentobarbital treatment for NORSE. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32223826/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 32223826</a>
              </li>
              <li>Brunker et al. NORSE with underlying autoimmune etiology. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32435752/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 32435752</a>
              </li>
              <li>Ferlisi et al. Very prolonged cryptogenic NORSE with good neurological recovery. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32458254/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 32458254</a>
              </li>
              <li>Najjar et al. CNS complications associated with SARS‑CoV‑2 infection: integrative concepts and case reports. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32758257/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 32758257</a>
              </li>
              <li>Goyal et al. Atypical case of FIRES following acute encephalitis: impact of physiotherapy on regaining locomotor abilities. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32774660/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 32774660</a>
              </li>
              <li>Kern‑Smith et al. The cat&apos;s out of the bag: NORSE due to Bartonella henselae. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32891052/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 32891052</a>
              </li>
              <li>Seniaray et al. 18F‑FDG PET/CT in initial diagnosis and treatment response evaluation of NORSE. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33082685/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33082685</a>
              </li>
              <li>Vallecoccia et al. Use of unconventional therapies in super‑refractory status epilepticus: case report and literature review. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33233961/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33233961</a>
              </li>
              <li>Kwan et al. Status epilepticus from GABA(B)R antibody positive encephalitis due to mixed small cell and adenocarcinoma of prostate. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33257388/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33257388</a>
              </li>
              <li>Jaafar et al. Super‑refractory status epilepticus secondary to anti‑GAD antibody encephalitis successfully treated with immunotherapy. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33305253/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33305253</a>
              </li>
              <li>Theroux et al. Improved seizure burden and cognitive performance in a child treated with RNS following FIRES. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33331273/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33331273</a>
              </li>
              <li>Stredny et al. Interleukin‑6 blockade with tocilizumab in anakinra‑refractory FIRES. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33403221/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33403221</a>
              </li>
            </ol>
          </div>
        </details>

        {/* === CASE REPORTS 2021–2023 === */}
        <details className="group mb-4 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-indigo-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-indigo-700 text-white text-xs font-bold px-2 py-1 rounded-md">2021–2023</span>
              <span className="font-semibold text-slate-800">Case Reports (2021 – 2023)</span>
              <span className="text-xs text-gray-400 italic">56 articles</span>
            </div>
            <span className="text-indigo-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200">
            <ol className="list-decimal ml-6 space-y-2 text-gray-700 text-sm" start={77}>
              <li>Dono et al. New‑onset refractory status epilepticus (NORSE) in post‑SARS‑CoV‑2 autoimmune encephalitis: a case report. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33145624/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33145624</a>
              </li>
              <li>Yang et al. Successful treatment of pediatric FIRES with anakinra. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33227629/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33227629</a>
              </li>
              <li>Baba et al. Possible role of high‑dose barbiturates and early parenteral ketogenic diet to reduce chronic epilepsy development in FIRES: a case report. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33231274/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33231274</a>
              </li>
              <li>Jang et al. Tofacitinib treatment for refractory autoimmune encephalitis. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33656171/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33656171</a>
              </li>
              <li>Katz et al. Pearls and pitfalls of introducing ketogenic diet in adult status epilepticus: a guide for intensivists. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33671485/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33671485</a>
              </li>
              <li>Meenakshi‑Sundaram et al. Super‑refractory status in FIRES due to hemophagocytic lymphocytic histiocytosis. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33681644/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33681644</a>
              </li>
              <li>Donnelly et al. Resolution of cryptogenic new onset refractory status epilepticus with tocilizumab. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33748736/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33748736</a>
              </li>
              <li>Cossu et al. Remote teamwork management of NORSE during the COVID‑19 lockdown. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33842087/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33842087</a>
              </li>
              <li>Wu et al. Cryptogenic NORSE following blood transfusion in severe anemia. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33881399/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 33881399</a>
              </li>
              <li>Choi et al. Super‑refractory status epilepticus in autoimmune encephalitis treated with interleukin‑1 receptor antagonist (anakinra). 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34057410/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34057410</a>
              </li>
              <li>Aladdin et al. New‑onset refractory status epilepticus following the ChAdOx1 nCoV‑19 vaccine. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34153802/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34153802</a>
              </li>
              <li>Appleberry et al. Child with febrile status epilepticus and post‑COVID multisystem inflammatory syndrome. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34285930/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34285930</a>
              </li>
              <li>Rachfalska et al. Dramatic course of pediatric cryptogenic FIRES with unusual chronic phase presentation and literature review. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34439649/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34439649</a>
              </li>
              <li>L&apos;Erario et al. Sevoflurane as bridge therapy for plasma exchange and anakinra in FIRES. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34596364/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34596364</a>
              </li>
              <li>Li et al. Ketogenic diet therapy in the acute phase of FIRES: a case report. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34733679/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34733679</a>
              </li>
              <li>Nath et al. Role for electroconvulsive therapy in management of NORSE in a young child. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34747817/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34747817</a>
              </li>
              <li>Luo et al. Vagus nerve stimulation for super‑refractory status epilepticus in FIRES: pediatric case report and literature review. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34762158/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34762158</a>
              </li>
              <li>Shah et al. NORSE as a manifestation of tuberculosis of the CNS. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34979693/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34979693</a>
              </li>
              <li>Kumar et al. Anti‑N‑methyl‑D‑aspartate receptor encephalitis presenting as NORSE responding to rituximab in an adolescent girl. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36531781/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 36531781</a>
              </li>
              <li>Hect et al. Deep brain stimulation of the centromedian thalamic nucleus for treatment of FIRES. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34862854/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34862854</a>
              </li>
              <li>Palacios‑Mendoza et al. Response to anakinra in new‑onset refractory status epilepticus: a clinical case. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34875544/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34875544</a>
              </li>
              <li>Al‑Chalabi et al. NORSE secondary to HIV CNS viral escape syndrome: case report. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34894438/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34894438</a>
              </li>
              <li>Aydemir et al. High‑dose cannabidiol (CBD) in treatment of NORSE. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34896815/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34896815</a>
              </li>
              <li>Wadayama et al. Cryptogenic NORSE responded to anti‑interleukin‑6 treatment. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34973472/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 34973472</a>
              </li>
              <li>Obara et al. Ketogenic diet for a young adult patient with chronic‑phase FIRES. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35165646/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 35165646</a>
              </li>
              <li>Juneja et al. Evidence‑based approach to diagnosis and prognosis in a young woman with new‑onset super‑refractory status epilepticus. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35221970/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 35221970</a>
              </li>
              <li>Nawfal et al. New‑onset refractory status epilepticus as early manifestation of multisystem inflammatory syndrome in adults after COVID‑19. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35306658/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 35306658</a>
              </li>
              <li>Perulli et al. Fighting autoinflammation in FIRES: role of interleukins and early immunomodulation. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35356746/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 35356746</a>
              </li>
              <li>Orlandi et al. An ultra‑long new‑onset refractory status epilepticus: winning the battle but losing the war. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35445189/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 35445189</a>
              </li>
              <li>Lala et al. Multifocal multilobar focal cortical dysplasia type IIa in FIRES. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35483186/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 35483186</a>
              </li>
              <li>Acampora et al. A case of FIRES in a young adult: still a diagnostic and therapeutic challenge. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35507191/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 35507191</a>
              </li>
              <li>Kurimoto et al. Anti‑inflammatory and immune‑mediated therapy for FIRES with rapid recurrence. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35685830/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 35685830</a>
              </li>
              <li>Sivathanu et al. Favorable response to classic ketogenic diet in anti‑GAD65 antibody‑mediated super‑refractory status epilepticus. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35789965/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 35789965</a>
              </li>
              <li>Coban et al. Combined immunoglobulin and plasmapheresis treatment for FIRES. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35879215/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 35879215</a>
              </li>
              <li>Varughese et al. Initial presentation of PCDH19‑related epilepsy with NORSE treated with anakinra. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35914944/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 35914944</a>
              </li>
              <li>Basso et al. Connections between FIRES and autoimmune encephalitis: new anti‑neuronal antibodies in a child. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36003492/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 36003492</a>
              </li>
              <li>Werner et al. NORSE due to autoimmune encephalitis after SARS‑CoV‑2 vaccination: first case report. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36051224/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 36051224</a>
              </li>
              <li>Chen et al. Role of responsive neurostimulation and immunotherapy in refractory epilepsy due to autoimmune encephalitis. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36408512/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 36408512</a>
              </li>
              <li>Won et al. The increased interleukin‑6 levels can be an early diagnostic marker for new‑onset refractory status epilepticus. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36685741/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 36685741</a>
              </li>
              <li>Astner‑Rohracher et al. NORSE in a patient with FASTKD2‑related mitochondrial disease. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36712458/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 36712458</a>
              </li>
              <li>Kam et al. Inflammatory epilepsy (FIRES) and hemophagocytic lymphohistiocytosis (HLH): an adult case. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36720516/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 36720516</a>
              </li>
              <li>Bonardi et al. Myoclonic super‑refractory status epilepticus in a teenager with FIRES treated with VNS and cannabidiol. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36725381/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 36725381</a>
              </li>
              <li>Goh et al. Bridging the gap: tailoring an approach to treatment in FIRES. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36797068/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 36797068</a>
              </li>
              <li>Rodriguez‑Villar et al. New‑onset refractory status epilepticus responsive to VNS. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37087686/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 37087686</a>
              </li>
              <li>Indelicato et al. NORSE due to a novel MT‑TF variant: time for acute genetic testing before treatment. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37090940/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 37090940</a>
              </li>
              <li>Mehta et al. Intrathecal dexamethasone in FIRES: a case report. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37197372/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 37197372</a>
              </li>
              <li>Guo et al. Claustrum sign in FIRES. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37273001/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 37273001</a>
              </li>
              <li>Ernst et al. Responsive neurostimulation as treatment for super‑refractory focal status epilepticus: systematic review and case series. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37329518/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 37329518</a>
              </li>
              <li>Di Dier et al. Claustrum sign in FIRES. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37396965/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 37396965</a>
              </li>
              <li>Alemdar et al. Anti‑NMDA receptor encephalitis presenting with NORSE. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37435283/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 37435283</a>
              </li>
              <li>Osbourn et al. NORSE in a traveler with Japanese encephalitis. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37659268/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 37659268</a>
              </li>
              <li>Sugata et al. Lidocaine as a potential therapeutic option for super‑refractory status epilepticus. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37692459/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 37692459</a>
              </li>
              <li>Bellingham et al. Multimodal management of FIRES in a 17‑year‑old male. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37791156/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 37791156</a>
              </li>
              <li>Yang et al. Refractory status epilepticus associated with a pathogenic variant in TNFRSF13B. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38054159/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 38054159</a>
              </li>
              <li>Cupane et al. Beneficial outcome of subsequent treatment with anakinra during chronic phase of FIRES. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38132976/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 38132976</a>
              </li>
              <li>Watanabe et al. Reversible Brain Atrophy in Cryptogenic New-onset Refractory Status Epilepticus. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36351577/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 36351577</a>
              </li>
            </ol>
          </div>
        </details>

        {/* === CASE REPORTS 2024–2026 === */}
        <details className="group mb-10 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-indigo-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-indigo-700 text-white text-xs font-bold px-2 py-1 rounded-md">2024–2026</span>
              <span className="font-semibold text-slate-800">Case Reports (2024 – 2026)</span>
              <span className="text-xs text-gray-400 italic">49 articles</span>
            </div>
            <span className="text-indigo-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200">
            <ol className="list-decimal ml-6 space-y-2 text-gray-700 text-sm" start={133}>
              <li>Mehboob et al. Refractory status epilepticus arrested by vagus nerve stimulation. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37875347/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 37875347</a>
              </li>
              <li>Ruttkowski et al. Febrile infection‑related epilepsy syndrome in a 14‑year‑old girl with multiple organ failure and lethal outcome. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38505775/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 38505775</a>
              </li>
              <li>Nakamura et al. Treatment of cryptogenic new‑onset refractory status epilepticus (C‑NORSE) with tocilizumab. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38658340/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 38658340</a>
              </li>
              <li>Sun et al. Electroconvulsive therapy in new‑onset refractory status epilepticus (NORSE) in a pediatric patient. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38763413/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 38763413</a>
              </li>
              <li>Ohno et al. Steroid‑responsive involuntary movements as a remote symptom of FIRES. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38887352/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 38887352</a>
              </li>
              <li>Kumar et al. Serial MRI changes in FIRES: a clinical and radiologic exploration. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38912543/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 38912543</a>
              </li>
              <li>Yoneno et al. Efficacy of ketogenic diet in chronic phase FIRES. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39119419/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 39119419</a>
              </li>
              <li>Yarimi et al. IT‑DEX and B cell depletion in a child with anti‑GAD65 autoimmune encephalitis presenting as NORSE. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39128431/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 39128431</a>
              </li>
              <li>Harrar et al. Successful management of FIRES using cytokine‑directed therapy. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39196283/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 39196283</a>
              </li>
              <li>Vrushabhendra et al. A case of FIRES with favorable response to tocilizumab. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39257172/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 39257172</a>
              </li>
              <li>Shide‑Moriguchi et al. Myelin oligodendrocyte glycoprotein antibody‑associated cerebral cortical encephalitis with super‑refractory status epilepticus. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39261182/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 39261182</a>
              </li>
              <li>Levee et al. POLG epilepsy presenting as new‑onset refractory status epilepticus (NORSE) in pregnancy. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39209381/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 39209381</a>
              </li>
              <li>Takahasi et al. Cryptogenic NORSE with bilateral basal ganglia T1‑weighted hyperintensity: autopsy report. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39343569/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 39343569</a>
              </li>
              <li>Wan et al. Favorable outcomes and FDG‑PET changes after tocilizumab treatment for FIRES in a child. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39689594/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 39689594</a>
              </li>
              <li>Vaingankar et al. Myelin oligodendrocyte glycoprotein antibody‑associated disease (MOGAD) as a cause of NORSE. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39799767/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 39799767</a>
              </li>
              <li>Li et al. NORSE secondary to anti‑GAD65 antibody‑positive encephalitis treated with rapid VNS titration protocol. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39801479/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 39801479</a>
              </li>
              <li>Sudarsanan et al. Early intrathecal dexamethasone associated with faster recovery and good outcome in adolescent FIRES. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39900388/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 39900388</a>
              </li>
              <li>Ochiai et al. Potential role of perampanel in reducing barbiturate dependency in FIRES: a case report. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39958143/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 39958143</a>
              </li>
              <li>Konomatsu et al. Adult‑onset epilepsy with startle‑induced seizure after FIRES. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40232152/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 40232152</a>
              </li>
              <li>Sabaka et al. Autoimmune encephalitis associated with anti‑SOX1 autoantibodies in COVID‑19. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40330578/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 40330578</a>
              </li>
              <li>Heinrich et al. Adult‑onset FIRES treated with short‑term anakinra. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40568054/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 40568054</a>
              </li>
              <li>Kola et al. Rescue use of electroconvulsive therapy in NORSE during pregnancy. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40774775/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 40774775</a>
              </li>
              <li>Karadjole et al. New‑onset refractory status epilepticus diagnosed in the second trimester. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41113454/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41113454</a>
              </li>
              <li>Ding et al. Hemorrhagic cystitis induced by intravenous esketamine in treatment of NORSE in children: a case report. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41113565/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41113565</a>
              </li>
              <li>Li et al. Bartonella henselae‑related NORSE/FIRES complicated by stimulus‑induced ictal discharges. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41124380/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41124380</a>
              </li>
              <li>Okochi et al. Early recovery from cryptogenic NORSE following repeated C‑NORSE score assessment and cyclophosphamide treatment. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41125373/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41125373</a>
              </li>
              <li>Kambe et al. Intensive intracranial pressure and temperature monitoring improving outcome in severe cryptogenic NORSE. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41181192/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41181192</a>
              </li>
              <li>Lan et al. Successful treatment of cryptogenic NORSE resistant to immunosuppression with IV ganaxolone and ECT. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41210562/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41210562</a>
              </li>
              <li>Sasaki et al. Deep brain stimulation of the anterior thalamic nucleus for seizures after NORSE. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41245234/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41245234</a>
              </li>
              <li>Caporale et al. Successful multimodal management of FIRES in a pediatric patient using anakinra, ketogenic diet and induced hypothermia. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41293210/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41293210</a>
              </li>
              <li>Takatsu et al. Emergence of atypical lymphocytes before cryptogenic NORSE. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41306648/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41306648</a>
              </li>
              <li>Tang et al. Refractory status epilepticus treated with bilateral pulvinar deep brain stimulation. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41345856/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41345856</a>
              </li>
              <li>Abdullah et al. Claustrum sign: an increasingly recognized imaging feature of NORSE. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41357437/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41357437</a>
              </li>
              <li>Foong et al. Breaking the neuroinflammatory loop with intrathecal dexamethasone in FIRES. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41454105/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41454105</a>
              </li>
              <li>Yang et al. Lidocaine as a potential anti‑seizure therapy for pediatric FIRES: a promising approach. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41480377/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41480377</a>
              </li>
              <li>Park et al. Advancing FIRES treatment: the potential of intrathecal dexamethasone. 2025.{" "}
                <a href="https://doi.org/10.1002/cns3.70008" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">DOI 10.1002/cns3.70008</a>
              </li>
              <li>Nico et al. Rapid recovery after intrathecal dexamethasone in FIRES. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41502299/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41502299</a>
              </li>
              <li>Tan et al. FIRES in adults: case report and review of factors associated with survival. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41524901/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41524901</a>
              </li>
              <li>McLaughlin et al. Use of electroconvulsive therapy in NORSE: case report and systematic review. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41557907/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41557907</a>
              </li>
              <li>Chan et al. Secondary hemophagocytic lymphohistiocytosis concurrent with FIRES in a child. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41637924/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41637924</a>
              </li>
              <li>Muccioli et al. Extreme cryptogenic NORSE/FIRES: evidence of profound neuroinflammation and neuronal injury. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41697173/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 41697173</a>
              </li>
              <li>Mirian et al. Claustrum sign in Hashimoto encephalopathy presenting with NORSE. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/42022976/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 42022976</a>
              </li>
              <li>Bildik et al. Neuroimaging spectrum of immune‑mediated CNS disorders in children following SARS‑CoV‑2 infection — case series component. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/42100917/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 42100917</a>
              </li>
              <li>Meng et al. Superfast VNS titration for the treatment of SRSE in the acute phase of FIRES: a pediatric case report and literature review. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/42261675/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 42261675</a>
              </li>
              <li>Pang et al. Case report: tocilizumab in pediatric febrile infection-related epilepsy syndrome. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/42317346/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline hover:text-indigo-900 font-medium">PMID 42317346</a>
              </li>
            </ol>
          </div>
        </details>

        {/* ==================== OTHERS ==================== */}
<motion.h2
  className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-amber-500 pl-3"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  Reviews, Pathophysiology, Definitions &amp; Guidelines
</motion.h2>
        <p className="text-gray-500 text-sm italic mb-6">Reviews, pathophysiology studies, guidelines, definitions and registry descriptions — 2006 to 2026</p>

        <details className="group mb-10 border border-gray-200 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-gray-50 hover:bg-amber-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-md">2006–2026</span>
              <span className="font-semibold text-slate-800">Others (2006 – 2026)</span>
              <span className="text-xs text-gray-400 italic">99 articles</span>
            </div>
            <span className="text-amber-600 font-bold text-xl">+</span>
          </summary>
          <div className="px-6 py-5 border-t border-gray-200">
            <ol className="list-decimal ml-6 space-y-2 text-gray-700 text-sm" start={1}>
              <li>Sakuma et al. Acute encephalitis with refractory, repetitive partial seizures. 2009.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/19327924/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 19327924</a>
              </li>
              <li>Kobayashi et al. Genetic seizure susceptibility underlying acute encephalopathies in childhood. 2010.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/20675100/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 20675100</a>
              </li>
              <li>Nabbout et al. Acute encephalopathy with inflammation-mediated status epilepticus. 2011.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/21163447/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 21163447</a>
              </li>
              <li>Suleiman et al. VGKC antibodies in pediatric encephalitis presenting with status epilepticus. 2011.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/21464429/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 21464429</a>
              </li>
              <li>Carranza Rojo et al. Febrile infection-related epilepsy syndrome is not caused by SCN1A mutations. 2012.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/22386634/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 22386634</a>
              </li>
              <li>Kobayashi et al. Acute encephalopathy with a novel point mutation in the SCN2A gene. 2012.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/22591750/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 22591750</a>
              </li>
              <li>Van Baalen et al. Febrile Infection-Related Epilepsy Syndrome without Detectable Autoantibodies and Response to Immunotherapy. 2012.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/22911482/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 22911482</a>
              </li>
              <li>Appenzeller et al. Febrile infection-related epilepsy syndrome (FIRES) is not caused by SCN1A, POLG, PCDH19 mutations or rare copy number variations. 2012.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/23066759/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 23066759</a>
              </li>
              <li>Nabbout et al. FIRES and IHHE: Delineation of the syndromes. 2013.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/24001074/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 24001074</a>
              </li>
              <li>Pardo et al. Mechanisms of Epileptogenesis in Pediatric Epileptic Syndromes: Rasmussen Encephalitis, Infantile Spasms, and Febrile Infection-related Epilepsy Syndrome (FIRES). 2014.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/24639375/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 24639375</a>
              </li>
              <li>Sakuma et al. Intrathecal overproduction of proinflammatory cytokines and chemokines in febrile infection-related refractory status epilepticus. 2015.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25398790/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 25398790</a>
              </li>
              <li>Saitoh et al. Cytokine-related and sodium channel polymorphism as candidate predisposing factors for childhood encephalopathy FIRES/AERRPS. 2016.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27538648/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 27538648</a>
              </li>
              <li>Van Baalen et al. Febrile Infection–Related Epilepsy Syndrome: Clinical Review and Hypotheses of Epileptogenesis. 2017.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27919115/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 27919115</a>
              </li>
              <li>Hirsch et al. Proposed consensus definitions for new-onset refractory status epilepticus (NORSE), febrile infection-related epilepsy syndrome (FIRES), and related conditions. 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29399791/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 29399791</a>
              </li>
              <li>Gaspard et al. New-onset refractory status epilepticus (NORSE) and febrile infection-related epilepsy syndrome (FIRES): State of the art and perspectives. 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29476535/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 29476535</a>
              </li>
              <li>Hon et al. Febrile Infection-Related Epilepsy Syndrome (FIRES): An Overview of Treatment and Recent Patents. 2018.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29745347/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 29745347</a>
              </li>
              <li>Sculier et al. New onset refractory status epilepticus (NORSE). 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/30482654/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 30482654</a>
              </li>
              <li>Clarkson et al. Functional Deficiency in Endogenous Interleukin-1 Receptor Antagonist in Patients with Febrile Infection-Related Epilepsy Syndrome. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/30779222/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 30779222</a>
              </li>
              <li>Culleton et al. The spectrum of neuroimaging findings in febrile infection-related epilepsy syndrome (FIRES): A literature review. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/30854647/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 30854647</a>
              </li>
              <li>Gofton et al. New onset refractory status epilepticus research: What is on the horizon? 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/30894443/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 30894443</a>
              </li>
              <li>Gofton et al. Communication Challenges: A Spotlight on New-Onset Refractory Status Epilepticus. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/30935709/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 30935709</a>
              </li>
              <li>Kothur et al. Etiology is the key determinant of neuroinflammation in epilepsy: Elevation of cerebrospinal fluid cytokines and chemokines in febrile infection-related epilepsy syndrome and febrile status epilepticus. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31283843/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 31283843</a>
              </li>
              <li>Serino et al. Febrile infection-related epilepsy syndrome (FIRES): prevalence, impact and management strategies. 2019.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/31371963/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 31371963</a>
              </li>
              <li>Payne et al. Extinguishing Febrile Infection-Related Epilepsy Syndrome: Pipe Dream or Reality? 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32185792/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 32185792</a>
              </li>
              <li>Sakuma et al. Neurocritical care and target immunotherapy for febrile infection-related epilepsy syndrome. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32330681/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 32330681</a>
              </li>
              <li>Specchio et al. New-onset refractory status epilepticus and febrile infection-related epilepsy syndrome. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32372459/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 32372459</a>
              </li>
              <li>Kessi et al. Efficacy of different treatment modalities for acute and chronic phases of the febrile infection-related epilepsy syndrome: A systematic review. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32417686/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 32417686</a>
              </li>
              <li>Hsieh et al. Diminished toll-like receptor response in febrile infection-related epilepsy syndrome (FIRES). 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32651134/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 32651134</a>
              </li>
              <li>Helbig et al. Whole-exome and HLA sequencing in Febrile infection-related epilepsy syndrome. 2020.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32666661/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 32666661</a>
              </li>
              <li>Bhatia et al. New Onset Refractory Status Epilepticus. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33620842/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 33620842</a>
              </li>
              <li>Mantoan et al. New-onset refractory status epilepticus (NORSE). 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33674412/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 33674412</a>
              </li>
              <li>Koh et al. Proposal to optimize evaluation and treatment of Febrile infection-related epilepsy syndrome (FIRES): A Report from FIRES workshop. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33681649/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 33681649</a>
              </li>
              <li>Kazazian et al. How to Help Your Patients Enroll in the NORSE and FIRES Family Registry, and Other Rare Epilepsy Registries. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/33769129/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 33769129</a>
              </li>
              <li>Farias Moeller et al. Parental perception of FIRES outcomes, emotional states, and social media usage. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34098587/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 34098587</a>
              </li>
              <li>Lin et al. Hypothesis: Febrile infection-related epilepsy syndrome is a microglial NLRP3 inflammasome/IL-1 axis-driven autoinflammatory syndrome. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34141434/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 34141434</a>
              </li>
              <li>Yamanaka et al. Towards a Treatment for Neuroinflammation in Epilepsy: Interleukin-1 Receptor Antagonist, Anakinra, as a Potential Treatment in Intractable Epilepsy. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34208064/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 34208064</a>
              </li>
              <li>Lattanzi et al. Unraveling the enigma of new-onset refractory status epilepticus: a systematic review of aetiologies. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34661330/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 34661330</a>
              </li>
              <li>Périn et al. New onset refractory status epilepticus: State of the art. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35031143/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 35031143</a>
              </li>
              <li>Specchio et al. International League Against Epilepsy classification and definition of epilepsy syndromes with onset in childhood. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35503717/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 35503717</a>
              </li>
              <li>Wickstrom et al. International consensus recommendations for management of NORSE including FIRES: Summary and Clinical Tools. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35951466/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 35951466</a>
              </li>
              <li>Wickstrom et al. International consensus recommendations for management of NORSE including FIRES: Statements and Supporting Evidence. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/35997591/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 35997591</a>
              </li>
              <li>Arif et al. New-Onset Refractory Status Epilepticus Secondary to COVID-19 Infection in Adults: A Systematic Review. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36065386/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 36065386</a>
              </li>
              <li>Kaur et al. Fever, Seizures and Encephalopathy: From Bush Fires to Firestorms. 2022.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36211150/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 36211150</a>
              </li>
              <li>Wang et al. Multi-proteomic Analysis Revealed Distinct Protein Profiles in Cerebrospinal Fluid of Patients Between Anti-NMDAR Encephalitis NORSE and Cryptogenic NORSE. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36224320/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 36224320</a>
              </li>
              <li>Wong et al. Surviving status epilepticus: The patient and family perspective. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36521408/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 36521408</a>
              </li>
              <li>Tharmaraja et al. The etiology and mortality of new-onset refractory status epilepticus (NORSE) in adults: A systematic review and meta-analysis. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36727541/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 36727541</a>
              </li>
              <li>Taraschenko et al. Seizure burden and neuropsychological outcomes of new-onset refractory status epilepticus: Systematic review. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36761344/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 36761344</a>
              </li>
              <li>Sculier et al. New-onset refractory status epilepticus and febrile infection-related epilepsy syndrome. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36762646/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 36762646</a>
              </li>
              <li>Gaspard et al. Is NORSE a meaningful clinical entity? 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36807989/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 36807989</a>
              </li>
              <li>Hanin et al. Cytokines in New-Onset Refractory Status Epilepticus Predict Outcomes. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36871188/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 36871188</a>
              </li>
              <li>Li et al. Blood–brain barrier damage and new onset refractory status epilepticus: An exploratory study using dynamic contrast-enhanced magnetic resonance imaging. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36892496/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 36892496</a>
              </li>
              <li>Howe et al. Drug-resistant seizures associated with hyperinflammatory monocytes in FIRES. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36924141/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 36924141</a>
              </li>
              <li>Gopaul et al. The seasonality of new-onset refractory status epilepticus (NORSE). 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37013696/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37013696</a>
              </li>
              <li>Cerovic et al. An in vitro model of drug-resistant seizures for selecting clinically effective antiseizure medications in Febrile Infection-Related Epilepsy Syndrome. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37034097/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37034097</a>
              </li>
              <li>Hanin et al. Review and standard operating procedures for collection of biospecimens and analysis of biomarkers in new onset refractory status epilepticus. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37039049/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37039049</a>
              </li>
              <li>DeCampo et al. Investigating the genetic contribution in febrile infection-related epilepsy syndrome and refractory status epilepticus. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37077567/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37077567</a>
              </li>
              <li>Hanin et al. Neuropathology of New-Onset Refractory Status Epilepticus (NORSE). 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37079033/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37079033</a>
              </li>
              <li>Vinette et al. Early identification of NORSE and transfer to care setting with appropriate supports: A proposed algorithm. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37114231/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37114231</a>
              </li>
              <li>Mantoan et al. Perspective: Vagal nerve stimulation in the treatment of new-onset refractory status epilepticus. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37153661/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37153661</a>
              </li>
              <li>Sheikh et al. A practical approach to in-hospital management of new-onset refractory status epilepticus/febrile infection related epilepsy syndrome. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37251223/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37251223</a>
              </li>
              <li>Dale et al. CSF neopterin and quinolinic acid are biomarkers of neuroinflammation and neurotoxicity in FIRES and other infection-triggered encephalopathy syndromes. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37340737/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37340737</a>
              </li>
              <li>Stavropoulos et al. Neuromodulation in new-onset refractory status epilepticus. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37388544/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37388544</a>
              </li>
              <li>Shin et al. Understanding new-onset refractory status epilepticus from an immunological point of view. 2021.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37469848/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37469848</a>
              </li>
              <li>Van Baalen et al. Febrile infection-related epilepsy syndrome in childhood: A clinical review and practical approach. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37703593/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37703593</a>
              </li>
              <li>Thomschewski et al. Editorial: Advances in diagnosing and treating new-onset refractory status epilepticus (NORSE). 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37712084/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37712084</a>
              </li>
              <li>Carson et al. New-Onset Refractory Status Epilepticus and Febrile Infection-Related Epilepsy Syndrome. 2023.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/37951651/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 37951651</a>
              </li>
              <li>Hanin et al. New onset refractory status epilepticus: Summary of the NORSE Institute roundtable during the 2023 American Epilepsy Society meeting. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38421053/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 38421053</a>
              </li>
              <li>Hanin et al. Second-line immunotherapy in new onset refractory status epilepticus. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38430119/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 38430119</a>
              </li>
              <li>Bolle et al. NORSE seasonality may vary geographically in adults. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38635008/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 38635008</a>
              </li>
              <li>Hanin et al. Single-Cell Transcriptomic Analyses of Brain Parenchyma in Patients With NORSE. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/38810181/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 38810181</a>
              </li>
              <li>Cabezudo-Garcia et al. Functional outcomes of patients with NORSE and FIRES treated with immunotherapy: A systematic review. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36155099/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 36155099</a>
              </li>
              <li>Champsas et al. NORSE/FIRES: how can we advance our understanding of this devastating condition? 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39175762/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 39175762</a>
              </li>
              <li>Kazazian et al. Communication trends over time in new-onset refractory status epilepticus (NORSE): Interim analysis from the NORSE/FIRES Family Registry. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39241640/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 39241640</a>
              </li>
              <li>Jang et al. Polygenic Landscape of Cryptogenic New-Onset Refractory Status Epilepticus: A Comprehensive Whole-Genome Sequencing Study. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39440581/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 39440581</a>
              </li>
              <li>Stavropoulos et al. New-onset refractory status epilepticus after SARS-CoV-2 infection: a review of literature. 2024.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39812100/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 39812100</a>
              </li>
              <li>Eschbach et al. Navigating life after NORSE and FIRES: Insights from caregiver and patient interviews. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39740258/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 39740258</a>
              </li>
              <li>Kazazian et al. Age-associated differences in FIRES: Characterizing prodromal presentation and long-term outcomes via the web-based NORSE/FIRES Family Registry. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39804054/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 39804054</a>
              </li>
              <li>Espino et al. New onset refractory status epilepticus: Long-term outcomes beyond seizures. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/39825688/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 39825688</a>
              </li>
              <li>Goh et al. CSF Tau Is a Biomarker of Hippocampal Injury in Cryptogenic New-Onset Refractory Status Epilepticus. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40164513/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 40164513</a>
              </li>
              <li>Wang et al. Potential inflammatory mechanisms of the ketogenic diet against febrile infection-related epilepsy syndrome. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40217546/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 40217546</a>
              </li>
              <li>Guillemaud et al. Identification of Distinct Biological Groups of Patients With Cryptogenic NORSE via Inflammatory Profiling. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40334176/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 40334176</a>
              </li>
              <li>Steriade et al. Patients with status epilepticus and new-onset refractory status epilepticus display drastically altered fecal microbiomes compared to chronic epilepsy patients. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40387216/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 40387216</a>
              </li>
              <li>Hanin et al. Immune dysregulation in new-onset refractory status epilepticus (NORSE): current insights and therapeutic perspectives. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40712353/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 40712353</a>
              </li>
              <li>Shah et al. Update in new-onset refractory status epilepticus and febrile infection-related epilepsy syndrome. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40831349/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 40831349</a>
              </li>
              <li>Guillemaud et al. Standard complete blood count to predict long-term outcomes in febrile infection-related epilepsy syndrome (FIRES): A multicenter study. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40844418/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 40844418</a>
              </li>
              <li>Fisher et al. De novo pathogenic CSF1R variant implicates microglial dysfunction in pathogenesis of febrile infection-related epilepsy syndrome. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40956030/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 40956030</a>
              </li>
              <li>Al Wahaibi et al. The spectrum of cognitive outcomes following admission to hospital for refractory status epilepticus (RSE): A scoping review. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/40972237/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 40972237</a>
              </li>
              <li>Suri-Baez et al. Beyond Anakinra and Tocilizumab: Additional Adjunctive Therapies in Pediatric NORSE and FIRES - A Narrative Review. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41265024/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 41265024</a>
              </li>
              <li>Hanin et al. Exploring pathways leading to drug-resistant epilepsy for patients with cryptogenic new onset refractory status epilepticus. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41697646/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 41697646</a>
              </li>
              <li>Nasuno et al. An increase in cerebrospinal fluid macrophage migration inhibitory factor levels in pediatric patients with acute neuroinflammatory diseases. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/41707435/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 41707435</a>
              </li>
              <li>Meletti et al. Acute Brain Injury in New-Onset Refractory Status Epilepticus and Etiology-Defined Status Epilepticus. 2026.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/42043830/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 42043830</a>
              </li>
              <li>Konomatsu et al. Vagus nerve stimulation markedly reduced startle-induced seizures after febrile infection-related epilepsy syndrome. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/42216995/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 42216995</a>
              </li>
              <li>Eschbach et al. New-onset refractory status epilepticus/febrile infection-related epilepsy syndrome centers of excellence: a framework for coordinated care, research, and improved outcomes. 2025.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/42257690/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">PMID 42257690</a>
              </li>
              <li>Farias-Moeller &amp; Lai. Biomarkers of new onset refractory status epilepticus (NORSE) and febrile infection-related epilepsy syndrome (FIRES). 2026.{" "}
                <a href="https://doi.org/10.1016/j.spen.2026.101298" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">DOI 10.1016/j.spen.2026.101298</a>
              </li>
              <li>Hanin et al. Insights into new-onset refractory status epilepticus (NORSE) from biorepository-based studies. 2026.{" "}
                <a href="https://doi.org/10.1016/j.spen.2026.101296" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">DOI 10.1016/j.spen.2026.101296</a>
              </li>
              <li>Eschbach &amp; Gofton. The post-acute phase of new-onset refractory status epilepticus (NORSE) / febrile infection-related epilepsy syndrome (FIRES). 2026.{" "}
                <a href="https://doi.org/10.1016/j.spen.2026.101317" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">DOI 10.1016/j.spen.2026.101317</a>
              </li>
              <li>Fisher &amp; Muscal. Immunotherapies for NORSE and FIRES. 2026.{" "}
                <a href="https://doi.org/10.1016/j.spen.2026.101295" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">DOI 10.1016/j.spen.2026.101295</a>
              </li>
              <li>Wickström et al. Recognizing NORSE and FIRES — clinical course, diagnosis and evaluation. 2026.{" "}
                <a href="https://doi.org/10.1016/j.spen.2026.101294" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">DOI 10.1016/j.spen.2026.101294</a>
              </li>
              <li>Thomas et al. The creation of an international NORSE/FIRES virtual consultation forum. 2026.{" "}
                <a href="https://doi.org/10.1016/j.spen.2026.101297" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900 font-medium">DOI 10.1016/j.spen.2026.101297</a>
              </li>
            </ol>
          </div>
        </details>

        {/* ---------- FOOTER NOTE ---------- */}
        <p className="text-center text-gray-400 text-sm italic mt-4">
          Full chronological list (2001–2026) — for reference and database integration.
        </p>

      </section>

      <footer className="w-full bg-slate-900 py-6 text-sm text-slate-400 text-center">
  &copy; {new Date().getFullYear()} NORSE-ICM Project &ndash; Paris Brain Institute (ICM)
</footer>

    </main>
  );
}