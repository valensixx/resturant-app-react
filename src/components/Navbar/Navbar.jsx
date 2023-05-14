import React from "react";
import "./Navbar.css";

//here i will inport icons and images later on the project
//import {HamburgerMenu} from 'react-icons/';
//import {OutlineResturantMenu} from 'react-icons/';
//import images from '../../constants/images';
//<div className="app-navbar-smallscreen">
//<HamburgerMenu color="#fff" fontsize={27} onClick={()=>{}}/>               
//</div>  

export default function Navbar(){
    return(
        <nav className="app-navbar">
            <div className="app-navbar-logo">
                <img src="{images.logo}" alt="app logo" />
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
        </nav>
    );
}