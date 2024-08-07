import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import testDatas from "./TestiData";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="testimonial">
      <h2>What Aeople Are Saying</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={true}
        arrows={false}
      >
        {testDatas.map((singData, index) => {
          const { title, desc, name, date } = singData;
          return (
            <div className="testi-cards" key={index}>
              <span className="stars">
                <FaStar className="starIcon" />
                <FaStar className="starIcon" />
                <FaStar className="starIcon" />
                <FaStar className="starIcon" />
                <FaStar className="starIcon" />
              </span>
              <h5>{title}</h5>
              <p style={{ textAlign: "start" }}>{desc}</p>
              <span className="tName">{name}</span>
              <span className="tDate">{date}</span>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Testimonial;
