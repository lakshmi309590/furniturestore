import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"; // Import CSS for styling

function AdminLogin() {
  const [adminUser, setAdminUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!adminUser || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (adminUser === "admin" && password === "password") {
      navigate("/admindash");
    } else {
      setError("Invalid username or password.");
    }
  }

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <p className="error">{error}</p>}
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={adminUser}
            onChange={(e) => setAdminUser(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
