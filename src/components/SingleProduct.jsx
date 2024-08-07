import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
const SingleProduct = ({
  productsAll,
  hoveredProduct,
  handleMouseOver,
  handleMouseOut,
  width,
}) => {
  return (
    <div className="products">
      {productsAll.map((product, index) => {
        const { free, tooltip, Dimage, Himage, name, newPrice, oldPrice } =
          product;
        const isHovered = hoveredProduct === index;
        return (
          <div
            className="product"
            key={index}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
            style={{ width: `${width}` }}
          >
            <div className="product-pic">
              <img src={isHovered ? Himage : Dimage} alt="" />
              <span
                className={`toltip ${tooltip === "SALE" ? "toltip2" : null}`}
              >
                {tooltip}
              </span>
              <div className="quick-btn">
                <button>QUICK VIEW</button>
                <button>QUICK SHOP</button>
              </div>
              <div className="wish-com">
                <span>
                  <CiHeart className="wish-com-icon" />
                </span>
                <span>
                  <IoIosGitCompare className="wish-com-icon" />
                </span>
              </div>
            </div>
            <div className="product-desc">
              <span className="pd-name">{name}</span>
              <p>
                <span style={{ marginRight: "5px" }}>{newPrice}</span>{" "}
                <span>
                  <del style={{ opacity: "0.7", marginRight: "5px" }}>
                    {oldPrice}
                  </del>
                </span>{" "}
                <span className="offer">{free}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
