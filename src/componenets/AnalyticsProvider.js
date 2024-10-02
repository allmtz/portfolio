import React from "react";
import { createContext } from "react";

export const AnalyticsContext = createContext();

function AnalyticsProvider({ children, analytics }) {
  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export default AnalyticsProvider;
