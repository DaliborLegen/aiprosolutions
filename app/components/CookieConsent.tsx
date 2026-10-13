"use client";

import { useEffect, useState } from "react";

// Google Analytics se nalozi SELE po kliku "Sprejmi". Brez soglasja stran ne kontaktira Googla.
// Soglasje se da kadarkoli preklicati z gumbom "Nastavitve piškotkov" v nogi (dogodek "odpri-piskotke").
const KEY = "cookie-consent";

function loadGa(id: string) {
  if (document.getElementById("ga-src")) return;
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", id, { anonymize_ip: true });
  const s = document.createElement("script");
  s.id = "ga-src";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
}

export default function CookieConsent() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let v: string | null = null;
    try {
      v = localStorage.getItem(KEY);
    } catch {}
    if (v === "granted" && gaId) loadGa(gaId);
    else if (v !== "denied") setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener("odpri-piskotke", reopen);
    return () => window.removeEventListener("odpri-piskotke", reopen);
  }, [gaId]);

  function choose(v: "granted" | "denied") {
    try {
      localStorage.setItem(KEY, v);
    } catch {}
    setOpen(false);
    if (v === "granted" && gaId) loadGa(gaId);
    // preklic: piskotke GA pobrisemo in osvezimo, da se skripta ne izvaja vec
    if (v === "denied" && document.getElementById("ga-src")) {
      document.cookie.split(";").forEach((c) => {
        const n = c.split("=")[0].trim();
        if (n.startsWith("_ga")) document.cookie = `${n}=; Max-Age=0; path=/; domain=.${location.hostname.replace(/^www\./, "")}`;
      });
      location.reload();
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Piškotki"
      className="fixed left-4 right-4 bottom-4 z-[70] max-w-[420px] border border-line-bright bg-surface p-5 shadow-2xl"
    >
      <p className="mono text-[10px] uppercase tracking-[0.2em] text-text-3 mb-2">
        <span className="text-accent">&gt;</span> piškotki
      </p>
      <p className="text-[14px] leading-relaxed text-text-2">
        Z vašim dovoljenjem uporabljamo analitične piškotke (Google Analytics), da vidimo, kaj obiskovalce zanima. Brez soglasja jih ne naložimo. Več v{" "}
        <a href="/zasebnost" className="text-accent underline underline-offset-2">
          politiki zasebnosti
        </a>
        .
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="mono text-[12px] px-4 py-2.5 bg-accent text-void font-bold cursor-pointer"
        >
          Sprejmi
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="mono text-[12px] px-4 py-2.5 border border-line-bright text-text cursor-pointer hover:border-accent"
        >
          Zavrni
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event("odpri-piskotke"))}>
      nastavitve piškotkov
    </button>
  );
}
