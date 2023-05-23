import React from "react";
import "./Chef.css";
import { images, data } from '../../data';
import { SubHeading } from "../../components";

export default function Chef() {
    return (
        <div className="app-bg app-wrapper section-padding">
            <div className="app-wrapper-img app-weapper-img-reverce">
                <img src={images.chef} alt="chef img" />
            </div>

            <div className="app-wrapper-info">
                <SubHeading title="Chef's word" />
                <h1 className="headtext-cormorant">What we belive in</h1>

                <div className="app-chef-content">
                    <div className="app-chef-content-quote">
                        <img src={images.quote} alt="quote img" />
                        <p className="p-opensans">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <p className="p-opensans">
                        It has survived not only five centuries, 
                        but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                        It was popularised in the 1960s with the release 
                        of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software 
                        like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="app-chef-sign">
                    <p>Ivan Zvezdev</p>
                    <p className="p-opensans">Chef & Founder</p>
                    <img src={images.sign} out="sign image"/>
                </div>
            </div>
        </div>
    );
}