"use client";
import AnimatedSection from "../components/AnimatedSection";

const reasons = [
  {
    n: "01",
    title: "Rešitve po meri",
    desc: "Vsak projekt oblikujemo glede na vaše specifične cilje in izzive. Brez gotovih predlog.",
  },
  {
    n: "02",
    title: "Poslovno usmerjeni",
    desc: "Ne razvijamo tehnologije zavoljo tehnologije — fokus je na merljivih poslovnih rezultatih.",
  },
  {
    n: "03",
    title: "Hitra izvedba",
    desc: "Agilni pristop zagotavlja vidne rezultate v tednih, ne mesecih. Tedenski release-i.",
  },
  {
    n: "04",
    title: "Moderna arhitektura",
    desc: "Sodobne tehnologije, čista koda, dokumentacija. Naslednji razvijalec se brez težav vključi.",
  },
  {
    n: "05",
    title: "Skalabilni sistemi",
    desc: "Gradimo rešitve, ki rastejo z vašim podjetjem brez tehničnega dolga in dragih prepisov.",
  },
  {
    n: "06",
    title: "Dolgoročno partnerstvo",
    desc: "Po lansiranju ostanemo na voljo. Vzdrževanje, nadgradnje, monitoring — kar potrebujete.",
  },
];

export default function WhyUs() {
  return (
    <section id="zakaj" className="relative py-32 lg:py-44 bg-paper-soft">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <AnimatedSection className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <p className="label mb-6">— 02 / Studio</p>
            <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6vw] xl:text-[88px] text-ink leading-[0.95]">
              Nismo izvajalci.
              <br />
              Smo <span className="display-italic text-terracotta">partnerji.</span>
            </h2>
            <p className="serif text-[18px] lg:text-[19px] text-ink-soft leading-[1.5] mt-10 max-w-[420px]">
              Razumemo vaše poslovanje preden napišemo prvo vrstico kode. Tehnologija je le sredstvo — cilj je <em className="italic text-ink">vrednost, ki jo ustvari</em>.
            </p>

            <div className="mt-12 pt-8 border-t border-rule">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-3">Pričevanja</p>
              <p className="serif italic text-[16px] text-ink leading-[1.5]">
                &ldquo;Zmanjšali so obremenitev podpore za 70 %. Najprej rezultati, šele nato pogovor o tehnologiji.&rdquo;
              </p>
              <p className="mono text-[10px] uppercase tracking-[0.16em] text-ink-mute mt-3">— Ana P., MedPro</p>
            </div>
          </AnimatedSection>

          <div className="col-span-12 lg:col-span-7 lg:col-start-7">
            <div className="border-t border-ink">
              {reasons.map((r, i) => (
                <AnimatedSection key={r.title} delay={i * 0.04}>
                  <div className="grid grid-cols-12 gap-x-4 py-7 lg:py-9 border-b border-rule">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="mono text-[12px] text-ink-mute">{r.n}</span>
                    </div>
                    <div className="col-span-10 lg:col-span-11">
                      <h3 className="display text-[24px] lg:text-[30px] text-ink leading-tight mb-2">
                        {r.title}
                      </h3>
                      <p className="serif text-[15px] lg:text-[16px] text-ink-soft leading-[1.55] max-w-[520px]">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
