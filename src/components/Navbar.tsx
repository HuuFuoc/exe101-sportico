import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Find Trainers", to: "/trainers" },
  { label: "Messages", to: "/messages" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "About Us", to: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white shadow-sm shadow-slate-200/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Sportico"
            className="h-8 w-auto object-contain sm:h-9"
          />
        </Link>

        {/* Center nav — desktop */}
        <div className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "relative inline-flex items-center transition-colors",
                  isActive
                    ? "text-[#0077b6]"
                    : "text-slate-600 hover:text-slate-900",
                ].join(" ")
              }
            >
              {({ isActive }) =>
                isActive ? (
                  <>
                    <span>{item.label}</span>
                    <span className="absolute inset-x-0 -bottom-2 mx-auto h-0.5 w-8 rounded-full bg-[#00b4d8]" />
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
          <button className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 sm:inline-flex">
            Sign In
          </button>
          <button className="inline-flex rounded-lg bg-[#0077b6] px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm shadow-[#0077b6]/25 hover:bg-[#005f91] sm:px-4 sm:py-2">
            Get Started
          </button>
          {/* Hamburger — mobile */}
          <button
            className="ml-1 inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 shadow-lg md:hidden">
          <ul className="mt-2 flex flex-col gap-1 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    [
                      "block rounded-lg px-3 py-2 transition-colors",
                      isActive
                        ? "bg-[#caf0f8] font-semibold text-[#0077b6]"
                        : "hover:bg-slate-50",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
