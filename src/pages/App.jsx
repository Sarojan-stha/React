import { Link, Routes } from "react-router-dom";
import { Home } from "./Home/index";
import { Cart } from "./Cart/index";
import { About } from "./About/index";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <div className="divClass">
        <Link to="/about">Home</Link>||
        <Link to="/cart">Cart</Link>||
        <Link to="/">About</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
