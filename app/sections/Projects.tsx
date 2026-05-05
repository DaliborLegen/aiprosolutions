"use client";
import AnimatedSection from "../components/AnimatedSection";

const projects = [
  {
    edition: "№ 001",
    title: "Revivio",
    italic: "AI obnova fotografij",
    desc: "B2C SaaS produkt za obnovo poškodovanih in starih fotografij. Plačilna integracija, queue za AI obdelavo, slovenski + angleški jezik.",
    stack: ["Next.js 16", "Supabase", "Stripe", "Gemini"],
    url: "https://revivio.si",
  },
  {
    edition: "№ 002",
    title: "ProfiPix",
    italic: "AI fotografije nastanitev",
    desc: "Avtomatsko izboljšanje fotografij za nastanitvene objekte. 2-krat več klikov v rezervacijah, 90 % nižji strošek od profesionalnega fotografa.",
    stack: ["Next.js", "Vercel", "Image AI"],
    url: "https://profipix.si",
  },
  {
    edition: "№ 003",
    title: "Formatory",
    italic: "pretvorba datotek + scan",
    desc: "Spletna aplikacija za pretvorbo datotek in OCR skeniranje dokumentov. Desktop različica v razvoju.",
    stack: ["Next.js 16", "Vercel"],
    url: "https://formatory.si",
  },
  {
    edition: "№ 004",
    title: "Casino chatbot",
    italic: "podpora v živo",
    desc: "AI chatbot za podporo strankam casino.si platforme. Razumevanje slovenščine, eskalacija na človeka, real-time analitika pogovorov.",
    stack: ["Next.js 16", "Supabase", "Claude API"],
    url: null,
  },
];

export default function Projects() {
  return (
    <section id="projekti" className="relative py-32 lg:py-44 bg-paper-soft">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-20 lg:mb-28">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              <p className="label">— 04 / Delo</p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-4 lg:mt-0">
              <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6.5vw] xl:text-[104px] text-ink leading-[0.9]">
                Izbrano delo,
                <br />
                <span className="display-italic text-terracotta">v obtoku.</span>
              </h2>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          {projects.map((p, i) => (
            <AnimatedSection
              key={p.title}
              delay={i * 0.08}
              className={`col-span-12 lg:col-span-6 ${i % 2 === 1 ? "lg:mt-24" : ""}`}
            >
              <article className="group">
                <div className="aspect-[4/3] bg-ink relative overflow-hidden mb-6">
                  {/* Editorial cover plate — typographic instead of generic image */}
                  <div className="absolute inset-0 flex flex-col p-8 lg:p-10 transition-transform duration-700 group-hover:scale-[1.02]">
                    <div className="flex items-baseline justify-between text-paper">
                      <span className="mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                        {p.edition}
                      </span>
                      <span className="mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                        {String(i + 1).padStart(2, "0")} / 0{projects.length}
                      </span>
                    </div>
                    <div className="flex-1 flex items-center">
                      <h3 className="display text-[64px] sm:text-[80px] lg:text-[88px] text-paper leading-[0.92]">
                        {p.title}
                      </h3>
                    </div>
                    <p className="display-italic text-[20px] lg:text-[24px] text-terracotta-soft leading-tight">
                      — {p.italic}
                    </p>
                  </div>
                  {/* Subtle plate accent */}
                  <div className="absolute top-0 right-0 w-px h-full bg-terracotta/40" />
                </div>

                <div className="grid grid-cols-12 gap-x-4">
                  <div className="col-span-12 sm:col-span-7">
                    <p className="serif text-[15px] lg:text-[16px] text-ink-soft leading-[1.6]">
                      {p.desc}
                    </p>
                  </div>
                  <div className="col-span-12 sm:col-span-5 mt-4 sm:mt-0 flex flex-col items-start sm:items-end gap-2">
                    <div className="flex flex-wrap gap-x-3 gap-y-1 sm:justify-end">
                      {p.stack.map((s) => (
                        <span key={s} className="mono text-[10px] uppercase tracking-[0.14em] text-ink-mute">
                          {s}
                        </span>
                      ))}
                    </div>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mono text-[11px] uppercase tracking-[0.18em] text-ink hover:text-terracotta transition-colors mt-2 link-ed"
                      >
                        Obišči ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
