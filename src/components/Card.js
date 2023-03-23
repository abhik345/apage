import React from "react";
import "./Card.css";

const Card = ({ title, image, description }) => {
  return (
    <div className="card-container">
      <div className="card">
        <h4 className="card-title">{title}</h4>
        <p className="card-description">{description}</p>
        <img src={image} alt={title} className="card-image" />
      </div>
    </div>
  );
};

export default Card;
