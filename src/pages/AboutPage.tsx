import { ArrowLeft } from 'lucide-react'
import { ReadyToBuildCta } from '../components/ReadyToBuildCta'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'

type Founder = {
  name: string
  role: string
  image?: string
  bio: string[]
}

const founders: Founder[] = [
  {
    name: 'Adrian Larsen',
    role: 'Founder & CEO',
    image: '/adrian-larsen-headshot.png',
    bio: [
      'Adrian Larsen has over 15 years of experience in RIA onboarding, custody platform strategy, and advisor transitions. He has held key roles at Fidelity Investments and LPL Financial, where he led complex RIA implementations, platform design initiatives, and large scale breakaway transitions. Adrian brings deep operational expertise and a modern, structured approach to helping advisors launch and scale independent firms with confidence.',
      'Across every role, Adrian has been the structural guide behind successful transitions, blending strategic clarity, operational precision, and a deep understanding of advisor psychology. His work has supported hundreds of advisors in launching, scaling, and optimizing their independent firms.',
      'Today, he brings that expertise to RIA Arch, helping advisors engineer the passage to independence with confidence and modern, platform ready structure.',
    ],
  },
  {
    name: 'Stephen Donovan',
    role: 'Co-Founder & CTO',
    image: '/stephen-donovan-headshot.png',
    bio: [
      'Stephen Donovan has over 10 years of experience developing technology in financial services. He was a product manager for Fidelity Wealthscape℠, focused on improving the operational experience for RIAs and Independent Broker Dealers. He then moved to an internal Fidelity team focused on utilizing emerging technologies to automate internal operational workflows.',
      'In 2025 he left Fidelity to launch Practycl AI, which utilizes AI to help custom manufacturing teams price their products based on the value they deliver to their customers instead of their input costs.',
      'In 2026 he joined Adrian in founding RIA Arch, bringing together his expertise in RIA firms operations and his experience developing AI and ML based systems.',
    ],
  },
]

export function AboutPage() {
  return (
    <main>
      <Section className="bg-hero-glow pb-16 pt-16 text-white md:pt-24">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold-100 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>
        <div className="mt-10 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-100">
            About RIA Arch
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Meet the founders engineering the path to independence.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-100">
            RIA Arch brings experienced transition leadership, custody platform strategy, and
            operational architecture together for advisors preparing to launch and scale independent
            firms.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Founder Bios"
          title="Guides for the modern RIA transition."
          subtitle="The team behind RIA Arch blends hands-on implementation experience with a structured, advisor-first approach to independence."
        />
        <div className="space-y-8">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm md:grid-cols-[280px_1fr] md:p-8"
            >
              {founder.image ? (
                <img
                  src={founder.image}
                  alt={`${founder.name} headshot`}
                  className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-panel"
                />
              ) : (
                <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-dashed border-gold-300 bg-white text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Founder Bio Coming Soon
                </div>
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
                  {founder.role}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900">
                  {founder.name}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
                  {founder.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <ReadyToBuildCta />
    </main>
  )
}
