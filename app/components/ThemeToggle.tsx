"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved === "dark";
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Preklopi na svetlo temo" : "Preklopi na temno temo"}
      className="group flex items-center gap-2 mono text-[10px] uppercase tracking-[0.18em] text-ink-mute hover:text-ink transition-colors"
    >
      <span className={`inline-block w-1.5 h-1.5 rounded-full transition-colors ${dark ? "bg-ink-faint" : "bg-ink"}`} />
      <span className="hidden sm:inline">{dark ? "Night" : "Day"}</span>
    </button>
  );
}
