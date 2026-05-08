import { ArrowLeft, HelpCircle } from 'lucide-react'
import { ReadyToBuildCta } from '../components/ReadyToBuildCta'
import { Section } from '../components/Section'

type Faq = {
  question: string
  answer: string[]
}

const faqs: Faq[] = [
  {
    question: 'What service(s) does RIA Arch provide?',
    answer: [
      'RIA Arch assists advisors who are transitioning firms with getting customer data ready for their next step. Our AI enabled platform saves you time by assimilating data from any source, including exports, photographs, and statements, and ensuring it is valid, complete, and consistent before it is sent to your new custodian or any new provider in your tech stack.',
      'Along the way, an experienced transition specialist will help you formulate a plan, draft client communication templates, and resolve data exceptions that may occur.',
    ],
  },
  {
    question: "You're a consulting service and a digital platform. What do I get from each?",
    answer: [
      "RIA Arch's transition specialist will help you formulate a plan for moving your customer's accounts or digital data and provide guidance on communicating to either clients or advisors.",
      "RIA Arch's digital platform helps expedite your transition by pulling together data from any source or format and validates it using a combination of AI and custodian account registration specific rules. It gives you the ability to repair any incorrect data or complete any missing information before digitally passing it to any downstream custodian form or tech stack application you need.",
      "While we're proud of the technology's ability to let us move faster, we also recognize the need for an experienced set of eyes to double check everything. Therefore the transition specialist will also help identify inconsistencies the AI might have missed, guide you through repairing the data prior to submission, and help you resolve any NIGOs that may slip through to the custodian.",
    ],
  },
  {
    question: 'Will the transition specialist be on-site to support me?',
    answer: [
      'By default, our transition specialist will support you remotely, but if you want us to be on-site during your transition, that is an additional service we can provide.',
    ],
  },
  {
    question: "You're using AI. Are you sending my customers' data to OpenAI, Anthropic, etc.?",
    answer: [
      'No. If you already have a secure connection to an AI provider, RIA Arch will connect to that. If you do not have one, RIA Arch will host a personal AI model for your transition that will be deleted upon successfully migrating your customer data. No customer data will be sent to any external provider not designated by you.',
    ],
  },
]

export function FaqPage() {
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
            FAQ
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Answer for Advisors Preparing to Transition
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-100">
            Learn how RIA Arch combines a guided consulting experience with a secure digital
            platform.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="space-y-6">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 inline-flex rounded-xl bg-gold-100 p-3">
                  <HelpCircle size={20} className="text-navy-900" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-navy-900">
                    {faq.question}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
                    {faq.answer.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
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
