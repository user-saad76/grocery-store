import React from "react";
import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top custom-navbar">
      <div className="container">
        {/* ✅ Brand */}
        <a
          className="navbar-brand fw-bold text-success d-flex align-items-center gap-2"
          href="#"
        >
          <i className="fa-solid fa-basket-shopping"></i>
          FreshMart
        </a>

        {/* ✅ Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* ✅ Account dropdown shifted to left side */}
          <div className="dropdown me-4">
            <button
              className="btn btn-outline-success dropdown-toggle"
              type="button"
              id="userMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-user"></i> Account
            </button>
            <ul
              className="dropdown-menu shadow-sm"
              aria-labelledby="userMenuButton"
            >
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fa-solid fa-right-to-bracket me-2"></i> Sign In
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fa-solid fa-user-plus me-2"></i> Sign Up
                </a>
              </li>
            </ul>
          </div>

          {/* ✅ Center Navigation Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to ="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Deals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          {/* ✅ Cart Button stays on right */}
          <div className="d-flex align-items-center">
            <button className="btn text-white d-flex align-items-center gap-1 cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
              Cart <span className="badge bg-light text-success">3</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
