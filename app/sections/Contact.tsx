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

  const inputClass =
    "w-full bg-transparent border-b border-rule pb-3 pt-1 text-ink placeholder-ink-faint focus:outline-none focus:border-ink transition-colors duration-300 serif text-[17px]";

  return (
    <section id="kontakt" className="relative py-32 lg:py-44 bg-paper-soft">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-20 lg:mb-24">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              <p className="label">— 07 / Kontakt</p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-4 lg:mt-0">
              <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6.5vw] xl:text-[104px] text-ink leading-[0.9]">
                Začnimo
                <br />
                <span className="display-italic text-terracotta">korespondenco.</span>
              </h2>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <AnimatedSection className="col-span-12 lg:col-span-4">
            <p className="serif text-[18px] lg:text-[19px] text-ink-soft leading-[1.55] mb-12">
              Imate idejo, izziv ali samo radovednost? Pošljite nam povpraševanje. Brezplačna začetna konzultacija, odgovor v <em className="italic text-ink">24 urah</em>.
            </p>

            <div className="space-y-8">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-2">
                  E-pošta
                </p>
                <a
                  href="mailto:info@aiprosolutions.si"
                  className="display text-[20px] lg:text-[24px] text-ink hover:text-terracotta transition-colors"
                >
                  info@aiprosolutions.si
                </a>
              </div>
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-2">
                  Lokacija
                </p>
                <p className="display text-[20px] lg:text-[24px] text-ink">
                  Slovenija <span className="display-italic text-ink-mute">— EU</span>
                </p>
              </div>
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-2">
                  Splet
                </p>
                <div className="flex flex-col gap-1.5 mt-1">
                  <a href="https://www.linkedin.com/in/dalibor-legen-83b4ab2b8" target="_blank" rel="noopener noreferrer" className="serif text-[15px] text-ink-soft hover:text-ink link-ed inline-block w-fit">
                    LinkedIn ↗
                  </a>
                  <a href="https://github.com/DaliborLegen" target="_blank" rel="noopener noreferrer" className="serif text-[15px] text-ink-soft hover:text-ink link-ed inline-block w-fit">
                    GitHub ↗
                  </a>
                  <a href="https://www.instagram.com/aiprosolutions_slovenija" target="_blank" rel="noopener noreferrer" className="serif text-[15px] text-ink-soft hover:text-ink link-ed inline-block w-fit">
                    Instagram ↗
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="col-span-12 lg:col-span-8 lg:col-start-5">
            {status === "sent" ? (
              <div className="border border-ink p-12 lg:p-16 bg-paper">
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-terracotta mb-4">
                  ✓ Sporočilo poslano
                </p>
                <p className="display text-[32px] lg:text-[44px] text-ink leading-[1.05] mb-4">
                  Hvala. Slišimo se <span className="display-italic text-terracotta">kmalu.</span>
                </p>
                <p className="serif text-[16px] text-ink-soft mb-8 max-w-[420px]">
                  Vaše povpraševanje je v naši mapi. Odgovorili bomo v 24 urah, običajno hitreje.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mono text-[11px] uppercase tracking-[0.18em] text-ink hover:text-terracotta link-ed transition-colors"
                >
                  Pošlji novo sporočilo →
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="border-t border-ink pt-12">
                <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                  <div className="col-span-12 sm:col-span-6">
                    <label className="mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-3 block">
                      01 — Ime *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      required
                      placeholder="Ime in priimek"
                      className={inputClass}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <label className="mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-3 block">
                      02 — Podjetje
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      placeholder="Ime podjetja"
                      className={inputClass}
                    />
                  </div>
                  <div className="col-span-12">
                    <label className="mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-3 block">
                      03 — E-pošta *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      required
                      placeholder="vas@podjetje.si"
                      className={inputClass}
                    />
                  </div>
                  <div className="col-span-12">
                    <label className="mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-3 block">
                      04 — Sporočilo *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      required
                      rows={4}
                      placeholder="Opišite vaš projekt ali izziv ..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="mono text-[11px] uppercase tracking-[0.16em] text-terracotta mt-8">
                    Napaka pri pošiljanju. Poskusite znova.
                  </p>
                )}

                <div className="mt-12 flex items-center justify-between gap-6 flex-wrap">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                    * Obvezna polja
                  </p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-ink mono text-[12px] uppercase tracking-[0.16em] px-8 py-4 disabled:opacity-50"
                  >
                    {status === "sending" ? "Pošiljam ..." : "Pošljite povpraševanje →"}
                  </button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
