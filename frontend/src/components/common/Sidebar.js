import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="menu p-4">
      <p className="menu-label">User</p>
      <ul className="menu-list">
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/">Sign Out</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
