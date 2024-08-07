import React from "react";

import serviceData from "./CservicesData";

const Cservices = () => {
  return (
    <section id="Cservices">
      {serviceData.map((sData, index) => {
        const { icon, title, desc } = sData;

        return (
          <div className="cs-cards" key={index}>
            <div className="cs-icons">{icon}</div>
            <h5>{title}</h5>
            <p>{desc}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Cservices;
