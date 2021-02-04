import React, { useState } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../Images/logo-transparent.png';


function NavBar() {
    const currLocation = useLocation().pathname;
    const [scroll, setScorll] = useState("before-scroll-nav")
    let handleScroll = () => {
        window.scrollY > 200 ? setScorll('after-scroll-nav') : setScorll('before-scroll-nav')
    }

    window.addEventListener('scroll', handleScroll);
    // if pathname cantains admin then show nothing
    if (currLocation.includes("/admin")) return null;

    return <Navbar id="nav" expand="lg" className={scroll} fixed="top">
        <Link to="/" className="navbar-brand"><Image src={logo} height="70" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavLink exact to="/" activeClassName="active-nav" className="nav-link">Home</NavLink>
                <NavLink exact to="/tech" activeClassName="active-nav" className="nav-link">Technologies</NavLink>
                <NavLink exact to="/about" activeClassName="active-nav" className="nav-link">About</NavLink>
                <NavLink exact to="/services" activeClassName="active-nav" className="nav-link">Services</NavLink>
                <NavLink exact to="/contact" activeClassName="active-nav" className="nav-link">Contact</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}
export default NavBar;
