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
                <Link to='/applications'>
                    <button>Applications</button>
                </Link>
            </span>
        </nav>
    )
}

export default NavbarComponent;