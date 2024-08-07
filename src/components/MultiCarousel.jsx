import React from "react";
import ExploreItems from "./ExploreItems";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const MultiCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const handleOver = (e) => {
    e.target.style.backgroundColor = "black";
    e.target.style.color = "white";
    e.target.style.transition = "all 0.5s";
  };
  const handleOut = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
    e.target.style.transition = "all 0.5s";
  };
  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "blue",
        color: "white",
        position: "absolute",
        left: "50px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "white",
        color: "black",
        border: "none",
        fontSize: "30px",
      }}
      onMouseOver={handleOver}
      onMouseOut={handleOut}
    >
      {"<"}
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "blue",
        color: "white",
        position: "absolute",
        right: "50px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "white",
        color: "black",
        border: "none",
        fontSize: "30px",
      }}
      onMouseOver={handleOver}
      onMouseOut={handleOut}
    >
      {">"}
    </button>
  );
  return (
    <div className="slider-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        className="ccenter"
      >
        {ExploreItems.map((exItem, i) => {
          const { image, innerText } = exItem;
          return (
            <div className="slide-item" key={i}>
              <img src={image} alt="" />
              <span>{innerText}</span>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
