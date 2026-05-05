"use client";
import AnimatedSection from "../components/AnimatedSection";

export default function CTA() {
  return (
    <section className="relative py-32 lg:py-44 bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-end">
            <div className="col-span-12 lg:col-span-9">
              <p className="label mb-6" style={{ color: "var(--ink-faint)" }}>
                — Pripravljen?
              </p>
              <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[7vw] xl:text-[120px] text-paper leading-[0.92]">
                Pogovorimo se
                <br />
                o vaši <span className="display-italic text-terracotta-soft">ideji.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:text-right">
              <p className="serif text-[18px] text-paper/70 leading-[1.5] mb-8">
                Prva 30-minutna konzultacija je <em className="italic text-paper">brezplačna</em>. Brez vezave, brez prodajnega pritiska.
              </p>
              <a
                href="#kontakt"
                className="inline-flex bg-paper text-ink mono text-[12px] uppercase tracking-[0.16em] px-7 py-4 hover:bg-terracotta-soft hover:text-paper transition-colors"
              >
                Začnite zdaj →
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
