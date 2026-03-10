import { Bot, Search, Sparkles, Target } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Tell Sportico your goals',
    description:
      'Chat with our AI assistant about your sport, skill level, schedule, and training objectives.',
    icon: Target,
    accent: 'from-emerald-400/15 to-cyan-400/10',
  },
  {
    id: 2,
    title: 'Get matched instantly',
    description:
      'Our AI analyzes thousands of trainer profiles to find the perfect match.',
    icon: Search,
    accent: 'from-indigo-500/15 to-sky-500/10',
  },
  {
    id: 3,
    title: 'Start training',
    description:
      'Connect with your trainer, book sessions, and track your progress.',
    icon: Sparkles,
    accent: 'from-amber-400/15 to-rose-400/10',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            <Bot className="h-3.5 w-3.5" />
            <span>AI-Powered Process</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How Sportico Works
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
            Our intelligent platform simplifies the process of finding the right coach.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.id}
              className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm shadow-slate-200/60"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${step.accent}`}
              />
              <div className="relative flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-900 shadow-sm">
                  {step.id}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                  <step.icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="relative mt-5 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

