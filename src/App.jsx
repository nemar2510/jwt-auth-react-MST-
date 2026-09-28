import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { getUser, logout } from "./utils/auth";

function App() {
  const [user, setUser] = useState(getUser());

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <Navbar user={user} onLogout={handleLogout} />
          <Dashboard user={user} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;