import React from "react";
import UnisversalPtop from "./UnisversalPtop";
import Store from "./Store";
import Footer from "./Footer";

const Stores = () => {
  return (
    <section id="storeList">
      <UnisversalPtop pageName="Store List" />
      <div className="stores">
        <Store image="/images/s1.webp" />
        <Store reverse="reverse" image="/images/s2.webp" />
        <Store image="/images/s3.webp" />
      </div>
      <Footer />
    </section>
  );
};

export default Stores;
