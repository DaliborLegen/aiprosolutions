import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import SystemBar from "../components/SystemBar";
import Background from "../components/Background";
import Footer from "../sections/Footer";
import { storitve } from "../data/storitve";

const SITE_URL = "https://aiprosolutions.si";

const TITLE = "Storitve: umetna inteligenca, avtomatizacija in razvoj";
const DESCRIPTION =
  "Vse storitve AI PRO SOLUTIONS na enem mestu: AI chatboti in agenti, avtomatizacija poslovnih, kadrovskih in računovodskih procesov, spletne aplikacije, poslovna inteligenca in AI video.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/storitve" },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    url: `${SITE_URL}/storitve`,
    siteName: "AI PRO SOLUTIONS",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function StoritveIndexPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: TITLE,
      description: DESCRIPTION,
      url: `${SITE_URL}/storitve`,
      inLanguage: "sl-SI",
      hasPart: storitve.map((s) => ({
        "@type": "Service",
        name: s.nav,
        description: s.metaDescription,
        url: `${SITE_URL}/storitve/${s.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domov", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Storitve", item: `${SITE_URL}/storitve` },
      ],
    },
  ];

  return (
    <>
      <Background />
      <SystemBar />
      <main className="relative z-10">
        <Navbar />

        <section className="relative pt-44 lg:pt-52 pb-14 lg:pb-20">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <nav aria-label="Drobtinice" className="mono text-[11px] text-text-3 mb-8 flex items-center gap-2">
              <Link href="/" className="hover:text-accent transition-colors">domov</Link>
              <span className="text-text-4">/</span>
              <span className="text-accent">storitve</span>
            </nav>
            <h1 className="display text-[13vw] sm:text-[9vw] lg:text-[7vw] xl:text-[120px] text-text leading-[0.9]">
              Kaj za vas
              <br />
              <span className="text-accent glow-soft">lahko naredimo.</span>
            </h1>
            <p className="text-[16px] lg:text-[18px] text-text-2 leading-[1.7] max-w-[720px] mt-8">
              Delamo tri stvari: uvajamo umetno inteligenco tam, kjer prihrani čas,
              avtomatiziramo procese, ki jih danes nekdo opravlja ročno, in gradimo spletne
              strani ter aplikacije, na katerih to vse teče. Spodaj je vsaka storitev
              podrobneje, z izhodiščnimi cenami na strani{" "}
              <Link href="/cene" className="text-accent hover:underline">cene</Link>.
            </p>
          </div>
        </section>

        <section className="relative py-10 lg:py-14 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
              {storitve.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/storitve/${s.slug}`}
                  className="group bg-void p-6 lg:p-8 hover:bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] transition-colors"
                >
                  <span className="mono text-[11px] text-text-4 tabular">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <h2 className="display text-[22px] text-text mt-3 leading-tight group-hover:text-accent transition-colors">
                    {s.nav}
                  </h2>
                  <p className="text-[14px] text-text-2 leading-[1.65] mt-3">
                    {s.metaDescription}
                  </p>
                  <span className="mono text-[11px] uppercase tracking-[0.14em] text-text-3 group-hover:text-accent transition-colors mt-5 inline-flex items-center gap-2">
                    preberi <span aria-hidden>↗</span>
                  </span>
                </Link>
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
                Niste prepričani, kaj potrebujete? <span className="text-accent glow-soft">Vprašajte.</span>
              </h2>
              <p className="mono text-[12px] text-text-3 mt-4 max-w-[520px] mx-auto">
                30-minutni posvet je brezplačen. Če AI ni prava pot, to tudi povemo.
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
