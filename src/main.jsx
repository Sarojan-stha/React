import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseStateEx from "./components/Exercises/Usestate-ex/UseStateEx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseStateEx />
  </StrictMode>
);
