import React from "react";
import "./Subheading.css";
import { images } from "../../constants";

export default function Subheading({ title }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className="p-cormorant">{title}</p>
      <img src={images.spoon} alt="spoon image" className="spoon-img" />
    </div>
  );
}