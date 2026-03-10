import { Trophy, Star, Users, Activity } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '2,400+',
    label: 'Expert Trainers',
  },
  {
    icon: Star,
    value: '4.8',
    label: 'Average Rating',
  },
  {
    icon: Activity,
    value: '18K+',
    label: 'Active Learners',
  },
  {
    icon: Trophy,
    value: '30+',
    label: 'Sports Covered',
  },
]

export function Stats() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-center text-sm text-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.8)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-xl font-extrabold sm:text-2xl">{stat.value}</p>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

