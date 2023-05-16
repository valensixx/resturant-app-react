import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../data/images';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="app-navbar">
            <div className="app-navbar-logo">
                <img src={logo} alt="app logo" />
            </div>
            <ul className="app-navbar-links">
                <li className="p-opensans"><a href="#home">Home</a></li>
                <li className="p-opensans"><a href="#about">About</a></li>
                <li className="p-opensans"><a href="#menu">Menu</a></li>
                <li className="p-opensans"><a href="#awards">Awards</a></li>
                <li className="p-opensans"><a href="#contacts">Contacts</a></li>
            </ul>
            <div className="app-navbar-login">
                <a href="#login" className="p-opensans">Log In / Register</a>
                <div />
                <a href="/" className="p-opensans">Table booking</a>
            </div>
            <div className="app-navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />

                {toggleMenu && (
                    <div className="app-navbar-smallscreen-overlay flex-center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)} />
                        <ul className="app-navbar-smallscrean-links">
                            <li className="p-opensans"><a href="#home">Home</a></li>
                            <li className="p-opensans"><a href="#about">About</a></li>
                            <li className="p-opensans"><a href="#menu">Menu</a></li>
                            <li className="p-opensans"><a href="#awards">Awards</a></li>
                            <li className="p-opensans"><a href="#contacts">Contacts</a></li>
                        </ul>
                    </div>
                )}
            </div>

        </nav>
    );
};

export default Navbar;