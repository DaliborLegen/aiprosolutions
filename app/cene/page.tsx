import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import SystemBar from "../components/SystemBar";
import Background from "../components/Background";
import Footer from "../sections/Footer";
import { cenik, cenikFaq } from "../data/cenik";

const SITE_URL = "https://aiprosolutions.si";

const TITLE = "Cenik: koliko stane AI rešitev, avtomatizacija ali aplikacija";
const DESCRIPTION =
  "Pregledne izhodiščne cene: AI chatbot in avtomatizacija procesa od 1.500 €, AI agent od 4.000 €, spletna aplikacija od 3.000 €, AI video od 300 €. Fiksna ponudba pred začetkom.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "cena AI rešitve",
    "koliko stane AI chatbot",
    "cena avtomatizacije procesov",
    "cena spletne aplikacije",
    "AI cena",
    "cenik AI storitev",
  ],
  alternates: { canonical: "/cene" },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    url: `${SITE_URL}/cene`,
    siteName: "AI PRO SOLUTIONS",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const eur = (n: number) => n.toLocaleString("sl-SI");

export default function CenePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "Cenik storitev AI PRO SOLUTIONS",
      url: `${SITE_URL}/cene`,
      provider: {
        "@type": "Organization",
        name: "AI PRO SOLUTIONS d.o.o.",
        url: SITE_URL,
      },
      itemListElement: cenik.map((p, i) => ({
        "@type": "Offer",
        position: i + 1,
        name: p.ime,
        description: p.opis,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: p.od,
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
        },
        ...(p.href ? { url: `${SITE_URL}${p.href}` } : {}),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: cenikFaq.map((f) => ({
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
        { "@type": "ListItem", position: 2, name: "Cene", item: `${SITE_URL}/cene` },
      ],
    },
  ];

  return (
    <>
      <Background />
      <SystemBar />
      <main className="relative z-10">
        <Navbar />

        <section className="relative pt-44 lg:pt-52 pb-16 lg:pb-20">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <nav aria-label="Drobtinice" className="mono text-[11px] text-text-3 mb-8 flex items-center gap-2">
              <Link href="/" className="hover:text-accent transition-colors">domov</Link>
              <span className="text-text-4">/</span>
              <span className="text-accent">cene</span>
            </nav>
            <h1 className="display text-[13vw] sm:text-[9vw] lg:text-[7vw] xl:text-[120px] text-text leading-[0.9]">
              Koliko to
              <br />
              <span className="text-accent glow-soft">dejansko stane.</span>
            </h1>
            <p className="text-[16px] lg:text-[18px] text-text-2 leading-[1.7] max-w-[720px] mt-8">
              Spodaj so izhodiščne cene, ne pavšalni paketi. Vsak projekt pred začetkom
              popišemo in pripravimo fiksno ponudbo z rokom, tako da veste, kaj plačate.
              Uvodni 30-minutni posvet je brezplačen in brez obveznosti.
            </p>

            {/* povzetek za hiter odgovor */}
            <div className="mt-10 frame p-6 lg:p-8 max-w-[860px]">
              <p className="mono-up text-[10px] text-accent mb-4">na_kratko</p>
              <ul className="space-y-2.5 text-[15px] text-text-2 leading-[1.6]">
                <li><span className="text-text">AI chatbot</span> in <span className="text-text">avtomatizacija enega procesa</span>: od 1.500 €</li>
                <li><span className="text-text">AI agent</span> z integracijami v poslovne sisteme: od 4.000 €</li>
                <li><span className="text-text">Spletna aplikacija po meri</span>: od 3.000 €, predstavitvena stran od 1.500 €</li>
                <li><span className="text-text">AI video</span> za družbena omrežja: od 300 €</li>
                <li><span className="text-text">Mesečni stroški delovanja</span>: tipično 20 do 150 € na mesec</li>
                <li><span className="text-text">Izvedba</span>: manjši projekti 2 do 3 tedne, večji 4 do 8 tednov</li>
              </ul>
            </div>
          </div>
        </section>

        {/* cenik */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <p className="mono-up text-[10px] text-accent mb-10 flex items-center gap-2">
              <span>&gt;</span>
              <span>izhodiscne_cene</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
              {cenik.map((p, i) => (
                <div key={p.ime} className="bg-void p-6 lg:p-8 flex flex-col">
                  <span className="mono text-[11px] text-text-4 tabular">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <h2 className="display text-[21px] text-text mt-3 leading-tight">{p.ime}</h2>
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
                  {p.href && (
                    <Link
                      href={p.href}
                      className="mono text-[11px] uppercase tracking-[0.14em] text-text-2 hover:text-accent transition-colors mt-6 inline-flex items-center gap-2"
                    >
                      več o storitvi <span aria-hidden>↗</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <p className="mono text-[12px] text-text-4 mt-6">
              Cene so brez DDV. Podjetje je zavezanec za DDV.
            </p>
          </div>
        </section>

        {/* kaj vpliva na ceno */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="display text-[26px] lg:text-[32px] text-text leading-tight mb-5">
                Kaj ceno dvigne in kaj jo zniža
              </h2>
              <div className="space-y-4 text-[15px] text-text-2 leading-[1.75]">
                <p>
                  Ceno najbolj dvigne število sistemov, ki jih je treba povezati, in stanje
                  podatkov. Povezava z enim urejenim virom je hitro delo, povezava s starim
                  programom brez vmesnika in s podatki v treh različnih oblikah pa je projekt
                  zase. Dvigne jo tudi zahteva po obravnavi vseh izjem namesto tipičnih primerov.
                </p>
                <p>
                  Znižata jo dve stvari. Prva je ozek prvi korak: en proces, en oddelek, en
                  merljiv rezultat. Druga je urejena vsebina, ki jo priskrbite sami, na primer
                  veljavni pravilniki, ceniki in pogosta vprašanja s pravimi odgovori.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <h2 className="display text-[26px] lg:text-[32px] text-text leading-tight mb-5">
                Kaj so mesečni stroški
              </h2>
              <div className="space-y-4 text-[15px] text-text-2 leading-[1.75]">
                <p>
                  Po zagonu nastaneta dve vrsti stroškov. Stroški delovanja gredo neposredno
                  ponudnikom: gostovanje, podatkovna baza in uporaba jezikovnih modelov. Pri
                  manjših rešitvah so tipično med 20 in 150 € na mesec, odvisno od števila
                  pogovorov ali obdelanih dokumentov.
                </p>
                <p>
                  Vzdrževanje pri nas je ločeno in neobvezno. Začne se pri 90 € na mesec in
                  vključuje nadzor delovanja, varnostne posodobitve in manjše izboljšave. Če
                  ga ne želite, dobite dostope in vse skupaj vodite sami.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* faq */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <p className="mono-up text-[10px] text-accent mb-10 flex items-center gap-2">
              <span>&gt;</span>
              <span>pogosta_vprasanja_o_cenah</span>
            </p>
            <div className="max-w-[860px] divide-y divide-line border-y border-line">
              {cenikFaq.map((f) => (
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
                Povejte proces, mi povemo <span className="text-accent glow-soft">ceno.</span>
              </h2>
              <p className="mono text-[12px] text-text-3 mt-4 max-w-[520px] mx-auto">
                Okvirno oceno dobite že na 30-minutnem posvetu. Odgovor v manj kot 24 urah.
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/#kontakt" className="btn-primary">
                  <span>init_project</span>
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
