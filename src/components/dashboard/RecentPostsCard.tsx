import { ChevronRight } from "lucide-react";

type Post = {
  title: string;
  views: number;
  inquiries: number;
};

const POSTS: Post[] = [
  {
    title: "Strength & Conditioning — Beginner Package",
    views: 342,
    inquiries: 12,
  },
  { title: "Advanced Muscle Building Program", views: 218, inquiries: 8 },
];

export function RecentPostsCard() {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#0F172A]">Recent Posts</h3>
        <button className="flex items-center gap-0.5 text-sm font-semibold text-[#0077B6] transition hover:text-[#00B4D8]">
          View All
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {POSTS.map((post) => (
          <div key={post.title} className="rounded-xl bg-[#F8FAFC] px-4 py-3.5">
            <p className="font-semibold text-[#0F172A]">{post.title}</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                Active
              </span>
              <span className="text-xs text-[#64748B]">{post.views} views</span>
              <span className="text-xs text-[#64748B]">
                {post.inquiries} inquiries
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
