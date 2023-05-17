import React from "react";
import "./Header.css";
import {images} from '../../constants';
import {SubHeading} from '../../components';

export default function Header(){
    return(
        <div className="app-header app-wrapper section-padding" id="home">
            <div className="app-wrapper-info">
                <SubHeading />
            </div>

            <div className="app-wrapper-img">

            </div>
        </div>
    );
}