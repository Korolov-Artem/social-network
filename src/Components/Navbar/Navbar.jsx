import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <NavLink to="/profile" className="Navbar__directions">
        Profile
      </NavLink>
      <NavLink to="/dialogs" className="Navbar__directions">
        Messages
      </NavLink>
      <NavLink to="/users" className="Navbar__directions">
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
