"use client";
import AnimatedSection from "../components/AnimatedSection";

const testimonials = [
  { quote: "AIPRO Solutions je bistveno pospešil našo digitalizacijo. Profesionalni, odzivni in rešitve delujejo brezhibno.", name: "Marko K.", role: "Direktor, LogiTech d.o.o." },
  { quote: "Njihov AI chatbot nam je zmanjšal obremenitev podpore za 70%. Rezultati so presenetljivi.", name: "Ana P.", role: "Vodja IT, MedPro" },
  { quote: "Od spletne strani do avtomatizacije — vse na enem mestu. Priporočamo vsakemu podjetju, ki želi rasti.", name: "Tomaž R.", role: "Ustanovitelj, GreenScale" },
];

export default function Testimonials() {
  return (
    <section className="relative z-10 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold text-accent tracking-[0.25em] uppercase mb-3">Mnenja</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Kaj pravijo stranke</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="card rounded-2xl p-7 h-full flex flex-col">
                <div className="text-accent text-2xl mb-4">&ldquo;</div>
                <p className="text-sm text-secondary leading-relaxed flex-1 mb-6">{t.quote}</p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-primary">{t.name}</p>
                  <p className="text-xs text-tertiary mt-0.5">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
