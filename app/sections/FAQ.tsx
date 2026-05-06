"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import { faqItems } from "../data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        <Reveal className="mb-16 lg:mb-20">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              <p className="mono-up text-[10px] text-accent mb-3">&gt; section_06</p>
              <p className="mono text-[11px] text-text-3">/faq</p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
              <h2 className="display text-[10vw] sm:text-[7vw] lg:text-[5.4vw] xl:text-[88px] text-text leading-[0.95]">
                Pogosto <span className="text-accent glow-soft">vprašano.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-start-4 lg:col-span-9">
            <div className="border-t border-line-2">
              {faqItems.map((item, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={item.q} index={i}>
                    <div className="border-b border-line group relative overflow-hidden">
                      <span
                        aria-hidden
                        className={`absolute left-0 top-0 bottom-0 w-px bg-accent origin-top transition-transform duration-500 ${
                          isOpen ? "scale-y-100" : "scale-y-0"
                        }`}
                      />
                      <span
                        aria-hidden
                        className={`absolute inset-0 bg-accent/[0.04] transition-opacity duration-500 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="relative w-full text-left py-6 lg:py-7 px-3 flex items-baseline gap-5"
                      >
                        <span className={`mono text-[11px] tabular shrink-0 transition-colors ${isOpen ? "text-accent" : "text-text-4 group-hover:text-accent"}`}>
                          [{String(i + 1).padStart(2, "0")}]
                        </span>
                        <span className={`flex-1 display text-[18px] lg:text-[24px] leading-[1.3] transition-colors ${isOpen ? "text-accent" : "text-text group-hover:text-accent"}`}>
                          {item.q}
                        </span>
                        <span
                          className={`mono text-[20px] shrink-0 transition-all duration-300 ${
                            isOpen ? "rotate-45 text-accent" : "text-text-3 group-hover:text-accent"
                          }`}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            className="relative overflow-hidden"
                          >
                            <div className="pl-[44px] pr-12 pb-7">
                              <p className="text-[15px] lg:text-[16px] text-text-2 leading-[1.7] max-w-[640px]">
                                {item.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-line">
              <p className="text-[14px] text-text-2">
                Ne najdete odgovora? Pišite nam na{" "}
                <a href="mailto:info@aiprosolutions.si" className="link-amber text-text">
                  info@aiprosolutions.si
                </a>{" "}
                — odgovorimo v 24 urah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
