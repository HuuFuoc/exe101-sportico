import { Star } from 'lucide-react'

type Testimonial = {
  id: number
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Sportico matched me with the perfect tennis coach in minutes. My serve and footwork have completely transformed.',
    name: 'Emma Rodriguez',
    role: 'Tennis Player',
  },
  {
    id: 2,
    quote:
      'I finally found a badminton coach who understands my schedule and goals. The AI matching was spot on.',
    name: 'Kevin Park',
    role: 'Badminton Athlete',
  },
  {
    id: 3,
    quote:
      'The platform makes it so easy to communicate with my trainer and see my progress week by week.',
    name: 'Zoe Williams',
    role: 'Swimmer',
  },
]

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Success Stories
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm text-slate-600 sm:text-base">
            Athletes around the world trust Sportico to help them unlock their full
            potential.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-700">
                “{t.quote}”
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 text-xs font-semibold text-white">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

