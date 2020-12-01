import React from "react";
import "./Stats.css";

const Stats = ({ title, icono, cant, porc, arrow, status }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row stats-categoria">
          <h6>{title}</h6>
          <img src={icono} alt="icono" />
        </div>
        <div className="row stats-cantidad pt-3">
          <h3 className="card-title">{cant}</h3>
          <div className={status ? "stats-media up" : "stats-media down"}>
            <img src={arrow} alt="icono flecha" />
            <p>{porc}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
