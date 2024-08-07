import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import Cservices from "./Cservices";
import MultiCarousel from "./MultiCarousel";
const ProDatas = [
  {
    showImage: "images/image_17.png",
  },
  {
    showImage: "images/image_12.png",
  },
  {
    showImage: "images/pro3.webp",
  },
  {
    showImage: "images/pro4.webp",
  },
];
import CartProducts2 from "./CartProducts2";
const Sizes = ["S", "M", "L", "XL"];
const SpeDesc = ["Description", "Specifications"];
const ProductFullPage = () => {
  const [mainImage, setMainImage] = useState("/images/image_17.png");
  const [activeStyle, setActiveStyle] = useState(0);
  const [sizeName, setSizeName] = useState("");
  const [sizeValue, setSizeValue] = useState(1);
  const [activeSpdStyle, setActiveSpdStyle] = useState(0);
  const [descDisplay, setDescDisplay] = useState("Description");
  console.log(descDisplay);
  const hanleProImage = (img) => {
    setMainImage(img);
    console.log(img);
  };
  return (
    <section id="pro-full-page">
      <div className="pr-default">
        <p>
          <span>
            Homepage <MdKeyboardArrowRight /> Product <MdKeyboardArrowRight />
          </span>
          Product Default
        </p>
        <span className="next-product">
          Next Product
          <TfiArrowCircleRight className="next-pro-icon" />
        </span>
      </div>
      <div className="product-container">
        <div className="pro-body">
          <div className="pro-image">
            <img src={mainImage} alt="" />
            <div className="pro-upper-images">
              {ProDatas.map((pro, index) => {
                const { showImage } = pro;
                return (
                  <img
                    key={index}
                    id={activeStyle === index ? "activeStyle" : null}
                    src={showImage}
                    onClick={() => {
                      hanleProImage(showImage);
                      setActiveStyle(index);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="pro-desc">
            <div className="pro-name">
              <div className="pro-n-left">
                <span>Top</span>
                <h3>Mesh Shirt</h3>
              </div>
              <div className="pro-n-right">
                <CiHeart className="heatIcon" />
              </div>
            </div>
            <div className="pro-others">
              <div className="review">
                <span>
                  <FaStar className="starIcon" />
                  <FaStar className="starIcon" />
                  <FaStar className="starIcon" />
                  <FaStar className="starIcon" />
                  <FaStar className="starIconDark" />
                  <span>(1,234 reviews)</span>
                </span>
              </div>
              <div className="pro-price">
                <h4>$45.00</h4>
              </div>
              <div className="pro-s desc">
                <p
                  style={{
                    textAlign: "justify",
                    opacity: "0.7",
                    marginTop: "20px",
                  }}
                >
                  Keep your home organized, yet elegant with storage cabinets by
                  Onita Patio Furniture. Traditionally designed, they are
                  perfect to be used in the any place where you need to store.
                </p>
              </div>
              <hr style={{ marginTop: "25px" }} />
              <div className="size">
                <span className="size-text">Size : {sizeName}</span>
                <br />
                <div className="size-al">
                  {Sizes.map((size, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => {
                          setSizeName(size);
                        }}
                        className={sizeName === size ? "size-active" : null}
                      >
                        {size}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="quantity-div">
                <span style={{ margin: "20px 0", display: "inline-block" }}>
                  Quantity :
                </span>
                <br />
                <div className="input-cart">
                  <div className="quan-input" style={{ width: "29%" }}>
                    <button
                      className="input-min"
                      onClick={(e) => {
                        setSizeValue(sizeValue - 1);
                      }}
                      disabled={sizeValue === 0 ? true : false}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="input-style"
                      value={sizeValue}
                      readOnly
                    />
                    <button
                      className="input-plus"
                      onClick={() => {
                        setSizeValue(sizeValue + 1);
                      }}
                      disabled={sizeValue === 10 ? true : false}
                    >
                      +
                    </button>
                  </div>
                  <div className="add-cart" style={{ width: "68%" }}>
                    <button
                      onClick={() => {
                        CartProducts2.push({
                          Dimage: mainImage,
                          name: "Meghla Shirt",
                          newPrice: 20,
                        });
                        console.log(CartProducts2);
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <button className="buyBtn">BUY IT NOW</button>
              </div>
              <div className="com-share">
                <div>
                  <IoIosGitCompare className="comShareIcon" />
                </div>
                <span>Compare</span>
                <div>
                  <FaShareAlt className="comShareIcon" />
                </div>
                <span>Share Products</span>
              </div>
              <hr style={{ margin: "30px 0", display: "block" }} />
              <div className="payment-getway">
                <h5>Guarenteed Safe Checkout</h5>
                <div className="pg-images">
                  <img src="/images/Frame-0.webp" alt="" />
                  <img src="/images/Frame-1.webp" alt="" />
                  <img src="/images/Frame-2.webp" alt="" />
                  <img src="/images/Frame-3.webp" alt="" />
                  <img src="/images/Frame-4.webp" alt="" />
                  <img src="/images/Frame-5.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="specifications-description">
          <div className="spd-head">
            {SpeDesc.map((spD, index) => {
              return (
                <h4
                  key={index}
                  onClick={() => {
                    setActiveSpdStyle(index);
                    setDescDisplay(spD);
                  }}
                  id={activeSpdStyle === index ? "activeSpdStyle" : null}
                >
                  {spD}
                </h4>
              );
            })}
          </div>
          <div
            className={`description ${
              descDisplay === "Description" ? "show-display" : null
            }`}
          >
            <div style={{ display: "flex", gap: "30px" }}>
              <div className="d-left">
                <h5>Description</h5>
                <p style={{ textAlign: "start" }}>
                  Keep your home organized, yet elegant with storage cabinets by
                  Onita Patio Furniture. These cabinets not only make a great
                  storage units, but also bring a great decorative accent to
                  your decor. Traditionally designed, they are perfect to be
                  used in the hallway, living room, bedroom, office or any place
                  where you need to store or display things. Made of high
                  quality materials, they are sturdy and durable for years.
                  Bring one-of-a- kind look to your interior with furniture from
                  Onita Furniture!
                </p>
              </div>
              <div className="d-right">
                <h5>About This Products</h5>
                <ul>
                  <li>
                    <p>
                      Lorem ipsum, dolor sit amet Hello jelo kajanb hdi
                      consectetur adipisicing elit.
                    </p>
                  </li>
                  <li>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur hjaius tguas nalk
                      aase
                    </p>
                  </li>
                  <li>
                    <p>
                      ashddh hsudy punj UNST LAO uao8ds huydnj consectetur
                      adipisicing elit.
                    </p>
                  </li>
                  <li>
                    <p>
                      Lorem ddj uhsu qtws uiolak u8jsl aiudn iay hdakj elit.
                    </p>
                  </li>
                  <li>
                    <p>
                      agsaj basiuh gyasg sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <Cservices />
          </div>
          <div
            className={`specifications ${
              descDisplay === "Specifications" ? "show-display" : null
            }`}
          >
            <table>
              <tr>
                <td>Rating</td>
                <td>
                  <FaStar className="starIcon" />
                  <FaStar className="starIcon" />
                  <FaStar className="starIcon" />
                  <FaStar className="starIcon" />
                  <FaStar className="starIconDark" />
                </td>
              </tr>
              <tr>
                <td>Outer Shell</td>
                <td>100% Polyester</td>
              </tr>
              <tr>
                <td>Lining</td>
                <td>polyurethane</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>S,M,L,XL</td>
              </tr>
              <tr>
                <td>Colors</td>
                <td>Grey, Redm, Blue, Black</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div
        className="find-more"
        style={{ marginTop: "20px", textAlign: "center" }}
      >
        <h1 style={{ fontWeight: "bold", marginBottom: "-15px" }}>
          You May Find
        </h1>
        <MultiCarousel />
      </div>
    </section>
  );
};

export default ProductFullPage;
