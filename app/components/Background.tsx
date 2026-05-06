"use client";
import { useEffect, useRef } from "react";

export default function Background() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--mx", `${(e.clientX / window.innerWidth) * 100}%`);
      el.style.setProperty("--my", `${(e.clientY / window.innerHeight) * 100}%`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
      style={
        {
          ["--mx" as string]: "50%",
          ["--my" as string]: "20%",
        } as React.CSSProperties
      }
    >
      {/* base gradient floor */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(255, 182, 39, 0.08), transparent 60%), radial-gradient(ellipse 60% 60% at var(--mx) var(--my), rgba(255, 182, 39, 0.10), transparent 55%)",
        }}
      />
      {/* fine grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,244,245,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,245,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 35%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 35%, black 30%, transparent 80%)",
        }}
      />
      {/* horizon line */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "62vh",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,182,39,0.55), transparent)",
          opacity: 0.55,
          filter: "blur(0.4px)",
        }}
      />
    </div>
  );
}
