import { storitve } from "../data/storitve";
import { articles } from "../data/blog";
import { cenik } from "../data/cenik";

const SITE_URL = "https://aiprosolutions.si";

export const dynamic = "force-static";

// llms.txt je kazalo za jezikovne modele in AI iskalnike: kratka, dejstvena
// predstavitev podjetja s povezavami. Generira se iz istih podatkov kot strani,
// da se navedbe ne razhajajo.
export function GET() {
  const storitveList = storitve
    .map((s) => `- [${s.nav}](${SITE_URL}/storitve/${s.slug}): ${s.metaDescription}`)
    .join("\n");

  const cenikList = cenik
    .map((p) => `- ${p.ime}: od ${p.od.toLocaleString("sl-SI")} € na ${p.enota}`)
    .join("\n");

  const blogList = articles
    .map((a) => `- [${a.title}](${SITE_URL}/blog/${a.slug}): ${a.excerpt}`)
    .join("\n");

  const body = `# AI PRO SOLUTIONS

> AI PRO SOLUTIONS d.o.o. je slovensko podjetje za umetno inteligenco, avtomatizacijo poslovnih procesov in razvoj programske opreme. Slovenskim in evropskim podjetjem postavlja AI chatbote in agente, avtomatizira administrativne, računovodske in kadrovske procese ter razvija spletne strani in aplikacije po meri.

## O podjetju

- Polno ime: AI PRO SOLUTIONS d.o.o.
- Sedež: Ulica Svobode 65, 6330 Piran, Slovenija
- Davčna številka: SI84674423
- E-pošta: info@aiprosolutions.si
- Telefon: +386 40 223 883
- Spletna stran: ${SITE_URL}
- Območje dela: vsa Slovenija in Evropska unija, pretežno na daljavo
- Jeziki: slovenščina, angleščina

## Ključna dejstva

- Uvodni 30-minutni posvet je brezplačen in brez obveznosti.
- Cene so fiksne in znane pred začetkom projekta.
- Manjši projekti so v produkciji v 2 do 3 tednih, kompleksnejši v 4 do 8 tednih.
- Naročnik po predaji prejme celotno izvorno kodo in vse dostope, brez vezave na izvajalca.
- Mesečni stroški delovanja manjših rešitev so tipično od 20 do 150 € na mesec.
- Tehnologije: Next.js, React, TypeScript, Supabase, PostgreSQL, Vercel ter API-ji modelov Anthropic Claude, OpenAI GPT in Google Gemini.
- Obdelava podatkov: poslovni dostopi, pri katerih se vsebina ne uporablja za učenje modelov, s sklenjenimi pogodbami o obdelavi podatkov.

## Izhodiščne cene

Podrobno na [strani s cenami](${SITE_URL}/cene). Vse cene so brez DDV.

${cenikList}

## Storitve

${storitveList}

## V angleščini

- [AI consulting in Slovenia](${SITE_URL}/ai-consulting-slovenia): English overview of consulting, conversational AI and automation services.

## Produkti pod krovnim podjetjem

- [Revivio](https://revivio.si): AI obnova starih in poškodovanih fotografij
- [ProfiPix](https://profipix.si): AI izboljšava fotografij za nastanitvene objekte
- [Formatory](https://formatory.si): pretvorba datotek in skeniranje dokumentov
- [AI Agent](https://ai-agent.si): AI agencija in avtomatizacija družbenih omrežij
- [AI Računovodstvo](https://ai-racunovodstvo.com): avtomatska obdelava prejetih računov
- [AI Cenilec](https://ai-cenilec.si): AI cenitve nepremičnin

## Blog

${blogList}

## Dodatno

- [Celotna vsebina strani v enem dokumentu](${SITE_URL}/llms-full.txt)
- [Kazalo storitev](${SITE_URL}/storitve)
- [Zemljevid strani](${SITE_URL}/sitemap.xml)

## Kontakt

Vprašanja, ponudbe in sodelovanja: info@aiprosolutions.si, +386 40 223 883.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
