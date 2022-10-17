import React from "react";
import "./business.scss";

export const Business = ({businessx}) => {
  return (
    <div className="Business">
      <div className="image-container">
        <img src={businessx.imageSrc} alt="" />
      </div>
      <h2>{businessx.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{businessx.address}</p>
          <p>{businessx.city}</p>
          <p>{`${businessx.state} ${businessx.zipCode}`} </p>
        </div>
        <div className="Business-reviews">
          <h3>{businessx.category}</h3>
          <h3 className="rating">{businessx.rating} stars</h3>
          <p>{businessx.reviewCount}</p>
        </div>
      </div>
    </div>
  );
};
