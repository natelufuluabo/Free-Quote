import React, { useState } from "react";
import './NavbarComponent.css';
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [menuClosed, setMenuClosed] = useState(true);
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
                <button 
                    className="responsive-button"
                >
                    {
                        menuClosed && 
                        <i 
                            onClick={() => {
                                setMenuClosed(false);
                                setMenuOpened(true);
                            }} 
                            className="fa fa-bars bars"
                        >
                        </i>
                    }
                    {
                        menuOpened && 
                        <i 
                            onClick={() => {
                                setMenuOpened(false);
                                setMenuClosed(true);
                            }} 
                            className="fa-solid fa-xmark cross"
                        >
                        </i>
                    }
                </button>
            </nav>
            {   menuOpened &&
                <div className="responsive-menu-container">
                    <Link 
                        onClick={() => {
                            setMenuClosed(true);
                            setMenuOpened(false);
                        }} 
                        to='/' className="responsive-link"
                    >
                        Get a quote
                    </Link>
                    <hr></hr>
                    <Link 
                        onClick={() => {
                            setMenuClosed(true);
                            setMenuOpened(false);
                        }} 
                        to='/applications' className="responsive-link"
                    >
                        Applications
                    </Link>
                </div>
            }
        </header>
    )
}

export default NavbarComponent;