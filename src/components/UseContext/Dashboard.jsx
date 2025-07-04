import { useAuth } from "../../context/AuthContext";
function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <h2>Welcome, {user.name} 👋</h2>
      ) : (
        <h2>Please log in to view your dashboard</h2>
      )}
    </div>
  );
}

export default Dashboard;
