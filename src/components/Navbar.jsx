import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo/EBUCA_logo.png" alt="logo" />
      </div>

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/abouts">About</NavLink>
        <NavLink to="/skill">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
