import React from "react";

const NavbarComponent = () => {
    return (
        <nav className='navbar'>
            <span className="navbar-logo">nest<span className="letter-o" >o</span></span>
            <span>
                <button>Get a quote</button>
                <button>Applications</button>
                <span className="navbar-language">FR</span>
            </span>
        </nav>
    )
}

export default NavbarComponent;