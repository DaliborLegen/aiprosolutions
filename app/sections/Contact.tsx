"use client";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", company: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3.5 text-sm text-primary placeholder-tertiary focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/15 transition-all duration-300";

  return (
    <section id="kontakt" className="relative z-10 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <p className="text-xs font-semibold text-accent tracking-[0.25em] uppercase mb-3">Kontakt</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-6">
              Začnimo
              <br />
              <span className="grad-text">skupaj graditi</span>
            </h2>
            <p className="text-secondary leading-relaxed mb-10">
              Imate idejo ali izziv? Pišite nam in odgovorili vam bomo v najkrajšem možnem času.
              Brezplačna začetna konzultacija.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono text-tertiary uppercase tracking-wider mb-1">E-pošta</p>
                <p className="text-sm text-primary font-medium">info@aiprosolutions.si</p>
              </div>
              <div>
                <p className="text-xs font-mono text-tertiary uppercase tracking-wider mb-1">Lokacija</p>
                <p className="text-sm text-primary font-medium">Slovenija</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            {status === "sent" ? (
              <div className="card rounded-2xl p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <p className="text-lg font-bold text-primary mb-2">Sporočilo poslano!</p>
                <p className="text-sm text-secondary">Odgovorili vam bomo v najkrajšem možnem času.</p>
                <button onClick={() => setStatus("idle")} className="text-sm text-accent hover:text-accent-cyan transition-colors font-medium mt-6">
                  Pošljite novo sporočilo
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="card rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-tertiary uppercase tracking-wider mb-2 block">Ime *</label>
                      <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} required placeholder="Vaše ime" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs text-tertiary uppercase tracking-wider mb-2 block">Podjetje</label>
                      <input type="text" value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Ime podjetja" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-tertiary uppercase tracking-wider mb-2 block">E-pošta *</label>
                    <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required placeholder="vas@podjetje.si" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs text-tertiary uppercase tracking-wider mb-2 block">Sporočilo *</label>
                    <textarea value={form.message} onChange={(e) => update("message", e.target.value)} required rows={4} placeholder="Opišite vaš projekt ali izziv..." className={`${inputClass} resize-none`} />
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400 mt-4">Napaka pri pošiljanju. Poskusite znova.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-6 w-full grad-bg text-white font-semibold py-4 rounded-xl text-sm hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 disabled:opacity-50"
                >
                  {status === "sending" ? "Pošiljam..." : "Pošljite povpraševanje →"}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
