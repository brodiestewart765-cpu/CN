import { notFound } from "next/navigation";
import { BusinessId } from "@/lib/types";
import { BUSINESSES } from "@/lib/config";
import { WorkspaceShell } from "@/components/shell/WorkspaceShell";
import { SectionRenderer } from "@/components/workspace/SectionRenderer";

// Extra (non-nav) sections that are still valid per business.
const EXTRA_SECTIONS: Record<BusinessId, string[]> = {
  move: ["move-details"],
  window: [],
};

function isBusiness(x: string): x is BusinessId {
  return x === "move" || x === "window";
}

export function generateStaticParams() {
  const params: { business: string; section: string }[] = [];
  (Object.keys(BUSINESSES) as BusinessId[]).forEach((b) => {
    BUSINESSES[b].nav.forEach((n) =>
      params.push({ business: b, section: n.slug })
    );
    EXTRA_SECTIONS[b].forEach((s) => params.push({ business: b, section: s }));
  });
  return params;
}

export default function WorkspacePage({
  params,
}: {
  params: { business: string; section: string };
}) {
  const { business, section } = params;
  if (!isBusiness(business)) notFound();

  // Business separation is enforced at the route level: a section that does
  // not belong to this business is a 404, not a cross-business leak.
  const allowed = new Set([
    ...BUSINESSES[business].nav.map((n) => n.slug),
    ...EXTRA_SECTIONS[business],
  ]);
  if (!allowed.has(section)) notFound();

  const activeSlug = section === "move-details" ? "moves" : section;

  return (
    <WorkspaceShell businessId={business} activeSlug={activeSlug}>
      <SectionRenderer businessId={business} section={section} />
    </WorkspaceShell>
  );
}
