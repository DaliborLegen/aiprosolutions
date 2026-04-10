"use client";
import AnimatedSection from "../components/AnimatedSection";

const services = [
  { icon: "🧠", title: "AI rešitve", desc: "Inteligentni sistemi, chatboti in analitika, ki transformirajo vaše poslovanje." },
  { icon: "💻", title: "Razvoj programske opreme", desc: "Po meri izdelane aplikacije za vaše specifične poslovne potrebe." },
  { icon: "🌐", title: "Spletni razvoj", desc: "Hitre, odzivne in SEO-optimizirane spletne strani in aplikacije." },
  { icon: "⚡", title: "Avtomatizacija procesov", desc: "Odpravljamo ročno delo in povezujemo vaše sisteme za večjo učinkovitost." },
  { icon: "🎯", title: "IT svetovanje", desc: "Strateško svetovanje za pravo tehnološko usmeritev vašega podjetja." },
  { icon: "🚀", title: "Digitalna transformacija", desc: "Celovita digitalizacija poslovanja od analize do implementacije." },
  { icon: "🎬", title: "AI video & avdio produkcija", desc: "Profesionalna produkcija vsebin s pomočjo AI — od scenarija do končnega izdelka." },
  { icon: "✨", title: "Moderne spletne strani", desc: "Izdelava spletnih strani po najnovejših standardih z vrhunskim dizajnom in uporabniško izkušnjo." },
];

export default function Services() {
  return (
    <section id="storitve" className="relative z-10 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold text-accent tracking-[0.25em] uppercase mb-3">Storitve</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Kaj počnemo</h2>
          <p className="text-secondary mt-4 max-w-lg mx-auto">
            Pokrivamo celoten spekter digitalnih rešitev — od svetovanja do razvoja in vzdržavanja.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="card rounded-2xl p-7 h-full group">
                <span className="text-3xl block mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
                <h3 className="text-base font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">{s.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="glow-line max-w-2xl mx-auto mt-28" />
    </section>
  );
}
