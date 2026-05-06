"use client";
import Reveal from "../components/Reveal";

const reasons = [
  {
    n: "01",
    title: "Rešitve po meri",
    desc: "Vsak projekt oblikujemo glede na vaše specifične cilje in izzive. Brez gotovih predlog.",
    metric: "0",
    metricLabel: "templates",
  },
  {
    n: "02",
    title: "Poslovno usmerjeni",
    desc: "Ne razvijamo tehnologije zavoljo tehnologije — fokus je na merljivih poslovnih rezultatih.",
    metric: "ROI",
    metricLabel: "first",
  },
  {
    n: "03",
    title: "Hitra izvedba",
    desc: "Agilni pristop zagotavlja vidne rezultate v tednih, ne mesecih. Tedenski release-i.",
    metric: "7d",
    metricLabel: "cadence",
  },
  {
    n: "04",
    title: "Moderna arhitektura",
    desc: "Sodobne tehnologije, čista koda, dokumentacija. Naslednji razvijalec se brez težav vključi.",
    metric: "TS",
    metricLabel: "strict",
  },
  {
    n: "05",
    title: "Skalabilni sistemi",
    desc: "Gradimo rešitve, ki rastejo z vašim podjetjem brez tehničnega dolga in dragih prepisov.",
    metric: "∞",
    metricLabel: "growth",
  },
  {
    n: "06",
    title: "Dolgoročno partnerstvo",
    desc: "Po lansiranju ostanemo na voljo. Vzdrževanje, nadgradnje, monitoring — kar potrebujete.",
    metric: "24/7",
    metricLabel: "support",
  },
];

export default function WhyUs() {
  return (
    <section id="zakaj" className="relative py-28 lg:py-40 bg-surface/40">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <Reveal className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <p className="mono-up text-[10px] text-accent mb-3">&gt; section_02</p>
            <p className="mono text-[11px] text-text-3 mb-6">/studio</p>
            <h2 className="display text-[11vw] sm:text-[7vw] lg:text-[5.6vw] xl:text-[88px] text-text leading-[0.95]">
              Nismo izvajalci.
              <br />
              Smo <span className="text-accent glow-soft">partnerji.</span>
            </h2>
            <p className="text-[16px] lg:text-[17px] text-text-2 leading-[1.6] mt-8 max-w-[440px]">
              Razumemo vaše poslovanje preden napišemo prvo vrstico kode. Tehnologija je le sredstvo — cilj je <span className="text-accent">vrednost, ki jo ustvari</span>.
            </p>

            <div className="mt-10 frame frame-corners p-6">
              <span className="c-tl" /><span className="c-br" />
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-text-3 mb-3 flex items-center gap-2">
                <span className="dot-signal" />
                <span>client_quote — verified</span>
              </p>
              <p className="display text-[20px] lg:text-[22px] text-text leading-[1.35]">
                &ldquo;Zmanjšali so obremenitev podpore za <span className="text-accent">70%</span>. Najprej rezultati, šele nato pogovor o tehnologiji.&rdquo;
              </p>
              <p className="mono text-[10px] uppercase tracking-[0.16em] text-text-3 mt-4">
                <span className="text-text-4">— </span>Ana P. <span className="text-text-4">/</span> MedPro
              </p>
            </div>
          </Reveal>

          <div className="col-span-12 lg:col-span-7 lg:col-start-7">
            <div className="grid grid-cols-2 gap-px bg-line border border-line">
              {reasons.map((r, i) => (
                <Reveal key={r.title} index={i} className="bg-void">
                  <div className="group h-full p-6 lg:p-8 hover:bg-surface-2 transition-colors duration-300 relative overflow-hidden">
                    <span
                      aria-hidden
                      className="absolute top-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    />
                    <div className="flex items-start justify-between mb-5">
                      <span className="mono text-[11px] text-text-4 group-hover:text-accent transition-colors tabular">
                        [{r.n}]
                      </span>
                      <div className="text-right">
                        <p className="display text-[22px] lg:text-[28px] text-text-2 group-hover:text-accent group-hover:glow-soft transition-all leading-none tabular">
                          {r.metric}
                        </p>
                        <p className="mono text-[9px] uppercase tracking-[0.16em] text-text-4 mt-1">
                          {r.metricLabel}
                        </p>
                      </div>
                    </div>
                    <h3 className="display text-[20px] lg:text-[24px] text-text leading-tight mb-3">
                      {r.title}
                    </h3>
                    <p className="text-[13px] lg:text-[14px] text-text-2 leading-[1.6]">
                      {r.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
