"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#storitve", label: "Storitve", num: "01" },
  { href: "#zakaj", label: "Studio", num: "02" },
  { href: "#proces", label: "Proces", num: "03" },
  { href: "#projekti", label: "Delo", num: "04" },
  { href: "#faq", label: "Vprašanja", num: "05" },
  { href: "#kontakt", label: "Kontakt", num: "06" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-paper/90 backdrop-blur-md border-b border-rule" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between gap-8">
          <a href="#" className="flex items-baseline gap-3 group">
            <span className="display text-[20px] lg:text-[22px] tracking-tight text-ink">
              AI<span className="display-italic text-terracotta">·</span>PRO
            </span>
            <span className="hidden md:inline mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
              Studio
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group flex items-baseline gap-1.5 text-[13px] text-ink-soft hover:text-ink transition-colors"
              >
                <span className="mono text-[10px] text-ink-faint group-hover:text-terracotta transition-colors">
                  {l.num}
                </span>
                <span className="link-ed">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <ThemeToggle />
            <a
              href="#kontakt"
              className="hidden sm:inline-flex btn-ink text-[12px] mono uppercase tracking-[0.16em] px-4 py-2.5"
            >
              Začnite →
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-ink p-1"
              aria-label="Meni"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-paper pt-20 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-8 mt-10">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                  className="flex items-baseline gap-4 group"
                >
                  <span className="mono text-[11px] text-ink-faint">{l.num}</span>
                  <span className="display text-4xl text-ink group-hover:text-terracotta transition-colors">
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
