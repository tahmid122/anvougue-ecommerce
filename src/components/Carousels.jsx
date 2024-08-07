import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousels = () => {
  return (
    <div>
      <Carousel
        data-bs-theme="dark"
        prevIcon=""
        nextIcon=""
        interval="2000"
        indicators="false"
      >
        <Carousel.Item>
          <div className="caro-img-box">
            <div className="caro-left">
              <span>SALE! UP TO 50% OFF!</span>
              <h1>Summer Sale</h1>
              <h1>Collections</h1>
              <a href="#" className="shop-now">
                SHOP NOW
              </a>
            </div>
            <div className="caro-right">
              <img src="images/carousel (1).png" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="caro-img-box">
            <div className="caro-left">
              <span>SALE! UP TO 50% OFF!</span>
              <h1>Fashion For</h1>
              <h1>Every Occasion</h1>
              <a href="#" className="shop-now">
                SHOP NOW
              </a>
            </div>
            <div className="caro-right">
              <img src="images/carousel (3).png" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="caro-img-box">
            <div className="caro-left">
              <span>SALE! UP TO 50% OFF!</span>
              <h1>Stylish Looks For</h1>
              <h1>Any Season</h1>
              <a href="#" className="shop-now">
                SHOP NOW
              </a>
            </div>
            <div className="caro-right">
              <img src="images/carousel (2).png" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
