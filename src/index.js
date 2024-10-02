import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { firebaseInit } from "./firebase-init";
import { AnalyticsContext } from "./componenets/AnalyticsProvider";

const analytics = firebaseInit();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnalyticsContext.Provider value={analytics}>
      <App />
    </AnalyticsContext.Provider>
  </React.StrictMode>
);
