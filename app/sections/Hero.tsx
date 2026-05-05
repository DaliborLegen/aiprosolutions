"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 lg:pt-32 pb-16 lg:pb-24">
        {/* Top masthead — magazine-style, hidden on small screens to save vertical real estate */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex items-center justify-between mono text-[10px] uppercase tracking-[0.18em] text-ink-mute pb-10 border-b border-rule"
        >
          <span>Volume 01 · Edition 2026</span>
          <span>Slovenija — daljinsko po vsej EU</span>
          <span>№ 001</span>
        </motion.div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-10 mt-12 md:mt-16">
          {/* Left meta column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-12 lg:col-span-3 lg:pt-3"
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
              transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0, 0, 1] }}
              className="display text-[44px] sm:text-[68px] md:text-[88px] lg:text-[112px] xl:text-[148px] text-ink leading-[0.96]"
            >
              Tehnologija
              <br />
              <span className="display-italic text-terracotta">brez</span> šuma.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mt-8 lg:mt-12 grid grid-cols-12 gap-x-6 gap-y-6 lg:items-end"
            >
              <p className="col-span-12 md:col-span-7 serif text-[17px] sm:text-[19px] lg:text-[21px] leading-[1.45] text-ink-soft">
                Gradimo AI agente, chatbote, spletne aplikacije in avtomatizacije, ki <em className="italic text-ink">delajo tisto, kar obljubijo</em> — brez modnih efektov, brez vrenja, brez vendor lock-in učinka.
              </p>

              <div className="col-span-12 md:col-span-5 flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end">
                <a
                  href="#kontakt"
                  className="btn-ink mono text-[12px] uppercase tracking-[0.16em] px-7 py-4"
                >
                  Začnite projekt →
                </a>
                <a
                  href="#proces"
                  className="mono text-[11px] uppercase tracking-[0.18em] text-ink-mute hover:text-ink transition-colors"
                >
                  Kako delamo ↓
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-16 lg:mt-24 border-t border-ink pt-6"
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
                  <p className="display text-[36px] lg:text-[56px] text-ink leading-none">
                    {s.v}
                  </p>
                  <p className="serif text-[13px] text-ink-mute mt-2">{s.l}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Drift slogan strip */}
      <div className="overflow-hidden border-y border-rule py-5 mt-12 lg:mt-16">
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
                <span key={t + k} className="display text-[36px] lg:text-[52px] text-ink-soft">
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
