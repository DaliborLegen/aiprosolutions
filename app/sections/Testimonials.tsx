"use client";
import AnimatedSection from "../components/AnimatedSection";

const testimonials = [
  {
    quote:
      "AI PRO Solutions je bistveno pospešil našo digitalizacijo. Profesionalni, odzivni in rešitve delujejo brezhibno.",
    name: "Marko K.",
    role: "Direktor",
    company: "LogiTech d.o.o.",
  },
  {
    quote:
      "Njihov AI chatbot nam je zmanjšal obremenitev podpore za 70 %. Rezultati so presenetljivi in se kažejo že prvi mesec.",
    name: "Ana P.",
    role: "Vodja IT",
    company: "MedPro",
  },
  {
    quote:
      "Od spletne strani do avtomatizacije — vse na enem mestu. Priporočamo vsakemu podjetju, ki želi rasti brez tehničnega dolga.",
    name: "Tomaž R.",
    role: "Ustanovitelj",
    company: "GreenScale",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-20 lg:mb-24">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              <p className="label">— 05 / Pričevanja</p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-4 lg:mt-0">
              <h2 className="display text-[10vw] sm:text-[7vw] lg:text-[5.5vw] xl:text-[88px] text-ink leading-[0.95]">
                <span className="display-italic text-terracotta">Ljudje,</span> ki nam zaupajo.
              </h2>
            </div>
          </div>
        </AnimatedSection>

        <div className="border-t border-ink">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <figure className="grid grid-cols-12 gap-x-6 py-14 lg:py-20 border-b border-rule">
                <div className="col-span-12 lg:col-span-3 mb-6 lg:mb-0">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                    {String(i + 1).padStart(2, "0")} / Pričevanje
                  </p>
                </div>
                <blockquote className="col-span-12 lg:col-span-9">
                  <p className="display text-[28px] sm:text-[36px] lg:text-[44px] text-ink leading-[1.1] tracking-tight">
                    <span className="display-italic text-terracotta">&ldquo;</span>
                    {t.quote}
                    <span className="display-italic text-terracotta">&rdquo;</span>
                  </p>
                  <figcaption className="mt-8 flex items-baseline gap-3 mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                    <span className="text-ink">{t.name}</span>
                    <span>·</span>
                    <span>{t.role}</span>
                    <span>·</span>
                    <span>{t.company}</span>
                  </figcaption>
                </blockquote>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
