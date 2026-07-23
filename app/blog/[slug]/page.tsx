import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import SystemBar from "../../components/SystemBar";
import Background from "../../components/Background";
import Footer from "../../sections/Footer";
import { articles, getArticle, type Block } from "../../data/blog";

const SITE_URL = "https://aiprosolutions.si";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: a.keywords,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      locale: "sl_SI",
      url: `${SITE_URL}/blog/${a.slug}`,
      siteName: "AI PRO SOLUTIONS",
      title: a.metaTitle,
      description: a.metaDescription,
      publishedTime: a.date,
    },
  };
}

function renderBlock(b: Block, i: number) {
  switch (b.t) {
    case "h2":
      return (
        <h2 key={i} className="display text-[26px] lg:text-[34px] text-text leading-tight mt-14 mb-5">
          {b.c}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="display text-[19px] lg:text-[22px] text-text leading-tight mt-9 mb-3">
          {b.c}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-[15px] lg:text-[16px] text-text-2 leading-[1.8] mb-5">
          {b.c}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mb-6 space-y-3">
          {b.items.map((it, j) => (
            <li key={j} className="flex items-start gap-3 text-[15px] lg:text-[16px] text-text-2 leading-[1.7]">
              <span aria-hidden className="text-accent mt-1 shrink-0">→</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mb-6 space-y-3">
          {b.items.map((it, j) => (
            <li key={j} className="flex items-start gap-3 text-[15px] lg:text-[16px] text-text-2 leading-[1.7]">
              <span aria-hidden className="mono text-accent text-[13px] mt-0.5 shrink-0 tabular">{String(j + 1).padStart(2, "0")}</span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-9 border-l-2 border-accent pl-6 py-1">
          <p className="display text-[20px] lg:text-[24px] text-text leading-snug">{b.c}</p>
        </blockquote>
      );
    case "cta":
      return (
        <div key={i} className="my-10 frame frame-corners p-7 lg:p-10">
          <span className="c-tl" />
          <span className="c-br" />
          <p className="text-[15px] lg:text-[17px] text-text-2 leading-[1.6] max-w-[560px] mb-6">{b.c}</p>
          <Link href={b.href} className="btn-primary">
            <span>{b.label}</span>
            <span aria-hidden>↗</span>
          </Link>
        </div>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const others = articles.filter((o) => o.slug !== a.slug).slice(0, 2);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: a.title,
      description: a.metaDescription,
      url: `${SITE_URL}/blog/${a.slug}`,
      datePublished: a.date,
      dateModified: a.date,
      inLanguage: "sl-SI",
      author: { "@type": "Organization", name: "AI PRO SOLUTIONS d.o.o.", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "AI PRO SOLUTIONS d.o.o.",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${a.slug}` },
      keywords: a.keywords.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({
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
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: a.title, item: `${SITE_URL}/blog/${a.slug}` },
      ],
    },
  ];

  return (
    <>
      <Background />
      <SystemBar />
      <main className="relative z-10">
        <Navbar />

        <article className="relative pt-40 lg:pt-48 pb-16">
          <div className="max-w-[820px] mx-auto px-4 lg:px-8">
            <nav aria-label="Drobtinice" className="mono text-[11px] text-text-3 mb-8 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-accent transition-colors">domov</Link>
              <span className="text-text-4">/</span>
              <Link href="/blog" className="hover:text-accent transition-colors">blog</Link>
              <span className="text-text-4">/</span>
              <span className="text-accent truncate max-w-[240px]">{a.slug}</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="mono text-[11px] uppercase tracking-[0.14em] text-accent border border-accent/40 px-2.5 py-0.5">
                {a.category}
              </span>
              <span className="mono text-[11px] text-text-3">{a.dateLabel}</span>
              <span className="mono text-[11px] text-text-4">· {a.readMin} min branja</span>
            </div>

            <h1 className="display text-[8vw] sm:text-[42px] lg:text-[52px] text-text leading-[1.02] mb-8">
              {a.title}
            </h1>

            <div className="rule-accent mb-10" />

            <div className="article-body">
              {a.blocks.map((b, i) => renderBlock(b, i))}
            </div>

            {/* FAQ */}
            <section className="mt-16 pt-10 border-t border-line">
              <p className="mono-up text-[10px] text-accent mb-8 flex items-center gap-2">
                <span>&gt;</span>
                <span>pogosta_vprasanja</span>
              </p>
              <div className="divide-y divide-line border-y border-line">
                {a.faq.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="cursor-pointer list-none flex items-baseline justify-between gap-6">
                      <h2 className="display text-[17px] lg:text-[19px] text-text group-hover:text-accent transition-colors">
                        {f.q}
                      </h2>
                      <span aria-hidden className="mono text-accent text-[14px] group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="text-[14px] lg:text-[15px] text-text-2 leading-[1.7] mt-4">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* related services */}
            {a.related && a.related.length > 0 && (
              <section className="mt-14">
                <p className="mono-up text-[10px] text-accent mb-5 flex items-center gap-2">
                  <span>&gt;</span>
                  <span>povezane_storitve</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {a.related.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="mono text-[11px] uppercase tracking-[0.14em] text-text-2 border border-line px-4 py-2.5 hover:border-accent hover:text-accent transition-colors"
                    >
                      {r.label}
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>

        {/* more articles */}
        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <p className="mono-up text-[10px] text-accent mb-8 flex items-center gap-2">
              <span>&gt;</span>
              <span>naslednje_branje</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
              {others.map((o) => (
                <Link key={o.slug} href={`/blog/${o.slug}`} className="group bg-void p-7 lg:p-9 block">
                  <span className="mono text-[11px] uppercase tracking-[0.14em] text-text-3 group-hover:text-accent transition-colors">
                    {o.category}
                  </span>
                  <h3 className="display text-[22px] lg:text-[26px] text-text mt-3 leading-tight group-hover:text-accent transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-[14px] text-text-2 leading-[1.6] mt-3">{o.excerpt}</p>
                  <span className="mono text-[11px] text-accent mt-4 inline-flex items-center gap-1">
                    preberi <span aria-hidden className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </Link>
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
