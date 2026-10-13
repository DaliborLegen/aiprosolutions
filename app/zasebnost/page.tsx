import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import SystemBar from "../components/SystemBar";
import Background from "../components/Background";
import Footer from "../sections/Footer";
import { CookieSettingsButton } from "../components/CookieConsent";

export const metadata: Metadata = {
  title: "Politika zasebnosti",
  description: "Kako AI PRO Solutions d.o.o. obdeluje osebne podatke obiskovalcev spletne strani aiprosolutions.si.",
  alternates: { canonical: "/zasebnost" },
  robots: { index: true, follow: true },
};

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="display text-[26px] lg:text-[32px] text-text mt-12 mb-4">{children}</h2>
);

export default function ZasebnostPage() {
  return (
    <>
      <Background />
      <SystemBar />
      <main className="relative z-10">
      <Navbar />
      <div className="max-w-[820px] mx-auto px-4 lg:px-8 pt-32 pb-24 text-[16px] leading-relaxed text-text-2">
        <p className="mono text-[10px] uppercase tracking-[0.2em] text-text-3 mb-4">
          <span className="text-accent">&gt;</span> pravno
        </p>
        <h1 className="display display-tight text-[44px] lg:text-[72px] text-text leading-[0.95]">Politika zasebnosti</h1>
        <p className="mt-6">Velja od 13. 10. 2026.</p>

        <H>Upravljavec</H>
        <p>
          AI PRO Solutions d.o.o., Ulica Svobode 65, 6330 Piran, Slovenija. Davčna številka 84674423.
          Kontakt za vprašanja o osebnih podatkih:{" "}
          <a className="text-accent" href="mailto:info@aiprosolutions.si">info@aiprosolutions.si</a>, telefon +386 40 223 883.
        </p>

        <H>Katere podatke obdelujemo</H>
        <p className="mb-4">
          <b className="text-text">Kontaktni obrazec.</b> Ko nam pišete, prejmemo ime, podjetje (če ga vpišete), e-poštni naslov in sporočilo.
          Podatke uporabimo samo za odgovor na vaše povpraševanje in morebitno pripravo ponudbe. Pravna podlaga je
          izvajanje ukrepov pred sklenitvijo pogodbe na vašo zahtevo (člen 6(1)(b) GDPR). Sporočila hranimo, dokler je to
          potrebno za komunikacijo z vami, in največ 2 leti po zadnjem stiku, razen če iz sodelovanja nastane pogodba.
        </p>
        <p className="mb-4">
          <b className="text-text">Analitika (samo s soglasjem).</b> Če kliknete »Sprejmi«, uporabimo Google Analytics 4,
          ki z analitičnimi piškotki meri obiske (katere strani so obiskane, od kod pride obisk, vrsta naprave).
          Brez vašega soglasja se Google Analytics ne naloži. Pravna podlaga je vaše soglasje (člen 6(1)(a) GDPR),
          ki ga lahko kadarkoli prekličete.
        </p>
        <p>
          <b className="text-text">Tehnični dnevniki.</b> Gostitelj strani ob vsakem obisku samodejno beleži tehnične podatke
          (IP naslov, čas, zahtevano stran), potrebne za delovanje in varnost strani (zakoniti interes, člen 6(1)(f) GDPR).
        </p>

        <H>Piškotki</H>
        <p>
          Stran brez vašega soglasja ne uporablja piškotkov za sledenje. Analitični piškotki Google Analytics
          (<span className="mono text-[13px]">_ga</span>, <span className="mono text-[13px]">_ga_*</span>, trajanje do 2 let)
          se nastavijo samo po kliku »Sprejmi«. Vašo izbiro hranimo v brskalniku (localStorage). Izbiro lahko spremenite tukaj:{" "}
          <CookieSettingsButton className="text-accent underline underline-offset-2 cursor-pointer" />.
        </p>

        <H>Obdelovalci</H>
        <ul className="list-disc pl-5 space-y-2">
          <li>Vercel Inc. (gostovanje strani), z ustreznimi zaščitnimi ukrepi za prenos podatkov (standardne pogodbene klavzule EU).</li>
          <li>Resend (pošiljanje sporočil s kontaktnega obrazca), obdelava v regiji EU (Frankfurt).</li>
          <li>Google Ireland Ltd. (Google Analytics), samo če ste dali soglasje.</li>
        </ul>

        <H>Vaše pravice</H>
        <p>
          Imate pravico do dostopa, popravka, izbrisa, omejitve obdelave, ugovora in prenosljivosti podatkov ter
          pravico do preklica soglasja. Zahtevo pošljite na{" "}
          <a className="text-accent" href="mailto:info@aiprosolutions.si">info@aiprosolutions.si</a>, odgovorimo v enem mesecu.
          Če menite, da podatke obdelujemo nezakonito, se lahko pritožite pri Informacijskem pooblaščencu
          (Dunajska cesta 22, 1000 Ljubljana, <a className="text-accent" href="https://www.ip-rs.si" target="_blank" rel="noopener noreferrer">www.ip-rs.si</a>).
        </p>
      </div>
      <Footer />
      </main>
    </>
  );
}
