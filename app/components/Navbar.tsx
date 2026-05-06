"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#storitve", label: "storitve", num: "01" },
  { href: "#zakaj", label: "studio", num: "02" },
  { href: "#proces", label: "proces", num: "03" },
  { href: "#projekti", label: "delo", num: "04" },
  { href: "#faq", label: "vprasanja", num: "05" },
  { href: "#kontakt", label: "kontakt", num: "06" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.6, 0.2, 1], delay: 0.1 }}
        className={`fixed top-7 left-0 right-0 z-50 transition-[background,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "bg-void/80 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-14 flex items-center justify-between gap-6">
          <a href="#" className="group flex items-center gap-2.5">
            <span className="relative w-7 h-7 grid place-items-center border border-line-bright">
              <span className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
              <span className="relative mono text-[12px] font-bold text-accent glow-soft">A</span>
            </span>
            <span className="display text-[18px] tracking-tight text-text">
              ai_pro
              <span className="text-accent">.</span>
              <span className="text-text-3">solutions</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative flex items-baseline gap-1.5 px-3 py-2 mono text-[11px] uppercase tracking-[0.14em] text-text-2 hover:text-accent transition-colors"
              >
                <span className="text-text-4 group-hover:text-accent transition-colors">[{l.num}]</span>
                <span>{l.label}</span>
                <span className="absolute left-3 right-3 bottom-1 h-px bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#kontakt"
              className="hidden sm:inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.16em] text-void bg-accent px-4 py-2 hover:bg-accent-2 transition-all hover:shadow-[0_0_28px_rgba(255,182,39,0.45)]"
            >
              <span>init_project</span>
              <span aria-hidden>↗</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-text p-1.5 border border-line-2 hover:border-accent hover:text-accent transition-colors"
              aria-label="Meni"
              suppressHydrationWarning
            >
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                {mobileOpen ? (
                  <>
                    <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="4" y1="18" x2="18" y2="4" stroke="currentColor" strokeWidth="1.5" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl pt-24 px-6 lg:hidden"
          >
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-text-3 mb-6">
              <span className="text-accent">&gt;</span> navigation
            </p>
            <nav className="flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                  className="flex items-baseline gap-4 group border-b border-line pb-4"
                >
                  <span className="mono text-[11px] text-text-4 group-hover:text-accent transition-colors">[{l.num}]</span>
                  <span className="display text-4xl text-text group-hover:text-accent transition-colors">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
