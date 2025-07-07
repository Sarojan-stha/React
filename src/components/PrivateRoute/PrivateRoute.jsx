import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}
