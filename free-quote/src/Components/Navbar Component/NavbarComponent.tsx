import React, { useState } from "react";
import './NavbarComponent.css';
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    const [menuRequested, setMenuRequested] = useState(false);
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
                <button onClick={() => setMenuRequested(!menuRequested)} className="responsive-button">
                <i className="fa fa-bars"></i>
                </button>
            </nav>
            {   menuRequested &&
                <div className="responsive-menu-container">
                    <Link to='/' className="responsive-link">
                        Get a quote
                    </Link>
                    <hr></hr>
                    <Link to='/applications' className="responsive-link">
                        Applications
                    </Link>
                </div>
            }
        </header>
    )
}

export default NavbarComponent;