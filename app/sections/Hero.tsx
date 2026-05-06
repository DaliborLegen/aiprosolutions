"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Magnetic from "../components/Magnetic";

const FEED = [
  { tag: "boot", text: "init aiprosolutions/v01 — handshake OK" },
  { tag: "load", text: "models: gpt-5 · claude · gemini · llama-3" },
  { tag: "ok",   text: "stack: next.js 16 · supabase · vercel" },
  { tag: "ok",   text: "studio online — Slovenija → EU" },
  { tag: "scan", text: "queue: 3 active · 2 in QA · 1 launching" },
  { tag: "ok",   text: "uptime 100% · sla < 24h response" },
];

const SCRAMBLE = "01101001ABCDEF</>{}=>+*";

function Scrambled({ value }: { value: string }) {
  const [out, setOut] = useState(value);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setOut(value);
      return;
    }
    let raf = 0;
    let step = 0;
    const total = 16;
    const tick = () => {
      step++;
      const ratio = Math.min(1, step / total);
      const reveal = Math.floor(ratio * value.length);
      let s = "";
      for (let i = 0; i < value.length; i++) {
        if (i < reveal || value[i] === " " || value[i] === "/") s += value[i];
        else s += SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)];
      }
      setOut(s);
      if (step < total) raf = requestAnimationFrame(tick);
      else setOut(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, reduce]);

  return <span className="tabular">{out}</span>;
}

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [feedIdx, setFeedIdx] = useState(0);
  const [typed, setTyped] = useState(0);
  const reduce = useReducedMotion();

  // Feed ticker
  useEffect(() => {
    const id = window.setInterval(() => {
      setFeedIdx((i) => (i + 1) % FEED.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  // Type-on for the supporting line
  const TYPED_STR = "// Studio za AI, programsko opremo in avtomatizacijo. Slovenija, od 2024.";
  useEffect(() => {
    if (reduce) {
      setTyped(TYPED_STR.length);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i++;
      setTyped(i);
      if (i >= TYPED_STR.length) window.clearInterval(id);
    }, 22);
    return () => window.clearInterval(id);
  }, [reduce]);

  // Subtle parallax on hero on mouse move
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      wrap.style.setProperty("--px", `${x * 6}px`);
      wrap.style.setProperty("--py", `${y * 6}px`);
    };
    wrap.addEventListener("pointermove", onMove);
    return () => wrap.removeEventListener("pointermove", onMove);
  }, []);

  const feed = FEED[feedIdx];

  return (
    <section ref={wrapRef} className="relative overflow-hidden pt-20 lg:pt-24" style={{ ["--px" as string]: "0px", ["--py" as string]: "0px" } as React.CSSProperties}>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 pt-12 lg:pt-16 pb-16 lg:pb-24 relative">
        {/* terminal coordinates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:flex items-center justify-between mono text-[10px] text-text-3 pb-8 border-b border-line"
        >
          <span><span className="text-accent">&gt;</span> ./aiprosolutions --mode=studio</span>
          <span className="tabular">[ 46.0569°N · 14.5058°E ]</span>
          <span>build_001 — sprejemamo nove projekte</span>
        </motion.div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-10 mt-12 lg:mt-16" style={{ transform: "translate3d(var(--px), var(--py), 0)" }}>
          {/* meta column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="col-span-12 lg:col-span-3 lg:pt-3"
          >
            <p className="mono-up text-[10px] text-accent flex items-center gap-2 mb-4">
              <span className="dot-signal" />
              <span>now_accepting</span>
            </p>
            <p className="mono text-[12px] text-text-2 leading-relaxed max-w-[260px]">
              <span className="text-text-3">{TYPED_STR.slice(0, typed)}</span>
              {typed < TYPED_STR.length && <span className="cursor-blink" />}
            </p>
          </motion.div>

          {/* headline */}
          <div className="col-span-12 lg:col-span-9 relative">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.18, ease: [0.2, 0.6, 0.2, 1] }}
              className="display text-[44px] sm:text-[68px] md:text-[92px] lg:text-[120px] xl:text-[152px] text-text leading-[0.92]"
            >
              <span className="display-tight">Inteligenca,</span>
              <br />
              <span className="text-text-3">ki </span>
              <span className="glow text-accent flicker">deluje</span>
              <span className="cursor-blink" />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.6 }}
              className="mt-10 lg:mt-14 grid grid-cols-12 gap-x-6 gap-y-8 lg:items-end"
            >
              <p className="col-span-12 md:col-span-7 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.55] text-text-2">
                Gradimo <span className="text-text">AI agente, chatbote, spletne aplikacije</span> in avtomatizacije, ki <span className="text-accent">delajo</span>, kar obljubijo. Brez modnih efektov. Brez vendor lock-in. Brez šuma.
              </p>

              <div className="col-span-12 md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
                <Magnetic strength={0.18}>
                  <a href="#kontakt" className="btn-primary">
                    <span>start_project</span>
                    <span aria-hidden>→</span>
                  </a>
                </Magnetic>
                <a href="#proces" className="btn-ghost group">
                  <span>./process</span>
                  <span aria-hidden className="group-hover:translate-y-0.5 transition-transform">↓</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* live feed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-14 lg:mt-20 frame frame-corners"
        >
          <span className="c-tl" /><span className="c-br" />
          {/* header bar */}
          <div className="border-b border-line px-4 py-2 flex items-center justify-between mono text-[10px] text-text-3">
            <div className="flex items-center gap-2">
              <span className="dot-signal" />
              <span className="uppercase tracking-[0.18em]">live_stream</span>
              <span className="text-text-4 hidden sm:inline">— studio status</span>
            </div>
            <span className="tabular hidden sm:inline">/var/log/studio</span>
          </div>
          {/* stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-line">
            {[
              { v: "10+", l: "izvedenih projektov", k: "PRJ" },
              { v: "100%", l: "zadovoljstvo strank",  k: "SAT" },
              { v: "<24h", l: "odzivni čas",          k: "RSP" },
              { v: "5",    l: "produktov v krovu",     k: "PRD" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`group relative px-5 py-7 lg:px-7 lg:py-9 border-line ${i > 0 ? "md:border-l" : ""} ${i < 3 ? "border-b md:border-b-0" : ""} ${i === 1 ? "border-l" : ""} hover:bg-surface-2 transition-colors`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="mono text-[10px] tracking-[0.18em] text-text-4 group-hover:text-accent transition-colors">
                    [{String(i + 1).padStart(2, "0")}/04]
                  </span>
                  <span className="mono text-[10px] tracking-[0.18em] text-text-4">{s.k}</span>
                </div>
                <p className="display text-[40px] lg:text-[56px] text-text leading-none group-hover:text-accent group-hover:glow-soft transition-all duration-300 tabular">
                  <Scrambled value={s.v} />
                </p>
                <p className="mono text-[11px] text-text-3 mt-3 uppercase tracking-[0.12em]">{s.l}</p>
              </div>
            ))}
          </div>
          {/* feed line */}
          <div className="border-t border-line px-4 py-3 mono text-[11px] text-text-3 flex items-center gap-3 overflow-hidden">
            <span className="text-accent shrink-0">&gt;</span>
            <span className="uppercase tracking-[0.18em] text-text-4 shrink-0">[{feed.tag}]</span>
            <motion.span
              key={feedIdx}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="truncate"
            >
              {feed.text}
            </motion.span>
            <span className="cursor-blink shrink-0 ml-auto" />
          </div>
        </motion.div>
      </div>

      {/* drift slogan strip */}
      <div className="overflow-hidden border-y border-line py-5 mt-10 lg:mt-16 bg-surface/40">
        <div className="flex whitespace-nowrap drift">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-10 pr-10">
              {[
                "AI Agenti",
                "Chatboti",
                "Avtomatizacija",
                "Web Razvoj",
                "Strategija",
                "Integracija LLM",
                "Next.js Studio",
                "Slovenija → EU",
              ].map((t) => (
                <span key={t + k} className="display text-[34px] lg:text-[48px] text-text-2 flex items-center gap-10">
                  {t}
                  <span className="text-accent">+</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
