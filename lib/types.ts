// ---------------------------------------------------------------------------
// Genie's CRM — core relational domain types
// Every business-specific record carries businessId; every location-specific
// record carries locationId. This mirrors the hierarchy:
//   Organization → Business → Location → (Customer | Lead | Job | Move | ...)
// ---------------------------------------------------------------------------

export type BusinessId = "move" | "window";

export type Role = "owner" | "manager" | "staff";

export interface Organization {
  id: string;
  name: string;
}

export interface Location {
  id: string;
  businessId: BusinessId;
  name: string;
  city: string;
  disabled?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar: string;
  // Access scope. Owners get "*" (everything). Non-owners are scoped to
  // explicit business + location grants — enforced server-side in later phases.
  businesses: BusinessId[] | "*";
  locations: string[] | "*";
}

export interface NavItem {
  slug: string;
  label: string;
  icon: string; // lucide icon name
}

export interface BusinessConfig {
  id: BusinessId;
  name: string;
  tagline: string;
  icon: string; // lucide icon name
  accent: string; // hex — used for the business card illustration
  nav: NavItem[];
}

// --- Records (all mock-data shaped, but structurally relational) -----------

export type LeadStatus = "New" | "Contacted" | "In Progress" | "Qualified" | "Lost";
export type JobStatus =
  | "Scheduled"
  | "In Progress"
  | "On the way"
  | "Completed"
  | "Cancelled";

export interface Lead {
  id: string;
  businessId: BusinessId;
  locationId: string;
  name: string;
  phone: string;
  email: string;
  source: string;
  status: LeadStatus;
  lastActivity: string;
  owner: string;
}

export interface Customer {
  id: string;
  businessId: BusinessId;
  locationId: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  jobs: number;
  totalSpend: number;
  status: "Active" | "Inactive";
  since: string;
}

export interface Move {
  id: string;
  businessId: "move";
  locationId: string;
  customer: string;
  origin: string;
  destination: string;
  date: string;
  status: JobStatus;
  crew: string;
  value: number;
}

export interface Job {
  id: string;
  businessId: "window";
  locationId: string;
  customer: string;
  service: string;
  address: string;
  date: string;
  status: JobStatus;
  crew: string;
  value: number;
}

export interface Estimate {
  id: string;
  businessId: "window";
  locationId: string;
  customer: string;
  service: string;
  amount: number;
  status: "Draft" | "Sent" | "Accepted" | "Declined";
  created: string;
}

export interface Employee {
  id: string;
  businessId: BusinessId;
  locationId: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  status: "Active" | "On Leave";
  jobsToday: number;
}

export interface Vendor {
  id: string;
  businessId: BusinessId;
  locationId: string;
  name: string;
  category: string;
  contact: string;
  phone: string;
  status: "Active" | "Inactive";
}

export interface TaskItem {
  id: string;
  businessId: BusinessId;
  locationId: string;
  title: string;
  due: string;
  priority: "High" | "Medium" | "Low";
  assignee: string;
  done: boolean;
}

export interface CalendarEvent {
  id: string;
  businessId: BusinessId;
  locationId: string;
  title: string;
  subtitle: string;
  day: number; // 0-4 (Mon-Fri)
  start: number; // slot index
  span: number; // number of slots
  color: "green" | "amber" | "violet" | "blue";
}

export interface Message {
  id: string;
  businessId: BusinessId;
  locationId: string;
  from: string;
  channel: "SMS" | "Email" | "Call";
  preview: string;
  time: string;
  unread: boolean;
}

export interface DocItem {
  id: string;
  businessId: BusinessId;
  locationId: string;
  name: string;
  type: string;
  owner: string;
  size: string;
  updated: string;
}

export interface Review {
  id: string;
  businessId: BusinessId;
  locationId: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  date: string;
}

export interface Route {
  id: string;
  businessId: "window";
  locationId: string;
  name: string;
  driver: string;
  stops: number;
  distance: string;
  status: "Planned" | "In Progress" | "Completed";
}
