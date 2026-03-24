import { links } from '../content'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <div className="font-serif text-xl tracking-[0.08em] text-ink md:text-2xl md:tracking-[0.12em]">Atelier Week-End</div>
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
          className="rounded-full border border-ink/35 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:-translate-y-0.5 hover:border-ink md:px-5 md:py-2.5 md:text-xs md:tracking-[0.15em]"
        >
          Voir la démo
        </a>
      </div>
    </header>
  )
}

export default Header
