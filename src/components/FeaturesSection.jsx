import { featureCards } from '../content'

function FeaturesSection() {
  return (
    <section className="bg-white/70 px-5 py-24 md:px-8" id="contenu">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Ce que vous pouvez centraliser</p>
          <h2 className="pt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Tout ce que votre groupe doit savoir,
            <br className="hidden md:block" />
            dans un seul lien élégant.
          </h2>
          <p className="pt-5 text-lg leading-relaxed text-ink/75">
            En quelques secondes, vos invitées accèdent à tout: programme, infos utiles, budget, votes et plus encore.
          </p>
          <p className="pt-3 text-base leading-relaxed text-ink/65">
            Plus besoin de répéter la même chose dix fois. Tout est déjà là, bien présenté.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="group animate-fade-up rounded-2xl border border-ink/10 bg-ivory/80 p-6 shadow-soft transition duration-300 hover:-translate-y-1"
            >
              <h3 className="font-serif text-3xl text-ink">{feature.title}</h3>
              <p className="pt-3 leading-relaxed text-ink/75">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
