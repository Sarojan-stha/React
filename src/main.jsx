import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BrandFilter from "./components/Exercises/Usestate-ex/BrandFilter";
import AddToCart from "./components/Exercises/Usestate-ex/AddToCart";
import UseRef from "./UseRef/UseRef";
import UseEffect from "./components/UseEffect/UseEffect";
import { Timer } from "./UseRef/Timer";
import { PinCode } from "./UseRef/PinCode";
import { UseReducerCounter } from "./components/UseReducer/UseReducerCounter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseReducerCounter />
  </StrictMode>
);
