import React from "react";
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl,size}) => {
  return (
     <div
        style={{
           backgroundImage:`url(${imageUrl})`
        }}
        className={`${size} menu-item`}>
      <div className="content">
        <h2>{title}</h2>
        <span>Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
