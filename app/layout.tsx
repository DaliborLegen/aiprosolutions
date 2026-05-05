import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { faqItems } from "./data/faq";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://aiprosolutions.si";
const SITE_NAME = "AI PRO SOLUTIONS";
const SITE_TITLE = "AI PRO SOLUTIONS — AI, razvoj in avtomatizacija za moderna podjetja";
const SITE_DESCRIPTION =
  "Slovensko podjetje za napredne AI rešitve: chatboti, AI agenti, avtomatizacija procesov, razvoj spletnih aplikacij in digitalna transformacija. Od ideje do izvedbe.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | AI PRO SOLUTIONS",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "AI agencija",
    "umetna inteligenca",
    "AI rešitve",
    "AI agenti",
    "chatbot razvoj",
    "avtomatizacija procesov",
    "razvoj spletnih aplikacij",
    "digitalna transformacija",
    "Next.js razvoj",
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
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI PRO SOLUTIONS d.o.o.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  email: "info@aiprosolutions.si",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SI",
  },
  sameAs: [
    "https://ai-agent.si",
    "https://revivio.si",
    "https://profipix.si",
    "https://formatory.si",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </body>
    </html>
  );
}
