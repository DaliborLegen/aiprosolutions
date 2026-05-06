"use client";
import { useState } from "react";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";

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
    "w-full bg-transparent border-b border-line-2 pb-3 pt-1 text-text placeholder-text-4 focus:outline-none focus:border-accent transition-colors duration-300 text-[16px]";

  return (
    <section id="kontakt" className="relative py-28 lg:py-40 bg-surface/40">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        <Reveal className="mb-16 lg:mb-20">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              <p className="mono-up text-[10px] text-accent mb-3">&gt; section_07</p>
              <p className="mono text-[11px] text-text-3">/contact</p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
              <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[6.4vw] xl:text-[112px] text-text leading-[0.9]">
                Začnimo
                <br />
                <span className="text-accent glow-soft">pogovor.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="text-[16px] lg:text-[17px] text-text-2 leading-[1.6] mb-10">
              Imate idejo, izziv ali samo radovednost? Pošljite nam povpraševanje. Brezplačna začetna konzultacija, odgovor v <span className="text-accent">24 urah</span>.
            </p>

            <div className="space-y-7">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-text-3 mb-2">
                  <span className="text-text-4">[01] </span>Email
                </p>
                <a
                  href="mailto:info@aiprosolutions.si"
                  className="display text-[20px] lg:text-[22px] text-text hover:text-accent transition-colors"
                >
                  info@aiprosolutions.si
                </a>
              </div>
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-text-3 mb-2">
                  <span className="text-text-4">[02] </span>Location
                </p>
                <p className="display text-[20px] lg:text-[22px] text-text">
                  Slovenija <span className="text-text-3">— EU</span>
                </p>
                <p className="mono text-[10px] text-text-4 mt-1 tabular">46.0569°N · 14.5058°E</p>
              </div>
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-text-3 mb-3">
                  <span className="text-text-4">[03] </span>Network
                </p>
                <div className="flex flex-col gap-1.5 mt-1">
                  <a href="https://www.linkedin.com/in/dalibor-legen-83b4ab2b8" target="_blank" rel="noopener noreferrer" className="text-[14px] text-text-2 hover:text-accent link-amber inline-block w-fit">
                    LinkedIn ↗
                  </a>
                  <a href="https://github.com/DaliborLegen" target="_blank" rel="noopener noreferrer" className="text-[14px] text-text-2 hover:text-accent link-amber inline-block w-fit">
                    GitHub ↗
                  </a>
                  <a href="https://www.instagram.com/aiprosolutions_slovenija" target="_blank" rel="noopener noreferrer" className="text-[14px] text-text-2 hover:text-accent link-amber inline-block w-fit">
                    Instagram ↗
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 lg:col-span-8 lg:col-start-5">
            {status === "sent" ? (
              <div className="frame frame-corners p-10 lg:p-12 bg-surface relative overflow-hidden">
                <span className="c-tl" /><span className="c-br" />
                <div
                  aria-hidden
                  className="absolute -inset-10 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(25,245,135,0.12), transparent 60%)",
                  }}
                />
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-signal mb-4 flex items-center gap-2 relative">
                  <span className="dot-signal" />
                  <span>message_received</span>
                </p>
                <p className="display text-[32px] lg:text-[44px] text-text leading-[1.05] mb-4 relative">
                  Hvala. Slišimo se <span className="text-accent">kmalu.</span>
                </p>
                <p className="text-[15px] text-text-2 mb-8 max-w-[420px] relative">
                  Vaše povpraševanje je v naši queue. Odgovorili bomo v 24 urah, običajno hitreje.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  suppressHydrationWarning
                  className="mono text-[11px] uppercase tracking-[0.18em] text-text hover:text-accent link-amber transition-colors relative"
                >
                  send_another →
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="frame frame-corners p-6 lg:p-10 relative">
                <span className="c-tl" /><span className="c-br" />
                <div className="border-b border-line pb-3 mb-8 flex items-center justify-between mono text-[10px] text-text-3">
                  <span><span className="text-accent">&gt;</span> compose_message.tsx</span>
                  <span className="flex items-center gap-1.5">
                    <span className="dot-signal" />
                    <span className="hidden sm:inline">ready</span>
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-x-6 gap-y-9">
                  <div className="col-span-12 sm:col-span-6">
                    <label className="mono text-[10px] uppercase tracking-[0.18em] text-text-3 mb-3 block">
                      <span className="text-text-4">[01] </span>Ime *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      required
                      placeholder="Ime in priimek"
                      suppressHydrationWarning
                      className={inputClass}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <label className="mono text-[10px] uppercase tracking-[0.18em] text-text-3 mb-3 block">
                      <span className="text-text-4">[02] </span>Podjetje
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      placeholder="Ime podjetja"
                      suppressHydrationWarning
                      className={inputClass}
                    />
                  </div>
                  <div className="col-span-12">
                    <label className="mono text-[10px] uppercase tracking-[0.18em] text-text-3 mb-3 block">
                      <span className="text-text-4">[03] </span>Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      required
                      placeholder="vas@podjetje.si"
                      suppressHydrationWarning
                      className={inputClass}
                    />
                  </div>
                  <div className="col-span-12">
                    <label className="mono text-[10px] uppercase tracking-[0.18em] text-text-3 mb-3 block">
                      <span className="text-text-4">[04] </span>Sporočilo *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      required
                      rows={4}
                      placeholder="Opišite vaš projekt ali izziv ..."
                      suppressHydrationWarning
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="mono text-[11px] uppercase tracking-[0.16em] text-signal-err mt-8">
                    [error] napaka pri pošiljanju. poskusite znova.
                  </p>
                )}

                <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-text-4">
                    * required_fields
                  </p>
                  <Magnetic strength={0.18}>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      suppressHydrationWarning
                      className="btn-primary disabled:opacity-60"
                    >
                      <span>{status === "sending" ? "sending..." : "transmit"}</span>
                      <span aria-hidden>→</span>
                    </button>
                  </Magnetic>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
