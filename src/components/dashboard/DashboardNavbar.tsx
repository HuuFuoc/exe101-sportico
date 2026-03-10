import { ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Find Trainers", to: "/trainers" },
  { label: "Messages", to: "/messages" },
  { label: "My Profile", to: "/dashboard" },
];

export function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0077B6] text-sm font-black text-white">
            S
          </div>
          <span className="text-lg font-extrabold uppercase tracking-widest text-[#0F172A]">
            SPORTICO
          </span>
        </Link>

        {/* Center nav */}
        <div className="hidden gap-1 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "rounded-lg bg-[#EFF6FF] px-4 py-2 font-semibold text-[#0077B6]"
                  : "rounded-lg px-4 py-2 text-[#64748B] transition hover:bg-slate-50 hover:text-[#0F172A]"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-[#64748B] transition hover:text-[#0F172A]">
            Sign Out
          </button>
          <button className="flex items-center gap-1 rounded-full border border-[#E2E8F0] p-0.5 pr-2 transition hover:bg-slate-50">
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=80&q=80"
              alt="User avatar"
              className="h-8 w-8 rounded-full object-cover"
            />
            <ChevronDown className="h-3.5 w-3.5 text-[#94A3B8]" />
          </button>
        </div>
      </nav>
    </header>
  );
}
