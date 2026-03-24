import { steps } from '../content'

function HowItWorksSection() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24" id="comment">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Comment ça marche</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight text-ink md:text-5xl">Trois étapes. Une organisation transformée.</h2>
          <p className="pt-5 text-base leading-relaxed text-ink/75 md:text-lg">
            Vous avancez vite, sans complexité technique, avec un accompagnement clair.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.step} className="animate-fade-up rounded-3xl border border-ink/10 bg-beige/50 p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.22em] text-ink/45">Étape {step.step}</p>
              <h3 className="pt-4 font-serif text-3xl leading-tight text-ink">{step.title}</h3>
              <p className="pt-4 leading-relaxed text-ink/75">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
