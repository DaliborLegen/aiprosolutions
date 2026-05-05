"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { faqItems } from "../data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-20 lg:mb-24">
          <div className="grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              <p className="label">— 06 / Vprašanja</p>
            </div>
            <div className="col-span-12 lg:col-span-9 mt-4 lg:mt-0">
              <h2 className="display text-[10vw] sm:text-[7vw] lg:text-[5.5vw] xl:text-[88px] text-ink leading-[0.95]">
                Pogosto <span className="display-italic text-terracotta">vprašano.</span>
              </h2>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-start-4 lg:col-span-9">
            <div className="border-t border-ink">
              {faqItems.map((item, i) => {
                const isOpen = open === i;
                return (
                  <AnimatedSection key={item.q} delay={i * 0.03}>
                    <div className="border-b border-rule">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="w-full text-left py-7 lg:py-8 flex items-baseline gap-6 group"
                      >
                        <span className="mono text-[11px] text-ink-mute mt-2 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 display text-[20px] lg:text-[26px] text-ink leading-[1.25] group-hover:text-terracotta transition-colors">
                          {item.q}
                        </span>
                        <span
                          className={`mono text-[18px] text-ink-mute group-hover:text-terracotta transition-all duration-300 mt-1 shrink-0 ${
                            isOpen ? "rotate-45" : ""
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
                            className="overflow-hidden"
                          >
                            <div className="pl-[44px] pr-12 pb-8">
                              <p className="serif text-[16px] lg:text-[17px] text-ink-soft leading-[1.6] max-w-[640px]">
                                {item.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-rule">
              <p className="serif text-[16px] text-ink-soft">
                Ne najdete odgovora? Pišite nam na{" "}
                <a href="mailto:info@aiprosolutions.si" className="link-ed text-ink">
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
