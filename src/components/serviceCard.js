import React from "react";

const serviceCard = ({ img, title, info }) => {
  return (
    <article className="card">
      <div className="img-container">
        <img src={img} alt="title" />
      </div>
      <div className="card-info">
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default serviceCard;
