"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-200px] w-[500px] h-[500px] rounded-full bg-accent-cyan/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent/8 border border-accent/15 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
            <span className="text-xs font-medium text-accent-cyan tracking-wide">Sprejemamo nove projekte</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-primary leading-[1.08] tracking-tight mb-6"
          >
            Optimizirajte poslovanje
            <br />
            z močjo
            <br />
            <span className="grad-text">umetne inteligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-secondary leading-relaxed mb-10 max-w-xl"
          >
            Pomagamo podjetjem avtomatizirati procese, zmanjšati stroške in pospešiti
            rast z naprednimi AI rešitvami, prilagojenimi vašim potrebam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#kontakt"
              className="grad-bg text-white font-semibold px-8 py-4 rounded-xl text-sm hover:shadow-xl hover:shadow-accent/25 transition-all duration-300"
            >
              Začnite projekt →
            </a>
            <a
              href="#storitve"
              className="border border-border text-primary font-semibold px-8 py-4 rounded-xl text-sm hover:bg-surface hover:border-border-hover transition-all duration-300"
            >
              Naše storitve
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-8 mt-16 pt-8 border-t border-border"
          >
            {[
              { val: "10+", lab: "projektov" },
              { val: "100%", lab: "zadovoljstvo" },
              { val: "<24h", lab: "odzivni čas" },
            ].map((s) => (
              <div key={s.lab}>
                <p className="text-2xl font-bold grad-text">{s.val}</p>
                <p className="text-xs text-tertiary uppercase tracking-wider mt-1">{s.lab}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
