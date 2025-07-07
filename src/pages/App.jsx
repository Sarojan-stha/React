import { Link, Routes, NavLink } from "react-router-dom";
import { Home } from "./Home/index";
import { Cart } from "./Cart/index";
import { About } from "./About/index";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

export function App() {
  const getStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "blue",
    };
  };

  return (
    <BrowserRouter>
      <div className="divClass">
        <NavLink to="/" style={getStyles}>
          Home
        </NavLink>
        ||
        <NavLink to="/cart" style={getStyles}>
          Cart
        </NavLink>
        ||
        <NavLink to="/about" style={getStyles}>
          About
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
