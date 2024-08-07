import React from "react";

import Carousels from "./Carousels";
import WhatsNew from "./WhatsNew";
import Explore from "./Explore";
import BestArrival from "./BestArrival";
import Cservices from "./Cservices";
import Testimonial from "./Testimonial";
import Instagram from "./Instagram";
import UpperFoot from "./UpperFoot";
import Footer from "./Footer";
const Home = () => {
  return (
    <section id="home">
      <Carousels />
      <WhatsNew />
      <Explore />
      <BestArrival />
      <Cservices />
      <Testimonial />
      <Instagram />
      <UpperFoot />
      <Footer />
    </section>
  );
};

export default Home;
