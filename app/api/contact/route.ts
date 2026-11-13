import { NextRequest, NextResponse } from "next/server";

// Zascita pred roboti (1. sloj): past polje, cas izpolnjevanja, preverjanje vsebine, omejitev po IP.
// Robot dobi odgovor "ok", da ne ve, da je bil ustavljen.

const MIN_CAS_MS = 3000;
const OKNO_MS = 60 * 60 * 1000;
const NAJVEC_NA_OKNO = 5;

// V pomnilniku instance: na Vercelu velja po najboljsih moceh (vsaka instanca steje zase).
const oddaje = new Map<string, number[]>();

function prevecOddaj(ip: string): boolean {
  const zdaj = Date.now();
  const nedavne = (oddaje.get(ip) ?? []).filter((t) => zdaj - t < OKNO_MS);
  if (nedavne.length >= NAJVEC_NA_OKNO) {
    oddaje.set(ip, nedavne);
    return true;
  }
  nedavne.push(zdaj);
  oddaje.set(ip, nedavne);
  if (oddaje.size > 5000) {
    for (const [k, v] of oddaje) {
      if (v.every((t) => zdaj - t >= OKNO_MS)) oddaje.delete(k);
    }
  }
  return false;
}

// Stevilo prehodov mala -> velika crka znotraj besede ("rrYCEYkEkfgaofOLdR" jih ima 5, "McDonald" 1).
function prehodi(s: string): number {
  return (s.match(/\p{Ll}\p{Lu}/gu) ?? []).length;
}

function nesmiselnoIme(s: string): boolean {
  const t = s.trim();
  return !/\s/.test(t) && prehodi(t) >= 3;
}

function nesmiselnoSporocilo(s: string): boolean {
  const t = s.trim();
  if (/\s/.test(t)) return false;
  return t.length >= 15 || prehodi(t) >= 3;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Vsa polja so obvezna" }, { status: 400 });
    }

    let razlog = "";
    if (typeof body.potrditev === "string" && body.potrditev.length > 0) razlog = "past polje";
    else if (typeof body.t !== "number" || body.t < MIN_CAS_MS) razlog = "prehitra oddaja";
    else if (nesmiselnoSporocilo(message)) razlog = "nesmiselno sporocilo";
    else if (nesmiselnoIme(name)) razlog = "nesmiselno ime";

    if (razlog) {
      console.log(`[contact] zavrnjeno kot robot: ${razlog}`);
      return NextResponse.json({ ok: true });
    }

    const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "neznan";
    if (prevecOddaj(ip)) {
      console.log("[contact] zavrnjeno: prevec oddaj z istega IP");
      return NextResponse.json({ error: "Prevec oddaj, poskusite kasneje" }, { status: 429 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "AI Pro Solutions <kontakt@aiprosolutions.si>",
        to: "dalibor.legen@gmail.com",
        cc: "info@aiprosolutions.si",
        replyTo: email,
        subject: `Novo povpraševanje od ${name}`,
        html: `
          <h2>Novo povpraševanje — AI Pro Solutions</h2>
          <p><strong>Ime:</strong> ${esc(name)}</p>
          <p><strong>Podjetje:</strong> ${esc(company) || "-"}</p>
          <p><strong>E-pošta:</strong> ${esc(email)}</p>
          <p><strong>Sporočilo:</strong></p>
          <p>${esc(message).replace(/\n/g, "<br>")}</p>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Napaka pri posiljanju" }, { status: 500 });
  }
}
