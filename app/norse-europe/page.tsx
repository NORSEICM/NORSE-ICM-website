"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* =====================================================================
   PAGE DU CONGRÈS 2027 — « Neuroinflammation & Epilepsy »
   Tous les textes à adapter sont regroupés juste en dessous (EVENT).
   ===================================================================== */

const EVENT = {
  /* Titre officiel, découpé en 3 lignes pour l'affichage */
  name: "Neuroinflammation & Epilepsy",
  tagline: "From Mechanisms to Precision Immunotherapy",
  format: "International Training School and Translational Workshop",
  /* Maladies à l'honneur, affichées en pastilles sous le titre */
  focus: ["NORSE", "Rasmussen Encephalitis"],
  /* Version courte (objet des e-mails, petits textes) */
  shortName: "Neuroinflammation & Epilepsy 2027",
  when: "November 15-17 2027",
  whenDetail: "November 15: Training school\nNovember 16-17: Workshop",
  duration: "2.5 days",
  venue: "Paris Brain Institute (ICM)",
  venueDetail: "Pitié‑Salpêtrière Hospital, 47 boulevard de l'Hôpital, 75013 Paris, France",
  contact: "norseicm@gmail.com",
  /* Photo du haut de page (dans /public). Si elle est absente, un visuel EEG s'affiche à la place. */
  heroImage: "/ICMPSL.png",
  /* Lien du Microsoft Form pour recueillir les personnes intéressées */
  interestFormUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=F8_3nfoYUEGLANxedUd32DXJQBA1gxBLg1tp8JleJVRUNTVMMTBUT0xJU1hYREpRV1Y4SUhUOUhLQi4u",
  /* Plus tard : lien de la vraie inscription. Dès qu'il est rempli, les boutons deviennent « Register now ». */
  registrationUrl: "",
};

/* Les deux maladies au cœur du programme (haut de page + section dédiée) */
const FOCUS = [
  {
    name: "NORSE",
    full: "New‑onset refractory status epilepticus",
    kind: "Acute",
    desc: "A rare, life‑threatening presentation in which refractory status epilepticus occurs in a patient without prior epilepsy and without an identifiable acute structural, toxic or metabolic cause. FIRES is its subtype preceded by a febrile infection.",
    points: ["Sudden onset, often in previously healthy people", "Affects both children and adults", "Inflammation‑driven: immunotherapy increasingly used"],
  },
  {
    name: "Rasmussen",
    full: "Encephalitis",
    kind: "Chronic",
    desc: "A rare, chronic inflammatory disease of the brain, usually beginning in childhood and affecting one cerebral hemisphere. It causes drug‑resistant focal seizures, progressive neurological deficits and hemispheric atrophy.",
    points: ["Progressive course over months to years", "Mostly children, sometimes adults", "T‑cell–mediated inflammation: immunotherapy and surgery"],
  },
];

const ORGANIZERS = [
  { name: "Pr. Vincent Navarro", role: "Neurologist — Team Leader", image: "/vincent.png" },
  { name: "Dr. Aurélie Hanin", role: "Research Coordinator & Biologist", image: "/aurelie.png" },
];

const COMING_SOON = [
  { title: "Scientific programme", desc: "Sessions, speakers and round tables will be published here." },
  { title: "Registration", desc: "Fees, deadlines and online registration will be published here. Register your interest now to be notified." },
  { title: "Abstract submission", desc: "Call for abstracts and deadlines to be announced." },
];

const MAILING_LIST = `mailto:${EVENT.contact}?subject=${encodeURIComponent(
  `${EVENT.shortName} – Interest`
)}&body=${encodeURIComponent(
  "Dear NORSE-ICM team,\n\nI am interested in 'Neuroinflammation & Epilepsy: From Mechanisms to Precision Immunotherapy' (Paris, November 15-17 2027) and would like to be informed when registration opens.\n\nName:\nPosition:\nInstitution:\nCountry:\n"
)}`;

/* Bouton principal : Microsoft Form si le lien est rempli, sinon e-mail */
const REGISTER = EVENT.registrationUrl
  ? { href: EVENT.registrationUrl, label: "Register now", note: "", external: true }
  : EVENT.interestFormUrl
    ? { href: EVENT.interestFormUrl, label: "Register your interest", note: "Registration opens soon", external: true }
    : { href: MAILING_LIST, label: "Register your interest", note: "Registration opens soon", external: false };

/* ================= STYLE (même thème que l'accueil) ================= */

const SERIF = "font-[family-name:var(--font-bodoni)]";
const ORANGE = "#f5a524";
const CARD = "rounded-xl border border-slate-200 bg-white shadow-sm transition duration-500 ease-out hover:shadow-md";
const EASE = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 32, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: EASE },
};
const revealDelay = (delay: number) => ({ ...reveal, transition: { ...reveal.transition, delay } });

/* ================= PETIT TRACÉ EEG (visuel de secours) ================= */

const EEG_W = 1200;
const EEG_H = 200;
function eegPath(base: number, seed: number, gain: number) {
  const pts: string[] = [];
  for (let x = 0; x <= EEG_W; x += 2) {
    const t = (2 * Math.PI * x) / EEG_W;
    let y = 3 * Math.sin(22 * t + seed) + 2 * Math.sin(9 * t + 1.3 + seed) + 0.8 * Math.sin(61 * t + seed * 2);
    if (x > 500 && x < 860) {
      const env = Math.sin((Math.PI * (x - 500)) / 360);
      const phase = ((x - 500) % 50) / 50;
      const spike = phase < 0.1 ? -Math.sin((Math.PI * phase) / 0.1) * 18 * gain : 0;
      const wave = phase >= 0.1 ? Math.sin((Math.PI * (phase - 0.1)) / 0.9) * 7 * gain : 0;
      y += env * (spike + wave);
    }
    pts.push(`${x},${(base + y).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
}
const FALLBACK_TRACES = [0.7, 1, 1.15, 0.8].map((g, i) => eegPath(EEG_H * ((i + 0.5) / 4), i * 1.7, g));

/* Visuel de gauche : la photo si elle existe, sinon un panneau EEG + logo */
function HeroVisual() {
  const [failed, setFailed] = useState(false);
  if (!failed) {
    return (
      <Image
        src={EVENT.heroImage}
        alt="Paris Brain Institute"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 60vw"
        onError={() => setFailed(true)}
        style={{ objectFit: "cover" }}
      />
    );
  }
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div aria-hidden className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/5" />
      <div aria-hidden className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-white/[0.03]" />
      <Image src="/logo.png" alt="NORSE‑ICM Logo" width={200} height={200} className="relative h-auto w-32 md:w-40" />
      <svg className="relative mt-8 h-32 w-[85%]" viewBox={`0 0 ${EEG_W} ${EEG_H}`} preserveAspectRatio="none" aria-hidden>
        {FALLBACK_TRACES.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={i === 2 ? ORANGE : "#cbd5e1"} strokeOpacity={0.8} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
    </div>
  );
}

/* Section claire au style du site */
function Section({ id, kicker, title, muted = false, children }: { id?: string; kicker: string; title: string; muted?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={`w-full scroll-mt-20 ${muted ? "bg-slate-50" : "bg-white"} text-slate-700`}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <motion.div {...reveal} className="mb-12 flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{kicker}</p>
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

/* Icônes */
const Icon = ({ d }: { d: string }) => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);
const ICON_CALENDAR =
  "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5";
const ICON_PIN =
  "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z";
const ICON_CLOCK = "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";

/* ================= PAGE ================= */

export default function NorseEuropePage() {
  return (
    <div className="w-full overflow-x-hidden bg-white text-slate-700">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* ---------- HERO : visuel à gauche, panneau en biais à droite ---------- */}
      <section className="relative w-full overflow-hidden bg-slate-900 text-white">
        <div className="relative flex min-h-[calc(100svh-5rem)] flex-col md:block">
          {/* visuel */}
          <div className="relative h-64 w-full md:absolute md:inset-y-0 md:left-0 md:h-auto md:w-[62%]">
            <HeroVisual />
          </div>

          {/* liseré orange en biais */}
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 hidden w-[47%] md:block"
            style={{ backgroundColor: ORANGE, clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)" }}
          />
          {/* panneau principal en biais */}
          <motion.div
            className="relative flex flex-1 flex-col justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-8 py-14 md:absolute md:inset-y-0 md:right-0 md:w-[46.4%] md:py-0 md:pr-12 md:pl-[9%] md:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5" />

            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: ORANGE }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Save the date
            </motion.p>

            <motion.h1
              className={`${SERIF} mt-4 text-4xl leading-[1.05] font-bold tracking-tight [font-variant:small-caps] md:text-4xl xl:text-5xl 2xl:text-6xl`}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.5, ease: EASE }}
            >
              {EVENT.name}
            </motion.h1>

            <motion.p
              className={`${SERIF} mt-4 max-w-md text-2xl leading-snug text-white italic md:text-[1.7rem]`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65, ease: EASE }}
            >
              {EVENT.tagline}
            </motion.p>

            <motion.div
              className="mt-6 grid max-w-md grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: EASE }}
            >
              {FOCUS.map((f) => (
                <a
                  key={f.name}
                  href="#focus"
                  className="group rounded-xl border border-[#f5a524]/70 bg-[#f5a524]/10 px-4 py-3 transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-[#f5a524]/20"
                >
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: ORANGE }}>
                    Focus on
                  </p>
                  <p className={`${SERIF} mt-1 text-2xl leading-none font-bold text-white xl:text-3xl`}>{f.name}</p>
                  <p className="mt-1.5 text-xs leading-snug text-slate-300">{f.full}</p>
                </a>
              ))}
            </motion.div>

            <motion.p
              className="mt-5 max-w-sm text-xs leading-relaxed font-semibold tracking-[0.18em] text-balance text-slate-300 uppercase"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.75, ease: EASE }}
            >
              {EVENT.format}
            </motion.p>

            <motion.div
              className="mt-6 space-y-1 border-l-2 pl-4"
              style={{ borderColor: ORANGE }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85, ease: EASE }}
            >
              <p className="text-xl font-semibold text-white md:text-2xl">
                {EVENT.when} · {EVENT.duration}
              </p>
              <p className="text-lg text-slate-300">{EVENT.venue}, Paris</p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: EASE }}
            >
              <a
                href={REGISTER.href}
                target={REGISTER.external ? "_blank" : undefined}
                rel={REGISTER.external ? "noopener noreferrer" : undefined}
                className="rounded-lg px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition duration-500 ease-out hover:-translate-y-0.5"
                style={{ backgroundColor: ORANGE }}
              >
                {REGISTER.label}
              </a>
              <a
                href="#key-info"
                className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition duration-500 ease-out hover:bg-white/10"
              >
                Key information
              </a>
            </motion.div>
            {REGISTER.note && (
              <motion.p
                className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                {REGISTER.note}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ---------- NORSE & RASMUSSEN ---------- */}
      <Section id="focus" kicker="At the heart of the programme" title="NORSE & Rasmussen encephalitis">
        <motion.p {...reveal} className="mx-auto -mt-4 mb-12 max-w-2xl text-center text-lg leading-relaxed text-balance text-slate-600">
          Two rare, immune‑mediated epilepsies — one acute, one chronic — that together show how neuroinflammation drives
          seizures, and how it can be treated.
        </motion.p>

        <div className="relative grid gap-6 md:grid-cols-2">
          {/* « & » au centre, entre les deux cartes */}
          <span
            aria-hidden
            className={`${SERIF} absolute top-1/2 left-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white text-2xl font-bold text-slate-900 shadow-lg md:flex`}
            style={{ backgroundColor: ORANGE }}
          >
            &amp;
          </span>

          {FOCUS.map((f, i) => (
            <motion.div
              key={f.name}
              {...revealDelay(i * 0.15)}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-lg md:p-10"
            >
              <div aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: ORANGE }} />
              <div aria-hidden className="pointer-events-none absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-white/5" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className={`${SERIF} text-4xl leading-none font-bold md:text-5xl`}>{f.name}</p>
                  <p className="mt-2 text-sm text-slate-300">{f.full}</p>
                </div>
                <span className="shrink-0 rounded-full border border-[#f5a524]/60 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#f5a524] uppercase">
                  {f.kind}
                </span>
              </div>

              <p className="relative mt-6 leading-relaxed text-slate-300">{f.desc}</p>

              <ul className="relative mt-6 space-y-2.5 border-t border-white/10 pt-6">
                {f.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: ORANGE }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------- INFOS CLÉS ---------- */}
      <Section id="key-info" kicker="Key information" title="When & where" muted>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: ICON_CALENDAR, label: "When", value: EVENT.when, detail: EVENT.whenDetail },
            { icon: ICON_CLOCK, label: "Format", value: EVENT.duration, detail: "International training school & translational workshop" },
            { icon: ICON_PIN, label: "Where", value: EVENT.venue, detail: EVENT.venueDetail },
          ].map((item, i) => (
            <motion.div key={item.label} {...revealDelay(i * 0.12)} className={`${CARD} p-7 text-center hover:-translate-y-1`}>
              <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f5a524]/15 text-[#c27c06]">
                <Icon d={item.icon} />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 whitespace-pre-line">{item.detail}</p>            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------- MOT DE BIENVENUE ---------- */}
      <Section kicker="A word from the organizers" title="Welcome">
        <div className="grid items-start gap-12 md:grid-cols-12">
          <div className="flex justify-center gap-8 md:col-span-4 md:flex-col md:items-center md:gap-6">
            {ORGANIZERS.map((o, i) => (
              <motion.div key={o.name} {...revealDelay(i * 0.15)} className={`text-center ${i % 2 === 1 ? "md:translate-x-12" : "md:-translate-x-4"}`}>
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full shadow-lg ring-4 ring-white md:h-40 md:w-40">
                  <Image src={o.image} alt={o.name} fill sizes="160px" style={{ objectFit: "cover" }} />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-900">{o.name}</p>
                <p className="text-xs text-slate-500 italic">{o.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal} className="md:col-span-8">
            <h3 className={`${SERIF} text-2xl font-bold text-slate-900`}>Dear Colleagues,</h3>
            <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
              <p>
                It is our great pleasure to announce{" "}
                <strong className="text-slate-900">
                  {EVENT.name}: {EVENT.tagline}
                </strong>
                , an international training school and translational workshop that will take place over two and a half days in{" "}
                <strong className="text-slate-900">November 15-17 2027</strong> at the{" "}
                <strong className="text-slate-900">Paris Brain Institute</strong>.
              </p>
              <p>
                Organised by the NORSE‑ICM team, it will focus on immune‑mediated epilepsies, with a particular emphasis on New
                Onset Refractory Status Epilepticus (NORSE) and Rasmussen encephalitis. From the mechanisms of neuroinflammation to
                precision immunotherapy, the programme will bring together clinicians, researchers and trainees from across Europe
                and beyond, to share the latest advances and strengthen collaborations between our centres.
              </p>
              <p>
                The scientific programme, registration and abstract submission will be announced in the coming months. We look
                forward to welcoming you to Paris.
              </p>
              <p className="pt-2 text-slate-900">
                With warm regards,
                <br />
                <span className="font-semibold">Pr. Vincent Navarro &amp; Dr. Aurélie Hanin</span>
                <br />
                <span className="text-sm text-slate-500">on behalf of the NORSE‑ICM team</span>
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ---------- À VENIR ---------- */}
      <Section kicker="Stay tuned" title="Coming soon" muted>
        <div className="grid gap-6 md:grid-cols-3">
          {COMING_SOON.map((c, i) => (
            <motion.div key={c.title} {...revealDelay(i * 0.12)} className={`${CARD} relative overflow-hidden p-7`}>
              <span className="absolute top-5 right-5 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Soon
              </span>
              <span className="text-sm font-bold" style={{ color: ORANGE }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------- LIEU ---------- */}
      <Section kicker="Venue" title="Paris Brain Institute">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <motion.div {...reveal}>
            <p className="leading-relaxed text-slate-600">
              The meeting will be held at the <strong className="text-slate-900">Paris Brain Institute (ICM)</strong>, located on
              the campus of the <strong className="text-slate-900">Pitié‑Salpêtrière Hospital</strong> in the heart of Paris.
            </p>
            <p className="mt-4 text-sm text-slate-500">{EVENT.venueDetail}</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Paris+Brain+Institute+ICM+47+boulevard+de+l'Hopital+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-semibold text-slate-900 underline decoration-[#f5a524] decoration-2 underline-offset-4"
            >
              Open in Google Maps →
            </a>
          </motion.div>
          <motion.div {...revealDelay(0.15)} className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <iframe
              title="Paris Brain Institute map"
              src="https://www.google.com/maps?q=Paris+Brain+Institute+ICM,+47+boulevard+de+l'H%C3%B4pital,+75013+Paris&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </Section>

      {/* ---------- APPEL FINAL ---------- */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/5" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-white/5" />
        <motion.div {...reveal} className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <h2 className={`${SERIF} text-3xl font-bold tracking-tight md:text-4xl`}>{EVENT.registrationUrl ? "Join us in Paris" : "Register your interest"}</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-300">
            {EVENT.registrationUrl
              ? `Registration is open. Secure your place at ${EVENT.shortName}.`
              : "Registration opens soon. Register your interest and we will notify you as soon as the programme and online registration are available."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={REGISTER.href}
              target={REGISTER.external ? "_blank" : undefined}
              rel={REGISTER.external ? "noopener noreferrer" : undefined}
              className="rounded-lg px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition duration-500 ease-out hover:-translate-y-0.5"
              style={{ backgroundColor: ORANGE }}
            >
              {REGISTER.label}
            </a>
            <Link
              href="/"
              className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition duration-500 ease-out hover:bg-white/10"
            >
              Back to NORSE‑ICM
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}