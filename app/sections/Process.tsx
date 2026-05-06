"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../components/Reveal";

const steps = [
  {
    num: "01",
    title: "Odkritje",
    duration: "Teden 1",
    cmd: "discover",
    desc: "Začnemo z razgovorom — brezplačno. Razumemo cilje, izzive in priložnosti. Pregledamo obstoječe sisteme in podatke.",
  },
  {
    num: "02",
    title: "Strategija",
    duration: "Teden 1—2",
    cmd: "strategize",
    desc: "Oblikujemo načrt, izberemo tehnologije, postavimo mejnike. Pred začetkom dobite fiksno ponudbo brez skritih klavzul.",
  },
  {
    num: "03",
    title: "Oblikovanje",
    duration: "Teden 2—3",
    cmd: "design",
    desc: "Zasnujemo uporabniško izkušnjo, vizualni jezik in arhitekturo podatkov. Vse skupaj pregledamo, preden se dotaknemo kode.",
  },
  {
    num: "04",
    title: "Razvoj",
    duration: "Teden 3—6",
    cmd: "build",
    desc: "Gradimo z agilnim pristopom in tedenskimi pregledi. Vidite napredek sproti, lahko spremenite smer brez izgube.",
  },
  {
    num: "05",
    title: "Zagon",
    duration: "Teden 6—7",
    cmd: "deploy",
    desc: "Temeljito testiramo, optimiziramo in lansiramo v produkcijo. Predamo dostopne, dokumentacijo in izvorno kodo.",
  },
  {
    num: "06",
    title: "Optimizacija",
    duration: "Po zagonu",
    cmd: "optimize",
    desc: "Spremljamo, merimo in nenehno izboljšujemo. Po lansiranju ponujamo mesečne pakete vzdrževanja in razvoja.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proces" className="relative py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        <Reveal className="mb-20 lg:mb-28">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              <p className="mono-up text-[10px] text-accent mb-3">&gt; section_03</p>
              <p className="mono text-[11px] text-text-3">/process</p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
              <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6.4vw] xl:text-[112px] text-text leading-[0.9]">
                Šest tednov,
                <br />
                <span className="text-accent glow-soft">od ideje do zagona.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div ref={ref} className="relative">
          {/* progress rail */}
          <div className="absolute left-[10px] sm:left-[14px] lg:left-[18px] top-0 bottom-0 w-px bg-line hidden md:block">
            <motion.span
              aria-hidden
              className="absolute inset-x-[-1px] top-0 bg-accent"
              style={{ height: lineHeight, boxShadow: "0 0 12px rgba(255,182,39,0.6)" }}
            />
          </div>

          <div className="space-y-8 lg:space-y-12">
            {steps.map((s, i) => (
              <Reveal key={s.num} index={i}>
                <div className="grid grid-cols-12 gap-x-6 group relative md:pl-12">
                  {/* node */}
                  <span
                    aria-hidden
                    className="hidden md:block absolute left-[12px] lg:left-[16px] top-2 w-2 h-2 bg-accent border border-accent group-hover:scale-150 transition-transform duration-300"
                    style={{ boxShadow: "0 0 14px rgba(255,182,39,0.7)" }}
                  />

                  <div className="col-span-12 sm:col-span-3 lg:col-span-2 flex items-baseline gap-2">
                    <span className="display text-[56px] lg:text-[80px] text-text-3 leading-none tabular group-hover:text-accent transition-colors duration-300">
                      {s.num}
                    </span>
                  </div>
                  <div className="col-span-12 sm:col-span-9 lg:col-span-6 mt-3 sm:mt-0">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="display text-[26px] lg:text-[32px] text-text">
                        {s.title}
                      </h3>
                      <span className="mono text-[10px] uppercase tracking-[0.18em] text-text-4 group-hover:text-accent transition-colors">
                        ./{s.cmd}
                      </span>
                    </div>
                    <p className="text-[15px] text-text-2 leading-[1.6] max-w-[560px]">
                      {s.desc}
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 mt-3 lg:mt-0 lg:text-right">
                    <p className="mono text-[10px] uppercase tracking-[0.18em] text-text-3 lg:pt-2">
                      <span className="text-text-4">[duration] </span>
                      {s.duration}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
