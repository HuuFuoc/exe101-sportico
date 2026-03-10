import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-slate-400">
        {links.map((link) => (
          <li key={link}>
            <button className="text-left transition hover:text-white">
              {link}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DashboardFooter() {
  return (
    <footer className="bg-[#020617] pt-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-10 md:grid-cols-[1.5fr,repeat(3,1fr)]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0077B6] text-sm font-black text-white">
                S
              </div>
              <span className="text-lg font-extrabold uppercase tracking-widest text-white">
                SPORTICO
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              AI-powered platform connecting elite sports coaches with motivated
              learners in Vietnam.
            </p>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition hover:border-[#0077B6] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <FooterColumn
            title="Platform"
            links={["Find Coach", "Get Started", "Messages", "My Profile"]}
          />
          <FooterColumn
            title="For Trainers"
            links={["My Profile", "Account", "Schedule", "Reviews"]}
          />
          <FooterColumn
            title="Company"
            links={[
              "About Us",
              "Careers",
              "Privacy Policy",
              "Terms of Service",
            ]}
          />
        </div>

        <div className="flex flex-col items-start justify-between gap-2 border-t border-slate-800 py-4 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 Sportico. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <button key={item} className="transition hover:text-white">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
