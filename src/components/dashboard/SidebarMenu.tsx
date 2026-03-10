import {
  BarChart2,
  Calendar,
  FileText,
  LayoutGrid,
  MessageSquare,
  Tag,
  User,
} from "lucide-react";

type MenuItem = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

const PRIMARY_MENU: MenuItem[] = [
  { label: "Overview", icon: <LayoutGrid className="h-4 w-4" />, active: true },
  { label: "Posting Packages", icon: <Tag className="h-4 w-4" /> },
  { label: "My Posts", icon: <FileText className="h-4 w-4" /> },
  { label: "Profile", icon: <User className="h-4 w-4" /> },
];

const SECONDARY_MENU: MenuItem[] = [
  { label: "Analytic", icon: <BarChart2 className="h-4 w-4" /> },
  { label: "Messages", icon: <MessageSquare className="h-4 w-4" /> },
  { label: "Schedule", icon: <Calendar className="h-4 w-4" /> },
];

function MenuCard({ items }: { items: MenuItem[] }) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white py-2 shadow-sm">
      {items.map((item) => (
        <button
          key={item.label}
          className={[
            "flex w-full items-center gap-3 px-4 py-2.5 text-sm transition",
            item.active
              ? "bg-[#EFF6FF] font-semibold text-[#0077B6]"
              : "font-medium text-[#64748B] hover:bg-slate-50 hover:text-[#0F172A]",
          ].join(" ")}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
}

export function SidebarMenu() {
  return (
    <div className="space-y-3">
      <MenuCard items={PRIMARY_MENU} />
      <MenuCard items={SECONDARY_MENU} />
    </div>
  );
}
