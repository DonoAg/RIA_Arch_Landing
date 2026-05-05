import { ArrowRight } from 'lucide-react'
import { Section } from './Section'

export function ReadyToBuildCta() {
  return (
    <Section id="contact" className="bg-cta-glow text-white">
      <div className="rounded-3xl border border-gold-300/30 bg-black/15 p-8 md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-200">
          Ready To Build
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          Ready to build your independence?
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-slate-200">
          Let&apos;s design the structure that carries your firm forward.
        </p>
        <a
          href="https://calendar.app.google/QqGMUy2DgtSY9tQk7"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-300 px-6 py-3 text-sm font-semibold text-navy-900 transition hover:bg-gold-200"
        >
          Book a Strategy Call
          <ArrowRight size={16} />
        </a>
      </div>
    </Section>
  )
}
