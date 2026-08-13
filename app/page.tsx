import Link from "next/link";
import { MasterShell } from "@/components/shell/MasterShell";
import { Icon } from "@/components/ui/Icon";
import { KpiCard } from "@/components/ui/KpiCard";
import { BUSINESSES } from "@/lib/config";
import { CUSTOMERS, JOBS, LEADS, MOVES } from "@/lib/data";
import { money } from "@/lib/format";

const cards = [
  {
    id: "move" as const,
    illo: "from-success-50 to-white",
    iconWrap: "bg-success-50 text-success-600",
    href: "/w/move/dashboard",
  },
  {
    id: "window" as const,
    illo: "from-primary-50 to-white",
    iconWrap: "bg-primary-50 text-primary-600",
    href: "/w/window/dashboard",
  },
];

export default function MasterHome() {
  const totalRevenue =
    MOVES.reduce((a, m) => a + m.value, 0) +
    JOBS.reduce((a, j) => a + j.value, 0) +
    41200;
  const activeJobs = MOVES.length + JOBS.length + 74;
  const newLeads = LEADS.length + 21;
  const customers = CUSTOMERS.length + 115;

  return (
    <MasterShell activeSlug="home">
      <div className="mb-7">
        <h1 className="text-2xl font-semibold tracking-tight text-ink-900">
          Welcome back, Brodie! <span className="align-middle">👋</span>
        </h1>
        <p className="mt-1 text-sm text-ink-500">
          Choose a business to get started.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((c) => {
          const b = BUSINESSES[c.id];
          return (
            <div
              key={c.id}
              className="card overflow-hidden transition-shadow hover:shadow-pop"
            >
              <div
                className={`flex h-28 items-center justify-center bg-gradient-to-b ${c.illo}`}
              >
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${c.iconWrap}`}
                >
                  <Icon name={b.icon} size={30} strokeWidth={1.9} />
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink-900">{b.name}</h3>
                <p className="mt-1 text-sm text-ink-500">{b.tagline}.</p>
                <Link
                  href={c.href}
                  className="mt-4 inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary-600 px-4 text-sm font-medium text-white transition-colors hover:bg-primary-700"
                >
                  Open CRM
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-md font-semibold text-ink-900">
            Business Overview
          </h2>
          <Link
            href="/owner-overview"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            Owner Overview <Icon name="ArrowRight" size={15} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            label="Total Revenue"
            value={money(totalRevenue)}
            icon="CircleDollarSign"
            iconTone="green"
            delta="18%"
            sublabel="this month"
          />
          <KpiCard
            label="Active Jobs"
            value={`${activeJobs}`}
            icon="Sparkles"
            iconTone="blue"
            delta="12%"
            sublabel="in progress"
          />
          <KpiCard
            label="New Leads"
            value={`${newLeads}`}
            icon="UserPlus"
            iconTone="violet"
            delta="9%"
            sublabel="this week"
          />
          <KpiCard
            label="Active Customers"
            value={`${customers}`}
            icon="Users"
            iconTone="amber"
            delta="4%"
            sublabel="total"
          />
        </div>
      </div>
    </MasterShell>
  );
}
