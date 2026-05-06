"use client";
import Reveal from "../components/Reveal";

const projects = [
  {
    id: "001",
    title: "Revivio",
    italic: "AI obnova fotografij",
    desc: "B2C SaaS produkt za obnovo poškodovanih in starih fotografij. Plačilna integracija, queue za AI obdelavo, slovenski + angleški jezik.",
    stack: ["Next.js 16", "Supabase", "Stripe", "Gemini"],
    url: "https://revivio.si",
    accent: "rgba(255, 182, 39, 0.18)",
  },
  {
    id: "002",
    title: "ProfiPix",
    italic: "AI fotografije nastanitev",
    desc: "Avtomatsko izboljšanje fotografij za nastanitvene objekte. 2-krat več klikov v rezervacijah, 90% nižji strošek od profesionalnega fotografa.",
    stack: ["Next.js", "Vercel", "Image AI"],
    url: "https://profipix.si",
    accent: "rgba(25, 245, 135, 0.14)",
  },
  {
    id: "003",
    title: "Formatory",
    italic: "pretvorba datotek + scan",
    desc: "Spletna aplikacija za pretvorbo datotek in OCR skeniranje dokumentov. Desktop različica v razvoju.",
    stack: ["Next.js 16", "Vercel"],
    url: "https://formatory.si",
    accent: "rgba(255, 92, 92, 0.14)",
  },
  {
    id: "004",
    title: "Casino chatbot",
    italic: "podpora v živo",
    desc: "AI chatbot za podporo strankam casino.si platforme. Razumevanje slovenščine, eskalacija na človeka, real-time analitika pogovorov.",
    stack: ["Next.js 16", "Supabase", "Claude API"],
    url: null,
    accent: "rgba(150, 120, 255, 0.16)",
  },
];

export default function Projects() {
  return (
    <section id="projekti" className="relative py-28 lg:py-40 bg-surface/40">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        <Reveal className="mb-20 lg:mb-28">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              <p className="mono-up text-[10px] text-accent mb-3">&gt; section_04</p>
              <p className="mono text-[11px] text-text-3">/work</p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
              <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6.4vw] xl:text-[112px] text-text leading-[0.9]">
                Izbrano delo,
                <br />
                <span className="text-accent glow-soft">v produkciji.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 lg:gap-y-16">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              index={i}
              className={`col-span-12 lg:col-span-6 ${i % 2 === 1 ? "lg:mt-24" : ""}`}
            >
              <article className="group">
                {/* terminal-style cover */}
                <div className="relative aspect-[5/4] lg:aspect-[4/3] frame frame-corners overflow-hidden mb-6 transition-all duration-500 group-hover:border-accent">
                  <span className="c-tl" /><span className="c-br" />
                  {/* atmospheric glow */}
                  <div
                    aria-hidden
                    className="absolute -inset-10 transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${p.accent}, transparent 60%)`,
                    }}
                  />
                  {/* fine grid */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50 group-hover:opacity-80 transition-opacity"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(244,244,245,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,245,0.04) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  {/* sweep */}
                  <span aria-hidden className="scan-sweep" />

                  {/* header bar */}
                  <div className="relative border-b border-line px-4 py-2 flex items-center justify-between mono text-[10px] text-text-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-text-4" />
                      <span className="w-2 h-2 rounded-full bg-text-4" />
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="tabular">~/projects/{p.title.toLowerCase().replace(" ", "_")}</span>
                    <span>[id:{p.id}]</span>
                  </div>

                  {/* content */}
                  <div className="relative h-[calc(100%-33px)] flex flex-col p-6 lg:p-8">
                    <div className="flex items-baseline justify-between mb-auto">
                      <span className="mono text-[10px] uppercase tracking-[0.2em] text-text-3">
                        № {p.id}
                      </span>
                      <span className="mono text-[10px] uppercase tracking-[0.2em] text-text-3">
                        [{String(i + 1).padStart(2, "0")} / 0{projects.length}]
                      </span>
                    </div>
                    <div className="my-auto">
                      <h3 className="display display-tight text-[56px] sm:text-[72px] lg:text-[88px] text-text leading-[0.92] group-hover:text-accent group-hover:glow-soft transition-all duration-500">
                        {p.title}
                      </h3>
                      <p className="mono text-[12px] lg:text-[14px] text-accent mt-3 tracking-wide">
                        // {p.italic}
                      </p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-line flex items-center justify-between">
                      <span className="mono text-[10px] uppercase tracking-[0.18em] text-text-3 flex items-center gap-2">
                        <span className="dot-signal" />
                        live
                      </span>
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono text-[10px] uppercase tracking-[0.18em] text-text-2 group-hover:text-accent transition-colors flex items-center gap-1.5"
                        >
                          visit
                          <span aria-hidden className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-x-4">
                  <div className="col-span-12 sm:col-span-7">
                    <p className="text-[14px] lg:text-[15px] text-text-2 leading-[1.65]">
                      {p.desc}
                    </p>
                  </div>
                  <div className="col-span-12 sm:col-span-5 mt-4 sm:mt-0 flex flex-wrap gap-2 sm:justify-end content-start">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="mono text-[10px] uppercase tracking-[0.14em] text-text-3 border border-line px-2 py-1 hover:border-accent hover:text-accent transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
