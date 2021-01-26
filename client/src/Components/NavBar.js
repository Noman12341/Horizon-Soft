import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../Images/horizon-logo.png';

function NavBar() {
    const currLocation = useLocation().pathname;

    // if pathname cantains admin then show nothing
    if (currLocation.includes("/admin")) return null;

    return <Navbar id="nav" expand="lg" sticky="top">
        <Link to="/" className="navbar-brand"><Image src={logo} height="70" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavLink exact to="/" activeClassName="active-nav" className="nav-link">Home</NavLink>
                <NavLink exact to="/tech" activeClassName="active-nav" className="nav-link">Technologies</NavLink>
                <NavLink exact to="/about" activeClassName="active-nav" className="nav-link">About</NavLink>
                <NavLink exact to="/services" activeClassName="active-nav" className="nav-link">Services
                {/* class for on hover  ser-drop-down */}
                    {/* <ul className="ser-drop-down-cont">
                        <li><Link to="/home">service 1</Link></li>
                        <li><Link to="/home">service 1</Link></li>
                        <li><Link to="/home">service 1</Link></li>
                        <li><Link to="/home">service 1</Link></li>
                        <li><Link to="/home">service 1</Link></li>
                        <li><Link to="/home">service 1</Link></li>
                        <li><Link to="/home">service 1</Link></li>
                        <li><Link to="/home">service 1</Link></li>
                    </ul> */}
                </NavLink>
                <NavLink exact to="/contact" activeClassName="active-nav" className="nav-link">Contact</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}
export default NavBar;
