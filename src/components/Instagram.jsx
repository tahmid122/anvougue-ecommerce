import React from "react";
import InstaCard from "./InstaCard";

const Instagram = () => {
  return (
    <section id="instagram">
      <h2>Anvogue on Instagram</h2>
      <p>#Anvoguetheme</p>
      <div className="ins-flex">
        <InstaCard image="/images/image_12.png" />
        <InstaCard image="/images/image_24.png" />
        <InstaCard image="/images/16-1.webp" />
        <InstaCard image="/images/15-1.webp" />
        <InstaCard image="/images/image_16.png" />
      </div>
    </section>
  );
};

export default Instagram;
