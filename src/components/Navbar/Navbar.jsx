import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';


export default function Navbar() {
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
            <GiHamburgerMenu color="#fff" fontsize={27} onClick={()=>{}}/> 
                <ul className="app-navbar-smallscrean-links">
                    <li className="p-opensans"><a href="#home">Home</a></li>
                    <li className="p-opensans"><a href="#about">About</a></li>
                    <li className="p-opensans"><a href="#menu">Menu</a></li>
                    <li className="p-opensans"><a href="#awards">Awards</a></li>
                    <li className="p-opensans"><a href="#contacts">Contacts</a></li>
                </ul>
            </div>

        </nav>
    );
}