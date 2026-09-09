import {
  ArrowLeft,
  ArrowRight,
  Check,
  Database,
  Eye,
  FileSearch,
  GitCompareArrows,
  Minus,
  Network,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { ReadyToBuildCta } from '../components/ReadyToBuildCta'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'

const problems = [
  {
    number: '1',
    title: 'Gathering client and account information takes too much advisor time.',
    detail:
      'Data must support custodian applications, CRM updates, and firm-specific compliance rules.',
  },
  {
    number: '2',
    title: 'Complex forms create avoidable NIGOs and delays.',
    detail: 'Small misses can prevent accounts from opening and assets from moving.',
  },
  {
    number: '3',
    title: 'Traditional PDF prep is labor-intensive and still error-prone.',
    detail: 'Transition teams need speed, visibility, and validation before submission.',
  },
]

const whatGetsLost = [
  { label: 'Clean source data', icon: Database },
  { label: 'Consistent field mapping', icon: GitCompareArrows },
  { label: 'Real-time review', icon: Eye },
  { label: 'Pre-submission validation', icon: ShieldCheck },
]

const offerSteps = [
  {
    number: '1',
    title: 'Extract',
    detail: 'Pull pre-fill information from any data source and reduce advisor spreadsheet work.',
    icon: FileSearch,
  },
  {
    number: '2',
    title: 'Preview',
    detail: 'Give advisors an online experience to review and download paperwork in real time.',
    icon: Eye,
  },
  {
    number: '3',
    title: 'Validate',
    detail: 'Catch inconsistencies and known errors upfront to reduce common NIGOs.',
    icon: ShieldCheck,
  },
  {
    number: '4',
    title: 'Submit',
    detail:
      'Send for eSignature or upload to your systems with fewer errors, less rework, and a smoother transition.',
    icon: Network,
  },
]

type FeatureValue = boolean

type ServiceTier = {
  whiteGlove: FeatureValue
  custodianOnly: FeatureValue
  aiAssisted: FeatureValue
}

type FeatureRow = {
  label: string
  exclusive?: boolean
} & ServiceTier

const featureRows: FeatureRow[] = [
  {
    label: 'Custodian-specific form prefill',
    whiteGlove: true,
    custodianOnly: true,
    aiAssisted: true,
  },
  {
    label: 'Firm-specific form prefill (IMAs, etc.)',
    whiteGlove: true,
    custodianOnly: false,
    aiAssisted: false,
  },
  {
    label: 'Dedicated project manager',
    whiteGlove: true,
    custodianOnly: true,
    aiAssisted: false,
  },
  {
    label: 'Onboarding plan for client accounts',
    whiteGlove: true,
    custodianOnly: true,
    aiAssisted: false,
  },
  {
    label: 'Access to prepped paperwork in real time',
    exclusive: true,
    whiteGlove: true,
    custodianOnly: true,
    aiAssisted: true,
  },
  {
    label: 'Email support and guidance',
    whiteGlove: true,
    custodianOnly: true,
    aiAssisted: true,
  },
  {
    label: 'Onsite support if requested',
    whiteGlove: true,
    custodianOnly: false,
    aiAssisted: false,
  },
  {
    label: 'RIA Arch-led quality control',
    whiteGlove: true,
    custodianOnly: true,
    aiAssisted: false,
  },
  {
    label: 'Client-led quality control',
    whiteGlove: false,
    custodianOnly: false,
    aiAssisted: true,
  },
  {
    label: 'Error resolution and submission support',
    whiteGlove: true,
    custodianOnly: true,
    aiAssisted: false,
  },
  {
    label: 'DocuSign upload and submission',
    whiteGlove: true,
    custodianOnly: false,
    aiAssisted: false,
  },
]

const tiers = [
  {
    id: 'whiteGlove' as const,
    name: 'White Glove',
    tagline: 'Full-service transition ownership',
    recommended: true,
  },
  {
    id: 'custodianOnly' as const,
    name: 'Custodian Only',
    tagline: 'Custodian-led preparation with RIA Arch support',
    recommended: false,
  },
  {
    id: 'aiAssisted' as const,
    name: 'AI-Assisted',
    tagline: 'Automated preparation with client-led review',
    recommended: false,
  },
]

const differentiators = [
  {
    number: '01',
    title: 'Expert guidance + AI-native software',
    detail: 'Blend transition expertise with automation that accelerates the heavy lift.',
  },
  {
    number: '02',
    title: 'Reduced effort, better quality',
    detail: 'Create and validate account paperwork with fewer manual handoffs.',
  },
  {
    number: '03',
    title: 'Real-time visibility',
    detail: 'Give teams a live view into paperwork creation and review status.',
  },
]

function FeatureMark({ included }: { included: boolean }) {
  if (included) {
    return <Check size={18} className="mx-auto text-navy-900" aria-label="Included" />
  }

  return <Minus size={18} className="mx-auto text-slate-300" aria-label="Not included" />
}

export function OverviewPage() {
  return (
    <main>
      <Section className="bg-hero-glow pb-12 pt-14 text-white md:pb-16 md:pt-20">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold-100 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>
        <div className="mt-8 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-100">
            Advisor Transition Consulting
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Introduction to RIA Arch
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-100 md:text-xl">
            Technology-enabled document prep, validation, and transition support for RIA
            onboarding.
          </p>
        </div>
      </Section>

      <Section className="bg-white py-12 lg:py-16">
        <SectionHeader
          centered
          eyebrow="The Core Problem"
          title="Transitions stall when data, forms, and quality control live in disconnected workflows."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm md:p-6"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold-100 text-sm font-semibold text-navy-900">
                {problem.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-navy-900">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{problem.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
            What gets lost
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whatGetsLost.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-navy-900"
                >
                  <div className="inline-flex rounded-lg bg-gold-100 p-2">
                    <Icon className="shrink-0 text-navy-900" size={16} />
                  </div>
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50 py-12 lg:py-16">
        <SectionHeader
          centered
          eyebrow="Why RIA Arch?"
          title="A faster, cleaner way to move advisors from transition kickoff to funded accounts."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {differentiators.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
                {item.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 transition hover:text-navy-900"
          >
            Meet the team behind the method
            <ArrowRight size={16} />
          </a>
        </div>
      </Section>

      <Section className="bg-white py-12 lg:py-16">
        <SectionHeader
          centered
          eyebrow="What RIA Arch Offers"
          title="A guided transition workflow that turns messy source material into cleaner paperwork and submissions."
          subtitle="From source data to validated paperwork."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {offerSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <article
                key={step.title}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold-100 text-sm font-semibold text-navy-900">
                    {step.number}
                  </span>
                  <Icon size={22} className="text-gold-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{step.detail}</p>
                {index < offerSteps.length - 1 ? (
                  <div className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 xl:flex">
                    <div className="rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
                      <ArrowRight size={14} className="text-gold-500" />
                    </div>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </Section>

      <Section className="bg-slate-50 py-12 lg:py-16">
        <SectionHeader
          centered
          eyebrow="Service Options"
          title="Choose how much of the transition RIA Arch owns."
        />

        <div className="grid gap-5 lg:hidden">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className={`rounded-2xl border p-6 shadow-sm ${
                tier.recommended
                  ? 'border-gold-300 bg-gold-100/40 ring-1 ring-gold-300/60'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-navy-900">{tier.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{tier.tagline}</p>
                </div>
                {tier.recommended ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-100">
                    <Sparkles size={12} />
                    Recommended
                  </span>
                ) : null}
              </div>
              <ul className="mt-6 space-y-3">
                {featureRows.map((row) => {
                  const included = row[tier.id]
                  return (
                    <li key={row.label} className="flex items-start gap-3 text-sm text-slate-700">
                      {included ? (
                        <Check size={16} className="mt-0.5 shrink-0 text-navy-900" />
                      ) : (
                        <Minus size={16} className="mt-0.5 shrink-0 text-slate-300" />
                      )}
                      <span className={included ? '' : 'text-slate-400'}>
                        {row.label}
                        {row.exclusive ? (
                          <span className="mt-1 block text-xs font-medium text-gold-400">
                            Exclusive to RIA Arch — not offered by competitors.
                          </span>
                        ) : null}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>

        <div className="hidden overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:block">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-slate-200 bg-slate-50">
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
                Features
              </p>
              <p className="mt-2 text-sm text-slate-600">Included by engagement model</p>
            </div>
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`border-l border-slate-200 p-5 text-center ${
                  tier.recommended ? 'bg-gold-100/50' : ''
                }`}
              >
                {tier.recommended ? (
                  <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-navy-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-100">
                    <Sparkles size={11} />
                    Recommended
                  </span>
                ) : (
                  <span className="mb-2 inline-block h-6" />
                )}
                <h3 className="text-lg font-semibold text-navy-900">{tier.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{tier.tagline}</p>
              </div>
            ))}
          </div>

          {featureRows.map((row, index) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1.4fr_1fr_1fr_1fr] ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
              }`}
            >
              <div className="p-4 text-sm text-slate-700">
                {row.label}
                {row.exclusive ? (
                  <span className="mt-1 block text-xs font-medium text-gold-400">
                    Exclusive to RIA Arch — not offered by competitors.
                  </span>
                ) : null}
              </div>
              <div
                className={`flex items-center justify-center border-l border-slate-200 p-4 ${
                  tiers[0].recommended ? 'bg-gold-100/20' : ''
                }`}
              >
                <FeatureMark included={row.whiteGlove} />
              </div>
              <div className="flex items-center justify-center border-l border-slate-200 p-4">
                <FeatureMark included={row.custodianOnly} />
              </div>
              <div className="flex items-center justify-center border-l border-slate-200 p-4">
                <FeatureMark included={row.aiAssisted} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ReadyToBuildCta />
    </main>
  )
}
