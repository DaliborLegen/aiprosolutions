import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import SystemBar from "../components/SystemBar";
import Background from "../components/Background";
import Footer from "../sections/Footer";
import Reveal from "../components/Reveal";
import { articles } from "../data/blog";

const SITE_URL = "https://aiprosolutions.si";

export const metadata: Metadata = {
  title: "Blog: umetna inteligenca in avtomatizacija za podjetja",
  description:
    "Praktični članki o umetni inteligenci, AI chatbotih, avtomatizaciji poslovnih procesov in digitalni transformaciji za slovenska podjetja. Brez žargona, z realnimi številkami.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    url: `${SITE_URL}/blog`,
    siteName: "AI PRO SOLUTIONS",
    title: "Blog: umetna inteligenca in avtomatizacija za podjetja",
    description:
      "Praktični članki o umetni inteligenci, AI chatbotih in avtomatizaciji za slovenska podjetja.",
  },
};

export default function BlogIndex() {
  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "AI PRO SOLUTIONS blog",
    url: `${SITE_URL}/blog`,
    inLanguage: "sl-SI",
    publisher: { "@type": "Organization", name: "AI PRO SOLUTIONS d.o.o.", url: SITE_URL },
    blogPost: sorted.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${SITE_URL}/blog/${a.slug}`,
      datePublished: a.date,
      description: a.excerpt,
    })),
  };

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
              <span className="text-accent">blog</span>
            </nav>
            <p className="mono-up text-[10px] text-accent mb-4 flex items-center gap-2">
              <span>&gt;</span>
              <span>./blog</span>
            </p>
            <h1 className="display text-[13vw] sm:text-[9vw] lg:text-[7vw] xl:text-[120px] text-text leading-[0.9]">
              Zapiski o <span className="text-accent glow-soft">AI.</span>
            </h1>
            <p className="text-[16px] lg:text-[18px] text-text-2 leading-[1.7] max-w-[640px] mt-8">
              Praktični članki o umetni inteligenci, avtomatizaciji in razvoju za slovenska podjetja. Brez žargona, z realnimi številkami in primeri iz prakse.
            </p>
          </div>
        </section>

        <section className="relative pb-24 lg:pb-32">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="border-t border-line-2">
              {sorted.map((a, i) => (
                <Reveal key={a.slug} index={i}>
                  <article className="group relative border-b border-line">
                    <Link
                      href={`/blog/${a.slug}`}
                      className="relative grid grid-cols-12 gap-x-6 px-3 py-8 lg:py-12 items-baseline"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-y-0 left-0 bg-accent/[0.05] transition-all duration-700 ease-out w-0 group-hover:w-full"
                      />
                      <span
                        aria-hidden
                        className="absolute left-0 top-0 bottom-0 w-px bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"
                      />
                      <div className="relative col-span-12 lg:col-span-3 flex items-center gap-3 mb-4 lg:mb-0">
                        <span className="mono text-[11px] text-text-4 tabular">[{String(i + 1).padStart(2, "0")}]</span>
                        <span className="mono text-[11px] uppercase tracking-[0.14em] text-text-3 border border-line px-2 py-0.5 group-hover:border-accent group-hover:text-accent transition-colors">
                          {a.category}
                        </span>
                      </div>
                      <div className="relative col-span-12 lg:col-span-6">
                        <h2 className="display text-[24px] lg:text-[34px] text-text leading-tight group-hover:text-accent transition-colors">
                          {a.title}
                        </h2>
                        <p className="text-[14px] lg:text-[15px] text-text-2 leading-[1.65] mt-3 max-w-[560px]">
                          {a.excerpt}
                        </p>
                      </div>
                      <div className="relative col-span-12 lg:col-span-3 mt-4 lg:mt-0 flex lg:flex-col lg:items-end gap-3 lg:gap-1">
                        <span className="mono text-[11px] text-text-3">{a.dateLabel}</span>
                        <span className="mono text-[11px] text-text-4">{a.readMin} min branja</span>
                        <span className="mono text-[11px] text-accent hidden lg:flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          preberi <span aria-hidden>→</span>
                        </span>
                      </div>
                    </Link>
                  </article>
                </Reveal>
              ))}
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
