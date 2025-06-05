import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#b91c1c' }}>
      <div className="container">
        {/* Brand Logo */}
        <NavLink className="navbar-brand fw-bold text-warning fs-3" to="/">
          🍜 Noodle Nation
        </NavLink>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-light fw-medium" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light fw-medium" to="/AboutUs">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light fw-medium" to="/ContactUs">Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light fw-medium" to="/Help">Help</NavLink>
            </li>
          </ul>

          {/* Search Box */}
          <form className="d-flex ms-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Craving something?"
              aria-label="Search"
              style={{ borderRadius: '30px' }}
            />
            <button className="btn btn-warning text-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header
