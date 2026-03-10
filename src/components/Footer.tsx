export function Footer() {
  return (
    <footer className="bg-[#022d45] text-slate-300">
      {/* Gradient accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0077b6] via-[#00b4d8] to-[#90e0ef]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Link columns ───────────────────────────────── */}
        <div className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
          <FooterColumn
            title="Platform"
            links={['Find a Coach', 'Get Started', 'Messages', 'My Profile']}
          />
          <FooterColumn
            title="For Trainers"
            links={['Trainer Profile', 'Account Settings', 'Schedule', 'Reviews']}
          />
          <FooterColumn
            title="Company"
            links={['About Us', 'Careers', 'Blog', 'Press']}
          />
          <FooterColumn
            title="Legal & Support"
            links={['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Help Center']}
          />
        </div>

        {/* ── Bottom bar ─────────────────────────────────── */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Sportico. All rights reserved.</p>
          <p>
            Made with <span className="text-[#00b4d8]">♥</span> for athletes everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string
  links: string[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#90e0ef]">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm text-slate-400">
        {links.map((link) => (
          <li key={link}>
            <button className="text-left leading-snug transition-colors hover:text-[#00b4d8]">
              {link}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

