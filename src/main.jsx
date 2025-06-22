import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./components/Counter/Counter";
import StudentApp from "./components/Props/StudentApp";
import { CounterWithProps } from "./components/Counter/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Counter />
    <Counter />
    <CounterWithProps />
  </StrictMode>
);
