import React from "react";
import Stats from "./Stats";
import FlechaDown from "../images/icon-down.svg";
import FlechaUp from "../images/icon-up.svg";
import IconInstagram from "../images/icon-instagram.svg";
import IconTwitter from "../images/icon-twitter.svg";
import IconFacebook from "../images/icon-facebook.svg";
import IconYoutube from "../images/icon-youtube.svg";

const StatsContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 pb-4">
          <Stats
            title="Page Views"
            icono={IconFacebook}
            cant="87"
            porc="3"
            arrow={FlechaUp}
            status={true}
          />
        </div>
        <div className="col-md-3 pb-4">
          <Stats
            title="Likes"
            icono={IconFacebook}
            cant="52"
            porc="2"
            arrow={FlechaDown}
            status={false}
          />
        </div>
        <div className="col-md-3 pb-4">
          <Stats
            title="Likes"
            icono={IconInstagram}
            cant="5462"
            porc="2257"
            arrow={FlechaUp}
            status={true}
          />
        </div>
        <div className="col-md-3 pb-4">
          <Stats
            title="Profile Views"
            icono={IconInstagram}
            cant="52k"
            porc="1375"
            arrow={FlechaUp}
            status={true}
          />
        </div>
        <div className="col-md-3 pb-4">
          <Stats
            title="Retweets"
            icono={IconTwitter}
            cant="117"
            porc="303"
            arrow={FlechaUp}
            status={true}
          />
        </div>
        <div className="col-md-3 pb-4">
          <Stats
            title="Likes"
            icono={IconTwitter}
            cant="507"
            porc="553"
            arrow={FlechaUp}
            status={true}
          />
        </div>
        <div className="col-md-3 pb-4">
          <Stats
            title="Likes"
            icono={IconYoutube}
            cant="107"
            porc="19"
            arrow={FlechaDown}
            status={false}
          />
        </div>
        <div className="col-md-3 pb-4">
          <Stats
            title="Total Views"
            icono={IconYoutube}
            cant="1407"
            porc="12"
            arrow={FlechaDown}
            status={false}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;
