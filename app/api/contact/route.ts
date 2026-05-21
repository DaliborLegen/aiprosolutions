import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Vsa polja so obvezna" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "AI Pro Solutions <kontakt@aiprosolutions.si>",
        to: "info@aiprosolutions.si",
        replyTo: email,
        subject: `Novo povpraševanje od ${name}`,
        html: `
          <h2>Novo povpraševanje — AI Pro Solutions</h2>
          <p><strong>Ime:</strong> ${name}</p>
          <p><strong>E-pošta:</strong> ${email}</p>
          <p><strong>Sporočilo:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Napaka pri posiljanju" }, { status: 500 });
  }
}
