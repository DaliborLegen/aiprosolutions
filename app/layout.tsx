import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl" className="h-full" suppressHydrationWarning>
      <body className="min-h-full">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
