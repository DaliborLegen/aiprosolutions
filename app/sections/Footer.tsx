const products = [
  { label: "Revivio", href: "https://revivio.si", note: "AI obnova fotografij" },
  { label: "ProfiPix", href: "https://profipix.si", note: "AI fotografije nastanitev" },
  { label: "Formatory", href: "https://formatory.si", note: "Pretvorba datotek" },
  { label: "AI Agent", href: "https://ai-agent.si", note: "AI agencija" },
];

const nav = [
  { label: "Storitve", href: "#storitve" },
  { label: "Studio", href: "#zakaj" },
  { label: "Proces", href: "#proces" },
  { label: "Delo", href: "#projekti" },
  { label: "Vprašanja", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dalibor-legen-83b4ab2b8" },
  { label: "GitHub", href: "https://github.com/DaliborLegen" },
  { label: "Instagram", href: "https://www.instagram.com/aiprosolutions_slovenija" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ink bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* Masthead */}
          <div className="col-span-12 lg:col-span-5">
            <p className="display text-[40px] lg:text-[56px] text-ink leading-none">
              AI<span className="display-italic text-terracotta">·</span>PRO
            </p>
            <p className="serif text-[15px] text-ink-soft mt-4 max-w-[360px] leading-[1.55]">
              Studio za umetno inteligenco, programsko opremo in poslovno avtomatizacijo. Krovno podjetje{" "}
              <em className="italic text-ink">AI PRO Solutions d.o.o.</em>, Slovenija.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-ink-mute mb-5">
              Stran
            </p>
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="serif text-[15px] text-ink-soft hover:text-ink link-ed inline-block">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-ink-mute mb-5">
              Produkti
            </p>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="serif text-[15px] text-ink group-hover:text-terracotta transition-colors link-ed">
                      {p.label} ↗
                    </span>
                    <span className="block mono text-[10px] uppercase tracking-[0.14em] text-ink-mute mt-0.5">
                      {p.note}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-ink-mute mb-5">
              Splet
            </p>
            <ul className="space-y-2">
              {social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="serif text-[15px] text-ink-soft hover:text-ink link-ed inline-block"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 pt-8 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
          <span>© 2026 AI PRO Solutions d.o.o.</span>
          <span>info@aiprosolutions.si</span>
          <span>Postavljeno z mislijo. Slovenija.</span>
        </div>
      </div>
    </footer>
  );
}
