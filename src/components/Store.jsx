import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
const Store = ({ reverse, image }) => {
  return (
    <div className={`store ${reverse ? "reverse" : null}`}>
      <div className="store-left">
        <img src={image} alt="" />
      </div>
      <div className="store-right">
        <h2>New York Office</h2>
        <div className="sr-left">
          <div className="srl-1">
            <b>Address:</b>
            <br />
            <span>
              2163 Phillips Gap Rd West <br /> Jefferson, North Carolina
            </span>
          </div>
          <div className="srl-1">
            <b>Information:</b>
            <br />
            <span>+1 666 234 8888</span>
            <br />
            <span>hi.avitex@gmail.com</span>
          </div>
        </div>
        <div className="srl-1">
          <b>Our Social Media:</b>
          <div className="sm-icons">
            <span>
              <FaFacebookF className="iicons" />
            </span>
            <span>
              <FaInstagram className="iicons" />
            </span>
            <span>
              <FaYoutube className="iicons" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
