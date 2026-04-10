"use client";
import AnimatedSection from "../components/AnimatedSection";

const projects = [
  { title: "AI asistent za podporo strankam", desc: "Inteligentni chatbot, ki samodejno rešuje 80% poizvedb strank in razbremeni vašo ekipo.", tags: ["AI", "NLP", "Chatbot"] },
  { title: "Platforma za avtomatizacijo procesov", desc: "Centraliziran sistem za upravljanje delovnih tokov, ki zmanjša ročno delo za 60%.", tags: ["Avtomatizacija", "Workflow", "API"] },
  { title: "Poslovna nadzorna plošča", desc: "Real-time analitika in vizualizacija ključnih poslovnih metrik na enem mestu.", tags: ["Dashboard", "Analitika", "BI"] },
  { title: "Konverzijsko optimizirana spletna stran", desc: "Sodobna korporativna stran z vrhunsko uporabniško izkušnjo in merljivimi rezultati.", tags: ["Next.js", "UX", "Konverzije"] },
];

export default function Projects() {
  return (
    <section id="projekti" className="relative z-10 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold text-accent tracking-[0.25em] uppercase mb-3">Projekti</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Naše rešitve</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="card rounded-2xl p-8 h-full group cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base font-bold text-primary group-hover:text-accent transition-colors duration-300 pr-4">
                    {p.title}
                  </h3>
                  <span className="text-tertiary group-hover:text-accent shrink-0 transition-all duration-300 group-hover:translate-x-1">→</span>
                </div>
                <p className="text-sm text-secondary leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-accent/60 bg-accent/5 border border-accent/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="glow-line max-w-2xl mx-auto mt-28" />
    </section>
  );
}
