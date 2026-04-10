"use client";
import AnimatedSection from "../components/AnimatedSection";

const reasons = [
  { title: "Rešitve po meri", desc: "Vsak projekt oblikujemo glede na vaše specifične cilje in izzive." },
  { title: "Poslovno usmerjeni", desc: "Ne razvijamo tehnologije zavoljo tehnologije — fokus je na vaših rezultatih." },
  { title: "Hitra izvedba", desc: "Agilni pristop zagotavlja vidne rezultate v tednih, ne mesecih." },
  { title: "Moderna arhitektura", desc: "Uporabljamo najnovejše tehnologije za zanesljive in skalabilne sisteme." },
  { title: "Skalabilni sistemi", desc: "Gradimo rešitve, ki rastejo z vašim podjetjem brez tehničnega dolga." },
  { title: "Dolgoročna zanesljivost", desc: "Partnerski odnos z vzdrževanjem, nadgradnjami in stalno podporo." },
];

export default function WhyUs() {
  return (
    <section id="zakaj" className="relative z-10 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <p className="text-xs font-semibold text-accent tracking-[0.25em] uppercase mb-3">Zakaj mi</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-6">
              Razlogi za
              <br />
              <span className="grad-text">sodelovanje z nami</span>
            </h2>
            <p className="text-secondary leading-relaxed">
              Nismo zgolj izvajalci — smo strateški partner, ki razume vaše poslovanje
              in gradi tehnologijo, ki dejansko ustvarja vrednost.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.08}>
                <div className="card rounded-xl p-5 h-full">
                  <div className="w-8 h-8 rounded-lg grad-bg flex items-center justify-center text-white text-xs font-bold mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-sm font-bold text-primary mb-1.5">{r.title}</h3>
                  <p className="text-xs text-secondary leading-relaxed">{r.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
