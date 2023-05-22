import React from "react";
import "./Menuitem.css";

export default function Menuitem({ title, price, tags }) {
  return (
    <div className="app-menuitem">
      <div className="app-menuitem-head">
        <div className="app-menuitem-name">
          <p className="p-cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        </div>

        <div className="app-menuitem-dash" />

        <div className="app-menuitem-price">
          <p className="p-cormorant">{price}</p>
        </div>
      </div>

      <div className="app-menuitem-sub">
        <p className="p-opensans" style={{ color: '#AAA' }}>{tags}</p>
      </div>
    </div>
  );
}