import React from "react";
import UnisversalPtop from "./UnisversalPtop";
import Cservices from "./Cservices";
import Instagram from "./Instagram";
import UpperFoot from "./UpperFoot";
import Footer from "./Footer";

const About = () => {
  return (
    <section id="about">
      <UnisversalPtop pageName="About Us" />
      <div className="about-bottom">
        <h2>
          I'm Obsessed With The Dress Pippa Middleton Wore To Her Brother's
          Wedding.
        </h2>
        <p>
          Kim Kardashian West needs no introduction. In the 14 years since she
          first graced our screens in Keeping Up With The Kardashians, she has
          built her KKW beauty empire, filmed her show, wrapped her show, become
          a billionaire, studied law, campaigned for the rights of death row
          inmates, travelled the world to attend events such as Paris Fashion
          Week, raised four children and launched her wildly successful
          shapewear brand SKIMS.
        </p>
      </div>
      <div className="about-images">
        <img src="/images/image_21.png" alt="" />
        <img src="/images/image_23.png" alt="" />
        <img src="/images/image_24.png" alt="" />
      </div>
      <Cservices />
      <div className="sign-up">
        <div className="s-details">
          <h1>Sign Up and Get 10% Off</h1>
          <p>Sian up for early sale access. new in. promotions and more</p>
          <div className="sign-input">
            <input type="email" placeholder="Enter your e-mail" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <Instagram />
      <UpperFoot />
      <Footer />
    </section>
  );
};

export default About;
