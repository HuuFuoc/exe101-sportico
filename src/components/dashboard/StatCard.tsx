type StatCardProps = {
  icon: React.ReactNode;
  iconBg: string;
  value: string;
  label: string;
  growth: string;
};

export function StatCard({
  icon,
  iconBg,
  value,
  label,
  growth,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <div className={`inline-flex rounded-xl p-2 ${iconBg}`}>{icon}</div>
      <p className="mt-3 text-2xl font-bold text-[#0F172A]">{value}</p>
      <div className="mt-1 flex items-center justify-between gap-2">
        <p className="text-sm text-[#64748B]">{label}</p>
        <span className="shrink-0 text-xs font-semibold text-emerald-600">
          {growth}
        </span>
      </div>
    </div>
  );
}
