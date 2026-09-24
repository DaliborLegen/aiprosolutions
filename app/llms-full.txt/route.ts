import { storitve } from "../data/storitve";
import { articles } from "../data/blog";
import { cenik, cenikFaq } from "../data/cenik";
import { faqItems } from "../data/faq";

const SITE_URL = "https://aiprosolutions.si";

export const dynamic = "force-static";

const eur = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


// llms-full.txt vsebuje celotno besedilo strani v enem dokumentu, da jezikovni
// model ali AI iskalnik dobi vso vsebino brez obiskovanja posameznih strani.
export function GET() {
  const parts: string[] = [];

  parts.push(`# AI PRO SOLUTIONS d.o.o.: celotna vsebina spletne strani

Vir: ${SITE_URL}
Zadnja posodobitev: ${new Date().toISOString().slice(0, 10)}

AI PRO SOLUTIONS d.o.o. je slovensko podjetje za umetno inteligenco, avtomatizacijo
poslovnih procesov in razvoj programske opreme. Sedež je na Ulici Svobode 65, 6330 Piran,
davčna številka SI84674423, kontakt info@aiprosolutions.si in +386 40 223 883.
Delo poteka pretežno na daljavo, s strankami po vsej Sloveniji in v Evropski uniji.
`);

  parts.push(`## Pogosta vprašanja o podjetju\n`);
  for (const f of faqItems) {
    parts.push(`### ${f.q}\n\n${f.a}\n`);
  }

  parts.push(`## Cenik (brez DDV)\n`);
  for (const p of cenik) {
    parts.push(
      `### ${p.ime}: od ${eur(p.od)} € na ${p.enota}\n\n${p.opis}\n\nVključeno: ${p.vkljuceno.join("; ")}.\n`
    );
  }
  parts.push(`### Pogosta vprašanja o cenah\n`);
  for (const f of cenikFaq) {
    parts.push(`**${f.q}**\n\n${f.a}\n`);
  }

  parts.push(`## Storitve\n`);
  for (const s of storitve) {
    parts.push(`### ${s.nav}\n\nURL: ${SITE_URL}/storitve/${s.slug}\n\n${s.intro}\n`);
    parts.push(s.bullets.map((b) => `- ${b.t}: ${b.d}`).join("\n") + "\n");
    for (const sec of s.body) {
      parts.push(`#### ${sec.h}\n\n${sec.p.join("\n\n")}\n`);
    }
    parts.push(`Primeri uporabe: ${s.useCases.join("; ")}.\n`);
    parts.push(
      s.faq.map((f) => `**${f.q}**\n\n${f.a}`).join("\n\n") + "\n"
    );
  }

  parts.push(`## Članki\n`);
  for (const a of articles) {
    parts.push(`### ${a.title}\n\nURL: ${SITE_URL}/blog/${a.slug}\nObjavljeno: ${a.date}\n\n${a.excerpt}\n`);
    for (const b of a.blocks) {
      if (b.t === "h2") parts.push(`#### ${b.c}\n`);
      else if (b.t === "h3") parts.push(`##### ${b.c}\n`);
      else if (b.t === "p") parts.push(`${b.c}\n`);
      else if (b.t === "quote") parts.push(`> ${b.c}\n`);
      else if (b.t === "ul" || b.t === "ol")
        parts.push(b.items.map((i) => `- ${i}`).join("\n") + "\n");
    }
    parts.push(a.faq.map((f) => `**${f.q}**\n\n${f.a}`).join("\n\n") + "\n");
  }

  parts.push(`## Povezani produkti

- Revivio (https://revivio.si): AI obnova starih in poškodovanih fotografij
- ProfiPix (https://profipix.si): AI izboljšava fotografij za nastanitvene objekte
- Formatory (https://formatory.si): pretvorba datotek in skeniranje dokumentov
- AI Agent (https://ai-agent.si): AI agencija in avtomatizacija družbenih omrežij
- AI Računovodstvo (https://ai-racunovodstvo.com): avtomatska obdelava prejetih računov
- AI Cenilec (https://ai-cenilec.si): AI cenitve nepremičnin
- AI Arhitekt (https://ai-arhitekt.si): kaj je na parceli sploh dovoljeno graditi, po prostorskih aktih

## Kontakt

E-pošta: info@aiprosolutions.si
Telefon: +386 40 223 883
Naslov: Ulica Svobode 65, 6330 Piran, Slovenija
`);

  return new Response(parts.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
