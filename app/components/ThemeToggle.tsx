"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setDark(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      className="w-9 h-9 rounded-lg border border-border hover:border-border-hover flex items-center justify-center text-secondary hover:text-primary transition-all duration-300"
      aria-label="Preklopi temo"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
