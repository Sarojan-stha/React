import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import "./app.css";

function Login() {
  const [username, setUsername] = useState("");
  const { user, login, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => login(username)}>Login</button>
        </>
      )}
      <button onClick={toggleTheme}>
        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default Login;
