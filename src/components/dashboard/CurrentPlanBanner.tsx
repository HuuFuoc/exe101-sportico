export function CurrentPlanBanner() {
  return (
    <div
      className="rounded-3xl p-6 text-white sm:p-8"
      style={{ background: "linear-gradient(to right, #0077B6, #00B4D8)" }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#CAF0F8]">
            Current Plan
          </p>
          <h3 className="mt-1 text-2xl font-bold">Basic Package</h3>
          <p className="mt-1.5 max-w-md text-sm text-white/80">
            Upgrade to Premium to unlock featured placement and AI priority
            matching.
          </p>
        </div>

        <div className="flex shrink-0 flex-row items-center gap-4 sm:flex-col sm:items-end sm:gap-3">
          <p className="text-3xl font-extrabold">
            $29<span className="text-lg font-semibold text-white/70">/mo</span>
          </p>
          <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#0077B6] shadow transition hover:bg-[#CAF0F8]">
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
}
