import { benefits } from '../content'

function SolutionSection() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24" id="solution">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">La solution</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight text-ink md:text-5xl">
            Vous ne gérez plus un flux de messages.
            <br className="hidden md:block" />
            Vous mettez en scène une expérience.
          </h2>
          <p className="pt-5 text-base leading-relaxed text-ink/75 md:text-lg">
            Votre site privé personnalisé devient le support d’une organisation claire, fluide et désirable.
          </p>
          <p className="pt-4 text-base leading-relaxed text-ink/70">
            Moins de charge mentale. Plus de visibilité. Plus de plaisir à organiser.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="animate-fade-up rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-soft transition duration-300 hover:-translate-y-1"
            >
              <h3 className="font-serif text-2xl text-ink">{benefit.title}</h3>
              <p className="pt-4 text-base leading-relaxed text-ink/75">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
