import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import SystemBar from "../components/SystemBar";
import Background from "../components/Background";
import Footer from "../sections/Footer";
import { aiVidnostPaketi } from "../data/cenik";

const SITE_URL = "https://aiprosolutions.si";

const TITLE = "AI vidnost: SEO optimizacija za ChatGPT, Gemini in Google";
const DESCRIPTION =
  "Preverimo, ali vas ChatGPT, Gemini in Perplexity priporočijo, ko stranke iščejo vašo storitev, in uredimo stran, da vas najdejo. Analiza vidnosti od 290 €.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "seo optimizacija za chatgpt",
    "optimizacija za ai iskalnike",
    "geo optimizacija",
    "generative engine optimization",
    "ai seo",
    "seo optimizacija",
    "vidnost v chatgpt",
    "kako priti v odgovore chatgpt",
  ],
  alternates: { canonical: "/ai-vidnost" },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    url: `${SITE_URL}/ai-vidnost`,
    siteName: "AI PRO SOLUTIONS",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const eur = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const preverimo = [
  {
    t: "Ali vas AI crawlerji sploh vidijo",
    d: "Stran obiščemo kot GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot in Googlebot. Veliko sodobnih strani robotom pokaže prazno lupino brez besedila, nekatere pa jih požarni zid celo zavrne.",
  },
  {
    t: "robots.txt, sitemap in llms.txt",
    d: "Preverimo, ali datoteke obstajajo, ali so pravilno zapisane in ali po nesreči ne zapirajo vrat iskalnikom, ki jih želite noter.",
  },
  {
    t: "Strukturirani podatki",
    d: "Naslov, delovni čas, telefon, storitve in cene zapisani tako, da jih stroj prebere brez ugibanja. Brez tega AI pogosto navaja napačne ure ali stare podatke.",
  },
  {
    t: "Naslovi, opisi in vsebina",
    d: "Naslovi strani, opisi za iskalnike, H1, alt besedila slik in jezikovne različice. Osnove, ki jih ima presenetljivo malo slovenskih strani urejenih.",
  },
  {
    t: "Kaj o vas odgovorijo ChatGPT, Gemini in Perplexity",
    d: "Postavimo jim deset vprašanj, ki jih postavljajo vaše stranke, in zapišemo, ali vas omenijo, na katerem mestu, iz katerega vira in ali so podatki pravilni.",
  },
  {
    t: "Uvrstitve v Googlu",
    d: "Za ključne poizvedbe v vaši panogi in kraju preverimo, kje ste vi in kje konkurenca. Če nam odprete Search Console, gledamo prave številke prikazov in klikov.",
  },
];

const potek = [
  { t: "Kratek posvet", d: "Povejte, s čim se ukvarjate, kje delujete in kdo so vaši konkurenti. 15 minut je dovolj." },
  { t: "Analiza", d: "V 3 delovnih dneh dobite pisno poročilo z ocenami, posnetki odgovorov AI iskalnikov in seznamom popravkov." },
  { t: "Ureditev", d: "Popravke izvedemo sami, če imamo dostop do strani, ali pa vašemu izvajalcu pripravimo natančna navodila." },
  { t: "Spremljanje", d: "Po enem in treh mesecih ponovimo meritev in pokažemo, kaj se je spremenilo." },
];

const faq = [
  {
    q: "Kaj je optimizacija za AI iskalnike (GEO)?",
    a: "GEO ali generative engine optimization je urejanje spletne strani in vsebin tako, da jih ChatGPT, Gemini, Perplexity in podobna orodja najdejo, razumejo in navedejo v odgovorih. Osnova je enaka kot pri SEO, dodatno pa je treba poskrbeti, da AI crawlerji dobijo celotno besedilo strani, da so ključni podatki zapisani strukturirano in da o vas pišejo tudi drugi viri.",
  },
  {
    q: "Ali je to isto kot SEO?",
    a: "Večina dela se prekriva: hitra in pregledna stran, dobri naslovi, jasna vsebina in strukturirani podatki pomagajo pri obojem. Razlika je v tem, da AI iskalniki pogosto berejo stran z lastnimi roboti, ki ne izvajajo JavaScripta, in da odgovor sestavijo iz več virov. Stran je lahko v Googlu na prvem mestu, ChatGPT pa je sploh ne prebere.",
  },
  {
    q: "Ali zagotovite, da me bo ChatGPT priporočil?",
    a: "Ne, tega nihče ne more pošteno zagotoviti. Odgovori AI iskalnikov se spreminjajo od vprašanja do vprašanja in od tedna do tedna. Zagotovimo pa, da vašo stran lahko preberejo, da so podatki o vas pravilni in dostopni ter da vsak mesec izmerimo, ali se omembe povečujejo.",
  },
  {
    q: "Koliko časa traja, da se pokažejo rezultati?",
    a: "Tehnični popravki začnejo delovati, ko iskalniki stran ponovno obiščejo, kar je običajno v nekaj dneh do nekaj tednov. Premiki v uvrstitvah in omembah v AI odgovorih so tipično vidni po enem do treh mesecih, odvisno od konkurence v panogi.",
  },
  {
    q: "Ali potrebujete dostop do moje spletne strani?",
    a: "Za analizo ne, preverimo jo od zunaj. Za ureditev potrebujemo dostop do urejevalnika strani ali sodelovanje z vašim izvajalcem. Če stran vodi nekdo drug in dostopa ne morete deliti, dobite navodila, ki jih izvajalec izvede sam.",
  },
  {
    q: "Za koga se analiza najbolj splača?",
    a: "Za podjetja, pri katerih stranke pred nakupom iščejo po spletu: nastanitve in turizem, restavracije, nepremičnine, zdravstvene in lepotne storitve, obrtniki, avtomobilske storitve in B2B ponudniki v ozkih panogah. Bolj kot je ponudba lokalna, prej se pokaže učinek.",
  },
];

export default function AiVidnostPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Vidnost v AI iskalnikih in Googlu",
      serviceType: "Optimizacija za AI iskalnike (GEO) in SEO",
      description: DESCRIPTION,
      url: `${SITE_URL}/ai-vidnost`,
      provider: {
        "@type": "Organization",
        name: "AI PRO SOLUTIONS d.o.o.",
        url: SITE_URL,
      },
      areaServed: { "@type": "Country", name: "Slovenija" },
      offers: aiVidnostPaketi.map((p) => ({
        "@type": "Offer",
        name: p.ime,
        description: p.opis,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: p.od,
          priceCurrency: "EUR",
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domov", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "AI vidnost", item: `${SITE_URL}/ai-vidnost` },
      ],
    },
  ];

  return (
    <>
      <Background />
      <SystemBar />
      <main className="relative z-10">
        <Navbar />

        {/* hero */}
        <section className="relative pt-44 lg:pt-52 pb-16 lg:pb-20">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <nav aria-label="Drobtinice" className="mono text-[11px] text-text-3 mb-8 flex items-center gap-2">
              <Link href="/" className="hover:text-accent transition-colors">domov</Link>
              <span className="text-text-4">/</span>
              <span className="text-accent">ai-vidnost</span>
            </nav>
            <h1 className="display text-[13vw] sm:text-[9vw] lg:text-[7vw] xl:text-[120px] text-text leading-[0.9]">
              Vas ChatGPT
              <br />
              <span className="text-accent glow-soft">sploh pozna?</span>
            </h1>
            <p className="text-[16px] lg:text-[18px] text-text-2 leading-[1.7] max-w-[720px] mt-8">
              Vse več strank namesto Googla vpraša ChatGPT ali Gemini: kje prespati v Piranu,
              kateri servis v Kopru je dober, kdo izdeluje okna po meri. Dobijo tri ali štiri
              imena in na tem se iskanje pogosto konča. Preverimo, ali ste med njimi, in
              uredimo stran tako, da vas AI iskalniki in Google lahko najdejo.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/#kontakt" className="btn-primary">
                <span>Naročite analizo</span>
                <span aria-hidden>↗</span>
              </Link>
              <a href="#paketi" className="btn-ghost">
                <span>Paketi in cene</span>
              </a>
            </div>

            <div className="mt-12 frame p-6 lg:p-8 max-w-[860px]">
              <p className="mono-up text-[10px] text-accent mb-4">na_kratko</p>
              <ul className="space-y-2.5 text-[15px] text-text-2 leading-[1.6]">
                <li><span className="text-text">Analiza vidnosti</span>: od 290 €, poročilo v 3 delovnih dneh</li>
                <li><span className="text-text">Tehnična ureditev</span> strani za AI in Google: od 690 €</li>
                <li><span className="text-text">Mesečno spremljanje</span> z novimi vsebinami: od 290 € na mesec, brez vezave</li>
                <li>Preverjamo <span className="text-text">ChatGPT, Gemini, Perplexity, Google in Bing</span></li>
                <li>Znesek analize odštejemo, če naročite ureditev</li>
              </ul>
            </div>
          </div>
        </section>

        {/* preizkusite sami */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <p className="mono-up text-[10px] text-accent mb-6 flex items-center gap-2">
                <span>&gt;</span>
                <span>preizkusite_sami</span>
              </p>
              <h2 className="display text-[26px] lg:text-[36px] text-text leading-tight">
                Dve minuti in veste, kje ste.
              </h2>
              <p className="text-[15px] text-text-2 leading-[1.75] mt-5">
                Odprite ChatGPT v začasnem klepetu, da odgovor ne upošteva vaše zgodovine, in
                vpišite vprašanje, kot bi ga vpisala stranka. Nato isto ponovite v Geminiju.
                Če vas ni na seznamu, ali pa vas omeni z napačnim delovnim časom, je to
                razlog za analizo.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7 space-y-px bg-line self-start">
              {[
                "Kje je najboljša nastanitev z razgledom na morje v Piranu?",
                "Priporoči mi dober avtoservis v Kopru.",
                "Kdo v Ljubljani izdeluje kuhinje po meri in kakšne so cene?",
                "Katera agencija za nepremičnine je najboljša na Obali?",
              ].map((q) => (
                <div key={q} className="bg-void px-6 py-5 flex items-start gap-3">
                  <span aria-hidden className="mono text-accent text-[13px] mt-0.5">&gt;</span>
                  <p className="mono text-[13px] lg:text-[14px] text-text leading-[1.6]">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* kaj preverimo */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <p className="mono-up text-[10px] text-accent mb-10 flex items-center gap-2">
              <span>&gt;</span>
              <span>kaj_preverimo</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
              {preverimo.map((b, i) => (
                <div key={b.t} className="bg-void p-6 lg:p-8">
                  <span className="mono text-[11px] text-text-4 tabular">[0{i + 1}]</span>
                  <h3 className="display text-[21px] text-text mt-3 leading-tight">{b.t}</h3>
                  <p className="text-[14px] text-text-2 leading-[1.65] mt-3">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* razlaga */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="display text-[26px] lg:text-[32px] text-text leading-tight mb-5">
                Prvo mesto v Googlu ni več dovolj
              </h2>
              <div className="space-y-4 text-[15px] text-text-2 leading-[1.75]">
                <p>
                  Google stran prebere skoraj vedno, tudi če je zgrajena v JavaScriptu. Roboti
                  ChatGPT, Perplexity in Claude tega večinoma ne znajo. Če jim strežnik vrne
                  samo ogrodje strani, o vas ne vedo ničesar in v odgovor vzamejo tisto, kar
                  so prebrali drugje: na portalih, v starih člankih, pri konkurenci.
                </p>
                <p>
                  Zato se zgodi, da je podjetje v Googlu prvo za svoje ime, AI iskalnik pa
                  stranko pošlje drugam ali navede ceno, ki ni veljavna že dve leti.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <h2 className="display text-[26px] lg:text-[32px] text-text leading-tight mb-5">
                Kaj najpogosteje najdemo
              </h2>
              <div className="space-y-4 text-[15px] text-text-2 leading-[1.75]">
                <p>
                  Manjkajoč ali napačno zapisan robots.txt. Požarni zid, ki AI robote zavrne
                  z napako 403. Brez sitemapa ali s sitemapom, ki ga nihče ni oddal v Search
                  Console. Strani brez H1 in brez opisa, slike brez alt besedila, testne strani
                  v indeksu.
                </p>
                <p>
                  Večina tega je urejena v nekaj urah. Počasnejši del so vsebine: jasni odgovori
                  na vprašanja, ki jih stranke dejansko sprašujejo, in omembe na drugih
                  straneh, ki jim AI iskalniki zaupajo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* paketi */}
        <section id="paketi" className="relative py-14 lg:py-20 border-t border-line scroll-mt-24">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <p className="mono-up text-[10px] text-accent mb-10 flex items-center gap-2">
              <span>&gt;</span>
              <span>paketi</span>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-line">
              {aiVidnostPaketi.map((p, i) => (
                <div key={p.ime} className="bg-void p-6 lg:p-8 flex flex-col">
                  <span className="mono text-[11px] text-text-4 tabular">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <h3 className="display text-[22px] text-text mt-3 leading-tight">{p.ime}</h3>
                  <p className="mono text-[13px] text-accent mt-3 tabular">
                    od {eur(p.od)} € <span className="text-text-4">/ {p.enota}</span>
                  </p>
                  <p className="text-[14px] text-text-2 leading-[1.65] mt-4">{p.opis}</p>
                  <ul className="mt-5 space-y-2">
                    {p.vkljuceno.map((v) => (
                      <li key={v} className="flex items-start gap-2.5 text-[13px] text-text-3 leading-[1.55]">
                        <span aria-hidden className="text-accent mt-0.5">→</span>
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mono text-[12px] text-text-4 mt-6">
              Cene so brez DDV. Za spletne strani, ki jih izdelamo mi, je tehnična ureditev že vključena.
            </p>
          </div>
        </section>

        {/* potek */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <p className="mono-up text-[10px] text-accent mb-10 flex items-center gap-2">
              <span>&gt;</span>
              <span>potek</span>
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
              {potek.map((k, i) => (
                <li key={k.t} className="bg-void p-6 lg:p-8">
                  <span className="mono text-[11px] text-text-4 tabular">[0{i + 1}]</span>
                  <h3 className="display text-[21px] text-text mt-3 leading-tight">{k.t}</h3>
                  <p className="text-[14px] text-text-2 leading-[1.65] mt-3">{k.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* faq */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <p className="mono-up text-[10px] text-accent mb-10 flex items-center gap-2">
              <span>&gt;</span>
              <span>pogosta_vprasanja</span>
            </p>
            <div className="max-w-[860px] divide-y divide-line border-y border-line">
              {faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="cursor-pointer list-none flex items-baseline justify-between gap-6">
                    <h3 className="display text-[18px] lg:text-[20px] text-text group-hover:text-accent transition-colors">
                      {f.q}
                    </h3>
                    <span aria-hidden className="mono text-accent text-[14px] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-[14px] lg:text-[15px] text-text-2 leading-[1.7] mt-4 max-w-[720px]">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="frame frame-corners p-8 lg:p-14 text-center">
              <span className="c-tl" />
              <span className="c-br" />
              <h2 className="display text-[8vw] lg:text-[48px] text-text leading-tight">
                Pošljite naslov strani, mi pošljemo <span className="text-accent glow-soft">stanje.</span>
              </h2>
              <p className="mono text-[12px] text-text-3 mt-4 max-w-[560px] mx-auto">
                Napišite nam domeno in tri glavne konkurente. Odgovor v manj kot 24 urah.
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/#kontakt" className="btn-primary">
                  <span>init_audit</span>
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
