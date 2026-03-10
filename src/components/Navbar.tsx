import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Find Trainers', to: '/trainers', highlighted: true },
  { label: 'Messages', to: '/messages' },
  { label: 'Dashboard', to: '/dashboard' },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#E2E8F0] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0077B6] text-sm font-black text-white">
            S
          </div>
          <span className="text-lg font-extrabold tracking-tight text-[#0F172A]">
            SPORTICO
          </span>
        </Link>

        {/* Center nav */}
        <div className="hidden gap-8 text-sm font-medium text-[#64748B] md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'relative inline-flex items-center transition-colors',
                  isActive || item.highlighted
                    ? 'text-[#0077B6]'
                    : 'hover:text-[#0F172A]',
                ].join(' ')
              }
            >
              {({ isActive }) =>
                item.highlighted || isActive ? (
                  <>
                    <span>{item.label}</span>
                    <span className="absolute inset-x-0 -bottom-2 mx-auto h-0.5 w-8 rounded-full bg-[#00B4D8]" />
                  </>
                ) : (
                  <span>{item.label}</span>
                )
              }
            </NavLink>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-[#0F172A] hover:bg-slate-100 sm:inline-flex">
            Sign Out
          </button>
          <button className="inline-flex rounded-lg bg-[#0077B6] px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm shadow-[#0077B6]/40 hover:bg-[#005f91] sm:px-4 sm:py-2">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}

