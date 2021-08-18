import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const pageNavigation = [
    {nav: 'Home', href: '/'},
    {nav: 'About Us', href: '/about'},
    {nav: 'Movies', href: '/movies'},
    {nav: 'Register', href: '/registerForm'},
    {nav: 'Login', href: '/form'}
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Vidly
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {pageNavigation.map((nav) => <li key={nav.nav} className="nav-item me-2 p-1">
              <NavLink
                className="nav-NavLink active text-decoration-none"
                aria-current="page"
                to={nav.href}
              >
                {nav.nav}
              </NavLink>
            </li>)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
