import React from 'react'
import { NavLink } from 'react-router-dom'

function AdHeader() {
    return (
        <div>
            {/* Navbar & Hero Start */}
            <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink className="navbar-brand p-0">
                        <h1 className="display-6 text-dark">
                            <i className="fas fa-swimmer text-primary me-3" />
                            WaterLand
                        </h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <NavLink to="/DashBoard" className="nav-item nav-link">
                                DashBoard
                            </NavLink>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Features
                                </a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/FeaturesManage" className="dropdown-item">
                                        Features-Manage
                                    </NavLink>
                                    <NavLink to="/FeaturesAdd" className="dropdown-item">
                                        Features-Add
                                    </NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Team
                                </a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/TeamManage" className="dropdown-item">
                                        Team-Manage
                                    </NavLink>
                                    <NavLink to="/TeamAdd" className="dropdown-item">
                                        Team-Add
                                    </NavLink>
                                </div>
                            </div>
                            <NavLink to="/Service" className="nav-item nav-link">
                                Service
                            </NavLink>
                            <NavLink to="/Blog" className="nav-item nav-link">
                                Blog
                            </NavLink>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Pages
                                </a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/About" className="dropdown-item">
                                        About
                                    </NavLink>
                                    <NavLink to="/Gallery" className="dropdown-item">
                                        Our Gallery
                                    </NavLink>
                                    <NavLink to="/Attraction" className="dropdown-item">
                                        Attractions
                                    </NavLink>
                                    <NavLink to="/Ticket" className="dropdown-item">
                                        Ticket Packages
                                    </NavLink>
                                    <NavLink to="/Team" className="dropdown-item">
                                        Our Team
                                    </NavLink>
                                    <NavLink to="/Testimonial" className="dropdown-item">
                                        Testimonial
                                    </NavLink>
                                </div>
                            </div>
                            <NavLink to="/Contact" className="nav-item nav-link">
                                Contact
                            </NavLink>
                        </div>
                        <div className="team-icon d-none d-xl-flex justify-content-center me-3">
                            <a className="btn btn-square btn-light rounded-circle mx-1" href>
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href>
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href>
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href>
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                        <a
                            href="#"
                            className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0"
                        >
                            Get Started
                        </a>
                    </div>
                </nav>
            </div>
            {/* Navbar & Hero End */}
        </div>
    )
}

export default AdHeader
