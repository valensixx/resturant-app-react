import React from "react";
import "./Header.css";
import images from '../../data/images';
import { SubHeading } from "../../components";


export default function Header(){
    return(
        <div className="app-header app-wrapper section-padding" id="home">
            <div className="app-wrapper-info">
                <SubHeading title="Chase the new flavour" />
                <h1 className="app-header-h1">The Key To Fine Dining </h1>
                <p className="p-opensans" style={{margin:'2rem 0'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button type="button" className="custom-button">Explore Menu</button>
            </div>

            <div className="app-wrapper-img">
                <img src={images.welcome} alt="welcome image"/>
            </div>
        </div>
    );
}