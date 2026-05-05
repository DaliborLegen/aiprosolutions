"use client";
import AnimatedSection from "../components/AnimatedSection";

const services = [
  {
    num: "I",
    title: "AI rešitve",
    italic: "agenti, chatboti, integracija",
    desc: "Razvijamo AI agente in chatbote, ki avtomatizirajo komunikacijo s strankami, prodajo in interno znanje. Integracije z OpenAI, Anthropic in Gemini, prilagojene vašim podatkom.",
    keywords: ["GPT", "Claude", "RAG", "Function Calling"],
  },
  {
    num: "II",
    title: "Razvoj programske opreme",
    italic: "po meri, brez šablon",
    desc: "Aplikacije, interna orodja in API integracije za specifične poslovne potrebe. Od CRM-jev do produkcijskih dashboardov, vedno z mislijo na uporabnika in vzdržljivost kode.",
    keywords: ["TypeScript", "Postgres", "API", "Realtime"],
  },
  {
    num: "III",
    title: "Spletne strani in aplikacije",
    italic: "Next.js, hitre kot ta heading",
    desc: "Hitre, statične in dinamične spletne strani, postavljene na sodobnem stack-u. SEO, dostopnost, Core Web Vitals — vse v paketu, brez kompromisov pri dizajnu.",
    keywords: ["Next.js", "React", "SEO", "Vercel"],
  },
  {
    num: "IV",
    title: "Avtomatizacija procesov",
    italic: "manj klikov, več rezultatov",
    desc: "Povezujemo vaše sisteme, odstranjujemo ročne korake in postavimo avtomatske delovne tokove. Kjer je smiselno, dodamo AI v zanko, da naredi odločitve namesto človeka.",
    keywords: ["Workflows", "Webhooks", "ETL", "n8n"],
  },
  {
    num: "V",
    title: "Strategija in svetovanje",
    italic: "kaj graditi in zakaj",
    desc: "Pregled obstoječega stack-a, izbira pravih tehnologij in tehnični roadmap. Pomagamo se izogniti dragih napak in fokusirati ekipo na stvari, ki res premaknejo iglo.",
    keywords: ["Audit", "Architecture", "Roadmap", "Tech Due Diligence"],
  },
  {
    num: "VI",
    title: "AI video in avdio produkcija",
    italic: "od scenarija do mastera",
    desc: "Generativna produkcija video in avdio vsebin za marketing in produktno komunikacijo. Konsistenten brand glas, hitra iteracija, profesionalen output.",
    keywords: ["Veo", "Suno", "ElevenLabs", "Remotion"],
  },
];

export default function Services() {
  return (
    <section id="storitve" className="relative py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-20 lg:mb-28">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              <p className="label">— 01 / Storitve</p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-4 lg:mt-0">
              <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6.5vw] xl:text-[104px] text-ink leading-[0.9]">
                Šest disciplin,
                <br />
                <span className="display-italic text-terracotta">en studio.</span>
              </h2>
            </div>
          </div>
        </AnimatedSection>

        <div className="border-t border-ink">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.05}>
              <article className="group border-b border-rule">
                <div className="grid grid-cols-12 gap-x-6 py-8 lg:py-12 transition-colors duration-500 hover:bg-paper-soft px-2 -mx-2">
                  <div className="col-span-2 lg:col-span-1">
                    <span className="mono text-[12px] text-ink-mute group-hover:text-terracotta transition-colors">
                      {s.num}
                    </span>
                  </div>
                  <div className="col-span-10 lg:col-span-4">
                    <h3 className="display text-[28px] lg:text-[40px] text-ink leading-tight">
                      {s.title}
                    </h3>
                    <p className="display-italic serif text-[16px] lg:text-[18px] text-ink-mute mt-2">
                      {s.italic}
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-5 mt-4 lg:mt-0">
                    <p className="serif text-[15px] lg:text-[16px] text-ink-soft leading-[1.55] max-w-[440px]">
                      {s.desc}
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-2 mt-4 lg:mt-0 flex flex-wrap gap-x-3 gap-y-1.5 lg:justify-end content-start">
                    {s.keywords.map((k) => (
                      <span key={k} className="mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                        {k}
                      </span>
                    ))}
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
