import Image from "next/image";

const nav = [
  { label: "Storitve", href: "#storitve" },
  { label: "Zakaj mi", href: "#zakaj" },
  { label: "Proces", href: "#proces" },
  { label: "Projekti", href: "#projekti" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="AIPRO Solutions" width={28} height={28} className="rounded" />
              <span className="text-sm font-bold text-primary">AIPRO Solutions</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              AI, programska oprema in avtomatizacija za moderna podjetja.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-4">Navigacija</p>
            <div className="space-y-2.5">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="block text-sm text-secondary hover:text-primary transition-colors">
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-4">Kontakt</p>
            <div className="space-y-2.5 text-sm text-secondary">
              <p>info@aiprosolutions.si</p>
              <p>Slovenija</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-4">Sledite nam</p>
            <div className="space-y-2.5">
              <a href="https://www.linkedin.com/in/dalibor-legen-83b4ab2b8" target="_blank" rel="noopener noreferrer" className="block text-sm text-secondary hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/DaliborLegen" target="_blank" rel="noopener noreferrer" className="block text-sm text-secondary hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://www.instagram.com/aiprosolutions_slovenija" target="_blank" rel="noopener noreferrer" className="block text-sm text-secondary hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-tertiary">&copy; 2025 AIPRO Solutions. Vse pravice pridržane.</p>
          <p className="text-xs text-tertiary">Izdelano z ❤️ v Sloveniji</p>
        </div>
      </div>
    </footer>
  );
}
