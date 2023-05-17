import React from "react";
import "./Header.css";
import { images } from "../../data/images";
import { Subheading } from "../components/";

export default function Header(){
    return(
        <div className="app-header app-wrapper section-padding" id="home">
            <div className="app-wrapper-info">
                <Subheading title ="Chase the best flavour"/>
                <h1 className="app-header-h1">The Key To Fine Dining </h1>
            </div>

            <div className="app-wrapper-img">

            </div>
        </div>
    );
}