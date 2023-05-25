import React from "react";
import "./Laurels.css";
import { images, data } from '../../data';
import { SubHeading } from "../../components";

const AwardCard =()=>(  //this will be a local component
    <div>
        
    </div>
)

export default function Laurels(){
    return(
        <div className="bg-app app-wrapper section-padding" id="awards">
            <div className="app-wrapper-info">
                <SubHeading title="Awards & recognition" />
                <h1 className="headtext-cormorant">Our Laureals</h1>
                <div className="app-laurels-awards">
                    {data.awards.map((award) =><AwardCard award={award} key={award.title} /> )}
                </div>
            </div>

            <div className="app-wrapper-img">

            </div>
        </div>
    );
}