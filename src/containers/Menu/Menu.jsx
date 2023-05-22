import React from "react";
import "./Menu.css";
import { images, data } from '../../data';
import { SubHeading, Menuitem } from "../../components";

export default function Menu() {
  return (
    <div className="app-specialMenu flex-center section-padding" id="menu">
      <div className="app-specialMenu-title">
        <SubHeading title="Menu That Fits Your Pallate" />
        <h1 className="headtext-cormorant">Today's Special</h1>
      </div>

      <div className="app-specialMenu-menu">
        <div className="app-specialMenu-menu-wine flex-center">
          <p className="app-specialMenu-menu-heading">Wine & Beer</p>
          <div className="app-specialMenu-menu-items">
            {data.wines.map((wine, index) => (
              <Menuitem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>
        <div className="app-specialMenu-menu-img">
          <img src={images.menu} alt="menu img" />
        </div>
        <div className="app-specialMenu-menu-cocktails flex-center">
          <p className="app-specialMenu-menu-heading">Cocktails</p>
          <div className="app-menu-menu-items">
            {data.cocktails.map((cocktail, index) => (
              <Menuitem key={cocktail.title} price={cocktail.price} title={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <button type="button" className="custom-button">View more</button>
      </div>
    </div>
  );
}