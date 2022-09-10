import React from "react";
import './NavbarComponent.css';
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <nav className='navbar'>
            <span className="navbar-logo">nest<span className="letter-o" >o</span></span>
            <span className="navbar-buttons-container">
                <Link to='/'>
                    <button className="navbar-getaquote-button">Get a quote</button>
                </Link>
                <Link to='/applications'>
                    <button className="navbar-applications-button">Applications</button>
                </Link>
            </span>
        </nav>
    )
}

export default NavbarComponent;