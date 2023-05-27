import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIpWP2ByMmNwswGC3wAiJzLQHR8vZyEjA",
  authDomain: "portfolio-af4df.firebaseapp.com",
  projectId: "portfolio-af4df",
  storageBucket: "portfolio-af4df.appspot.com",
  messagingSenderId: "876475922192",
  appId: "1:876475922192:web:2438e6619d487c21479795",
  // measurementId: "G-TXW9MMFFV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
