import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
function Login() {
  const [username, setUsername] = useState("");
  const { user, login, logout } = useAuth();

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
    </div>
  );
}

export default Login;
