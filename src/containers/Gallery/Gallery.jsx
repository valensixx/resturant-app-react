import React from "react";
import "./Gallery.css";
import { images} from '../../data';
import { SubHeading } from "../../components";
import {BsInstagram, BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';

export default function Galery(){
    return(
        <div className="app-gallery flex-center">
            <div className="app-gallery-content">
                <SubHeading title="Instagram"/>
                <h1 className="headtext-cormorant">Photo Gallery</h1>
                <p className="p-opensans" style={{color:'#aaa', marginTop: '2rem'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <button type="button" className="custom-button">
                    Learn More
                </button>
            </div>
        </div>
    );
}