import { Bot, CheckCircle2, Search, UserPlus } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 text-white sm:pt-28 lg:pt-32">
      {/* gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_bottom,_rgba(52,211,153,0.28),transparent_55%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-12 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pb-20">
        {/* Left content */}
        <div className="max-w-xl space-y-6 lg:max-w-lg">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-sky-200 backdrop-blur">
            <Bot className="h-3.5 w-3.5" />
            <span>AI-Powered Sportico Platform</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Find Your Perfect
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-300 bg-clip-text text-transparent">
              Sports Coach
            </span>{' '}
            with us
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Connect with elite coaches across 30+ sports. Our AI assistant matches you
            with the best trainer based on your goals, schedule, and budget.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 hover:bg-indigo-600">
              <Search className="h-4 w-4" />
              Find a Coach
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              <UserPlus className="h-4 w-4" />
              Become a Coach
            </button>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-200 sm:text-sm">
            <FeatureItem label="No commitment required" />
            <FeatureItem label="Free AI matching" />
            <FeatureItem label="Verified trainers" />
          </div>
        </div>

        {/* Right image */}
        <div className="relative shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-sky-500/30 ring-1 ring-sky-500/40 lg:w-[420px]">
          <div
            className="h-full w-full bg-cover bg-center pt-[125%]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80&auto=format&fit=crop')",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-slate-200">
      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
      {label}
    </span>
  )
}

