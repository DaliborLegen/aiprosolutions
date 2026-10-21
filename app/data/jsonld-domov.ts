import { faqItems } from "./faq";

const SITE_URL = "https://aiprosolutions.si";

// Strukturirani podatki samo za domačo stran: storitve in FAQ, ki sta vidna tam.
// Na podstraneh bi se podvajala z njihovim lastnim FAQPage.
const services = [
  {
    name: "Razvoj AI rešitev in chatbotov",
    description:
      "Razvoj inteligentnih chatbotov, AI agentov in integracij z LLM-i (OpenAI, Claude, Gemini) za podporo strankam, prodajo in interne procese.",
  },
  {
    name: "Razvoj programske opreme po meri",
    description:
      "Razvoj poslovnih aplikacij, internih orodij in API integracij, prilagojenih specifičnim potrebam podjetja.",
  },
  {
    name: "Razvoj spletnih strani in aplikacij",
    description:
      "Hitre, odzivne in SEO-optimizirane spletne strani ter aplikacije v Next.js in React.",
  },
  {
    name: "Avtomatizacija poslovnih procesov",
    description:
      "Povezovanje sistemov, odpravljanje ročnega dela in implementacija avtomatiziranih delovnih tokov.",
  },
  {
    name: "IT svetovanje in digitalna transformacija",
    description:
      "Strateško svetovanje za izbiro pravih tehnologij in celovita digitalizacija poslovanja.",
  },
  {
    name: "SEO in GEO optimizacija",
    description:
      "SEO optimizacija za Google in optimizacija za AI iskalnike (ChatGPT, Gemini, Perplexity): tehnični pregled, strukturirani podatki, vsebine in mesečne meritve.",
  },
  {
    name: "AI video in avdio produkcija",
    description:
      "Profesionalna produkcija video in avdio vsebin s pomočjo umetne inteligence.",
  },
];

export const servicesJsonLd = services.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  description: s.description,
  provider: {
    "@type": "Organization",
    name: "AI PRO SOLUTIONS d.o.o.",
    url: SITE_URL,
  },
  areaServed: { "@type": "Country", name: "Slovenija" },
}));

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

