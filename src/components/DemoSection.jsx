import { links } from '../content'

function DemoSection() {
  return (
    <section className="px-5 pb-24 md:px-8" id="demo">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-ink/15 bg-gradient-to-r from-blush via-cream to-ivory p-8 shadow-premium md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-ink/55">Bloc démo</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">Entrez dans l ambiance avant même le jour J.</h2>
            <p className="pt-5 text-lg leading-relaxed text-ink/75">
              Explorez une version réelle utilisée pour organiser un week-end.
            </p>
            <p className="pt-3 text-base leading-relaxed text-ink/70">
              Vous allez ressentir tout de suite la différence entre une organisation dispersée et une expérience bien
              pilotée.
            </p>
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ivory transition hover:-translate-y-0.5 hover:bg-ink/90"
            >
              Voir la démo
            </a>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white/75 p-6">
            <p className="text-sm uppercase tracking-[0.15em] text-ink/45">Résultat</p>
            <p className="pt-3 font-serif text-3xl text-ink">Une organisation fluide. Un week-end plus désirable.</p>
            <p className="pt-4 leading-relaxed text-ink/70">
              Un week-end qui commence déjà avant le départ.
            </p>
            <p className="pt-2 text-sm font-medium text-ink/65">Moins de charge mentale pour vous. Plus de clarté pour toutes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection
