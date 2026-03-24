import { painPoints } from '../content'

function ProblemSection() {
  return (
    <section className="border-y border-ink/10 bg-white/65 px-4 py-16 md:px-8 md:py-24" id="probleme">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Le constat</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight text-ink md:text-5xl">
            Organiser un EVJF, un EVG ou un week-end de groupe devient vite chaotique.
          </h2>
          <p className="pt-5 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
            Quand tout passe dans les messages, l énergie de l événement se transforme en logistique permanente.
          </p>
          <p className="pt-4 max-w-xl text-base leading-relaxed text-ink/70">
            Vous devriez préparer un moment inoubliable, pas jongler entre 30 conversations.
          </p>
        </div>
        <div className="grid gap-4">
          {painPoints.map((point) => (
            <article key={point} className="animate-fade-up rounded-2xl border border-ink/10 bg-ivory/90 p-5 shadow-soft">
              <p className="text-base leading-relaxed text-ink/80">{point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
