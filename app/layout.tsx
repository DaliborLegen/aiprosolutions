import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { faqItems } from "./data/faq";
import GoogleAnalytics from "./components/GoogleAnalytics";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
  display: "swap",
  axes: ["wdth", "opsz"],
});

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://aiprosolutions.si";
const SITE_NAME = "AI PRO SOLUTIONS";
const SITE_TITLE =
  "AI PRO SOLUTIONS: umetna inteligenca in avtomatizacija procesov za podjetja";
const SITE_DESCRIPTION =
  "Slovensko podjetje za AI rešitve in avtomatizacijo poslovnih procesov: AI chatboti in agenti, avtomatizacija administracije, računovodstva in kadrov, spletne aplikacije. Prva rešitev v produkciji v 2 do 3 tednih, od 1.500 €.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | AI PRO SOLUTIONS",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "avtomatizacija poslovnih procesov",
    "avtomatizacija procesov",
    "avtomatizacija poslovanja",
    "AI avtomatizacija",
    "umetna inteligenca za podjetja",
    "AI rešitve za podjetja",
    "AI agencija",
    "AI agenti",
    "AI chatbot za podjetja",
    "interni chatbot",
    "avtomatizirano računovodstvo",
    "poslovna inteligenca",
    "izdelava spletnih aplikacij",
    "izdelava spletnih strani",
    "AI svetovanje",
    "AI video za podjetja",
    "Slovenija",
  ],
  authors: [{ name: "AI PRO SOLUTIONS d.o.o." }],
  creator: "AI PRO SOLUTIONS d.o.o.",
  publisher: "AI PRO SOLUTIONS d.o.o.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "AI PRO SOLUTIONS d.o.o.",
  alternateName: ["AI PRO SOLUTIONS", "AIProSolutions"],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  email: "info@aiprosolutions.si",
  telephone: "+386 40 223 883",
  vatID: "SI84674423",
  taxID: "84674423",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ulica Svobode 65",
    postalCode: "6330",
    addressLocality: "Piran",
    addressRegion: "Obalno-kraška",
    addressCountry: "SI",
  },
  areaServed: [
    { "@type": "Country", name: "Slovenija" },
    { "@type": "Place", name: "Evropska unija" },
  ],
  knowsLanguage: ["sl", "en"],
  knowsAbout: [
    "avtomatizacija poslovnih procesov",
    "umetna inteligenca v podjetjih",
    "AI chatboti in AI agenti",
    "obdelava dokumentov in računov z umetno inteligenco",
    "poslovna inteligenca in analitika",
    "razvoj spletnih strani in aplikacij",
    "GDPR pri uporabi umetne inteligence",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@aiprosolutions.si",
      telephone: "+386 40 223 883",
      availableLanguage: ["Slovenian", "English"],
      areaServed: "EU",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "AI chatbot za podporo strankam",
      url: `${SITE_URL}/storitve/ai-chatbot`,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 1500,
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
    },
    {
      "@type": "Offer",
      name: "Avtomatizacija poslovnega procesa",
      url: `${SITE_URL}/storitve/avtomatizacija-poslovnih-procesov`,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 1500,
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
    },
    {
      "@type": "Offer",
      name: "AI agent z integracijami",
      url: `${SITE_URL}/storitve/ai-agenti`,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 4000,
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
    },
  ],
  sameAs: [
    "https://ai-agent.si",
    "https://revivio.si",
    "https://profipix.si",
    "https://formatory.si",
    "https://ai-racunovodstvo.com",
    "https://ai-cenilec.si",
    "https://www.linkedin.com/in/dalibor-legen-83b4ab2b8",
    "https://github.com/DaliborLegen",
    "https://www.instagram.com/aiprosolutions_slovenija",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "sl-SI",
  publisher: { "@type": "Organization", name: "AI PRO SOLUTIONS d.o.o." },
};

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
    name: "AI video in avdio produkcija",
    description:
      "Profesionalna produkcija video in avdio vsebin s pomočjo umetne inteligence.",
  },
];

const servicesJsonLd = services.map((s) => ({
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

const faqJsonLd = {
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

const jsonLdGraph = [organizationJsonLd, websiteJsonLd, ...servicesJsonLd, faqJsonLd];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="sl"
      className={`${bricolage.variable} ${geist.variable} ${jetbrainsMono.variable} h-full dark`}
      suppressHydrationWarning
    >
      <body className="relative min-h-full bg-void text-text antialiased noise scanlines">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
