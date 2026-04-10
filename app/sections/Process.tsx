"use client";
import AnimatedSection from "../components/AnimatedSection";

const steps = [
  { num: "01", title: "Odkritje", desc: "Razumemo vaše cilje, izzive in priložnosti." },
  { num: "02", title: "Strategija", desc: "Oblikujemo načrt in izberemo prave tehnologije." },
  { num: "03", title: "Oblikovanje", desc: "Zasnujemo uporabniško izkušnjo in vizualni jezik." },
  { num: "04", title: "Razvoj", desc: "Gradimo z agilnim pristopom in rednimi pregledi." },
  { num: "05", title: "Zagon", desc: "Temeljito testiramo in lansiramo v produkcijo." },
  { num: "06", title: "Optimizacija", desc: "Spremljamo, merimo in nenehno izboljšujemo." },
];

export default function Process() {
  return (
    <section id="proces" className="relative z-10 py-28">
      <div className="glow-line max-w-2xl mx-auto mb-28" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold text-accent tracking-[0.25em] uppercase mb-3">Proces</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Kako delamo</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.08}>
              <div className="card rounded-2xl p-7 h-full group relative overflow-hidden">
                <span className="absolute top-4 right-5 text-5xl font-black text-accent/5 group-hover:text-accent/10 transition-colors duration-500 select-none">
                  {s.num}
                </span>
                <div className="relative">
                  <p className="text-xs font-mono text-accent mb-3 tracking-wider">KORAK {s.num}</p>
                  <h3 className="text-base font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
