import React, { useState } from "react";
import allProducts from "./AllProducts";
const categories = ["TOP", "T-SHIRT", "DRESS", "SETS", "SHIRT"];

import SingleProduct from "./SingleProduct";

const WhatsNew = () => {
  const [catName, setcatName] = useState("");
  const [productsAll, setProductsAll] = useState(allProducts);
  const filteredProducts = (proName) => {
    const finalFilter = allProducts.filter((fPro) => {
      return fPro.category === proName;
    });
    setProductsAll(finalFilter);
  };
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredProduct(index);
  };

  const handleMouseOut = () => {
    setHoveredProduct(null);
  };

  return (
    <section id="whats-new">
      <h1>What's New</h1>
      <div className="select-gallary">
        {categories.map((category) => {
          return (
            <button
              className={`catBtn ${catName === category ? "active-cat" : null}`}
              key={new Date().getMilliseconds().toString() * Math.random()}
              name={category}
              onClick={() => {
                setcatName(category);
                filteredProducts(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <SingleProduct
        productsAll={productsAll}
        hoveredProduct={hoveredProduct}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
    </section>
  );
};

export default WhatsNew;
