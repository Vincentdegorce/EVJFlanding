import { links, stats } from '../content'

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 md:px-8 md:pb-32 md:pt-20">
      <div className="hero-glow pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute -right-24 bottom-2 h-80 w-80 rounded-full" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl gap-10 md:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6 md:space-y-8 animate-fade-up">
          <p className="inline-flex rounded-full border border-bronze/35 bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.22em] text-ink/65">
            Collection privée - EVJF / EVG / Week-end
          </p>
          <h1 className="max-w-2xl font-serif text-[2.45rem] leading-[0.92] text-ink sm:text-6xl md:text-[4.45rem]">
            Le week-end parfait commence
            <br className="hidden md:block" />
            par une organisation impeccable.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-ink/72 sm:text-lg md:text-xl">
            Vous ne vendez pas une simple page web à vos invités.
            <br className="hidden md:block" />
            Vous leur offrez une expérience claire, élégante et fluide, dans un espace privé personnalisé où tout est
            centralisé.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-ivory shadow-premium transition hover:-translate-y-0.5 hover:bg-ink/90 sm:w-auto"
            >
              Voir la démo
            </a>
            <a
              href={links.request}
              className="inline-flex w-full items-center justify-center rounded-full border border-ink/35 bg-white/90 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-0.5 hover:border-ink sm:w-auto"
            >
              Demander mon site
            </a>
          </div>
          <p className="text-xs font-medium leading-relaxed text-ink/65 sm:text-sm">
            Site personnalisé en 48h • Aucun compte à créer • Accessible sur téléphone
          </p>
          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-ink/10 bg-white/85 px-4 py-4 shadow-soft">
                <p className="text-base font-semibold leading-snug text-ink">{item.value}</p>
                <p className="text-sm text-ink/65">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up-delayed">
          <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full border border-ink/15" aria-hidden="true" />
          <div className="absolute -bottom-10 -right-5 h-28 w-28 rounded-full border border-ink/10" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-ink/10 bg-gradient-to-br from-white via-cream to-blush p-5 shadow-premium">
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-ink/10 bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.18em] text-ink/60">
              <span>Aperçu expérience invités</span>
              <span>Collection Signature</span>
            </div>
            <div className="space-y-4 rounded-2xl bg-ivory/88 p-5">
              <div className="rounded-xl border border-ink/10 bg-white px-4 py-3">
                <p className="text-xs uppercase tracking-[0.14em] text-ink/50">Intention</p>
                <p className="pt-1 font-serif text-2xl leading-tight text-ink">Chaque détail compte, chaque personne se sent attendue.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-ink/10 bg-white px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-ink/50">Présences</p>
                  <p className="pt-1 text-lg font-semibold text-ink">11 confirmées</p>
                </div>
                <div className="rounded-xl border border-ink/10 bg-white px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-ink/50">Budget</p>
                  <p className="pt-1 text-lg font-semibold text-ink">53 EUR / pers.</p>
                </div>
              </div>
              <div className="rounded-xl border border-ink/10 bg-white px-4 py-3">
                <p className="text-xs uppercase tracking-[0.14em] text-ink/50">Programme</p>
                <p className="pt-1 text-base text-ink">Vendredi cocktail, samedi atelier + dîner, dimanche brunch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
