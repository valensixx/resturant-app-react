import React from "react";
import "./Subheading.css";
import {images} from '../../constants';

export default function Subheading(){
    return(
        <div style ={{marginBottom: '1rem'}}>
            <p className="p-cormorant">TITLE</p>
            <img src={images.spoon} alt="spoon image" className="spoon-img" />
        </div>
    );
}