import { links, pricingTiers } from '../content'

function PricingSection() {
  return (
    <section className="px-5 py-24 md:px-8" id="tarifs">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Offres</p>
          <h2 className="pt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Choisissez la formule qui vous ressemble
            <br className="hidden md:block" />
            et lancez votre organisation sans friction.
          </h2>
          <p className="pt-5 text-lg leading-relaxed text-ink/75">
            Deux offres simples, pensées pour vous faire gagner du temps tout en élevant le niveau de votre événement.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`animate-fade-up rounded-3xl border p-7 shadow-soft ${
                tier.name === 'Signature'
                  ? 'border-bronze/45 bg-gradient-to-b from-white to-blush/35 shadow-premium'
                  : 'border-ink/10 bg-white'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-serif text-3xl text-ink">{tier.name}</h3>
                <span className="rounded-full border border-bronze/35 bg-bronze/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-ink/70">
                  {tier.badge}
                </span>
              </div>
              {tier.name === 'Signature' && (
                <p className="pt-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink/70">La formule la plus complète</p>
              )}
              <p className="pt-5 text-2xl font-semibold text-ink">{tier.price}</p>
              <p className="pt-3 leading-relaxed text-ink/75">{tier.description}</p>
              <ul className="space-y-3 pt-6 text-ink/80">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-ink/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={links.request}
                className={`mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition ${
                  tier.name === 'Signature'
                    ? 'bg-ink text-ivory hover:-translate-y-0.5 hover:bg-ink/90'
                    : 'border border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-ivory'
                }`}
              >
                Demander mon site
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm uppercase tracking-[0.14em] text-ink/60">
          Offre de lancement limitée pendant la phase pilote.
        </p>
      </div>
    </section>
  )
}

export default PricingSection
