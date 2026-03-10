export function CTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Ready to Transform Your Game?
        </h2>
        <p className="mt-3 text-sm text-indigo-100 sm:text-base">
          Join 18,000+ athletes training smarter with AI-matched coaches.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button className="inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 shadow-md shadow-black/10 hover:bg-slate-50">
            Find a Trainer Now
          </button>
          <button className="inline-flex items-center rounded-xl border border-white/70 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

