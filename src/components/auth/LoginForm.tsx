import { ArrowRight, Lock, Mail } from "lucide-react";
import { LoginTabs } from "./LoginTabs";

export function LoginForm() {
  return (
    <div className="flex flex-col justify-center gap-6 p-10 text-left lg:p-12">
      <div className="flex justify-center sm:justify-start">
        <LoginTabs />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#0F172A] sm:text-2xl">
          Coach Sign In
        </h2>
        <p className="mt-1 text-sm text-[#64748B]">
          Access your trainer dashboard
        </p>
      </div>

      <form className="space-y-5">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#0F172A]">
            Email Address
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#94A3B8]">
              <Mail className="h-4 w-4" />
            </span>
            <input
              type="email"
              placeholder="coach@example.com"
              className="h-11 w-full rounded-xl border border-[#E2E8F0] bg-white pl-9 pr-3 text-sm text-[#0F172A] outline-none ring-0 transition focus:border-[#00B4D8] focus:ring-2 focus:ring-[#90E0EF]"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#0F172A]">Password</label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#94A3B8]">
              <Lock className="h-4 w-4" />
            </span>
            <input
              type="password"
              placeholder="••••••••"
              className="h-11 w-full rounded-xl border border-[#E2E8F0] bg-white pl-9 pr-3 text-sm text-[#0F172A] outline-none ring-0 transition focus:border-[#00B4D8] focus:ring-2 focus:ring-[#90E0EF]"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#64748B] sm:text-sm">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-[#CBD5E1] text-[#0077B6] focus:ring-[#00B4D8]"
            />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            className="font-medium text-[#0077B6] hover:text-[#00B4D8]"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0077B6] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#0077B6]/30 outline-none transition hover:bg-[#005f91]"
        >
          Sign In
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <p className="text-xs text-[#64748B] sm:text-sm">
        Want to become a coach?{" "}
        <button
          type="button"
          className="font-semibold text-[#0077B6] hover:text-[#00B4D8]"
        >
          Apply now
        </button>
      </p>
    </div>
  );
}
