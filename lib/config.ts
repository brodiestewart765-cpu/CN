import { BusinessConfig, BusinessId, Location, User } from "./types";

export const ORG = { id: "org_genie", name: "Genie's CRM" };

// Locations are NOT hard-coded into the UI: they live in this array and can be
// added / renamed / disabled / deleted from Settings → Locations (Phase 4).
export const LOCATIONS: Location[] = [
  { id: "move-loco-1", businessId: "move", name: "Loco 1", city: "Minneapolis" },
  { id: "move-loco-2", businessId: "move", name: "Loco 2", city: "St. Paul" },
  { id: "move-loco-3", businessId: "move", name: "Loco 3", city: "Bloomington" },
  { id: "win-loco-1", businessId: "window", name: "Loco 1", city: "Minneapolis" },
  { id: "win-loco-2", businessId: "window", name: "Loco 2", city: "St. Paul" },
  { id: "win-loco-3", businessId: "window", name: "Loco 3", city: "Edina" },
];

export const BUSINESSES: Record<BusinessId, BusinessConfig> = {
  move: {
    id: "move",
    name: "Move Management",
    tagline: "Manage leads, customers, crews, schedules and more",
    icon: "Truck",
    accent: "#12B76A",
    nav: [
      { slug: "dashboard", label: "Dashboard", icon: "LayoutDashboard" },
      { slug: "leads", label: "Leads", icon: "UserPlus" },
      { slug: "customers", label: "Customers", icon: "Users" },
      { slug: "moves", label: "Moves", icon: "Truck" },
      { slug: "calendar", label: "Calendar", icon: "Calendar" },
      { slug: "employees", label: "Employees", icon: "Contact" },
      { slug: "vendors", label: "Vendors", icon: "Building2" },
      { slug: "tasks", label: "Tasks", icon: "CheckSquare" },
      { slug: "communications", label: "Communications", icon: "MessageSquare" },
      { slug: "documents", label: "Documents", icon: "FileText" },
      { slug: "reviews", label: "Reviews", icon: "Star" },
      { slug: "reports", label: "Reports", icon: "BarChart3" },
      { slug: "settings", label: "Settings", icon: "Settings" },
    ],
  },
  window: {
    id: "window",
    name: "Window Cleaning",
    tagline: "Manage window cleaning jobs, customers, routes and more",
    icon: "SquareStack",
    accent: "#6D4FE6",
    nav: [
      { slug: "dashboard", label: "Dashboard", icon: "LayoutDashboard" },
      { slug: "leads", label: "Leads", icon: "UserPlus" },
      { slug: "customers", label: "Customers", icon: "Users" },
      { slug: "estimates", label: "Estimates", icon: "FileSpreadsheet" },
      { slug: "jobs", label: "Jobs", icon: "Sparkles" },
      { slug: "calendar", label: "Calendar", icon: "Calendar" },
      { slug: "employees", label: "Employees", icon: "Contact" },
      { slug: "routes", label: "Routes", icon: "Route" },
      { slug: "tasks", label: "Tasks", icon: "CheckSquare" },
      { slug: "communications", label: "Communications", icon: "MessageSquare" },
      { slug: "reviews", label: "Reviews", icon: "Star" },
      { slug: "reports", label: "Reports", icon: "BarChart3" },
      { slug: "settings", label: "Settings", icon: "Settings" },
    ],
  },
};

// Master-level navigation (shown on Master Home + Owner Overview).
export const MASTER_NAV = [
  { slug: "home", label: "Home", icon: "Home", href: "/" },
  { slug: "move", label: "Move Management", icon: "Truck", href: "/w/move/dashboard" },
  { slug: "window", label: "Window Cleaning", icon: "SquareStack", href: "/w/window/dashboard" },
  { slug: "owner-overview", label: "Owner Overview", icon: "PieChart", href: "/owner-overview" },
  { slug: "reports", label: "Reports", icon: "BarChart3", href: "/owner-overview" },
  { slug: "settings", label: "Settings", icon: "Settings", href: "/owner-overview" },
];

// Two owner accounts with full access. The permission model is data-driven so
// more users (managers/staff scoped to a business+location) can be added later.
export const USERS: User[] = [
  {
    id: "u_brodie",
    name: "Brodie Stewart",
    email: "brodie@geniescrm.com",
    role: "owner",
    avatar: "BS",
    businesses: "*",
    locations: "*",
  },
  {
    id: "u_partner",
    name: "Jordan Miles",
    email: "jordan@geniescrm.com",
    role: "owner",
    avatar: "JM",
    businesses: "*",
    locations: "*",
  },
];

export const CURRENT_USER = USERS[0];

export function locationsFor(businessId: BusinessId): Location[] {
  return LOCATIONS.filter((l) => l.businessId === businessId && !l.disabled);
}

// Server-side-shaped authorization check (used by the data layer / future API).
export function canAccess(
  user: User,
  businessId: BusinessId,
  locationId?: string
): boolean {
  const businessOk =
    user.businesses === "*" || user.businesses.includes(businessId);
  if (!businessOk) return false;
  if (!locationId) return true;
  return user.locations === "*" || user.locations.includes(locationId);
}
