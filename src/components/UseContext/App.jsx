// src/App.jsx
import { AuthProvider } from "../../context/AuthContext";
import Login from "./Login";
import Dashboard from "./Dashboard";
function App() {
  return (
    <AuthProvider>
      <h1>React Auth with useContext</h1>
      <Login />
      <Dashboard />
    </AuthProvider>
  );
}

export default App;
