import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light d-flex justify-space-between"
      id="main-home-navbar"
    >
      <div className="collapse navbar-collapse container" id="navbarNav">
        <div className="navbar-brand">
          <Link to="/" className="nav-link">
            <h3>DOC BOOKING</h3>
          </Link>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link main-home-nav" to="/">
              Doctors
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link main-home-nav" to="/login">
              Log In
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link main-home-nav" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
