import React from "react";
import MediaCard from "./MediaCard";
import FlechaDown from "../images/icon-down.svg";
import FlechaUp from "../images/icon-up.svg";
import IconInstagram from "../images/icon-instagram.svg";
import IconTwitter from "../images/icon-twitter.svg";
import IconFacebook from "../images/icon-facebook.svg";
import IconYoutube from "../images/icon-youtube.svg";

const MediaCardsContainer = () => {
  const lines = ["facebook", "twitter", "instagram", "youtube"];

  return (
    <div className="container pt-4 pb-2">
      <div className="row">
        <div className="col-md-3 pb-4">
          <MediaCard
            followers="1987"
            typeFoll="FOLLOWERS"
            amountFoll="12"
            arrow={FlechaUp}
            user="@nathanf"
            media={IconFacebook}
            status={true}
            line={lines[0]}
          />
        </div>
        <div className="col-md-3 pb-4">
          <MediaCard
            followers="1044"
            typeFoll="FOLLOWERS"
            amountFoll="99"
            arrow={FlechaUp}
            user="@nathanf"
            media={IconTwitter}
            status={true}
            line={lines[1]}
          />
        </div>
        <div className="col-md-3 pb-4">
          <MediaCard
            followers="11k"
            typeFoll="FOLLOWERS"
            amountFoll="1099"
            arrow={FlechaUp}
            user="@realnathanf"
            media={IconInstagram}
            status={true}
            line={lines[2]}
          />
        </div>
        <div className="col-md-3 pb-4">
          <MediaCard
            followers="8239"
            typeFoll="SUBSCRIBERS"
            amountFoll="144"
            arrow={FlechaDown}
            user="Nathan F."
            media={IconYoutube}
            status={false}
            line={lines[3]}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaCardsContainer;
