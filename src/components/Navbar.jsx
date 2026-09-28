function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <h2>JWT Auth App</h2>

      <div>
        <span>
          Role: <strong>{user.role}</strong>
        </span>

        <button onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;