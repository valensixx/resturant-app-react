import React from "react";
import "./Chef.css";
import { images, data } from '../../data';
import { SubHeading } from "../../components";

export default function Chef(){
    return(
        <div className="app-bg app-wrapper section-padding">
            <div className="app-wrapper-img app-weapper-img-reverce">
                <img src={images.chef} alt="chef img" />
            </div>

            <div className="app-wrapper-info">
                <SubHeading title="Chef's word"/>
                <h1 className="headtext-cormorant">What we belive in</h1>
            </div>
        </div>
    );
}