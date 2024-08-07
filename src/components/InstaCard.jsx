import React from "react";
import { BsInstagram } from "react-icons/bs";
const InstaCard = ({ image }) => {
  return (
    <div className="iCard">
      <img src={image} alt="" className="ins-img" />
      <div className="show_insta">
        <div className="ii-hov">
          <BsInstagram className="instaIcon" />
        </div>
      </div>
    </div>
  );
};

export default InstaCard;
