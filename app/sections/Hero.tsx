"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Top meta bar — like a magazine masthead */}
      <div className="absolute top-20 lg:top-24 left-0 right-0 px-6 lg:px-12 z-10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
          <span>Volume 01 · Edition 2026</span>
          <span className="hidden md:inline">Slovenija — daljinsko po vsej EU</span>
          <span>№ 001</span>
        </div>
      </div>

      <div className="flex-1 flex items-center pt-36 lg:pt-44 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            {/* Left meta column */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-12 lg:col-span-3 lg:pt-2"
            >
              <p className="label mb-3">— Sprejemamo nove projekte</p>
              <p className="serif text-[15px] text-ink-soft leading-snug max-w-[260px]">
                Studio za umetno inteligenco, programsko opremo in poslovno avtomatizacijo. Slovenija, od 2024.
              </p>
            </motion.div>

            {/* Headline */}
            <div className="col-span-12 lg:col-span-9">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.2, 0, 0, 1] }}
                className="display text-[15vw] sm:text-[12vw] lg:text-[9.5vw] xl:text-[148px] text-ink"
              >
                Tehnologija
                <br />
                <span className="display-italic text-terracotta">brez</span> šuma.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="mt-12 grid grid-cols-12 gap-x-6 gap-y-8 lg:items-end"
              >
                <p className="col-span-12 md:col-span-7 serif text-[19px] lg:text-[22px] leading-[1.4] text-ink-soft">
                  Gradimo AI agente, chatbote, spletne aplikacije in avtomatizacije, ki <em className="italic text-ink">delajo tisto, kar obljubijo</em> — brez modnih efektov, brez vrenja, brez vendor lock-in učinka.
                </p>

                <div className="col-span-12 md:col-span-5 flex flex-col items-start md:items-end gap-3">
                  <a
                    href="#kontakt"
                    className="btn-ink mono text-[12px] uppercase tracking-[0.16em] px-7 py-4"
                  >
                    Začnite projekt →
                  </a>
                  <a
                    href="#proces"
                    className="mono text-[11px] uppercase tracking-[0.18em] text-ink-mute hover:text-ink transition-colors mt-1"
                  >
                    Kako delamo ↓
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stat strip — full-width with rules */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-24 lg:mt-32 border-t border-ink pt-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-x-12">
              {[
                { v: "10+", l: "izvedenih projektov" },
                { v: "100%", l: "zadovoljstvo strank" },
                { v: "<24h", l: "odzivni čas" },
                { v: "5", l: "produktov pod krovno znamko" },
              ].map((s, i) => (
                <div key={s.l} className="flex items-baseline gap-3">
                  <span className="mono text-[10px] text-ink-faint">0{i + 1}</span>
                  <div>
                    <p className="display text-[44px] lg:text-[56px] text-ink leading-none">{s.v}</p>
                    <p className="serif text-[13px] text-ink-mute mt-2">{s.l}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Drift slogan strip at bottom */}
      <div className="overflow-hidden border-y border-rule py-6 mt-auto">
        <div className="flex whitespace-nowrap drift">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12 pr-12">
              {[
                "AI Agenti",
                "Chatboti",
                "Avtomatizacija",
                "Web Razvoj",
                "Strategija",
                "Integracija LLM",
                "Next.js Studio",
                "Slovenija ↘ EU",
              ].map((t) => (
                <span key={t + k} className="display text-[44px] lg:text-[56px] text-ink-soft">
                  {t}
                  <span className="display-italic text-terracotta mx-6">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
