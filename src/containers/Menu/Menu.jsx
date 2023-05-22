import React from "react";
import "./Menu.css";
import {images, data} from '../../data';
import { SubHeading, Menuitem } from "../../components";


export default function Menu(){
    return(
        <div className="app-specialMenu flex-center section-padding" id="menu">
            <div className="app-specialMenu-title">
                <SubHeading title="Menu That Fits Your Pallate"/>
                <h1 className="headtext-cormorant">Today's Special</h1>
            </div>

            <div className="app-menu-menu">
                <div className="app-menu-menu-wine flex-center">
                    <p className="app-menu-menu-heading">Wine & Beer</p>
                    <div className="app-menu-menu-items">
                        {data.wines.map((wine, index)=>(
                            <p>{wine.title}</p>
                        ))}
                    </div>
                </div>
                <div className="app-menu-menu-img">
                    <img sec={images.menu} menu="menu img"/>
                </div>
                <div className="app-menu-menu-cocktails flex-center">
                    <p className="app-menu-menu-heading">cocktails & Beer</p>
                    <div className="app-menu-menu-items">
                        {data.cocktails.map((cocktails, index)=>(
                            <p>{cocktails.title}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{marginTop:'15px'}}>
                <button type="button" className="custom-button">View more</button>            
            </div>
        </div>        
    );
}