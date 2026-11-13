"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { REFERRAL_EMAIL, REFERRAL_MAILTO } from "./referral";

/* ================= STYLE ================= */

const SERIF = "font-[family-name:var(--font-bodoni)]";
const ORANGE = "#f5a524"; // couleur du logo NORSE
const CARD = "rounded-xl border border-slate-200 bg-white shadow-sm transition duration-500 ease-out hover:shadow-md";

/* Couleurs de fond utilisées pour raccorder les courbes */
const C = {
  white: "#ffffff",
  muted: "#f8fafc", // slate-50
  dark: "#0f172a", // slate-900
  darkEnd: "#1e293b", // slate-800
};

/* ================= DONNÉES ================= */

const objectives = [
  { num: "01", title: "Characterize", desc: "Immune-mediated processes and brain injury in NORSE." },
  { num: "02", title: "Integrate", desc: "Clinical data, neuroimaging, and biological analyses." },
  { num: "03", title: "Deliver", desc: "Personalized medicine based on individual patient data." },
];

const resources = [
  { href: "/literature-database", title: "Literature Database", desc: "A curated collection of the scientific literature on NORSE and FIRES." },
  { href: "/cytokine-platform", title: "Cytokine Platform", desc: "Measurement of inflammatory markers in biological samples." },
  { href: "/publications", title: "Publications", desc: "Scientific articles and communications from the NORSE‑ICM team." },
  { href: "/collaboration-and-access", title: "Collaboration & Access", desc: "How to work with us and access our data and resources." },
];

const team = [
  { name: "Pr. Vincent Navarro", role: ["MD, PhD", "Neurologist — Team Leader"], image: "/vincent.png", position: "center" },
  { name: "Dr. Aurélie Hanin", role: ["PharmD, PhD", "Research Coordinator & Biologist"], image: "/aurelie.png", position: "center" },
  { name: "Dr. Zineb Hayatou", role: ["Clinical Research", "Associate (CRA)"], image: "/zineb3.png", position: "top" },
  { name: "Léa Cosme", role: ["Project", "Manager (PM)"], image: "/lea.png", position: "top" },
  { name: "Matthew Gruen", role: ["Data", "Analyst"], image: "/matthew.png", position: "top" },
];

const definitions = [
  {
    tag: "NORSE",
    full: "New Onset Refractory Status Epilepticus",
    text: "A clinical presentation in a patient without prior history of epilepsy or another relevant neurological disorder, where a refractory status epilepticus occurs without a clearly identifiable acute structural, toxic, metabolic or infectious cause within the first days of evaluation.",
  },
  {
    tag: "FIRES",
    full: "Febrile Infection-Related Epilepsy Syndrome",
    text: "A subcategory of NORSE that requires a febrile infection between 2 weeks and 24 hours before the onset of refractory status epilepticus, with or without fever at the onset of status epilepticus, and excluding patients with diagnosed encephalitis.",
  },
];

/* ================= ACTUALITÉS (page d'accueil) =================
   Pour changer une actualité, modifier simplement les textes ci-dessous. */

const CONGRESS = {
  href: "/norse-europe",
  formUrl:
    "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=F8_3nfoYUEGLANxedUd32DXJQBA1gxBLg1tp8JleJVRUNTVMMTBUT0xJU1hYREpRV1Y4SUhUOUhLQi4u",
  kicker: "Training School · November 15-17 2027 · Paris",
  title: "Neuroinflammation & Epilepsy",
  tagline: "From Mechanisms to Precision Immunotherapy",
  format: "International Training School and Translational Workshop — 2.5 days at the Paris Brain Institute.",
  focus: ["NORSE", "Rasmussen Encephalitis"],
  image: "/ICMPSL.png",
};

const LATEST_ARTICLES = [
  {
    journal: "Epilepsia · 2026",
    title: "Longitudinal serum and CSF cytokine dynamics in NORSE: associations with immunotherapy exposure",
    authors: "Hanin A, Marois C, Cosme L, et al.",
    url: "https://doi.org/10.1002/epi.70566",
  },
  {
    journal: "Practical Neurology · 2026",
    title: "New-Onset Refractory Status Epilepticus Management: A Practical Approach From a Tertiary Referral Center",
    authors: "Hanin A, Demeret S, Navarro V, Marois C",
    url: "https://practicalneurology.com/archives/nov-2026-issue/new-onset-refractory-status-epilepticus-management/85657/",
  },
];

/* ================= TRACÉ EEG (4 voies) =================
   Rythme de fond plus calme (moins d'oscillations), décharge de pointes-ondes surlignée en orange.
   Nombres entiers de cycles par motif → tracé horizontal et raccord parfait. */
const EEG_W = 1200;
const EEG_H = 160;
const DISCHARGE = { start: 560, end: 860, period: 50 };
const CHANNELS = [
  { label: "Fp1–F7", seed: 0.0, gain: 0.7 },
  { label: "F7–T3", seed: 1.7, gain: 1.0 },
  { label: "T3–T5", seed: 3.1, gain: 1.15 },
  { label: "T5–O1", seed: 4.6, gain: 0.8 },
];
const LANE = EEG_H / CHANNELS.length;

function eegY(x: number, seed: number, gain: number) {
  const t = (2 * Math.PI * x) / EEG_W;
  let y =
    2.6 * Math.sin(26 * t + seed) +
    1.6 * Math.sin(11 * t + 1.3 + seed * 2) +
    1.2 * Math.sin(5 * t + 0.4 + seed) +
    0.6 * Math.sin(71 * t + 2.1 + seed * 3);

  const { start, end, period } = DISCHARGE;
  if (x > start && x < end) {
    const env = Math.sin((Math.PI * (x - start)) / (end - start));
    const phase = ((x - start) % period) / period;
    const spike = phase < 0.1 ? -Math.sin((Math.PI * phase) / 0.1) * 15 * gain : 0;
    const wave = phase >= 0.1 ? Math.sin((Math.PI * (phase - 0.1)) / 0.9) * 6 * gain : 0;
    y += env * (spike + wave);
  }
  return y;
}

/* Tracé complet (2 motifs pour la boucle) */
const eegPaths = CHANNELS.map((c, i) => {
  const base = LANE * (i + 0.5);
  const pts: string[] = [];
  for (let x = 0; x <= EEG_W * 2; x += 2) {
    pts.push(`${x},${(base + eegY(x % EEG_W, c.seed, c.gain)).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
});

/* Surlignage orange de la décharge (dans les 2 motifs) */
const eegHighlights = CHANNELS.map((c, i) => {
  const base = LANE * (i + 0.5);
  const seg = (offset: number) => {
    const pts: string[] = [];
    for (let x = DISCHARGE.start; x <= DISCHARGE.end; x += 2) {
      pts.push(`${x + offset},${(base + eegY(x, c.seed, c.gain)).toFixed(1)}`);
    }
    return `M${pts.join(" L")}`;
  };
  return `${seg(0)} ${seg(EEG_W)}`;
});

/* Fondu doux aux deux extrémités du tracé */
const EEG_MASK = "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)";

/* ================= ANIMATIONS FLUIDES ================= */

const EASE = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 32, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: EASE },
};
const revealDelay = (delay: number) => ({ ...reveal, transition: { ...reveal.transition, delay } });

/* Courbe douce entre deux sections : "from" = couleur du dessus, "to" = couleur du dessous */
function Curve({ from, to }: { from: string; to: string }) {
  return (
    <div aria-hidden className="relative h-12 w-full md:h-20" style={{ backgroundColor: to }}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,0 H1440 V14 C1080,80 360,80 0,14 Z" fill={from} />
      </svg>
    </div>
  );
}

/* ================= COMPOSANTS ================= */

type Tone = "white" | "muted" | "dark";

function Section({
  id,
  kicker,
  title,
  tone = "white",
  children,
}: {
  id?: string;
  kicker: string;
  title: string;
  tone?: Tone;
  children: ReactNode;
}) {
  const dark = tone === "dark";
  const bg = dark
    ? "bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    : tone === "muted"
      ? "bg-slate-50 text-slate-700"
      : "bg-white text-slate-700";

  return (
    <section id={id} className={`relative w-full scroll-mt-20 overflow-hidden ${bg}`}>
      {dark && (
        <>
          <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-white/5" />
        </>
      )}
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <motion.div {...reveal} className="mb-12 flex flex-col items-center text-center">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-slate-400" : "text-slate-500"}`}>{kicker}</p>
          <h2 className={`${SERIF} mt-3 text-3xl font-bold tracking-tight md:text-4xl ${dark ? "text-white" : "text-slate-900"}`}>{title}</h2>
          <motion.div
            className="mt-5 h-0.5 w-10 origin-center rounded-full"
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

/* Portrait rond avec repli sur les initiales si la photo est absente */
function Portrait({ src, name, position }: { src: string; name: string; position: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .replace(/^(Pr|Dr)\.\s+/, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-slate-100 ring-4 ring-slate-100 transition duration-500 ease-out group-hover:ring-[#f5a524]/50">
      {failed ? (
        <div className={`absolute inset-0 flex items-center justify-center text-2xl font-bold text-slate-400 ${SERIF}`}>{initials}</div>
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          sizes="96px"
          onError={() => setFailed(true)}
          style={{ objectFit: "cover", objectPosition: position }}
          className="transition duration-700 ease-out group-hover:scale-110"
        />
      )}
    </div>
  );
}

const MailIcon = () => (
  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
);
const PhoneIcon = () => (
  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  </svg>
);

/* ================= PAGE ================= */

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-white text-slate-700">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes eeg-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .eeg-track { animation: eeg-scroll 32s linear infinite; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } .eeg-track { animation: none; } }
      `}</style>

      {/* ---------- HERO + EEG (premier écran) ---------- */}
      <section className="relative isolate flex min-h-[calc(100svh-5rem)] w-full flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div aria-hidden className="absolute top-0 right-0 -z-10 h-96 w-96 translate-x-48 -translate-y-48 rounded-full bg-white/5" />
        <div aria-hidden className="absolute top-1/3 left-0 -z-10 h-72 w-72 -translate-x-36 rounded-full bg-white/5" />
        <div aria-hidden className="absolute top-1/2 left-1/4 -z-10 h-48 w-48 rounded-full bg-white/[0.03]" />
        {/* fondu du bas, pour raccorder proprement avec la suite */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-b from-transparent to-[#1e293b]" />

        {/* ---------- BANDEAU CONGRÈS (mis en avant) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="relative z-10 border-b border-[#f5a524]/30 bg-gradient-to-r from-[#f5a524]/20 via-[#f5a524]/10 to-[#f5a524]/20"
        >
          <Link
            href={CONGRESS.href}
            className="group mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 py-3 text-sm"
          >
            <span className="flex items-center gap-2 rounded-full bg-[#f5a524] px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-slate-900 uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-900" />
              Save the date
            </span>
            <span className={`${SERIF} text-base font-bold text-white md:text-lg`}>{CONGRESS.title}</span>
            <span className="hidden h-4 w-px bg-white/25 md:inline" />
            <span className="text-slate-200">November 15-17 2027 · Paris Brain Institute</span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#f5a524] px-3.5 py-1.5 text-xs font-semibold text-slate-900 shadow-sm transition duration-300 group-hover:bg-[#f7b84a]">
              Learn more &amp; register
              <span className="transition group-hover:translate-x-0.5">→</span>
            </span>
          </Link>
        </motion.div>

        {/* Contenu centré */}
        <div className="relative flex flex-1 flex-col items-center justify-center px-8 pt-8 pb-6">
          <motion.div
            className="mb-7 flex items-center justify-center gap-7"
            initial={{ opacity: 0, y: -30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: EASE }}
          >
            <Image src="/logo.png" alt="NORSE‑ICM Logo" width={200} height={200} priority className="h-auto w-28 md:w-36" />
            <div className="h-16 w-px bg-white/20" />
            <div className="rounded-xl bg-white px-4 py-2">
              <Image src="/logoicm.png" alt="ICM Logo" width={200} height={85} priority className="h-auto w-40 md:w-48" />
            </div>
          </motion.div>

          <motion.h1
            className={`mb-4 max-w-4xl text-center text-4xl leading-tight font-bold tracking-tight md:text-6xl ${SERIF}`}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            NORSE‑ICM Project
          </motion.h1>

          <motion.p
            className="mb-5 text-center text-xs tracking-[0.2em] text-slate-400 uppercase md:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
          >
            Paris Brain Institute &ndash; Pitié‑Salpêtrière Hospital (Paris)
          </motion.p>

          <motion.p
            className="mb-8 max-w-2xl text-center text-base leading-relaxed text-slate-300 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: EASE }}
          >
            A research initiative to advance the understanding, diagnosis, and treatment of{" "}
            <strong className="text-white">New Onset Refractory Status Epilepticus (NORSE)</strong> and its subtype{" "}
            <strong className="text-white">FIRES</strong>.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              { el: <Image src="/aphp.png" alt="AP-HP Pitié-Salpêtrière" width={250} height={60} className="h-10 w-auto object-contain md:h-11" />, box: "" },
              { el: <Image src="/logoicm.png" alt="Paris Brain Institute ICM" width={150} height={60} className="h-8 w-auto object-contain md:h-9" />, box: "rounded-lg bg-white px-3 py-1.5" },
              { el: <Image src="/logo_fondation.png" alt="Fondation AP-HP" width={140} height={60} className="h-11 w-auto object-contain md:h-12" />, box: "" },
              { el: <Image src="/asso_paratonnerre.png" alt="Association Paratonnerre" width={160} height={60} className="h-10 w-auto object-contain md:h-11" />, box: "" },
              { el: <Image src="/NORSE_institute.png" alt="NORSE Institute" width={110} height={45} className="h-7 w-auto object-contain md:h-8" />, box: "rounded-lg bg-[#1a1060] px-3 py-2" },
            ].map((logo, i) => (
              <motion.div
                key={i}
                className={`${logo.box} transition duration-500 ease-out hover:-translate-y-1`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + i * 0.1, ease: EASE }}
              >
                {logo.el}
              </motion.div>
            ))}
          </div>
        </div>

        {/* EEG intégré au premier écran, aligné sur le contenu */}
        <motion.div
          aria-hidden
          className="relative mx-auto w-full max-w-5xl px-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.3, ease: EASE }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            <span>EEG · Longitudinal bipolar montage</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
              Rec
            </span>
          </div>

          <div className="flex">
            {/* noms des voies, dans leur propre colonne */}
            <div className="relative h-28 w-16 shrink-0 md:h-32">
              {CHANNELS.map((c, i) => (
                <span
                  key={c.label}
                  className="absolute left-0 -translate-y-1/2 font-mono text-[10px] tracking-wider text-slate-500"
                  style={{ top: `${((i + 0.5) / CHANNELS.length) * 100}%` }}
                >
                  {c.label}
                </span>
              ))}
            </div>

            {/* tracés */}
            <div
              className="relative h-28 flex-1 overflow-hidden md:h-32"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "80px 100%, 100% 40px",
                WebkitMaskImage: EEG_MASK,
                maskImage: EEG_MASK,
              }}
            >
              <svg className="eeg-track absolute inset-y-0 left-0 h-full w-[200%]" viewBox={`0 0 ${EEG_W * 2} ${EEG_H}`} preserveAspectRatio="none">
                {eegPaths.map((d, i) => (
                  <path key={`b${i}`} d={d} fill="none" stroke="#cbd5e1" strokeOpacity={0.7} strokeWidth={1.1} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                ))}
                {eegHighlights.map((d, i) => (
                  <path key={`h${i}`} d={d} fill="none" stroke={ORANGE} strokeOpacity={0.95} strokeWidth={1.4} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                ))}
              </svg>
            </div>
          </div>

          <div className="border-t border-white/10" />
        </motion.div>

        <div className="h-8" />
      </section>

      <Curve from={C.darkEnd} to={C.muted} />

      {/* ---------- ACTUALITÉS ---------- */}
      <Section id="news" kicker="What's new" title="Latest news" tone="muted">
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Congrès mis en avant */}
          <motion.div {...reveal} className="group relative overflow-hidden rounded-2xl bg-slate-900 text-white shadow-lg lg:col-span-3">
            <Image
              src={CONGRESS.image}
              alt="Paris Brain Institute"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover opacity-40 transition duration-1000 ease-out group-hover:scale-105"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/85 to-slate-900/40" />
            <div aria-hidden className="absolute inset-y-0 left-0 w-1 bg-[#f5a524]" />

            <div className="relative flex h-full min-h-[420px] flex-col justify-end p-7 md:p-10">
              <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-[#f5a524] uppercase">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5a524]" />
                {CONGRESS.kicker}
              </p>
              <h3 className={`${SERIF} mt-4 text-3xl leading-tight font-bold md:text-4xl`}>{CONGRESS.title}</h3>
              <p className="mt-2 text-lg text-slate-200 italic">{CONGRESS.tagline}</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-[11px] tracking-wider text-slate-400 uppercase">Focus on</span>
                {CONGRESS.focus.map((f) => (
                  <span key={f} className="rounded-full border border-[#f5a524]/60 px-3 py-1 text-xs font-semibold text-white">
                    {f}
                  </span>
                ))}
              </div>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-300">{CONGRESS.format}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={CONGRESS.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg transition duration-500 ease-out hover:-translate-y-0.5"
                  style={{ backgroundColor: ORANGE }}
                >
                  Register your interest
                </a>
                <Link
                  href={CONGRESS.href}
                  className="rounded-lg border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition duration-500 ease-out hover:bg-white/10"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Derniers articles */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {LATEST_ARTICLES.map((a, i) => (
              <motion.a
                key={a.url}
                {...revealDelay(0.12 + i * 0.1)}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${CARD} group flex flex-1 flex-col p-6 hover:-translate-y-1 hover:border-slate-300`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#f5a524]/15 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#a86a05] uppercase">
                    New publication
                  </span>
                  <span className="text-xs text-slate-400">{a.journal}</span>
                </div>
                <p className={`${SERIF} mt-4 text-lg leading-snug font-bold text-slate-900`}>{a.title}</p>
                <p className="mt-2 text-sm text-slate-500">{a.authors}</p>
                <p className="mt-auto pt-5 text-sm font-semibold text-slate-900">
                  <span className="underline decoration-[#f5a524] decoration-2 underline-offset-4">Read the article</span>
                  <span className="ml-1 inline-block transition group-hover:translate-x-0.5">↗</span>
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- ABOUT ---------- */}
      <Section id="intro" kicker="About the project" title="Who we are">
        <motion.p {...reveal} className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-slate-600">
          <strong className="text-slate-900">NORSE</strong> is a rare and poorly understood medical emergency. The ICM NORSE
          team is developing an innovative approach to better <strong className="text-slate-900">diagnose</strong>,{" "}
          <strong className="text-slate-900">understand</strong>, and <strong className="text-slate-900">treat</strong> this condition.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div {...reveal} className={`${CARD} bg-slate-50 p-7`}>
            <h3 className="text-lg font-semibold text-slate-900">The team</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              The ICM NORSE team is led by <strong className="text-slate-900">Pr. Vincent Navarro</strong> and{" "}
              <strong className="text-slate-900">Dr. Aurélie Hanin</strong>, within the EPIC research team (Clinical and
              Experimental Epilepsy, led by Pr. Navarro and Pr. Poncer) at the{" "}
              <a
                href="https://institutducerveau-icm.org/en"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-900 underline decoration-[#f5a524] decoration-2 underline-offset-4"
              >
                Paris Brain Institute (ICM)
              </a>
              . Based at the Pitié‑Salpêtrière Hospital, we combine clinical expertise and fundamental research to advance
              the field.
            </p>
          </motion.div>

          <motion.div {...revealDelay(0.12)} className={`${CARD} bg-slate-50 p-7`}>
            <h3 className="text-lg font-semibold text-slate-900">Our mission</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              We focus on <em>de novo</em> refractory status epilepticus, occurring in patients without any prior
              neurological disease or epilepsy, and without any acute or active structural, toxic, or metabolic cause
              identified in the first few days (
              <a href="#definitions" className="font-medium text-slate-900 underline decoration-[#f5a524] decoration-2 underline-offset-4">
                see definitions
              </a>
              ).
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ---------- DEFINITIONS ---------- */}
      <Section id="definitions" kicker="Reference: Hirsch et al., Epilepsia 2018" title="Definitions" tone="muted">
        <div className="grid gap-6 md:grid-cols-2">
          {definitions.map((d, i) => (
            <motion.div key={d.tag} {...revealDelay(i * 0.12)} className={`${CARD} p-7`}>
              <div className="flex items-baseline gap-3">
                <p className={`${SERIF} text-3xl font-bold text-slate-900`}>{d.tag}</p>
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{d.full}</p>
              <p className="mt-4 leading-relaxed text-slate-600">{d.text}</p>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/29399791/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-md bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white transition duration-300 hover:bg-slate-700"
              >
                PMID 29399791 →
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------- OBJECTIVES ---------- */}
      <Section kicker="What we do" title="Our objectives">
        <div className="grid gap-6 md:grid-cols-3">
          {objectives.map((o, i) => (
            <motion.div key={o.title} {...revealDelay(i * 0.12)} className={`${CARD} p-7 hover:-translate-y-1`}>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f5a524]/15 text-sm font-bold text-[#c27c06]">
                {o.num}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{o.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------- RESOURCES ---------- */}
      <Section kicker="Resources" title="Explore the platform" tone="muted">
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((r, i) => (
            <motion.div key={r.href} {...revealDelay(i * 0.1)}>
              <Link href={r.href} className={`${CARD} group block h-full p-7 hover:-translate-y-1 hover:border-slate-300`}>
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-lg font-semibold text-slate-900">{r.title}</h3>
                  <span className="text-slate-400 transition duration-500 ease-out group-hover:translate-x-1.5 group-hover:text-[#f5a524]">→</span>
                </div>
                <p className="mt-2 leading-relaxed text-slate-600">{r.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------- TEAM ---------- */}
      <Section kicker="The people behind the project" title="Our team">
        <motion.div
          className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg md:aspect-[21/9]"
          initial={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: EASE }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <Image
            src="/teamnorse.png"
            alt="The NORSE-ICM Team"
            fill
            sizes="(max-width: 1200px) 100vw, 1150px"
            style={{ objectFit: "cover", objectPosition: "center 35%" }}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent px-6 py-5">
            <p className="font-semibold text-white">The NORSE‑ICM Team</p>
            <p className="text-sm text-slate-300">Paris Brain Institute — Pitié‑Salpêtrière Hospital</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((m, i) => (
            <motion.div key={m.name} {...revealDelay(i * 0.08)} className={`${CARD} group px-4 py-7 text-center hover:-translate-y-1`}>
              <Portrait src={m.image} name={m.name} position={m.position} />
              <h3 className="mt-4 text-sm font-semibold text-slate-900">{m.name}</h3>
              <p className="mt-1 text-xs leading-snug text-slate-500">
                {m.role.map((line, j) => (
                  <span key={j}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Curve from={C.white} to={C.dark} />

      {/* ---------- CYTOKINE ANALYSIS ---------- */}
      <Section id="cytokines" kicker="For clinicians & researchers" title="Need a cytokine analysis?" tone="dark">
        <motion.p {...reveal} className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-slate-300">
          Our cytokine platform measures inflammatory markers in biological samples. If you would like a cytokine analysis
          for a patient with NORSE or FIRES, or for a research project, feel free to contact us.
        </motion.p>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "Contact us", d: "Send us a short email describing your request." },
            { t: "Describe your samples", d: "Sample type (serum, plasma, CSF), number of samples and context. No identifying data." },
            { t: "We get back to you", d: "A member of the team will contact you to discuss feasibility and logistics." },
          ].map((s, i) => (
            <motion.li
              key={s.t}
              {...revealDelay(i * 0.12)}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition duration-500 ease-out hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#f5a524]/60 text-sm font-bold text-[#f5a524]">
                {i + 1}
              </span>
              <p className="mt-4 font-semibold text-white">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.d}</p>
            </motion.li>
          ))}
        </ol>

        <motion.div {...revealDelay(0.2)} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={REFERRAL_MAILTO}
            className="rounded-lg bg-[#f5a524] px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-[#f5a524]/20 transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-[#f7b84a]"
          >
            Send a request
          </a>
          <Link
            href="/cytokine-platform"
            className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition duration-500 ease-out hover:bg-white/10"
          >
            Learn more about the platform
          </Link>
        </motion.div>
        <p className="mt-4 text-center text-xs text-slate-500">Opens a pre-filled email to {REFERRAL_EMAIL}.</p>
      </Section>

      <Curve from={C.darkEnd} to={C.muted} />

      {/* ---------- CONTACT ---------- */}
      <Section kicker="Get in touch" title="Contact us" tone="muted">
        <motion.div {...reveal} className="text-center">
          <p className="mx-auto max-w-xl text-slate-600">For any inquiries regarding the NORSE‑ICM project or collaborations:</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row">
            <a href="mailto:aurelie.hanin@icm-institute.org" className={`${CARD} flex items-center gap-2.5 px-5 py-3 text-sm font-medium text-slate-800 hover:-translate-y-0.5 hover:border-slate-300`}>
              <MailIcon />
              aurelie.hanin@icm-institute.org
            </a>
            <a href="mailto:norseicm@gmail.com" className={`${CARD} flex items-center gap-2.5 px-5 py-3 text-sm font-medium text-slate-800 hover:-translate-y-0.5 hover:border-slate-300`}>
              <MailIcon />
              norseicm@gmail.com
            </a>
            <a href="tel:+33652275180" className={`${CARD} flex items-center gap-2.5 px-5 py-3 text-sm font-medium text-slate-800 hover:-translate-y-0.5 hover:border-slate-300`}>
              <PhoneIcon />
              +33 6 52 27 51 80
            </a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}