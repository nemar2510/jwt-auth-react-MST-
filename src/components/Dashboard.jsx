function Dashboard({ user }) {
  return (
    <div className="dashboard">
      <h1>Protected Dashboard</h1>

      <p>Welcome to the protected dashboard.</p>

      <div className="user-info">
        <p>
          <strong>User ID:</strong> {user.userId}
        </p>

        <p>
          <strong>Role:</strong> {user.role}
        </p>

        <p className="success">
          Authentication Successful!
        </p>
      </div>
    </div>
  );
}

export default Dashboard;