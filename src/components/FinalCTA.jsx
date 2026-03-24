import { links } from '../content'

function FinalCTA() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24" id="contact">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-ink/15 bg-gradient-to-r from-cream/60 via-ivory to-blush/40 p-7 text-center text-ink shadow-premium md:p-14">
        <p className="text-xs uppercase tracking-[0.2em] text-ink/55">Prêt à changer de niveau ?</p>
        <h2 className="mx-auto max-w-3xl pt-5 font-serif text-3xl leading-tight md:text-6xl">
          Offrez à votre événement une organisation
          <br className="hidden md:block" />
          qui se ressent dès le premier clic.
        </h2>
        <p className="mx-auto max-w-2xl pt-5 text-base leading-relaxed text-ink/75 md:text-lg">
          Moins de messages dispersés. Plus de clarté. Plus de sérénité.
        </p>
        <p className="mx-auto max-w-2xl pt-2 text-base leading-relaxed text-ink/70">
          Vos invités comprennent tout immédiatement. Vous pilotez votre week-end avec assurance.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={links.request}
            className="inline-flex w-full items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ivory transition hover:-translate-y-0.5 hover:bg-ink/90 sm:w-auto"
          >
            Demander mon site
          </a>
          <a
            href={links.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-ink/35 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-0.5 hover:border-ink sm:w-auto"
          >
            Voir la démo
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
