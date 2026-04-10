import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIPRO Solutions — AI, razvoj in avtomatizacija za moderna podjetja",
  description: "Slovensko podjetje za napredne AI rešitve, razvoj programske opreme, avtomatizacijo procesov in digitalno transformacijo. Od ideje do izvedbe.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl" className="h-full" suppressHydrationWarning>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
