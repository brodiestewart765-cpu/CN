import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-surface px-6 text-center">
      <Logo />
      <div>
        <p className="text-3xl font-semibold text-ink-900">404</p>
        <p className="mt-1 text-sm text-ink-500">
          We couldn&rsquo;t find that page in Genie&rsquo;s CRM.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary-600 px-4 text-sm font-medium text-white hover:bg-primary-700"
      >
        <Icon name="Home" size={16} /> Back to Home
      </Link>
    </div>
  );
}
