import { NavLink } from "react-router-dom";

export function Navbar() {
  const getStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "blue",
    };
  };

  return (
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
  );
}
