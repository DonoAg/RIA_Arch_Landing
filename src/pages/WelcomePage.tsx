import {
  ArrowRight,
  Building2,
  ClipboardList,
  Compass,
  Database,
  FileCheck2,
  FileSignature,
  Gauge,
  Handshake,
  Layers,
  LayoutDashboard,
  MessageSquare,
  Network,
  Rocket,
  Scale,
  Share2,
  ShieldCheck,
  Users,
  Wrench,
  Workflow,
} from 'lucide-react'
import { ReadyToBuildCta } from '../components/ReadyToBuildCta'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'

const pillars = [
  {
    title: 'Structural Expertise',
    body: 'We design every workflow, form, and decision point with architectural precision.',
    icon: Layers,
  },
  {
    title: 'Guided Journey',
    body: 'From planning to launch day, we guide advisors through every step of the transition.',
    icon: Compass,
  },
  {
    title: 'Modern Onboarding',
    body: 'Digital onboarding and automation with multi-custodian orchestration built for speed.',
    icon: Workflow,
  },
]

const methodSteps = [
  {
    title: 'Blueprint',
    detail: 'Strategic planning, vendor selection, compliance readiness, and launch architecture.',
    icon: FileCheck2,
  },
  {
    title: 'Build',
    detail: 'Data ingestion, account mapping, workflow design, and operational setup.',
    icon: Building2,
  },
  {
    title: 'Transition',
    detail: 'Repapering, envelope automation, custodian coordination, and client communication.',
    icon: Network,
  },
  {
    title: 'Launch',
    detail: 'Day-one readiness, platform training, and post-launch optimization.',
    icon: Rocket,
  },
]

const benefits = [
  {
    title: 'Confidence in the Execution Strategy',
    description: 'A structured, end-to-end transition framework creates clarity on what happens next.',
    icon: ShieldCheck,
  },
  {
    title: 'Faster Onboarding',
    description: 'Digital-first onboarding workflows reduce friction and accelerate account activation.',
    icon: Gauge,
  },
  {
    title: 'Less Operational Effort to Transition',
    description: 'Automated workflows and coordinated task orchestration remove manual operational drag.',
    icon: Wrench,
  },
  {
    title: 'Improved Client Experience',
    description:
      'Clear communication and streamlined onboarding create a smoother client transition journey.',
    icon: Handshake,
  },
]

const capabilities = [
  { title: 'Build and execute a project plan', icon: ClipboardList },
  { title: 'Advisor + client communication templates', icon: MessageSquare },
  {
    title: 'Advisory agreement and change of broker dealer (if applicable)',
    icon: FileCheck2,
  },
  { title: 'Household data ingestion', icon: Database },
  { title: 'Digital onboarding workflows', icon: ClipboardList },
  { title: 'DocuSign envelope automation', icon: FileSignature },
  { title: 'Multi-custodian orchestration', icon: Share2 },
  { title: 'Compliance-aligned workflows', icon: Scale },
  { title: 'Transition project dashboard', icon: LayoutDashboard },
  { title: 'Experienced onboarding resources with on-site or remote support', icon: Users },
]

export function WelcomePage() {
  return (
    <main id="top">
      <Section className="relative overflow-hidden bg-hero-glow pb-20 pt-20 text-white md:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900/35 via-navy-900/10 to-transparent" />
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative rounded-3xl border border-white/15 bg-navy-900/35 p-8 shadow-panel backdrop-blur-sm md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-100">
              RIA Arch
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Your gateway to independence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100">
              Architectural precision for advisor transitions, onboarding, and RIA launch execution.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://calendar.app.google/QqGMUy2DgtSY9tQk7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-gold-200/80 bg-white/10 px-6 py-3 text-sm font-semibold text-gold-100 transition hover:bg-white/20"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex h-[300px] w-full max-w-[350px] items-center justify-center rounded-3xl border border-gold-200/60 bg-navy-900/55 p-4 shadow-panel ring-1 ring-white/20 backdrop-blur-md">
            <img
              src="/favicon.png"
              alt="RIA Arch icon"
              className="h-full w-full max-h-[270px] max-w-[270px] object-contain"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-white py-10">
        <p className="text-center text-sm font-medium text-slate-600">
          Trusted by advisors transitioning from the industry&apos;s leading firms.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          <span>Wirehouse advisors</span>
          <span className="text-gold-400">•</span>
          <span>Independent broker-dealers</span>
          <span className="text-gold-400">•</span>
          <span>Multi-custodian RIAs</span>
          <span className="text-gold-400">•</span>
          <span>Breakaway teams</span>
        </div>
      </Section>

      <Section id="services" className="bg-slate-50">
        <SectionHeader
          centered
          eyebrow="Value Proposition"
          title="Independence is not a leap, it is an engineered journey."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Icon className="text-gold-400" size={26} />
                <h3 className="mt-4 text-xl font-semibold text-navy-900">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{pillar.body}</p>
              </article>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 transition hover:text-navy-900"
          >
            Explore The RIA Arch Method
            <ArrowRight size={16} />
          </a>
        </div>
      </Section>

      <Section id="process" className="bg-white">
        <SectionHeader
          centered
          eyebrow="The RIA Arch Method"
          title="A transition framework built for clarity and confidence."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {methodSteps.map((step) => {
            const Icon = step.icon
            return (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6"
              >
                <div className="flex justify-end">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{step.detail}</p>
              </article>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#benefits"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 transition hover:text-navy-900"
          >
            See Service Benefits
            <ArrowRight size={16} />
          </a>
        </div>
      </Section>

      <Section id="benefits" className="bg-slate-50">
        <SectionHeader
          centered
          eyebrow="Digital First Benefits"
          title="RIA Arch Utilizes a Digital-First Approach to Guide Your Transition Seamlessly."
        />
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-navy-900">Services</h3>
            <ul className="mt-6 space-y-4">
              {capabilities.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.title} className="flex items-start gap-3 text-slate-700">
                    <div className="inline-flex rounded-lg bg-gold-100 p-2">
                      <Icon className="shrink-0 text-navy-900" size={16} />
                    </div>
                    <span>{item.title}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-navy-900">Benefits</h3>
            <div className="mt-6 space-y-5">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <article key={benefit.title} className="flex items-start gap-4">
                    <div className="inline-flex rounded-xl bg-gold-100 p-3">
                      <Icon size={20} className="text-navy-900" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-navy-900">{benefit.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href="#/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 transition hover:text-navy-900"
          >
            Meet The Team Behind The Method
            <ArrowRight size={16} />
          </a>
        </div>
      </Section>

      <ReadyToBuildCta />
    </main>
  )
}
