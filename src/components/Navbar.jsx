import React from "react";

const Navbar = ({ onSelect, page }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="nav-link" href="#" onClick={() => onSelect("home")}>
          Joe's Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link"
              href="#"
              onClick={() => onSelect("testAPIcall")}
            >
              testAPICall
            </a>
            <a className="nav-link" href="#" onClick={() => onSelect("about")}>
              About
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => onSelect("contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
