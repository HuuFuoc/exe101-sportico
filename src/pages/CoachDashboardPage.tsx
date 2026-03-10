import { DollarSign, Eye, MessageCircle, Star } from "lucide-react";
import { CurrentPlanBanner } from "../components/dashboard/CurrentPlanBanner";
import { DashboardNavbar } from "../components/dashboard/DashboardNavbar";
import { ProfileCard } from "../components/dashboard/ProfileCard";
import { RecentPostsCard } from "../components/dashboard/RecentPostsCard";
import { SidebarMenu } from "../components/dashboard/SidebarMenu";
import { StatCard } from "../components/dashboard/StatCard";
import { DashboardFooter } from "../components/dashboard/DashboardFooter";

const STATS = [
  {
    icon: <Eye className="h-4 w-4 text-[#0077B6]" />,
    iconBg: "bg-[#EFF6FF]",
    value: "1,284",
    label: "Profile Views",
    growth: "+12%",
  },
  {
    icon: <MessageCircle className="h-4 w-4 text-[#00B4D8]" />,
    iconBg: "bg-[#F0FDFF]",
    value: "47",
    label: "New Inquiries",
    growth: "+8%",
  },
  {
    icon: <Star className="h-4 w-4 text-amber-500" />,
    iconBg: "bg-amber-50",
    value: "4.9",
    label: "Avg. Rating",
    growth: "+0.1",
  },
  {
    icon: <DollarSign className="h-4 w-4 text-emerald-600" />,
    iconBg: "bg-emerald-50",
    value: "$3,240",
    label: "Monthly Revenue",
    growth: "+18%",
  },
];

export function CoachDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <DashboardNavbar />

      {/* Main */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          {/* ── Left Sidebar ── */}
          <aside className="w-full shrink-0 space-y-4 lg:w-64 xl:w-72">
            <ProfileCard />
            <SidebarMenu />
          </aside>

          {/* ── Right Content ── */}
          <div className="min-w-0 flex-1 space-y-6">
            {/* Welcome header */}
            <div>
              <h1 className="text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
                Welcome back, Messi! 👋
              </h1>
              <p className="mt-1 text-sm text-[#64748B]">
                Here's how your profile is performing this month.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
              {STATS.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>

            {/* Plan banner */}
            <CurrentPlanBanner />

            {/* Recent posts */}
            <RecentPostsCard />
          </div>
        </div>
      </main>

      <DashboardFooter />
    </div>
  );
}
