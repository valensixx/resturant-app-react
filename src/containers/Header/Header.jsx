import React from "react";
import "./Header.css";
import { images } from "../../data/images";
import { Subheading } from "../../components/SubHeading/Subheading";

export default function Header(){
    return(
        <div className="app-header app-wrapper section-padding" id="home">
            <div className="app-wrapper-info">
                <Subheading />
            </div>

            <div className="app-wrapper-img">

            </div>
        </div>
    );
}