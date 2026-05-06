"use client";
import Reveal from "../components/Reveal";

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
      "Njihov AI chatbot nam je zmanjšal obremenitev podpore za 70%. Rezultati so presenetljivi in se kažejo že prvi mesec.",
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
    <section className="relative py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        <Reveal className="mb-16 lg:mb-20">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              <p className="mono-up text-[10px] text-accent mb-3">&gt; section_05</p>
              <p className="mono text-[11px] text-text-3">/testimonials</p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
              <h2 className="display text-[10vw] sm:text-[7vw] lg:text-[5.4vw] xl:text-[88px] text-text leading-[0.95]">
                <span className="text-accent glow-soft">Ljudje,</span> ki nam zaupajo.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-line-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} index={i}>
              <figure className="group grid grid-cols-12 gap-x-6 py-12 lg:py-16 border-b border-line relative overflow-hidden">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-px bg-accent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out"
                />
                <div className="col-span-12 lg:col-span-3 mb-6 lg:mb-0">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-text-4">
                    [{String(i + 1).padStart(2, "0")} / 0{testimonials.length}]
                  </p>
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-text-3 mt-1.5">
                    <span className="text-accent">&gt;</span> client_voice
                  </p>
                </div>
                <blockquote className="col-span-12 lg:col-span-9">
                  <p className="display text-[26px] sm:text-[34px] lg:text-[42px] text-text leading-[1.18] tracking-tight">
                    <span className="text-accent">&ldquo;</span>
                    {t.quote}
                    <span className="text-accent">&rdquo;</span>
                  </p>
                  <figcaption className="mt-8 flex items-center gap-3 mono text-[11px] uppercase tracking-[0.18em] text-text-3 flex-wrap">
                    <span className="text-text">{t.name}</span>
                    <span className="text-text-4">/</span>
                    <span>{t.role}</span>
                    <span className="text-text-4">/</span>
                    <span className="text-accent">{t.company}</span>
                  </figcaption>
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
