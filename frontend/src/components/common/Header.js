import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/dashboard" className="navbar-item">
          <strong>User Management</strong>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
