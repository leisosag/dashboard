import React from "react";
import "./MediaCard.css";

const MediaCard = ({
  followers,
  typeFoll,
  amountFoll,
  user,
  arrow,
  media,
  status,
}) => {
  return (
    <div className="card">
      <div className="linea-media"></div>
      <div className="card-body">
        <div className="details-media">
          <img src={media} alt="icon" />
          <h6>{user}</h6>
        </div>
        <h3 className="card-title">{followers}</h3>
        <h5 className="card-text">{typeFoll}</h5>
        <div className={status ? "stats-media up" : "stats-media down"}>
          <img src={arrow} alt="icono flecha" />
          <p>{amountFoll} Today</p>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
