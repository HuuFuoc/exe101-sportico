export function Footer() {
  return (
    <footer className="bg-slate-950 pt-14 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-10 md:grid-cols-[1.5fr,repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-sm font-black text-white">
                S
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                SPORTICO
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              AI-powered platform connecting elite sports coaches with motivated
              athletes worldwide.
            </p>
          </div>

          <FooterColumn
            title="Platform"
            links={['Find Coach', 'Get Started', 'Messages', 'My Profile']}
          />
          <FooterColumn
            title="For Trainers"
            links={['My Profile', 'Account', 'Schedule', 'Reviews']}
          />
          <FooterColumn
            title="Company"
            links={['About Us', 'Careers', 'Privacy Policy', 'Terms of Service']}
          />
        </div>

        <div className="border-t border-slate-800 py-4 text-xs text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 Sportico. All rights reserved.</p>
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
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-slate-400">
        {links.map((link) => (
          <li key={link}>
            <button className="text-left hover:text-white">{link}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

