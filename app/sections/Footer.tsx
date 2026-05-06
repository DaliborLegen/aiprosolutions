const products = [
  { label: "Revivio", href: "https://revivio.si", note: "AI obnova fotografij" },
  { label: "ProfiPix", href: "https://profipix.si", note: "AI fotografije nastanitev" },
  { label: "Formatory", href: "https://formatory.si", note: "Pretvorba datotek" },
  { label: "AI Agent", href: "https://ai-agent.si", note: "AI agencija" },
];

const nav = [
  { label: "storitve", href: "#storitve" },
  { label: "studio", href: "#zakaj" },
  { label: "proces", href: "#proces" },
  { label: "delo", href: "#projekti" },
  { label: "vprasanja", href: "#faq" },
  { label: "kontakt", href: "#kontakt" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dalibor-legen-83b4ab2b8" },
  { label: "GitHub", href: "https://github.com/DaliborLegen" },
  { label: "Instagram", href: "https://www.instagram.com/aiprosolutions_slovenija" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line-2 bg-void">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-14 lg:py-20">
        {/* giant wordmark */}
        <div className="border-b border-line pb-10 mb-12 flex items-end justify-between gap-6 flex-wrap">
          <p className="display display-tight text-[14vw] lg:text-[10vw] xl:text-[160px] text-text leading-[0.85]">
            ai_pro<span className="text-accent">.</span>
          </p>
          <p className="mono text-[10px] uppercase tracking-[0.2em] text-text-3 max-w-[260px]">
            <span className="text-accent">// </span>Studio za umetno inteligenco, programsko opremo in poslovno avtomatizacijo. Krovno podjetje AI PRO Solutions d.o.o., Slovenija.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* nav */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-3">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-text-3 mb-5 flex items-center gap-2">
              <span className="text-accent">&gt;</span> stran
            </p>
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="mono text-[12px] text-text-2 hover:text-accent transition-colors group inline-flex items-center gap-2">
                    <span className="text-text-4 group-hover:text-accent">→</span>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* products */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-5">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-text-3 mb-5 flex items-center gap-2">
              <span className="text-accent">&gt;</span> products
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
                    <span className="display text-[18px] text-text group-hover:text-accent transition-colors flex items-center gap-2">
                      {p.label}
                      <span aria-hidden className="text-text-4 group-hover:text-accent group-hover:translate-x-0.5 transition-all">↗</span>
                    </span>
                    <span className="block mono text-[10px] uppercase tracking-[0.14em] text-text-3 mt-0.5">
                      {p.note}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* social */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 lg:col-start-9">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-text-3 mb-5 flex items-center gap-2">
              <span className="text-accent">&gt;</span> network
            </p>
            <ul className="space-y-2">
              {social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono text-[12px] text-text-2 hover:text-accent transition-colors group inline-flex items-center gap-2"
                  >
                    <span className="text-text-4 group-hover:text-accent">↗</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="col-span-12 lg:col-span-2">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-text-3 mb-5 flex items-center gap-2">
              <span className="text-accent">&gt;</span> contact
            </p>
            <a href="mailto:info@aiprosolutions.si" className="mono text-[12px] text-text hover:text-accent transition-colors block break-all">
              info@aiprosolutions.si
            </a>
            <p className="mono text-[10px] text-text-4 mt-2 tabular">
              SI · 46.0569°N 14.5058°E
            </p>
          </div>
        </div>

        <div className="mt-14 lg:mt-20 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mono text-[10px] uppercase tracking-[0.18em] text-text-4">
          <span className="flex items-center gap-2">
            <span className="dot-signal" />
            © 2026 AI PRO Solutions d.o.o.
          </span>
          <span className="hidden sm:inline">all systems operational</span>
          <span>build_001 / SI</span>
        </div>
      </div>
    </footer>
  );
}
