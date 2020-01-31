import React from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'

const HeaderLinks = ( navbarClass: string ) => (
    <div className={navbarClass}>
        <AnchorLink href="#about" className="navbar-item is-uppercase">
            About Us
        </AnchorLink>
        <AnchorLink href="#events" className="navbar-item is-uppercase">
            Events
        </AnchorLink>
        <AnchorLink href="#contact" className="navbar-item is-uppercase">
            Contact
        </AnchorLink>
    </div>
);

const Header = () => (
    <nav className="header navbar is-transparent" role="navigation" aria-label="main navigation">
        {HeaderLinks("navbar-end is-hidden-mobile")}
        {HeaderLinks("navbar-center is-hidden-tablet")}
    </nav>
);

export default Header;