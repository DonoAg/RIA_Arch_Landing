import {
  ArrowRight,
  ClipboardList,
  Database,
  FileCheck2,
  FileSignature,
  Gauge,
  Handshake,
  LayoutDashboard,
  MessageSquare,
  Network,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react'
import { ReadyToBuildCta } from '../components/ReadyToBuildCta'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'

const pillars = [
  {
    title: 'Import Data from Any Source',
    body: 'We pull data from your current tools, reports, and files so your team avoids manual re-entry.',
    icon: Database,
  },
  {
    title: 'Validate, Resolve, and Standardize',
    body: 'RIA Arch fills in data, flags issues, and helps you fix them before anything is submitted.',
    icon: ShieldCheck,
  },
  {
    title: 'Technology First, Expert Backed',
    body: 'Experienced transition specialists support planning, templates, and exception resolution.',
    icon: Users,
  },
]

const methodSteps = [
  {
    title: 'Ingest',
    detail: 'Upload any exports, statements, or files you have and RIA Arch will automatically extract relevant data.',
    icon: Database,
  },
  {
    title: 'Validate and Resolve',
    detail:
      'We flag missing or conflicting information so you can correct it quickly in one place.',
    icon: ShieldCheck,
  },
  {
    title: 'Pre-Fill and Standardize',
    detail: 'Clean data is used to pre-fill custodian paperwork and other downstream systems.',
    icon: FileSignature,
  },
  {
    title: 'Submit with confidence',
    detail: 'Send for eSignature or upload to your systems with fewer errors and less rework.',
    icon: Network,
  },
]

const benefits = [
  {
    title: 'Transition Faster',
    description: 'Automation cuts manual work so you can complete your transition sooner.',
    icon: Gauge,
  },
  {
    title: 'Fewer NIGOs and Rework',
    description: 'Issues are caught early, so fewer items come back for correction.',
    icon: FileCheck2,
  },
  {
    title: 'More Consistent Data',
    description: 'The same clean data flows into your core systems and reduces mismatches.',
    icon: Workflow,
  },
  {
    title: 'Less Stress on your Team',
    description: 'Your specialist helps with planning, communications, and exceptions when they happen.',
    icon: Handshake,
  },
]

const platformCapabilities = [
  { title: 'Pull data from your current tools, reports, and files', icon: Database },
  { title: 'Auto-fill key fields to save time', icon: Workflow },
  { title: 'Flag missing or conflicting information', icon: ShieldCheck },
  { title: 'Review and fix issues in one digital workspace', icon: LayoutDashboard },
  { title: 'Pre-fill custodian forms for eSignature or upload', icon: FileSignature },
  { title: 'Send clean data to your core business systems', icon: Network },
]

const expertSupportCapabilities = [
  { title: 'Transition specialist to build and execute the project plan', icon: ClipboardList },
  { title: 'Advisor and client communication template development', icon: MessageSquare },
  { title: 'Hands-on review of data before final submission', icon: FileCheck2 },
  { title: 'Help resolving exceptions if anything slips through', icon: Users },
]

export function WelcomePage() {
  return (
    <main id="top">
      <Section className="relative overflow-hidden bg-hero-glow pb-20 pt-20 text-white md:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900/35 via-navy-900/10 to-transparent" />
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative rounded-3xl border border-white/15 bg-navy-900/35 p-7 shadow-panel backdrop-blur-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-100">
              RIA Arch
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Your gateway to independence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100">
              RIA Arch ingests data from any source, validates and standardizes it, then pre-fills and submits clean data to custodians and enterprise systems.
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

          <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center rounded-3xl border border-gold-200/60 bg-navy-900/55 p-3 shadow-panel ring-1 ring-white/20 backdrop-blur-md">
            <img
              src="/ria-arch-technology-flow-expert-guidance.png"
              alt="RIA Arch technology flow from source data to validated destination uploads"
              className="h-full w-full rounded-2xl object-cover"
              onError={(event) => {
                event.currentTarget.src = '/favicon.png'
                event.currentTarget.className = 'h-full w-full max-h-[270px] max-w-[270px] object-contain'
              }}
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

      <Section id="value" className="bg-slate-50">
        <SectionHeader
          centered
          eyebrow="WHY RIA ARCH?"
          title="Leverage Industry Expertise and Cutting-Edge Technology"
          subtitle="RIA Arch provides expert support through the transition process while utilizing technology to automate the heavy lifting."
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
            See The 4-Step Process
            <ArrowRight size={16} />
          </a>
        </div>
      </Section>

      <Section id="process" className="bg-white">
        <SectionHeader
          centered
          eyebrow="The RIA Arch Method"
          title="A simple process that helps you move faster with fewer errors."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {methodSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <article
                key={step.title}
                className="relative rounded-2xl border border-slate-200 bg-slate-50/70 p-6"
              >
                <div className="flex justify-end">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{step.detail}</p>
                {index < methodSteps.length - 1 ? (
                  <div className="pointer-events-none absolute -right-5 top-1/2 hidden -translate-y-1/2 xl:flex">
                    <div className="rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
                      <ArrowRight size={14} className="text-gold-500" />
                    </div>
                  </div>
                ) : null}
              </article>
            )
          })}
          <article className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 md:col-span-2 xl:col-span-4">
            <div className="flex justify-end">
              <Users size={22} className="text-gold-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-navy-900">
              Expert Support Through Every Step
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              While the platform handles the heavy lifting, your transition specialist helps you plan,
              communicate with clients, and resolve exceptions at each stage of the process.
            </p>
          </article>
        </div>
        <div className="mt-10 text-center">
          <a
            href="#benefits"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 transition hover:text-navy-900"
          >
            Services and Outcomes
            <ArrowRight size={16} />
          </a>
        </div>
      </Section>

      <Section id="benefits" className="bg-slate-50">
        <SectionHeader
          centered
          eyebrow="TECHNOLOGY AND EXPERTISE COMBINED TO SUPPORT YOUR TRANSITION"
          title="Less Manual Work, Fewer Errors, and Expert Support."
        />
        <div className="grid items-stretch gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-navy-900">Platform Capabilities</h3>
            <ul className="mt-6 space-y-4">
              {platformCapabilities.map((item) => {
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
            <h3 className="text-xl font-semibold text-navy-900">Expert Guidance</h3>
            <ul className="mt-6 space-y-4">
              {expertSupportCapabilities.map((item) => {
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
