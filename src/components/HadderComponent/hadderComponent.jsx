import React from "react";
import "./style.css";
export const HadderComponent = ({ path, title, description }) => {
  return (
    <div className="container">
      <img className="main-img" src={path} alt="" />
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
        autem, laboriosam minima a error necessitatibus similique quae,
        accusamus, facere deserunt officia tempore ab eum maiores!
      </div>
    </div>
  );
};
