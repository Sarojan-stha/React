import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AuthProvider } from "./context/AuthContext";
import Login from "./components/UseContext/Login";
import Dashboard from "./components/UseContext/Dashboard";
import App from "./components/UseContext/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
