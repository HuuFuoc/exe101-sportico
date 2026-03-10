import { Target, Eye, Zap, ShieldCheck, Users, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Goal-Driven Matching",
    description:
      "Our AI analyses your goals, schedule, and fitness level to surface the most compatible coaches — saving you hours of research.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Excellence",
    description:
      "Every trainer on Sportico goes through a rigorous vetting process covering credentials, experience, and community reviews.",
  },
  {
    icon: Zap,
    title: "Instant Connection",
    description:
      "From profile discovery to booking, athletes can connect with their ideal coach in under five minutes.",
  },
];

const stats = [
  { value: "18 000+", label: "Active Athletes" },
  { value: "1 200+", label: "Verified Coaches" },
  { value: "30+", label: "Sports Covered" },
  { value: "4.9 / 5", label: "Average Rating" },
];

const team = [
  { name: "Alex Rivera", role: "CEO & Co-founder", initials: "AR" },
  { name: "Jamie Chen", role: "CTO & Co-founder", initials: "JC" },
  { name: "Morgan Lee", role: "Head of Product", initials: "ML" },
  { name: "Sam Patel", role: "Head of Coaching", initials: "SP" },
];

export function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0077b6] via-[#00b4d8] to-[#90e0ef] pb-24 pt-32 text-white sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-medium tracking-wide uppercase backdrop-blur">
            Our Story
          </span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Connecting Athletes with
            <br className="hidden sm:block" /> Elite Coaches, Powered by AI
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Sportico was founded on a simple belief: every dedicated athlete
            deserves access to world-class coaching — regardless of location or
            budget. We built the platform to make that a reality.
          </p>
        </div>
      </section>

      {/* ── Stats band ─────────────────────────────────── */}
      <section className="bg-[#caf0f8]">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-[#90e0ef] sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center bg-[#caf0f8] px-6 py-9 text-center"
            >
              <span className="text-2xl font-extrabold text-[#0077b6] sm:text-3xl">
                {value}
              </span>
              <span className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Who We Are ───────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-[#caf0f8] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#0077b6]">
            Who We Are
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            A platform built by athletes, for athletes
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            Sportico started in 2021 when our founders — former competitive athletes
            themselves — struggled to find quality coaching outside of professional
            sports circles. They built the technology they wished existed: an
            intelligent, inclusive marketplace where skill meets opportunity.
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-3">
            {[
              { year: '2021', event: 'Sportico founded in Barcelona' },
              { year: '2023', event: 'Expanded to 15 countries worldwide' },
              { year: '2026', event: '18 000+ athletes actively training' },
            ].map(({ year, event }) => (
              <div
                key={year}
                className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-6"
              >
                <span className="text-xl font-extrabold text-[#0077b6]">{year}</span>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ───────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-[#caf0f8] bg-[#caf0f8]/30 p-8">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0077b6]">
              <Target className="h-5 w-5 text-white" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900">
              Our Mission
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To democratise elite sports coaching by building an intelligent,
              accessible marketplace where motivated athletes can find the right
              coach for their unique journey — anytime, anywhere.
            </p>
          </div>

          <div className="rounded-2xl border border-[#90e0ef] bg-gradient-to-br from-[#0077b6] to-[#00b4d8] p-8 text-white">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
              <Eye className="h-5 w-5 text-white" />
            </div>
            <h2 className="mt-4 text-xl font-bold">Our Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              A world where talent is nurtured purely on merit — where a young
              athlete in any city can train with the same quality of coach as a
              professional athlete, guided by technology that truly understands
              sport.
            </p>
          </div>
        </div>
      </section>

      {/* ── Platform Values ────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#caf0f8] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#0077b6]">
              What We Stand For
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Built around athlete success
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 sm:text-base">
              Every feature, decision, and partnership at Sportico starts with
              one question: does this genuinely help athletes improve?
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00b4d8]">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Highlights ────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#0077b6] to-[#00b4d8]">
            <div className="grid md:grid-cols-2">
              {/* Text */}
              <div className="flex flex-col justify-center p-10 text-white lg:p-14">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
                  The Sportico Platform
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/85">
                  We combine AI-driven matching, real-time messaging, video
                  session tools, and progress analytics into a single seamless
                  experience. Whether you're a weekend warrior or a competitive
                  athlete, Sportico scales with your ambitions.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  {[
                    "AI coach matching in seconds",
                    "Integrated booking & scheduling",
                    "Progress tracking & performance analytics",
                    "Secure in-app payments",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#caf0f8]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Decorative panel */}
              <div className="hidden items-center justify-center bg-white/10 p-10 md:flex">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Users, label: "Community" },
                    { icon: Zap, label: "Speed" },
                    { icon: ShieldCheck, label: "Trust" },
                    { icon: BarChart3, label: "Growth" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-2 rounded-2xl bg-white/15 p-5 backdrop-blur"
                    >
                      <Icon className="h-6 w-6 text-white" />
                      <span className="text-xs font-semibold text-white">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#caf0f8] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#0077b6]">
              The Team
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              People behind Sportico
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(({ name, role, initials }) => (
              <div
                key={name}
                className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0077b6] to-[#00b4d8] text-lg font-extrabold text-white shadow-md">
                  {initials}
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-900">
                  {name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#0077b6] via-[#00b4d8] to-[#90e0ef] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Start Your Journey Today
          </h2>
          <p className="mt-3 text-sm text-white/80 sm:text-base">
            Join thousands of athletes already training smarter with Sportico.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button className="inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#0077b6] shadow-md hover:bg-[#caf0f8]">
              Find a Trainer
            </button>
            <button className="inline-flex items-center rounded-xl border border-white/60 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
