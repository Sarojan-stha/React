import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./components/Counter/Counter";
import StudentApp from "./components/Counter/Props/StudentApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentApp />
  </StrictMode>
);
