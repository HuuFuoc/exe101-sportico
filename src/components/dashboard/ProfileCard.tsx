import { CheckCircle } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 text-center shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=160&q=80"
        alt="Lionel Messi"
        className="mx-auto h-20 w-20 rounded-full border-4 border-[#CAF0F8] object-cover"
      />
      <h3 className="mt-3 text-base font-bold text-[#0F172A]">Lionel Messi</h3>
      <p className="text-sm font-medium text-[#0077B6]">Badminton</p>
      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
        <CheckCircle className="h-3.5 w-3.5" />
        Verified Trainer
      </span>
    </div>
  );
}
