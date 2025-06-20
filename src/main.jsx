import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StudentApp from "./Props/StudentApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentApp />
  </StrictMode>
);
