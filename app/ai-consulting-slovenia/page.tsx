import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import SystemBar from "../components/SystemBar";
import Background from "../components/Background";
import Footer from "../sections/Footer";

const SITE_URL = "https://aiprosolutions.si";

const TITLE = "AI Consulting in Slovenia: Conversational AI and Automation";
const DESCRIPTION =
  "Slovenian AI consultancy building conversational AI, autonomous agents and process automation for companies in Slovenia and the EU. Fixed quotes, first results in 2 to 3 weeks.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ai consulting slovenia",
    "ai consultants slovenia",
    "conversational ai consultants slovenia",
    "ai consultancy slovenia",
    "ai consultant slovenia",
    "ai development company slovenia",
  ],
  alternates: {
    canonical: "/ai-consulting-slovenia",
    languages: {
      "sl-SI": `${SITE_URL}/storitve/ai-svetovanje`,
      "en": `${SITE_URL}/ai-consulting-slovenia`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `${SITE_URL}/ai-consulting-slovenia`,
    siteName: "AI PRO SOLUTIONS",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const services = [
  {
    t: "Conversational AI",
    d: "Customer-facing chatbots and internal assistants that answer from your own documents and cite the source, in English, Slovenian, German or Croatian.",
  },
  {
    t: "AI agents",
    d: "Agents that complete a task end to end inside your systems: read the input, decide within set rules, write the result, notify the owner.",
  },
  {
    t: "Process automation",
    d: "Connecting CRM, ERP, email and spreadsheets so data moves on its own, with clear error handling and a full audit trail.",
  },
  {
    t: "Strategy and assessment",
    d: "A written review of your processes with estimated savings per process and an implementation plan ordered by payback, not by hype.",
  },
];

const faq = [
  {
    q: "What does an AI consultant in Slovenia actually do?",
    a: "We review your processes, identify where AI pays for itself, and then build the solution rather than hand over a slide deck. Engagements start with a free 30-minute call, followed by a fixed-price proposal with a delivery date.",
  },
  {
    q: "How much does AI consulting cost?",
    a: "A written process assessment starts at 900 EUR and is deducted from the project if you proceed. A chatbot or a single automated process starts at 1,500 EUR, an AI agent with system integrations at 4,000 EUR. All quotes are fixed before work begins.",
  },
  {
    q: "Do you work with companies outside Slovenia?",
    a: "Yes. We work remotely with clients across Slovenia and the EU. Meetings are held in English or Slovenian, and invoicing is within the EU with a valid VAT number.",
  },
  {
    q: "How do you handle GDPR and data protection?",
    a: "Solutions are designed for data minimisation: only the data needed for the task reaches the model. We use business tiers where content is not used for model training, with data processing agreements in place with each provider.",
  },
  {
    q: "Who owns the code and the data?",
    a: "You do. On delivery you receive the full source code, all account access and the documentation. Ongoing maintenance is optional, never a condition.",
  },
];

export default function AiConsultingSloveniaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "AI PRO SOLUTIONS d.o.o.",
      description: DESCRIPTION,
      url: `${SITE_URL}/ai-consulting-slovenia`,
      email: "info@aiprosolutions.si",
      telephone: "+386 40 223 883",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ulica Svobode 65",
        postalCode: "6330",
        addressLocality: "Piran",
        addressCountry: "SI",
      },
      areaServed: [
        { "@type": "Country", name: "Slovenia" },
        { "@type": "Place", name: "European Union" },
      ],
      knowsLanguage: ["sl", "en"],
      serviceType: [
        "AI consulting",
        "Conversational AI",
        "Business process automation",
        "Custom software development",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "en",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <Background />
      <SystemBar />
      <main className="relative z-10" lang="en">
        <Navbar />

        <section className="relative pt-44 lg:pt-52 pb-14 lg:pb-20">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <nav aria-label="Breadcrumb" className="mono text-[11px] text-text-3 mb-8 flex items-center gap-2">
              <Link href="/" className="hover:text-accent transition-colors">home</Link>
              <span className="text-text-4">/</span>
              <span className="text-accent">ai consulting slovenia</span>
            </nav>
            <h1 className="display text-[13vw] sm:text-[9vw] lg:text-[7vw] xl:text-[110px] text-text leading-[0.9]">
              AI consulting
              <br />
              <span className="text-accent glow-soft">in Slovenia.</span>
            </h1>
            <p className="text-[16px] lg:text-[18px] text-text-2 leading-[1.7] max-w-[720px] mt-8">
              AI PRO SOLUTIONS d.o.o. is a Slovenian AI consultancy and development studio
              based in Piran. We help companies in Slovenia and across the EU put
              conversational AI, autonomous agents and process automation into production,
              and we build what we recommend instead of stopping at advice.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/#kontakt" className="btn-primary">
                <span>Book a free call</span>
                <span aria-hidden>↗</span>
              </Link>
              <Link href="/cene" className="btn-ghost">
                <span>Pricing</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <p className="mono-up text-[10px] text-accent mb-10 flex items-center gap-2">
              <span>&gt;</span>
              <span>what_we_do</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
              {services.map((s, i) => (
                <div key={s.t} className="bg-void p-6 lg:p-8">
                  <span className="mono text-[11px] text-text-4 tabular">[0{i + 1}]</span>
                  <h2 className="display text-[22px] text-text mt-3 leading-tight">{s.t}</h2>
                  <p className="text-[14px] text-text-2 leading-[1.65] mt-3">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="display text-[26px] lg:text-[32px] text-text leading-tight mb-5">
                How an engagement runs
              </h2>
              <div className="space-y-4 text-[15px] text-text-2 leading-[1.75]">
                <p>
                  It starts with a free 30-minute call in which we map the process you want
                  to improve and say plainly whether AI is the right tool for it. If it is
                  not, we say so, which saves both sides a quarter of wasted effort.
                </p>
                <p>
                  What follows is a fixed-price proposal with a delivery date. Small
                  solutions reach production in two to three weeks, larger integrations in
                  four to eight. We deliberately start with one narrow process so the effect
                  is measurable before the scope grows.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <h2 className="display text-[26px] lg:text-[32px] text-text leading-tight mb-5">
                Why a local partner
              </h2>
              <div className="space-y-4 text-[15px] text-text-2 leading-[1.75]">
                <p>
                  Slovenian is a small language, and generic international vendors tend to
                  treat it as an afterthought. Our assistants handle Slovenian, including
                  industry terminology and correct forms of address, which matters the moment
                  a real customer starts typing.
                </p>
                <p>
                  Being in the same time zone and legal framework also helps. Contracts,
                  invoicing and data processing agreements are EU-based, and you can reach a
                  person who worked on your system rather than a ticket queue.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <p className="mono-up text-[10px] text-accent mb-10 flex items-center gap-2">
              <span>&gt;</span>
              <span>faq</span>
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
            <p className="mono text-[12px] text-text-3 mt-10">
              Slovensko?{" "}
              <Link href="/storitve/ai-svetovanje" className="text-accent hover:underline">
                Preberite stran o AI svetovanju
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="relative py-14 lg:py-20 border-t border-line">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="frame frame-corners p-8 lg:p-14 text-center">
              <span className="c-tl" />
              <span className="c-br" />
              <h2 className="display text-[8vw] lg:text-[48px] text-text leading-tight">
                Tell us the process, <span className="text-accent glow-soft">we will scope it.</span>
              </h2>
              <p className="mono text-[12px] text-text-3 mt-4 max-w-[520px] mx-auto">
                Free 30-minute call, no obligation. We reply within 24 hours.
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
