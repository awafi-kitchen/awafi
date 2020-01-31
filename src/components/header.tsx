import React from 'react'
import { Link } from "gatsby";

const HeaderLinks = ( navbarClass: string ) => (
    <div className={navbarClass}>
        <Link to="/#about" className="navbar-item is-uppercase has-text-white">
            About Us
        </Link>
        <Link to="/#events" className="navbar-item is-uppercase has-text-white">
            Events
        </Link>
        <Link to="/#contact" className="navbar-item is-uppercase has-text-white">
            Contact
        </Link>
    </div>
)

const Header = () => (
    <nav className="header navbar is-transparent" role="navigation" aria-label="main navigation">
        
   {HeaderLinks("navbar-end is-hidden-mobile")}
   {HeaderLinks("navbar-center is-hidden-tablet")}
    

    </nav>);

export default Header;