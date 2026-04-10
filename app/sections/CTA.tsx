"use client";
import AnimatedSection from "../components/AnimatedSection";

export default function CTA() {
  return (
    <section className="relative z-10 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl grad-bg p-12 sm:p-16 text-center">
            {/* Decorative circles */}
            <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] rounded-full bg-white/10 blur-[40px]" />
            <div className="absolute bottom-[-40px] left-[-40px] w-[150px] h-[150px] rounded-full bg-white/5 blur-[30px]" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Pripravljen na digitalni preskok?
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Pogovorimo se o vašem projektu. Prva konzultacija je brezplačna.
              </p>
              <a
                href="#kontakt"
                className="inline-flex bg-white text-bg font-bold px-8 py-4 rounded-xl text-sm hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                Začnite zdaj →
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="glow-line max-w-2xl mx-auto mt-20" />
    </section>
  );
}
