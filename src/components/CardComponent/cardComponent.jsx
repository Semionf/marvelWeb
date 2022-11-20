import React from "react";
import "./style.css";
export const CardComponent = ({ path, title, description }) => {
  return (
    <div className="content">
      <ul class="list-style">
        <li class="list-item-container">
          <img class="secondary-img" src={path} alt="" srcset="" />
          <div class="content">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
