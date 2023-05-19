import React from "react";
import "./AboutUs.css";
import images from '../../data/images';

export default function AboutUs(){
    return(
        <div className="app-aboutus app-bg flex-center section-padding" id="about">
            <div className="app-aboutus-overlay flex-center">
                <img src={images.V} alt="V letter"/>
            </div>

            <div className="app-aboutus-content flex-center">
                <div className="app-aboutus-content-about">
                    <h1 className="headtext-comorant">About Us</h1>
                    <img src={images.spoon} alt="spoon" className="spoon-img"/>
                    <p className="p-opensans">
                        Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book.
                    </p>
                    <button type="button" className="custom-button">Know More</button>
                </div>

                <div className="app-aboutus-content-knife">
                    <img src={images.knife} alt="knife image"/>
                </div>

                <div className="app-aboutus-content-history">
                    <h1 className="headtext-comorant">Our History</h1>
                    <img src={images.spoon} alt="spoon" className="spoon-img"/>
                    <p className="p-opensans">
                        Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book.
                    </p>
                    <button type="button" className="custom-button">Know More</button>
                </div>

            </div>
        </div>
    );
}