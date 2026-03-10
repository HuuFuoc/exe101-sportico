import { ChevronRight, Star } from 'lucide-react'
import { TrainerCard, type Trainer } from './TrainerCard'

const trainers: Trainer[] = [
  {
    id: 1,
    name: 'Marcus Johnson',
    sport: 'Badminton',
    location: 'Ho Chi Minh',
    experience: '8 yrs exp',
    price: '$60',
    modes: ['In-Person', 'Virtual', 'Group'],
    imageUrl: 'https://images.unsplash.com/photo-1550534791-2677533605ab?w=800&q=80',
    rating: '4.9',
  },
  {
    id: 2,
    name: 'Darius Williams',
    sport: 'Football',
    location: 'Ho Chi Minh',
    experience: '10 yrs exp',
    price: '$55',
    modes: ['In-Person', 'Group', 'Team'],
    imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
    rating: '4.8',
  },
  {
    id: 3,
    name: 'Aisha Thompson',
    sport: 'Basketball',
    location: 'Ho Chi Minh',
    experience: '9 yrs exp',
    price: '$70',
    modes: ['In-Person', 'Group'],
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    rating: '4.9',
  },
]

export function FeaturedTrainers() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-amber-500">
              <Star className="h-3.5 w-3.5 fill-amber-400" />
              <span>Top Rated</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Featured Trainers
            </h2>
          </div>

          <button className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
            View All Trainers
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  )
}

