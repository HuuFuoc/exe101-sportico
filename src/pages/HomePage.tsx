import { CTA } from '../components/CTA'
import { FeaturedTrainers } from '../components/FeaturedTrainers'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { Stats } from '../components/Stats'
import { Testimonials } from '../components/Testimonials'

export function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <Hero />
      <Stats />
      <HowItWorks />
      <FeaturedTrainers />
      <Testimonials />
      <CTA />
    </main>
  )
}

