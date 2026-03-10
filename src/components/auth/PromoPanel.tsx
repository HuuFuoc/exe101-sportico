export function PromoPanel() {
  return (
    <aside className="relative min-h-75 bg-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />

      <div className="relative flex h-full flex-col justify-end p-8 text-white">
        <h3 className="text-2xl font-semibold tracking-tight">
          Grow Your Coaching Business
        </h3>
        <p className="mt-2 max-w-xs text-sm text-slate-100/80">
          Manage clients, bookings, and grow your brand with a platform built
          for elite trainers.
        </p>
      </div>
    </aside>
  );
}
