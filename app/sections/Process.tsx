"use client";
import AnimatedSection from "../components/AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Odkritje",
    duration: "Teden 1",
    desc: "Začnemo z razgovorom — brezplačno. Razumemo cilje, izzive in priložnosti. Pregledamo obstoječe sisteme in podatke.",
  },
  {
    num: "02",
    title: "Strategija",
    duration: "Teden 1—2",
    desc: "Oblikujemo načrt, izberemo tehnologije, postavimo mejnike. Pred začetkom dobite fiksno ponudbo brez skritih klavzul.",
  },
  {
    num: "03",
    title: "Oblikovanje",
    duration: "Teden 2—3",
    desc: "Zasnujemo uporabniško izkušnjo, vizualni jezik in arhitekturo podatkov. Vse skupaj pregledamo, preden se dotaknemo kode.",
  },
  {
    num: "04",
    title: "Razvoj",
    duration: "Teden 3—6",
    desc: "Gradimo z agilnim pristopom in tedenskimi pregledi. Vidite napredek sproti, lahko spremenite smer brez izgube.",
  },
  {
    num: "05",
    title: "Zagon",
    duration: "Teden 6—7",
    desc: "Temeljito testiramo, optimiziramo in lansiramo v produkcijo. Predamo dostopne, dokumentacijo in izvorno kodo.",
  },
  {
    num: "06",
    title: "Optimizacija",
    duration: "Po zagonu",
    desc: "Spremljamo, merimo in nenehno izboljšujemo. Po lansiranju ponujamo mesečne pakete vzdrževanja in razvoja.",
  },
];

export default function Process() {
  return (
    <section id="proces" className="relative py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-20 lg:mb-28">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              <p className="label">— 03 / Proces</p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-4 lg:mt-0">
              <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6.5vw] xl:text-[104px] text-ink leading-[0.9]">
                Šest tednov,
                <br />
                <span className="display-italic text-terracotta">od ideje do zagona.</span>
              </h2>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {steps.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.06} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="border-t border-ink pt-6 h-full flex flex-col">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="display text-[64px] lg:text-[80px] text-ink leading-none">
                    {s.num}
                  </span>
                  <span className="mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                    {s.duration}
                  </span>
                </div>
                <h3 className="display text-[26px] lg:text-[32px] text-ink mb-3">
                  {s.title}
                </h3>
                <p className="serif text-[15px] text-ink-soft leading-[1.55]">
                  {s.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
