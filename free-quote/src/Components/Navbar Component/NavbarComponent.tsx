import React from "react";
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <nav className='navbar'>
            <span className="navbar-logo">nest<span className="letter-o" >o</span></span>
            <span>
                <Link to='/'>
                    <button>Get a quote</button>
                </Link>
                <button>Applications</button>
                <span className="navbar-language">FR</span>
            </span>
        </nav>
    )
}

export default NavbarComponent;