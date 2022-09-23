import React from "react";
import './NavbarComponent.css';
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <header>
            <nav className='navbar'>
                <h1 className="navbar-logo">nest<span className="letter-o" >o</span></h1>
                <section className="navbar-buttons-container">
                    <Link to='/'>
                        <button className="navbar-getaquote-button">Get a quote</button>
                    </Link>
                    <Link to='/applications'>
                        <button className="navbar-applications-button">Applications</button>
                    </Link>
                </section>
            </nav>
        </header>
    )
}

export default NavbarComponent;