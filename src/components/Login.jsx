import { useState } from "react";
import { generateToken, saveToken } from "../utils/auth";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple demo credentials
    if (username === "admin" && password === "1234") {
      const userId = 101;
      const role = "Admin";

      // Generate simulated JWT
      const token = generateToken(userId, role);

      // Store token
      saveToken(token);

      // Send user information to App
      onLogin({
        userId: userId,
        role: role,
      });

      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>JWT Authentication</h1>

        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        {error && <p className="error">{error}</p>}

        <p className="demo">
          Demo username: <strong>admin</strong>
          <br />
          Demo password: <strong>1234</strong>
        </p>
      </div>
    </div>
  );
}

export default Login;