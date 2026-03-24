import { faqItems } from '../content'

function FAQSection() {
  return (
    <section className="border-y border-ink/10 bg-white/65 px-5 py-24 md:px-8" id="faq">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">FAQ</p>
          <h2 className="pt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">Les questions qu’on me pose le plus souvent.</h2>
          <p className="pt-5 text-lg leading-relaxed text-ink/75">
            Tout est pensé pour que vous avanciez vite, sereinement, et sans complexité.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqItems.map((faq) => (
            <details key={faq.question} className="animate-fade-up rounded-2xl border border-ink/10 bg-ivory/75 p-5">
              <summary className="cursor-pointer list-none pr-8 font-medium text-ink">{faq.question}</summary>
              <p className="pt-4 leading-relaxed text-ink/75">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
