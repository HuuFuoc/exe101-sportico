import { MapPin, Clock, Star } from 'lucide-react'

export type Trainer = {
  id: number
  name: string
  sport: string
  location: string
  experience: string
  price: string
  modes: string[]
  imageUrl: string
  rating: string
}

type TrainerCardProps = {
  trainer: Trainer
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <img
          src={trainer.imageUrl}
          alt={trainer.name}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent" />

        <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm">
          Featured
        </div>

        <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur">
          <Star className="h-3 w-3 fill-amber-300 text-amber-300" />
          <span>{trainer.rating}</span>
        </div>
      </div>

      <div className="space-y-4 px-5 pb-5 pt-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{trainer.name}</h3>
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
            {trainer.sport}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {trainer.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {trainer.experience}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-sm font-extrabold text-slate-900">
              {trainer.price}
              <span className="ml-1 text-xs font-normal text-slate-500">/hr</span>
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {trainer.modes.map((mode) => (
                <span
                  key={mode}
                  className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                >
                  {mode}
                </span>
              ))}
            </div>
          </div>

          <button className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800">
            View Profile
          </button>
        </div>
      </div>
    </article>
  )
}

