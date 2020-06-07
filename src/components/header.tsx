import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";

const HeaderLinks = (navbarClass: string) => {
  return (
    <div className={navbarClass}>
      <Link to="/#about" className="navbar-item is-uppercase">
        About Us
      </Link>
      <Link to="/events" className="navbar-item is-uppercase">
        Events
      </Link>
      <Link to="/#contact" className="navbar-item is-uppercase">
        Contact
      </Link>
    </div>
  );
};

const Header = (props: { isLandingPage?: boolean }) => (
  <nav
    className={classnames(
      "header",
      "navbar",
      props.isLandingPage ? "is-transparent" : "is-info"
    )}
    role="navigation"
    aria-label="main navigation"
  >
    {HeaderLinks("navbar-end is-hidden-mobile")}
    {HeaderLinks("navbar-center is-hidden-tablet")}
  </nav>
);

export default Header;
