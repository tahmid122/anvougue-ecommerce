import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
const UnisversalPtop = ({ pageName }) => {
  return (
    <section id="univarsal">
      <h2>{pageName}</h2>
      <p>
        Homepage
        <span>
          <MdKeyboardArrowRight className="uniIcon" /> {pageName}
        </span>
      </p>
    </section>
  );
};

export default UnisversalPtop;
