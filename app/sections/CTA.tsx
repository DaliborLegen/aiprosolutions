"use client";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";

export default function CTA() {
  return (
    <section className="relative py-28 lg:py-44 overflow-hidden border-y border-line">
      {/* layered atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(255,182,39,0.18), transparent 60%), radial-gradient(ellipse 50% 70% at 20% 80%, rgba(255,182,39,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,244,245,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,245,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-end">
            <div className="col-span-12 lg:col-span-9">
              <p className="mono-up text-[10px] text-accent flex items-center gap-2 mb-6">
                <span className="dot-signal" />
                <span>standby</span>
              </p>
              <h2 className="display text-[12vw] sm:text-[8vw] lg:text-[7vw] xl:text-[120px] text-text leading-[0.92]">
                Pogovorimo se
                <br />
                o vaši <span className="text-accent glow">ideji.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:text-right">
              <p className="text-[15px] text-text-2 leading-[1.6] mb-8">
                Prva 30-minutna konzultacija je <span className="text-accent">brezplačna</span>. Brez vezave, brez prodajnega pritiska.
              </p>
              <Magnetic strength={0.2}>
                <a href="#kontakt" className="btn-primary">
                  <span>start_now</span>
                  <span aria-hidden>→</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
