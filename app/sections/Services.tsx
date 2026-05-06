"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

const services = [
  {
    num: "01",
    cmd: "ai_solutions",
    title: "AI rešitve",
    sub: "agenti, chatboti, RAG, function calling",
    desc: "Razvijamo AI agente in chatbote, ki avtomatizirajo komunikacijo s strankami, prodajo in interno znanje. Integracije z OpenAI, Anthropic in Gemini, prilagojene vašim podatkom.",
    keywords: ["GPT-5", "Claude", "RAG", "Function Calling"],
  },
  {
    num: "02",
    cmd: "software_dev",
    title: "Razvoj programske opreme",
    sub: "po meri, brez šablon",
    desc: "Aplikacije, interna orodja in API integracije za specifične poslovne potrebe. Od CRM-jev do produkcijskih dashboardov, vedno z mislijo na uporabnika in vzdržljivost kode.",
    keywords: ["TypeScript", "Postgres", "API", "Realtime"],
  },
  {
    num: "03",
    cmd: "web_apps",
    title: "Spletne strani in aplikacije",
    sub: "Next.js, hitre kot ta heading",
    desc: "Hitre, statične in dinamične spletne strani, postavljene na sodobnem stack-u. SEO, dostopnost, Core Web Vitals — vse v paketu, brez kompromisov pri dizajnu.",
    keywords: ["Next.js", "React", "SEO", "Vercel"],
  },
  {
    num: "04",
    cmd: "process_auto",
    title: "Avtomatizacija procesov",
    sub: "manj klikov, več rezultatov",
    desc: "Povezujemo vaše sisteme, odstranjujemo ročne korake in postavimo avtomatske delovne tokove. Kjer je smiselno, dodamo AI v zanko, da naredi odločitve namesto človeka.",
    keywords: ["Workflows", "Webhooks", "ETL", "n8n"],
  },
  {
    num: "05",
    cmd: "strategy",
    title: "Strategija in svetovanje",
    sub: "kaj graditi in zakaj",
    desc: "Pregled obstoječega stack-a, izbira pravih tehnologij in tehnični roadmap. Pomagamo se izogniti dragih napak in fokusirati ekipo na stvari, ki res premaknejo iglo.",
    keywords: ["Audit", "Architecture", "Roadmap", "Due Diligence"],
  },
  {
    num: "06",
    cmd: "media_prod",
    title: "AI video in avdio produkcija",
    sub: "od scenarija do mastera",
    desc: "Generativna produkcija video in avdio vsebin za marketing in produktno komunikacijo. Konsistenten brand glas, hitra iteracija, profesionalen output.",
    keywords: ["Veo", "Suno", "ElevenLabs", "Remotion"],
  },
];

export default function Services() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="storitve" className="relative py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        <Reveal className="mb-20 lg:mb-24">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              <p className="mono-up text-[10px] text-accent flex items-center gap-2 mb-3">
                <span>&gt;</span>
                <span>section_01</span>
              </p>
              <p className="mono text-[11px] text-text-3">/services</p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
              <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6.4vw] xl:text-[112px] text-text leading-[0.9]">
                Šest disciplin,
                <br />
                <span className="text-accent glow-soft">en studio.</span>
              </h2>
              <p className="mono text-[12px] text-text-3 mt-6 max-w-[560px]">
                <span className="text-text-4">// </span> Vsaka rešitev je samostojna, vse delujejo skupaj. Pogosto sestavimo dve ali tri za polno transformacijo.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-line-2">
          {services.map((s, i) => {
            const active = hover === i;
            return (
              <Reveal key={s.title} index={i}>
                <article
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  className="group relative border-b border-line cursor-default overflow-hidden"
                >
                  {/* fill bar */}
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 bg-accent/[0.05] transition-all duration-700 ease-out"
                    style={{ width: active ? "100%" : "0%" }}
                  />
                  {/* left amber rail */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 bottom-0 w-px bg-accent transition-transform duration-500 origin-top"
                    style={{ transform: active ? "scaleY(1)" : "scaleY(0)" }}
                  />
                  <div className="relative grid grid-cols-12 gap-x-6 px-3 py-8 lg:py-12">
                    <div className="col-span-12 lg:col-span-3 flex items-baseline gap-3">
                      <span className="mono text-[11px] text-text-4 group-hover:text-accent transition-colors tabular">
                        [{s.num}]
                      </span>
                      <span className="mono text-[11px] text-text-3 group-hover:text-accent transition-colors">
                        ./{s.cmd}
                      </span>
                    </div>
                    <div className="col-span-12 lg:col-span-4 mt-4 lg:mt-0">
                      <h3 className="display text-[28px] lg:text-[40px] text-text leading-tight group-hover:text-accent transition-colors duration-300">
                        {s.title}
                      </h3>
                      <p className="mono text-[12px] text-text-3 mt-2">
                        <span className="text-text-4">// </span>{s.sub}
                      </p>
                    </div>
                    <div className="col-span-12 lg:col-span-3 mt-4 lg:mt-0">
                      <p className="text-[14px] lg:text-[15px] text-text-2 leading-[1.65] max-w-[420px]">
                        {s.desc}
                      </p>
                    </div>
                    <div className="col-span-12 lg:col-span-2 mt-4 lg:mt-0 flex flex-wrap gap-x-3 gap-y-1.5 lg:justify-end content-start">
                      {s.keywords.map((k) => (
                        <span
                          key={k}
                          className="mono text-[10px] uppercase tracking-[0.14em] text-text-3 border border-line px-2 py-0.5 group-hover:border-accent group-hover:text-accent transition-colors"
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence>
                    {active && (
                      <motion.span
                        layoutId="services-cursor"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 mono text-[12px] text-accent tracking-[0.16em] flex items-center gap-2"
                        transition={{ duration: 0.25 }}
                      >
                        <span>RUN</span>
                        <span aria-hidden>→</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
