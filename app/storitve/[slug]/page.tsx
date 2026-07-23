import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import SystemBar from "../../components/SystemBar";
import Background from "../../components/Background";
import Footer from "../../sections/Footer";
import { storitve, getStoritev } from "../../data/storitve";

const SITE_URL = "https://aiprosolutions.si";

export function generateStaticParams() {
  return storitve.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getStoritev(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/storitve/${s.slug}` },
    openGraph: {
      type: "website",
      locale: "sl_SI",
      url: `${SITE_URL}/storitve/${s.slug}`,
      siteName: "AI PRO SOLUTIONS",
      title: s.metaTitle,
      description: s.metaDescription,
    },
  };
}

export default async function StoritevPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getStoritev(slug);
  if (!s) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.nav,
      description: s.metaDescription,
      url: `${SITE_URL}/storitve/${s.slug}`,
      provider: {
        "@type": "Organization",
        name: "AI PRO SOLUTIONS d.o.o.",
        url: SITE_URL,
      },
      areaServed: { "@type": "Country", name: "Slovenija" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faq.map((f) => ({
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Storitve",
          item: `${SITE_URL}/#storitve`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: s.nav,
          item: `${SITE_URL}/storitve/${s.slug}`,
        },
      ],
    },
  ];

  const ostale = storitve.filter((o) => o.slug !== s.slug);

  return (
    <>
      <Background />
      <SystemBar />
      <main className="relative z-10">
        <Navbar />

        {/* hero */}
        <section className="relative pt-44 lg:pt-52 pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <nav aria-label="Drobtinice" className="mono text-[11px] text-text-3 mb-8 flex items-center gap-2">
              <Link href="/" className="hover:text-accent transition-colors">domov</Link>
              <span className="text-text-4">/</span>
              <Link href="/#storitve" className="hover:text-accent transition-colors">storitve</Link>
              <span className="text-text-4">/</span>
              <span className="text-accent">{s.slug}</span>
            </nav>
            <h1 className="display text-[13vw] sm:text-[9vw] lg:text-[7vw] xl:text-[120px] text-text leading-[0.9]">
              {s.h1a}
              <br />
              <span className="text-accent glow-soft">{s.h1b}</span>
            </h1>
            <p className="text-[16px] lg:text-[18px] text-text-2 leading-[1.7] max-w-[680px] mt-8">
              {s.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/#kontakt" className="btn-primary">
                <span>Brezplačen posvet</span>
                <span aria-hidden>↗</span>
              </Link>
              <Link href="/#projekti" className="btn-ghost">
                <span>Naši projekti</span>
              </Link>
            </div>
          </div>
        </section>

        {/* bullets */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <p className="mono-up text-[10px] text-accent mb-10 flex items-center gap-2">
              <span>&gt;</span>
              <span>kaj_dobite</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
              {s.bullets.map((b, i) => (
                <div key={b.t} className="bg-void p-6 lg:p-8">
                  <span className="mono text-[11px] text-text-4 tabular">[0{i + 1}]</span>
                  <h2 className="display text-[22px] text-text mt-3 leading-tight">{b.t}</h2>
                  <p className="text-[14px] text-text-2 leading-[1.65] mt-3">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* body prose */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-12 gap-x-6 gap-y-12">
            {s.body.map((sec) => (
              <div key={sec.h} className="col-span-12 lg:col-span-6">
                <h2 className="display text-[26px] lg:text-[32px] text-text leading-tight mb-5">
                  {sec.h}
                </h2>
                <div className="space-y-4">
                  {sec.p.map((para, i) => (
                    <p key={i} className="text-[15px] text-text-2 leading-[1.75]">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* use cases */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <p className="mono-up text-[10px] text-accent mb-8 flex items-center gap-2">
              <span>&gt;</span>
              <span>primeri_uporabe</span>
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 max-w-[960px]">
              {s.useCases.map((u) => (
                <li key={u} className="flex items-start gap-3 text-[15px] text-text-2 leading-[1.6]">
                  <span aria-hidden className="text-accent mt-0.5">→</span>
                  {u}
                </li>
              ))}
            </ul>
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
              {s.faq.map((f) => (
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

        {/* other services + CTA */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <p className="mono-up text-[10px] text-accent mb-8 flex items-center gap-2">
              <span>&gt;</span>
              <span>sorodne_storitve</span>
            </p>
            <div className="flex flex-wrap gap-3 mb-16">
              {ostale.map((o) => (
                <Link
                  key={o.slug}
                  href={`/storitve/${o.slug}`}
                  className="mono text-[11px] uppercase tracking-[0.14em] text-text-2 border border-line px-4 py-2.5 hover:border-accent hover:text-accent transition-colors"
                >
                  {o.nav}
                </Link>
              ))}
            </div>
            <div className="frame frame-corners p-8 lg:p-14 text-center">
              <span className="c-tl" />
              <span className="c-br" />
              <h2 className="display text-[8vw] lg:text-[48px] text-text leading-tight">
                Preverimo, kaj AI lahko naredi <span className="text-accent glow-soft">za vas.</span>
              </h2>
              <p className="mono text-[12px] text-text-3 mt-4 max-w-[520px] mx-auto">
                30-minutni posvet je brezplačen in brez obveznosti. Odgovor v manj kot 24 urah.
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
