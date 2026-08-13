import Link from "next/link";
import { MasterShell } from "@/components/shell/MasterShell";
import { KpiCard } from "@/components/ui/KpiCard";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Icon } from "@/components/ui/Icon";
import { BusinessDonut } from "@/components/charts/Charts";
import { CUSTOMERS, JOBS, LEADS, MOVES, REVIEWS, TASKS } from "@/lib/data";
import { money } from "@/lib/format";

const moveRev = MOVES.reduce((a, m) => a + m.value, 0) + 42300;
const winRev = JOBS.reduce((a, j) => a + j.value, 0) + 33520;

const schedule = [
  { time: "8:00 AM", id: "MV-1542", who: "John Smith", biz: "Move", place: "Minneapolis → Rochester", status: "In Progress" },
  { time: "9:30 AM", id: "JB-2201", who: "Peter Hall", biz: "Window", place: "45 Lake St, Minneapolis", status: "On the way" },
  { time: "10:00 AM", id: "MV-1543", who: "Karen Lopez", biz: "Move", place: "Minneapolis → Duluth", status: "Scheduled" },
  { time: "11:30 AM", id: "JB-2204", who: "Sofia Marin", biz: "Window", place: "500 France Ave, Edina", status: "Scheduled" },
  { time: "1:00 PM", id: "MV-1544", who: "Daniel Brooks", biz: "Move", place: "St. Paul → Madison", status: "Scheduled" },
];

const activity = [
  { icon: "UserPlus", text: "New lead **Sarah Johnson** (Move Management)", time: "6 min ago" },
  { icon: "MessageSquare", text: "New message from **Peter Hall** (Window Cleaning)", time: "40 min ago" },
  { icon: "CheckCircle2", text: "Move **#1546** marked completed", time: "1 hr ago" },
  { icon: "CircleDollarSign", text: "Payment received — **$3,980** for MV-1546", time: "2 hrs ago" },
  { icon: "Star", text: "New 5★ review from **John Smith** (Google)", time: "3 hrs ago" },
];

export default function OwnerOverview() {
  const openTasks = TASKS.filter((t) => !t.done).length;
  const avgReview = (
    REVIEWS.reduce((a, r) => a + r.rating, 0) / REVIEWS.length
  ).toFixed(1);

  return (
    <MasterShell activeSlug="owner-overview">
      <div className="mb-5">
        <h1 className="page-title">Owner Overview</h1>
        <p className="mt-1 text-sm text-ink-500">
          Combined performance across all businesses and locations.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Total Revenue" value={money(moveRev + winRev)} delta="18%" sublabel="vs last month" />
        <KpiCard label="Active Jobs" value="87" delta="12%" sublabel="in progress" />
        <KpiCard label="Today's Jobs" value="33" delta="8%" sublabel="scheduled" />
        <KpiCard label="New Leads" value="34" delta="9%" sublabel="this week" />
        <KpiCard label="Outstanding" value="$18,420" delta="3%" deltaDir="down" sublabel="6 invoices" />
        <KpiCard label="Active Customers" value={`${CUSTOMERS.length + 119}`} delta="5%" sublabel="total" />
        <KpiCard label="Reviews" value={`${avgReview} ★`} delta="0.2" sublabel="avg rating" />
        <KpiCard label="Tasks" value={`${openTasks + 6}`} sublabel="need attention" />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardHeader title="Revenue by Business" subtitle="This month" />
          <BusinessDonut
            data={[
              { name: "Move Management", value: moveRev, color: "#6D4FE6" },
              { name: "Window Cleaning", value: winRev, color: "#039855" },
            ]}
          />
        </Card>

        <Card className="lg:col-span-3" padded={false}>
          <div className="flex items-center justify-between px-5 pb-3 pt-5">
            <div>
              <h3 className="text-md font-semibold text-ink-900">
                Today&rsquo;s Schedule (All)
              </h3>
              <p className="mt-0.5 text-xs text-ink-500">
                Across both businesses
              </p>
            </div>
            <Link
              href="#"
              className="text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              View all
            </Link>
          </div>
          <div className="divide-y divide-line-soft">
            {schedule.map((s) => (
              <div
                key={s.id}
                className="flex items-center gap-3 px-5 py-3 hover:bg-surface-sunken"
              >
                <div className="w-16 shrink-0">
                  <p className="text-sm font-semibold text-ink-800">
                    {s.time.split(" ")[0]}
                  </p>
                  <p className="text-2xs text-ink-400">{s.time.split(" ")[1]}</p>
                </div>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                    s.biz === "Move"
                      ? "bg-success-50 text-success-600"
                      : "bg-primary-50 text-primary-600"
                  }`}
                >
                  <Icon name={s.biz === "Move" ? "Truck" : "SquareStack"} size={16} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-ink-800">
                    {s.id} · {s.who}
                  </p>
                  <p className="truncate text-xs text-ink-500">{s.place}</p>
                </div>
                <StatusBadge status={s.status} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5">
        <Card padded={false}>
          <div className="px-5 pb-3 pt-5">
            <h3 className="text-md font-semibold text-ink-900">Recent Activity</h3>
          </div>
          <div className="divide-y divide-line-soft">
            {activity.map((a, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-ink-500">
                  <Icon name={a.icon} size={15} />
                </span>
                <p
                  className="flex-1 text-sm text-ink-700"
                  dangerouslySetInnerHTML={{
                    __html: a.text.replace(
                      /\*\*(.+?)\*\*/g,
                      '<span class="font-semibold text-ink-900">$1</span>'
                    ),
                  }}
                />
                <span className="shrink-0 text-xs text-ink-400">{a.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </MasterShell>
  );
}
