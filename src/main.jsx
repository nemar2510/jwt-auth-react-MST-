import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { removeToken } from "./utils/auth";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    removeToken();
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