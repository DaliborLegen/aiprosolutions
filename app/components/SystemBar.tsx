"use client";
import { useEffect, useState } from "react";

export default function SystemBar() {
  const [time, setTime] = useState<string>("--:--:--");
  const [boot, setBoot] = useState<string>("0.000");

  useEffect(() => {
    const t0 = performance.now();
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
      setBoot(((performance.now() - t0) / 1000).toFixed(1));
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] border-b border-line bg-void/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-7 flex items-center justify-between mono text-[10px] text-text-3 tabular">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="dot-signal" />
            <span className="text-signal">SYS_ONLINE</span>
          </span>
          <span className="hidden sm:inline text-text-4">|</span>
          <span className="hidden sm:inline">v01.0.0</span>
          <span className="hidden md:inline text-text-4">|</span>
          <span className="hidden md:inline">SI/EU · 46.05°N 14.50°E</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-text-4">UPTIME</span>
          <span className="hidden md:inline">{boot}s</span>
          <span className="hidden md:inline text-text-4">|</span>
          <span className="text-text-2">{time}</span>
        </div>
      </div>
    </div>
  );
}
