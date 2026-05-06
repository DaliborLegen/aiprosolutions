"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${cx - 220}px, ${cy - 220}px, 0)`;
      }
      raf = window.requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove);
    raf = window.requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[5] w-[440px] h-[440px] rounded-full opacity-60 mix-blend-screen will-change-transform"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(circle, rgba(255,182,39,0.18) 0%, rgba(255,182,39,0.06) 35%, transparent 65%)",
      }}
    />
  );
}
