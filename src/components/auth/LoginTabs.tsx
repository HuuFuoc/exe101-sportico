import { User, BadgeCheck } from 'lucide-react'

export function LoginTabs() {
  return (
    <div className="inline-flex items-center rounded-full bg-slate-100 p-1 text-sm font-medium text-[#64748B]">
      <button className="flex items-center gap-2 rounded-full px-4 py-2 transition-colors hover:text-[#0F172A]">
        <User className="h-4 w-4" />
        <span>User Login</span>
      </button>
      <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[#0077B6] shadow-sm ring-1 ring-[#E2E8F0]">
        <BadgeCheck className="h-4 w-4" />
        <span>Coach Login</span>
      </button>
    </div>
  )
}

