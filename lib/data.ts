import {
  BusinessId,
  CalendarEvent,
  Customer,
  DocItem,
  Employee,
  Estimate,
  Job,
  Lead,
  Message,
  Move,
  Review,
  Route,
  TaskItem,
  Vendor,
} from "./types";

const ml = ["move-loco-1", "move-loco-2", "move-loco-3"];
const wl = ["win-loco-1", "win-loco-2", "win-loco-3"];

// --------------------------------------------------------------------------
// LEADS
// --------------------------------------------------------------------------
export const LEADS: Lead[] = [
  { id: "L-1001", businessId: "move", locationId: ml[0], name: "Sarah Johnson", phone: "(651) 442-1180", email: "sarah.j@gmail.com", source: "Google Ads", status: "New", lastActivity: "6 min ago", owner: "Jon S." },
  { id: "L-1002", businessId: "move", locationId: ml[0], name: "Mike Peterson", phone: "(612) 220-0912", email: "mikep@outlook.com", source: "Referral", status: "Contacted", lastActivity: "1 hr ago", owner: "Jon S." },
  { id: "L-1003", businessId: "move", locationId: ml[1], name: "Emily Davis", phone: "(651) 771-3320", email: "e.davis@gmail.com", source: "Website", status: "In Progress", lastActivity: "2 hrs ago", owner: "Jon S." },
  { id: "L-1004", businessId: "move", locationId: ml[1], name: "David Wilson", phone: "(612) 445-6781", email: "dwilson@yahoo.com", source: "Facebook Ads", status: "New", lastActivity: "3 hrs ago", owner: "Ana R." },
  { id: "L-1005", businessId: "move", locationId: ml[2], name: "Robert Taylor", phone: "(651) 330-2214", email: "rtaylor@gmail.com", source: "Referral", status: "In Progress", lastActivity: "5 hrs ago", owner: "Ana R." },
  { id: "L-1006", businessId: "move", locationId: ml[0], name: "Jessica White", phone: "(612) 118-9043", email: "jwhite@gmail.com", source: "Website", status: "New", lastActivity: "6 hrs ago", owner: "Jon S." },
  { id: "L-1007", businessId: "move", locationId: ml[2], name: "Chris Martin", phone: "(651) 209-7715", email: "cmartin@gmail.com", source: "Google Ads", status: "Qualified", lastActivity: "1 day ago", owner: "Ana R." },
  { id: "L-1008", businessId: "move", locationId: ml[1], name: "Laura Kim", phone: "(612) 553-2201", email: "laura.kim@gmail.com", source: "Referral", status: "Contacted", lastActivity: "1 day ago", owner: "Jon S." },
  { id: "L-2001", businessId: "window", locationId: wl[0], name: "Tom Bradley", phone: "(612) 771-4410", email: "tbradley@gmail.com", source: "Google Ads", status: "New", lastActivity: "12 min ago", owner: "Kyle P." },
  { id: "L-2002", businessId: "window", locationId: wl[0], name: "Nina Alvarez", phone: "(651) 220-8890", email: "nina.a@gmail.com", source: "Website", status: "Contacted", lastActivity: "40 min ago", owner: "Kyle P." },
  { id: "L-2003", businessId: "window", locationId: wl[1], name: "Greg Foster", phone: "(612) 334-1109", email: "gfoster@gmail.com", source: "Referral", status: "In Progress", lastActivity: "2 hrs ago", owner: "Mia T." },
  { id: "L-2004", businessId: "window", locationId: wl[2], name: "Paula Reed", phone: "(651) 908-2231", email: "preed@gmail.com", source: "Facebook Ads", status: "New", lastActivity: "4 hrs ago", owner: "Mia T." },
  { id: "L-2005", businessId: "window", locationId: wl[1], name: "Aaron Cole", phone: "(612) 442-7781", email: "acole@gmail.com", source: "Website", status: "Qualified", lastActivity: "1 day ago", owner: "Kyle P." },
];

// --------------------------------------------------------------------------
// CUSTOMERS
// --------------------------------------------------------------------------
export const CUSTOMERS: Customer[] = [
  { id: "C-3001", businessId: "move", locationId: ml[0], name: "John Smith", phone: "(651) 200-4410", email: "john.smith@gmail.com", address: "721 Nicollet Ave, Minneapolis", jobs: 3, totalSpend: 4820, status: "Active", since: "Mar 2024" },
  { id: "C-3002", businessId: "move", locationId: ml[0], name: "Karen Lopez", phone: "(612) 771-2093", email: "klopez@gmail.com", address: "88 Hennepin Ave, Minneapolis", jobs: 1, totalSpend: 1490, status: "Active", since: "Jun 2024" },
  { id: "C-3003", businessId: "move", locationId: ml[1], name: "Daniel Brooks", phone: "(651) 330-7781", email: "dbrooks@gmail.com", address: "410 Grand Ave, St. Paul", jobs: 2, totalSpend: 3120, status: "Active", since: "Jan 2024" },
  { id: "C-3004", businessId: "move", locationId: ml[1], name: "Rachel Green", phone: "(612) 118-4432", email: "rgreen@gmail.com", address: "902 Summit Ave, St. Paul", jobs: 4, totalSpend: 6740, status: "Active", since: "Nov 2023" },
  { id: "C-3005", businessId: "move", locationId: ml[2], name: "Steve Nguyen", phone: "(651) 442-9911", email: "snguyen@gmail.com", address: "55 Lyndale Ave, Bloomington", jobs: 1, totalSpend: 980, status: "Inactive", since: "Feb 2024" },
  { id: "C-3006", businessId: "move", locationId: ml[2], name: "Olivia Bennett", phone: "(612) 553-8890", email: "obennett@gmail.com", address: "133 Portland Ave, Bloomington", jobs: 2, totalSpend: 2610, status: "Active", since: "Apr 2024" },
  { id: "C-4001", businessId: "window", locationId: wl[0], name: "Peter Hall", phone: "(612) 220-1123", email: "phall@gmail.com", address: "45 Lake St, Minneapolis", jobs: 6, totalSpend: 1920, status: "Active", since: "Feb 2024" },
  { id: "C-4002", businessId: "window", locationId: wl[0], name: "Grace Liu", phone: "(651) 771-9082", email: "gliu@gmail.com", address: "210 Marquette Ave, Minneapolis", jobs: 4, totalSpend: 1280, status: "Active", since: "May 2024" },
  { id: "C-4003", businessId: "window", locationId: wl[1], name: "Marcus Reed", phone: "(612) 334-6621", email: "mreed@gmail.com", address: "77 Selby Ave, St. Paul", jobs: 3, totalSpend: 960, status: "Active", since: "Jul 2024" },
  { id: "C-4004", businessId: "window", locationId: wl[2], name: "Sofia Marin", phone: "(651) 908-3390", email: "smarin@gmail.com", address: "500 France Ave, Edina", jobs: 5, totalSpend: 1650, status: "Active", since: "Mar 2024" },
];

// --------------------------------------------------------------------------
// MOVES (Move Management)
// --------------------------------------------------------------------------
export const MOVES: Move[] = [
  { id: "MV-1542", businessId: "move", locationId: ml[0], customer: "John Smith", origin: "Minneapolis, MN", destination: "Rochester, MN", date: "May 28, 2025", status: "In Progress", crew: "Team A", value: 2450 },
  { id: "MV-1543", businessId: "move", locationId: ml[0], customer: "Karen Lopez", origin: "Minneapolis, MN", destination: "Duluth, MN", date: "May 29, 2025", status: "Scheduled", crew: "Team B", value: 1890 },
  { id: "MV-1544", businessId: "move", locationId: ml[1], customer: "Daniel Brooks", origin: "St. Paul, MN", destination: "Madison, WI", date: "May 29, 2025", status: "On the way", crew: "Team A", value: 3200 },
  { id: "MV-1545", businessId: "move", locationId: ml[1], customer: "Rachel Green", origin: "St. Paul, MN", destination: "Eau Claire, WI", date: "May 30, 2025", status: "Scheduled", crew: "Team C", value: 2740 },
  { id: "MV-1546", businessId: "move", locationId: ml[2], customer: "Olivia Bennett", origin: "Bloomington, MN", destination: "Ames, IA", date: "May 30, 2025", status: "Completed", crew: "Team B", value: 3980 },
  { id: "MV-1547", businessId: "move", locationId: ml[0], customer: "Mark Davis", origin: "Minneapolis, MN", destination: "Fargo, ND", date: "May 31, 2025", status: "Scheduled", crew: "Team A", value: 4120 },
  { id: "MV-1548", businessId: "move", locationId: ml[2], customer: "Steve Nguyen", origin: "Bloomington, MN", destination: "Sioux Falls, SD", date: "Jun 1, 2025", status: "Scheduled", crew: "Team C", value: 2210 },
];

export const MOVE_INVENTORY = [
  "Bedroom Set", "Sofa", "Dining Table", "Boxes (32)", "Refrigerator",
  "Washer / Dryer", "Office Desk", "Bookshelves (2)",
];

// --------------------------------------------------------------------------
// JOBS + ESTIMATES + ROUTES (Window Cleaning)
// --------------------------------------------------------------------------
export const JOBS: Job[] = [
  { id: "JB-2201", businessId: "window", locationId: wl[0], customer: "Peter Hall", service: "Exterior + Screens", address: "45 Lake St, Minneapolis", date: "May 28, 2025", status: "In Progress", crew: "Crew 1", value: 320 },
  { id: "JB-2202", businessId: "window", locationId: wl[0], customer: "Grace Liu", service: "Interior + Exterior", address: "210 Marquette Ave", date: "May 28, 2025", status: "On the way", crew: "Crew 2", value: 410 },
  { id: "JB-2203", businessId: "window", locationId: wl[1], customer: "Marcus Reed", service: "Storefront", address: "77 Selby Ave, St. Paul", date: "May 29, 2025", status: "Scheduled", crew: "Crew 1", value: 180 },
  { id: "JB-2204", businessId: "window", locationId: wl[2], customer: "Sofia Marin", service: "Full Service", address: "500 France Ave, Edina", date: "May 29, 2025", status: "Scheduled", crew: "Crew 3", value: 520 },
  { id: "JB-2205", businessId: "window", locationId: wl[0], customer: "Ben Carter", service: "Exterior", address: "18 Washington Ave", date: "May 30, 2025", status: "Completed", crew: "Crew 2", value: 240 },
  { id: "JB-2206", businessId: "window", locationId: wl[1], customer: "Tina Ford", service: "Interior", address: "300 Cathedral Hill", date: "May 30, 2025", status: "Scheduled", crew: "Crew 1", value: 290 },
];

export const ESTIMATES: Estimate[] = [
  { id: "ES-501", businessId: "window", locationId: wl[0], customer: "Tom Bradley", service: "Full Service — 2 story", amount: 480, status: "Sent", created: "May 26, 2025" },
  { id: "ES-502", businessId: "window", locationId: wl[0], customer: "Nina Alvarez", service: "Exterior + Screens", amount: 320, status: "Accepted", created: "May 25, 2025" },
  { id: "ES-503", businessId: "window", locationId: wl[1], customer: "Greg Foster", service: "Storefront (monthly)", amount: 210, status: "Draft", created: "May 27, 2025" },
  { id: "ES-504", businessId: "window", locationId: wl[2], customer: "Paula Reed", service: "Interior + Exterior", amount: 390, status: "Sent", created: "May 24, 2025" },
  { id: "ES-505", businessId: "window", locationId: wl[1], customer: "Aaron Cole", service: "Full Service", amount: 560, status: "Declined", created: "May 22, 2025" },
];

export const ROUTES: Route[] = [
  { id: "RT-01", businessId: "window", locationId: wl[0], name: "Downtown Loop", driver: "Carlos M.", stops: 8, distance: "24 mi", status: "In Progress" },
  { id: "RT-02", businessId: "window", locationId: wl[0], name: "Uptown / Lakes", driver: "Devon B.", stops: 6, distance: "18 mi", status: "Planned" },
  { id: "RT-03", businessId: "window", locationId: wl[1], name: "St. Paul East", driver: "Priya N.", stops: 7, distance: "21 mi", status: "Planned" },
  { id: "RT-04", businessId: "window", locationId: wl[2], name: "Edina / Southdale", driver: "Sam K.", stops: 5, distance: "14 mi", status: "Completed" },
];

// --------------------------------------------------------------------------
// EMPLOYEES / VENDORS / TASKS / MESSAGES / DOCS / REVIEWS
// --------------------------------------------------------------------------
export const EMPLOYEES: Employee[] = [
  { id: "E-01", businessId: "move", locationId: ml[0], name: "Jon Sanders", role: "Lead Mover", phone: "(612) 220-1100", email: "jon@move.com", status: "Active", jobsToday: 2 },
  { id: "E-02", businessId: "move", locationId: ml[0], name: "Ana Reyes", role: "Dispatcher", phone: "(651) 771-2231", email: "ana@move.com", status: "Active", jobsToday: 0 },
  { id: "E-03", businessId: "move", locationId: ml[1], name: "Marcus Lee", role: "Mover", phone: "(612) 334-9081", email: "marcus@move.com", status: "Active", jobsToday: 1 },
  { id: "E-04", businessId: "move", locationId: ml[1], name: "Tara Voss", role: "Mover", phone: "(651) 908-1120", email: "tara@move.com", status: "On Leave", jobsToday: 0 },
  { id: "E-05", businessId: "move", locationId: ml[2], name: "Owen Pratt", role: "Lead Mover", phone: "(612) 442-3390", email: "owen@move.com", status: "Active", jobsToday: 2 },
  { id: "E-11", businessId: "window", locationId: wl[0], name: "Carlos Mendez", role: "Technician", phone: "(612) 220-8890", email: "carlos@win.com", status: "Active", jobsToday: 4 },
  { id: "E-12", businessId: "window", locationId: wl[0], name: "Devon Blake", role: "Technician", phone: "(651) 771-6610", email: "devon@win.com", status: "Active", jobsToday: 3 },
  { id: "E-13", businessId: "window", locationId: wl[1], name: "Priya Nair", role: "Route Lead", phone: "(612) 334-2201", email: "priya@win.com", status: "Active", jobsToday: 5 },
  { id: "E-14", businessId: "window", locationId: wl[2], name: "Sam Kelly", role: "Technician", phone: "(651) 908-7712", email: "sam@win.com", status: "Active", jobsToday: 2 },
];

export const VENDORS: Vendor[] = [
  { id: "V-01", businessId: "move", locationId: ml[0], name: "BoxDepot Supplies", category: "Packing Materials", contact: "Rita Order", phone: "(612) 771-0091", status: "Active" },
  { id: "V-02", businessId: "move", locationId: ml[0], name: "FleetFix Auto", category: "Truck Maintenance", contact: "Gary Fields", phone: "(651) 220-3312", status: "Active" },
  { id: "V-03", businessId: "move", locationId: ml[1], name: "SecureStore Units", category: "Storage", contact: "Nina Vale", phone: "(612) 118-8890", status: "Active" },
  { id: "V-04", businessId: "move", locationId: ml[2], name: "GreenFuel Co", category: "Fuel", contact: "Owen Price", phone: "(651) 442-1120", status: "Inactive" },
  { id: "V-11", businessId: "window", locationId: wl[0], name: "ClearView Supplies", category: "Cleaning Supplies", contact: "Amy Cho", phone: "(612) 220-4412", status: "Active" },
  { id: "V-12", businessId: "window", locationId: wl[1], name: "LadderPro Rentals", category: "Equipment", contact: "Rob Vane", phone: "(651) 771-3390", status: "Active" },
];

export const TASKS: TaskItem[] = [
  { id: "T-01", businessId: "move", locationId: ml[0], title: "Confirm crew for MV-1542", due: "Today, 2:00 PM", priority: "High", assignee: "Ana R.", done: false },
  { id: "T-02", businessId: "move", locationId: ml[0], title: "Send quote to Karen Lopez", due: "Today, 4:00 PM", priority: "Medium", assignee: "Jon S.", done: false },
  { id: "T-03", businessId: "move", locationId: ml[1], title: "Order 40 moving boxes", due: "Tomorrow", priority: "Low", assignee: "Ana R.", done: false },
  { id: "T-04", businessId: "move", locationId: ml[1], title: "Follow up with David Wilson", due: "Tomorrow", priority: "Medium", assignee: "Jon S.", done: true },
  { id: "T-05", businessId: "move", locationId: ml[2], title: "Schedule truck maintenance", due: "May 31", priority: "High", assignee: "Owen P.", done: false },
  { id: "T-06", businessId: "move", locationId: ml[0], title: "Collect deposit for MV-1547", due: "Jun 1", priority: "High", assignee: "Ana R.", done: false },
  { id: "T-11", businessId: "window", locationId: wl[0], title: "Assign Crew 2 to Uptown route", due: "Today, 9:00 AM", priority: "High", assignee: "Kyle P.", done: false },
  { id: "T-12", businessId: "window", locationId: wl[0], title: "Send estimate to Tom Bradley", due: "Today", priority: "Medium", assignee: "Kyle P.", done: false },
  { id: "T-13", businessId: "window", locationId: wl[1], title: "Restock squeegee blades", due: "Tomorrow", priority: "Low", assignee: "Mia T.", done: true },
];

export const MESSAGES: Message[] = [
  { id: "M-01", businessId: "move", locationId: ml[0], from: "John Smith", channel: "SMS", preview: "Thanks! See you Tuesday for the move.", time: "8 min ago", unread: true },
  { id: "M-02", businessId: "move", locationId: ml[0], from: "Karen Lopez", channel: "Email", preview: "Can you send me the updated estimate?", time: "1 hr ago", unread: true },
  { id: "M-03", businessId: "move", locationId: ml[1], from: "Daniel Brooks", channel: "Call", preview: "Missed call — 2m 14s", time: "3 hrs ago", unread: false },
  { id: "M-04", businessId: "move", locationId: ml[1], from: "Rachel Green", channel: "SMS", preview: "Do I need to be home during pickup?", time: "5 hrs ago", unread: false },
  { id: "M-05", businessId: "move", locationId: ml[2], from: "Olivia Bennett", channel: "Email", preview: "Invoice received, thank you!", time: "1 day ago", unread: false },
  { id: "M-11", businessId: "window", locationId: wl[0], from: "Peter Hall", channel: "SMS", preview: "Gate code is 4471 for tomorrow.", time: "20 min ago", unread: true },
  { id: "M-12", businessId: "window", locationId: wl[1], from: "Marcus Reed", channel: "Email", preview: "Please add screen cleaning too.", time: "2 hrs ago", unread: false },
];

export const DOCS: DocItem[] = [
  { id: "D-01", businessId: "move", locationId: ml[0], name: "Smith — Bill of Lading.pdf", type: "Contract", owner: "Jon S.", size: "142 KB", updated: "May 27, 2025" },
  { id: "D-02", businessId: "move", locationId: ml[0], name: "Insurance Certificate 2025.pdf", type: "Insurance", owner: "Ana R.", size: "310 KB", updated: "May 20, 2025" },
  { id: "D-03", businessId: "move", locationId: ml[1], name: "Brooks — Inventory List.xlsx", type: "Inventory", owner: "Jon S.", size: "88 KB", updated: "May 26, 2025" },
  { id: "D-04", businessId: "move", locationId: ml[1], name: "Green — Signed Estimate.pdf", type: "Estimate", owner: "Ana R.", size: "205 KB", updated: "May 24, 2025" },
  { id: "D-05", businessId: "move", locationId: ml[2], name: "Fleet Inspection Report.pdf", type: "Report", owner: "Owen P.", size: "1.2 MB", updated: "May 18, 2025" },
];

export const REVIEWS: Review[] = [
  { id: "R-01", businessId: "move", locationId: ml[0], author: "John Smith", rating: 5, text: "Fast, careful, and professional. Highly recommend!", source: "Google", date: "May 20, 2025" },
  { id: "R-02", businessId: "move", locationId: ml[0], author: "Karen Lopez", rating: 5, text: "The crew was on time and handled everything with care.", source: "Google", date: "May 15, 2025" },
  { id: "R-03", businessId: "move", locationId: ml[1], author: "Daniel Brooks", rating: 4, text: "Great service, minor delay but kept me updated.", source: "Facebook", date: "May 12, 2025" },
  { id: "R-04", businessId: "move", locationId: ml[2], author: "Olivia Bennett", rating: 5, text: "Best moving experience I've had. Thank you!", source: "Yelp", date: "May 8, 2025" },
  { id: "R-11", businessId: "window", locationId: wl[0], author: "Peter Hall", rating: 5, text: "Windows are spotless. Will book monthly!", source: "Google", date: "May 22, 2025" },
  { id: "R-12", businessId: "window", locationId: wl[1], author: "Marcus Reed", rating: 4, text: "Good job on the storefront, very reliable.", source: "Google", date: "May 16, 2025" },
];

export const CALENDAR_EVENTS: CalendarEvent[] = [
  { id: "CE-1", businessId: "move", locationId: ml[0], title: "Move #1542", subtitle: "John Smith · 8:00 AM", day: 0, start: 0, span: 2, color: "green" },
  { id: "CE-2", businessId: "move", locationId: ml[0], title: "Move #1543", subtitle: "Karen Lopez · 10:00 AM", day: 1, start: 1, span: 2, color: "green" },
  { id: "CE-3", businessId: "move", locationId: ml[1], title: "Move #1544", subtitle: "D. Brooks · 11:30 AM", day: 2, start: 2, span: 2, color: "green" },
  { id: "CE-4", businessId: "move", locationId: ml[0], title: "Move #1547", subtitle: "Mark Davis · 1:00 PM", day: 0, start: 4, span: 2, color: "amber" },
  { id: "CE-5", businessId: "move", locationId: ml[1], title: "Move #1545", subtitle: "R. Green · 2:00 PM", day: 3, start: 3, span: 1, color: "violet" },
  { id: "CE-6", businessId: "move", locationId: ml[0], title: "Move #1548", subtitle: "S. Nguyen · 9:00 AM", day: 3, start: 1, span: 2, color: "green" },
  { id: "CE-7", businessId: "move", locationId: ml[2], title: "Move #1546", subtitle: "O. Bennett · 3:00 PM", day: 4, start: 2, span: 2, color: "green" },
  { id: "CE-8", businessId: "move", locationId: ml[1], title: "Move #1550", subtitle: "L. Kim · 4:00 PM", day: 4, start: 4, span: 1, color: "amber" },
  // Window
  { id: "CE-11", businessId: "window", locationId: wl[0], title: "Job #2201", subtitle: "P. Hall · 8:00 AM", day: 0, start: 0, span: 1, color: "blue" },
  { id: "CE-12", businessId: "window", locationId: wl[0], title: "Job #2202", subtitle: "G. Liu · 10:00 AM", day: 1, start: 1, span: 1, color: "blue" },
  { id: "CE-13", businessId: "window", locationId: wl[1], title: "Job #2203", subtitle: "M. Reed · 1:00 PM", day: 2, start: 3, span: 1, color: "green" },
  { id: "CE-14", businessId: "window", locationId: wl[2], title: "Job #2204", subtitle: "S. Marin · 11:00 AM", day: 3, start: 2, span: 2, color: "violet" },
  { id: "CE-15", businessId: "window", locationId: wl[0], title: "Job #2205", subtitle: "B. Carter · 9:00 AM", day: 4, start: 1, span: 1, color: "blue" },
];

// --------------------------------------------------------------------------
// Generic location filter — the single source of truth used everywhere.
// --------------------------------------------------------------------------
export function filterByLocation<T extends { locationId: string }>(
  rows: T[],
  locationId: string
): T[] {
  if (locationId === "all") return rows;
  return rows.filter((r) => r.locationId === locationId);
}

export function byBusiness<T extends { businessId: BusinessId }>(
  rows: T[],
  businessId: BusinessId
): T[] {
  return rows.filter((r) => r.businessId === businessId);
}
