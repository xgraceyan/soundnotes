import React from "react";

import "./navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg pb-3 pt-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="../" id="navbar-img">
          <img src="../images/soundnotes_black_logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          data-target=".navbar-collapse"
          data-toggle="collapse"
        >
          <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item">
              <a href="../" className="nav-link">
                dashboard
              </a>
            </li>

            <li className="nav-item">
              <a href="../about" className="nav-link">
                my recordings
              </a>
            </li>

            <li className="nav-item">
              <a href="../contact" className="nav-link">
                new recording
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                grace
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
