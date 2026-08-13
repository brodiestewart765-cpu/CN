"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { BusinessId, User } from "./types";
import { CURRENT_USER } from "./config";

interface AppState {
  user: User;
  // Selected location per business ("all" = All Locations). Persists while
  // navigating between pages so the user never re-selects on every page.
  locationByBusiness: Record<BusinessId, string>;
  setLocation: (business: BusinessId, locationId: string) => void;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locationByBusiness, setLocationByBusiness] = useState<
    Record<BusinessId, string>
  >({
    move: "all",
    window: "all",
  });

  const value = useMemo<AppState>(
    () => ({
      user: CURRENT_USER,
      locationByBusiness,
      setLocation: (business, locationId) =>
        setLocationByBusiness((prev) => ({ ...prev, [business]: locationId })),
    }),
    [locationByBusiness]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
