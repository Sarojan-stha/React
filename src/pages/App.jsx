import { Link, Routes, NavLink } from "react-router-dom";
import { Home } from "./Home/index";
import { Cart } from "./Cart/index";
import { About } from "./About/index";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Login } from "./login/Login";
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";
import "./pages.css";

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
        ||
        <NavLink to="/login" style={getStyles}>
          Log In
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
