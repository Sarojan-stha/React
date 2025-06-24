import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BrandFilter from "./components/Exercises/Usestate-ex/BrandFilter";
import AddToCart from "./components/Exercises/Usestate-ex/AddToCart";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AddToCart />
  </StrictMode>
);
