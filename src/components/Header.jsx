import { links } from '../content'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <div className="font-serif text-2xl tracking-[0.12em] text-ink">Atelier Week-End</div>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.16em] text-ink/70 md:flex">
          <a href="#solution" className="transition hover:text-ink">Solution</a>
          <a href="#contenu" className="transition hover:text-ink">Contenu</a>
          <a href="#tarifs" className="transition hover:text-ink">Offres</a>
          <a href="#faq" className="transition hover:text-ink">FAQ</a>
        </nav>
        <a
          href={links.demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-ink/35 bg-white/90 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-ink transition hover:-translate-y-0.5 hover:border-ink"
        >
          Voir la démo
        </a>
      </div>
    </header>
  )
}

export default Header
