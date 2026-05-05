"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { faqItems } from "../data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 py-28">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs font-semibold text-accent tracking-[0.25em] uppercase mb-3">
            Pogosta vprašanja
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Imate vprašanje?
          </h2>
          <p className="text-secondary mt-4 max-w-lg mx-auto">
            Tu so odgovori na najpogostejša vprašanja. Če ne najdete svojega,
            nam pišite na info@aiprosolutions.si.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <AnimatedSection key={item.q} delay={i * 0.04}>
                <div className="card rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                  >
                    <h3 className="text-base font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                      {item.q}
                    </h3>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm text-secondary leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      <div className="glow-line max-w-2xl mx-auto mt-28" />
    </section>
  );
}
