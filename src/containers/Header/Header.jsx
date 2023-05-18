import React from "react";
import "./Header.css";
import images from '../../data/images';
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app-header app-wrapper section-padding" id="home">
    <div className="app-wrapper-info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app-header-h1">The Key To Fine Dining</h1>
      <p className="p-opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="custom-button">Explore Menu</button>
    </div>

    <div className="app-header-img">
      <img src={images.welcome} alt="header-img" />
    </div>
  </div>
);

export default Header;