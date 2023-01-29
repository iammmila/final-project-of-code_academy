import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss"
function Navbar() {
  const activeStyle = {
    color:"red",
    textDecoration: "underline",
  };
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <img
            src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png"
            alt="logo"
          />
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Add
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
